import{c as i,b as a,h as r,a as l}from"./footer-9uVxrdr5.js";const c="/css-uhost/assets/customer-1-3MXojdIc.jpg",m="/css-uhost/assets/customer-2-YE0NSnXn.jpg",u=`<main>
  <div>
    <div class="testimonial" id="customer-1">
        <div class="testimonial__image-container">
          <img src="/customer-1.jpg" alt="Mike Statham - Customer" id="cus-img-1" class="testimonial__image">
        </div>
        <div class="testimonial__info">
          <h1 class="testimonial__name">Mike Statham</h1>
          <h2 class="testimonial__subtitle">Founder of
            <a href="tech-analysis.com">tech-analysis.com</a>
          </h2>
          <p class="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
        </div>
    </div>
    <div class="testimonial" id="customer-2">

      <div class="testimonial__info">
        <h1 class="testimonial__name">John Mellow</h1>
        <h2 class="testimonial__subtitle">Hosts his private videos on uHost.
        </h2>
        <p class="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
          it in uHost!
        </p>
      </div>
      <div class="testimonial__image-container">
        <img src="/customer-2.jpg" alt="John Mellow - Customer" id="cus-img-2" class="testimonial__image">
      </div>
    </div>
  </div>
</main>
`,t="/css-uhost/",e=i(l),n=i(u),o=e.querySelector(".main-header__brand");o.href=t;e.querySelector("#pkg-link").href=`${t}pages/packages/`;e.querySelector("#cus-link").href=`${t}pages/customers/`;e.querySelector("#host-link").href=`${t}pages/start-hosting/`;n.querySelector("#cus-img-1").src=c;n.querySelector("#cus-img-2").src=m;const s=document.createElement("img");s.src=a;s.alt="Your favorite uHost";s.className="brand-img";o.appendChild(s);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#app").innerHTML=n.innerHTML;document.querySelector("#footer").innerHTML=r;
