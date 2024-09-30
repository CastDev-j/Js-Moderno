
/**
 * @param {HTMLElement} element 
 */

export const asyncAwaitSecondComponent = async (element) => {

    console.log('Hello from asyncAwaitSecondComponent');


    element.innerHTML = `
    <h2>Async Await</h2>
    <p>Example of async await</p>
    `;

    // console.time('async-await');
    // try {
    //     const slow = await slowPromise();
    //     const medium = await mediumPromise();
    //     const fast = await fastPromise();

    //     element.innerHTML += `
    //     <p>${slow}</p>
    //     <p>${medium}</p>
    //     <p>${fast}</p>
    //     `;

    // } catch (error) {
    //     element.innerHTML = error.message;
    // }
    // console.timeEnd('async-await');

    console.time('async-await');
    try{
        const [slow, medium, fast] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()]);

        element.innerHTML += `
        <p>${slow}</p>
        <p>${medium}</p>
        <p>${fast}</p>
        `;
    }
    catch(error){
        element.innerHTML = error.message;
    }
    console.timeEnd('async-await');


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