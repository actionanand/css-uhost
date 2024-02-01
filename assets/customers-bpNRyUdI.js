import{c as r,b as m,h as d,a as u}from"./footer-C3R9Uw3c.js";const g="/css-uhost/assets/customer-1-3MXojdIc.jpg",h="/css-uhost/assets/customer-2-YE0NSnXn.jpg",p=`<main>
  <div>
    <div class="testimonial" id="customer-1">
        <div class="testimonial__image-container">
          <img src="/customer-1.jpg" alt="John Mellow - Customer" id="cus-img-1" class="testimonial__image">
        </div>
        <div class="testimonial__info">
          <h1 class="testimonial__name">John Mellow</h1>
          <h2 class="testimonial__subtitle">Founder of
            <a href="tech-analysis.com">tech-analysis.com</a>
          </h2>
          <p class="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
        </div>
    </div>
    <div class="testimonial" id="customer-2">

      <div class="testimonial__info">
        <h1 class="testimonial__name">Tanya R Russo</h1>
        <h2 class="testimonial__subtitle">Hosts her private videos on uHost.
        </h2>
        <p class="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
          it in uHost!
        </p>
      </div>
      <div class="testimonial__image-container">
        <img src="/customer-2.jpg" alt="Tanya R Russo - Customer" id="cus-img-2" class="testimonial__image">
      </div>
    </div>
  </div>
</main>
`,t="/css-uhost/",e=r(u),i=r(p),c=e.querySelector(".main-header__brand");c.href=t;e.querySelector("#pkg-link").href=`${t}pages/packages/`;e.querySelector("#cus-link").href=`${t}pages/customers/`;e.querySelector("#host-link").href=`${t}pages/start-hosting/`;e.querySelector("#pkg-link-mobile").href=`${t}pages/packages/`;e.querySelector("#cus-link-mobile").href=`${t}pages/customers/`;e.querySelector("#host-link-mobile").href=`${t}pages/start-hosting/`;i.querySelector("#cus-img-1").src=g;i.querySelector("#cus-img-2").src=h;const s=document.createElement("img");s.src=m;s.alt="Your favorite uHost";s.className="brand-img";c.appendChild(s);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#app").innerHTML=i.innerHTML;document.querySelector("#footer").innerHTML=d;const v=document.querySelector(".toggle-button"),l=document.querySelector(".mobile-nav"),o=document.querySelector(".backdrop"),a=document.querySelector(".main-nav__item--cta");v.addEventListener("click",()=>{o.classList.add("open"),l.classList.add("open")});o.addEventListener("click",()=>{l.classList.remove("open"),o.classList.remove("open")});a.addEventListener("animationstart",n=>{console.log("Animation started : ",n)});a.addEventListener("animationend",n=>{console.log("Animation ended : ",n)});a.addEventListener("animationiteration",n=>{console.log("Animation iteration : ",n)});
