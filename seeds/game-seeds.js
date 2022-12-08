const { Game } = require('../models');

const gameData = [
    {
        name: 'Tom Clancy\'s Rainbow Six Siege',
        description: 'Tom Clancy\'s Rainbow Six Seige is a high-precision, tactical shooter that proioritises careful planning teamwork and finely tuned tatical play.',
        // rating: 4.5,
    },
    {
        name: 'Elden Ring',
        description: 'Elden Ring is an action role-playing game played in a third person perspective, with gameplay focusing on combat and exploration. It features elements similar to other games like Dark Souls Series, Bloodbourne, and Sekiro: Shadows Die Twice.',
        // rating: 4.5,
    },
    {
        name: 'Dead by Daylight',
        description: 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the Killer and the other four players are Survivors. The Suvivors must try to escape by repairing generators that power up two exit gates and avoid being caught and killed.',
        // rating: 4.5,
    },
    {
        name: 'Horizon Zero Dawn Complete Edition',
        description: 'Experience Aloy\'s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devasting tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!',
        // rating: 4.7,
    },
    {
        name: 'The Sims 4',
        description: 'Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that\'s wholly unique. Explore and customize every detail from Sims to homes and much more.',
        // rating: 4.1,
    },
    {
        name: 'Need for Speed Unbound',
        description: 'Race to the top, definitely don\'t flop. Outsmart the cops, and enter weekly qualifiers for The Grand: the ultimate street race. Pack your garage with precision-tuned, custom rides and light up the streets with your style.',
        // rating: 3.7,
    },
    {
        name: 'Call of Duty Modern Warefare II',
        description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
        // rating: 3.6,
    },
    {
        name: 'Apex Legends',
        description: 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.',
        // rating: 4.5,
    },
    {
        name: 'Red Dead Redemption 2',
        description: 'RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
        // rating: 4.8,
    },
    {
        name: 'Halo: The Master Chief Collection',
        description: 'The Master Chief\'s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you\'re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.',
        // rating: 4.5,
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames