import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_1500x600._CB634376407_.jpg"
          alt="nhk"
          className="home_containerImage"
        />

        <div className="home_row">
          <Product
            id="21"
            title="Title"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            price={200}
            rating={2}
          />
          <Product
            id="22"
            title="Title"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            price={200}
            rating={4}
          />
          <Product
            id="23"
            title="Title"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            price={200}
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="24"
            title={"Title"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            }
            price={200}
            rating={5}
          />
          <Product
            id="25"
            title="Title"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            price={200}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="26"
            title="Title"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFRQsth7ZGQL2hnZSVVAHjTb8G96CyVLZ7Na6ESF2iQXQ9e7eTHOrG4_h1f8uofdaYi8&usqp=CAU"
            price={200}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
