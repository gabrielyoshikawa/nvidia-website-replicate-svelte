<script>
  import Navbar from "./lib/Navbar.svelte";
  import ClickCarousel from "./lib/clickCarousel.svelte";
  import TimedCarouselSliders from "./lib/timedCarouselSliders.svelte";
</script>

<div class="content">
  <Navbar />
  <TimedCarouselSliders />
  <div class="divisoria" />
  <ClickCarousel />
  <div class="propaganda">
    <div class="contentPropaganda">
      <img src="/images/logo-propaganda.png" alt="" />
      <div class="txtPropaganda">
        <p>
          Explore What’s Next in AI, Accelerated Computing, and Beyond With the
          Best of GTC. <span style="color: green">Watch On-Demand &gt;</span>
        </p>
      </div>
    </div>
  </div>
  <div class="expandedNews-one">
    <div class="cima">
      <div class="cimaEsq">
        <div class="ttlExpanded">
          <p>Design and Simulation</p>
        </div>
        <div class="txtExpanded">
          <p>
            NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help
            professionals, creators, developers, and students worldwide enhance
            creative workflows and build, operate, and connect metaverse
            applications.
          </p>
        </div>
        <div class="linkExpanded">
          <a href="http://10.150.5.179:6544/"><i class="fas fa-chevron-down"/>Quick Links</a>
        </div>
      </div>
      <div class="cimaDir">
        <div class="areaBotoes">
          <div class="buttons">
            <div class="leftbtn">
              <i class="fas fa-angle-left" />
            </div>
            <div class="rightbtn">
              <i class="fas fa-angle-right" />
            </div>
          </div>
        </div>
        <div class="areaCardsExpanded">
          <div class="cardsExpanded">
            <div class="cardsExpandedImg" />
            <div class="cardsExpandedInfo">
              <div class="cardsExpandedCategory">
                <p>Simulation | Announcement</p>
              </div>
              <div class="cardsExpandedTtl">
                <p>
                  NVIDIA Omniverse Cloud Now Available to Select Enterprises
                </p>
              </div>
              <div class="cardsExpandedTxt">
                <p>
                  New plataform-as-a service enabling enterpreises to unify
                  digitalization across their core product and business
                  processes is now available to global automotive
                </p>
              </div>
            </div>
          </div>
          <div class="cardsExpanded">
            <div class="cardsExpandedImg" />
            <div class="cardsExpandedInfo">
              <div class="cardsExpandedCategory">
                <p>Simulation | Announcement</p>
              </div>
              <div class="cardsExpandedTtl">
                <p>
                  NVIDIA Redefines Workstations to Power New Era of Performance
                </p>
              </div>
              <div class="cardsExpandedTxt">
                <p>
                  Announcing six new NVIDIA RTX™ Ada Lovelace architecture GPUs
                  for laptops and desktops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="baixo">
      <div class="slider">
        <div class="sliderProgression" />
      </div>
    </div>
  </div>
  <div class="footerAbove">
    <div class="footerContent">
      <div class="cardsFooter">
        <div class="ttlCardsFooter">
          <p>Corporate Information</p>
        </div>
        <div class="txtCardsFooter">
          <ol>
            <li>About Us</li>
            <li>Corporate Overview</li>
            <li>Technologies</li>
            <li>Research</li>
            <li>Investors</li>
            <li>Social Responsibility</li>
            <li>NVIDIA Foundation</li>
          </ol>
        </div>
        <div class="subscribeFooter">
          <i class="far fa-envelope" style="color:#76b900"/>
          <p>Sign Up for NVIDIA News</p>
          <div class="btnFooter">Subscribe</div>
        </div>
      </div>
      <div class="cardsFooter">
        <div class="ttlCardsFooter">
          <p>Get Involved</p>
        </div>
        <div class="txtCardsFooter">
          <ol>
            <li>Forums</li>
            <li>Carrers</li>
            <li>Developer Home</li>
            <li>NVIDIA Partner Network</li>
            <li>Startups and VCs</li>
            <li>Technical Training</li>
            <li>Training for IT Professionals</li>
            <li>Professional Services for Data Science</li>
          </ol>
        </div>
      </div>
      <div class="cardsFooter">
        <div class="ttlCardsFooter">
          <p>News & Events</p>
        </div>
        <div class="txtCardsFooter">
          <ol>
            <li>Newsroom</li>
            <li>NVIDIA Blog</li>
            <li>Webinars</li>
            <li>Stay Informed</li>
            <li>Events Calendar</li>
            <li>NVIDIA GTC</li>
            <li>NVIDIA On-Demand</li>
          </ol>
        </div>
        <div class="subscribeFooter">
          <p style="color: #666">Follow NVIDIA </p>
          <i id="socialMedia" class="fab fa-facebook-f" style="color: #666"/>
          <i id="socialMedia" class="fab fa-twitter" style="color: #666"/>
          <i id="socialMedia" class="fab fa-linkedin-in" style="color: #666"/>
          <i id="socialMedia" class="fab fa-instagram" style="color: #666"/>
          <i id="socialMedia" class="fab fa-youtube" style="color: #666"/>
        </div>
      </div>
    </div>
  </div>
  <div class="footerBelow">
    <div class="logoCountry">
      <img src="/images/logo-footer.png" alt="" />
      <a href="http://10.150.5.179:6544/">United States</a>
    </div>
    <div class="privacy">
      <p class="pDad">Privacy Policy | Manage My Privacy | Legal | Accessibility | Corporate Policies | Product Security | Contact</p>
      <p class="pChild">Copyright © 2023 NVIDIA Corporation</p>
    </div>
  </div>
</div>

<style>
  .content {
    max-width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  .divisoria {
    width: 100%;
    height: 5%;
    background-color: #000;
  }

  .propaganda {
    width: 100%;
    height: 15%;
    background-color: #f1f1f1;
    display: flex;
  }

  .contentPropaganda {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10em;
  }

  .contentPropaganda img {
    height: 100%;
  }

  .txtPropaganda p {
    font-size: 2.8rem;
    font-weight: 900;
    margin-left: 1em;
  }

  .txtPropaganda {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p span:hover {
    cursor: pointer;
  }

  .expandedNews-one {
    width: 100%;
    background-color: white;
    height: 95%;
  }

  .cima {
    width: 100%;
    height: 90%;
    display: flex;
  }
  .cimaEsq {
    width: 43%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 10em;
  }
  .cimaDir {
    width: 57%;
    height: 100%;
  }
  .baixo {
    width: 100%;
    height: 10%;
    display: flex;
  }
  .ttlExpanded {
    width: 80%;
    height: 10%;
    margin-top: 10%;
    justify-content: start;
    display: flex;
    align-items: center;
  }
  .ttlExpanded p {
    font-size: 3.5rem;
    font-weight: 900;
  }
  .txtExpanded {
    width: 80%;
    height: 30%;
  }
  .txtExpanded p {
    font-size: 2.2rem;
  }
  .linkExpanded {
    width: 80%;
    height: 10%;
  }
  .linkExpanded a,
  .linkExpanded i {
    font-size: 2rem;
    text-decoration: none;
    color: green;
  }
  .linkExpanded i {
    margin-right: 0.5em;
  }
  .areaBotoes {
    width: 100%;
    height: 10%;
    margin-top: 7%;
    justify-content: end;
    display: flex;
    align-items: center;
  }
  .buttons {
    margin-right: 10em;
    width: 10%;
    height: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .leftbtn {
    width: 40%;
    height: 100%;
    background-color: #76b900;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: lighter;
  }

  .rightbtn {
    width: 40%;
    background-color: #76b900;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: lighter;
  }
  .rightbtn:hover, .leftbtn:hover {
    background-color: #6aa700;
    cursor:pointer;
  }

  .rightbtn:hover i {
    transform: translate(3px);
    transition-duration: 1s;
  }
  .leftbtn:hover i {
    transform: translate(-3px);
    transition-duration: 1s;
  }

  .areaCardsExpanded {
    width: 100%;
    height: 81.2%;
    display: flex;
    align-items: start;
  }

  .cardsExpanded {
    margin: 1em;
    margin-top: 2.5em;
    width: 48%;
    height: 90%;
    transition: 1s;
    border-radius: 10px;
  }
  .cardsExpandedImg {
    width: 100%;
    height: 50%;
    background-color: darkblue;
  }

  .cardsExpanded:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s;
  }
  .cardsExpandedInfo {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .cardsExpandedCategory {
    width: 90%;
  }
  .cardsExpandedCategory p {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .cardsExpandedTtl {
    width: 90%;
  }
  .cardsExpandedTtl p {
    font-size: 1.7rem;
    font-weight: 700;
  }
  .cardsExpandedTxt {
    width: 90%;
  }
  .cardsExpandedTxt p {
    font-size: 1.5rem;
  }

  .slider {
    width: 100%;
    height: 8%;
    background-color: rgb(185, 185, 185);
    margin-left: 10em;
    margin-right: 10em;
    border-radius: 10px;
  }
  .sliderProgression {
    width: 30%;
    height: 100%;
    background-color: #76b900;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .footerAbove {
    width: 100%;
    height: 70%;
    background-color: #000;
  }
  .footerContent {
    width: calc(100%-20em);
    height: 100%;
    background-color: #000;
    margin-right: 10em;
    margin-left: 10em;
    display: flex;
    justify-content: space-between;
  }
  .cardsFooter {
    width: 32%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5em;
  }
  .ttlCardsFooter {
    width: 100%;
    display: flex;
  }
  .ttlCardsFooter p {
    color: white;
    font-size: 2.5rem;
    font-weight: 900;
  }
  .txtCardsFooter {
    width: 100%;
  }
  .txtCardsFooter ol {
    font-size: 1.6rem;
    border-top: 1.5px gray solid;
  }

  .subscribeFooter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5em;
  }
  .subscribeFooter p {
    font-size: 1.8rem;
    color: white;
  }

  .subscribeFooter i {
    font-size: 4rem;
  }
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #76b900;
  }
  li {
    margin-top: 0.7em;
  }
  li:hover, .btnFooter:hover {
    cursor: pointer;
  }
  .btnFooter:hover {
    background-color: #6aa700;
  }
  .btnFooter {
    width: 22%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #76b900;
  }
  #socialMedia:hover {
    cursor: pointer;
  }
  .footerBelow {
    width: 100%;
    height: 25%;
  }
  .logoCountry {
    width: calc(100%-10em);
    height: 40%;
    display: flex;
    margin-left: 10em;
    align-items: center;
    justify-content: space-between;
  }
  .logoCountry a {
    text-decoration: none;
    font-size: 1.8rem;
    color: #ccc;
    font-weight: 700;
    margin-right: 5em;
  }
  .privacy {
    width: calc(100%-10em);
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10em;
  }
  .privacy .pDad {
    font-size: 1.5rem;
    margin: 0;
    word-spacing: .2em;
  }
  .pDad:hover {
    cursor: pointer;
  }
  .privacy .pChild {
    font-size: 1.3rem;
    margin: 0;
    margin-top: 0.5em;
  }
  .logoCountry img {
    width: 7%;
    height: 50%;
  }
</style>
