/* global Game, OK */
/* global FIND_DROPPED_ENERGY, FIND_MY_STRUCTURES, FIND_STRUCTURES, FIND_CONSTRUCTION_SITES, FIND_HOSTILE_CREEPS */
/* global STRUCTURE_ROAD, STRUCTURE_WALL, STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_STORAGE */

function actionClosest(creep, findType, findOptions, filter, action) {
	var targets = creep.room.find(findType, findOptions);

	targets = _.filter(targets, filter);

	if (targets.length) {
		var target = creep.pos.findClosest(targets);

		creep.moveTo(target);
		return action(target);
	}
}

function repair(creep, structureType, filter) {
	var findType = FIND_STRUCTURES;

	var findOptions = {
		filter: { structureType: structureType }
	};

	filter = filter || function (r) {
		return r.hits < r.hitsMax;
	};

	actionClosest(creep, findType, findOptions, filter, function (target) {
		var status = creep.repair(target);

		if (status === OK) {
			creep.memory.target = target.id;
		}

		return status;
	});
}

function refuel(creep, structureType, filter) {
	var findType = FIND_MY_STRUCTURES;

	var findOptions = {
		filter: { structureType: structureType }
	};

	filter = filter || function (r) {
		var energy = r.store ? r.store.energy : r.energy;
		return energy > 0;
	};

	actionClosest(creep, findType, findOptions, filter, function (target) {
		target.transferEnergy(creep);
	});
}

function feed(creep, structureType, filter) {
	var findType = FIND_MY_STRUCTURES;

	var findOptions = {
		filter: { structureType: structureType }
	};

	filter = filter || function (r) {
		var energy = r.store ? r.store.energy : r.energy;
		return energy < r.energyCapacity;
	};

	actionClosest(creep, findType, findOptions, filter, function (target) {
		creep.transferEnergy(target);
	});
}

module.exports = {
	repairRoad: function (creep, filter) {
		repair(creep, STRUCTURE_ROAD, filter);
	},

	repairWall: function (creep, filter) {
		repair(creep, STRUCTURE_WALL, filter);
	},

	refuelExtension: function (creep, filter) {
		refuel(creep, STRUCTURE_EXTENSION, filter);
	},

	refuelStorage: function (creep, filter) {
		refuel(creep, STRUCTURE_STORAGE, filter);
	},

	feedSpawn: function (creep, filter) {
		feed(creep, STRUCTURE_SPAWN, filter);
	},

	feedExtension: function (creep, filter) {
		feed(creep, STRUCTURE_EXTENSION, filter);
	},

	collectEnergy: function (creep) {
		actionClosest(creep, FIND_DROPPED_ENERGY, null, null, function (target) {
			creep.pickup(target);
		});
	},

	build: function (creep) {
		actionClosest(creep, FIND_CONSTRUCTION_SITES, null, null, function (target) {
			creep.build(target);
		});
	},

	attack: function (creep) {
		actionClosest(creep, FIND_HOSTILE_CREEPS, null, null, function (target) {
			creep.attack(target);
		});
	}
};
