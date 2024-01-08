import './packages.css';
import '../../shared/css/shared.css';

import htmlContentNav from '../../shared/views/header.html?raw';
import htmlContentFooter from '../../shared/views/footer.html?raw';
import htmlContentPkg from './packages.html?raw';

document.querySelector('#nav').innerHTML = htmlContentNav;
document.querySelector('#footer').innerHTML = htmlContentFooter;
document.querySelector('#app').innerHTML = htmlContentPkg;
