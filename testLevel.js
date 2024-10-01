const arrows = [
  {
    index: 0,
    orientation: "RIGHT",
    coordinate: {
      x: 49,
      y: 190,
    },
    state: "IDLE",
    rotation: 90,
  },
  {
    index: 1,
    orientation: "RIGHT",
    coordinate: {
      x: 49,
      y: 265,
    },
    state: "IDLE",
    rotation: 90,
  },
  {
    index: 2,
    orientation: "RIGHT",
    coordinate: {
      x: 49,
      y: 340,
    },
    state: "IDLE",
    rotation: 90,
  },
  {
    index: 3,
    orientation: "RIGHT",
    coordinate: {
      x: 49,
      y: 415,
    },
    state: "IDLE",
    rotation: 90,
  },
  {
    index: 4,
    orientation: "RIGHT",
    coordinate: {
      x: 49,
      y: 491,
    },
    state: "IDLE",
    rotation: 90,
  },
];

const lines = [
  {
    index: 0,
    coordinate: {
      x: 71,
      y: 214,
    },
    height: 4,
    width: 230,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 1,
    coordinate: {
      x: 148,
      y: 252,
    },
    height: 4,
    width: 153,
    transform: {
      scale: "scaleX",
      origin: "left",
    },
    value: 1,
    finish: "ARRIVAL",
  },
  {
    index: 2,
    coordinate: {
      x: 298,
      y: 214,
    },
    height: 41,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "bottom",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 3,
    coordinate: {
      x: 71,
      y: 289,
    },
    height: 4,
    width: 62,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 4,
    coordinate: {
      x: 129,
      y: 456,
    },
    height: 4,
    width: 41,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "ARRIVAL",
  },
  {
    index: 5,
    coordinate: {
      x: 130,
      y: 291,
    },
    height: 169,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "bottom",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 6,
    coordinate: {
      x: 71,
      y: 364,
    },
    height: 4,
    width: 231,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "STOPPER",
  },
  {
    index: 7,
    coordinate: {
      x: 298,
      y: 364,
    },
    height: 154,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "bottom",
    },
    value: 1,
    finish: "ARRIVAL",
  },
  {
    index: 8,
    coordinate: {
      x: 71,
      y: 439,
    },
    height: 4,
    width: 44,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 9,
    coordinate: {
      x: 111,
      y: 383,
    },
    height: 85,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "top",
    },
    value: 0.7,
    finish: "NEXT",
  },
  {
    index: 10,
    coordinate: {
      x: 111,
      y: 383,
    },
    height: 4,
    width: 134,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 11,
    coordinate: {
      x: 241,
      y: 383,
    },
    height: 97,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "bottom",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 12,
    coordinate: {
      x: 241,
      y: 476,
    },
    height: 4,
    width: 116,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 13,
    coordinate: {
      x: 354,
      y: 289,
    },
    height: 191,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "top",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 14,
    coordinate: {
      x: 279,
      y: 289,
    },
    height: 4,
    width: 79,
    transform: {
      scale: "scaleX",
      origin: "left",
    },
    value: 1,
    finish: "ARRIVAL",
  },
  {
    index: 15,
    coordinate: {
      x: 71,
      y: 514,
    },
    height: 4,
    width: 137,
    transform: {
      scale: "scaleX",
      origin: "right",
    },
    value: 1,
    finish: "NEXT",
  },
  {
    index: 16,
    coordinate: {
      x: 204,
      y: 330,
    },
    height: 188,
    width: 4,
    transform: {
      scale: "scaleY",
      origin: "top",
    },
    value: 1,
    finish: "ARRIVAL",
  },
];

const arrival = [
  {
    index: 0,
    coordinate: {
      x: 124,
      y: 227,
    },
  },
  {
    index: 1,
    coordinate: {
      x: 143,
      y: 433,
    },
  },
  {
    index: 2,
    coordinate: {
      x: 274,
      y: 489,
    },
  },
  {
    index: 3,
    coordinate: {
      x: 255,
      y: 265,
    },
  },
  {
    index: 4,
    coordinate: {
      x: 180,
      y: 302,
    },
  },
];

const stoppers = [
  {
    index: 0,
    coordinate: {
      x: 293,
      y: 359,
    },
  },
];

const arrowLinks = {
  0: {
    lines: [0, 2, 1],
    arrival: 0,
  },
  1: {
    lines: [3, 5, 4],
    arrival: 1,
  },
  2: {
    lines: [6, 7],
    arrival: 2,
  },
  3: {
    lines: [8, 9, 10, 11, 12, 13, 14],
    arrival: 3,
  },
  4: {
    lines: [15, 16],
    arrival: 4,
  },
};

const testLevel = {
  arrows: [
    {
      arrow: {
        index: 0,
        orientation: "RIGHT",
        coordinate: {
          x: 49,
          y: 190,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [0, 2, 1],
      indexArrival: 0,
    },
    {
      arrow: {
        index: 1,
        orientation: "RIGHT",
        coordinate: {
          x: 49,
          y: 265,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [3, 5, 4],
      indexArrival: 1,
    },
    {
      arrow: {
        index: 2,
        orientation: "RIGHT",
        coordinate: {
          x: 49,
          y: 340,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [6, 7],
      indexArrival: 2,
    },
    {
      arrow: {
        index: 3,
        orientation: "RIGHT",
        coordinate: {
          x: 49,
          y: 415,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [8, 9, 10, 11, 12, 13, 14],
      indexArrival: 3,
    },
    {
      arrow: {
        index: 4,
        orientation: "RIGHT",
        coordinate: {
          x: 49,
          y: 491,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [15, 16],
      indexArrival: 4,
    },
  ],
  lines: [
    {
      index: 0,
      coordinate: {
        x: 71,
        y: 214,
      },
      height: 4,
      width: 230,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 1,
      coordinate: {
        x: 148,
        y: 252,
      },
      height: 4,
      width: 153,
      transform: {
        scale: "scaleX",
        origin: "left",
      },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 2,
      coordinate: {
        x: 298,
        y: 214,
      },
      height: 41,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "bottom",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 3,
      coordinate: {
        x: 71,
        y: 289,
      },
      height: 4,
      width: 62,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 4,
      coordinate: {
        x: 129,
        y: 456,
      },
      height: 4,
      width: 41,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 5,
      coordinate: {
        x: 130,
        y: 291,
      },
      height: 169,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "bottom",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 6,
      coordinate: {
        x: 71,
        y: 364,
      },
      height: 4,
      width: 231,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "STOPPER",
    },
    {
      index: 7,
      coordinate: {
        x: 298,
        y: 364,
      },
      height: 154,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "bottom",
      },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 8,
      coordinate: {
        x: 71,
        y: 439,
      },
      height: 4,
      width: 44,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 9,
      coordinate: {
        x: 111,
        y: 383,
      },
      height: 85,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "top",
      },
      value: 0.7,
      finish: "NEXT",
    },
    {
      index: 10,
      coordinate: {
        x: 111,
        y: 383,
      },
      height: 4,
      width: 134,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 11,
      coordinate: {
        x: 241,
        y: 383,
      },
      height: 97,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "bottom",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 12,
      coordinate: {
        x: 241,
        y: 476,
      },
      height: 4,
      width: 116,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 13,
      coordinate: {
        x: 354,
        y: 289,
      },
      height: 191,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "top",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 14,
      coordinate: {
        x: 279,
        y: 289,
      },
      height: 4,
      width: 79,
      transform: {
        scale: "scaleX",
        origin: "left",
      },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 15,
      coordinate: {
        x: 71,
        y: 514,
      },
      height: 4,
      width: 137,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "NEXT",
    },
    {
      index: 16,
      coordinate: {
        x: 204,
        y: 330,
      },
      height: 188,
      width: 4,
      transform: {
        scale: "scaleY",
        origin: "top",
      },
      value: 1,
      finish: "ARRIVAL",
    },
  ],
  stoppers: [
    {
      index: 0,
      coordinate: {
        x: 293,
        y: 359,
      },
    },
  ],
  arrivals: [
    {
      index: 0,
      coordinate: {
        x: 124,
        y: 227,
      },
    },
    {
      index: 1,
      coordinate: {
        x: 143,
        y: 433,
      },
    },
    {
      index: 2,
      coordinate: {
        x: 274,
        y: 489,
      },
    },
    {
      index: 3,
      coordinate: {
        x: 255,
        y: 265,
      },
    },
    {
      index: 4,
      coordinate: {
        x: 180,
        y: 302,
      },
    },
  ],
};

// level 01
const level01 = {
  arrows: [
    {
      arrow: {
        index: 0,
        orientation: "RIGHT",
        coordinate: {
          x: 133,
          y: 294,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [0],
      indexArrival: 0,
    },
    {
      arrow: {
        index: 1,
        orientation: "RIGHT",
        coordinate: {
          x: 133,
          y: 387,
        },
        state: "IDLE",
        rotation: 90,
      },
      indexLines: [1],
      indexArrival: 1,
    },
  ],
  lines: [
    {
      index: 0,
      coordinate: {
        x: 155,
        y: 317,
      },
      height: 4,
      width: 100,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "ARRIVAL",
    },
    {
      index: 1,
      coordinate: {
        x: 155,
        y: 410,
      },
      height: 4,
      width: 100,
      transform: {
        scale: "scaleX",
        origin: "right",
      },
      value: 1,
      finish: "ARRIVAL",
    },
  ],
  stoppers: [],
  arrivals: [
    {
      index: 0,
      coordinate: {
        x: 227,
        y: 294,
      },
    },
    {
      index: 1,
      coordinate: {
        x: 227,
        y: 387,
      },
    },
  ],
};

// Nivel completado...
const newLevelTest = {
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
      indexLines: [8, 9, 11, 10, 12, 13, 14],
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
      transform: { scale: "scaleY", origin: "top" },
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
  stoppers: [{ index: 0, coordinate: { x: 293, y: 359 } }],
  arrivals: [
    { index: 0, coordinate: { x: 124, y: 228 } },
    { index: 1, coordinate: { x: 143, y: 434 } },
    { index: 2, coordinate: { x: 274, y: 490 } },
    { index: 3, coordinate: { x: 255, y: 265 } },
    { index: 4, coordinate: { x: 180, y: 303 } },
  ],
};
