import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../images/majalogo2.png";
import iconEn from "../images/en.jpeg";
import iconSr from "../images/sr.png";
import LogoKoreografi from "../images/koreografi.png";
import { Menu, Language, ArrowDropDown, Close } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [downMenu, setDownMenu] = useState(false);
  const [openLen, setOpenLen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const chanegBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", chanegBackground);

  //Translation i18next
  const currentLanguageCode = localStorage.getItem("lng");
  const lngEn = "en";
  const lngRS = "rs";

  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <header>
      <nav>
        <div className={navbar ? "navbar-rs active " : "navbar-rs"}>
          <div
            onClick={() => setOpenMenu(false)}
            className={"menu-background " + (openMenu && "active")}
          ></div>

          <div className="navbar-container">
            <div className="mobile-menu">
              <div className="logo">
                <a href="/">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>

              <div className="navbar-menu">
                <ul className={`${openMenu ? "active" : ""}`}>
                  <li onClick={() => setOpenMenu(false)} className="close-menu">
                    <Close style={{ color: "#fff" }} />
                  </li>

                  <li>
                    <a href="/">{t("homeTitle")}</a>
                  </li>
                  <li className="studio">
                    <a href="/dance-studio">
                      {t("studioTitle")}{" "}
                      <img src={LogoKoreografi} alt="Logo Koreografi" />
                    </a>
                  </li>
                  <li>
                    <a href="/makoreografija">MAkoreografiJA</a>
                  </li>
                  <li>
                    <a href="/moulin-rouge">Moulin Rouge</a>
                  </li>

                  <li>
                    <a href="/music">{t("musicTitle")}</a>
                  </li>

                  <li className="cheer-down">
                    <span
                      className="link-drop-menu"
                      onClick={() => setDownMenu(!downMenu)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Cheerleading <ArrowDropDown style={{ color: "#fff" }} />
                    </span>
                    <ul className={`${downMenu ? "active" : ""}`}>
                      <li>
                        <a href="/kkcz">KKCZ</a>
                      </li>
                      <li>
                        <a href="/f4-euroleague">F4 {t("f4Title")}</a>
                      </li>

                      <li>
                        <a href="/serbian-national-team">{t("snTeamTitle")}</a>
                      </li>
                      <li>
                        <a href="/beach-sports">{t("beachTitle")}</a>
                      </li>
                      <li>
                        <a href="/gallery">{t("galleryTitle")}</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/commercials-and-tv-show">{t("tvTitle")}</a>
                  </li>

                  <li>
                    <a href="/musical">Musical</a>
                  </li>

                  <li>
                    <a href="/fitness">Fitness</a>
                  </li>

                  <li>
                    <a href="/biography">{t("biographyTitle")}</a>
                  </li>

                  <li>
                    <a href="/contact">{t("contactTitle")}</a>
                  </li>
                </ul>
              </div>

              <ul style={{ display: "flex" }}>
                <li
                  className="down-len"
                  onClick={() => setOpenLen(!openLen)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span style={{ width: 80 }}>
                    <Language style={{ color: "#fff" }} />
                    <ArrowDropDown style={{ color: "#fff" }} />
                    &nbsp; &nbsp;
                  </span>

                  <ul className={`${openLen ? "active" : ""}`}>
                    <li>
                      <button
                        className="btnEN"
                        onClick={() => handleChangeLng(lngEn)}
                        disabled={lngEn === currentLanguageCode}
                      >
                        EN &nbsp; <img src={iconEn} alt="English" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="btnRS App"
                        onClick={() => handleChangeLng(lngRS)}
                        disabled={lngRS === currentLanguageCode}
                      >
                        RS &nbsp; <img src={iconSr} alt="Serbian" />
                      </button>
                    </li>
                  </ul>
                </li>
                <div
                  onClick={() => setOpenMenu(!openMenu)}
                  title="Menu"
                  className="hamburger-menu"
                >
                  <Menu style={{ color: "#fff" }} />
                </div>
              </ul>
            </div>
          </div>
          {/* Navbar conatiner end*/}
        </div>
      </nav>
    </header>
  );
}
