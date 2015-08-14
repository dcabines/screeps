module.exports = function (creep) {
	var energy = creep.room.find(FIND_DROPPED_ENERGY);
	
	// collect
    if (creep.carry.energy === 0 && energy.length) {
        creep.moveTo(energy[0]);
		creep.pickup(energy[0]);
		return;
    }
	
	// feed spawns
	var spawns = _.filter(Game.spawns, function (r) {
		return r.energy < r.energyCapacity;
	});

	if (spawns.length) {
		var target = creep.pos.findClosest(spawns);

		creep.moveTo(target);
		creep.transferEnergy(target);
		return;
	}
	
	// feed extensions
	var extensions = creep.room.find(FIND_MY_STRUCTURES, {
		filter: { structureType: STRUCTURE_EXTENSION }
	});

	extensions = _.filter(extensions, function (r) {
		return r.energy < r.energyCapacity;
	});

	if (extensions.length) {
		var target = creep.pos.findClosest(extensions);

		creep.moveTo(target);
		creep.transferEnergy(target);
		return;
	}
}