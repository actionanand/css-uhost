import{c as s,b as r,h as o,a as c}from"./footer-VZCd1aW8.js";const l=`<main>
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
</main>
`,a="/css-uhost/",e=s(c),n=e.querySelector(".main-header__brand");n.href=a;e.querySelector("#pkg-link").href=`${a}pages/packages/`;e.querySelector("#cus-link").href=`${a}pages/customers/`;e.querySelector("#host-link").href=`${a}pages/start-hosting/`;const t=document.createElement("img");t.src=r;t.alt="Your favorite uHost";t.className="brand-img";n.appendChild(t);document.querySelector("#nav").innerHTML=e.innerHTML;document.querySelector("#footer").innerHTML=o;document.querySelector("#app").innerHTML=l;
