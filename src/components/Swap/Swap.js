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
import { connect } from "react-redux";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

function Swap(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const ETHaddress = "0xbc66b3895a1ed852b877b2ba8f42e79a846eb732";
  const WCUBEaddress = "0xb9164670a2f388d835b868b3d0d441fa1be5bb00";
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

  const [inputValue, setInputValue] = useState({ value: "", token: "CUBE" });
  const [swapAmount, setSwapAmount] = useState();
  const [approveButton, setApproveButton] = useState(false);

  useEffect(() => {
    swapValue();
    handleApproveButton();
  }, [inputValue]);

  const handleInput = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
    console.log(inputValue);
  };

  const handleApproveButton = () => {
    inputValue.token === "ETH"
      ? setApproveButton(true)
      : setApproveButton(false);
  };

  const handleSwap = async (event) => {
    event.preventDefault();
    // amountOutMin must be retrieved from an oracle of some kind
    try {
      const address = await props.signer.getAddress();

      const routerContract = await new ethers.Contract(
        routerAddress,
        routerABI,
        props.signer
      );

      const path = [];

      if (inputValue.token === "CUBE") {
        path[0] = WCUBEaddress;
        path[1] = ETHaddress;
        console.log("bjbjb");
        await routerContract.swapExactETHForTokens(
          0,
          path,
          address,
          846468486468648,
          {
            value: ethers.utils
              .parseEther(inputValue.value.toString())
              .toString(),
          }
        );
      } else if (inputValue.token === "ETH") {
        path[0] = ETHaddress;
        path[1] = WCUBEaddress;

        await routerContract.swapExactTokensForETH(
          ethers.utils.parseEther(inputValue.value.toString()).toString(),
          0,
          path,
          address,
          846468486468648
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleApprove = async (event) => {
    event.preventDefault();

    try {
      const ETHcontract = await new ethers.Contract(
        ETHaddress,
        ETHabi,
        props.signer
      );
      const value = inputValue.value * 2;
      await ETHcontract.approve(
        routerAddress,
        ethers.utils.parseEther(value.toString()).toString()
      );
      setApproveButton(false);
    } catch (e) {
      console.log(e);
    }
  };

  const swapValue = async () => {
    try {
      const routerContract = await new ethers.Contract(
        routerAddress,
        routerABI,
        props.signer
      );
      const path = [];

      if (inputValue.token === "CUBE") {
        path[0] = WCUBEaddress;
        path[1] = ETHaddress;
      } else if (inputValue.token === "ETH") {
        path[0] = ETHaddress;
        path[1] = WCUBEaddress;
      }
      let amount;
      if (inputValue.value > 0) {
        amount = await routerContract.getAmountsOut(
          ethers.utils.parseEther(inputValue.value.toString()).toString(),
          path
        );
        setSwapAmount(ethers.utils.formatEther(amount[1].toString()));

        console.log(swapAmount);
      } else if (inputValue !== "") {
        setSwapAmount(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="Navbar">
        <Navbar />
      </div>
      {props.isOpen ? (
        <div>
          <MobileNavbar />
        </div>
      ) : (
        <>
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
                    <input
                      className="inputMax"
                      placeholder="0.0 Max"
                      value={swapAmount}
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
                  {approveButton === true ? (
                    <button className="buttons" onClick={handleApprove}>
                      APPROVE ETH
                    </button>
                  ) : (
                    <button className="buttons" onClick={handleSwap}>
                      CONFIRM SWAP
                    </button>
                  )}
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
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
  };
};

export default connect(mapStateToProps)(Swap);
