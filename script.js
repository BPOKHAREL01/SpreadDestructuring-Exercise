//1A.
const mcuShows=["Loki", "Moon Knight"];
//1B.
const starWarsShows=["The Mandalorian", "The Book of Boba Fett"];
//1C.
const disneyPlusShows=[...mcuShows, ...starWarsShows, "The Beatles: Get Back"];
//1D.
console.log(disneyPlusShows); 

//2A.
const netflixMovie={action:"Extraction", crime:"Irishman"};

//2B.
const amazonPrimeMovies={action:"The Tomorrow War",
    action:"The Tomorrow War",
    drama:"One Night in Miami"    
};
//2C.
const streamingMovies={
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical:'Hamilton',
};
//2D.
console.log(streammingMovies);

//3A.
const disneyJunior=[
    'Mickey Mouse Clubhouse',
    'Spidey and His Amazing Friends'];
console.log(disneyJunior);
//3B.
const[mickey, spidey] = disneyJunior;
//3C.
console.log(disneyJunior);
//OR
console.log(mickey);
console.log(spidey);
//OR
console.log(mickey,spidey);

//4A.
const avengers={warMachine:'James Phodes',
theHulk:'Bruce Banner'};
//4B.
const {warMachine, theHulk}=avengers;
//4C.
console.log(warMachine,theHulk);
//4D.
const moreAvengers= {
    backWidow: 'Natasha Romanoff',
    hawkeye:'Client Barton',
    ironMan:'Tony Stark'
};
//4E.
const {blackWidow:nat, ...others} = moreAvengers;
//4F.
console.log(nat,others);


//BONUS

const bonus = {
    first:[1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};

//5A.
const first1=bonus.first;
const second2=bonus.second;
const third3=bonus.third;
const all=[...first1, ...second2, ...third2]
console.log(all);

//or

const all= [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
]

//5B.
const[one, two, three] = bonus.first;
const[four, five, six] = bonus.second;
const[seven, eight, nine] = bonus,third;

console.log(one, two, three, four, five, six, seven, eight, nine);

//or
const [one, two, three, four, five, six, seven, eight, nine] = all;
