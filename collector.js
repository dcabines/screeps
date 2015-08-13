module.exports = function (creep) {
    if(creep.carry.energy === 0) {
        creep.memory.action = 'harvesting';
    }
    
    if(creep.carry.energy === creep.carryCapacity) {
        creep.memory.action = 'feeding';
    }
    
	if (creep.memory.action === 'harvesting') {
		var targets = creep.room.find(FIND_DROPPED_ENERGY);
		
		if (targets.length) {
			creep.moveTo(targets[0]);
			creep.pickup(targets[0]);
		}
	}
	else {
		creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
	}
}