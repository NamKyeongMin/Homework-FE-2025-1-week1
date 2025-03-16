import style3 from './styles/page3.module.css';

function App() {
  return (
    <>
      <section className={style3.page3_aboutUs_mid}>
        <div className={style3.page3_aboutUs_mid_container}>
          <div className={style3.page3_aboutUs_left}>
            <div className={style3.page3_title_container}>
              <h3 className={style3.page3_left_title}>
                Eum ipsam laborum deleniti{' '}
                <span>velit pariatur architecto aut nihil</span>
              </h3>
              <p className={style3.page3_left_subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>
            <div className={style3.page3_left_lists}>
              <div className={style3.page3_left_list}>
                <div className={style3.page3_left_list1_num}>01</div>
                <div className={style3.page3_left_list1_content}>
                  Non consectetur a erat nam at lectus urna duis?
                </div>
                <div className={style3.page3_left_list1_toggle}>
                  <img src="../src/assets/chevron-right.svg" />
                </div>
              </div>
              <div className={style3.page3_left_list}>
                <div className={style3.page3_left_list2_num}>02</div>
                <div className={style3.page3_left_list2_content}>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </div>
                <div className={style3.page3_left_list2_toggle}>
                  <img src="../src/assets/chevron-right.svg" />
                </div>
              </div>
              <div className={style3.page3_left_list}>
                <div className={style3.page3_left_list3_num}>03</div>
                <div className={style3.page3_left_list3_content}>
                  Dolor sit amet consectetur adipiscing elit pellentesque?
                </div>
                <div className={style3.page3_left_list3_toggle}>
                  <img src="../src/assets/chevron-right.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={style3.page3_aboutUs_right}>
            <img src="../src/assets/img/why-us.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
