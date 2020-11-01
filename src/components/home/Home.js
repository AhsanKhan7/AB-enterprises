import React, { useState } from "react";
import Header from "../header/header";
import HeaderSmall from "../headerSmall/HeaderSmall";
import S_footer from "../s_footer/s_footer";
import Footer from "../footer/footer";
import FrontPage from "../frontPage/frontPage";
import "./Home.scss";

const Home = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      {/* {active ? <HeaderSmall active={active} setActive={setActive} /> : null} */}
      <Header />
      {/* <div className={styles.menuButton} onClick={handleClick}>
        <div className={styles.togButton}>
          <button>=</button>
        </div>
        <div className={styles.smLogo}>
          <img src={NavHeaderLogo} alt="website logo" />
          <p>logo</p>
        </div>
      </div> */}
      <FrontPage />
      <Footer />
    </div>
  );
};

export default Home;
