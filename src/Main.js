import { Lightning } from "wpe-lightning-sdk";
import Menu from "./menu/Menu.js";
import Game from "./Game";

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Menu: {
        x: 600,
        y: 400,
        type: Menu,
        items: [
          { label: "START NEW GAME", action: "start" },
          { label: "CONTINUE", action: "continue" },
          { label: "ABOUT", action: "about" },
          { label: "EXIT", action: "exit" },
        ],
      },
      Game: {
        type: Game,
        alpha: 0,
      },
    };
  }
  _getFocused() {
    return this.tag("Menu");
  }

  _handleEnter() {
    switch (this.tag("Menu").activeItem._action) {
      case "start": this._setState("StartGameScreen");
        break;
      case "continue":
        break;
      case "about":
        break;
      case "exit":
        break;
      default:
        break;
    }
  }
  static _states() {
    return [
      class StartGameScreen extends this {
        $enter() {
          this.tag("Menu").setSmooth("alpha", 0);
          this.tag("Game").setSmooth("alpha", 1);
        }
        $exit() {
          this.tag("Menu").setSmooth("alpha", 1);
          this.tag("Game").setSmooth("alpha", 0);
        }
        _getFocused() {
            return this.tag("Game");
          }
      },
    ];
  }
}
