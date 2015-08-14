module.exports = function (creep) {
    var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 2);

    if (targets.length) {
        creep.moveTo(targets[0]);
        creep.attack(targets[0]);
    } else {
        creep.moveTo(Game.flags.Flag1);
    }
}