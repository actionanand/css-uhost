import './main.css';
import './shared/css/shared.css';

import htmlContentNav from './shared/views/header.html?raw';
import htmlContentFooter from './shared/views/footer.html?raw';
import htmlContentHome from './main.html?raw';
// import { setupCounter } from './counter.js'

document.querySelector('#nav').innerHTML = htmlContentNav;
document.querySelector('#footer').innerHTML = htmlContentFooter;
document.querySelector('#app').innerHTML = htmlContentHome;

// document.querySelector('#app').innerHTML = `
//   <div>
//     Welcome!
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
