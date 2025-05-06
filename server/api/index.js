import express from 'express'
import { usersRouter } from './users.js'
import { storageRouter } from './storage.js'

// Create an Express router for API endpoints
const apiRouter = express.Router()

// Add required middleware
apiRouter.use(express.json())
apiRouter.use(express.urlencoded({ extended: false }))

// Health check endpoint
apiRouter.get('/', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'API is working!'
  })
})

// Register other API routes
apiRouter.use('/users', usersRouter)
apiRouter.use('/storage', storageRouter)

// Export the router to be mounted by the main app
export default apiRouter 