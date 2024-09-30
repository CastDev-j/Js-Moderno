const state = [
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

    const index = 0;
    const newName = 'Spiderman';

    const newState = structuredClone(state).with(index, {
        ...state.at(index),
        name: newName
    });

    state[1].name = 'Spidermana';

    console.table(newState);
    console.table(state);
}
