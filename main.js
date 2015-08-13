var factory = require('factory');

var actions = {
    'guard': require('guard'),
    'harvester': require('harvester'),
    'upgrader': require('upgrader'),
    'collector': require('collector')
};

for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    var role = creep.memory.role;
    
    if(creep.memory.role){
        actions[role](creep);
    }
}

for (var name in Game.spawns) {
    var spawn = Game.spawns[name];

    var roles = {
        'guard': {
            limit: 0,
            body: [TOUGH, TOUGH, ATTACK, ATTACK, MOVE]
        },
        'upgrader': {
            limit: 3,
            body: [WORK, CARRY, CARRY, MOVE, MOVE]
        },
        'harvester': {
            limit: 3,
            body: [WORK, WORK, CARRY, MOVE]
        },
        'collector': {
            limit: 2,
            body: [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
        }
    };

    for (var role in roles) {
        var config = roles[role];

        if (!spawn.spawning) {
            factory.makeCreep(spawn, role, config);
        }
    }
}