import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import "./styles.css";
import { DataTags } from "../Swap/SwapData";
import { DataTags2 } from "../Swap/SwapData";
import { HiOutlineCog } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";
import { connect } from "react-redux";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const TableHead = ({
  column1,
  column2,
  column3,
  column4,
  classNameHead,
  headDelay,
}) => (
  <table data-aos="fade-down" data-aos-delay={headDelay}>
    <tr>
      <td className={classNameHead}>{column1}</td>
      <td className={classNameHead}>{column2}</td>
      <td className={classNameHead}>{column3}</td>
      <td className={classNameHead}>{column4}</td>
    </tr>
  </table>
);

const TableData = ({
  column1,
  column2,
  column3,
  column4,
  classNameData,
  dataDelay,
}) => (
  <table data-aos="fade-right" data-aos-delay={dataDelay}>
    <tr>
      <td className={classNameData}>{column1}</td>
      <td className={classNameData}>{column2}</td>
      <td className={classNameData}>{column3}</td>
      <td className={classNameData}>{column4}</td>
    </tr>
  </table>
);

const Liquidity = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [inputValue, setInputValue] = useState({ value: "", token: "CUBE" });

  const ETHaddress = "0xbc66b3895a1ed852b877b2ba8f42e79a846eb732";
  const ETHabi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      inputs: [
        {
          indexed: true,
          name: "tokenOwner",
          internalType: "address",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "tokens",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "Approval",
      anonymous: false,
      type: "event",
    },
    {
      inputs: [
        {
          indexed: true,
          name: "from",
          internalType: "address",
          type: "address",
        },
        { indexed: true, name: "to", internalType: "address", type: "address" },
        {
          indexed: false,
          name: "tokens",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "Transfer",
      anonymous: false,
      type: "event",
    },
    {
      outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
      inputs: [
        { name: "owner", internalType: "address", type: "address" },
        { name: "delegate", internalType: "address", type: "address" },
      ],
      name: "allowance",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "bool", type: "bool" }],
      inputs: [
        { name: "delegate", internalType: "address", type: "address" },
        { name: "numTokens", internalType: "uint256", type: "uint256" },
      ],
      name: "approve",
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
      inputs: [
        { name: "tokenOwner", internalType: "address", type: "address" },
      ],
      name: "balanceOf",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
      inputs: [],
      name: "decimals",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "string", type: "string" }],
      inputs: [],
      name: "name",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "string", type: "string" }],
      inputs: [],
      name: "symbol",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
      inputs: [],
      name: "totalSupply",
      stateMutability: "view",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "bool", type: "bool" }],
      inputs: [
        { name: "receiver", internalType: "address", type: "address" },
        { name: "numTokens", internalType: "uint256", type: "uint256" },
      ],
      name: "transfer",
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      outputs: [{ name: "", internalType: "bool", type: "bool" }],
      inputs: [
        { name: "owner", internalType: "address", type: "address" },
        { name: "buyer", internalType: "address", type: "address" },
        { name: "numTokens", internalType: "uint256", type: "uint256" },
      ],
      name: "transferFrom",
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
    console.log(inputValue);
  };

  const handleApprove = async (event) => {
    event.preventDefault();
    const ETHcontract = await new ethers.Contract(
      ETHaddress,
      ETHabi,
      props.signer
    );
    const value = inputValue.value * 10 ** 18;
    const tx = await ETHcontract.approve(
      "0x9E6b63e3AA29432b68B4aa6AB12c841eCe3fB473",
      value.toString()
    );
    console.log(tx);
  };

  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      {props.isOpen ? (
        <div>
          <MobileNavbar />
        </div>
      ) : (
        <>
          <div className="MainContainer3">
            <div className="Sidebar2">
              <SideBar />
            </div>
            <div className="LiquidityContainer">
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
                  add liquidity
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
                      onChange={handleInput}
                      value={inputValue.value}
                    />
                    <div
                      style={{
                        color: "#fff",
                        border: "0px red solid",
                        backgroundColor: "transparent",
                      }}
                    >
                      <select
                        className="select"
                        style={{}}
                        name="token"
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
                    <HiOutlinePlus color="#fff" size={24} />
                  </div>
                  <div>
                    <input
                      className="inputMax"
                      value={inputValue.value * 0.459825}
                    />
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
                  <button
                    type="submit"
                    // value="APPROVE PAIR"
                    onClick={handleApprove}
                  >
                    APPROVE PAIR
                  </button>
                  <button
                    type="submit"
                    // value="APPROVE TO LP POOL"
                  >
                    APPROVE TO LP POOL
                  </button>
                </form>

                <div className="EllipseTwo"></div>
              </div>

              <div className="DataTable">
                <div>
                  <div
                    data-aos="fade-up"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className="LeftData">Pool Rate</span>
                    <span className="RightData" style={{ textAlign: "right" }}>
                      1 CUBE = 0.459825cuETH
                    </span>
                  </div>
                  <div
                    data-aos="fade-down"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className="LeftData">Share of Pool</span>
                    <span className="RightData" style={{ textAlign: "right" }}>
                      0,5%
                    </span>
                  </div>
                </div>
                <div data-aos="flip-right" className="Details">
                  By adding liquidity you'll earn 0.25% of all trades on this
                  pair proportional to your share of the pool. Fees are added to
                  the pool, accrue in real time and can be claimed by
                  withdrawing your liquidity.
                </div>
                <h1 data-aos="fade-down">Your LP Pools</h1>
                <div className="TopTableDesktop2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <TableHead
                      headDelay="100"
                      classNameHead="TableHead2"
                      column1="POOL"
                      column2="SHARE"
                      column3="TVL"
                      column4="24H VOLUME"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <TableData
                      dataDelay="200"
                      classNameData="TableData2"
                      column1="CUBE/ETH"
                      column2="0,5%"
                      column3="1.1M"
                      column4="20M"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <TableData
                      dataDelay="300"
                      classNameData="TableData2"
                      column1="CUBE/ETH"
                      column2="0,5%"
                      column3="1.1M"
                      column4="20M"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <TableData
                      dataDelay="400"
                      classNameData="TableData2"
                      column1="CUBE/ETH"
                      column2="0,5%"
                      column3="1.1M"
                      column4="20M"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* LiquidityContainer */}
          </div>{" "}
        </>
      )}

      {/* MainContainer3 */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
  };
};

export default connect(mapStateToProps)(Liquidity);
