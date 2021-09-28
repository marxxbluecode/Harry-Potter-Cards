import React, { useState, useEffect} from "react";
import { BoxInfo } from "./style"
import { TextPic } from "./style";
import { Container } from "./style";
import { api } from "../../services/api"



export function Main() {


  const  [list, setList] = useState([])

  useEffect(() => {
      api.get()
      .then(response => setList(response.data))
      console.log(api.get())

  }, [])

  return(
    <Container>
        {list.map((item, index) => 
          <BoxInfo key={index}>
            <TextPic>
            <img style={{width: "200px", height: "250px"}} src={item.image}/>
            <h2>{item.name}</h2>
            </TextPic>
          </BoxInfo>)}
    </Container>
  )
}