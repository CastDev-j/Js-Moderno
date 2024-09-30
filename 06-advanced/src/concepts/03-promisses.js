import { heroes } from "../data/heroes";

/**
 * @param {HTMLElement} element 
 */


export const promiseComponent = (element) => {

    console.log('Hello from promiseComponent');

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f233c9f2425f16916';

    const renderTwoHeroes = (hero1, hero2) => {
        const card1 = document.createElement('div');
        card1.classList.add('card');
        card1.innerHTML = `
                <img src="${hero1.picture}" alt="${hero1.name}" />
                <h2>${hero1.name}</h2>
                <p>${hero1.about}</p>
            `;

        const card2 = document.createElement('div');
        card2.classList.add('card');
        card2.innerHTML = `
                <img src="${hero2.picture}" alt="${hero2.name}" />
                <h2>${hero2.name}</h2>
                <p>${hero2.about}</p>
            `;

        element.appendChild(card1);
        element.appendChild(card2);
    }

    const renderHero = (hero) => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${hero.picture}" alt="${hero.name}" />
            <h2>${hero.name}</h2>
            <p>${hero.about}</p>
        `;

        element.appendChild(card);
    }


    Promise.all([
        findHero(id1),
        findHero(id2)
    ]).then(heroes => {
        renderTwoHeroes(heroes[0], heroes[1]);
    }).catch(err => console.error(`Error: ${err}`));



 

    // let hero1, hero2 = null;

    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         findHero(id2).then(hero => {
    //             hero2 = hero;
    //             renderTwoHeroes(hero1, hero2);
    //         }).catch(err => console.error(`Error: ${err}`));
    //     })
    //     .catch(console.error)
    //     .finally(() => console.log('Promise 1 finished'));

}

/**
 * @param {string} id 
 * @returns {Promise}
 */

const findHero = (id) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        (hero) ? resolve(hero) : reject(`Hero with id ${id} not found`);
    });

}