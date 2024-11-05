import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Modal} from 'react-bootstrap';
import SearchBar from '../../../pages/teams/SearchBar';
import { Table } from "@mui/material";

const membersList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    { id: 5, name: 'Michael Johnson' },
    { id: 6, name: 'Emily Wilson' },
    { id: 7, name: 'David Brown' },
    { id: 8, name: 'Olivia Taylor' },
    { id: 9, name: 'Robert Davis' },
    { id: 10, name: 'Sophia Wilson' },
    { id: 11, name: 'William Jackson' },
    { id: 12, name: 'Ava Martinez' },
    { id: 13, name: 'James Anderson' },
    { id: 14, name: 'Isabella Garcia' },
    { id: 15, name: 'Benjamin Johnson' },
    { id: 16, name: 'Mia White' },
    { id: 17, name: 'Alexander Taylor' },
    { id: 18, name: 'Emma Harris' },
    { id: 19, name: 'Ethan Thomas' },
    { id: 20, name: 'Oliver Martinez' },
];

export default function TeamMember({ availableMembers }) {
    const [showSearchBarModal   , setShowSearchBarModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [searchResults, setSearchResults] = useState([]); // Initialize searchResults state
    const [addedMembers, setAddedMembers] = useState([]);

    const handleAddMemberClick = () => {
        setShowSearchBarModal(true);
    };

    const handleSearchClose = () => {
        setShowSearchBarModal(false);
        setSelectedMember(null);
        setSearchResults([]); // Reset search results when closing
    };

    const handleSearch = (query) => {
        const filteredMembers = membersList.filter(member =>
            member.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredMembers);
    };

    const handleMemberSelect = (member) => {
        setSelectedMember(member);
    };
    const handleMembers = (data) => {
        setAddedMembers([...addedMembers, data]);
    }

    useEffect(()=>{
        availableMembers(addedMembers)
    },[addedMembers, availableMembers]);


    return (
        <>
            <Container>
                <Row >
                    <h3>1. <strong> Members</strong></h3>
                    <hr/>
                    <Col sm={4}>
                        <Button variant="outline-primary" onClick={handleAddMemberClick}>Add Member </Button>
                        {addedMembers.length > 0 && (
                            <div>
                                <h5 className='mt-2'>Available Members List</h5>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {addedMembers.map((member, index) => (
                                            <tr key={index}>
                                                <td>{member.id}</td>
                                                <td>{member.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <Modal show={showSearchBarModal} onHide={handleSearchClose}>
                <Modal.Header>
                    <Modal.Title>Search and Add Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SearchBar
                        members={handleMembers}
                        onClose={handleSearchClose}
                        onSearch={handleSearch}
                        onSelectMember={handleMemberSelect}
                        membersList={membersList}
                        searchResults={searchResults}
                    />
                </Modal.Body>
            </Modal>
            <br />
        </>
    );
}