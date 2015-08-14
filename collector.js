module.exports = function (creep) {
	var energy = creep.room.find(FIND_DROPPED_ENERGY);

	var extensions = creep.room.find(FIND_MY_STRUCTURES, {
		filter: { structureType: STRUCTURE_EXTENSION }
	});
	
	// collect
    if (creep.carry.energy === 0 && energy.length) {
        creep.moveTo(energy[0]);
		creep.pickup(energy[0]);
		return;
    }
	
	// feed spawns
	for (var index in Game.spawns) {
		var spawn = Game.spawns[index];

		if (spawn.energy < spawn.energyCapacity) {
			creep.moveTo(spawn);
			creep.transferEnergy(spawn);
			return;
		}
	}
	
	// feed extensions
	for (var index in extensions) {
		var extension = extensions[index];

		if (extension.energy < extension.energyCapacity) {
			creep.moveTo(extension);
			creep.transferEnergy(extension);
			return;
		}
	}
}