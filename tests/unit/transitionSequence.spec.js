import TransitionSequence from '@/vuex/game/TransitionSequence.js';
import Player from '@/vuex/game/Player';
describe("transition tests", ()=>{
  let player;
  let transitionSequence;
  beforeEach(()=>{
    player = new Player();
    transitionSequence = new TransitionSequence(player, "test");
  })
  it("intitialises propperly", ()=>{

  }),
  it("after 1 tick works", ()=>{
    transitionSequence.tick();
    expect(transitionSequence.ascii).toEqual([ ' /        ', '/         ', '1234567890' ]);
  })
  it("after 9 ticks animation running is false", ()=>{
    for(let i = 0; i < 9; i++){
      transitionSequence.tick();
    }
    expect(transitionSequence.player.travelling).toBe(false);
    expect(transitionSequence.ascii).toEqual([ '      o  /', '     /│\\/ ', '12345/|890' ]);
  })
})