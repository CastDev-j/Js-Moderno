

/**
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = (element) => {
    changeTitle(); //! this methon is a bad practice, but it's just for testing purposes

    const card = createCard();

    const button = document.createElement('button');
    button.innerText = 'Get Quote';

    button.addEventListener('click', () => updateContent(card, button));

    element.appendChild(button);
    element.appendChild(card);
}

/**
 * @returns {HTMLDivElement}
 */
const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    card.innerHTML = `
                <h2>Click the button to get a quote</h2>
    `;

    return card;
}

/**
 * @param {HTMLDivElement} element
 * @param {HTMLButtonElement} elementActivator
 */
/**
 * @param {HTMLDivElement} element
 * @param {HTMLButtonElement} elementActivator
 */
const updateContent = async (element, elementActivator) => {
    try {
        elementActivator.disabled = true;
        element.innerHTML = 'Loading...';

        const data = await fetchCueote();

        element.innerHTML = '';
        const content = createPhraseContent(data);
        element.appendChild(content);
    } catch (error) {
        element.innerHTML = 'Failed to load quote. Please try again.';
        console.error('Error fetching quote:', error);
    } finally {
        elementActivator.disabled = false;
    }
}

/**
 * @param {Object} data
 * @returns {HTMLDivElement}
 */

const createPhraseContent = (data) => {

    const { quote, author } = data;

    const card = document.createElement('div');
    card.classList.add('article');

    const authorElement = document.createElement('p');
    authorElement.innerText = author;

    const phraseElement = document.createElement('p');
    phraseElement.innerText = quote;

    card.appendChild(authorElement);
    card.appendChild(phraseElement);

    return card;
}

/**
 * @returns {Object} quote information
 */

const fetchCueote = async () => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();

    return data[0];
}


//! This method is a bad practice, but it's just for testing purposes
const changeTitle = () => {
    document.querySelector('#app-title').innerText = 'Breaking Bad App';
}
//! This method is a bad practice, but it's just for testing purposes