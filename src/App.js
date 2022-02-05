import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import CarouselElement from "./components/Carousel";
import Hero from "./components/hero";
import Card from "./components/Card";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Footer from "./components/Footer";
import connectors from "./connectors.ts";
// import moralisConnector from "./moralisConnector";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";



import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import heroVideo from "./assets/heroVideo.mp4";
import buttonImageDefault from "./assets/login-default.png";



function App() {
  const [userDomain, setUserDomain] = useState("");

  const { active, account, activate, deactivate } = useWeb3React();

  function createConnectHandler(connectorId) {
    return async () => {
      try {
        console.log("1")
        console.log(active)
        const connector = connectors[connectorId];
        console.log("2")

        if (connector.walletConnectProvider?.wc?.uri) {
          connector.walletConnectProvider = undefined;
        }
        console.log("3")

        await activate(connector);
        const account = await connector.getAccount();
        console.log("4")

        setUserDomain(connector.uauth.store.storage["uauth-default-username"]);
        // const NFTs = await moralisConnector.moralisStartAndGetNFTs(account);

        // const NftArray = NFTs.result;
        // for (let i = 0; i < NftArray.length; i++) {
        //   const metaDataJson = JSON.parse(NftArray[i].metadata);
        // }
        console.log("5")
        console.log(active)
      } catch (error) {
        console.log("shit")
        console.error(error);

      }
    };
  }

  async function handleDisconnect() {
    try {
      console.log("logout")
      deactivate();
    } catch (error) {
      console.error(error);
    }
  }

  if(active) {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Land of League</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" >Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Hero text = {`Hi ${userDomain}! Welcome to the Land of League community!`} onClick = {()=>{handleDisconnect()}} />
      <Container>
        <div className="row-margin-top">
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card title={"Blana"} description={"Coae"} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="row-margin-top">
          <Row>
            <Col>
              <ImagePlaceholder className="zoom" srcSize={"100px800"} />
            </Col>
            <Col>
              <ImagePlaceholder className="zoom" srcSize={"100px800"} />
            </Col>
            <Col>
              <ImagePlaceholder className="zoom" srcSize={"100px800"} />
            </Col>
            <Col>
              <ImagePlaceholder className="zoom" srcSize={"100px800"} />
            </Col>
            <Col>
              <ImagePlaceholder className="zoom" srcSize={"100px800"} />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="row-margin-top margin-component">
        <Row>
          <Col md="4">
            <ImagePlaceholder className="zoom" srcSize={"100px800"} />
          </Col>
          <Col md="8">
            <ImagePlaceholder className="zoom" srcSize={"100px800"} />
          </Col>
        </Row>
      </div>
      <div className="row-margin-top carousel margin-component">
        <CarouselElement />
      </div>
      <div className="row-margin-top">
        <Footer />
      </div>
    </div>
  );
            }else{
              return(
<div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Land of League</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" >Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Hero text ="Welcome to Land of League. Please Sign In to continue!" onClick = {createConnectHandler(Object.keys(connectors)[2])}  />
    </div>
              )
            }
}

export default App;
