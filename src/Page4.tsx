import style4 from './styles/page4.module.css';

function App() {
  return (
    <>
      <section className={style4.page4_aboutUs_bottom}>
        <div className={style4.page4_bottom_inner}>
          <div className={style4.page4_bottom_left}>
            <img src="../src/assets/img/illustration-10.webp" />
          </div>
          <div className={style4.page4_bottom_right}>
            <h3 className={style4.page4_bottom_right_title}>
              Voluptatem dignissimos provident quasi corporis voluptas
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={style4.page4_right_skills}>
              <div className={style4.page4_right_skill}>
                <div className={style4.page4_right_skill_info}>
                  <p>HTML</p>
                  <p>100%</p>
                </div>
                <div className={style4.page4_right_skill_progress}>
                  <div className={style4.page4_progressBar}></div>
                </div>
              </div>
              <div className={style4.page4_right_skill}>
                <div className={style4.page4_right_skill_info}>
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className={style4.page4_right_skill_progress}>
                  <div className={style4.page4_progressBar_90}></div>
                </div>
              </div>
              <div className={style4.page4_right_skill}>
                <div className={style4.page4_right_skill_info}>
                  <p>JAVASCRIPT</p>
                  <p>75%</p>
                </div>
                <div className={style4.page4_right_skill_progress}>
                  <div className={style4.page4_progressBar_75}></div>
                </div>
              </div>
              <div className={style4.page4_right_skill}>
                <div className={style4.page4_right_skill_info}>
                  <p>PHOTOSHOP</p>
                  <p>55%</p>
                </div>
                <div className={style4.page4_right_skill_progress}>
                  <div className={style4.page4_progressBar_55}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
