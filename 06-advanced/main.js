import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './src/concepts/01-2nviroment';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promisses';
import { promiseRaceComponent } from './src/concepts/04-promise-race';
import { asyncComponent } from './src/concepts/05-async.js';
import { asyncAwaitComponent } from './src/concepts/06-async-await.js';
import { asyncAwaitSecondComponent } from './src/concepts/07-async-await.js';
import { forAwaitComponent } from './src/concepts/08-for-await.js';
import { generatorFunctionsComponent } from './src/concepts/09-generators.js';
import { generatorAsyncFunctionsComponent } from './src/concepts/10-generatos-async.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  </div>

    <card class = "card">

    </card>
  </div>
`

const element = document.querySelector('.card');

generatorAsyncFunctionsComponent(element);