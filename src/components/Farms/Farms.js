import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import "./styles.css";
import num from "./num.png";
import { ethers } from "ethers";
import { connect } from 'react-redux'
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const GridItem = ({ head, title, input, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay} className="GridItem">
    <div className="GridImg">
      <img src={num} alt="." />
    </div>
    <div className="GridContentsContainer">
      <div className="GridHead">{head}</div>
      <div className="GridTitle">{title}</div>
      <input className="GridInput" type="submit" value={input} />
    </div>
  </div>
);

const TableHead = ({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  classNameHead,
  headdelay,
}) => (
  <table data-aos="fade-right" data-aos-delay={headdelay}>
    <tr>
      <td data-aos="fade-right" data-aos-delay="100" className={classNameHead}>
        {column1}
      </td>
      <td data-aos="fade-right" data-aos-delay="300" className={classNameHead}>
        {column2}
      </td>
      <td data-aos="fade-right" data-aos-delay="500" className={classNameHead}>
        {column3}
      </td>
      <td data-aos="fade-right" data-aos-delay="700" className={classNameHead}>
        {column4}
      </td>
      <td data-aos="fade-right" data-aos-delay="900" className={classNameHead}>
        {column5}
      </td>
      <td data-aos="fade-right" data-aos-delay="1100" className={classNameHead}>
        {column6}
      </td>
    </tr>
  </table>
);

const TableHeadMobile = ({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  classNameHead,
  headdelay,
}) => (
  <table
    data-aos="fade-right"
    data-aos-delay={headdelay}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <tr>
      <th style={{ display: "flex", flexDirection: "column" }}>
        <span className={classNameHead}>{column1}</span>
        <span className={classNameHead}>{column2}</span>
        <span className={classNameHead}>{column3}</span>
        <span className={classNameHead}>{column4}</span>
        <span className={classNameHead}>{column5}</span>
        <span className={classNameHead}>{column6}</span>
      </th>
    </tr>
  </table>
);

const TableDataMobile = ({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  classNameData,
  datadelay,
}) => (
  <table
    data-aos="fade-right"
    data-aos-dealy={datadelay}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <tr>
      <td style={{ display: "flex", flexDirection: "column" }}>
        <span className={classNameData}>{column1}</span>
        <span className={classNameData}>{column2}</span>
        <span className={classNameData}>{column3}</span>
        <span className={classNameData}>{column4}</span>
        <span className={classNameData}>{column5}</span>
        <span className={classNameData}>
          <span className="bold">{column6}</span>
        </span>
      </td>
    </tr>
  </table>
);

const TableData = ({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  classNameData,
  datadelay,
}) => (
  <table data-aos="fade-right" data-aos-dealy={datadelay}>
    <tr>
      <td data-aos="fade-right" data-aos-delay="100" className={classNameData}>
        {column1}
      </td>
      <td data-aos="fade-right" data-aos-delay="300" className={classNameData}>
        {column2}
      </td>
      <td data-aos="fade-right" data-aos-delay="500" className={classNameData}>
        {column3}
      </td>
      <td data-aos="fade-right" data-aos-delay="700" className={classNameData}>
        {column4}
      </td>
      <td data-aos="fade-right" data-aos-delay="900" className={classNameData}>
        {column5}
      </td>
      <td data-aos="fade-right" data-aos-delay="1100" className={classNameData}>
        <span className="bold">{column6}</span>
      </td>
    </tr>
  </table>
);

const Farms = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="Navbar">
        <Navbar />
      </div>
      {
          props.isOpen ? <div><MobileNavbar /></div>:<><div className="MainContainer2">
          <div className="Sidebar Sidebar2">
            <SideBar />
          </div>
          <div className="FarmContainer">
            <div data-aos="zoom-in" className="AddressContainer">
              Address
            </div>
            <div>dsd</div>
            <div>
              <h1 data-aos="fade-right">ALL FARMS</h1>
              <div data-aos="fade-right" data-aos-delay="400">
                <input type="checkbox" />
                <label for="">Hide Zero Balance</label>
              </div>
              <div data-aos="fade-right" data-aos-delay="900">
                <input type="checkbox" />
                <label for="">Deposited only</label>
              </div>
            </div>
            <div>
              <div className="TopTableDesktop">
                <TableHead
                  headdelay="500"
                  classNameHead="TableHead"
                  column1="POOL"
                  column2="BALANCE"
                  column3="DEPOSITED"
                  column4="TVL"
                  column5="APY"
                  column6="BOOST"
                />
                <TableData
                  datadelay="900"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
              </div>
  
              <div className="TopTableMobile">
                <div>
                  <TableHeadMobile
                    classNameHead="TableHead"
                    column1="POOL"
                    column2="BALANCE"
                    column3="DEPOSITED"
                    column4="TVL"
                    column5="APY"
                    column6="BOOST"
                  />
                </div>
                <div>
                  <TableDataMobile
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
              </div>
  
              <div className="Grid">
                <div>
                  <GridItem
                    head="Stake"
                    title="12.43 CUBE/ETH LP"
                    input="APPROVE"
                    delay="100"
                  />
                </div>
                <div>
                  <GridItem
                    head="Unstake"
                    title="12.43 CUBE/ETH LP"
                    input="UNSTAKE"
                    delay="400"
                  />
                </div>
                <div>
                  <GridItem
                    head="Rewards"
                    title="12213 $CUBE"
                    input="HARVEST"
                    delay="700"
                  />
                </div>
              </div>
  
              <div className="TableDesktop">
                <TableData
                  datadelay="100"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                <TableData
                  datadelay="500"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                <TableData
                  datadelay="900"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                <TableData
                  datadelay="1300"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                <TableData
                  datadelay="1700"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                <TableData
                  datadelay="2100"
                  classNameData="TableData"
                  column1="CUBE/ETH"
                  column2="12.43"
                  column3="0"
                  column4="1.1M"
                  column5="48.7%"
                  column6="10X"
                />
                {/* <TableData classNameData="TableData" column1="CUBE/ETH" column2="12.43" column3="0" column4="1.1M" column5="48.7%" column6="10X" /> */}
              </div>
  
              <div className="TableDataMobile">
                <div>
                  <TableDataMobile
                    datadelay="100"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                <div>
                  <TableDataMobile
                    datadelay="500"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                <div>
                  <TableDataMobile
                    datadelay="900"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                <div>
                  <TableDataMobile
                    datadelay="1300"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                <div>
                  <TableDataMobile
                    datadelay="1700"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                <div>
                  <TableDataMobile
                    datadelay="2100"
                    classNameData="TableData"
                    column1="CUBE/ETH"
                    column2="12.43"
                    column3="0"
                    column4="1.1M"
                    column5="48.7%"
                    column6="10X"
                  />
                </div>
                {/* <div><TableDataMobile classNameData="TableData" column1="CUBE/ETH" column2="12.43" column3="0" column4="1.1M" column5="48.7%" column6="10X" /></div> */}
              </div>
            </div>
          </div>{" "}
          {/* FarmContainer */}
        </div>{" "}</>
      
      }
      
      {/* MainContainer2 */}
    </div>
  );
};

const mapStateToProps = ( state ) =>{
  return {
    isOpen : state.isOpen 
  }
}

export default connect(mapStateToProps)(Farms);
