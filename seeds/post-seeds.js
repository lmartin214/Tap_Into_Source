const { Post } = require("../models");

const postData = [
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I drove right up!",
    testResults: "Lead - negative (<15ppb)",
    trailDifficulty: "easy",
    footTraffic: "a lil",
    parking: "yes plenty of parking",
    depth: "not a swimming spot",
    dogs: "we took our dog with no issues",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I hiked in!",
    testResults: "Copper - 0.05 , Chlorine - 0.2",
    trailDifficulty: "moderate",
    footTraffic: "moderate",
    parking: "some parking spots along the trail head",
    depth: "big pool of water underneath waterfall",
    dogs: "not sure",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I did some hiking AND some driving",
    testResults: " Nitrate - 0, Nitrite - 0.2",
    trailDifficulty: "moderate",
    footTraffic: "a lil",
    parking: "small parking lot next to trail",
    depth: "small but deep swimmable area, but signs say not to",
    dogs: "so many dogs on leashes and not",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I drove right up!",
    testResults: "Chlorine - 0.2",
    trailDifficulty: "easy",
    footTraffic: "moderate",
    parking: "designated, large parking area",
    depth: "water went up to our knees",
    dogs: "dogs must be on leash",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I hiked in!",
    testResults: "Hardness - 120",
    trailDifficulty: "easy",
    footTraffic: "heavy",
    parking: "very hard to find parking, park along side road if lucky",
    depth: "very deep, cliff jumping area",
    dogs: "no dogs allowed on this trail, private property",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I did some hiking AND some driving",
    testResults: "Coliform bacteria - present",
    trailDifficulty: "hard",
    footTraffic: "heavy",
    parking: "get here early to find parking",
    depth: "about 6ft deep",
    dogs: "we saw many dogs",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I hiked in!",
    testResults: "Coliform bacteria - not present",
    trailDifficulty: "hard",
    footTraffic: "moderate",
    parking: "parking area about a 3 mile walk from trailhead",
    depth: "not swimmable, too shallow and rocky",
    dogs: "dogs welcomed",
  },
  {
    type: "Waterfall",
    country: "United States",
    zip: 96816,
    state: "Hawaii",
    accessibility: "I drove right up!",
    testResults: "Total alkalinity - 40",
    trailDifficulty: "easy",
    footTraffic: "a lil",
    parking: "no parking",
    depth: "10 ft deep, enough to jump in from some high rocks",
    dogs: "dogs allowed, but on a leash",
  },
  {
    type: "Creek",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I drove right up!",
    testResults: "Lead - negative (<15ppb)",
    trailDifficulty: "easy",
    footTraffic: "a lil",
    parking: "yes plenty of parking",
    depth: "not a swimming spot",
    dogs: "we took our dog with no issues",
  },
  {
    type: "Lake",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I hiked in!",
    testResults: "Copper - 0.05 , Chlorine - 0.2",
    trailDifficulty: "moderate",
    footTraffic: "moderate",
    parking: "some parking spots along the trail head",
    depth: "big pool of water underneath waterfall",
    dogs: "not sure",
  },
  {
    type: "Hot-Spring",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I did some hiking AND some driving",
    testResults: " Nitrate - 0, Nitrite - 0.2",
    trailDifficulty: "moderate",
    footTraffic: "a lil",
    parking: "small parking lot next to trail",
    depth: "small but deep swimmable area, but signs say not to",
    dogs: "so many dogs on leashes and not",
  },
  {
    type: "Creek",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I drove right up!",
    testResults: "Chlorine - 0.2",
    trailDifficulty: "easy",
    footTraffic: "moderate",
    parking: "designated, large parking area",
    depth: "water went up to our knees",
    dogs: "dogs must be on leash",
  },
  {
    type: "Lake",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I hiked in!",
    testResults: "Hardness - 120",
    trailDifficulty: "easy",
    footTraffic: "heavy",
    parking: "very hard to find parking, park along side road if lucky",
    depth: "very deep, cliff jumping area",
    dogs: "no dogs allowed on this trail, private property",
  },
  {
    type: "River",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I did some hiking AND some driving",
    testResults: "Coliform bacteria - present",
    trailDifficulty: "hard",
    footTraffic: "heavy",
    parking: "get here early to find parking",
    depth: "about 6ft deep",
    dogs: "we saw many dogs",
  },
  {
    type: "River",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I hiked in!",
    testResults: "Coliform bacteria - not present",
    trailDifficulty: "hard",
    footTraffic: "moderate",
    parking: "parking area about a 3 mile walk from trailhead",
    depth: "not swimmable, too shallow and rocky",
    dogs: "dogs welcomed",
  },
  {
    type: "River",
    country: "United States",
    zip: 94583,
    state: "California",
    accessibility: "I drove right up!",
    testResults: "Total alkalinity - 40",
    trailDifficulty: "easy",
    footTraffic: "a lil",
    parking: "no parking",
    depth: "10 ft deep, enough to jump in from some high rocks",
    dogs: "dogs allowed, but on a leash",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;