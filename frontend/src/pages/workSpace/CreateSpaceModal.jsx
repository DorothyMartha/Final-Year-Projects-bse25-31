import React, { useState } from 'react';
import { FloatingLabel, Modal, Button, Card, Form, Row } from 'react-bootstrap';
import { createSpace } from '../../api/spaceService'; //path use to connect to endpoints api

export default function CreateSpaceModal(props) {
  const [data, setData] = useState({ spaceName: '', spaceDescription: '' });
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset validation errors
    if (name === 'spaceName') {
      setNameError('');
    } else if (name === 'spaceDescription') {
      setDescriptionError('');
    }
  };

  const validateInputs = () => {
    let valid = true;

    if (data.spaceName.trim() === '') {
      setNameError('Space Name is required.');
      valid = false;
    }

    if (data.spaceDescription.trim() === '') {
      setDescriptionError('Space Description is required.');
      valid = false;
    }

    return valid;
  };

  const sendData = async () => {
    if (validateInputs()) {
      try {
        const newSpace = await createSpace(data);
        props.dataProp(newSpace); // Pass the created space data to parent component
        props.onHide(); // Close the modal
      } catch (error) {
        console.error('Failed to create space:', error);
      }
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="vertically-centered-modal"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title style={{ color: 'blue' }} id="vertically-centered-modal">
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
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>
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
                  controlId="type_name"
                  label={
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>
                      Type Name
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="type"
                    placeholder="type_name"
                    value={data.type}
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
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>
                      Overview or Description
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
              <Row>
                <FloatingLabel
                  controlId="createDate_name"
                  label={
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>
                      Create Date
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="Date"
                    name="createDate"
                    placeholder="createDate_name"
                    value={data.createDate}
                    onChange={handleOnChange}
                    required
                  />
                  <div className="text-danger">{nameError}</div>
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



