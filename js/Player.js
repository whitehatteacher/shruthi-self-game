class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.life = 185;
    this.score = 0;
    this.food = 185;
  }
  addPlayers() {
    var playerIndex = "players/player"+this.index;
    if (this.index === 1) {
      this.positionY = height / 2 - 100;
    } else {
      this.positionY = height / 2 + 100;
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
  getCount() {
    var pcref = database.ref("playerCount");
    pcref.on("value", function (data) {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count

    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score,
      life: this.life
    });
  }
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
  getHorsesAtEnd() {
    database.ref("horsesAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }
  static updateHorsesAtEnd(rank) {
    database.ref("/").update({
      horsesAtEnd: rank
    });
  }
}