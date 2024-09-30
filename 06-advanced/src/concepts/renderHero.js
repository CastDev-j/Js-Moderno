
/**
 * @param {Hero} hero 
 * @returns {HTMLElement}
 */

export const renderHero = (hero) => {

    const {picture, name, about} = hero;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${picture}" alt="${name}" />
        <h2>${name}</h2>
        <p>${about}</p>
    `;

    return card;
}