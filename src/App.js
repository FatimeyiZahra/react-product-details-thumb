import React from "react";
import "./App.css";
import Colors from "./components/Colors";
import DetailsThumb from "./components/DetailsThumb"

class App extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a474727-aca7-4967-863f-0a15a4cf226f/jordan-air-nfh-womens-shoes-8zz3VW.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4799007d-aad7-4c25-8fa6-8c97c53b3869/jordan-air-nfh-womens-shoes-8zz3VW.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/094eaaaf-367f-40f7-ae1c-0b83e572af66/jordan-air-nfh-womens-shoes-8zz3VW.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/290895b0-e5ec-4b03-8764-b7c4fc56daa5/jordan-air-nfh-womens-shoes-8zz3VW.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f005a450-74a0-4dce-b1f6-dc8a4c66b515/jordan-air-nfh-womens-shoes-8zz3VW.png"
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 110,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

myRef=React.createRef();

  handleTab=index=>{
    this.setState({index:index})
    const images= this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className=images[i].className.replace("active","");
    }
    images[index].className="active";
  }

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const {products, index} = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details">
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors} />

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
