var _ = require('lodash');

module.exports = {
    makeCreep: function (spawn, role, config) {
        var memory = { role: role };
        var numExisting = _.filter(Game.creeps, { memory: memory }).length;
        var canCreate = spawn.canCreateCreep(config.body) === OK;

        if (numExisting < config.limit && canCreate) {
            spawn.createCreep(config.body, undefined, memory);
        }
    }
};