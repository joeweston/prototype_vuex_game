import Fight from '@/vuex/game/Fight.js';
import Player from '@/vuex/game/Player.js';

describe("basic Area tests",()=>{
  let player;
  let fight;
  let testEnemy;
  beforeEach(()=>{
    player = new Player();
    fight = new Fight(player, "test");
  })
  it("initialises properly",()=>{
    
  });
  it("correctly takes appropriate hp from enemy on first tick leaving it with 25", ()=>{
    fight.tick();
    expect(fight.enemy.hp).toBe(25);
  });
  it("has a player with 97 hp.val after second tick", ()=>{
    fight.tick().tick();
    expect(fight.player.hp.val).toBe(97);
  })
  it("has player's InFight=true and playerWon=true after player has defeated enemy", ()=>{
    player.attack.val = 35;
    fight.tick();
    expect(fight.enemy.hp).toBe(0);
    expect(fight.player.isInFight).toBe(false);
    expect(fight.playerWon).toBe(true);
  })
  it("has playerss isInFight=true and playerWon=false after player has been defeated", ()=>{
    fight.enemy.attack = 101;
    fight.tick().tick();
    expect(fight.player.hp.val).toBe(0);
    expect(fight.player.isInFight).toBe(false);
    expect(fight.playerWon).toBe(false);
  })
});