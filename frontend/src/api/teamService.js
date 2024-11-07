import axios from 'axios';

// const API_URL = 'http://localhost:8075/task';
// // http://localhost:8075/api/task/addteams

export const createTeam = async (teamData) => {
  return axios.post(' http://localhost:8075/api/task/addteams', teamData);
};
