export interface Word {
  text: string;
  start: number;
  end: number;
}

export interface StorySlide {
  id: number;
  startTime: number;
  endTime: number;
  year: number;
  words: Word[]; // Массив слов с таймингами
  images: string[];
}

export const STORY_DATA: StorySlide[] = [
  {
    "id": 1,
    "startTime": 16.663,
    "endTime": 19.009,
    "year": 1997,
    "words": [
      {
        "text": "I",
        "start": 16.663,
        "end": 17.175
      },
      {
        "text": "close",
        "start": 16.899,
        "end": 17.505
      },
      {
        "text": "my",
        "start": 17.129,
        "end": 17.702
      },
      {
        "text": "eyes",
        "start": 17.451,
        "end": 18.252
      },
      {
        "text": "and",
        "start": 18.323,
        "end": 18.624
      },
      {
        "text": "I",
        "start": 18.527,
        "end": 18.767
      },
      {
        "text": "can",
        "start": 18.769,
        "end": 20.128
      },
      {
        "text": "see",
        "start": 19.009,
        "end": 19.769
      }
    ],
    "images": [
      "/images/1.jpeg"
    ]
  },
  {
    "id": 2,
    "startTime": 19.928,
    "endTime": 22.326,
    "year": 1998,
    "words": [
      {
        "text": "A",
        "start": 19.928,
        "end": 20.637
      },
      {
        "text": "world",
        "start": 20.085,
        "end": 21.039
      },
      {
        "text": "that's",
        "start": 20.517,
        "end": 21.475
      },
      {
        "text": "waiting",
        "start": 20.663,
        "end": 21.712
      },
      {
        "text": "up",
        "start": 21.552,
        "end": 22.327
      },
      {
        "text": "for",
        "start": 22.083,
        "end": 22.975
      },
      {
        "text": "me",
        "start": 22.326,
        "end": 23.485
      }
    ],
    "images": [
      "/images/2.jpeg"
    ]
  },
  {
    "id": 3,
    "startTime": 23.724,
    "endTime": 25.855,
    "year": 1999,
    "words": [
      {
        "text": "That",
        "start": 23.724,
        "end": 24.531
      },
      {
        "text": "I",
        "start": 23.978,
        "end": 24.878
      },
      {
        "text": "call",
        "start": 24.156,
        "end": 25.512
      },
      {
        "text": "my",
        "start": 24.995,
        "end": 26.118
      },
      {
        "text": "own",
        "start": 25.855,
        "end": 27.422
      }
    ],
    "images": [
      "/images/3.jpeg"
    ]
  },
  {
    "id": 4,
    "startTime": 29.813,
    "endTime": 31.981,
    "year": 2000,
    "words": [
      {
        "text": "Through",
        "start": 29.813,
        "end": 30.856
      },
      {
        "text": "the",
        "start": 30.225,
        "end": 31.064
      },
      {
        "text": "dark,",
        "start": 30.39,
        "end": 31.765
      },
      {
        "text": "through",
        "start": 31.424,
        "end": 32.425
      },
      {
        "text": "the",
        "start": 31.791,
        "end": 32.739
      },
      {
        "text": "door",
        "start": 31.981,
        "end": 33.354
      }
    ],
    "images": [
      "/images/4.jpeg"
    ]
  },
  {
    "id": 5,
    "startTime": 33.016,
    "endTime": 35.138,
    "year": 2001,
    "words": [
      {
        "text": "Through",
        "start": 33.016,
        "end": 34.062
      },
      {
        "text": "where",
        "start": 33.444,
        "end": 34.457
      },
      {
        "text": "no",
        "start": 33.643,
        "end": 34.732
      },
      {
        "text": "one's",
        "start": 34.071,
        "end": 35.042
      },
      {
        "text": "been",
        "start": 34.443,
        "end": 35.612
      },
      {
        "text": "before",
        "start": 35.138,
        "end": 36.877
      }
    ],
    "images": [
      "/images/5.jpeg"
    ]
  },
  {
    "id": 6,
    "startTime": 36.689,
    "endTime": 38.705,
    "year": 2002,
    "words": [
      {
        "text": "But",
        "start": 36.689,
        "end": 37.434
      },
      {
        "text": "it",
        "start": 36.88,
        "end": 37.71
      },
      {
        "text": "feels",
        "start": 37.051,
        "end": 38.492
      },
      {
        "text": "like",
        "start": 37.846,
        "end": 39.271
      },
      {
        "text": "home",
        "start": 38.705,
        "end": 40.501
      }
    ],
    "images": [
      "/images/6.jpeg"
    ]
  },
  {
    "id": 7,
    "startTime": 42.392,
    "endTime": 45.034,
    "year": 2003,
    "words": [
      {
        "text": "They",
        "start": 42.392,
        "end": 43.069
      },
      {
        "text": "can",
        "start": 42.546,
        "end": 43.375
      },
      {
        "text": "say,",
        "start": 42.727,
        "end": 43.778
      },
      {
        "text": "they",
        "start": 43.221,
        "end": 44.065
      },
      {
        "text": "can",
        "start": 43.402,
        "end": 44.386
      },
      {
        "text": "say",
        "start": 43.567,
        "end": 44.596
      },
      {
        "text": "it",
        "start": 43.956,
        "end": 44.939
      },
      {
        "text": "all",
        "start": 44.424,
        "end": 45.154
      },
      {
        "text": "sounds",
        "start": 44.662,
        "end": 45.533
      },
      {
        "text": "crazy",
        "start": 45.034,
        "end": 47.352
      }
    ],
    "images": [
      "/images/7.jpeg"
    ]
  },
  {
    "id": 8,
    "startTime": 48.735,
    "endTime": 51.497,
    "year": 2004,
    "words": [
      {
        "text": "They",
        "start": 48.735,
        "end": 49.534
      },
      {
        "text": "can",
        "start": 48.99,
        "end": 49.742
      },
      {
        "text": "say,",
        "start": 49.166,
        "end": 50.268
      },
      {
        "text": "they",
        "start": 49.607,
        "end": 50.482
      },
      {
        "text": "can",
        "start": 49.793,
        "end": 50.678
      },
      {
        "text": "say",
        "start": 49.975,
        "end": 51.409
      },
      {
        "text": "I've",
        "start": 50.554,
        "end": 51.699
      },
      {
        "text": "lost",
        "start": 50.728,
        "end": 51.882
      },
      {
        "text": "my",
        "start": 51.213,
        "end": 52.109
      },
      {
        "text": "mind",
        "start": 51.497,
        "end": 53.785
      }
    ],
    "images": [
      "/images/8.jpeg"
    ]
  },
  {
    "id": 9,
    "startTime": 55.32,
    "endTime": 57.99,
    "year": 2005,
    "words": [
      {
        "text": "I",
        "start": 55.32,
        "end": 56.109
      },
      {
        "text": "don't",
        "start": 55.489,
        "end": 56.393
      },
      {
        "text": "care,",
        "start": 55.672,
        "end": 56.63
      },
      {
        "text": "I",
        "start": 56.079,
        "end": 57.05
      },
      {
        "text": "don't",
        "start": 56.256,
        "end": 57.326
      },
      {
        "text": "care,",
        "start": 56.435,
        "end": 57.687
      },
      {
        "text": "if",
        "start": 57.042,
        "end": 57.99
      },
      {
        "text": "they",
        "start": 57.208,
        "end": 58.171
      },
      {
        "text": "call",
        "start": 57.448,
        "end": 58.479
      },
      {
        "text": "me",
        "start": 57.746,
        "end": 58.733
      },
      {
        "text": "crazy",
        "start": 57.99,
        "end": 61.307
      }
    ],
    "images": [
      "/images/9.jpeg"
    ]
  },
  {
    "id": 10,
    "startTime": 61.687,
    "endTime": 64.297,
    "year": 2006,
    "words": [
      {
        "text": "We",
        "start": 61.687,
        "end": 62.482
      },
      {
        "text": "can",
        "start": 62.046,
        "end": 62.915
      },
      {
        "text": "live",
        "start": 62.186,
        "end": 63.282
      },
      {
        "text": "in",
        "start": 62.681,
        "end": 63.5
      },
      {
        "text": "a",
        "start": 62.854,
        "end": 63.694
      },
      {
        "text": "world",
        "start": 63.482,
        "end": 64.303
      },
      {
        "text": "that",
        "start": 63.604,
        "end": 64.659
      },
      {
        "text": "we",
        "start": 64.005,
        "end": 65.021
      },
      {
        "text": "design",
        "start": 64.297,
        "end": 67.869
      }
    ],
    "images": [
      "/images/10.jpeg"
    ]
  },
  {
    "id": 11,
    "startTime": 67.924,
    "endTime": 70.147,
    "year": 2007,
    "words": [
      {
        "text": "'Cause",
        "start": 67.924,
        "end": 68.562
      },
      {
        "text": "every",
        "start": 68.123,
        "end": 69.421
      },
      {
        "text": "night,",
        "start": 68.331,
        "end": 69.838
      },
      {
        "text": "I",
        "start": 69.105,
        "end": 70.353
      },
      {
        "text": "lie",
        "start": 69.267,
        "end": 70.591
      },
      {
        "text": "in",
        "start": 69.946,
        "end": 70.902
      },
      {
        "text": "bed",
        "start": 70.147,
        "end": 71.4
      }
    ],
    "images": [
      "/images/11.jpeg"
    ]
  },
  {
    "id": 12,
    "startTime": 71.041,
    "endTime": 73.28,
    "year": 2008,
    "words": [
      {
        "text": "The",
        "start": 71.041,
        "end": 71.855
      },
      {
        "text": "brightest",
        "start": 71.21,
        "end": 72.538
      },
      {
        "text": "colors",
        "start": 71.852,
        "end": 73.038
      },
      {
        "text": "fill",
        "start": 72.641,
        "end": 73.62
      },
      {
        "text": "my",
        "start": 72.97,
        "end": 74.008
      },
      {
        "text": "head",
        "start": 73.28,
        "end": 74.535
      }
    ],
    "images": [
      "/images/12.jpeg"
    ]
  },
  {
    "id": 13,
    "startTime": 74.232,
    "endTime": 77.383,
    "year": 2009,
    "words": [
      {
        "text": "A",
        "start": 74.232,
        "end": 74.995
      },
      {
        "text": "million",
        "start": 74.369,
        "end": 75.656
      },
      {
        "text": "dreams",
        "start": 74.963,
        "end": 76.162
      },
      {
        "text": "are",
        "start": 75.604,
        "end": 76.399
      },
      {
        "text": "keeping",
        "start": 75.753,
        "end": 77.167
      },
      {
        "text": "me",
        "start": 76.508,
        "end": 77.773
      },
      {
        "text": "awake",
        "start": 77.383,
        "end": 80.45
      }
    ],
    "images": [
      "/images/13.jpeg"
    ]
  },
  {
    "id": 14,
    "startTime": 80.747,
    "endTime": 83.073,
    "year": 2010,
    "words": [
      {
        "text": "I",
        "start": 80.747,
        "end": 81.455
      },
      {
        "text": "think",
        "start": 80.891,
        "end": 81.875
      },
      {
        "text": "of",
        "start": 81.368,
        "end": 82.2
      },
      {
        "text": "what",
        "start": 81.518,
        "end": 82.551
      },
      {
        "text": "the",
        "start": 82.027,
        "end": 82.853
      },
      {
        "text": "world",
        "start": 82.254,
        "end": 83.607
      },
      {
        "text": "could",
        "start": 82.854,
        "end": 83.937
      },
      {
        "text": "be",
        "start": 83.073,
        "end": 84.658
      }
    ],
    "images": [
      "/images/14.jpeg"
    ]
  },
  {
    "id": 15,
    "startTime": 83.919,
    "endTime": 86.35,
    "year": 2011,
    "words": [
      {
        "text": "A",
        "start": 83.919,
        "end": 85.035
      },
      {
        "text": "vision",
        "start": 84.078,
        "end": 85.42
      },
      {
        "text": "of",
        "start": 84.661,
        "end": 85.794
      },
      {
        "text": "the",
        "start": 84.853,
        "end": 86.167
      },
      {
        "text": "one",
        "start": 85.682,
        "end": 86.621
      },
      {
        "text": "I",
        "start": 86.099,
        "end": 86.895
      },
      {
        "text": "see",
        "start": 86.35,
        "end": 87.629
      }
    ],
    "images": [
      "/images/15.jpeg"
    ]
  },
  {
    "id": 16,
    "startTime": 87.245,
    "endTime": 90.127,
    "year": 2012,
    "words": [
      {
        "text": "A",
        "start": 87.245,
        "end": 87.996
      },
      {
        "text": "million",
        "start": 87.421,
        "end": 88.572
      },
      {
        "text": "dreams",
        "start": 87.959,
        "end": 89.142
      },
      {
        "text": "is",
        "start": 88.528,
        "end": 89.464
      },
      {
        "text": "all",
        "start": 88.676,
        "end": 89.767
      },
      {
        "text": "it's",
        "start": 89.311,
        "end": 90.366
      },
      {
        "text": "gonna",
        "start": 89.55,
        "end": 90.798
      },
      {
        "text": "take",
        "start": 90.127,
        "end": 93.383
      }
    ],
    "images": [
      "/images/16.jpeg"
    ]
  },
  {
    "id": 17,
    "startTime": 93.556,
    "endTime": 96.598,
    "year": 2013,
    "words": [
      {
        "text": "Oh,",
        "start": 93.556,
        "end": 95.114
      },
      {
        "text": "a",
        "start": 93.763,
        "end": 95.978
      },
      {
        "text": "million",
        "start": 93.955,
        "end": 96.569
      },
      {
        "text": "dreams",
        "start": 94.43,
        "end": 97.276
      },
      {
        "text": "for",
        "start": 95.112,
        "end": 97.727
      },
      {
        "text": "the",
        "start": 95.288,
        "end": 98.069
      },
      {
        "text": "world",
        "start": 95.467,
        "end": 98.418
      },
      {
        "text": "we're",
        "start": 95.885,
        "end": 98.808
      },
      {
        "text": "gonna",
        "start": 96.178,
        "end": 99.14
      },
      {
        "text": "make",
        "start": 96.598,
        "end": 100.109
      }
    ],
    "images": [
      "/images/17.jpeg"
    ]
  },
  {
    "id": 18,
    "startTime": 104.533,
    "endTime": 106.577,
    "year": 2014,
    "words": [
      {
        "text": "There's",
        "start": 104.533,
        "end": 106.661
      },
      {
        "text": "a",
        "start": 104.863,
        "end": 107.146
      },
      {
        "text": "house",
        "start": 104.997,
        "end": 108.18
      },
      {
        "text": "we",
        "start": 105.973,
        "end": 108.747
      },
      {
        "text": "can",
        "start": 106.405,
        "end": 109.085
      },
      {
        "text": "build",
        "start": 106.577,
        "end": 109.685
      }
    ],
    "images": [
      "/images/18.jpeg"
    ]
  },
  {
    "id": 19,
    "startTime": 107.683,
    "endTime": 113.852,
    "year": 2015,
    "words": [
      {
        "text": "Every",
        "start": 107.683,
        "end": 110.405
      },
      {
        "text": "room",
        "start": 108.181,
        "end": 110.986
      },
      {
        "text": "inside",
        "start": 108.73,
        "end": 111.999
      },
      {
        "text": "is",
        "start": 109.572,
        "end": 112.746
      },
      {
        "text": "filled",
        "start": 109.796,
        "end": 113.425
      },
      {
        "text": "with",
        "start": 111.496,
        "end": 114.285
      },
      {
        "text": "things",
        "start": 111.677,
        "end": 114.779
      },
      {
        "text": "from",
        "start": 112.079,
        "end": 115.43
      },
      {
        "text": "far",
        "start": 112.337,
        "end": 116.374
      },
      {
        "text": "away",
        "start": 113.852,
        "end": 118.565
      }
    ],
    "images": [
      "/images/19.jpeg"
    ]
  },
  {
    "id": 20,
    "startTime": 117.277,
    "endTime": 119.649,
    "year": 2016,
    "words": [
      {
        "text": "Special",
        "start": 117.277,
        "end": 120.223
      },
      {
        "text": "things",
        "start": 117.965,
        "end": 121.19
      },
      {
        "text": "I",
        "start": 119.097,
        "end": 121.942
      },
      {
        "text": "compile",
        "start": 119.649,
        "end": 122.775
      }
    ],
    "images": [
      "/images/20.jpeg"
    ]
  },
  {
    "id": 21,
    "startTime": 120.49,
    "endTime": 125.525,
    "year": 2017,
    "words": [
      {
        "text": "Each",
        "start": 120.49,
        "end": 123.638
      },
      {
        "text": "one",
        "start": 120.798,
        "end": 124.182
      },
      {
        "text": "there",
        "start": 121.232,
        "end": 124.672
      },
      {
        "text": "to",
        "start": 121.968,
        "end": 125.01
      },
      {
        "text": "make",
        "start": 122.202,
        "end": 125.668
      },
      {
        "text": "you",
        "start": 122.511,
        "end": 126.003
      },
      {
        "text": "smile",
        "start": 122.712,
        "end": 126.237
      },
      {
        "text": "on",
        "start": 124.269,
        "end": 126.966
      },
      {
        "text": "a",
        "start": 124.454,
        "end": 127.324
      },
      {
        "text": "rainy",
        "start": 124.628,
        "end": 128.566
      },
      {
        "text": "day",
        "start": 125.525,
        "end": 131.301
      }
    ],
    "images": [
      "/images/21.jpg"
    ]
  },
  {
    "id": 22,
    "startTime": 129.984,
    "endTime": 132.647,
    "year": 2018,
    "words": [
      {
        "text": "They",
        "start": 129.984,
        "end": 132.547
      },
      {
        "text": "can",
        "start": 130.159,
        "end": 132.884
      },
      {
        "text": "say,",
        "start": 130.405,
        "end": 133.161
      },
      {
        "text": "they",
        "start": 130.769,
        "end": 133.604
      },
      {
        "text": "can",
        "start": 130.929,
        "end": 134.14
      },
      {
        "text": "say",
        "start": 131.088,
        "end": 134.396
      },
      {
        "text": "it",
        "start": 131.522,
        "end": 134.742
      },
      {
        "text": "all",
        "start": 131.968,
        "end": 134.978
      },
      {
        "text": "sounds",
        "start": 132.196,
        "end": 135.32
      },
      {
        "text": "crazy",
        "start": 132.647,
        "end": 137.944
      }
    ],
    "images": [
      "/images/22.jpg"
    ]
  },
  {
    "id": 23,
    "startTime": 136.414,
    "endTime": 138.957,
    "year": 2019,
    "words": [
      {
        "text": "They",
        "start": 136.414,
        "end": 138.679
      },
      {
        "text": "can",
        "start": 136.563,
        "end": 138.974
      },
      {
        "text": "say,",
        "start": 136.752,
        "end": 139.264
      },
      {
        "text": "they",
        "start": 137.122,
        "end": 139.768
      },
      {
        "text": "can",
        "start": 137.347,
        "end": 140.054
      },
      {
        "text": "say",
        "start": 137.543,
        "end": 140.305
      },
      {
        "text": "we've",
        "start": 137.905,
        "end": 140.888
      },
      {
        "text": "lost",
        "start": 138.108,
        "end": 141.429
      },
      {
        "text": "our",
        "start": 138.764,
        "end": 141.902
      },
      {
        "text": "minds",
        "start": 138.957,
        "end": 144.092
      }
    ],
    "images": [
      "/images/23.jpg"
    ]
  },
  {
    "id": 24,
    "startTime": 142.818,
    "endTime": 145.539,
    "year": 2020,
    "words": [
      {
        "text": "See,",
        "start": 142.818,
        "end": 145.158
      },
      {
        "text": "I",
        "start": 143.066,
        "end": 145.712
      },
      {
        "text": "don't",
        "start": 143.246,
        "end": 146.043
      },
      {
        "text": "care,",
        "start": 143.633,
        "end": 146.356
      },
      {
        "text": "I",
        "start": 143.828,
        "end": 146.892
      },
      {
        "text": "don't",
        "start": 143.932,
        "end": 147.245
      },
      {
        "text": "care",
        "start": 144.081,
        "end": 147.536
      },
      {
        "text": "if",
        "start": 144.573,
        "end": 147.88
      },
      {
        "text": "they",
        "start": 144.754,
        "end": 148.206
      },
      {
        "text": "call",
        "start": 145.099,
        "end": 148.865
      },
      {
        "text": "us",
        "start": 145.379,
        "end": 149.152
      },
      {
        "text": "crazy",
        "start": 145.539,
        "end": 150.922
      }
    ],
    "images": [
      "/images/24.jpg"
    ]
  },
  {
    "id": 25,
    "startTime": 149.28,
    "endTime": 151.829,
    "year": 2021,
    "words": [
      {
        "text": "Run",
        "start": 149.28,
        "end": 151.698
      },
      {
        "text": "away",
        "start": 149.677,
        "end": 152.243
      },
      {
        "text": "to",
        "start": 150.207,
        "end": 152.9
      },
      {
        "text": "a",
        "start": 150.394,
        "end": 153.271
      },
      {
        "text": "world",
        "start": 150.61,
        "end": 153.556
      },
      {
        "text": "that",
        "start": 151.043,
        "end": 154.159
      },
      {
        "text": "we",
        "start": 151.205,
        "end": 154.94
      },
      {
        "text": "design",
        "start": 151.829,
        "end": 157.23
      }
    ],
    "images": [
      "/images/25.jpg"
    ]
  },
  {
    "id": 26,
    "startTime": 155.473,
    "endTime": 157.704,
    "year": 2022,
    "words": [
      {
        "text": "'Cause",
        "start": 155.473,
        "end": 157.863
      },
      {
        "text": "every",
        "start": 155.628,
        "end": 158.208
      },
      {
        "text": "night,",
        "start": 156.098,
        "end": 159.062
      },
      {
        "text": "I",
        "start": 156.724,
        "end": 159.511
      },
      {
        "text": "lie",
        "start": 156.882,
        "end": 160.02
      },
      {
        "text": "in",
        "start": 157.47,
        "end": 160.387
      },
      {
        "text": "bed",
        "start": 157.704,
        "end": 160.936
      }
    ],
    "images": [
      "/images/26.jpg"
    ]
  },
  {
    "id": 27,
    "startTime": 158.591,
    "endTime": 160.871,
    "year": 2023,
    "words": [
      {
        "text": "The",
        "start": 158.591,
        "end": 161.501
      },
      {
        "text": "brightest",
        "start": 158.79,
        "end": 161.837
      },
      {
        "text": "colors",
        "start": 159.524,
        "end": 162.403
      },
      {
        "text": "fill",
        "start": 160.093,
        "end": 162.91
      },
      {
        "text": "my",
        "start": 160.473,
        "end": 163.358
      },
      {
        "text": "head",
        "start": 160.871,
        "end": 164.248
      }
    ],
    "images": [
      "/images/27.jpg"
    ]
  },
  {
    "id": 28,
    "startTime": 161.72,
    "endTime": 164.871,
    "year": 2024,
    "words": [
      {
        "text": "A",
        "start": 161.72,
        "end": 164.681
      },
      {
        "text": "million",
        "start": 161.888,
        "end": 164.971
      },
      {
        "text": "dreams",
        "start": 162.545,
        "end": 165.498
      },
      {
        "text": "are",
        "start": 163.259,
        "end": 166.009
      },
      {
        "text": "keeping",
        "start": 163.503,
        "end": 166.657
      },
      {
        "text": "me",
        "start": 164.123,
        "end": 167.301
      },
      {
        "text": "awake",
        "start": 164.871,
        "end": 169.872
      }
    ],
    "images": [
      "/images/28.jpg"
    ]
  },
  {
    "id": 29,
    "startTime": 168.269,
    "endTime": 170.564,
    "year": 2025,
    "words": [
      {
        "text": "I",
        "start": 168.269,
        "end": 170.538
      },
      {
        "text": "think",
        "start": 168.45,
        "end": 170.857
      },
      {
        "text": "of",
        "start": 168.863,
        "end": 171.221
      },
      {
        "text": "what",
        "start": 169.002,
        "end": 171.699
      },
      {
        "text": "the",
        "start": 169.477,
        "end": 172.348
      },
      {
        "text": "world",
        "start": 169.748,
        "end": 172.772
      },
      {
        "text": "could",
        "start": 170.245,
        "end": 173.245
      },
      {
        "text": "be",
        "start": 170.564,
        "end": 173.659
      }
    ],
    "images": [
      "/images/29.jpg"
    ]
  },
  {
    "id": 30,
    "startTime": 171.538,
    "endTime": 173.832,
    "year": 2026,
    "words": [
      {
        "text": "A",
        "start": 171.538,
        "end": 174.161
      },
      {
        "text": "vision",
        "start": 171.666,
        "end": 174.571
      },
      {
        "text": "of",
        "start": 172.135,
        "end": 174.954
      },
      {
        "text": "the",
        "start": 172.6,
        "end": 175.402
      },
      {
        "text": "one",
        "start": 172.789,
        "end": 175.874
      },
      {
        "text": "I",
        "start": 173.414,
        "end": 176.415
      },
      {
        "text": "see",
        "start": 173.832,
        "end": 176.647
      }
    ],
    "images": [
      "/images/30.jpg"
    ]
  },
  {
    "id": 31,
    "startTime": 174.788,
    "endTime": 177.518,
    "year": 2027,
    "words": [
      {
        "text": "A",
        "start": 174.788,
        "end": 177.567
      },
      {
        "text": "million",
        "start": 174.92,
        "end": 177.87
      },
      {
        "text": "dreams",
        "start": 175.43,
        "end": 178.544
      },
      {
        "text": "is",
        "start": 176.003,
        "end": 178.926
      },
      {
        "text": "all",
        "start": 176.276,
        "end": 179.19
      },
      {
        "text": "it's",
        "start": 176.784,
        "end": 179.571
      },
      {
        "text": "gonna",
        "start": 177.251,
        "end": 179.866
      },
      {
        "text": "take",
        "start": 177.518,
        "end": 182.854
      }
    ],
    "images": [
      "/images/31.jpg"
    ]
  },
  {
    "id": 32,
    "startTime": 181.195,
    "endTime": 184.086,
    "year": 2028,
    "words": [
      {
        "text": "Oh,",
        "start": 181.195,
        "end": 183.611
      },
      {
        "text": "a",
        "start": 181.325,
        "end": 184.033
      },
      {
        "text": "million",
        "start": 181.477,
        "end": 184.337
      },
      {
        "text": "dreams",
        "start": 181.93,
        "end": 184.917
      },
      {
        "text": "for",
        "start": 182.592,
        "end": 185.247
      },
      {
        "text": "the",
        "start": 182.871,
        "end": 185.574
      },
      {
        "text": "world",
        "start": 183.032,
        "end": 185.909
      },
      {
        "text": "we're",
        "start": 183.365,
        "end": 186.241
      },
      {
        "text": "gonna",
        "start": 183.63,
        "end": 186.666
      },
      {
        "text": "make",
        "start": 184.086,
        "end": 187.498
      }
    ],
    "images": [
      "/images/32.jpg"
    ]
  },
  {
    "id": 33,
    "startTime": 185.374,
    "endTime": 187.596,
    "year": 2029,
    "words": [
      {
        "text": "However",
        "start": 185.374,
        "end": 188.178
      },
      {
        "text": "big,",
        "start": 186.044,
        "end": 189.688
      },
      {
        "text": "however",
        "start": 186.985,
        "end": 190.062
      },
      {
        "text": "small",
        "start": 187.596,
        "end": 191.077
      }
    ],
    "images": [
      "/images/33.jpg"
    ]
  },
  {
    "id": 34,
    "startTime": 188.655,
    "endTime": 190.937,
    "year": 2030,
    "words": [
      {
        "text": "Let",
        "start": 188.655,
        "end": 191.687
      },
      {
        "text": "me",
        "start": 188.944,
        "end": 191.991
      },
      {
        "text": "be",
        "start": 189.113,
        "end": 192.258
      },
      {
        "text": "part",
        "start": 189.285,
        "end": 192.735
      },
      {
        "text": "of",
        "start": 190.117,
        "end": 193.227
      },
      {
        "text": "it",
        "start": 190.817,
        "end": 193.763
      },
      {
        "text": "all",
        "start": 190.937,
        "end": 194.73
      }
    ],
    "images": [
      "/images/34.jpg"
    ]
  },
  {
    "id": 35,
    "startTime": 192.77,
    "endTime": 195.083,
    "year": 2031,
    "words": [
      {
        "text": "Share",
        "start": 192.77,
        "end": 195.553
      },
      {
        "text": "your",
        "start": 193.299,
        "end": 196.337
      },
      {
        "text": "dreams",
        "start": 193.567,
        "end": 197.292
      },
      {
        "text": "with",
        "start": 194.879,
        "end": 197.646
      },
      {
        "text": "me",
        "start": 195.083,
        "end": 199.473
      }
    ],
    "images": [
      "/images/35.jpg"
    ]
  },
  {
    "id": 36,
    "startTime": 198.342,
    "endTime": 200.737,
    "year": 2032,
    "words": [
      {
        "text": "We",
        "start": 198.342,
        "end": 200.605
      },
      {
        "text": "may",
        "start": 198.512,
        "end": 201.194
      },
      {
        "text": "be",
        "start": 198.899,
        "end": 201.61
      },
      {
        "text": "right,",
        "start": 199.089,
        "end": 202.193
      },
      {
        "text": "we",
        "start": 199.97,
        "end": 202.642
      },
      {
        "text": "may",
        "start": 200.111,
        "end": 202.992
      },
      {
        "text": "be",
        "start": 200.502,
        "end": 203.604
      },
      {
        "text": "wrong",
        "start": 200.737,
        "end": 204.186
      }
    ],
    "images": [
      "/images/36.jpg"
    ]
  },
  {
    "id": 37,
    "startTime": 201.483,
    "endTime": 206.879,
    "year": 2033,
    "words": [
      {
        "text": "But",
        "start": 201.483,
        "end": 204.489
      },
      {
        "text": "I",
        "start": 201.669,
        "end": 204.961
      },
      {
        "text": "wanna",
        "start": 201.951,
        "end": 205.33
      },
      {
        "text": "bring",
        "start": 202.261,
        "end": 205.811
      },
      {
        "text": "you",
        "start": 203.128,
        "end": 206.283
      },
      {
        "text": "along",
        "start": 203.802,
        "end": 207.49
      },
      {
        "text": "to",
        "start": 205.385,
        "end": 207.796
      },
      {
        "text": "the",
        "start": 205.574,
        "end": 208.545
      },
      {
        "text": "world",
        "start": 205.825,
        "end": 208.787
      },
      {
        "text": "I",
        "start": 206.461,
        "end": 209.295
      },
      {
        "text": "see",
        "start": 206.879,
        "end": 210.235
      }
    ],
    "images": [
      "/images/37.jpg"
    ]
  },
  {
    "id": 38,
    "startTime": 208.603,
    "endTime": 212.096,
    "year": 2034,
    "words": [
      {
        "text": "To",
        "start": 208.603,
        "end": 210.883
      },
      {
        "text": "the",
        "start": 208.784,
        "end": 211.256
      },
      {
        "text": "world",
        "start": 209.038,
        "end": 211.676
      },
      {
        "text": "we",
        "start": 209.399,
        "end": 212.079
      },
      {
        "text": "close",
        "start": 209.715,
        "end": 212.839
      },
      {
        "text": "our",
        "start": 210.194,
        "end": 213.163
      },
      {
        "text": "eyes",
        "start": 210.604,
        "end": 213.719
      },
      {
        "text": "to",
        "start": 211.855,
        "end": 214.592
      },
      {
        "text": "see",
        "start": 212.096,
        "end": 215.056
      }
    ],
    "images": [
      "/images/38.jpg"
    ]
  },
  {
    "id": 39,
    "startTime": 212.913,
    "endTime": 215.232,
    "year": 2035,
    "words": [
      {
        "text": "We",
        "start": 212.913,
        "end": 215.929
      },
      {
        "text": "close",
        "start": 213.115,
        "end": 216.179
      },
      {
        "text": "our",
        "start": 213.432,
        "end": 216.453
      },
      {
        "text": "eyes",
        "start": 213.779,
        "end": 217.252
      },
      {
        "text": "to",
        "start": 215.024,
        "end": 217.835
      },
      {
        "text": "see",
        "start": 215.232,
        "end": 220.852
      }
    ],
    "images": [
      "/images/39.jpg"
    ]
  },
  {
    "id": 40,
    "startTime": 218.747,
    "endTime": 221.06,
    "year": 2036,
    "words": [
      {
        "text": "Every",
        "start": 218.747,
        "end": 221.636
      },
      {
        "text": "night,",
        "start": 219.363,
        "end": 222.208
      },
      {
        "text": "I",
        "start": 220.079,
        "end": 222.815
      },
      {
        "text": "lie",
        "start": 220.274,
        "end": 223.227
      },
      {
        "text": "in",
        "start": 220.857,
        "end": 223.792
      },
      {
        "text": "bed",
        "start": 221.06,
        "end": 224.339
      }
    ],
    "images": [
      "/images/40.jpg"
    ]
  },
  {
    "id": 41,
    "startTime": 221.865,
    "endTime": 224.223,
    "year": 2037,
    "words": [
      {
        "text": "The",
        "start": 221.865,
        "end": 225.188
      },
      {
        "text": "brightest",
        "start": 222.061,
        "end": 225.718
      },
      {
        "text": "colors",
        "start": 222.776,
        "end": 226.258
      },
      {
        "text": "fill",
        "start": 223.464,
        "end": 226.577
      },
      {
        "text": "my",
        "start": 223.797,
        "end": 227.05
      },
      {
        "text": "head",
        "start": 224.223,
        "end": 227.392
      }
    ],
    "images": [
      "/images/41.jpg"
    ]
  },
  {
    "id": 42,
    "startTime": 225.191,
    "endTime": 228.062,
    "year": 2038,
    "words": [
      {
        "text": "A",
        "start": 225.191,
        "end": 228.27
      },
      {
        "text": "million",
        "start": 225.393,
        "end": 228.615
      },
      {
        "text": "dreams",
        "start": 225.784,
        "end": 229.07
      },
      {
        "text": "are",
        "start": 226.358,
        "end": 229.424
      },
      {
        "text": "keeping",
        "start": 226.558,
        "end": 229.907
      },
      {
        "text": "me",
        "start": 227.385,
        "end": 230.539
      },
      {
        "text": "awake",
        "start": 228.062,
        "end": 233.615
      }
    ],
    "images": [
      "/images/42.jpg"
    ]
  },
  {
    "id": 43,
    "startTime": 231.589,
    "endTime": 233.899,
    "year": 2039,
    "words": [
      {
        "text": "I",
        "start": 231.589,
        "end": 233.912
      },
      {
        "text": "think",
        "start": 231.757,
        "end": 234.394
      },
      {
        "text": "of",
        "start": 232.161,
        "end": 234.727
      },
      {
        "text": "what",
        "start": 232.319,
        "end": 235.047
      },
      {
        "text": "the",
        "start": 232.872,
        "end": 235.492
      },
      {
        "text": "world",
        "start": 233.054,
        "end": 235.967
      },
      {
        "text": "could",
        "start": 233.63,
        "end": 236.435
      },
      {
        "text": "be",
        "start": 233.899,
        "end": 237.04
      }
    ],
    "images": [
      "/images/43.jpg"
    ]
  },
  {
    "id": 44,
    "startTime": 234.797,
    "endTime": 237.128,
    "year": 2040,
    "words": [
      {
        "text": "A",
        "start": 234.797,
        "end": 237.751
      },
      {
        "text": "vision",
        "start": 234.945,
        "end": 238.141
      },
      {
        "text": "of",
        "start": 235.524,
        "end": 238.505
      },
      {
        "text": "the",
        "start": 236.094,
        "end": 238.845
      },
      {
        "text": "one",
        "start": 236.294,
        "end": 239.279
      },
      {
        "text": "I",
        "start": 236.755,
        "end": 239.755
      },
      {
        "text": "see",
        "start": 237.128,
        "end": 240.408
      }
    ],
    "images": [
      "/images/44.jpg"
    ]
  },
  {
    "id": 45,
    "startTime": 238.089,
    "endTime": 241.058,
    "year": 2041,
    "words": [
      {
        "text": "A",
        "start": 238.089,
        "end": 241.087
      },
      {
        "text": "million",
        "start": 238.22,
        "end": 241.444
      },
      {
        "text": "dreams",
        "start": 238.717,
        "end": 241.752
      },
      {
        "text": "is",
        "start": 239.335,
        "end": 242.21
      },
      {
        "text": "all",
        "start": 239.533,
        "end": 242.502
      },
      {
        "text": "it's",
        "start": 240.05,
        "end": 242.967
      },
      {
        "text": "gonna",
        "start": 240.611,
        "end": 243.267
      },
      {
        "text": "take",
        "start": 241.058,
        "end": 246.367
      }
    ],
    "images": [
      "/images/45.jpg"
    ]
  },
  {
    "id": 46,
    "startTime": 244.517,
    "endTime": 247.54,
    "year": 2042,
    "words": [
      {
        "text": "A",
        "start": 244.517,
        "end": 246.858
      },
      {
        "text": "million",
        "start": 244.653,
        "end": 247.233
      },
      {
        "text": "dreams",
        "start": 245.196,
        "end": 248.079
      },
      {
        "text": "for",
        "start": 245.805,
        "end": 248.788
      },
      {
        "text": "the",
        "start": 246.036,
        "end": 249.274
      },
      {
        "text": "world",
        "start": 246.194,
        "end": 249.744
      },
      {
        "text": "we're",
        "start": 246.468,
        "end": 250.165
      },
      {
        "text": "gonna",
        "start": 247.094,
        "end": 250.654
      },
      {
        "text": "make",
        "start": 247.54,
        "end": 256.076
      }
    ],
    "images": [
      "/images/46.jpg"
    ]
  },
  {
    "id": 47,
    "startTime": 255.58,
    "endTime": 257.2,
    "year": 2043,
    "words": [
      {
        "text": "For",
        "start": 255.58,
        "end": 258.412
      },
      {
        "text": "the",
        "start": 255.793,
        "end": 258.733
      },
      {
        "text": "world",
        "start": 255.959,
        "end": 259.167
      },
      {
        "text": "we're",
        "start": 256.432,
        "end": 259.609
      },
      {
        "text": "gonna",
        "start": 256.747,
        "end": 260.051
      },
      {
        "text": "make",
        "start": 257.2,
        "end": 262.006
      }
    ],
    "images": [
      "/images/47.jpg"
    ]
  }
];