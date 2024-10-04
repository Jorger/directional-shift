import type { ILevel } from "../../interfaces";
// Nivel 21
const newLevelTest: ILevel = {
  arrows: [
    {
      arrow: {
        index: 0,
        orientation: "RIGHT",
        coordinate: { x: 49, y: 190 },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [0, 1, 2],
      targetPositions: [
        { coordinate: { x: 272, y: 190 }, orientation: "BOTTOM" },
        { coordinate: { x: 272, y: 228 }, orientation: "LEFT" },
        { coordinate: { x: 124, y: 228 }, orientation: "LEFT" },
      ],
      indexArrival: 0,
    },
    {
      arrow: {
        index: 1,
        orientation: "RIGHT",
        coordinate: { x: 49, y: 266 },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [3, 4, 5],
      targetPositions: [
        { coordinate: { x: 103, y: 266 }, orientation: "BOTTOM" },
        { coordinate: { x: 103, y: 434 }, orientation: "RIGHT" },
        { coordinate: { x: 143, y: 434 }, orientation: "LEFT" },
      ],
      indexArrival: 1,
    },
    {
      arrow: {
        index: 2,
        orientation: "RIGHT",
        coordinate: { x: 49, y: 340 },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [6, 7],
      targetPositions: [
        { coordinate: { x: 274, y: 340 }, orientation: "BOTTOM" },
        { coordinate: { x: 274, y: 490 }, orientation: "LEFT" },
      ],
      indexArrival: 2,
    },
    {
      arrow: {
        index: 3,
        orientation: "RIGHT",
        coordinate: { x: 49, y: 415 },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [8, 9, 10, 11, 12, 13, 14],
      targetPositions: [
        { coordinate: { x: 84, y: 415 }, orientation: "TOP" },
        { coordinate: { x: 84, y: 360 }, orientation: "RIGHT" },
        { coordinate: { x: 217, y: 360 }, orientation: "BOTTOM" },
        { coordinate: { x: 217, y: 452 }, orientation: "RIGHT" },
        { coordinate: { x: 330, y: 452 }, orientation: "TOP" },
        { coordinate: { x: 330, y: 265 }, orientation: "LEFT" },
        { coordinate: { x: 255, y: 265 }, orientation: "LEFT" },
      ],
      indexArrival: 3,
    },
    {
      arrow: {
        index: 4,
        orientation: "RIGHT",
        coordinate: { x: 49, y: 490 },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [15, 16],
      targetPositions: [
        { coordinate: { x: 180, y: 490 }, orientation: "TOP" },
        { coordinate: { x: 180, y: 303 }, orientation: "LEFT" },
      ],
      indexArrival: 4,
    },
  ],
  lines: [
    {
      index: 0,
      coordinate: { x: 74, y: 214 },
      height: 4,
      width: 228,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 1,
      coordinate: { x: 298, y: 214 },
      height: 41,
      width: 4,
      transform: { scale: "scaleY", origin: "bottom" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 2,
      coordinate: { x: 148, y: 251 },
      height: 4,
      width: 154,
      transform: { scale: "scaleX", origin: "left" },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 3,
      coordinate: { x: 74, y: 289 },
      height: 4,
      width: 59,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 4,
      coordinate: { x: 129, y: 289 },
      height: 172,
      width: 4,
      transform: { scale: "scaleY", origin: "bottom" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 5,
      coordinate: { x: 129, y: 458 },
      height: 4,
      width: 41,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 6,
      coordinate: { x: 74, y: 364 },
      height: 4,
      width: 229,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "STOPPER",
    },
    {
      index: 7,
      coordinate: { x: 298, y: 364 },
      height: 150,
      width: 4,
      transform: { scale: "scaleY", origin: "bottom" },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 8,
      coordinate: { x: 74, y: 438 },
      height: 4,
      width: 40,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 9,
      coordinate: { x: 110, y: 383 },
      height: 59,
      width: 4,
      transform: { scale: "scaleY", origin: "top" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 10,
      coordinate: { x: 110, y: 382 },
      height: 4,
      width: 136,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 11,
      coordinate: { x: 242, y: 382 },
      height: 98,
      width: 4,
      transform: { scale: "scaleY", origin: "bottom" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 12,
      coordinate: { x: 242, y: 476 },
      height: 4,
      width: 116,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 13,
      coordinate: { x: 354, y: 289 },
      height: 191,
      width: 4,
      transform: { scale: "scaleY", origin: "top" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 14,
      coordinate: { x: 281, y: 289 },
      height: 4,
      width: 77,
      transform: { scale: "scaleX", origin: "left" },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 15,
      coordinate: { x: 74, y: 513 },
      height: 4,
      width: 134,
      transform: { scale: "scaleX", origin: "right" },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 16,
      coordinate: { x: 204, y: 331 },
      height: 186,
      width: 4,
      transform: { scale: "scaleY", origin: "top" },
      value: 1,
      finish: "ARRIVAL",
    },
  ],
  stoppers: [{ index: 0, coordinate: { x: 293, y: 359 }, indexLine: 6 }],
  arrivals: [
    { index: 0, coordinate: { x: 124, y: 228 } },
    { index: 1, coordinate: { x: 143, y: 434 } },
    { index: 2, coordinate: { x: 274, y: 490 } },
    { index: 3, coordinate: { x: 255, y: 265 } },
    { index: 4, coordinate: { x: 180, y: 303 } },
  ],
};

// Nivel de prueba se puede auitar
// const newLevelTest: ILevel = {
//   arrows: [
//     {
//       arrow: {
//         index: 0,
//         orientation: "RIGHT",
//         coordinate: { x: 45, y: 227 },
//         state: "IDLE",
//         rotation: 90,
//       },
//       indexLines: [0],
//       targetPositions: [
//         { coordinate: { x: 307, y: 227 }, orientation: "LEFT" },
//       ],
//       indexArrival: 0,
//     },
//     {
//       arrow: {
//         index: 1,
//         orientation: "LEFT",
//         coordinate: { x: 307, y: 227 },
//         state: "IDLE",
//         rotation: 270,
//       },
//       indexLines: [1],
//       targetPositions: [{ coordinate: { x: 45, y: 227 }, orientation: "LEFT" }],
//       indexArrival: 1,
//     },
//     {
//       arrow: {
//         index: 2,
//         orientation: "TOP",
//         coordinate: { x: 180, y: 533 },
//         state: "IDLE",
//         rotation: 0,
//       },
//       indexLines: [3],
//       targetPositions: [
//         { coordinate: { x: 180, y: 340 }, orientation: "LEFT" },
//       ],
//       indexArrival: 2,
//     },
//     {
//       arrow: {
//         index: 3,
//         orientation: "BOTTOM",
//         coordinate: { x: 180, y: 340 },
//         state: "IDLE",
//         rotation: 180,
//       },
//       indexLines: [2],
//       targetPositions: [
//         { coordinate: { x: 180, y: 533 }, orientation: "LEFT" },
//       ],
//       indexArrival: 3,
//     },
//   ],
//   lines: [
//     {
//       index: 0,
//       coordinate: { x: 78, y: 237 },
//       height: 4,
//       width: 261,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 1,
//       coordinate: { x: 71, y: 261 },
//       height: 4,
//       width: 261,
//       transform: { scale: "scaleX", origin: "left" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 2,
//       coordinate: { x: 195, y: 361 },
//       height: 208,
//       width: 4,
//       transform: { scale: "scaleY", origin: "bottom" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 3,
//       coordinate: { x: 214, y: 363 },
//       height: 202,
//       width: 4,
//       transform: { scale: "scaleY", origin: "top" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//   ],
//   stoppers: [],
//   arrivals: [
//     { index: 0, coordinate: { x: 41, y: 340 } },
//     { index: 1, coordinate: { x: 41, y: 445 } },
//     { index: 2, coordinate: { x: 301, y: 340 } },
//     { index: 3, coordinate: { x: 296, y: 460 } },
//   ],
// };

// Nivel 01
// const newLevelTest: ILevel = {
//   arrows: [
//     {
//       arrow: {
//         index: 0,
//         orientation: "RIGHT",
//         coordinate: { x: 134, y: 294 },
//         state: "IDLE",
//         rotation: 90,
//       },
//       indexLines: [0],
//       targetPositions: [
//         { coordinate: { x: 227, y: 294 }, orientation: "LEFT" },
//       ],
//       indexArrival: 0,
//     },
//     {
//       arrow: {
//         index: 1,
//         orientation: "LEFT",
//         coordinate: { x: 227, y: 387 },
//         state: "IDLE",
//         rotation: 270,
//       },
//       indexLines: [1],
//       targetPositions: [
//         { coordinate: { x: 134, y: 387 }, orientation: "LEFT" },
//       ],
//       indexArrival: 1,
//     },
//   ],
//   lines: [
//     {
//       index: 0,
//       coordinate: { x: 157, y: 317 },
//       height: 4,
//       width: 100,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 1,
//       coordinate: { x: 157, y: 411 },
//       height: 4,
//       width: 100,
//       transform: { scale: "scaleX", origin: "left" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//   ],
//   stoppers: [],
//   arrivals: [
//     { index: 0, coordinate: { x: 227, y: 294 } },
//     { index: 1, coordinate: { x: 134, y: 387 } },
//   ],
// };

// const newLevelTest: ILevel = {
//   arrows: [
//     {
//       arrow: {
//         index: 0,
//         orientation: "RIGHT",
//         coordinate: { x: 68, y: 228 },
//         state: "IDLE",
//         rotation: 90,
//       },
//       indexLines: [0, 1, 2, 3, 4],
//       targetPositions: [
//         { coordinate: { x: 124, y: 228 }, orientation: "BOTTOM" },
//         { coordinate: { x: 124, y: 394 }, orientation: "RIGHT" },
//         { coordinate: { x: 144, y: 394 }, orientation: "TOP" },
//         { coordinate: { x: 144, y: 228 }, orientation: "RIGHT" },
//         { coordinate: { x: 292, y: 228 }, orientation: "LEFT" },
//       ],
//       indexArrival: 0,
//     },
//     {
//       arrow: {
//         index: 1,
//         orientation: "BOTTOM",
//         coordinate: { x: 180, y: 265 },
//         state: "IDLE",
//         rotation: 180,
//       },
//       indexLines: [5, 6],
//       targetPositions: [
//         { coordinate: { x: 180, y: 303 }, orientation: "LEFT" },
//         { coordinate: { x: 68, y: 303 }, orientation: "LEFT" },
//       ],
//       indexArrival: 1,
//     },
//     {
//       arrow: {
//         index: 2,
//         orientation: "LEFT",
//         coordinate: { x: 292, y: 303 },
//         state: "IDLE",
//         rotation: 270,
//       },
//       indexLines: [7, 8, 9, 10, 11],
//       targetPositions: [
//         { coordinate: { x: 219, y: 303 }, orientation: "TOP" },
//         { coordinate: { x: 219, y: 247 }, orientation: "RIGHT" },
//         { coordinate: { x: 256, y: 247 }, orientation: "BOTTOM" },
//         { coordinate: { x: 256, y: 452 }, orientation: "RIGHT" },
//         { coordinate: { x: 292, y: 452 }, orientation: "LEFT" },
//       ],
//       indexArrival: 2,
//     },
//     {
//       arrow: {
//         index: 3,
//         orientation: "RIGHT",
//         coordinate: { x: 68, y: 378 },
//         state: "IDLE",
//         rotation: 90,
//       },
//       indexLines: [12, 13],
//       targetPositions: [
//         { coordinate: { x: 180, y: 378 }, orientation: "BOTTOM" },
//         { coordinate: { x: 180, y: 415 }, orientation: "LEFT" },
//       ],
//       indexArrival: 3,
//     },
//     {
//       arrow: {
//         index: 4,
//         orientation: "RIGHT",
//         coordinate: { x: 68, y: 452 },
//         state: "IDLE",
//         rotation: 90,
//       },
//       indexLines: [14, 15, 16],
//       targetPositions: [
//         { coordinate: { x: 219, y: 452 }, orientation: "TOP" },
//         { coordinate: { x: 219, y: 378 }, orientation: "RIGHT" },
//         { coordinate: { x: 292, y: 378 }, orientation: "LEFT" },
//       ],
//       indexArrival: 4,
//     },
//   ],
//   lines: [
//     {
//       index: 0,
//       coordinate: { x: 94, y: 254 },
//       height: 4,
//       width: 60,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 1,
//       coordinate: { x: 150, y: 254 },
//       height: 170,
//       width: 4,
//       transform: { scale: "scaleY", origin: "bottom" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 2,
//       coordinate: { x: 150, y: 420 },
//       height: 4,
//       width: 24,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 3,
//       coordinate: { x: 170, y: 254 },
//       height: 170,
//       width: 4,
//       transform: { scale: "scaleY", origin: "top" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 4,
//       coordinate: { x: 170, y: 254 },
//       height: 4,
//       width: 152,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 5,
//       coordinate: { x: 206, y: 291 },
//       height: 42,
//       width: 4,
//       transform: { scale: "scaleY", origin: "bottom" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 6,
//       coordinate: { x: 94, y: 329 },
//       height: 4,
//       width: 116,
//       transform: { scale: "scaleX", origin: "left" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 7,
//       coordinate: { x: 245, y: 329 },
//       height: 4,
//       width: 77,
//       transform: { scale: "scaleX", origin: "left" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 8,
//       coordinate: { x: 245, y: 273 },
//       height: 60,
//       width: 4,
//       transform: { scale: "scaleY", origin: "top" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 9,
//       coordinate: { x: 245, y: 273 },
//       height: 4,
//       width: 41,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 10,
//       coordinate: { x: 282, y: 273 },
//       height: 209,
//       width: 4,
//       transform: { scale: "scaleY", origin: "bottom" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 11,
//       coordinate: { x: 282, y: 478 },
//       height: 4,
//       width: 40,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 12,
//       coordinate: { x: 94, y: 404 },
//       height: 4,
//       width: 116,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 13,
//       coordinate: { x: 206, y: 404 },
//       height: 41,
//       width: 4,
//       transform: { scale: "scaleY", origin: "bottom" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//     {
//       index: 14,
//       coordinate: { x: 94, y: 478 },
//       height: 4,
//       width: 155,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 15,
//       coordinate: { x: 245, y: 404 },
//       height: 78,
//       width: 4,
//       transform: { scale: "scaleY", origin: "top" },
//       value: 1,
//       finish: "NEXT",
//     },
//     {
//       index: 16,
//       coordinate: { x: 245, y: 404 },
//       height: 4,
//       width: 77,
//       transform: { scale: "scaleX", origin: "right" },
//       value: 1,
//       finish: "ARRIVAL",
//     },
//   ],
//   stoppers: [],
//   arrivals: [
//     { index: 0, coordinate: { x: 292, y: 228 } },
//     { index: 1, coordinate: { x: 68, y: 303 } },
//     { index: 2, coordinate: { x: 292, y: 452 } },
//     { index: 3, coordinate: { x: 180, y: 415 } },
//     { index: 4, coordinate: { x: 292, y: 378 } },
//   ],
// };

export default newLevelTest;
