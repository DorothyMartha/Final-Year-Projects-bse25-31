import axios from 'axios';

const API_URL = 'http://localhost:8075/api/task';

export const createSpace = async (spaceData) => {
  const response = await axios.post(`${API_URL}/addspaces`, spaceData);
  return response.data;
};
