import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";

export function TaskMessaging() {
  return (
    <Card style={{ height: "819px" }}>
      <Card.Body>
        <Card.Title>Comments</Card.Title>
        <Card.Text>
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col>
                <Card style={{ borderRadius: "15px", height: "750px" }}>
                  <Card.Body style={{ overflowY: "scroll" }}>
                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Hi
                        </p>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          This is my first task
                        </p>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Everyone feel at work
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                          07:58
                        </p>
                      </div>
                    </div>
                    <div className="divider d-flex align-items-center mb-4">
                      <p
                        className="text-center mx-3 mb-0"
                        style={{ color: "#a2aab7" }}
                      >
                        Today
                      </p>
                    </div>

                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Hello, Thank you
                        </p>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          My second task
                        </p>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Commitment is key.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                          08:06
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                    <div className="divider d-flex align-items-center mb-4">
                      <p
                        className="text-center mx-3 mb-0"
                        style={{ color: "#a2aab7" }}
                      >
                        Today
                      </p>
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Okay
                        </p>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Will do my best then
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                          08:07
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end mb-4">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          That's awesome!
                        </p>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Am here if you need help
                        </p>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Just reach out
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                          08:09
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  </Card.Body>
                  <Card.Footer className="text-muted d-flex justify-content-start align-items-center p-3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 3"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Type message"
                    />
                    <a className="ms-1 text-muted" href="#!">
                      <MDBIcon fas icon="paperclip" />
                    </a>
                    <a className="ms-3 text-muted" href="#!">
                      <MDBIcon fas icon="smile" />
                    </a>
                    <a className="ms-3" href="#!">
                      <MDBIcon fas icon="paper-plane" />
                    </a>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskMessaging;
