module.exports = function (creep) {
    if (creep.carry.energy === 0) {
        creep.memory.action = 'refueling';
    }

	if (creep.carry.energy < creep.carryCapacity && creep.memory.action === 'refueling') {
		creep.moveTo(Game.spawns.Spawn1);

		var amount = Game.spawns.Spawn1.energy > creep.carryCapacity;
		amount = amount ? creep.carryCapacity : Game.spawns.Spawn1.energy;

        Game.spawns.Spawn1.transferEnergy(creep, amount);
	}
	else {
		var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
		creep.moveTo(sites[0]);
		creep.build(sites[0]);
        creep.memory.action = 'building';
	}
}