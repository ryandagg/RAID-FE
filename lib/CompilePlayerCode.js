function getPlayerFromCode(playerCode) {
    var module = eval(playerCode);

    function createPlayer(playerController) {
        const Player = module && module.RaidPlayer || RaidPlayer;
        return new Player(playerController);
    }

    return createPlayer;
}

module.exports = getPlayerFromCode;
