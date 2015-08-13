module.exports = function (creep) {
    if(creep.carry.energy === 0){
        creep.memory.action = 'harvesting';
    }

	if(creep.carry.energy < creep.carryCapacity && creep.memory.action === 'harvesting') {
		var sources = creep.room.find(FIND_SOURCES);
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
		creep.memory.action = 'harvesting';
	}
	else {
		creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
        creep.memory.action = 'feeding';
	}
}