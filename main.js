var utils = require('utils');
var config = require('config');
var factory = require('factory');

// run the creeps
for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    var role = creep.memory.role;

    if (creep.memory.role) {
        config.actions[role](creep);
    }
}

// run the spawns
for (var name in Game.spawns) {
    var spawn = Game.spawns[name];
    spawn.utils = utils;

    for (var role in config.roles) {
        var config = config.roles[role];

        if (!spawn.spawning) {
            factory.makeCreep(spawn, role, config);
        }
    }
}