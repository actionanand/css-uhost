import { convertStringToHTML } from './shared/js/utils';

import './main.css';
import './shared/css/shared.css';

import brandIconImgUrl from './shared/images/uhost-icon.png';

import htmlStrNav from './shared/views/header.html?raw';
import htmlStrFooter from './shared/views/footer.html?raw';
import htmlStrHome from './main.html?raw';

// // importing `SVG` as html string
import trustingCustomerSvgStr from './shared/img-data/svg-html/trusting-customer.html?raw';
import uptimeGuaranteeSvgStr from './shared/img-data/svg-html/uptime-guarantee.html?raw';
import fastCdnSvgStr from './shared/img-data/svg-html/fast-cdn.html?raw';


const BASE_URL = import.meta.env.BASE_URL;

const navHtml = convertStringToHTML(htmlStrNav);
const homeHtml = convertStringToHTML(htmlStrHome);

const brandHtml = navHtml.querySelector('.main-header__brand');
brandHtml.href = BASE_URL;

// ^ Replacing `navigation urls`
navHtml.querySelector('#pkg-link').href = `${BASE_URL}pages/packages/`;
navHtml.querySelector('#cus-link').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link').href = `${BASE_URL}pages/start-hosting/`;
// navHtml.querySelector('.brand-img').src = brandIconImgUrl;

// ! inserting `svg` string inside `html`
homeHtml.querySelector('#trust-customer').innerHTML = trustingCustomerSvgStr;
homeHtml.querySelector('#uptime-guarantee').innerHTML = uptimeGuaranteeSvgStr;
homeHtml.querySelector('#fast-cdn').innerHTML = fastCdnSvgStr;

// * Creating `img` tag
const imgHtml = document.createElement('img');
imgHtml.src = brandIconImgUrl;
imgHtml.alt = 'Your favorite uHost';
imgHtml.className = 'brand-img';

// ? appending `img` tag to `brandHtml`
brandHtml.appendChild(imgHtml);

// ~ inserting modified `html` snip into placeholder
document.querySelector('#nav').innerHTML = navHtml.innerHTML;
document.querySelector('#app').innerHTML = homeHtml.innerHTML;

document.querySelector('#footer').innerHTML = htmlStrFooter;

// & logging to browser's console
console.log('Domain : ', document.location.origin);
console.log('Base : ', BASE_URL);
console.group('1️⃣Navbar before modification 👇');
console.log(htmlStrNav);
console.groupEnd();
console.group('2️⃣Navbar after modification 👇');
console.log(navHtml.innerHTML);
console.groupEnd();
