import style2 from './styles/page2.module.css';

function App() {
  return (
    <>
      <section className={style2.page2_aboutUs_top}>
        <div className={style2.page2_aboutUs_container}>
          <h1 className={style2.page2_aboutUs_title}>ABOUT US</h1>
        </div>
        <div className={style2.page2_aboutUs_outline}>
          <div className={style2.page2_aboutUs_inline}>
            <div className={style2.page2_aboutUs_left}>
              <p className={style2.page2_aboutUs_left_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className={style2.page2_aboutUs_left_lists}>
                <div className={style2.page2_aboutUs_left_list}>
                  <img src="../src/assets/check2-circle.svg" />
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className={style2.page2_aboutUs_left_list}>
                  <img src="../src/assets/check2-circle.svg" />
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
                <div className={style2.page2_aboutUs_left_list}>
                  <img src="../src/assets/check2-circle.svg" />
                  <p>Ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
              </div>
            </div>
            <div className={style2.page2_aboutUs_right}>
              <p className={style2.page2_aboutUs_right_info}>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className={style2.page2_aboutUs_readBtn}>
                <span>Read More</span>
                <img src="../src/assets/arrow-right.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
