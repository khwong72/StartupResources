import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { slideIn } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import { Link } from 'wouter'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      className="grid md:grid-cols-2 gap-8 items-center"
      variants={slideIn('up', 'tween', index * 0.1, 0.7)}
    >
      <div className="relative overflow-hidden rounded-xl h-64 md:h-full">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 text-gray-500">
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
        
        <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
        
        {post.excerpt && (
          <p className="text-gray-600">{post.excerpt}</p>
        )}
        
        <Link href={post.slug} className="group inline-flex items-center text-primary font-medium mt-2 w-fit">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
} 