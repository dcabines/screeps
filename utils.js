var _ = require('lodash');

module.exports = {
    killRole: function (role) {
        var creeps = _.filter(Game.creeps, { memory: { role: role } });

        for (var index in creeps) {
            creeps[index].suicide();
        }
    }
};