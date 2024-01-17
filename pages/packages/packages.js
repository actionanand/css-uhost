import { convertStringToHTML } from '../../shared/js/utils';

import './packages.css';
import '../../shared/css/shared.css';

import brandIconImgUrl from '../../shared/images/uhost-icon.png';

import htmlStrNav from '../../shared/views/header.html?raw';
import htmlStrFooter from '../../shared/views/footer.html?raw';
import htmlStrHome from './packages.html?raw';


const BASE_URL = import.meta.env.BASE_URL;

const navHtml = convertStringToHTML(htmlStrNav);

const brandHtml = navHtml.querySelector('.main-header__brand');
brandHtml.href = BASE_URL;

// ^ Replacing `navigation urls`
navHtml.querySelector('#pkg-link').href = `${BASE_URL}pages/packages/`;
navHtml.querySelector('#cus-link').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link').href = `${BASE_URL}pages/start-hosting/`;
// navHtml.querySelector('.brand-img').src = brandIconImgUrl;
navHtml.querySelector('#pkg-link-mobile').href = `${BASE_URL}pages/packages/`;
navHtml.querySelector('#cus-link-mobile').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link-mobile').href = `${BASE_URL}pages/start-hosting/`;

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

// // Mobile nav elements
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');

// & triggering mobile nav
toggleBtn.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
});
