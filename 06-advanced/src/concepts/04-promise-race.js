
/**
 * @param {HTMLElement} element 
 */

export const promiseRaceComponent = (element) => {

    console.log('Hello from promiseRaceComponent');

    element.innerHTML = `
        <h2>Loading...</h2>
    `;

    const renderValue = (value) => {
        element.innerHTML = `
            <h2>${value}</h2>
        `;
    }
    
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(value => {
        renderValue(value);
    });

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 1250);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 500);
});