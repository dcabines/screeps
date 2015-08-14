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
            limit: 2,
            body: [TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, MOVE, MOVE]
        },
        'upgrader': {
            limit: 3,
            body: [WORK, WORK, CARRY, CARRY, MOVE]
        },
        'harvester': {
            limit: 3,
            body: [WORK, WORK, CARRY, MOVE]
        },
        'collector': {
            limit: 3,
            body: [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
        },
        'builder': {
            limit: 4,
            body: [WORK, WORK, WORK, CARRY, CARRY, MOVE]
        }
    }
};