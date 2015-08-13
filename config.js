module.exports = {
    actions: {
        'guard': require('guard'),
        'harvester': require('harvester'),
        'upgrader': require('upgrader'),
        'collector': require('collector'),
        'builder': require('builder')
    },

    roles: {
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
        },
        'builder': {
            limit: 2,
            body: [WORK, CARRY, CARRY, MOVE, MOVE]
        }
    }
};