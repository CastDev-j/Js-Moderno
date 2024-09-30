const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Wonder Woman',
    },
    {
        id: 4,
        name: 'Flash',
    },
    {
        id: 5,
        name: 'Aquaman',
    },
    {
        id: 6,
        name: 'Cyborg',
    },
    {
        id: 7,
        name: 'Green Lantern',
    }
]

export const arrayWith = () => {

    // Ayuda a clonar un array de forma estructurada
    // sin hacer referencia al array original
    const superHeroesCopyStructured = structuredClone(superHeroes);

    console.log(superHeroesCopyStructured[0].name = 'Spiderman');
    console.table(superHeroes);
    console.table(superHeroesCopyStructured);
    

}
