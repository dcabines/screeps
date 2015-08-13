Spawn.prototype.createHarvester = function(name) {
    console.log('create harvester');
    return this.createCreep([WORK, WORK, CARRY, MOVE], name, { role: 'harvester' });
};

Spawn.prototype.createHarvester.cost = 100 + 100 + 50 + 50;

Spawn.prototype.canCreateHarvester = function() {
    return this.energy > this.createHarvester.cost && this.spawning === null;
};

Spawn.prototype.createUpgrader = function(name) {
    console.log('create upgrader');
    return this.createCreep([WORK, CARRY, CARRY, MOVE], name, { role: 'upgrader' });
};

Spawn.prototype.createUpgrader.cost = 100 + 50 + 50 + 50;

Spawn.prototype.canCreateUpgrader = function() {
    return this.energy > this.createUpgrader.cost && this.spawning === null;
};

Spawn.prototype.createGuard = function(name) {
    console.log('create guard');
    return this.createCreep([ATTACK, TOUGH, MOVE], name, { role: 'guard' });
};

Spawn.prototype.createGuard.cost = 80 + 10 + 50;

Spawn.prototype.canCreateGuard = function() {
    return this.energy > this.createGuard.cost && this.spawning === null;
};