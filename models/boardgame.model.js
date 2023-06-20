module.exports = class Boardgame {
    constructor(bggId, boardgameName, minPlayers, maxPlayers, minPlayingTime, 
        maxPlayingTime, categories, complexityWeight) {
        this.bggId = bggId;
        this.boardgameName = boardgameName;
        this.minPlayers = Number(minPlayers);
        this.maxPlayers = Number(maxPlayers);
        this.minPlayingTime = Number(minPlayingTime);
        this.maxPlayingTime = Number(maxPlayingTime);
        this.categories = categories;
        this.complexityWeight = Math.round(Number(complexityWeight) *100) / 100;
    }
}