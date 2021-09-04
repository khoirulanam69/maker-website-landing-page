import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faDribbble, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

// Images
import Laptop from './assets/img/laptop.jpg';
import Girl from './assets/img/girl.jpg';
import Client from './assets/img/client.jpg';
import Gempa from './assets/img/gempa.png';
import Tourist from './assets/img/tourist.png';
import Plants from './assets/img/plants.png';
import Sport from './assets/img/sport.png';

const url = "http://localhost:3000/";

function Navbar() {
  const handleMenuClick = () => {
    const btnMenu = document.querySelector(".menu-bars");
    const ul = document.querySelectorAll('ul');
    if (btnMenu.classList[1]) {
      ul.forEach(element => {
        element.style.display = 'none';
      });
      btnMenu.classList.remove('open');
    } else {
      ul.forEach(element => {
        element.style.display = 'flex';
      });
      btnMenu.classList.add('open');
    }
  }

  return (
    <nav className="navbar" >
      <ul>
        <li><a href={url}>About</a></li>
        <li><a href={url}>Pricing</a></li>
        <li><a href={url}>Contact</a></li>
      </ul>
      <div className="navbar-brand">WEBO</div>
      <ul className="menu-icons">
        <li><a href={url}><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href={url}><FontAwesomeIcon icon={faDribbble} /></a></li>
        <li><a href={url}><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href={url}><FontAwesomeIcon icon={faYoutube} /></a></li>
      </ul>
      <div className="menu-bars" onClick={handleMenuClick}>
        <div className="bar" />
      </div>
    </nav >
  )
}

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="section">
        <div className="title">
          <h1>We Make Your Dream Website</h1>
        </div>
        <div className="desc">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <a href={url} className="btn-primary">Get Started</a>
      </div>
      <div className="image">
        <div className="image-wrapper">
          <img src={Laptop} alt="img-laptop" />
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

function CardStrengths() {
  return (
    <div className="card-strengths">
      <ul>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h2>40+</h2>
          <p>Happy Clients</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h2>540+</h2>
          <p>Projects Completed</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h2>300</h2>
          <p>Dedicate Members</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h2>25+</h2>
          <p>Awards Won</p>
        </li>
      </ul>
    </div>
  )
}

function About() {
  return (
    <div className="about">
      <div className="image">
        <img src={Girl} alt="about-img" />
      </div>
      <div className="section">
        <h2>About</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a href={url}>Get started <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
    </div>
  )
}

function Approach() {
  return (
    <div className="approach">
      <ul>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h6>Ideate</h6>
          <p>Turn your idea from concept to MVP</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h6>Design</h6>
          <p>Skecth the product to align the user needs</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h6>Develop</h6>
          <p>Convert the designs into a live application</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} className="card-icon" />
          <h6>Deploy</h6>
          <p>Launching the application to the market</p>
        </li>
      </ul>
      <div className="dotted" />
    </div>
  )
}

function SelectedWork() {
  return (
    <div className="selected-work">
      <h6>SELECTED WORKS</h6>
      <div className="works">
        <div className="work">
          <img src={Gempa} alt="gempa-app"></img>
        </div>
        <div className="work">
          <img src={Tourist} alt="tourist-app"></img>
        </div>
        <div className="work">
          <img src={Plants} alt="plants-app"></img>
        </div>
        <div className="work">
          <img src={Sport} alt="sport"></img>
        </div>
      </div>
    </div>
  )
}

function BtnCta() {
  return (
    <div className="btn-cta">
      <h2>Craft your new website with WEBO</h2>
      <a href={url} className="btn-primary">Get Started</a>
    </div>
  )
}

function ClientsSpeak() {
  return (
    <div className="clients-speak">
      <h2>Our clients speak</h2>
      <div className="slider">
        <div className="slides">
          {/* Button Slide */}
          <input type="radio" id="page1" name="clientSpeaks" />
          <input type="radio" id="page2" name="clientSpeaks" />
          {/* End Button Slide */}

          {/* Slide Pages */}
          <div className="slide active">
            <div className="client-speak">
              <div className="speak-section">
                <p>Incredible Experience</p>
                <p>We had an incredible experiece working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                <div className="arrow-down" />
              </div>
              <div className="client">
                <img src={Client} alt="img-client"></img>
                <div className="client-data">
                  <p>Jane Cooper</p>
                  <p>CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
            <div className="client-speak">
              <div className="speak-section">
                <p>Dependable, Responsive, Professional Partner</p>
                <p>Fermin Apps has colaborated with Landify team for several projects such as photo sharing apps and custom socials networking apps. The experiece has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future. Happy to work with Landify.</p>
                <div className="arrow-down" />
              </div>
              <div className="client">
                <img src={Client} alt="img-client" />
                <div className="client-data">
                  <p>Jane Cooper</p>
                  <p>CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
          </div>


          <div className="slide">
            <div className="client-speak">
              <div className="speak-section">
                <p>Incredible Experience</p>
                <p>We had an incredible experiece working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                <div className="arrow-down" />
              </div>
              <div className="client">
                <img src={Client} alt="img-client"></img>
                <div className="client-data">
                  <p>Jane Cooper</p>
                  <p>CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
            <div className="client-speak">
              <div className="speak-section">
                <p>Dependable, Responsive, Professional Partner</p>
                <p>Fermin Apps has colaborated with Landify team for several projects such as photo sharing apps and custom socials networking apps. The experiece has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future. Happy to work with Landify.</p>
                <div className="arrow-down" />
              </div>
              <div className="client">
                <img src={Client} alt="img-client" />
                <div className="client-data">
                  <p>Jane Cooper</p>
                  <p>CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Slide Pages */}
          {/* Navigation Auto */}
          <div className="navigation-auto">
            <label htmlFor="page1" className="btn-auto1"></label>
            <label htmlFor="page1" className="btn-auto2"></label>
          </div>
          {/* End Navigation Auto */}
        </div>
        {/* Navigation Manual */}
        <div className="navigation-manual">
          <label htmlFor="page1" className="btn-manual"></label>
          <label htmlFor="page2" className="btn-manual"></label>
        </div>
        {/* End Navigation Manual */}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <div className="copy-right">
        <div className="brand"><h4>Landify</h4></div>
        <p><FontAwesomeIcon icon={faCopyright} />2020 Landify UI Kit. All right reserved</p>
      </div>
      <div className="links">
        <div className="product">
          <h4>Product</h4>
          <a href={url}><p>Overview</p></a>
          <a href={url}><p>Features</p></a>
          <a href={url}><p>Tutorials</p></a>
          <a href={url}><p>Pricing</p></a>
          <a href={url}><p>Releases</p></a>
        </div>
        <div className="company">
          <h4>Company</h4>
          <a href={url}><p>About</p></a>
          <a href={url}><p>Press</p></a>
          <a href={url}><p>Careers</p></a>
          <a href={url}><p>Contact</p></a>
          <a href={url}><p>Partners</p></a>
        </div>
        <div className="support">
          <h4>Support</h4>
          <a href={url}><p>Help Center</p></a>
          <a href={url}><p>Term of Cervice</p></a>
          <a href={url}><p>Legal</p></a>
          <a href={url}><p>Privacy Police</p></a>
          <a href={url}><p>Status</p></a>
        </div>
        <div className="follow">
          <h4>Follow Us</h4>
          <a href={url}><p>Facebook</p></a>
          <a href={url}><p>Twitter</p></a>
          <a href={url}><p>Dribbble</p></a>
          <a href={url}><p>Instagram</p></a>
          <a href={url}><p>LinkedIn</p></a>
        </div>
      </div>
    </div>
  )
}

let counter = 1;
setInterval(function () {
  document.getElementById(`page${counter}`).checked = true;
  counter++;
  if (counter > 2) {
    counter = 1;
  }
}, 5000)

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('.navbar').style.background = "#8c30f5";
    document.querySelector('.navbar').style.color = "#fff";
    let link = document.querySelectorAll('.navbar a');
    link.forEach(element => {
      element.style.color = "#fff";
    });
  } else {
    let link = document.querySelectorAll('.navbar a');
    document.querySelector('.navbar').style.background = "transparent";
    document.querySelector('.navbar').style.color = "#000";
    link.forEach(element => {
      element.style.color = "#000";
    });
  }
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div className="divider" />
      <CardStrengths />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Approach />
      <div className="divider" />
      <SelectedWork />
      <div className="divider" />
      <BtnCta />
      <div className="divider" />
      <ClientsSpeak />
      <Footer />
      <div className="circle"></div>
    </div>
  );
}

export default App;
