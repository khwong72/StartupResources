import { storage } from './storage.js'

export default async function handler(req, res) {
  // Implement a RESTful API endpoint
  if (req.method === 'GET') {
    try {
      // If there's a username query param, get that specific user
      if (req.query.username) {
        const user = await storage.getUserByUsername(req.query.username)
        return res.status(200).json(user)
      }
      
      // Otherwise return mock data
      return res.status(200).json({
        users: [
          { id: 1, username: 'user1' },
          { id: 2, username: 'user2' }
        ]
      })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch users' })
    }
  }
  
  // Handle other HTTP methods
  return res.status(405).json({ error: 'Method not allowed' })
} 