import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const TeamList = ({ teams, setTeams, handleAddMemberClick }) => {
    const [teamData, setTeamData] = useState([]);
    useEffect(() => {
        setTeamData(teams)
    }, [teams]);

    const handleDeleteTeam = (index) => {
        const updatedTeams = teamData.filter((team, teamIndex) => teamIndex !== index);
        setTeams(updatedTeams);
    }

    return (
        <>
            <div>
                <h2>Team List</h2>
                <Row xs={1} md={4} className="g-4">
                    {teamData.length !== 0 ? (
                        teamData.map((team, index) => (
                            <Col key={index}>
                                <Card key={index} className="mt-2 mb-2" style={{ width: '18rem' }}>

                                    <Card.Body className=' text-center'>
                                        <div><h3>{team.name}</h3></div>
                                        <div>{team.description}</div>

                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex justify-content-end">
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => handleDeleteTeam(index)}
                                            >
                                                Delete
                                            </Button>
                                            <Link to={`/space/teams/team/${team.name}`}>
                                                <Button
                                                    variant="primary"
                                                    style={{ marginLeft: '5px' }}
                                                >
                                                    Details
                                                </Button>
                                            </Link>

                                        </div>
                                    </Card.Footer>

                                </Card>
                            </Col>
                        ))
                    ) : (
                        <div className="mb-2" style={{ border: "1px solid black", borderRadius: "5px", width: "100%" }}>
                            <Container className='mt-5 mb-5 text-center' fluid>
                                <Row >
                                    <Col style={{ color: "red" }} ><em>No teams currently</em></Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </Row>

            </div>
            <div>
                <Link to="/">
                    <Button>Back to Workspace</Button>
                </Link>
            </div>
        </>
    );
};
export default TeamList;
