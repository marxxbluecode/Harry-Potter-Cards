import React from "react";
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer";
import { Container } from "../components/Main/style";

export default function Index() {
  return(
    <Container>
        <Header />
        <Main />
        <Footer/>
    </Container>
  )
}