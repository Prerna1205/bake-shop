import Banner from "../Common/Banner";
import Card from "../Common/Card";
import image1 from "../../img/cake.jpg";
import image2 from "../../img/bread.jpg";
import image3 from "../../img/snacks.jpg";
import image4 from "../../img/brulle.jpg";
import image5 from "../../img/Tarts.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
const home = () => {
  const initialMenu = [
    {
      heading: "Breads",
      data: image2,
      link: `/shop/breads`,
    },
    {
      heading: "Cakes",
      data: image1,
      link: `/shop/cakes`,
    },
    {
      heading: "Snacks",
      data: image3,
      link: `/shop/snacks`,
    },
    {
      heading: "Brulle",
      data: image4,
      link: `/shop/brulle`,
    },
    {
      heading: "Tarts",
      data: image5,
      link: `/shop/tarts`,
    },
  ];

  return (
    <div className="container1">
      <Banner />
      <div>
        <p className="maintext">
          Spreading bliss and commending each snapshot of life is the mantra at
          ‘The Bake Shop’. ‘The Bake Shop’ started its endeavor with Handmade
          Chocolates and gradually moved into Cakes, Pastries, and unified
          items.
        </p>
      </div>
      <div className="subtext">
        {initialMenu.map((obj) => (
          <Link to={obj.link}>
            <Card heading={obj.heading} data={obj.data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default home;
