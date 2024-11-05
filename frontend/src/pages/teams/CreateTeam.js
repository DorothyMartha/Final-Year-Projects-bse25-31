import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container"

const CreateTeam = ({ onCreateTeam }) => {
    const [showModal, setShowModal] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [description, setDescription] = useState('');
    // const [selectedMember, setSelectedMember] = useState(null);

    // const handleMemberSelect = (member) => {
    //     setSelectedMember(member);
    // };

    const handleClose = () => {
        setShowModal(false);
        // setSelectedMember(null);
    };

    const handleCreateClick = () => {
        const newTeam = {
            name: teamName,
            description: description,
            // members: selectedMember ? [selectedMember] : [],
        };
        onCreateTeam(newTeam);
        setTeamName('');
        setDescription('');
        // setSelectedMember(null);
        handleClose();
    };

    return (
        <div>
            <Container>
                <Row>
                    {/* <Col  sm={3}><h5>Create Team</h5></Col> */}
                    <Col>
                        <Button variant="outline-primary" onClick={() => setShowModal(true)}>
                            Create Team
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="teamName">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter team name"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCreateClick}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateTeam;
