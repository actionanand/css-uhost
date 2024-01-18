import{c as s,b as l,h as i,a as c}from"./footer-Ss2SKHdr.js";const m=`<main class="signup-page">
  <h1 class="signup-title">Awesome! Let's dive right in!</h1>
  <form action="index.html" class="signup-form">
    <label for="title">Title</label>
    <select id="title">
      <option value="mr">Mr.</option>
      <option value="ms">Ms.</option>
    </select>
    <label for="first-name">First name</label>
    <input type="text" id="first-name">
    <label for="last-name">Last name</label>
    <input type="text" id="last-name">
    <label for="email">E-Mail</label>
    <input type="email" id="email">
    <label for="password">Password</label>
    <input type="password" id="password">
    <input type="checkbox" id="agree-terms">
    <label for="agree-terms">Agree to
      <a href="#">Terms &amp; Conditions</a>
    </label>
    <button type="submit" class="button">Sign Up</button>
  </form>
</main>`,t="/css-uhost/",e=s(c),r=e.querySelector(".main-header__brand");r.href=t;e.querySelector("#pkg-link").href=`${t}pages/packages/`;e.querySelector("#cus-link").href=`${t}pages/customers/`;e.querySelector("#host-link").href=`${t}pages/start-hosting/`;e.querySelector("#pkg-link-mobile").href=`${t}pages/packages/`;e.querySelector("#cus-link-mobile").href=`${t}pages/customers/`;e.querySelector("#host-link-mobile").href=`${t}pages/start-hosting/`;const n=document.createElement("img");n.src=l;n.alt="Your favorite uHost";n.className="brand-img";r.appendChild(n);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#app").innerHTML=m;document.querySelector("#footer").innerHTML=i;const p=document.querySelector(".toggle-button"),a=document.querySelector(".mobile-nav"),o=document.querySelector(".backdrop");p.addEventListener("click",()=>{o.classList.add("open"),a.classList.add("open")});o.addEventListener("click",()=>{a.classList.remove("open"),o.classList.remove("open")});
