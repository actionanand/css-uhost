(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const i=s=>new DOMParser().parseFromString(s,"text/html").body,l="/css-uhost/assets/uhost-icon-NCiUWLzr.png",c=`<header class="main-header">
  <div>
    <a href="/home_page" class="main-header__brand">
      <!-- <img src="brand.png" alt="Your favorite uHost" class="brand-img"> -->
    </a>
  </div>
  <nav class="main-nav">
    <ul class="main-nav__items">
      <li class="main-nav__item">
        <a href="/packages_page" id="pkg-link">Packages</a>
      </li>
      <li class="main-nav__item">
        <a href="/customers_page" id="cus-link">Customers</a>
      </li>
      <li class="main-nav__item main-nav__item--cta">
        <a href="/start-hosting_page" id="host-link">Start Hosting</a>
      </li>
    </ul>
  </nav>
</header>
`,m=`<footer class="main-footer">
  <nav>
    <ul class="main-footer__links">
      <li class="main-footer__link">
        <a href="#">Support</a>
      </li>
      <li class="main-footer__link">
        <a href="#">Terms of Use</a>
      </li>
    </ul>
  </nav>
</footer>
`;export{c as a,l as b,i as c,m as h};