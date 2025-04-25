import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRoute } from 'wouter'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import { fadeIn } from '@/lib/animations'
import { BlogPost as BlogPostType } from '@/lib/types'
import { Button } from '@/components/ui/button'
import NotFound from './not-found'

// Blog posts data - this would ideally come from the BuilderIO API
const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'Crafting a Job Description: CEO\'s Guide',
    excerpt: '',
    date: 'Feb 28, 2024',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1709151700440-MK594H9B6HQRXK8GQA1Z/Untitled+design+%287%29.png?format=2500w',
    slug: '/blog/crafting-a-job-description-ceos-guide',
    content: `
      <p>In the fast-paced world of startups, hiring the right talent is crucial for growth and long-term success. But before you can start interviewing candidates, you need to write a job description that attracts the right people. Here's a no-nonsense guide tailored for founders and CEOs on how to craft job descriptions that get results.</p>
      
      <p><strong>Start with a Clear Job Title</strong></p>
      <p>Your job title should accurately reflect the role and responsibilities of the position. Avoid fancy titles that could confuse potential candidates. Be straight forward and concise</p>
      
      <p><strong>Focus on Key Responsibilities</strong></p>
      <p>Outline the primary duties and tasks that the candidate will be responsible for. Use bullet points for clarity and readability. Keep it concise, highlighting the most important responsibilities first.</p>
      
      <p><strong>Highlight Essential Qualifications</strong></p>
      <p>Clearly state the qualifications, skills, and experience required for the role. Separate "must-have" qualifications from "nice-to-have" ones. This helps candidates quickly assess if they're a good fit.</p>
      
      <p><strong>Use Keywords Wisely</strong></p>
      <p>Incorporate relevant keywords throughout the job description, especially in the title and above the fold. These keywords should reflect the job title, required skills, and industry-specific terms. This not only helps with SEO but also attracts the right candidates.</p>
      
      <p><strong>Sell Your Company</strong></p>
      <p>Briefly introduce your company and its mission. Highlight what makes your company unique and why someone would want to work for you. This can include your company culture, values, and any perks or benefits offered.</p>
      
      <p><strong>Provide Clear Application Instructions</strong></p>
      <p>Clearly explain how candidates should apply for the position. Include details such as where to send resumes, any required documents, and deadlines for applications. Make it easy for qualified candidates to apply.</p>
      
      <p><strong>Be Inclusive and Unbiased</strong></p>
      <p>Avoid using language that could be interpreted as biased or exclusive. Focus on the candidate's abilities and qualifications rather than personal characteristics. Use gender-neutral language and avoid age-specific terms.</p>
      
      <p><strong>Set Realistic Expectations</strong></p>
      <p>Be transparent about what the job entails, including workload, hours, salary and any potential challenges. Setting realistic expectations and being open about salary helps avoid misunderstandings later on.</p>
      
      <p><strong>Two Page Rule</strong></p>
      <p>Keep the job description to 2 pages max and avoid using fluffy and over-wordy paragraphs. It literally takes candidates seconds to decide whether to apply to a job or not, so keep the job description straight to the point and concise.</p>
      
      <p><strong>Post and Test for Responsiveness</strong></p>
      <p>After posting the job description, monitor the response rate and quality of applicants. If you're not attracting the right candidates, revisit the description and make adjustments as needed.</p>
      
      <p>Remember, a well-crafted job description is the first step towards building a strong team. By following these straightforward tips, you can create job postings that attract top talent and set your startup for success.</p>
      
      <p>If you're hiring and not receiving the right candidates, drop me a DM on <a href="https://www.linkedin.com/in/louisa-maglieri" target="_blank">Linkedin</a> or book a call below to let me fix it</p>
    `
  },
  {
    id: 2,
    title: 'Talent Strategy For Startups: Finding & Keeping The Best People - Live event recording',
    excerpt: 'You can only grow your startup once you\'ve got the right people – and the race for top startup talent in 2024 will be more competitive than ever. What should founders & senior leaders be doing to improve their talent game as they grow this year? Listen to me in conversation with Alastair Cole about how startups can better find and keep the best talent.',
    date: 'Jan 10, 2024',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704879058309-E5C1G93V50HZBMAUE0PU/IMAGES+-++The+Uplift+Partnership_+Campaigns%2C+Events%2C+Social+Media%2C+360+Slides%2C+Webinar%2C+Assets+_+Sales+Scoop+Slides+%2822%29.png?format=2500w',
    slug: '/blog/talent-strategy-for-startups-finding-keeping-the-best-people',
    content: `
      <p>You can only grow your startup once you've got the right people – and the race for top startup talent in 2024 will be more competitive than ever. What should founders & senior leaders be doing to improve their talent game as they grow this year? Listen to me in conversation with Alastair Cole about how startups can better find and keep the best talent.</p>
      <p>This live event recording covers key topics including recruitment strategies, talent retention, building attractive company cultures, and more.</p>
      <p>Watch the full event recording to learn actionable strategies for your startup's talent needs.</p>
    `
  },
  {
    id: 3,
    title: 'Live event: Finding & Keeping The Best People',
    excerpt: 'You can\'t grow your startup if you don\'t have the right people. Which is why I\'m starting 2024 as a guest of the Uplift Partnership on their Sales Scoop Podcast on January 9th. The LinkedIn Live event is titled: \'Talent Strategy For Startups: Finding & Keeping The Best People\'. Read on and watch my video introduction…',
    date: 'Dec 10, 2023',
    author: 'Louisa Maglieri',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704659034886-XZVQYGEC2FKLQVM8WF44/%F0%9F%93%92Playbook+-+Startup+Resources+%283%29.png?format=2500w',
    slug: '/blog/event-announcement',
    content: `
      <p>You can't grow your startup if you don't have the right people. Which is why I'm starting 2024 as a guest of the Uplift Partnership on their Sales Scoop Podcast on January 9th. The LinkedIn Live event is titled: 'Talent Strategy For Startups: Finding & Keeping The Best People'.</p>
      <p>In this session, I'll be sharing insights on:</p>
      <ul>
        <li>How to attract top talent when you can't compete on salary</li>
        <li>The common hiring mistakes startups make (and how to avoid them)</li>
        <li>Creating retention strategies that actually work</li>
        <li>Building a talent pipeline for future growth</li>
        <li>When to hire in-house vs. using contractors or agencies</li>
      </ul>
      <p>Join me for this live discussion where I'll be answering your questions about startup recruitment and talent strategy.</p>
      <p>Mark your calendar for January 9th and follow me on <a href="https://www.linkedin.com/in/louisa-maglieri" target="_blank">LinkedIn</a> for updates!</p>
    `
  }
]

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug')
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params?.slug) {
      // Extract the slug part from params.slug
      const slugPart = params.slug
      
      // Find the post with the matching slug
      const foundPost = blogPosts.find(p => 
        p.slug === `/blog/${slugPart}`
      )
      
      setPost(foundPost || null)
    }
    
    setLoading(false)
  }, [params])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return <NotFound />
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Startup Resources</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-8 -ml-3 text-gray-600 hover:text-primary">
              <a href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </Button>
            
            <motion.div
              variants={fadeIn('up', 'tween', 0.1, 0.7)}
              initial="hidden"
              animate="show"
            >
              <div className="flex items-center space-x-2 text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                {post.author && (
                  <>
                    <span className="text-sm">•</span>
                    <span className="text-sm">{post.author}</span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.7)}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full rounded-xl shadow-md" 
            />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 0.7)}
            initial="hidden"
            animate="show"
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {post.id === 1 && (
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 0.7)}
              initial="hidden"
              animate="show"
              className="mt-12 text-center"
            >
              <Button asChild variant="default" size="lg" className="rounded-full">
                <a href="https://calendly.com/startupresources/chatwithlouisa" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </article>
    </>
  )
} 