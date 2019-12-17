import Adventure from '@/vuex/game/Adventure.js'
import Area from '@/vuex/game/Area.js'
import Player from '@/vuex/game/Player.js'

describe("basic Adventure tests",()=>{
  let player, adventure;
  beforeEach(()=>{
    player = new Player();
    player.ascii = player.ascii1 = player.ascii2 = player.fightAscii1 = player.fightAscii2  = ["P"],
    adventure = new Adventure(player, "test");
  });
  it("initialises properly",()=>{

  });
  it("tick does not throw error, and has correct ascii", ()=>{
    adventure.tick()
    expect(adventure.area.ascii).toEqual(  [ '0P2T456E89' ] );
  });
  it("trap is recocgnised and does not throw error", ()=>{
    adventure.tick().tick().tick();
    expect(adventure.area.ascii).toEqual(  [ '012T456E89' ] );
  });
  it("player takes correct damage from trap", ()=>{
    adventure.tick().tick().tick();
    expect(adventure.player.hp.val).toBe(95);
  });
  it("enemy is recocgnised and does not throw error", ()=>{
    adventure.tick().tick().tick().tick().tick().tick();
    expect(adventure.area.ascii).toEqual( [ '012T45PE89' ] );
  });
  it("fight tickis recocgnised and does not throw error", ()=>{
    adventure.tick().tick().tick().tick().tick().tick().tick();
    expect(adventure.area.ascii).toEqual( [ '012T45PE89' ] );
  });
  it("first fight tick damages enemy", ()=>{
    adventure.tick().tick().tick().tick().tick().tick().tick();
    expect(adventure.currentFight.enemy.hp).toBe(25);
  });
  it("second fight tick damages enemy", ()=>{
    adventure.tick().tick().tick().tick().tick().tick().tick().tick();
    expect(adventure.player.hp.val).toBe(92);
  });
});
describe("basic Adventure tests with lethal trap",()=>{
  let player, adventure;
  beforeEach(()=>{
    player = new Player();
    player.ascii = player.ascii1 = player.ascii2= player.fightAscii1 = player.fightAscii2  = ["P"],
    adventure = new Adventure(player, "test2");
  });
  it("initialises properly",()=>{

  });
  it("tick does not throw error, and has correct ascii", ()=>{
    adventure.tick()
    expect(adventure.area.ascii).toEqual(  [ '0P2T456789' ] );
  });
  it("trap is recocgnised and does not throw error", ()=>{
    adventure.tick().tick().tick();
    expect(adventure.area.ascii).toEqual(  [ '012T456789' ] );
  });
  it("player takes correct damage from trap", ()=>{
    adventure.tick().tick().tick();
    expect(adventure.player.hp.val).toBe(0);
  });
});
describe("basic Adventure tests with lethal enemy",()=>{
  let player, adventure;
  beforeEach(()=>{
    player = new Player();
    player.ascii = player.ascii1 = player.ascii2= player.fightAscii1 = player.fightAscii2 = ["P"],
    adventure = new Adventure(player, "test3");
  });
  it("initialises properly",()=>{

  });
  it("enemy is reached on thrid tick",()=>{
    adventure.tick().tick().tick();
    expect(adventure.currentFight).not.toBe(false);
    expect(adventure.area.ascii).toEqual( [ '012PE56789' ] )
  });
  it("enemy has been hit on 4th tick, player has not moved",()=>{
    adventure.tick().tick().tick().tick();
    expect(adventure.currentFight).not.toBe(false);
    expect(adventure.area.ascii).toEqual( [ '012PE56789' ] )
    expect(player.hp.val).toBe(100);
    expect(adventure.currentFight.enemy.hp).toBe(25);
  });
  it("enemy has been hit on 5th tick, player has not moved, on adventure false",()=>{
    adventure.tick().tick().tick().tick().tick();
    expect(adventure.currentFight).toBe(false);
    expect(adventure.area.ascii).toEqual( [ '012PE56789' ] )
    expect(player.hp.val).toBe(0);
    expect(player.onAdventure).toBe(false);
  });


});
describe("basic Adventure tests with quickly defeatable enemy",()=>{
  let player, adventure;
  beforeEach(()=>{
    player = new Player();
    player.attack.val = 100;
    player.ascii = player.ascii1 = player.ascii2= player.fightAscii1 = player.fightAscii2 = ["P"],
    adventure = new Adventure(player, "test3");
  });
  it("initialises properly",()=>{

  });
  it("enemy is reached on thrid tick",()=>{
    adventure.tick().tick().tick();
    expect(adventure.currentFight).not.toBe(false);
    expect(adventure.area.ascii).toEqual( [ '012PE56789' ] )
  });
  it("enemy has been hit on 4th tick, player has not moved, fight over",()=>{
    adventure.tick().tick().tick().tick();
    expect(adventure.currentFight).toBe(false);
    expect(adventure.area.ascii).toEqual( [ '012P456789' ] )
    expect(player.hp.val).toBe(100);
  });
  it("player moves one position on 5th tick",()=>{
    adventure.tick().tick().tick().tick().tick();
    expect(adventure.currentFight).toBe(false);
    expect(adventure.area.ascii).toEqual( [ '0123P56789' ] )
    expect(player.hp.val).toBe(100);
    expect(player.onAdventure).toBe(true);
  });
  it("player at end of erea displays correct ascii",()=>{
    for (let i = 0; i < 10; i++){
      adventure.tick();
    }
    expect(adventure.area.ascii).toEqual( [ '012345678P' ] )
    expect(player.onAdventure).toBe(false);
  });


});




