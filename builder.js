module.exports = function (creep) {
	var sites = creep.room.find(FIND_CONSTRUCTION_SITES);

	if (creep.carry.energy === 0) {
		creep.memory.action = 'refueling';
	} else if (sites.length) {
		creep.memory.action = 'building';
	} else {
		creep.memory.action = 'upgrading';
	}

	var actions = {
		'refueling': function () {
			creep.moveTo(Game.spawns.Spawn1);

			var amount = Game.spawns.Spawn1.energy > creep.carryCapacity;
			amount = amount ? creep.carryCapacity : Game.spawns.Spawn1.energy;

			Game.spawns.Spawn1.transferEnergy(creep, amount);
		},
		'upgrading': function () {
			var sites = creep.room.find(FIND_MY_STRUCTURES, {
				filter: { structureType: STRUCTURE_RAMPART }
			});

			var site = _.min(sites, function (s) {
				return s.hits;
			});

			creep.moveTo(site);
			creep.repair(site);
		},
		'building': function () {
			var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
			
			creep.moveTo(sites[0]);
			creep.build(sites[0]);
		}
	};

	actions[creep.memory.action]();
}
	