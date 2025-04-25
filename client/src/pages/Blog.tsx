import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/lib/types'

// Blog posts data from the actual website
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Crafting a Job Description: CEO\'s Guide',
    excerpt: '',
    date: 'Feb 28, 2024',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1709151700440-MK594H9B6HQRXK8GQA1Z/Untitled+design+%287%29.png?format=2500w',
    slug: '/blog/crafting-a-job-description-ceos-guide',
    content: ''
  },
  {
    id: 2,
    title: 'Talent Strategy For Startups: Finding & Keeping The Best People - Live event recording',
    excerpt: 'You can only grow your startup once you\'ve got the right people – and the race for top startup talent in 2024 will be more competitive than ever. What should founders & senior leaders be doing to improve their talent game as they grow this year? Listen to me in conversation with Alastair Cole about how startups can better find and keep the best talent.',
    date: 'Jan 10, 2024',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704879058309-E5C1G93V50HZBMAUE0PU/IMAGES+-++The+Uplift+Partnership_+Campaigns%2C+Events%2C+Social+Media%2C+360+Slides%2C+Webinar%2C+Assets+_+Sales+Scoop+Slides+%2822%29.png?format=2500w',
    slug: '/blog/talent-strategy-for-startups-finding-keeping-the-best-people',
    content: ''
  },
  {
    id: 3,
    title: 'Live event: Finding & Keeping The Best People',
    excerpt: 'You can\'t grow your startup if you don\'t have the right people. Which is why I\'m starting 2024 as a guest of the Uplift Partnership on their Sales Scoop Podcast on January 9th. The LinkedIn Live event is titled: \'Talent Strategy For Startups: Finding & Keeping The Best People\'. Read on and watch my video introduction…',
    date: 'Dec 10, 2023',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704659034886-XZVQYGEC2FKLQVM8WF44/%F0%9F%93%92Playbook+-+Startup+Resources+%283%29.png?format=2500w',
    slug: '/blog/event-announcement',
    content: ''
  }
]

export default function Blog() {
  const [posts] = useState<BlogPost[]>(blogPosts)

  return (
    <>
      <Helmet>
        <title>Blog | Startup Resources</title>
        <meta name="description" content="Expert advice on hiring, retention, and scaling teams for startups from Startup Resources." />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeIn('up', 'tween', 0.1, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
            <p className="mt-4 text-xl text-gray-600">
              Expert insights on talent strategy, recruitment, and HR for startups
            </p>
          </motion.div>

          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
} 