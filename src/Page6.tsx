import style6 from './styles/page6.module.css';

function App() {
  return (
    <>
      <section className={style6.page6_final}>
        <section className={style6.call_to_action_km}>
          <img
            src="/img/bg-8.webp"
            alt="배경 이미지"
          />
          <div className={style6.topinfo_container_km}>
            <div className={style6.topinfo_km}>
              <div className={style6.topinfo_left_km}>
                <div>Call To Action</div>
                <div>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </div>
              <div className={style6.topinfo_right_km}>
                <a href="#">Call To Action</a>
              </div>
            </div>
          </div>
        </section>
        <section className={style6.portfolio_km}>
          <div className={style6.PF_title_container_km}>
            <div className={style6.PF_title_km}>
              <div>PORTFOLIO</div>
              <div>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </div>
            </div>
          </div>
          <div className={style6.PF_img_container_km}>
            <div className={style6.PF_item_km}>
              <div className={style6.PF_item_nav_km}>
                <input
                  type="radio"
                  id="all_km"
                  name="nav"
                  checked
                />
                <label
                  htmlFor={style6.all_km}
                  className={style6.nav_button_km}
                >
                  All
                </label>
                <input
                  type="radio"
                  id="app_km"
                  name="nav"
                />
                <label
                  htmlFor="app-km"
                  className={style6.nav_button_km}
                >
                  App
                </label>
                <input
                  type="radio"
                  id="card_km"
                  name="nav"
                />
                <label
                  htmlFor="card-km"
                  className={style6.nav_button_km}
                >
                  Card
                </label>
                <input
                  type="radio"
                  id="web_km"
                  name="nav"
                />
                <label
                  htmlFor="web-km"
                  className={style6.nav_button_km}
                >
                  Web
                </label>
                <div className={style6.PF_item_list_km}>
                  <div className={style6.PF_item_km__App1_km__X2_km}>
                    <img
                      src="/img/masonry-portfolio-1.jpg"
                      alt="아이템1"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>App 1</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-1.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Product1_km__X1_km}>
                    <img
                      src="/img/masonry-portfolio-2.jpg"
                      alt="아이템2"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Product 1</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-2.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Branding1_km}>
                    <img
                      src="/img/masonry-portfolio-3.jpg"
                      alt="아이템3"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Branding 1</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-3.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__App2_km__X1_km}>
                    <img
                      src="/img/masonry-portfolio-4.jpg"
                      alt="아이템4"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>App 2</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-4.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Product2_km__X3_km}>
                    <img
                      src="/img/masonry-portfolio-5.jpg"
                      alt="아이템5"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Product 2</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-5.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Branding2_km__X3_km}>
                    <img
                      src="/img/masonry-portfolio-6.jpg"
                      alt="아이템6"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Branding 2</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-6.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__App3_km__X1_km}>
                    <img
                      src="/img/masonry-portfolio-7.jpg"
                      alt="아이템7"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>App 3</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-7.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Product3_km__X1_km}>
                    <img
                      src="/img/masonry-portfolio-8.jpg"
                      alt="아이템8"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Product 3</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-8.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={style6.PF_item_km__Branding3_km__X1_km}>
                    <img
                      src="/img/masonry-portfolio-9.jpg"
                      alt="아이템9"
                    />
                    <div className={style6.PF_item_info_km}>
                      <span className={style6.PF_item_name_km}>Branding 3</span>
                      <span className={style6.PF_item_about_km}>
                        Lorem ipsum, dolor sit
                      </span>
                      <a
                        href="/img/masonry-portfolio-9.jpg"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://bootstrapmade.com/content/demo/Arsha/portfolio-details.html"
                        className={style6.icon_container_km}
                      >
                        <svg
                          className={style6.icon_km}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
