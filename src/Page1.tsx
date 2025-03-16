import { useEffect, useState } from 'react';

import style1 from './styles/page1.module.css';

function App() {
  const [scrollBG, setScrollBG] = useState('rgba(255,255,255,0)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollBG('rgba(40, 58, 90, 0.9)');
      } else {
        setScrollBG('rgba(255, 255, 255, 0)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className={style1.navBar_container}>
          <div className={style1.logo_container}>
            <img
              className={style1.navBar_top_logo}
              src="/img/logo.png"
            />
            <div className={style1.preview_container}>
              <div className={style1.preview_computer}>
                <img src="/icons/computer.svg" />
              </div>
              <div className={style1.preview_tablet}>
                <img src="/icons/tablet.svg" />
              </div>
              <div className={style1.preview_phone}>
                <img src="/icons/phone.svg" />
              </div>
            </div>
          </div>
          <div className={style1.navBar_top_mid_container}>
            <a className={style1.navBar_top_mid_img}>
              <img src="/icons/chevron-left.svg" />
            </a>
            <a className={style1.navBar_top_mid}>Arsha</a>
            <a className={style1.navBar_top_mid_img}>
              <img src="/icons/chevron-right.svg" />
            </a>
          </div>
          <div className={style1.navBar_top_right_container}>
            <a>
              <img src="/icons/box-arrow-up-right.svg" />
            </a>
            <a className={style1.download_btn_container}>
              <img src="/icons/download.svg" />
              <span>DOWNLOAD</span>
            </a>
          </div>
        </div>
        <div
          className={style1.navBar_bottom}
          style={{
            backgroundColor: scrollBG,
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <div className={style1.navBar_bottom_container}>
            <span className={style1.navBar_bottom_left}>ARSHA</span>
            <div className={style1.navBar_bottom_right}>
              <a className={style1.categori_1}>Home</a>
              <a className={style1.categori}>About</a>
              <a className={style1.categori}>Services</a>
              <a className={style1.categori}>Portfolio</a>
              <a className={style1.categori}>Team</a>
              <a className={style1.categori}>Pricing</a>
              <a className={style1.categori}>Blog</a>
              <a className={style1.categori}>
                <span>Dropdown</span>
                <img src="/icons/chevron-down.svg" />
              </a>
              <a className={style1.categori}>Contact</a>
              <a className={style1.categori_btn}>Get Started</a>
            </div>
          </div>
        </div>
      </header>
      <div className={style1.page1}>
        <div className={style1.page1_container}>
          <div className={style1.page1_left_container}>
            <h1 className={style1.page1_left_title}>
              Better Solutions For Your Business
            </h1>
            <p className={style1.page1_left_subtitle}>
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className={style1.page1_left_btns}>
              <a className={style1.page1_left_firstBtn}>Get Started</a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className={style1.page1_left_secondBtn}
              >
                <img src="/icons/play-circle.svg" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className={style1.page1_right_container}>
            <img
              src="/img/hero-img.png"
              className={style1.animated}
            />
          </div>
        </div>
      </div>
      <section className={style1.page1_bottom_bar}>
        <div className={style1.page1_company_container}>
          <div className={style1.page1_company_bar}>
            <img src="/img/banner1.png" />
            <img src="/img/banner2.png" />
            <img src="/img/banner3.png" />
            <img src="/img/banner4.png" />
            <img src="/img/banner5.png" />
            <img src="/img/banner6.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
