import{c,b as f,h as y,a as S}from"./footer-C3R9Uw3c.js";const q=`<main class="signup-page">
  <h1 class="signup-title">Awesome! Let's dive right in!</h1>
  <form action="index.html" class="signup-form">
    <label for="title">Title</label>
    <select id="title" name="title">
      <option value="Mr.">Mr.</option>
      <option value="Miss.">Miss.</option>
      <option value="Mrs.">Mrs.</option>
    </select>
    <label for="first-name">First name</label>
    <input type="text" id="first-name" name="first-name" required>
    <label for="last-name">Last name</label>
    <input type="text" id="last-name" name="last-name">
    <label for="email">E-Mail</label>
    <input type="email" id="email" placeholder="Your e-mail" required name="email">
    <label for="password">Password</label>
    <input type="password" id="password" required minlength="5" placeholder="Password with min. 5 letters" 
      name="password">
    <div class="signup-form__checkbox">
      <input type="checkbox" id="agree-terms" required name="checkbox">
      <label for="agree-terms">Agree to
        <a href="#" id="agree-terms-url">Terms &amp; Conditions</a>
      </label>
    </div>
    <button type="submit" class="button" id="signup-btn" disabled>Sign Up</button>
  </form>
</main>
<main class="user-welcome hide-ui">
  <div class="user-wrap">
    <h1 class="user-name">Hello</h1>
    <div class="user-info">
      <span class="user-info-msg"> Your account has been created successfully! Please visit </span>
      <a class="user-info-link" href="/home"> Uhost</a>
    </div>
  </div>
</main>
`,e="/css-uhost/",t=c(S),s=c(q),m=t.querySelector(".main-header__brand");m.href=e;t.querySelector("#pkg-link").href=`${e}pages/packages/`;t.querySelector("#cus-link").href=`${e}pages/customers/`;t.querySelector("#host-link").href=`${e}pages/start-hosting/`;t.querySelector("#pkg-link-mobile").href=`${e}pages/packages/`;t.querySelector("#cus-link-mobile").href=`${e}pages/customers/`;t.querySelector("#host-link-mobile").href=`${e}pages/start-hosting/`;s.querySelector(".signup-form").action=`${e}pages/start-hosting/`;s.querySelector("#agree-terms-url").href=`${e}pages/start-hosting/`;s.querySelector(".user-info-link").href=e;const r=document.createElement("img");r.src=f;r.alt="Your favorite uHost";r.className="brand-img";m.appendChild(r);document.querySelector("#nav").innerHTML=t.innerHTML;document.querySelector("#app").innerHTML=s.innerHTML;document.querySelector("#footer").innerHTML=y;const v=document.querySelector(".toggle-button"),u=document.querySelector(".mobile-nav"),o=document.querySelector(".backdrop");v.addEventListener("click",()=>{o.classList.add("open"),u.classList.add("open")});o.addEventListener("click",()=>{u.classList.remove("open"),o.classList.remove("open")});const a=document.querySelector(".signup-form"),k=document.querySelector("#agree-terms"),i=document.querySelector("#signup-btn"),L=document.querySelector(".signup-page"),H=document.querySelector(".user-welcome"),M=document.querySelector(".user-name"),d=()=>{a.checkValidity()?i.disabled=!1:i.disabled=!0},E=l=>{l.preventDefault();const n=new FormData(l.target),p=Object.fromEntries(n.entries());console.log("Form data as Object : ",p),console.groupCollapsed("Each entries of form"),n.forEach((h,b)=>{console.log(`${b}: ${h}`)}),console.groupEnd();let g=`Dear ${n.get("title")} ${n.get("first-name")},`;M.innerHTML=g,L.classList.add("hide-ui"),H.classList.remove("hide-ui")};k.addEventListener("click",d);a.addEventListener("keyup",d);a.addEventListener("submit",E);
