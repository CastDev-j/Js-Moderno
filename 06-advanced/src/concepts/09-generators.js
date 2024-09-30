
/**
 * @param {HTMLElement} element 
 */

export const generatorFunctionsComponent = (element) => {

    console.log('Hello from generatorFunctionsComponent');

    const generator = idGenerator();
    const button = document.createElement('button');

    button.textContent = 'Next: id-0';

    const renderButton = () => {
        const { value } = generator.next();
        button.innerText = `Next: ${value}`;
    }

    button.addEventListener('click', renderButton);

    element.appendChild(button);



    // element.innerHTML += `
    // <h3>Generator function</h3>
    // <p>${generator.next().value}</p>
    // <p>${generator.next().value}</p>
    // <p>${generator.next().value}</p>
    // <p>${generator.next().value}</p>
    // `;
}

function* myFirstGeneratorFunction() {
    yield 'primer valor';
    yield 'segundo valor';
    yield 'tercer valor';

    return 4;
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield `id-${currentId++}`;
    }
}