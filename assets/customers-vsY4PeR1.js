import{c as o,b as a,h as r,a as l}from"./footer-72bkAXuf.js";const c="/css-uhost/assets/customer-1-3MXojdIc.jpg",m="/css-uhost/assets/customer-2-YE0NSnXn.jpg",u=`<main>
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
`,s="/css-uhost/",e=o(l),n=o(u),i=e.querySelector(".main-header__brand");i.href=s;e.querySelector("#pkg-link").href=`${s}pages/packages/`;e.querySelector("#cus-link").href=`${s}pages/customers/`;e.querySelector("#host-link").href=`${s}pages/start-hosting/`;n.querySelector("#cus-img-1").src=c;n.querySelector("#cus-img-2").src=m;const t=document.createElement("img");t.src=a;t.alt="Your favorite uHost";t.className="brand-img";i.appendChild(t);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#app").innerHTML=n.innerHTML;document.querySelector("#footer").innerHTML=r;
