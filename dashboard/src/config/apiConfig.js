// API Configuration for frontend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  ADD_HOLDINGS: `${API_BASE_URL}/addHoldings`,
  ADD_POSITIONS: `${API_BASE_URL}/addPositions`,
  GET_HOLDINGS: `${API_BASE_URL}/allholdings`,
  GET_POSITIONS: `${API_BASE_URL}/allPositions`,
  NEW_ORDER: `${API_BASE_URL}/newOrder`,
};

export default API_ENDPOINTS;
