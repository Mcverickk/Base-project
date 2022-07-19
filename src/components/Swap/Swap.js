import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { DataTags } from "./SwapData";
import { DataTags2 } from "./SwapData";
import { HiOutlineCog } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Cube from "./cube.png";
import Eth from "./eth.png";
import { ethers } from "ethers";

function Swap(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [inputValue, setInputValue] = useState({ value: "", token: "CUBE" });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
    console.log(inputValue);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="MainContainer">
        <div className="Sidebar">
          <SideBar />
        </div>

        <div className="SwapContainer">
          <button
            data-aos="zoom-in"
            className="AddressContainer"
            onClick={props.connect}
          >
            {props.connectButton}
          </button>
          <div className="FormContainer">
            <div className="EllipseOne"></div>
            <h1 data-aos="fade-right">
              Swap
              <NavLink to="/settings">
                <HiOutlineCog size={26} />
              </NavLink>
            </h1>

            <form data-aos="fade-left">
              <div>
                <input
                  name="value"
                  className="inputMax"
                  placeholder="0.0 Max"
                  value={inputValue.value}
                  onChange={handleInput}
                />
                <div
                  style={{
                    color: "#fff",
                    border: "0px red solid",
                    backgroundColor: "transparent",
                  }}
                >
                  <select
                    name="token"
                    className="select"
                    style={{}}
                    onChange={handleInput}
                  >
                    <option className="option" value="CUBE">
                      CUBE
                    </option>
                    <option className="option" value="ETH">
                      ETH
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <IoIosArrowDown color="#fff" size={24} />
              </div>
              <div>
                <input className="inputMax" value="0.0 Max" />
                <div
                  style={{
                    color: "#fff",
                    border: "0px red solid",
                    backgroundColor: "transparent",
                  }}
                >
                  <select
                    className="select"
                    value={inputValue.token === "CUBE" ? "ETH" : "CUBE"}
                  >
                    <option className="option" value="CUBE">
                      CUBE
                    </option>
                    <option className="option" value="ETH">
                      ETH
                    </option>
                  </select>
                </div>
              </div>
              <input type="submit" value="CONFIRM SWAP"></input>
            </form>

            <div className="EllipseTwo"></div>

            <div className="Data">
              <div
                data-aos="fade-down"
                data-aos-delay="500"
                className="DataValues1"
              >
                {DataTags.map((item, index) => {
                  return (
                    <span className="dataValues" key={index}>
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="DataValues2"
              >
                {DataTags2.map((item, index) => {
                  return (
                    <span className="dataValues" key={index}>
                      {item.title}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
