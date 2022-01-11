class Form {
    constructor() {
        this.input = createInput("").attribute("placeHolder", "Enter Your Name");
        this.playButton = createButton("Play");
        // this.titleImage = createImg("");
        this.greetingMessage = createElement("h3");
        this.titleMessage = createElement("h1");
    }
    setElementsPosition() {
        this.input.position(800, 240);
        this.playButton.position(800, 270);
        this.greetingMessage.position(235, 40);
        this.titleMessage.position(235, 10);
    }
    setElementsStyle() {
        this.titleMesssage.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greetingMessage.class("greeting");
    }
    hide() {
        this.input.hide();
        this.playButton.hide();
        this.greetingMessage.hide();
    }


    handleMousePressed() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            var grtMsg =
                `Hello, ${this.input.value()} 
        </br> Wait till the other player join`;
            this.greetingMessage.html(grtMsg);
        })
        var titleMsg =
            `Horse Riding Race`;
        this.titleMessage.html(titleMsg);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayers();
        player.updateCount(playerCount);
        player.getDistance();
    }
    display() {
        this.setElementsPosition();
        this.handleMousePressed();
        this.setElementsStyle();
    }

}