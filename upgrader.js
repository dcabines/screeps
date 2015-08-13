var states = {
	harvesting: 'harvesting',
	upgrading: 'upgrading'
};

module.exports = function (creep) {
    if (creep.carry.energy === 0) {
        creep.memory.action = states.harvesting;
    }

	var canCarry = creep.carry.energy < creep.carryCapacity;
	var isHarvesting = creep.memory.action === states.harvesting;

	if (canCarry && isHarvesting) {
		var sources = creep.room.find(FIND_SOURCES);
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
	}
	else {
		creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
        creep.memory.action = states.upgrading;
	}
}