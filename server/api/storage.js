// Adapt your storage logic for serverless functions
export const storage = {
  // Add your storage methods here
  // These will be exposed to your API routes
  
  // Example method:
  async getUserByUsername(username) {
    // Implementation here
    return { username }
  }
} 