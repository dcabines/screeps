module.exports = function (creep) {
	if (creep.carry.energy < creep.carryCapacity) {
		var sources = creep.room.find(FIND_SOURCES);
		creep.moveTo(sources[1]);
		creep.harvest(sources[1]);
	}
	else {
		creep.dropEnergy(creep.carryCapacity);
	}
}