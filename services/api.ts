import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Join waiting list
export const joinWaitingList = async (name: string, email: string) => {
    try {
        const response = await api.post('/auth/waiting-list', { name, email });
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.response?.data || error.message);
        throw error;
    }
};
// Set password after email verification
export const setPassword = async (token: string, password: string) => {
    try {
        const response = await api.post('/auth/set-password', { token, password });
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.response?.data || error.message);
        throw error;
    }
};
// Get testimonials
export const getTestimonials = async () => {
    try {
        const response = await api.get('/testimonials');
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.response?.data || error.message);
        throw error;
    }
};