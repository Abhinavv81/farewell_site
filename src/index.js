import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./index.css";
import "./global.css";
import data from "./data";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import Typewriter from "typewriter-effect";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CursorLine from "./CursorLine";
import PixonoidsEffect from "./pixonoidsEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Main() {
  return (
    <body>
      <Background />
    </body>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarLinks = document.querySelector(".links");

    const handleClick = () => {
      navbarLinks.classList.toggle("show");
      setIsOpen(!isOpen);
    };

    toggleButton.addEventListener("click", handleClick);
    return () => {
      toggleButton.removeEventListener("click", handleClick);
    };
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Use smooth scroll
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleLinkClick = () => {
    const navbarLinks = document.querySelector(".links");
    navbarLinks.classList.remove("show");
    setIsOpen(false);
  };

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const [openTheme, setOpenTheme] = useState(false);
  const [openPixo, setOpenPixo] = useState(false);

  const closeModalTheme = () => setOpenTheme(false);
  const closeModalPixo = () => setOpenPixo(false);

  return (
    <nav className="nav-bar">
      <div className="links">
        <ul>
          <li>
            <a
              href="#Images"
              onClick={() => {
                handleLinkClick();
                scrollToSection("Images");
              }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#Video"
              onClick={() => {
                handleLinkClick();
                scrollToSection("video");
              }}
            >
              Video Diary
            </a>
          </li>
          <li>
            <a
              href="#Characters"
              onClick={() => {
                handleLinkClick();
                scrollToSection("characters");
              }}
            >
              Memorable Faces
            </a>
          </li>
          <li>
            <>
              <button
                className="button-theme"
                onClick={() => {
                  handleLinkClick();
                  setOpenTheme((o) => !o);
                }}
              >
                Theme
              </button>
              <Popup
                open={openTheme}
                closeOnDocumentClick
                onClose={closeModalTheme}
                modal
              >
                {(close) => (
                  <div className="modal-theme">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header-theme">TEKKEN</div>

                    <div className="content-theme">
                      Tekken is a Japanese fighting game franchise that includes
                      film and print adaptations. The name translates to "Iron
                      Fist".
                      <br />
                      <br />
                      To our Tekken Masters 🥋, as you prepare to exit the
                      arena, know that your presence will be sorely missed. The
                      dojo won't be the same without your fierce determination
                      and unwavering spirit. Remember, just like in Tekken,
                      every challenge is an opportunity to grow stronger.
                      Farewell, and may your future endeavors be as electrifying
                      as a perfect Electric Wind God Fist!
                    </div>
                  </div>
                )}
              </Popup>
            </>
          </li>
          <li>
            <>
              {isDesktopOrLaptop && (
                <>
                  <CursorLine />
                  <Popup
                    trigger={
                      <button className="button-theme">Pixonoids</button>
                    }
                    modal
                  >
                    {(close) => (
                      <div className="modal-pixo">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header-pixo">
                          PIXONOIDS
                          <div className="pixo-img"></div>
                        </div>
                        <div className="content-pixo">
                          <p>
                            The Official Photography , Animation , Graphic
                            Designing , Video Editing and Web Development Club
                            of National Institute Of Technology Hamirpur
                            <br />
                            <br />
                            "Art is that form of unique expression which
                            traverses the boundaries of inner aspirations and
                            ethereal world." From rustling leaves to pastel
                            hues, bustling crowds to silent rooms, we at
                            PIXONOIDS capture it all. PIXONOIDS is the core club
                            of NIT-H, which is responsible for documentation of
                            college events and fests, designing posters, making
                            short films, and conceiving the official websites
                            for our college fests.
                          </p>
                        </div>
                      </div>
                    )}
                  </Popup>
                </>
              )}
              {isTabletOrMobile && (
                <>
                  <button
                    className="button-theme"
                    onClick={() => {
                      handleLinkClick();
                      setOpenPixo((o) => !o);
                    }}
                  >
                    Pixonoids
                  </button>
                  <Popup
                    open={openPixo}
                    closeOnDocumentClick
                    onClose={closeModalPixo}
                    modal
                  >
                    {(close) => (
                      <div className="modal-pixo">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header-pixotab">PIXONOIDS</div>
                        <div className="content-pixotab">
                          <p>
                            The Official Photography , Animation , Graphic
                            Designing , Video Editing and Web Development Club
                            of National Institute Of Technology Hamirpur
                            <br />
                            <br />
                            "Art is that form of unique expression which
                            traverses the boundaries of inner aspirations and
                            ethereal world." From rustling leaves to pastel
                            hues, bustling crowds to silent rooms, we at
                            PIXONOIDS capture it all. PIXONOIDS is the core club
                            of NIT-H, which is responsible for documentation of
                            college events and fests, designing posters, making
                            short films, and conceiving the official websites
                            for our college fests.
                          </p>
                        </div>
                      </div>
                    )}
                  </Popup>
                </>
              )}
            </>
          </li>
        </ul>
      </div>

      <div className="navbar-toggle">
        <div className="tog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="cross">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

const Background = () => {
  const heading = useRef(null);
  const subheading = useRef(null);
  useEffect(() => {
    const head = heading.current;
    const subhead = subheading.current;
    gsap.from(head, {
      opacity: 0,
      duration: 1,
      y: 50,
      delay: 0.25,
    });
    gsap.from(subhead, {
      opacity: 0,
      duration: 1,
      y: 50,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <div className="landing-page">
        <Nav />
        <div className="landing-text">
          <PixonoidsEffect />
          <span id="pixonoids-text" ref={heading}></span>
          <span id="farewell-text" ref={subheading}></span>
        </div>
      </div>
      <div className="image-section" id="Images"></div>
      <div className="gap-btw-vid-img"></div>
      <div className="video-section" id="Video">
        <video
          width="1080"
          height=""
          controls
          poster="https://res.cloudinary.com/duysea99p/image/upload/v1715412116/3Xd9GsEyvcg-HD_k2zmlp.jpg"
        >
          <source
            src="https://res.cloudinary.com/duysea99p/video/upload/v1713461257/FRESHLOOK_2023_Compressed_ioewyh.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="fixed-logo"></div>
      <Cards
        img={data.pretyush.img}
        name={data.pretyush.naam}
        deptName={data.pretyush.deptName}
        kuchBaat={data.pretyush.kuchBaat}
        instaLink={data.pretyush.instaLink}
        gitLink={data.pretyush.gitLink}
      />
      <Cards
        img={data.pranjalGoyal.img}
        name={data.pranjalGoyal.naam}
        deptName={data.pranjalGoyal.deptName}
        kuchBaat={data.pranjalGoyal.kuchBaat}
        instaLink={data.pranjalGoyal.instaLink}
        gitLink={data.pranjalGoyal.gitLink}
      />
      <Cards
        img={data.kavya.img}
        name={data.kavya.naam}
        deptName={data.kavya.deptName}
        kuchBaat={data.kavya.kuchBaat}
        instaLink={data.kavya.instaLink}
        gitLink={data.kavya.gitLink}
      />
      <Cards
        img={data.kshitijRoodkee.img}
        name={data.kshitijRoodkee.naam}
        deptName={data.kshitijRoodkee.deptName}
        kuchBaat={data.kshitijRoodkee.kuchBaat}
        instaLink={data.kshitijRoodkee.instaLink}
        gitLink={data.kshitijRoodkee.gitLink}
      />
      <Cards
        img={data.bhanuPratap.img}
        name={data.bhanuPratap.naam}
        deptName={data.bhanuPratap.deptName}
        kuchBaat={data.bhanuPratap.kuchBaat}
        instaLink={data.bhanuPratap.instaLink}
        gitLink={data.bhanuPratap.gitLink}
      />
      <Cards
        img={data.devanshiRaman.img}
        name={data.devanshiRaman.naam}
        deptName={data.devanshiRaman.deptName}
        kuchBaat={data.devanshiRaman.kuchBaat}
        instaLink={data.devanshiRaman.instaLink}
        gitLink={data.devanshiRaman.gitLink}
      />
      <Cards
        img={data.banitaRana.img}
        name={data.banitaRana.naam}
        deptName={data.banitaRana.deptName}
        kuchBaat={data.banitaRana.kuchBaat}
        instaLink={data.banitaRana.instaLink}
        gitLink={data.banitaRana.gitLink}
      />
      <Cards
        img={data.shambhaviDogra.img}
        name={data.shambhaviDogra.naam}
        deptName={data.shambhaviDogra.deptName}
        kuchBaat={data.shambhaviDogra.kuchBaat}
        instaLink={data.shambhaviDogra.instaLink}
        gitLink={data.shambhaviDogra.gitLink}
      />
      <Cards
        img={data.suryanshuAwasthi.img}
        name={data.suryanshuAwasthi.naam}
        deptName={data.suryanshuAwasthi.deptName}
        kuchBaat={data.suryanshuAwasthi.kuchBaat}
        instaLink={data.suryanshuAwasthi.instaLink}
        gitLink={data.suryanshuAwasthi.gitLink}
      />
      <Cards
        img={data.priyanshooSingh.img}
        name={data.priyanshooSingh.naam}
        deptName={data.priyanshooSingh.deptName}
        kuchBaat={data.priyanshooSingh.kuchBaat}
        instaLink={data.priyanshooSingh.instaLink}
        gitLink={data.priyanshooSingh.gitLink}
      />
      <Cards
        img={data.aarthiReddy.img}
        name={data.aarthiReddy.naam}
        deptName={data.aarthiReddy.deptName}
        kuchBaat={data.aarthiReddy.kuchBaat}
        instaLink={data.aarthiReddy.instaLink}
        gitLink={data.aarthiReddy.gitLink}
      />
      <Cards
        img={data.sarthakSood.img}
        name={data.sarthakSood.naam}
        deptName={data.sarthakSood.deptName}
        kuchBaat={data.sarthakSood.kuchBaat}
        instaLink={data.sarthakSood.instaLink}
        gitLink={data.sarthakSood.gitLink}
      />
      <Cards
        img={data.himanshuSharma.img}
        name={data.himanshuSharma.naam}
        deptName={data.himanshuSharma.deptName}
        kuchBaat={data.himanshuSharma.kuchBaat}
        instaLink={data.himanshuSharma.instaLink}
        gitLink={data.himanshuSharma.gitLink}
      />
      <Cards
        img={data.anandRaj.img}
        name={data.anandRaj.naam}
        deptName={data.anandRaj.deptName}
        kuchBaat={data.anandRaj.kuchBaat}
        instaLink={data.anandRaj.instaLink}
        gitLink={data.anandRaj.gitLink}
      />
      <Cards
        img={data.kartikeySaini.img}
        name={data.kartikeySaini.naam}
        deptName={data.kartikeySaini.deptName}
        kuchBaat={data.kartikeySaini.kuchBaat}
        instaLink={data.kartikeySaini.instaLink}
        gitLink={data.kartikeySaini.gitLink}
      />
      <Cards
        img={data.mohitKumar.img}
        name={data.mohitKumar.naam}
        deptName={data.mohitKumar.deptName}
        kuchBaat={data.mohitKumar.kuchBaat}
        instaLink={data.mohitKumar.instaLink}
        gitLink={data.mohitKumar.gitLink}
      />
      <Cards
        img={data.shivaniKawade.img}
        name={data.shivaniKawade.naam}
        deptName={data.shivaniKawade.deptName}
        kuchBaat={data.shivaniKawade.kuchBaat}
        instaLink={data.shivaniKawade.instaLink}
        gitLink={data.shivaniKawade.gitLink}
      />
      <Cards
        img={data.yajatChaudhary.img}
        name={data.yajatChaudhary.naam}
        deptName={data.yajatChaudhary.deptName}
        kuchBaat={data.yajatChaudhary.kuchBaat}
        instaLink={data.yajatChaudhary.instaLink}
        gitLink={data.yajatChaudhary.gitLink}
      />
      <Cards
        img={data.kaushikGeyyer.img}
        name={data.kaushikGeyyer.naam}
        deptName={data.kaushikGeyyer.deptName}
        kuchBaat={data.kaushikGeyyer.kuchBaat}
        instaLink={data.kaushikGeyyer.instaLink}
        gitLink={data.kaushikGeyyer.gitLink}
      />
      <Cards
        img={data.anirudhThakur.img}
        name={data.anirudhThakur.naam}
        deptName={data.anirudhThakur.deptName}
        kuchBaat={data.anirudhThakur.kuchBaat}
        instaLink={data.anirudhThakur.instaLink}
        gitLink={data.anirudhThakur.gitLink}
      />
      <Msg />
      <Footer />
    </>
  );
};

const Cards = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  const cardRef = useRef(null);
  const chrImgRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    const chrImg = chrImgRef.current;

    gsap.from(chrImg, {
      opacity: 0,
      x: -100,
      y: 50,
      scale: 0.1,
      duration: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: chrImg,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="cardsBg" id="Characters">
          <div className="Cards" ref={cardRef}>
            <img src={props.img} alt="Pixonoids Logo" />
            <div className="content-box">
              <h2 className="card-title">{props.name}</h2>
              <span className="dept">{props.deptName}</span>
              <p className="card-content">{props.kuchBaat}</p>
              <div className="flex">
                <a
                  className="insta"
                  href={props.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                <a
                  className="github"
                  href={props.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="chrImg" ref={chrImgRef}></div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="cardsBg" id="Characters">
          <div className="Cards" ref={cardRef}>
            <img src={props.img} alt="Pixonoids Logo" />
            <div className="content-box">
              <h2 className="card-title">{props.name}</h2>
              <span className="dept">{props.deptName}</span>
              <p className="card-content">{props.kuchBaat}</p>
              <div className="flex">
                <a
                  className="insta"
                  href={props.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                <a
                  className="github"
                  href={props.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Msg = () => {
  const names = Object.values(data).map((item) => item.naam);
  return (
    <>
      <div className="gap"></div>
      <div className="msgparent">
        <div className="msg">
          <div className="msgTXT">
            <p>
              "Seniors, as you journey towards new horizons, know that your
              presence will be deeply missed. Your legacy of excellence and
              camaraderie will forever inspire us. Farewell, and may your
              futures be filled with boundless success and joy."
            </p>
          </div>
          <br />
          <div className="nameANIMATION">
            <div className="weWILL">WE WILL MISS YOU</div>
            <div className="nameTYPE">
              <Typewriter
                options={{
                  strings: names,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-name">
          <img
            className="logo-footer"
            src="https://res.cloudinary.com/duysea99p/image/upload/v1712850689/Pixonoids_-_Material_UI_-_Copy_lqfq2s.png"
            alt=""
          />
          <p className="club-name">PIXONOIDS</p>
        </div>
        <div className="links">
          <a
            className="insta"
            href="https://www.instagram.com/pixonoids/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <a
            className="github"
            href="https://github.com/pixonoids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>

          <a
            className="linkedIN"
            href="https://www.linkedin.com/company/pixonoids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Main />);
