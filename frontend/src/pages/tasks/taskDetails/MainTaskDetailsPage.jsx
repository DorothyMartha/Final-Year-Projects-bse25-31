import React, { useEffect } from "react";
import { useState } from "react";

import TaskStatusDetails from "./taskStatusDetails/TaskStatusDetails";
import TaskMessaging from "./taskMessaging/TaskMessaging";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function MainTaskDetailsPage({ rowData }) {
  // const { } = rowData;
  const row = rowData;
  // console.log("Row data is..",row);
  // useEffect(() => {
  //   setRow(rowData);
  // }, [rowData]);
  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <h3>
              Task Name :
              <span style={{ color: "blue" }}>{row.name}</span>
            </h3>
          </Card.Header>
          <Row style={{ margin: "10px 5px 10px 5px" }}>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Img
                    style={{ height: "20px", maxHeight: "20px" }}
                    variant="top"
                    alt=" Task Image"
                    src="/logo192.png"
                  />
                </Card.Header>

                <Card.Body>
                  {/*<Card.Title>Card title</Card.Title>*/}
                  <Card.Text>
                    <TaskStatusDetails row={row} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <TaskMessaging />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default MainTaskDetailsPage;
