import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SearchBar = ({ onSearch, onClose, onSelectMember, members, searchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = event => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const handleSearchClose = () => {
        setSearchQuery('');
        onClose();
    };

    const handleMemberSelect = member => {
        // console.log(member)
        members(member)
        onSelectMember(member);
        setSearchQuery('');
        console.log(member);
    };

    return (
        <Card className="search-bar-card">
            <Card.Body>
                <Form inline className="search-bar-form">
                    <Form.Control
                        type="text"
                        placeholder="Search new member..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />

                </Form>
                {/* Display search results here */}
                {/* Example: */}
                <ul className="mt-2 memberList" style={{ backgroundColor: "#EAF2F8"}}>
                    {searchResults.map(member => (
                        <li key={member.id} onClick={() => handleMemberSelect(member)}
                        >
                            {member.id}{" "} {" "}{member.name}
                        </li>
                    ))}
                </ul>
                <Button className="mt-2" variant="outline-danger" onClick={handleSearchClose}>
                    Cancel
                </Button>
            </Card.Body>
        </Card>
    );
};

export default SearchBar;
