import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import CreateTeamHandler from "../teams/CreateTeamHandler";
import { spaces } from "../database/spaces";
import { Link } from "react-router-dom";
function WorkSpaceBody({ fromWorkSpace, toggle, teamInfo }) {
  const [cards, setCards] = useState(spaces);
  const [overallDisplay, setOverallDisplay] = useState(true);
  const spaceToggle = (mn, teamName) => {
    setOverallDisplay(!overallDisplay);
    // console.log(mn, teamName);
    teamInfo(teamName);
  };

  // fn to remove duplicates
  const removeDuplicates = (arr) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (!seen.has(item.spaceName)) {
        seen.add(item.spaceName);
        return true;
      }
      return false;
    });
  };

  const uniqueWorkspaceData = removeDuplicates([...cards, ...fromWorkSpace]);

  useEffect(() => {
    setCards(uniqueWorkspaceData);
  }, [fromWorkSpace, uniqueWorkspaceData]);

  // const handleName = (data) => {
  //   toggle(data);
  //   setSpaceInstanceBody(false);
  // };

  return (
    <>
      {overallDisplay ? (
        <Row xs={3} md={3} className="g-4">
          {cards.map((card, index) => (
            <Col key={index}>
              <Card
                border="info"
                className="text-center"
                style={{ height: "400px" }}
              >
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "80px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "grey",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "24px", color: "white" }}>
                        C
                      </span>
                    </div>
                  </div>
                  <h2>{card.spaceName}</h2>
                  <h5>Space Description</h5>
                  <p>
                    <em>{card.spaceDescription}</em>
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/space/teams/${card.spaceName}`}>
                    <Button variant="outline-secondary">
                      <h6>Manage Space</h6>
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <CreateTeamHandler toggle={spaceToggle} />
      )}
    </>
  );
}

export default WorkSpaceBody;
