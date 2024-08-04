import axios from 'axios';

const API_URL = '/api/images/room';

export const fetchImagesByRoomType = async (roomTypeId) => {
    try {
        const response = await axios.get(`${API_URL}/${roomTypeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
