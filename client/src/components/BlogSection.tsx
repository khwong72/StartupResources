import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Crafting a Job Description: CEO's Guide",
      excerpt: "",
      date: "Feb 28, 2024",
      readTime: "",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1709151700440-MK594H9B6HQRXK8GQA1Z/Untitled+design+%287%29.png?format=2500w",
      slug: "/blog/crafting-a-job-description-ceos-guide"
    },
    {
      id: 2,
      title: "Talent Strategy For Startups: Finding & Keeping The Best People - Live event recording",
      excerpt: "You can only grow your startup once you've got the right people – and the race for top startup talent in 2024 will be more competitive than ever.",
      date: "Jan 10, 2024",
      readTime: "",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704879058309-E5C1G93V50HZBMAUE0PU/IMAGES+-++The+Uplift+Partnership_+Campaigns%2C+Events%2C+Social+Media%2C+360+Slides%2C+Webinar%2C+Assets+_+Sales+Scoop+Slides+%2822%29.png?format=2500w",
      slug: "/blog/talent-strategy-for-startups-finding-keeping-the-best-people"
    },
    {
      id: 3,
      title: "Live event: Finding & Keeping The Best People",
      excerpt: "You can't grow your startup if you don't have the right people. Which is why I'm starting 2024 as a guest of the Uplift Partnership on their Sales Scoop Podcast on January 9th.",
      date: "Dec 10, 2023",
      readTime: "",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1704659034886-XZVQYGEC2FKLQVM8WF44/%F0%9F%93%92Playbook+-+Startup+Resources+%283%29.png?format=2500w",
      slug: "/blog/event-announcement"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Insights & Resources</h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert advice on talent strategy, recruitment, and HR for startups
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              variants={slideIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                )}
                <Button asChild variant="link" className="p-0 h-auto text-primary font-medium flex items-center group">
                  <a href={post.slug}>
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn('up', 'tween', 0.4, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="/blog">View All Articles</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 