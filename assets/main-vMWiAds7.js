import{c as s,b as t,h as i,a as r}from"./footer-akEEN8Ms.js";const o=`<main>
  <section id="product-overview">
      <h1>Get the freedom you deserve.</h1>
  </section>
  <section id="plans">
      <h1 class="section-title">Choose Your Plan</h1>
      <div class="plan__list">
          <article class="plan">
              <h1 class="plan__title">FREE</h1>
              <h2 class="plan__price">$0/month</h2>
              <h3>For hobby projects or small teams.</h3>
              <ul class="plan__features">
                  <li class="plan__feature">1 Workspace</li>
                  <li class="plan__feature">Unlimited Traffic</li>
                  <li class="plan__feature">10GB Storage</li>
                  <li class="plan__feature">Basic Support</li>
              </ul>
              <div>
                  <button class="button">CHOOSE PLAN</button>
              </div>
          </article>
          <article class="plan plan--highlighted">
              <h1 class="plan__annotation">RECOMMENDED</h1>
              <h1 class="plan__title">PLUS</h1>
              <h2 class="plan__price">$29/month</h2>
              <h3>For ambitious projects.</h3>
              <ul class="plan__features">
                  <li class="plan__feature">5 Workspaces</li>
                  <li class="plan__feature">Unlimited Traffic</li>
                  <li class="plan__feature">100GB Storage</li>
                  <li class="plan__feature">Plus Support</li>
              </ul>
              <div>
                  <button class="button">CHOOSE PLAN</button>
              </div>
          </article>
          <article class="plan">
              <h1 class="plan__title">PREMIUM</h1>
              <h2 class="plan__price">$99/month</h2>
              <h3>Your enterprise solution.</h3>
              <ul class="plan__features">
                  <li class="plan__feature">10 Workspaces</li>
                  <li class="plan__feature">Unlimited Traffic</li>
                  <li class="plan__feature">Unlimited Storage</li>
                  <li class="plan__feature">Priority Support</li>
              </ul>
              <div>
                  <button class="button">CHOOSE PLAN</button>
              </div>
          </article>
      </div>
  </section>
  <section id="key-features">
      <h1 class="section-title">Many Good Reasons to Stick Around</h1>
      <ul class="key-feature__list">
          <li class="key-feature">
              <div class="key-feature__image">

              </div>
              <p class="key-feature__description">3,857,000 Trusting Customers</p>
          </li>
          <li class="key-feature">
              <div class="key-feature__image">

              </div>
              <p class="key-feature__description">99.999% Uptime Guarantee</p>
          </li>
          <li class="key-feature">
              <div class="key-feature__image">

              </div>
              <p class="key-feature__description">Lightning Fast CDN</p>
          </li>
      </ul>
  </section>
</main>`,e="/css-uhost/",n=s(r),l=n.querySelector(".main-header__brand");l.href=e;n.querySelector("#pkg-link").href=`${e}pages/packages/`;n.querySelector("#cus-link").href=`${e}pages/customers/`;n.querySelector("#host-link").href=`${e}pages/start-hosting/`;const a=document.createElement("img");a.src=t;a.alt="Your favorite uHost";a.className="brand-img";l.appendChild(a);document.querySelector("#nav").innerHTML=n.innerHTML;document.querySelector("#footer").innerHTML=i;document.querySelector("#app").innerHTML=o;console.log("Domain : ",document.location.origin);console.log("Base : ",e);console.group("************ Nav bar after modification ****************");console.log(n.innerHTML);console.groupEnd();
