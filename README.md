# Startup Resources - Modern Landing Page

A modern, animated React landing page for Startup Resources with curved UI elements, interactive components, and smooth animations using Shadcn UI and Framer Motion.

![Startup Resources Landing Page](./client/src/assets/louisa.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Edit the Website](#how-to-edit-the-website)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a modern, responsive landing page for "Startup Resources", a recruiting partner business. The design features aesthetic curved edges, clean UI elements, and engaging animations throughout.

The site includes sections for hero messaging, services, about the founder, pricing options, testimonials, and contact information.

## Features

- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens
- **Modern UI Elements**: Clean shapes, rounded corners, subtle shadows, and smart spacing
- **Animated Components**: Smooth transitions and animations via Framer Motion
- **Interactive Elements**: Hover effects, responsive buttons, and navigation
- **Optimized Performance**: Efficient rendering and loading times

## Tech Stack

- **Frontend Framework**: React
- **UI Component Library**: Shadcn UI (built on Radix UI)
- **Animation Library**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: Wouter (lightweight router)
- **State Management**: React Hooks
- **API Client**: TanStack Query
- **Build Tool**: Vite

## Project Structure

```
startup-resources/
├── client/
│   ├── src/
│   │   ├── assets/              # Static assets, images
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── AboutSection.tsx # Meet the founder section
│   │   │   ├── HeroSection.tsx  # Hero banner section
│   │   │   └── ...              # Other section components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── layouts/             # Page layout components
│   │   ├── lib/                 # Utility functions
│   │   │   ├── animations.ts    # Animation presets
│   │   │   └── ...
│   │   ├── pages/               # Page components
│   │   ├── App.tsx              # Main app component
│   │   └── main.tsx             # App entry point
│   └── index.html               # HTML template
├── server/                      # Express server for API endpoints
├── shared/                      # Shared code between client and server
├── components.json              # Shadcn UI configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json                 # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/startup-resources.git
   cd startup-resources
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5000
   ```

## How to Edit the Website

The website is designed to be easily editable by users with basic knowledge of React and web development. Here are several approaches for making the site editable:

### Option 1: Direct Code Editing

For developers familiar with React and TypeScript, editing the components directly is the most flexible approach:

1. Navigate to `client/src/components/` directory
2. Each section of the website is contained in a separate component (e.g., `HeroSection.tsx`, `AboutSection.tsx`)
3. Edit the content, styling, or functionality as needed
4. Run the development server (`npm run dev`) to see your changes

### Option 2: Content Configuration File

For a more user-friendly approach, you could implement a central content configuration:

1. Create a content configuration file in JSON format:
   ```javascript
   // client/src/content/websiteContent.json
   {
     "hero": {
       "title": "FLEXIBLE, LOW-COST TALENT SOLUTIONS FOR STARTUPS AND SCALE-UPS",
       "description": "At Startup Resources, we get it—scaling your team on a tight budget is tough...",
       "buttons": [
         { "text": "Our Services", "link": "#services", "variant": "primary" },
         { "text": "Let's Build Your Dream Team", "link": "#contact", "variant": "outline" }
       ]
     },
     "about": {
       "title": "MEET THE FOUNDER",
       "description": "Startup Resources was founded in 2023 by Louisa Maglieri...",
       "founderImage": "./assets/louisa.jpg",
       "founderName": "Louisa Maglieri",
       "founderTitle": "Founder, Startup Resources"
     },
     // ... other sections
   }
   ```

2. Modify the components to use this configuration:
   ```jsx
   // Example for HeroSection.tsx
   import content from '@/content/websiteContent.json';

   export default function HeroSection() {
     const { hero } = content;
     
     return (
       <section className="...">
         <motion.h1>
           {hero.title.split(' AND ').map((part, i) => (
             <span key={i} className="block">{part}</span>
           ))}
         </motion.h1>
         <motion.p>
           {hero.description}
         </motion.p>
         // ... buttons and other content
       </section>
     );
   }
   ```

3. Users can then edit the JSON file to update content without touching component code

### Option 3: CMS Integration

For non-technical users, integrating a headless CMS would be the most accessible solution:

1. Set up a headless CMS like Contentful, Sanity, or Strapi
2. Define content models for each section of the website
3. Connect the React app to the CMS using their JavaScript SDK
4. Fetch content from the CMS instead of hardcoded values:

```jsx
// Example using a CMS client
import { useCmsContent } from '@/hooks/useCmsContent';

export default function HeroSection() {
  const { data, loading } = useCmsContent('hero');
  
  if (loading) return <Skeleton />;
  
  return (
    <section className="...">
      <motion.h1>{data.title}</motion.h1>
      <motion.p>{data.description}</motion.p>
      {/* ... */}
    </section>
  );
}
```

### Option 4: Admin Dashboard (Advanced)

For a complete solution, you could build an admin dashboard:

1. Create authentication for admin users
2. Build a WYSIWYG editor interface for each section
3. Store content in a database
4. Add image upload functionality
5. Include preview capabilities
6. Create a versioning system for changes

This approach requires significant additional development but provides the most user-friendly editing experience.

## Implementation Steps for Content Management

To implement content management, follow these steps:

1. **Choose your approach** from the options above based on technical requirements and user expertise

2. **Refactor components** to use dynamic content:
   - Extract hardcoded text into variables or content objects
   - Make image paths configurable
   - Allow styling customization (colors, spacing, etc.)

3. **Create an editing interface** appropriate for your chosen approach:
   - For JSON configuration: Add validation and documentation
   - For CMS: Set up proper content models and relationships
   - For admin dashboard: Design intuitive editing UI

4. **Add safeguards** to prevent breaking changes:
   - Input validation
   - Preview functionality
   - Backup/restore capability

5. **Document the editing process** thoroughly for end users

## Deployment

To deploy the website to production:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory
   
3. Deploy to your preferred hosting provider (Netlify, Vercel, AWS, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.