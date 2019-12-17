import transitionSequenceData from './gameData/transitionSequenceData.js';
import * as asciiMethods from './asciiMethods.js';
export default class TransitionSequence{
  constructor(player, transitionSequenceName){
    this.player = player;
    this.name = transitionSequenceData[transitionSequenceName].name;
    this.text = transitionSequenceData[transitionSequenceName].text;
    this.originalAscii = transitionSequenceData[transitionSequenceName].ascii;
    this.positions = transitionSequenceData[transitionSequenceName].positions;
    this.characterPosition = 0;
    this.player.travelling = true;
    this.ascii;
    this.loadAscii();
    this.player.logMessage(`You are travelling to ${this.text}.`)
  }
  loadAscii(){
    this.ascii = asciiMethods.addSpriteToAscii(this.originalAscii, this.player.ascii, this.positions[this.characterPosition], "right");
  }
  tick(){
    this.characterPosition++;
    this.player.swapSprite();
    this.loadAscii();
    if (this.characterPosition === this.positions.length - 1){
      this.player.travelling = false;
    }
    return this;
  }
}