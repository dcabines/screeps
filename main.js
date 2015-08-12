require('extensions');

var numCreeps = Object.keys(Game.creeps).length;

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
    
    if(spawn.canCreateHarvester() && numCreeps <= 5) {
        var creepName = 'harvester' + nextNum;
        spawn.createHarvester(creepName);
    }
    
    if(false && spawn.canCreateGuard() && numCreeps <= 10) {
        var creepName = 'guard' + nextNum;
        spawn.createGuard(creepName);
    }
}

// hello from Git