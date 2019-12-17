import * as asciiMethods from '@/vuex/game/asciiMethods.js';
let ascii = [
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            ",
  "                                                            "
]
let sprite = [
 " o/",
 "/| ",
 "/ \\"
]
describe('tests on the function getAsciiWithSprite', ()=>{
  it('clips to the left correctly', ()=>{
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [0,12], 'right')).toEqual(
    [ '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '/                                                           ',
      '                                                            ',
      '\\                                                           ' ]);
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [1,12], 'right')).toEqual(
    [ '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      'o/                                                          ',
      '|                                                           ',
      ' \\                                                          ' ]);
  });
  it('clips to the left correctly', ()=>{
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [58,12], 'left')).toEqual(
    [ '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                           o',
      '                                                          /|',
      '                                                          / ' ]);
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [59,12], 'left')).toEqual(
    [ '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                           /',
      '                                                           /' ]);
  });
  it('clips to the top correctly', ()=>{
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [30,0], 'right')).toEqual(
    [ '                            / \\                             ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ' ]);
    expect(asciiMethods.addSpriteToAscii(ascii, sprite, [30,1], 'right')).toEqual(
    [ '                            /|                              ',
      '                            / \\                             ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ',
      '                                                            ' ]);
  });
});











