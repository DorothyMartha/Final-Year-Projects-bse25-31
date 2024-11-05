import React, { useState } from 'react';
import CreateTeam from '../teams/CreateTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from "../../components/teamList/TeamList";
import { useParams } from 'react-router-dom';
import WorkSpaceNavBar from '../../components/NavBar/WorkSpaceNavBar';

const CreateTeamHandler = ({ toggle }) => {
    const { name } = useParams();
    const [teams, setTeams] = useState([]);
    // const [spaceBody, setSpaceBody] = useState(true);
    
    // console.log("Name is ,,,,,,,,",data);

    const handleCreateTeam = newTeam => {
        setTeams([...teams, newTeam]);
    };

    return (
        <div>
            <WorkSpaceNavBar
                btn={ false}
                spaceHead={name}
                teamName={null}
            />
            <h1 className="text-center">Available Teams</h1>
            {/* <hr/> */}
            <div className="container">
                <hr />
                <CreateTeam onCreateTeam={handleCreateTeam} />
                <TeamList  teams={teams} setTeams={setTeams} />
            </div>
        </div>
    );
};

export default CreateTeamHandler;
