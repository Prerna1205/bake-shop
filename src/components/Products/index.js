import { Component } from "react";
import Product from "../Product";
import image1 from "../../img/pancake.jpg";
import image2 from "../../img/donuts.jpg";
import image3 from "../../img/cookies.jpg";
import image4 from "../../img/muffins.jpg";
import ProdectContext from "../../service/ProdectContext";
class Products extends Component {
  state = {
    cartCount: 0,
    list: [],
  };

  addClicked = () => {
    this.setState((prevState) => ({ cartCount: prevState.cartCount + 1 }));
  };

  productList = [
    {
      id: 1,
      name: "Pancake",
      img: image1,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs100",
    },
    {
      id: 2,
      name: "Donuts",
      img: image2,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs 50",
    },
    {
      id: 3,
      name: "Cookies",
      img: image3,
      desc: "Cookies are mouth dissolving",
      price: "Rs 120",
    },
    {
      id: 4,
      name: "Muffin",
      img: image4,
      desc: "Muffin are fluffy and delecious.",
      price: "Rs 50",
    },
  ];
  getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.productList);
      }, 1000);
    });
  };
  componentDidMount = async () => {
    this.getList().then((data) => {
      const fetchList = data;
      this.setState({
        list: fetchList,
      });
    });
  };
  render() {
    return (
      <div id="allDishes">
        {this.state.list.length !== 0
          ? this.state.list.map((productObj) => (
             
                <Product
                  key={productObj.id}
                  product={productObj}
                  clicked={this.addClicked}
                />
             
            ))
          : "Loading Data..."}
      </div>
    );
  }
}
export default Products;
