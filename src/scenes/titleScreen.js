import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {
  preload() {}

  create() {
    // Game title
    const title = this.add.text(400, 100, "PONG", {
      fontSize: "64px",
      fontFamily: "Arial",
      color: "#ffffff",
    });
    title.setOrigin(0.5);

    // Start button
    const startButton = this.add.rectangle(400, 250, 200, 50, 0xffffff);
    const startText = this.add.text(400, 250, "START GAME", {
      fontSize: "24px",
      fontFamily: "Arial",
      color: "#000000",
    });
    startText.setOrigin(0.5);

    // Instructions
    const instructions = this.add.text(
      400,
      350,
      "How to play:\n↑ Up arrow: Move paddle up\n↓ Down arrow: Move paddle down",
      {
        fontSize: "20px",
        fontFamily: "Arial",
        color: "#ffffff",
        align: "center",
      }
    );
    instructions.setOrigin(0.5);

    // Making the button interactive
    startButton.setInteractive();
    startButton.on("pointerover", () => {
      startButton.setFillStyle(0xcccccc);
    });
    startButton.on("pointerout", () => {
      startButton.setFillStyle(0xffffff);
    });
    startButton.on("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
