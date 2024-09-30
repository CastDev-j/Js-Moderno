import usersStore from '../../store/users-store';
import { totalPages } from '../../use-cases/load-users-by-page';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    const renderButtonsContainer = document.createElement('div');
    renderButtonsContainer.className = 'buttons-container';
    

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next Page';
    
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous Page';

    if ( usersStore.getCurrentPage() === 1 ) {
        prevButton.disabled = true;
    }

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = usersStore.getCurrentPage();

    renderButtonsContainer.append( prevButton, currentPageLabel, nextButton );

    element.append( renderButtonsContainer );

    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );

        if ( usersStore.getCurrentPage() === totalPages ) {
            nextButton.disabled = true;
        }

        if(usersStore.getCurrentPage() > 1 ) {
            prevButton.disabled = false;
        }

    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
        
        if ( usersStore.getCurrentPage() === 1 ) {
            prevButton.disabled = true;
        }

        if(usersStore.getCurrentPage() < totalPages ) {
            nextButton.disabled = false;
        }

        
    });

}