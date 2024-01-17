import { convertStringToHTML } from './shared/js/utils';

import './main.css';
import './shared/css/shared.css';
import './shared/css/modal.css';

import brandIconImgUrl from './shared/images/uhost-icon.png';

import htmlStrNav from './shared/views/header.html?raw';
import htmlStrFooter from './shared/views/footer.html?raw';
import htmlStrHome from './main.html?raw';
import htmlStrModal from './shared/views/modal.html?raw';

// // importing `SVG` as html string
import trustingCustomerSvgStr from './shared/img-data/svg-html/trusting-customer.html?raw';
import uptimeGuaranteeSvgStr from './shared/img-data/svg-html/uptime-guarantee.html?raw';
import fastCdnSvgStr from './shared/img-data/svg-html/fast-cdn.html?raw';


const BASE_URL = import.meta.env.BASE_URL;

const navHtml = convertStringToHTML(htmlStrNav);
const homeHtml = convertStringToHTML(htmlStrHome);
const modalHtml = convertStringToHTML(htmlStrModal);

const brandHtml = navHtml.querySelector('.main-header__brand');
brandHtml.href = BASE_URL;

// adding `html element` as sibling: `backdropHtml` is existing Node, `modalHtml` is new node
const backdropHtml = document.querySelector('.backdrop');
modalHtml.querySelector('.modal__action').href = `${BASE_URL}pages/start-hosting/`;
backdropHtml.parentNode.insertBefore(modalHtml.childNodes[0], backdropHtml.nextSibling);

// ^ Replacing `navigation urls`
navHtml.querySelector('#pkg-link').href = `${BASE_URL}pages/packages/`;
navHtml.querySelector('#cus-link').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link').href = `${BASE_URL}pages/start-hosting/`;
// navHtml.querySelector('.brand-img').src = brandIconImgUrl;
navHtml.querySelector('#pkg-link-mobile').href = `${BASE_URL}pages/packages/`;
navHtml.querySelector('#cus-link-mobile').href = `${BASE_URL}pages/customers/`;
navHtml.querySelector('#host-link-mobile').href = `${BASE_URL}pages/start-hosting/`;

// ! inserting `svg` string inside `html`
homeHtml.querySelector('#trust-customer').innerHTML = trustingCustomerSvgStr;
homeHtml.querySelector('#uptime-guarantee').innerHTML = uptimeGuaranteeSvgStr;
homeHtml.querySelector('#fast-cdn').innerHTML = fastCdnSvgStr;

// * Creating `img` tag
const imgHtml = document.createElement('img');
imgHtml.src = brandIconImgUrl;
imgHtml.alt = 'Your favorite uHost';
imgHtml.className = 'brand-img';

// ? appending `img` tag to `brandHtml` as child
// brandHtml.innerHTML = imgHtml.outerHTML;
brandHtml.appendChild(imgHtml);

// ~ inserting modified `html` snip into placeholder
document.querySelector('#nav').innerHTML = navHtml.innerHTML;
document.querySelector('#app').innerHTML = homeHtml.innerHTML;


document.querySelector('#footer').innerHTML = htmlStrFooter;

// // Mobile nav elements
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// // enabling backdrop & pop-up when clicking on the plans on homepage
const selectPlanBtns = document.querySelectorAll('.plan button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');


const onOpenModal = () => {
  // modal.style.display = 'block';
  modal.classList.add('open');
  backdrop.classList.add('open');
}

const onCloseModal = () => {
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener('click', onOpenModal);
}

// // closing modal
const modalNoBtn = document.querySelector('.modal__action--negative');
backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  onCloseModal();
});
modalNoBtn.addEventListener('click', onCloseModal);

// & triggering mobile nav
toggleBtn.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});

// & logging to browser's console
console.log('Domain : ', document.location.origin);
console.log('Base : ', BASE_URL);
console.group('1️⃣Navbar before modification 👇');
console.log(htmlStrNav);
console.groupEnd();
console.group('2️⃣Navbar after modification 👇');
console.log(navHtml.innerHTML);
console.groupEnd();
