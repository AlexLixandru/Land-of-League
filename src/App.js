import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import CarouselElement from "./components/Carousel";
import Hero from "./components/hero";
import Card from "./components/Card";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Footer from "./components/Footer";
import connectors from "./connectors.ts";
import moralisConnector from "./moralisConnector";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect, useRef } from "react";
import SummonersRift from "./assets/summoners.png";
import Aram from "./assets/aram.jpg";
import Tft from "./assets/tft.jpg";
import Top from "./assets/top.jpg";
import Jungle from "./assets/jungle.jpg";
import Mid from "./assets/mid.jpg";
import Adc from "./assets/adc.jpg";
import Support from "./assets/support.jpg";
import Logo from "./assets/LandofLeague-logos_transparent.png";

function App() {
  const [userDomain, setUserDomain] = useState("");

  const [communityMemberStatus, setCommunityMemberStatus] = useState(false); //TODO: CHANGE THIS TO FALSE FOR PROD
  const addressOfCommunityNFT = "0xfd1dbd4114550a867ca46049c346b6cd452ec919";

  const { active, account, activate, deactivate } = useWeb3React();

  const homeRef = useRef(null);
  const modesRef = useRef(null);
  const rolesRef = useRef(null);
  const metaRef = useRef(null);
  const exclusiveRef = useRef(null);

  const executeMetaScroll = () => metaRef.current.scrollIntoView();
  const executeRolesScroll = () => rolesRef.current.scrollIntoView();
  const executeModesScroll = () => modesRef.current.scrollIntoView();
  const executeHomeScroll = () => homeRef.current.scrollIntoView();
  const executeExclusiveScroll = () => exclusiveRef.current.scrollIntoView();

  function createConnectHandler(connectorId) {
    return async () => {
      try {
        const connector = connectors[connectorId];

        if (connector.walletConnectProvider?.wc?.uri) {
          connector.walletConnectProvider = undefined;
        }

        await activate(connector);
        const account = await connector.getAccount();

        setUserDomain(connector.uauth.store.storage["uauth-default-username"]);
        const NFTs = await moralisConnector.moralisStartAndGetNFTs(account);

        const NftArray = NFTs.result;
        for (let i = 0; i < NftArray.length; i++) {
          console.log(
            "Address = " +
              NftArray[i].token_address +
              typeof NftArray[i].token_address
          );
          if (NftArray[i].token_address === addressOfCommunityNFT) {
            setCommunityMemberStatus(true);
          }

          // const metaDataJson = JSON.parse(NftArray[i].metadata);
          // console.log(metaDataJson);
        }
      } catch (error) {
        console.error(error);
      }
    };
  }

  async function handleDisconnect() {
    try {
      console.log("logout");
      deactivate();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid style={{ paddingLeft: "7%", paddingRight: "7%" }}>
          <Navbar.Brand href="#home">Land of League</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={executeHomeScroll}>Home</Nav.Link>
            {(!active || (active && !communityMemberStatus)) && (
              <Nav.Link onClick={executeExclusiveScroll}>
                Exclusive Content
              </Nav.Link>
            )}
            {active && communityMemberStatus && (
              <Nav.Link onClick={executeModesScroll}>Game modes</Nav.Link>
            )}
            {active && communityMemberStatus && (
              <Nav.Link onClick={executeRolesScroll}>Roles</Nav.Link>
            )}
            {active && communityMemberStatus && (
              <Nav.Link onClick={executeMetaScroll}>Meta</Nav.Link>
            )}
          </Nav>
          {active && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as: </Navbar.Text>
              <div className="dropdown">
                <NavDropdown title={`${userDomain}`}>
                  <NavDropdown.Item onClick={handleDisconnect}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      {active && communityMemberStatus && (
        <div ref={homeRef}>
          <Hero
            text={`Hi ${userDomain}! Welcome to the Land of League community!`}
            isLogin={false}
            onClick={() => {
              handleDisconnect();
            }}
          />
          <Container fluid style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <div className="row-margin-top" ref={modesRef}>
              <h1 className="header-margin-bottom">Game Modes</h1>
              <Row xs={1} md={3} className="g-4">
                <Col>
                  <Col>
                    <Card
                      title={"Summoner's Rift 5v5"}
                      description={
                        "The newest and most venerated battleground is known as Summoner's Rift. Traverse down on of three different paths in order to attack your enemy at their weakest point. Work with your allies to siege the enemy base and destroy their Nexus!"
                      }
                      image={SummonersRift}
                    />
                  </Col>
                </Col>
                <Col>
                  <Card
                    title={"Howling Abyss (ARAM)"}
                    description={
                      'Howling Abyss is your battlefield, and ARAM is the game mode acronym which means "All Random All Mid." Think of it as a single lane, no-holds-barred battle between two teams of 5. Prepare yourself as a random champion is assigned to each player in this fast-paced, team-fight heavy game mode.'
                    }
                    image={Aram}
                  />
                </Col>
                <Col>
                  <Card
                    title={"Team fight tactis"}
                    description={
                      "Draft, deploy, and dominate with a revolving roster of League of Legends champions in a round-based battle for supremacy. Outsmart your opponents and adapt as you go—the strategy is all up to you."
                    }
                    image={Tft}
                  />
                </Col>
              </Row>
            </div>
            <div className="row-margin-top" ref={rolesRef}>
              <h1 className=" header-margin-bottom">5v5 Roles</h1>
              <Row>
                <Col>
                  <img className="zoom" src={Top} width="100%" />
                </Col>
                <Col>
                  <img className="zoom" src={Jungle} width="100%" />
                </Col>
                <Col>
                  <img className="zoom" src={Mid} width="100%" />
                </Col>
                <Col>
                  <img className="zoom" src={Adc} width="100%" />
                </Col>
                <Col>
                  <img className="zoom" src={Support} width="100%" />
                </Col>
              </Row>
            </div>
            <div className="row-margin-top" ref={metaRef}>
              <h1 className=" header-margin-bottom">Top 3 meta champions</h1>
              <CarouselElement />
            </div>
          </Container>
        </div>
      )}
      {active && !communityMemberStatus && (
        <div>
          <div ref={homeRef}>
            <Hero
              text={`You do not seem to have the required community token!`}
              isLogin={false}
              onClick={() => {
                handleDisconnect();
              }}
            />
          </div>
          <Container>
            <h1 className="row-margin-top">Exclusive content</h1>
            <div className="center" ref={exclusiveRef}>
              <Row className="center">
                <Col className="center" md="7">
                  <div className="exclusive-content-text">
                    <h5 className="h5-exclusive">
                      {`Be the first one to find out about new updates, new
                    champions, new items and different strategies that you can
                    apply to become a better lol player.`}
                    </h5>
                    <h5 className="h5-exclusive">
                      {`Our articles and tools
                    can help you gain the knowledge and skills needed as a high
                    rank player in no time. In order to access this content you
                    just have to login with Unstoppable Domains and own one of our NFT's. Only then the content will be
                    available to you. `}
                    </h5>
                    <h5 className="h5-exclusive h5-exclusive-end">
                      {`Good luck on Summoner's Rift!`}
                    </h5>
                  </div>
                </Col>
                <Col className="center" md="">
                  <img className="zoom logo" src={Logo} width="80%" />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
      {!active && (
        <div ref={homeRef}>
          <Hero
            ref={homeRef}
            text="Welcome to Land of League. Please Sign In to continue!"
            isLogin={true}
            onClick={createConnectHandler(Object.keys(connectors)[2])}
          />
          <Container>
            <h1 className="row-margin-top">Exclusive content</h1>
            <div className="center" ref={exclusiveRef}>
              <Row className="center">
                <Col className="center" md="7">
                  <div className="exclusive-content-text">
                    <h5 className="h5-exclusive">
                      {`Be the first one to find out about new updates, new
                    champions, new items and different strategies that you can
                    apply to become a better lol player.`}
                    </h5>
                    <h5 className="h5-exclusive">
                      {`Our articles and tools
                    can help you gain the knowledge and skills needed as a high
                    rank player in no time. In order to access this content you
                    just have to login with Unstopable Domains and have in your
                    wallet one of our NFT's. Only then the content will be
                    available to you.`}
                    </h5>
                    <h5 className="h5-exclusive h5-exclusive-end">
                      {`Good luck on Summoner's Rift!`}
                    </h5>
                  </div>
                </Col>
                <Col className="center" md="">
                  <img className="zoom logo" src={Logo} width="80%" />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
      <div className="row-margin-top">
        <Footer />
      </div>
    </div>
  );
}
export default App;
