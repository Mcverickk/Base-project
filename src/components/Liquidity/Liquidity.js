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

  const factor = 0.01;

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

  const routerAddress = "0xa8676b40ed1f56a5ee1585838b158710b5a2c227";
  const routerABI = [
    {
      inputs: [
        {
          indexed: false,
          name: "_factory",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "_WETH",
          internalType: "address",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      anonymous: false,
      type: "constructor",
    },
    {
      outputs: [{ name: "", internalType: "address", type: "address" }],
      funcSign: "0xad5c4648",
      inputs: [],
      name: "WETH",
      stateMutability: "view",
      anonymous: false,
      text: "address@WETH()",
      type: "function",
      textView: "WETH ()",
    },
    {
      outputs: [
        { name: "amountA", internalType: "uint256", type: "uint256" },
        { name: "amountB", internalType: "uint256", type: "uint256" },
        { name: "liquidity", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0xe8e33700",
      inputs: [
        {
          indexed: false,
          name: "tokenA",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "tokenB",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "amountADesired",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountBDesired",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountAMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountBMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "addLiquidity",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256,uint256,uint256@addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)",
      type: "function",
      textView:
        "addLiquidity (address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amountToken", internalType: "uint256", type: "uint256" },
        { name: "amountETH", internalType: "uint256", type: "uint256" },
        { name: "liquidity", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0xf305d719",
      inputs: [
        {
          indexed: false,
          name: "token",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "amountTokenDesired",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountTokenMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountETHMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "addLiquidityETH",
      stateMutability: "payable",
      anonymous: false,
      text: "uint256,uint256,uint256@addLiquidityETH(address,uint256,uint256,uint256,address,uint256)",
      type: "function",
      textView:
        "addLiquidityETH (address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
    },
    {
      outputs: [{ name: "", internalType: "address", type: "address" }],
      funcSign: "0xc45a0155",
      inputs: [],
      name: "factory",
      stateMutability: "view",
      anonymous: false,
      text: "address@factory()",
      type: "function",
      textView: "factory ()",
    },
    {
      outputs: [{ name: "amountIn", internalType: "uint256", type: "uint256" }],
      funcSign: "0x85f8c259",
      inputs: [
        {
          indexed: false,
          name: "amountOut",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveOut",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "getAmountIn",
      stateMutability: "pure",
      anonymous: false,
      text: "uint256@getAmountIn(uint256,uint256,uint256)",
      type: "function",
      textView:
        "getAmountIn (uint256 amountOut, uint256 reserveIn, uint256 reserveOut)",
    },
    {
      outputs: [
        { name: "amountOut", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0x054d50d4",
      inputs: [
        {
          indexed: false,
          name: "amountIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveOut",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "getAmountOut",
      stateMutability: "pure",
      anonymous: false,
      text: "uint256@getAmountOut(uint256,uint256,uint256)",
      type: "function",
      textView:
        "getAmountOut (uint256 amountIn, uint256 reserveIn, uint256 reserveOut)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x1f00ca74",
      inputs: [
        {
          indexed: false,
          name: "amountOut",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
      ],
      name: "getAmountsIn",
      stateMutability: "view",
      anonymous: false,
      text: "uint256[]@getAmountsIn(uint256,address[])",
      type: "function",
      textView: "getAmountsIn (uint256 amountOut, address[] path)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0xd06ca61f",
      inputs: [
        {
          indexed: false,
          name: "amountIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
      ],
      name: "getAmountsOut",
      stateMutability: "view",
      anonymous: false,
      text: "uint256[]@getAmountsOut(uint256,address[])",
      type: "function",
      textView: "getAmountsOut (uint256 amountIn, address[] path)",
    },
    {
      outputs: [{ name: "amountB", internalType: "uint256", type: "uint256" }],
      funcSign: "0xad615dec",
      inputs: [
        {
          indexed: false,
          name: "amountA",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveA",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "reserveB",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "quote",
      stateMutability: "pure",
      anonymous: false,
      text: "uint256@quote(uint256,uint256,uint256)",
      type: "function",
      textView: "quote (uint256 amountA, uint256 reserveA, uint256 reserveB)",
    },
    {
      outputs: [
        { name: "amountA", internalType: "uint256", type: "uint256" },
        { name: "amountB", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0xbaa2abde",
      inputs: [
        {
          indexed: false,
          name: "tokenA",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "tokenB",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountAMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountBMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "removeLiquidity",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256,uint256@removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)",
      type: "function",
      textView:
        "removeLiquidity (address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amountToken", internalType: "uint256", type: "uint256" },
        { name: "amountETH", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0x02751cec",
      inputs: [
        {
          indexed: false,
          name: "token",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountTokenMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountETHMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "removeLiquidityETH",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256,uint256@removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)",
      type: "function",
      textView:
        "removeLiquidityETH (address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amountETH", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0xaf2979eb",
      inputs: [
        {
          indexed: false,
          name: "token",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountTokenMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountETHMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "removeLiquidityETHSupportingFeeOnTransferTokens",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256@removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)",
      type: "function",
      textView:
        "removeLiquidityETHSupportingFeeOnTransferTokens (address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amountToken", internalType: "uint256", type: "uint256" },
        { name: "amountETH", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0xded9382a",
      inputs: [
        {
          indexed: false,
          name: "token",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountTokenMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountETHMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "approveMax",
          internalType: "bool",
          type: "bool",
        },
        { indexed: false, name: "v", internalType: "uint8", type: "uint8" },
        { indexed: false, name: "r", internalType: "bytes32", type: "bytes32" },
        { indexed: false, name: "s", internalType: "bytes32", type: "bytes32" },
      ],
      name: "removeLiquidityETHWithPermit",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256,uint256@removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)",
      type: "function",
      textView:
        "removeLiquidityETHWithPermit (address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
    },
    {
      outputs: [
        { name: "amountETH", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0x5b0d5984",
      inputs: [
        {
          indexed: false,
          name: "token",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountTokenMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountETHMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "approveMax",
          internalType: "bool",
          type: "bool",
        },
        { indexed: false, name: "v", internalType: "uint8", type: "uint8" },
        { indexed: false, name: "r", internalType: "bytes32", type: "bytes32" },
        { indexed: false, name: "s", internalType: "bytes32", type: "bytes32" },
      ],
      name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256@removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)",
      type: "function",
      textView:
        "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens (address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
    },
    {
      outputs: [
        { name: "amountA", internalType: "uint256", type: "uint256" },
        { name: "amountB", internalType: "uint256", type: "uint256" },
      ],
      funcSign: "0x2195995c",
      inputs: [
        {
          indexed: false,
          name: "tokenA",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "tokenB",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "liquidity",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountAMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountBMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "approveMax",
          internalType: "bool",
          type: "bool",
        },
        { indexed: false, name: "v", internalType: "uint8", type: "uint8" },
        { indexed: false, name: "r", internalType: "bytes32", type: "bytes32" },
        { indexed: false, name: "s", internalType: "bytes32", type: "bytes32" },
      ],
      name: "removeLiquidityWithPermit",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256,uint256@removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)",
      type: "function",
      textView:
        "removeLiquidityWithPermit (address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0xfb3bdb41",
      inputs: [
        {
          indexed: false,
          name: "amountOut",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapETHForExactTokens",
      stateMutability: "payable",
      anonymous: false,
      text: "uint256[]@swapETHForExactTokens(uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapETHForExactTokens (uint256 amountOut, address[] path, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x7ff36ab5",
      inputs: [
        {
          indexed: false,
          name: "amountOutMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapExactETHForTokens",
      stateMutability: "payable",
      anonymous: false,
      text: "uint256[]@swapExactETHForTokens(uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapExactETHForTokens (uint256 amountOutMin, address[] path, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x18cbafe5",
      inputs: [
        {
          indexed: false,
          name: "amountIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountOutMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForETH",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256[]@swapExactTokensForETH(uint256,uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapExactTokensForETH (uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x38ed1739",
      inputs: [
        {
          indexed: false,
          name: "amountIn",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountOutMin",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForTokens",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256[]@swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapExactTokensForTokens (uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x4a25d94a",
      inputs: [
        {
          indexed: false,
          name: "amountOut",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountInMax",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapTokensForExactETH",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256[]@swapTokensForExactETH(uint256,uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapTokensForExactETH (uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline)",
    },
    {
      outputs: [
        { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      ],
      funcSign: "0x8803dbee",
      inputs: [
        {
          indexed: false,
          name: "amountOut",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "amountInMax",
          internalType: "uint256",
          type: "uint256",
        },
        {
          indexed: false,
          name: "path",
          internalType: "address[]",
          type: "address[]",
        },
        {
          indexed: false,
          name: "to",
          internalType: "address",
          type: "address",
        },
        {
          indexed: false,
          name: "deadline",
          internalType: "uint256",
          type: "uint256",
        },
      ],
      name: "swapTokensForExactTokens",
      stateMutability: "nonpayable",
      anonymous: false,
      text: "uint256[]@swapTokensForExactTokens(uint256,uint256,address[],address,uint256)",
      type: "function",
      textView:
        "swapTokensForExactTokens (uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline)",
    },
    { stateMutability: "payable", anonymous: false, type: "receive" },
  ];

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
    console.log(inputValue);
  };

  const handleApprove = async (event) => {
    event.preventDefault();
    if (props.isConnected === true) {
      try {
        const ETHcontract = await new ethers.Contract(
          ETHaddress,
          ETHabi,
          props.signer
        );
        const value = inputValue.value * factor * 2;
        const tx = await ETHcontract.approve(
          routerAddress,
          ethers.utils.parseEther(value.toString()).toString()
        );
        console.log(tx);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Connect Wallet");
    }
  };

  const handleAddLiquidity = async (event) => {
    event.preventDefault();
    if (props.isConnected === true) {
      try {
        const address = await props.signer.getAddress();

        const routerContract = await new ethers.Contract(
          routerAddress,
          routerABI,
          props.signer
        );

        const ethValue = inputValue.value * factor;

        console.log(ethers.utils.parseEther(ethValue.toString()).toString());

        const tx = await routerContract.addLiquidityETH(
          ETHaddress,
          ethers.utils.parseEther(ethValue.toString()).toString(),
          0,
          0,
          address,
          78787878787878,
          {
            value: ethers.utils
              .parseEther(inputValue.value.toString())
              .toString(),
          }
        );
        console.log(tx);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Connect Wallet");
    }
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
                        {/* <option className="option" value="ETH">
                          ETH
                        </option> */}
                      </select>
                    </div>
                  </div>
                  <div>
                    <HiOutlinePlus color="#fff" size={24} />
                  </div>
                  <div>
                    <input
                      className="inputMax"
                      value={inputValue.value * factor}
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
                        {/* <option className="option" value="CUBE">
                          CUBE
                        </option> */}
                        <option className="option" value="ETH">
                          ETH
                        </option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="buttons"
                    // value="APPROVE PAIR"
                    onClick={handleApprove}
                  >
                    APPROVE PAIR
                  </button>
                  <button
                    className="buttons"
                    // value="APPROVE TO LP POOL"
                    onClick={handleAddLiquidity}
                  >
                    ADD LIQUIDITY
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
                      1 CUBE = {factor}cuETH
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
