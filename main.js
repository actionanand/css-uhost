import { convertStringToHTML } from './shared/js/utils';

import './main.css';
import './shared/css/shared.css';

import brandIconImgUrl from './shared/images/uhost-icon.png';

import htmlStrNav from './shared/views/header.html?raw';
import htmlStrFooter from './shared/views/footer.html?raw';
import htmlStrHome from './main.html?raw';


const BASE_URL = import.meta.env.BASE_URL;
const Full_URL = document.location.origin;

const navHtml = convertStringToHTML(htmlStrNav);

const brandHtml = navHtml.querySelector('.main-header__brand');
brandHtml.href = BASE_URL;

// ^ Replacing `navigation urls`
navHtml.querySelector('#pkg-link').href = `${Full_URL}/pages/packages/`;
navHtml.querySelector('#cus-link').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link').href = `${BASE_URL}pages/start-hosting/`;
// navHtml.querySelector('.brand-img').src = brandIconImgUrl;


// * Creating `img` tag
const imgHtml = document.createElement('img');
imgHtml.src = brandIconImgUrl;
imgHtml.alt = 'Your favorite uHost';
imgHtml.className = 'brand-img';

// ? appending `img` tag to `brandHtml`
brandHtml.appendChild(imgHtml);

// ~ inserting modified `html` snip into placeholder
document.querySelector('#nav').innerHTML = navHtml.innerHTML;

document.querySelector('#footer').innerHTML = htmlStrFooter;
document.querySelector('#app').innerHTML = htmlStrHome;

console.log(navHtml.innerHTML);
