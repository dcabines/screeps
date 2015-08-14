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
			var extensions = creep.room.find(FIND_MY_STRUCTURES, {
				filter: { structureType: STRUCTURE_EXTENSION }
			});

			for (var index in extensions) {
				var extension = extensions[index];

				if (extension.energy > 0) {
					creep.moveTo(extension);
					extension.transferEnergy(creep);
					return;
				}
			}
		},
		'upgrading': function () {
			if (creep.memory.target) {
				var target = Game.getObjectById(creep.memory.target);

				if (target) {
					var ok = creep.repair(target);

					if (ok === OK) {
						return;
					}
				}
			}
			
			creep.memory.target = null;

			var sites = creep.room.find(FIND_MY_STRUCTURES, {
				filter: { structureType: STRUCTURE_RAMPART }
			});

			var weakSites = _.sortByOrder(sites, ['hits'], ['asc']);

			for (var index in weakSites) {
				var site = weakSites[index];

				creep.moveTo(site);
				var ok = creep.repair(site);

				if (ok === OK) {
					creep.memory.target = site.id;
				}

				return;
			}
		},
		'building': function () {
			var sites = creep.room.find(FIND_CONSTRUCTION_SITES);

			creep.moveTo(sites[0]);
			creep.build(sites[0]);
		}
	};

	var action = actions[creep.memory.action];

	if (action) {
		action();
	}
}
	