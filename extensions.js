Spawn.prototype.createHarvester = function(name) {
    return this.createCreep([WORK, CARRY, MOVE], name, { role: 'harvester' });
};

Spawn.prototype.createHarvester.cost = 100 + 50 + 50;

Spawn.prototype.canCreateHarvester = function() {
    return this.energy > this.createHarvester.cost && this.spawning === null;
};

Spawn.prototype.createGuard = function(name) {
    return this.createCreep([ATTACK, TOUGH, MOVE], name, { role: 'guard' });
};

Spawn.prototype.createGuard.cost = 80 + 10 + 50;

Spawn.prototype.canCreateGuard = function() {
    return this.energy > this.createGuard.cost && this.spawning === null;
};