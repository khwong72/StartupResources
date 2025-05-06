import express from 'express'
import { storage } from './storage.js'

const usersRouter = express.Router()

// Get users (all or by username)
usersRouter.get('/', async (req, res) => {
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
})

export { usersRouter } 