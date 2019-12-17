export default {
  test:{
    name:"test", //area with basic enemy and trap
    text:"test",
    ascii:["0123456789"],
    positions: [
      [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9, 0]
    ],
    trapPositions:{
      3: [["test", 100]]
    },
    enemyPositions:{
      7: [["test", 100]]
    },
  },
  test2:{
    name:"test2", // area with normally lethal trap
    text:"test2",
    ascii:["0123456789"],
    positions: [
      [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9, 0]
    ],
    trapPositions:{
      3: [["test2", 100]]
    },
    enemyPositions:{
      
    },
  },
  test3:{ // area with normally lethal enemy
    name:"test3",
    text:"test3",
    ascii:["0123456789"],
    positions: [
      [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9, 0]
    ],
    trapPositions:{
    },
    enemyPositions:{
      4: [["test2", 100]]
    },
  },
  test4:{ // area with one easy enemy
    name:"test4",
    text:"test4",
    ascii:["0123456789"],
    positions: [
      [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9, 0]
    ],
    trapPositions:{
    },
    enemyPositions:{
      4: [["test", 100]]
    },
  },
  blank:{
    name: "blank",
    text: "blank",
    ascii: [
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
    ],
    positions:[ //0 to 59
      [ 0, 12],[ 1, 12],[ 2, 12],[ 3, 12],[ 4, 12],[ 5, 12],[ 6, 12],[ 7, 12],[ 8, 12],[ 9, 12],
      [10, 12],[11, 12],[12, 12],[13, 12],[14, 12],[15, 12],[16, 12],[17, 12],[18, 12],[19, 12],
      [20, 12],[21, 12],[22, 12],[23, 12],[24, 12],[25, 12],[26, 12],[27, 12],[28, 12],[29, 12],
      [30, 12],[31, 12],[32, 12],[33, 12],[34, 12],[35, 12],[36, 12],[37, 12],[38, 12],[39, 12],
      [40, 12],[41, 12],[42, 12],[43, 12],[44, 12],[45, 12],[46, 12],[47, 12],[48, 12],[49, 12],
      [50, 12],[51, 12],[52, 12],[53, 12],[54, 12],[55, 12],[56, 12],[57, 12],[58, 12],[59, 12],
    ],
    traps:[
      ["spikes", [10] ],
    ],
    enemies:[
      ["sheep", [29, 44] ],
    ],
    enemyPositions: {
      29: [["sheep", 50], ["cow", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    }
  },
  fields:{
    name: "fields",
    text: "fields",
    enemyPositions: {
      29: [["sheep", 50], ["cow", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    ascii: 
[ '                                                            ',
  '                                                            ',
  '                          v        ___                      ',
  '        ,--,            v         (   \\                     ',
  '       (    )       _____       (______)                    ',
  '      (_______)    (     \\_____               ,--,          ',
  '                  (            ),__          (    )         ',
  "                 (_________________)        '      ),       ",
  '                                           (        _)      ',
  '                                             \\\\ ___)        ',
  '                                              \\  |          ',
  '                                               | |          ',
  '_______________________________________________| |__________' ],
    positions:[ //0 to 59
      [ 0, 12],[ 1, 12],[ 2, 12],[ 3, 12],[ 4, 12],[ 5, 12],[ 6, 12],[ 7, 12],[ 8, 12],[ 9, 12],
      [10, 12],[11, 12],[12, 12],[13, 12],[14, 12],[15, 12],[16, 12],[17, 12],[18, 12],[19, 12],
      [20, 12],[21, 12],[22, 12],[23, 12],[24, 12],[25, 12],[26, 12],[27, 12],[28, 12],[29, 12],
      [30, 12],[31, 12],[32, 12],[33, 12],[34, 12],[35, 12],[36, 12],[37, 12],[38, 12],[39, 12],
      [40, 12],[41, 12],[42, 12],[43, 12],[44, 12],[45, 12],[46, 12],[47, 12],[48, 12],[49, 12],
      [50, 12],[51, 12],[52, 12],[53, 12],[54, 12],[55, 12],[56, 12],[57, 12],[58, 12],[59, 12],
    ],
  },
  fieldsB:{
    name: "fieldsB",
    text: "fields",
    enemyPositions: {
      29: [["sheep", 50], ["cow", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    ascii: 
[ '                                                            ',
  '                                                            ',
  '                          v        ___                      ',
  '        ,--,            v         (   \\                     ',
  '       (    )       _____       (______)                    ',
  '      (_______)    (     \\_____               ,--,          ',
  '                  (            ),__          (    )         ',
  "                 (_________________)        '      ),       ",
  '                                           (        _)      ',
  '                                             \\\\ ___)        ',
  '                                              \\  |          ',
  '                                               | |          ',
  '_______________________________________________| |__________' ],
    positions:[ //0 to 59
      [ 0, 12],[ 1, 12],[ 2, 12],[ 3, 12],[ 4, 12],[ 5, 12],[ 6, 12],[ 7, 12],[ 8, 12],[ 9, 12],
      [10, 12],[11, 12],[12, 12],[13, 12],[14, 12],[15, 12],[16, 12],[17, 12],[18, 12],[19, 12],
      [20, 12],[21, 12],[22, 12],[23, 12],[24, 12],[25, 12],[26, 12],[27, 12],[28, 12],[29, 12],
      [30, 12],[31, 12],[32, 12],[33, 12],[34, 12],[35, 12],[36, 12],[37, 12],[38, 12],[39, 12],
      [40, 12],[41, 12],[42, 12],[43, 12],[44, 12],[45, 12],[46, 12],[47, 12],[48, 12],[49, 12],
      [50, 12],[51, 12],[52, 12],[53, 12],[54, 12],[55, 12],[56, 12],[57, 12],[58, 12],[59, 12],
    ],
  },
  fieldsC:{
    name: "fieldsC",
    text: "fields",
    enemyPositions: {
      29: [["sheep", 50], ["cow", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    ascii: 
[
  "                                        .- .      . --- .  _",
  "                                     .(     '-_ (         _.",
  "                    ___            (____              ,--'  ",
  "                   (    ),              (________.'--'      ",
  "                 .(    /  )                                 ",
  "                (   (  )   )                                ",
  "                  .     _ )                                 ",
  "                   \\\\ .)                __                  ",
  "____________________| |________________/  '.___._ __________",
  "                    | |                         .           ",
  "                   / / \\                                    ",
  "     .                          .                         . ",
  " .   ,                                -                     "
],
    positions:[ //0 to 59
      [ 0, 11],[ 1, 11],[ 2, 11],[ 3, 11],[ 4, 11],[ 5, 11],[ 6, 11],[ 7, 11],[ 8, 11],[ 9, 11],
      [10, 11],[11, 11],[12, 11],[13, 11],[14, 11],[15, 11],[16, 11],[17, 11],[18, 11],[19, 11],
      [20, 11],[21, 12],[22, 12],[23, 12],[24, 12],[25, 12],[26, 12],[27, 12],[28, 12],[29, 12],
      [30, 11],[31, 11],[32, 11],[33, 11],[34, 11],[35, 11],[36, 11],[37, 11],[38, 11],[39, 11],
      [40, 11],[41, 11],[42, 11],[43, 11],[44, 11],[45, 11],[46, 11],[47, 11],[48, 11],[49, 11],
      [50, 11],[51, 11],[52, 11],[53, 11],[54, 11],[55, 11],[56, 11],[57, 11],[58, 11],[59, 11],
    ],
  },
  fieldsD:{
    name: "fieldsD",
    text: "fields",
    enemyPositions: {
      40: [["oversizedChicken", 100]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]],
      20: [["spikes", 50], ["caltrops", 50]],
      24: [["spikes", 50], ["caltrops", 50]],  
      30: [["spikes", 50], ["caltrops", 50]], 
      40: [["spikes", 50], ["caltrops", 50]], 
    },
    ascii: 
[
  "                       __                                   ",
  "                    ,'   )             __                   ",
  "                   (______)          ,'   )                 ",
  "                                   (______)                 ",
  "                                                            ",
  "                                          ___________       ",
  "              .-- .   .-- .  .-- .       |__-__-_-_-_|      ",
  "____________ /--.  )_/--.  )/--.  )______|__-_-_-_-__|______",
  "            ( , ')/ (@ . )/(` . )/                          ",
  "             '--'    '--'   '--'         -           -      ",
  "       ..    -                                              ",
  "                              -                     .      -",
  "   ..             .                          .              "
],
    positions:[ //0 to 59
      [ 0, 11],[ 1, 11],[ 2, 11],[ 3, 11],[ 4, 11],[ 5, 11],[ 6, 11],[ 7, 11],[ 8, 11],[ 9, 11],
      [10, 11],[11, 11],[12, 11],[13, 11],[14, 11],[15, 11],[16, 11],[17, 11],[18, 11],[19, 11],
      [20, 11],[21, 12],[22, 12],[23, 12],[24, 12],[25, 12],[26, 12],[27, 12],[28, 12],[29, 12],
      [30, 11],[31, 11],[32, 11],[33, 11],[34, 11],[35, 11],[36, 11],[37, 11],[38, 11],[39, 11],
      [40, 11],[41, 11],[42, 11],[43, 11],[44, 11],[45, 11],[46, 11],[47, 11],[48, 11],[49, 11],
      [50, 11],[51, 11],[52, 11],[53, 11],[54, 11],[55, 11],[56, 11],[57, 11],[58, 11],[59, 11],
    ],
  },
  name:"cellar",
  text:"cellar",
  cellar:{
    ascii: [
  "████████████████████████████████████████████████████████████",
  "  ▓▓/    ╫ ▓▓/       ▓▓/   ╫  ▓▓▓▓/       ▓▓/ ╫     ▓▓/     ",
  "         ╫                 ╫                  ╫             ",
  "─────────╫                 ╫                  ╫─────────────",
  "         ╫─────────────────╫                  ╫             ",
  "         ╫                 ╫──────────────────╫             ",
  "         ╫                 ╫                  ╫─────────────",
  "_________╫_________________╫__________________╫_____________",
  "  /         /         /         /         /        /        ",
  " /         /         /         /         /        /        /",
  "/         /         /         /         /        /        / ",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "                                                            "
  ],
    positions:[ //0 to 59
      [ 0, 9],[ 1, 9],[ 2, 9],[ 3, 9],[ 4, 9],[ 5, 9],[ 6, 9],[ 7, 9],[ 8, 9],[ 9, 9],
      [10, 9],[11, 9],[12, 9],[13, 9],[14, 9],[15, 9],[16, 9],[17, 9],[18, 9],[19, 9],
      [20, 9],[21, 9],[22, 9],[23, 9],[24, 9],[25, 9],[26, 9],[27, 9],[28, 9],[29, 9],
      [30, 9],[31, 9],[32, 9],[33, 9],[34, 9],[35, 9],[36, 9],[37, 9],[38, 9],[39, 9],
      [40, 9],[41, 9],[42, 9],[43, 9],[44, 9],[45, 9],[46, 9],[47, 9],[48, 9],[49, 9],
      [50, 9],[51, 9],[52, 9],[53, 9],[54, 9],[55, 9],[56, 9],[57, 9],[58, 9],[59, 9],
    ],
    enemyPositions: {
      29: [["wraith", 50], ["abomination", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    nextAreaPool:[["cellarD", 50]],
  },
  cellarB:{
  name:"cellarB",
  text:"cellar",
    ascii: [
  "████████████████████████████████████████████████████████████",
  "  ▓▓/    ║ ▓/ █▒▒▒▒▒▒▓▓/   ║       ║      ▓▓/ ║     ▓▓/     ",
  "         ║                 ║    19 ║          ║             ",
  "─────────╫               … ║       ║          ╫─────────────",
  "         ╫  …              ╫       ╚═════╗    ║             ",
  "      …  ║                 ╫─────────────╫────╫             ",
  "         ║                 ║             ║    ╫─────────────",
  "_________║_________________║_____________║____║_____________",
  "  /         /         /         /        ║/        /        ",
  " /         /         /         /         /        /        /",
  "/         /         /         /         /        /        / ",
  "▒▒▒▒▒▒████▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒█▒▒▒▒▒",
  "                                                            "
  ],
    positions:[ //0 to 59
      [ 0, 9],[ 1, 9],[ 2, 9],[ 3, 9],[ 4, 9],[ 5, 9],[ 6, 9],[ 7, 9],[ 8, 9],[ 9, 9],
      [10, 9],[11, 9],[12, 9],[13, 9],[14, 9],[15, 9],[16, 9],[17, 9],[18, 9],[19, 9],
      [20, 9],[21, 9],[22, 9],[23, 9],[24, 9],[25, 9],[26, 9],[27, 9],[28, 9],[29, 9],
      [30, 9],[31, 9],[32, 9],[33, 9],[34, 9],[35, 9],[36, 9],[37, 9],[38, 9],[39, 9],
      [40, 9],[41, 9],[42, 9],[43, 9],[44, 9],[45, 9],[46, 9],[47, 9],[48, 9],[49, 9],
      [50, 9],[51, 9],[52, 9],[53, 9],[54, 9],[55, 9],[56, 9],[57, 9],[58, 9],[59, 9],
    ],
    enemyPositions: {
      29: [["wraith", 50], ["abomination", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    nextAreaPool:[["cellarD", 50]],
  },
  cellarC:{
  name:"cellarC",
  text:"cellar",
    ascii: [
  "████████████████████████████████████████████████████████████",
  "         ║ \\               ║  /   ▓▓/  ║      ║   ▓▓/      ",
  "         ║  \\┌──────────┐ .║ /         ║      ║             ",
  "─────────╫   │ ◘\\ ◘ \\  /│… ║ \\         ║      ╫             ",
  "         ╫  …│  ◘\\ / \\◘ │  ╫  \\        ╚═╗    ║             ",
  "      …  ║   └──────────┘  ╫─────────────╫────╫             ",
  "         ║                 ║    \\        ║    ╫─────────────",
  "_________║_________________║_____\\_______║____║_____________",
  "  /         /         /         /        ║/        /        ",
  " /         /         /         /         /        /        /",
  "/         /         /         /         /        /        / ",
  "▒▒▒▒▒▒▒▒▒▒/¯¯¯¯¯¯¯¯¯▒▒▒▒▒▒▒▒▒▒/¯¯¯¯¯¯¯¯¯▒▒▒▒▒▒▒▒▒/¯¯¯¯¯¯¯¯¯¯",
  "                                                            "
  ],
    positions:[ //0 to 59
      [ 0, 9],[ 1, 9],[ 2, 9],[ 3, 9],[ 4, 9],[ 5, 9],[ 6, 9],[ 7, 9],[ 8, 9],[ 9, 9],
      [10, 9],[11, 9],[12, 9],[13, 9],[14, 9],[15, 9],[16, 9],[17, 9],[18, 9],[19, 9],
      [20, 9],[21, 9],[22, 9],[23, 9],[24, 9],[25, 9],[26, 9],[27, 9],[28, 9],[29, 9],
      [30, 9],[31, 9],[32, 9],[33, 9],[34, 9],[35, 9],[36, 9],[37, 9],[38, 9],[39, 9],
      [40, 9],[41, 9],[42, 9],[43, 9],[44, 9],[45, 9],[46, 9],[47, 9],[48, 9],[49, 9],
      [50, 9],[51, 9],[52, 9],[53, 9],[54, 9],[55, 9],[56, 9],[57, 9],[58, 9],[59, 9],
    ],
    enemyPositions: {
      29: [["abomination", 50], ["wraith", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
    nextAreaPool:[["cellarD", 50]],
  },
  cellarD:{
  name:"cellarD",
  text:"cellar",
    ascii: [
  "██████████████████████████████████████/ .║               ║  ",
  "         ║ \\    _/         ║  /   ▓▓/    ║               ║  ",
  "         ║  \\  /          .║ /           ║               ║  ",
  "─────────╫   \\/            ║ \\           ║               ║  ",
  "         ╫                 ╫  \\          ║          _____║__",
  "      …  ║                 ╫─────────────╫ _______ /        ",
  "         ║                 ║    \\       _║/       /         ",
  "_________║_________________║_____\\_____/ /       /          ",
  "  /         /         /         /     / /        ▒▒▒▒▒▒▒▒▒▒▒",
  " /         /         /         /     /  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "/         /         /         /      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
  "                                                            "
  ],
    positions:[ //0 to 59
      [ 0, 9],[ 1, 9],[ 2, 9],[ 3, 9],[ 4, 9],[ 5, 9],[ 6, 9],[ 7, 9],[ 8, 9],[ 9, 9],
      [10, 9],[11, 9],[12, 9],[13, 9],[14, 9],[15, 9],[16, 9],[17, 9],[18, 9],[19, 9],
      [20, 9],[21, 9],[22, 9],[23, 9],[24, 9],[25, 9],[26, 9],[27, 9],[28, 9],[29, 9],
      [30, 9],[31, 9],[32, 9],[33, 9],[34, 9],[35, 9],[36, 9],[37, 9],[38, 9],[39, 8],
      [40, 8],[41, 8],[42, 7],[43, 7],[44, 7],[45, 7],[46, 7],[47, 7],[48, 7],[49, 7],
      [50, 7],[51, 6],[52, 6],[53, 6],[54, 6],[55, 6],[56, 6],[57, 6],[58, 6],[59, 6],
    ],
    enemyPositions: {
      29: [["sheep", 50], ["cow", 50]],
    },
    trapPositions:{
      10: [["spikes", 50], ["caltrops", 50]], 
    },
  },
  cellarE:{
  name:"cellarE",
  text:"cellar",
    ascii: [
  "  ║         ▀▀██████████████████████████████████████████████",
  "  ║ '            ║     ▓▓/       ▓▓/  ║                ║    ",
  "__║/__________   ║          '         ║     /    .     ║    ",
  "            /│   ║         .          ║     ,          ║    ",
  "           / │   ║            .       ║                ║    ",
  "          /  │___║_____               ║           ,    ║    ",
  "▒▒▒▒▒▒▒▒▒▒  /         /│              ║       ,        ║    ",
  "▒▒▒▒▒▒▒▒▒▒ /         / │     /        ║             .  ║    ",
  "▒▒▒▒▒▒▒▒▒▒/_________/  │______________║________________║____",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  /         /         /        /        ",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ /         /         /        /        /",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒/         /         /        /        / ",
  "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒"
  ],
    positions:[ //0 to 59
      [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 4],[ 4, 4],[ 5, 4],[ 6, 4],[ 7, 4],[ 8, 4],[ 9, 4],
      [10, 4],[11, 4],[12, 4],[13, 4],[14, 7],[15, 7],[16, 7],[17, 7],[18, 7],[19, 7],
      [20, 7],[21, 7],[22, 7],[23, 7],[24, 7],[25, 7],[26, 10],[27, 10],[28, 10],[29, 10],
      [30, 10],[31, 10],[32, 10],[33, 10],[34, 10],[35, 10],[36, 10],[37, 10],[38, 10],[39, 10],
      [40, 10],[41, 10],[42, 10],[43, 10],[44, 10],[45, 10],[46, 10],[47, 10],[48, 10],[49, 10],
      [50, 10],[51, 10],[52, 10],[53, 10],[54, 10],[55, 10],[56, 10],[57, 10],[58, 10],[59, 10],
    ],
    enemyPositions: {

    },
    trapPositions:{

    },
    nextAreaPool:[["cellar", 50],["cellarB", 50],["cellarC", 50]]
  },
}









