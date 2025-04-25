// Get the API URL based on environment
export const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api` : '/api'
  : 'http://localhost:5001/api'

// Export other config variables as needed 