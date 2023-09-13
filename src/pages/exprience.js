import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Exprience = () => {
  return (
    <>
      <div style={{ margin: 0, backgroundColor: "white", padding: "10px" }}>
        <Container
          id="exprience"
          className="shadow-lg p-3 mb-5 bg-body rounded"
          style={{ zIndex: 2 }}
        >
          <Row>
            <Col>
              <h2>Professional Exprience</h2>
              <h5>
                Business Analyst & Customer Advisor - Supishi (2014-2021){" "}
              </h5>
              <ul>
                <li>
                  {" "}
                  I was responsible for providing advice to customers regarding
                  their capacity needs and helping them make informed decisions.
                  I successfully improved customer satisfaction by 10% through
                  the creation and implementation of an automated
                  mini-application, streamlining the feedback process and
                  speeding up order estimations.
                </li>
                <li>
                  {" "}
                  As a team player, I effectively translated business priorities
                  from my managers, ensuring the alignment of my and my
                  teammates' efforts in handling high volume tasks during peak
                  seasons.
                </li>
              </ul>
              <h5>GitHub Projects: </h5>
              <ul>
                <li>
                  <a href="https://github.com/tbayat/pastry-online-shop">
                    Pastry Website
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tbayat/tina-portfolio">
                    Tina's Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tbayat/ArtStore">
                    ArtStore—An static website for buying and selling artworks
                    using HTML and CSS
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tbayat/Hangman/tree/feature/GUI">
                    Hangman— Classic word guessing game with GUI using Pygame
                    library in Python
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tbayat/word-game">
                    WordGame—Simple terminal-based multiplayer word game where
                    players try to guess famous and funny words by using
                    descriptive words and sentences.
                  </a>
                </li>
              </ul>
              <h5>Blog Posts: </h5>
              <ul>
                <li>
                  <a href="https://coffeeto.codes/github-ssh-key">
                    GitHub & SSH Key
                  </a>
                </li>
                <li>
                  <a href="https://coffeeto.codes/easy-direnv">Easy Direnv</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Exprience;
