import React, { useState } from "react";
import { FloatingLabel, Modal, Button, Card, Form, Row } from "react-bootstrap";

export default function CreateSpaceModal(props) {
  const [data, setData] = useState({ spaceName: "", spaceDescription: "" });
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset validation errors
    if (name === "spaceName") {
      setNameError("");
    } else if (name === "spaceDescription") {
      setDescriptionError("");
    }
  };

  const validateInputs = () => {
    let valid = true;

    if (data.spaceName.trim() === "") {
      setNameError("Space Name is required.");
      valid = false;
    }

    if (data.spaceDescription.trim() === "") {
      setDescriptionError("Space Description is required.");
      valid = false;
    }

    return valid;
  };

  const sendData = () => {
    if (validateInputs()) {
      props.dataProp(data);
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="vertically-centrallised-modal"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title
          style={{ color: "blue" }}
          id="vertically-centrallised-modal"
        >
          New Workspace
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card border="info" className="text-center">
          <Card.Header>
            <h5>Space Details</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <FloatingLabel
                  controlId="space_name"
                  label={
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Space Name
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="spaceName"
                    placeholder="space_name"
                    value={data.spaceName}
                    onChange={handleOnChange}
                    
                    required
                  />
                  <div className="text-danger">{nameError}</div>
                </FloatingLabel>
              </Row>

              <Row>
                <FloatingLabel
                  controlId="description"
                  label={
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Overview or Description.
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="spaceDescription"
                    placeholder="space_description"
                    value={data.spaceDescription}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="text-danger">{descriptionError}</div>
                </FloatingLabel>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="outline-success" onClick={sendData}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
