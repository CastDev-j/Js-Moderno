import { heroes } from '../data/heroes';
/**
 * @param {HTMLElement} element 
 */

export const callbacksComponent = (element) => {

    console.log('Hello from callbacksComponent');

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';
    // const functionExample = (error, hero) => {

    //     if(error) {
    //         element.innerHTML = `<p>${error}</p>`;
    //     return;
    //     }

    //     findHero(id2, functionExample);

    //     element.innerHTML = `
    //     <img src="${hero?.picture}" alt="${hero?.name}" />
    //     <p-title>${hero?.name}</p-title>
    //     <p>${hero?.about}</p>
    //     `;
    // }

    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = `<p>${error}</p>`;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = `<p>${error}</p>`;
                return;
            }

            element.innerHTML = `
                <img src="${hero1?.picture}" alt="${hero1?.name}" />
                <p-title>${hero1?.name}</p-title>
                <p>${hero1?.about}</p>

                <img src="${hero2?.picture}" alt="${hero2?.name}" />
                <p-title>${hero2?.name}</p-title>
                <p>${hero2?.about}</p>
                `;

        });
    });

}

/**
 * @param {string} id 
 * @param {(error?:string, hero: Object) => void} callback 
 */

const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }


    callback(null, hero);
}
