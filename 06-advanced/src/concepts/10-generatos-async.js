import { heroes } from "../data/heroes";
import { renderHero } from "./renderHero";

/**
 * @param {HTMLElement} element 
 */
export const generatorAsyncFunctionsComponent = async (element) => {

    console.log('Hello from generatorAsyncFunctionsComponent');

    const heroGenerator = getHeroGenerator();
    let isFinished = true;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if (!isFinished) {
            const card = renderHero(value);
            element.innerHTML = '';
            element.appendChild(card);
        }
    } while (!isFinished);



}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero;
    }

    return null;
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
}
