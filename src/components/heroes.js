const avengers = [
  "Hulk ",
  "Captain America ",
  "Iron-Man ",
  "Thor ",
  "Black Panther ",
  "Black Widow ",
  "Doctor Strange ",
  "Spider-Man ",
];

const xmen = [
  "Wolverine ",
  "Cyclops ",
  "Jean grey ",
  "Professor x ",
  "Beast ",
  "Gambit ",
  "Night Crawler ",
  "Rogue ",
];

const justiceLeague = [
  "Batman ",
  "Superman ",
  "Wonder Woman ",
  "Hawk Girl ",
  "Green Lantern ",
  "Martian Manhunter ",
  "The Flash ",
  "Cyborg ",
];

const heroTeam = [avengers, xmen, justiceLeague];

export function heroTeams() {
  return heroTeam;
}

export function soundOff() {
  console.log("Test from heroes.js");
}

// first make heroTeams one big Array, then randomizer 1 vs randomizer 2, /==
// let r = randomizer(from 1 to Array.length+1)
// return heroes[r]
