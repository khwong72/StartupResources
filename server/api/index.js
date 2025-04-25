import express from 'express'

// Create an Express instance for serverless functions
const app = express()

// Add required middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Example endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' })
})

// Export Express API as a module for Vercel serverless
export default function handler(req, res) {
  // Simple health check endpoint
  res.status(200).json({ 
    status: 'ok',
    message: 'API is working!'
  })
} 