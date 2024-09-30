const heroes = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Flash',
    'Aquaman',
    'Cyborg',
    'Green Lantern'
];

const heroesCopy = heroes;

export const arrayToMethods = () => {

    const sortedHeroesDesc = heroes.toSorted((a, b) => b.localeCompare(a));

    const sortedHeroesAsc = heroes.toSorted((a, b) => a.localeCompare(b));
    
    // console.table(heroes);
    // console.table(sortedHeroesDesc);
    // console.table(sortedHeroesAsc);
    
    // console.table(heroesCopy);


    const hero = heroes.toSpliced(4,6, 'Green Arrow');

    console.table(hero);

    console.table(heroes);
    


    

}
