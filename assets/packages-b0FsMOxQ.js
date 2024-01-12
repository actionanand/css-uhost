import{c as s,b as r,h as o,a as c}from"./footer-akEEN8Ms.js";const l=`<main>
  <section class="package" id="plus">
      <a href="#">
          <h1 class="package__title">Our PLUS Plan</h1>
          <h2 class="package__badge">RECOMMENDED</h2>
          <h2 class="package__subtitle">The most popular choice of our customers.</h2>
          <p class="package__info">Benefit from increased storage and faster support to ensure that your mission-critical data and applications
              are always available!</p>
      </a>
  </section>
  <section class="package" id="free">
      <a href="#">
          <h1 class="package__title">Our FREE Plan</h1>
          <h2 class="package__subtitle">An extremely solid start into our hosting world.</h2>
          <p class="package__info">Get started immediately at zero cost!</p>
      </a>
  </section>
  <div class="clearfix"></div>
  <section class="package" id="premium">
      <a href="#">
          <h1 class="package__title">Our PREMIUM Plan</h1>
          <h2 class="package__subtitle">All your enterprise needs. Instant support, guaranteed uptime. </h2>
          <p class="package__info">The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
      </a>
  </section>
</main>`,n="/css-uhost/",i=document.location.origin,e=s(c),t=e.querySelector(".main-header__brand");t.href=n;e.querySelector("#pkg-link").href=`${i}/pages/packages/`;e.querySelector("#cus-link").href=`${n}pages/customers/`;e.querySelector("#host-link").href=`${n}pages/start-hosting/`;const a=document.createElement("img");a.src=r;a.alt="Your favorite uHost";a.className="brand-img";t.appendChild(a);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#footer").innerHTML=o;document.querySelector("#app").innerHTML=l;console.log(e.innerHTML);
