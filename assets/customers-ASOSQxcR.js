import{c as i,b as c,h as l,a as m}from"./footer-t0xUOAS3.js";const u="/css-uhost/assets/customer-1-3MXojdIc.jpg",d="/css-uhost/assets/customer-2-YE0NSnXn.jpg",g=`<main>
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
`,s="/css-uhost/",e=i(m),o=i(g),a=e.querySelector(".main-header__brand");a.href=s;e.querySelector("#pkg-link").href=`${s}pages/packages/`;e.querySelector("#cus-link").href=`${s}pages/customers/`;e.querySelector("#host-link").href=`${s}pages/start-hosting/`;e.querySelector("#pkg-link-mobile").href=`${s}pages/packages/`;e.querySelector("#cus-link-mobile").href=`${s}pages/customers/`;e.querySelector("#host-link-mobile").href=`${s}pages/start-hosting/`;o.querySelector("#cus-img-1").src=u;o.querySelector("#cus-img-2").src=d;const t=document.createElement("img");t.src=c;t.alt="Your favorite uHost";t.className="brand-img";a.appendChild(t);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#app").innerHTML=o.innerHTML;document.querySelector("#footer").innerHTML=l;const h=document.querySelector(".toggle-button"),r=document.querySelector(".mobile-nav"),n=document.querySelector(".backdrop");h.addEventListener("click",()=>{n.classList.add("open"),r.classList.add("open")});n.addEventListener("click",()=>{r.classList.remove("open"),n.classList.remove("open")});
