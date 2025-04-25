import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Winning Tech Team on a Startup Budget",
      excerpt: "Discover proven strategies for attracting top talent without breaking the bank. From flexible compensation packages to leveraging your mission...",
      date: "May 15, 2023",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      slug: "/blog/building-tech-team-startup-budget"
    },
    {
      id: 2,
      title: "The True Cost of a Bad Hire (And How to Avoid It)",
      excerpt: "Mis-hires can cost up to 30% of an employee's first-year earnings. Learn the warning signs of a potential bad fit and how to structure your hiring process...",
      date: "June 3, 2023",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      slug: "/blog/cost-of-bad-hire"
    },
    {
      id: 3,
      title: "Remote vs. In-Office: Finding the Right Balance for Your Startup",
      excerpt: "Is your startup better suited for remote work, in-office, or hybrid? We analyze the pros and cons of each model based on real client experiences...",
      date: "July 12, 2023",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80",
      slug: "/blog/remote-vs-in-office"
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
            Expert advice on hiring, retention, and scaling teams for startups
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
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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