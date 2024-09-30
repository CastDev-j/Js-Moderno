import { heroes } from "../data/heroes";
import { renderHero } from "./renderHero";

/**
 * @param {HTMLElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    console.log('Hello from asyncAwaitComponent');

    const $id = '5d86371fd55e2e2a30fe1cc3';
    const _id = '5d86371fd55e2e2a30fe1ccb';
    element.innerHTML = `
    hero one / hero two
    `;

    try {
        const hero1 = await findHero($id);
        const hero2 = await findHero(_id);

        element.appendChild(renderHero(hero1));
        element.appendChild(renderHero(hero2));

    } catch (error) {
        element.innerHTML = error.message;
    }



}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero)
        throw new Error(`Hero with id ${id} not found`);


    return hero;
}