import React from "react";
import background from "../../images/background.jpg";
import Header from "../../Components/Header/Header";
import Transport from "../Transport/Transport";
import "./home.css";
import transports from "../../fakeData/fakeData";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="background"
    >
      <Header />
      <div className="container">
        <div className="row py-5 my-5">
          {transports.map((transport) => (
            <Transport
              key={transport.transportId}
              transport={transport}
            ></Transport>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
