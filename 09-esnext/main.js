import { arrayToMethods } from './01-arrays/array-to-methods';
import { arrayWith } from './01-arrays/array-with';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="container"> </div> 
  </div>
`

const $element = document.querySelector('.container');

arrayToMethods($element);


