require('extensions');

var actions = {
    'guard': require('guard'),
    'harvester': require('harvester')
};

for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    var role = creep.memory.role;

    actions[role](creep);
}

for (var name in Game.spawns) {
    var spawn = Game.spawns[name];
    var nextNum = numCreeps + 1;

    var actions = {
        'harvester': function (role, nextNum) {
            if (spawn.canCreateHarvester() && numCreeps <= 5) {
                var creepName = role + nextNum;
                spawn.createHarvester(creepName);
            }
        },
        'guard': function (role, nextNum) {
            if (spawn.canCreateGuard() && numCreeps <= 10) {
                var creepName = role + nextNum;
                spawn.createGuard(creepName);
            }
        }
    };

    for (var action in actions) {
        var numCreeps = Object.keys(Game.creeps).length;
        actions[action](action, numCreeps);
    }
}

// git