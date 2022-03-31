import React, { useEffect, useState } from "react";
import "./Home.css";
import baseurl from "../baseURL/baseurl";
import Quotes from "./Quotes";

const Home = () => {
  return (
    /* <div className="homeContainer">
      <div className="firstGrid">
        <div className="firstGridItemContainer">
          <h1>
            Welcome to <span style={{ color: "#DE8667" }}>Quotastic</span>
          </h1>
          <div>
            Quotastic is free online platform for you to explore the quips,
            quotes, and proverbs. Sign up and express yourself.
          </div>
        </div>
        <div>2</div>
      </div>
      <div className="middleText">
        Explore the world of
        <span style={{ color: "#DE8667" }}> fantastic quotes</span>
      </div>
      <div className="middleText">
        <div style={{ color: "#DE8667" }}>Most upvoted quotes</div>
        <div>
          Most upvoted quotes on the platform. Sign up or login to like the
          quotes and keep them saved in your profile
        </div>
      </div>
      <Quotes />
    </div>*/
    <Quotes />
    /* <div className="quoteContainer">
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
        est consequat eleifend ullamcorper, quam ipsum fermentum risus, sit amet
        consectetur orci velit ac velit. Quisque a tristique massa. Cras tempus
        ultrices turpis, non luctus magna lacinia eu. Duis bibendum sapien a
        purus tempus, sit amet finibus quam ullamcorper. Fusce a pretium mauris,
        quis consectetur orci velit ac velit. Quisque a tristique massa. Cras
        tempus ultrices turpis, non luctus magna lacinia eu. Duis bibendum
        sapien a purus tempus, sit amet finibus
      </div>
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
        est consequat eleifend ullamcorper, quam ipsum fermentum risus, sit amet
        consectetur orci velit ac velit. Quisque a tristique massa. Cras tempus
        ultrices turpis, non luctus magna lacinia eu. Duis bibendum sapien a
        purus tempus, sit amet finibus quam ullamcorper. Fusce a pretium mauris,
        quis accumsan arcu. Etiam hendrerit, risus ut semper faucibus, neque
        justo euismod metus, in aliquam velit velit et metus. Ut et nisl et eros
        cursus vehicula.
      </div>
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
        est consequat eleifend ullamcorper, quam ipsum fermentum risus, sit amet
        consectetur orci velit ac velit. Quisque a tristique massa. Cras tempus
        ultrices turpis, non luctus magna lacinia eu. Duis bibendum sapien a
        purus tempus, sit amet finibus quam ullamcorper. Fusce a pretium mauris,
        quis accumsan arcu. Etiam hendrerit, risus ut semper faucibus, neque
        justo euismod metus, in aliquam velit velit et metus. Ut et nisl et eros
        cursus vehicula. Ut id nisl non lectus feugiat malesuada eget quis
        justo.
      </div>
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
        est consequat eleifend ullamcorper, quam ipsum fermentum risus, sit amet
        consectetur orci velit ac velit. Quisque a tristique massa. Cras tempus
        ultrices
      </div>
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
        est consequat eleifend ullamcorper, quam ipsum fermentum risus, sit amet
        consectetur orci velit ac velit. Quisque a tristique massa. Cras tempus
        ultrices turpis, non luctus magna lacinia eu. Duis bibendum sapien a
        purus tempus, sit amet finibus quam ullamcorper. Fusce a pretium mauris,
        quis accumsan arcu. Etiam hendrerit, risus ut semper faucibus, neque
        justo euismod metus, in aliquam velit velit et metus. Ut et nisl et eros
        cursus vehic
      </div>
    </div>*/
  );
};

export default Home;
