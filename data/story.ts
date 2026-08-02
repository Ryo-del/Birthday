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
    "startTime": 12.3,
    "endTime": 17.5,
    "year": 1997,
    "words": [
      { "text": "I", "start": 12.3, "end": 12.6 },
      { "text": "close", "start": 12.7, "end": 13.2 },
      { "text": "my", "start": 13.3, "end": 13.6 },
      { "text": "eyes", "start": 13.7, "end": 14.5 },
      { "text": "and", "start": 14.6, "end": 14.9 },
      { "text": "I", "start": 15.0, "end": 15.3 },
      { "text": "can", "start": 15.4, "end": 15.8 },
      { "text": "see", "start": 15.9, "end": 17.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 2,
    "startTime": 17.6,
    "endTime": 22.8,
    "year": 1998,
    "words": [
      { "text": "A", "start": 17.6, "end": 17.8 },
      { "text": "world", "start": 17.9, "end": 18.4 },
      { "text": "that's", "start": 18.5, "end": 18.9 },
      { "text": "waiting", "start": 19.0, "end": 19.8 },
      { "text": "up", "start": 19.9, "end": 20.3 },
      { "text": "for", "start": 20.4, "end": 20.7 },
      { "text": "me", "start": 20.8, "end": 22.8 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 3,
    "startTime": 23.0,
    "endTime": 28.1,
    "year": 1999,
    "words": [
      { "text": "That", "start": 23.0, "end": 23.4 },
      { "text": "I", "start": 23.5, "end": 23.8 },
      { "text": "call", "start": 23.9, "end": 24.8 },
      { "text": "my", "start": 24.9, "end": 25.5 },
      { "text": "own", "start": 25.6, "end": 28.1 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 4,
    "startTime": 28.5,
    "endTime": 33.6,
    "year": 2000,
    "words": [
      { "text": "Through", "start": 28.5, "end": 29.1 },
      { "text": "the", "start": 29.2, "end": 29.4 },
      { "text": "dark,", "start": 29.5, "end": 30.2 },
      { "text": "through", "start": 30.3, "end": 30.7 },
      { "text": "the", "start": 30.8, "end": 31.0 },
      { "text": "door,", "start": 31.1, "end": 31.8 },
      { "text": "through", "start": 31.9, "end": 32.3 },
      { "text": "where", "start": 32.4, "end": 32.7 },
      { "text": "no", "start": 32.8, "end": 33.0 },
      { "text": "one's", "start": 33.1, "end": 33.3 },
      { "text": "been", "start": 33.4, "end": 33.6 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 5,
    "startTime": 33.7,
    "endTime": 38.8,
    "year": 2001,
    "words": [
      { "text": "before", "start": 33.7, "end": 34.6 },
      { "text": "But", "start": 34.7, "end": 35.1 },
      { "text": "it", "start": 35.2, "end": 35.4 },
      { "text": "feels", "start": 35.5, "end": 36.2 },
      { "text": "like", "start": 36.3, "end": 36.8 },
      { "text": "home", "start": 36.9, "end": 38.8 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 6,
    "startTime": 39.0,
    "endTime": 44.2,
    "year": 2002,
    "words": [
      { "text": "They", "start": 39.0, "end": 39.4 },
      { "text": "can", "start": 39.5, "end": 39.8 },
      { "text": "say,", "start": 39.9, "end": 40.3 },
      { "text": "they", "start": 40.4, "end": 40.7 },
      { "text": "can", "start": 40.8, "end": 41.1 },
      { "text": "say", "start": 41.2, "end": 41.6 },
      { "text": "it", "start": 41.7, "end": 41.9 },
      { "text": "all", "start": 42.0, "end": 42.2 },
      { "text": "sounds", "start": 42.3, "end": 42.9 },
      { "text": "crazy", "start": 43.0, "end": 44.2 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 7,
    "startTime": 44.3,
    "endTime": 49.3,
    "year": 2003,
    "words": [
      { "text": "They", "start": 44.3, "end": 44.7 },
      { "text": "can", "start": 44.8, "end": 45.1 },
      { "text": "say,", "start": 45.2, "end": 45.6 },
      { "text": "they", "start": 45.7, "end": 46.0 },
      { "text": "can", "start": 46.1, "end": 46.4 },
      { "text": "say", "start": 46.5, "end": 46.8 },
      { "text": "I've", "start": 46.9, "end": 47.1 },
      { "text": "lost", "start": 47.2, "end": 47.7 },
      { "text": "my", "start": 47.8, "end": 48.1 },
      { "text": "mind", "start": 48.2, "end": 49.3 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 8,
    "startTime": 49.5,
    "endTime": 54.7,
    "year": 2004,
    "words": [
      { "text": "I", "start": 49.5, "end": 49.8 },
      { "text": "don't", "start": 49.9, "end": 50.2 },
      { "text": "care,", "start": 50.3, "end": 50.8 },
      { "text": "I", "start": 50.9, "end": 51.1 },
      { "text": "don't", "start": 51.2, "end": 51.4 },
      { "text": "care", "start": 51.5, "end": 52.0 },
      { "text": "if", "start": 52.1, "end": 52.3 },
      { "text": "they", "start": 52.4, "end": 52.6 },
      { "text": "call", "start": 52.7, "end": 53.1 },
      { "text": "me", "start": 53.2, "end": 53.5 },
      { "text": "crazy", "start": 53.6, "end": 54.7 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 9,
    "startTime": 54.8,
    "endTime": 60.1,
    "year": 2005,
    "words": [
      { "text": "We", "start": 54.8, "end": 55.2 },
      { "text": "can", "start": 55.3, "end": 55.6 },
      { "text": "live", "start": 55.7, "end": 56.1 },
      { "text": "in", "start": 56.2, "end": 56.4 },
      { "text": "a", "start": 56.5, "end": 56.7 },
      { "text": "world", "start": 56.8, "end": 57.3 },
      { "text": "that", "start": 57.4, "end": 57.7 },
      { "text": "we", "start": 57.8, "end": 58.1 },
      { "text": "design", "start": 58.2, "end": 60.1 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 10,
    "startTime": 60.2,
    "endTime": 65.4,
    "year": 2006,
    "words": [
      { "text": "'Cause", "start": 60.2, "end": 60.6 },
      { "text": "every", "start": 60.7, "end": 61.2 },
      { "text": "night,", "start": 61.3, "end": 61.8 },
      { "text": "I", "start": 61.9, "end": 62.1 },
      { "text": "lie", "start": 62.2, "end": 62.6 },
      { "text": "in", "start": 62.7, "end": 62.9 },
      { "text": "bed", "start": 63.0, "end": 63.5 },
      { "text": "The", "start": 63.6, "end": 63.8 },
      { "text": "brightest", "start": 63.9, "end": 64.6 },
      { "text": "colors", "start": 64.7, "end": 65.4 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 11,
    "startTime": 65.5,
    "endTime": 70.8,
    "year": 2007,
    "words": [
      { "text": "fill", "start": 65.5, "end": 65.9 },
      { "text": "my", "start": 66.0, "end": 66.3 },
      { "text": "head", "start": 66.4, "end": 67.0 },
      { "text": "A", "start": 67.1, "end": 67.3 },
      { "text": "million", "start": 67.4, "end": 68.1 },
      { "text": "dreams", "start": 68.2, "end": 68.8 },
      { "text": "are", "start": 68.9, "end": 69.1 },
      { "text": "keeping", "start": 69.2, "end": 69.8 },
      { "text": "me", "start": 69.9, "end": 70.2 },
      { "text": "awake", "start": 70.3, "end": 70.8 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 12,
    "startTime": 70.9,
    "endTime": 76.1,
    "year": 2008,
    "words": [
      { "text": "I", "start": 70.9, "end": 71.1 },
      { "text": "think", "start": 71.2, "end": 71.6 },
      { "text": "of", "start": 71.7, "end": 71.9 },
      { "text": "what", "start": 72.0, "end": 72.3 },
      { "text": "the", "start": 72.4, "end": 72.6 },
      { "text": "world", "start": 72.7, "end": 73.2 },
      { "text": "could", "start": 73.3, "end": 73.7 },
      { "text": "be", "start": 73.8, "end": 74.3 },
      { "text": "A", "start": 74.4, "end": 74.6 },
      { "text": "vision", "start": 74.7, "end": 75.3 },
      { "text": "of", "start": 75.4, "end": 75.6 },
      { "text": "the", "start": 75.7, "end": 75.9 },
      { "text": "one", "start": 76.0, "end": 76.1 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 13,
    "startTime": 76.2,
    "endTime": 81.3,
    "year": 2009,
    "words": [
      { "text": "I", "start": 76.2, "end": 76.4 },
      { "text": "see", "start": 76.5, "end": 77.1 },
      { "text": "A", "start": 77.2, "end": 77.4 },
      { "text": "million", "start": 77.5, "end": 78.2 },
      { "text": "dreams", "start": 78.3, "end": 78.9 },
      { "text": "is", "start": 79.0, "end": 79.2 },
      { "text": "all", "start": 79.3, "end": 79.6 },
      { "text": "it's", "start": 79.7, "end": 80.0 },
      { "text": "gonna", "start": 80.1, "end": 80.5 },
      { "text": "take", "start": 80.6, "end": 81.3 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 14,
    "startTime": 81.4,
    "endTime": 88.0,
    "year": 2010,
    "words": [
      { "text": "Oh,", "start": 81.4, "end": 82.2 },
      { "text": "a", "start": 82.3, "end": 82.5 },
      { "text": "million", "start": 82.6, "end": 83.3 },
      { "text": "dreams", "start": 83.4, "end": 84.1 },
      { "text": "for", "start": 84.2, "end": 84.5 },
      { "text": "the", "start": 84.6, "end": 84.8 },
      { "text": "world", "start": 84.9, "end": 85.5 },
      { "text": "we're", "start": 85.6, "end": 86.0 },
      { "text": "gonna", "start": 86.1, "end": 86.6 },
      { "text": "make", "start": 86.7, "end": 88.0 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 15,
    "startTime": 93.3,
    "endTime": 98.5,
    "year": 2011,
    "words": [
      { "text": "There's", "start": 93.3, "end": 93.8 },
      { "text": "a", "start": 93.9, "end": 94.1 },
      { "text": "house", "start": 94.2, "end": 94.8 },
      { "text": "we", "start": 94.9, "end": 95.2 },
      { "text": "can", "start": 95.3, "end": 95.6 },
      { "text": "build", "start": 95.7, "end": 96.5 },
      { "text": "Every", "start": 96.6, "end": 97.1 },
      { "text": "room", "start": 97.2, "end": 97.7 },
      { "text": "inside", "start": 97.8, "end": 98.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 16,
    "startTime": 98.6,
    "endTime": 103.7,
    "year": 2012,
    "words": [
      { "text": "is", "start": 98.6, "end": 98.9 },
      { "text": "filled", "start": 99.0, "end": 99.6 },
      { "text": "With", "start": 99.7, "end": 100.0 },
      { "text": "things", "start": 100.1, "end": 100.7 },
      { "text": "from", "start": 100.8, "end": 101.2 },
      { "text": "far", "start": 101.3, "end": 102.1 },
      { "text": "away", "start": 102.2, "end": 103.7 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 17,
    "startTime": 104.2,
    "endTime": 109.3,
    "year": 2013,
    "words": [
      { "text": "Special", "start": 104.2, "end": 104.9 },
      { "text": "things", "start": 105.0, "end": 105.7 },
      { "text": "I", "start": 105.8, "end": 106.0 },
      { "text": "compile", "start": 106.1, "end": 107.1 },
      { "text": "Each", "start": 107.2, "end": 107.6 },
      { "text": "one", "start": 107.7, "end": 108.1 },
      { "text": "there", "start": 108.2, "end": 108.6 },
      { "text": "to", "start": 108.7, "end": 108.9 },
      { "text": "make", "start": 109.0, "end": 109.3 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 18,
    "startTime": 109.4,
    "endTime": 114.6,
    "year": 2014,
    "words": [
      { "text": "you", "start": 109.4, "end": 109.7 },
      { "text": "smile", "start": 109.8, "end": 110.8 },
      { "text": "On", "start": 110.9, "end": 111.2 },
      { "text": "a", "start": 111.3, "end": 111.5 },
      { "text": "rainy", "start": 111.6, "end": 112.5 },
      { "text": "day", "start": 112.6, "end": 114.6 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 19,
    "startTime": 115.0,
    "endTime": 120.2,
    "year": 2015,
    "words": [
      { "text": "They", "start": 115.0, "end": 115.4 },
      { "text": "can", "start": 115.5, "end": 115.8 },
      { "text": "say,", "start": 115.9, "end": 116.3 },
      { "text": "they", "start": 116.4, "end": 116.7 },
      { "text": "can", "start": 116.8, "end": 117.1 },
      { "text": "say", "start": 117.2, "end": 117.6 },
      { "text": "it", "start": 117.7, "end": 117.9 },
      { "text": "all", "start": 118.0, "end": 118.2 },
      { "text": "sounds", "start": 118.3, "end": 118.9 },
      { "text": "crazy", "start": 119.0, "end": 120.2 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 20,
    "startTime": 120.3,
    "endTime": 125.4,
    "year": 2016,
    "words": [
      { "text": "They", "start": 120.3, "end": 120.7 },
      { "text": "can", "start": 120.8, "end": 121.1 },
      { "text": "say,", "start": 121.2, "end": 121.6 },
      { "text": "they", "start": 121.7, "end": 122.0 },
      { "text": "can", "start": 122.1, "end": 122.4 },
      { "text": "say", "start": 122.5, "end": 122.8 },
      { "text": "we've", "start": 122.9, "end": 123.2 },
      { "text": "lost", "start": 123.3, "end": 123.8 },
      { "text": "our", "start": 123.9, "end": 124.2 },
      { "text": "minds", "start": 124.3, "end": 125.4 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 21,
    "startTime": 125.5,
    "endTime": 130.6,
    "year": 2017,
    "words": [
      { "text": "See,", "start": 125.5, "end": 125.8 },
      { "text": "I", "start": 125.9, "end": 126.1 },
      { "text": "don't", "start": 126.2, "end": 126.5 },
      { "text": "care,", "start": 126.6, "end": 127.1 },
      { "text": "I", "start": 127.2, "end": 127.4 },
      { "text": "don't", "start": 127.5, "end": 127.7 },
      { "text": "care", "start": 127.8, "end": 128.3 },
      { "text": "if", "start": 128.4, "end": 128.6 },
      { "text": "they", "start": 128.7, "end": 128.9 },
      { "text": "call", "start": 129.0, "end": 129.4 },
      { "text": "us", "start": 129.5, "end": 129.8 },
      { "text": "crazy", "start": 129.9, "end": 130.6 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 22,
    "startTime": 130.7,
    "endTime": 136.2,
    "year": 2018,
    "words": [
      { "text": "Run", "start": 130.7, "end": 131.2 },
      { "text": "away", "start": 131.3, "end": 132.0 },
      { "text": "to", "start": 132.1, "end": 132.4 },
      { "text": "a", "start": 132.5, "end": 132.7 },
      { "text": "world", "start": 132.8, "end": 133.3 },
      { "text": "that", "start": 133.4, "end": 133.7 },
      { "text": "we", "start": 133.8, "end": 134.1 },
      { "text": "design", "start": 134.2, "end": 136.2 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 23,
    "startTime": 136.3,
    "endTime": 141.5,
    "year": 2019,
    "words": [
      { "text": "'Cause", "start": 136.3, "end": 136.7 },
      { "text": "every", "start": 136.8, "end": 137.3 },
      { "text": "night,", "start": 137.4, "end": 137.9 },
      { "text": "I", "start": 138.0, "end": 138.2 },
      { "text": "lie", "start": 138.3, "end": 138.7 },
      { "text": "in", "start": 138.8, "end": 139.0 },
      { "text": "bed", "start": 139.1, "end": 139.6 },
      { "text": "The", "start": 139.7, "end": 139.9 },
      { "text": "brightest", "start": 140.0, "end": 140.7 },
      { "text": "colors", "start": 140.8, "end": 141.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 24,
    "startTime": 141.6,
    "endTime": 146.9,
    "year": 2020,
    "words": [
      { "text": "fill", "start": 141.6, "end": 142.0 },
      { "text": "my", "start": 142.1, "end": 142.4 },
      { "text": "head", "start": 142.5, "end": 143.1 },
      { "text": "A", "start": 143.2, "end": 143.4 },
      { "text": "million", "start": 143.5, "end": 144.2 },
      { "text": "dreams", "start": 144.3, "end": 144.9 },
      { "text": "are", "start": 145.0, "end": 145.2 },
      { "text": "keeping", "start": 145.3, "end": 145.9 },
      { "text": "me", "start": 146.0, "end": 146.3 },
      { "text": "awake", "start": 146.4, "end": 146.9 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 25,
    "startTime": 147.0,
    "endTime": 152.2,
    "year": 2021,
    "words": [
      { "text": "I", "start": 147.0, "end": 147.2 },
      { "text": "think", "start": 147.3, "end": 147.7 },
      { "text": "of", "start": 147.8, "end": 148.0 },
      { "text": "what", "start": 148.1, "end": 148.4 },
      { "text": "the", "start": 148.5, "end": 148.7 },
      { "text": "world", "start": 148.8, "end": 149.3 },
      { "text": "could", "start": 149.4, "end": 149.8 },
      { "text": "be", "start": 149.9, "end": 150.4 },
      { "text": "A", "start": 150.5, "end": 150.7 },
      { "text": "vision", "start": 150.8, "end": 151.4 },
      { "text": "of", "start": 151.5, "end": 151.7 },
      { "text": "the", "start": 151.8, "end": 152.0 },
      { "text": "one", "start": 152.1, "end": 152.2 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 26,
    "startTime": 152.3,
    "endTime": 157.4,
    "year": 2022,
    "words": [
      { "text": "I", "start": 152.3, "end": 152.5 },
      { "text": "see", "start": 152.6, "end": 153.2 },
      { "text": "A", "start": 153.3, "end": 153.5 },
      { "text": "million", "start": 153.6, "end": 154.3 },
      { "text": "dreams", "start": 154.4, "end": 155.0 },
      { "text": "is", "start": 155.1, "end": 155.3 },
      { "text": "all", "start": 155.4, "end": 155.7 },
      { "text": "it's", "start": 155.8, "end": 156.1 },
      { "text": "gonna", "start": 156.2, "end": 156.6 },
      { "text": "take", "start": 156.7, "end": 157.4 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 27,
    "startTime": 157.5,
    "endTime": 164.0,
    "year": 2023,
    "words": [
      { "text": "Oh,", "start": 157.5, "end": 158.3 },
      { "text": "a", "start": 158.4, "end": 158.6 },
      { "text": "million", "start": 158.7, "end": 159.4 },
      { "text": "dreams", "start": 159.5, "end": 160.2 },
      { "text": "for", "start": 160.3, "end": 160.6 },
      { "text": "the", "start": 160.7, "end": 160.9 },
      { "text": "world", "start": 161.0, "end": 161.6 },
      { "text": "we're", "start": 161.7, "end": 162.1 },
      { "text": "gonna", "start": 162.2, "end": 162.7 },
      { "text": "make", "start": 162.8, "end": 164.0 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 28,
    "startTime": 164.3,
    "endTime": 169.5,
    "year": 2024,
    "words": [
      { "text": "However", "start": 164.3, "end": 165.2 },
      { "text": "big,", "start": 165.3, "end": 166.0 },
      { "text": "however", "start": 166.1, "end": 167.0 },
      { "text": "small", "start": 167.1, "end": 167.9 },
      { "text": "Let", "start": 168.0, "end": 168.4 },
      { "text": "me", "start": 168.5, "end": 168.8 },
      { "text": "be", "start": 168.9, "end": 169.2 },
      { "text": "part", "start": 169.3, "end": 169.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 29,
    "startTime": 169.6,
    "endTime": 174.7,
    "year": 2025,
    "words": [
      { "text": "of", "start": 169.6, "end": 169.8 },
      { "text": "it", "start": 169.9, "end": 170.1 },
      { "text": "all", "start": 170.2, "end": 170.9 },
      { "text": "Share", "start": 171.0, "end": 171.6 },
      { "text": "your", "start": 171.7, "end": 172.1 },
      { "text": "dreams", "start": 172.2, "end": 173.1 },
      { "text": "with", "start": 173.2, "end": 173.6 },
      { "text": "me", "start": 173.7, "end": 174.7 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 30,
    "startTime": 174.8,
    "endTime": 180.0,
    "year": 2026,
    "words": [
      { "text": "We", "start": 174.8, "end": 175.2 },
      { "text": "may", "start": 175.3, "end": 175.6 },
      { "text": "be", "start": 175.7, "end": 176.0 },
      { "text": "right,", "start": 176.1, "end": 176.7 },
      { "text": "we", "start": 176.8, "end": 177.1 },
      { "text": "may", "start": 177.2, "end": 177.5 },
      { "text": "be", "start": 177.6, "end": 177.9 },
      { "text": "wrong", "start": 178.0, "end": 178.6 },
      { "text": "But", "start": 178.7, "end": 179.1 },
      { "text": "I", "start": 179.2, "end": 179.4 },
      { "text": "wanna", "start": 179.5, "end": 180.0 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 31,
    "startTime": 180.1,
    "endTime": 185.2,
    "year": 2027,
    "words": [
      { "text": "bring", "start": 180.1, "end": 180.6 },
      { "text": "you", "start": 180.7, "end": 181.0 },
      { "text": "along", "start": 181.1, "end": 181.8 },
      { "text": "To", "start": 181.9, "end": 182.2 },
      { "text": "the", "start": 182.3, "end": 182.5 },
      { "text": "world", "start": 182.6, "end": 183.1 },
      { "text": "I", "start": 183.2, "end": 183.5 },
      { "text": "see", "start": 183.6, "end": 185.2 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 32,
    "startTime": 185.3,
    "endTime": 190.5,
    "year": 2028,
    "words": [
      { "text": "To", "start": 185.3, "end": 185.6 },
      { "text": "the", "start": 185.7, "end": 185.9 },
      { "text": "world", "start": 186.0, "end": 186.5 },
      { "text": "we", "start": 186.6, "end": 186.9 },
      { "text": "close", "start": 187.0, "end": 187.6 },
      { "text": "our", "start": 187.7, "end": 188.0 },
      { "text": "eyes", "start": 188.1, "end": 188.8 },
      { "text": "to", "start": 188.9, "end": 189.2 },
      { "text": "see", "start": 189.3, "end": 190.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 33,
    "startTime": 190.6,
    "endTime": 195.7,
    "year": 2029,
    "words": [
      { "text": "We", "start": 190.6, "end": 191.0 },
      { "text": "close", "start": 191.1, "end": 191.7 },
      { "text": "our", "start": 191.8, "end": 192.1 },
      { "text": "eyes", "start": 192.2, "end": 193.1 },
      { "text": "to", "start": 193.2, "end": 193.6 },
      { "text": "see", "start": 193.7, "end": 195.7 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 34,
    "startTime": 195.8,
    "endTime": 201.0,
    "year": 2030,
    "words": [
      { "text": "'Cause", "start": 195.8, "end": 196.2 },
      { "text": "every", "start": 196.3, "end": 196.8 },
      { "text": "night,", "start": 196.9, "end": 197.4 },
      { "text": "I", "start": 197.5, "end": 197.7 },
      { "text": "lie", "start": 197.8, "end": 198.2 },
      { "text": "in", "start": 198.3, "end": 198.5 },
      { "text": "bed", "start": 198.6, "end": 199.1 },
      { "text": "The", "start": 199.2, "end": 199.4 },
      { "text": "brightest", "start": 199.5, "end": 200.2 },
      { "text": "colors", "start": 200.3, "end": 201.0 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 35,
    "startTime": 201.1,
    "endTime": 206.3,
    "year": 2031,
    "words": [
      { "text": "fill", "start": 201.1, "end": 201.5 },
      { "text": "my", "start": 201.6, "end": 201.9 },
      { "text": "head", "start": 202.0, "end": 202.6 },
      { "text": "A", "start": 202.7, "end": 202.9 },
      { "text": "million", "start": 203.0, "end": 203.7 },
      { "text": "dreams", "start": 203.8, "end": 204.4 },
      { "text": "are", "start": 204.5, "end": 204.7 },
      { "text": "keeping", "start": 204.8, "end": 205.4 },
      { "text": "me", "start": 205.5, "end": 205.8 },
      { "text": "awake", "start": 205.9, "end": 206.3 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 36,
    "startTime": 206.4,
    "endTime": 211.6,
    "year": 2032,
    "words": [
      { "text": "I", "start": 206.4, "end": 206.6 },
      { "text": "think", "start": 206.7, "end": 207.1 },
      { "text": "of", "start": 207.2, "end": 207.4 },
      { "text": "what", "start": 207.5, "end": 207.8 },
      { "text": "the", "start": 207.9, "end": 208.1 },
      { "text": "world", "start": 208.2, "end": 208.7 },
      { "text": "could", "start": 208.8, "end": 209.2 },
      { "text": "be", "start": 209.3, "end": 209.8 },
      { "text": "A", "start": 209.9, "end": 210.1 },
      { "text": "vision", "start": 210.2, "end": 210.8 },
      { "text": "of", "start": 210.9, "end": 211.1 },
      { "text": "the", "start": 211.2, "end": 211.4 },
      { "text": "one", "start": 211.5, "end": 211.6 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 37,
    "startTime": 211.7,
    "endTime": 216.9,
    "year": 2033,
    "words": [
      { "text": "I", "start": 211.7, "end": 211.9 },
      { "text": "see", "start": 212.0, "end": 212.6 },
      { "text": "A", "start": 212.7, "end": 212.9 },
      { "text": "million", "start": 213.0, "end": 213.7 },
      { "text": "dreams", "start": 213.8, "end": 214.4 },
      { "text": "is", "start": 214.5, "end": 214.7 },
      { "text": "all", "start": 214.8, "end": 215.1 },
      { "text": "it's", "start": 215.2, "end": 215.5 },
      { "text": "gonna", "start": 215.6, "end": 216.0 },
      { "text": "take", "start": 216.1, "end": 216.9 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 38,
    "startTime": 217.0,
    "endTime": 226.5,
    "year": 2034,
    "words": [
      { "text": "Oh,", "start": 217.0, "end": 217.8 },
      { "text": "a", "start": 217.9, "end": 218.1 },
      { "text": "million", "start": 218.2, "end": 218.9 },
      { "text": "dreams", "start": 219.0, "end": 219.7 },
      { "text": "for", "start": 219.8, "end": 220.1 },
      { "text": "the", "start": 220.2, "end": 220.4 },
      { "text": "world", "start": 220.5, "end": 221.1 },
      { "text": "we're", "start": 221.2, "end": 221.6 },
      { "text": "gonna", "start": 221.7, "end": 222.2 },
      { "text": "make", "start": 222.3, "end": 226.5 }
    ],
    "images": ["/images/1997-1.jpg"]
  },
  {
    "id": 39,
    "startTime": 226.6,
    "endTime": 232.0,
    "year": 2035,
    "words": [
      { "text": "For", "start": 226.6, "end": 227.1 },
      { "text": "the", "start": 227.2, "end": 227.4 },
      { "text": "world", "start": 227.5, "end": 228.1 },
      { "text": "we're", "start": 228.2, "end": 228.6 },
      { "text": "gonna", "start": 228.7, "end": 229.2 },
      { "text": "make", "start": 229.3, "end": 232.0 }
    ],
    "images": ["/images/1997-1.jpg"]
  }
];