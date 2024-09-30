import { heroes } from '../data/heroes';
import { renderHero } from './renderHero';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    console.log('Hello from forAwaitComponent');
    const heroIds = heroes.map( hero => hero.id );    
    const heroId = '5d86371fd55e2e2a30fe1ccb21';

    element.innerHTML = `
    <h2>Searching for heroes</h2>
    `;

    const heroPromises = getHeroesAsync(heroIds);

    for await( const heroPromise of heroPromises ){
            element.appendChild(renderHero(heroPromise));
    }    

    // if(await getHeroAsync(heroId)){
    //     element.innerHTML = `
    //     <h2>Hero found</h2>
    //     `;
        
    //     return;
    // }else{
    //     element.innerHTML = `
    //     <h2>Hero not found</h2>
    //     `;
    // }




}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}