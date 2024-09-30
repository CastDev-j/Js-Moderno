import { heroes } from "../data/heroes";

/**
 * @param {HTMLElement} element 
 */
export const asyncComponent = (element) => {

    console.log('Hello from asyncComponent');


    const id = '1';
    const _id = '5d86371fd55e2e2a30fe1ccb';

    findHero(_id)
        .then(hero => renderHero(hero, element))
        .catch(console.warn);
    


}

/**
 * @param {String} id 
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) 
        throw new Error(`Hero with id ${id} not found`);
    

    return hero;
}

/**
 * @param {Object} hero
 * @param {HTMLElement} element
 */
const renderHero = (hero, element) => {
    
    const { name, about, picture } = hero;

    const template = `
    <div class="card">
        <h1>${name}</h1>
        <img src="${picture}" alt="${name}" />
        <p>${about}</p>
    </div>
    `;

    element.innerHTML = template;

}