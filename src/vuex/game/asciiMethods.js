
export function addSpriteToAscii(ascii, sprite, location, direction){
  let newAscii = JSON.parse(JSON.stringify(ascii));


  if (location[0] >= ascii[0].length){
    throw `x pos out of bounds. ${location[0]} is not within 0 and ${ascii[0].length - 1} inclucive`
  }

//calculatinge sprite clipping x direction
  let beginning;
  let clipBy = 0;
  if (direction === "right"){
    beginning =  location[0] - sprite[0].length + 1 //these will change if facing other direction
    //sprite row clipping
    if (location[0] - sprite[0].length + 1 < 0){
      clipBy = sprite[0].length - location[0] - 1;
      beginning += clipBy;
    }
  } else if (direction === "left"){
    beginning =  location[0] //these will change if facing other direction
    if (location[0] + sprite[0].length > ascii[0].length){
      clipBy = sprite[0].length - ascii[0].length + location[0];
    }  
  }





  for(let spriteRow = 0; spriteRow < sprite.length; spriteRow++){
    let rowToChange = location[1] - sprite.length + spriteRow + 1;
    if(rowToChange < 0 || rowToChange >= ascii.length){
      continue; // sprite height clipping so straight to next row it is!
    }
    let charsToReplace;
    if (clipBy === 0){
      charsToReplace = sprite[spriteRow]
    } else if (direction === "right"){
      charsToReplace = sprite[spriteRow].substr(clipBy);
    } else if (direction === "left"){
      charsToReplace = sprite[spriteRow].substr(0, sprite[0].length - clipBy)
    }
    newAscii[rowToChange] = newAscii[rowToChange].split('');
    for ( let i = 0; i < charsToReplace.length; i++){
      let charToReplace = charsToReplace[i];
      if (charToReplace === "•"){
        continue;
      }
      newAscii[rowToChange][beginning + i] = charToReplace;
    }
    newAscii[rowToChange] = newAscii[rowToChange].join('');
    //newAscii[rowToChange] = newAscii[rowToChange].split('')
    //newAscii[rowToChange].splice(beginning, sprite[0].length - clipBy, charsToReplace)
    //newAscii[rowToChange] = newAscii[rowToChange].join('');
  } 
  return newAscii;
}










