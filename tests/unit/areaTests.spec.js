import Area from '@/vuex/game/Area.js'
import Player from '@/vuex/game/Player.js'

describe("basic Area tests",()=>{
  it("initialises properly",()=>{
    let a = new Area(new Player(), "blank")
  })
});