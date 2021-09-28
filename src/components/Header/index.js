import React from "react";
import logo from "../images/logo.png"
import { Top } from "./style";
import { Title } from "./style";
import { Img } from "./style";

export function Header() {
  return(
    <Top>
        <Img src={logo}/>
        <Title>Harry Potter</Title>
        
    </Top>
  )
}