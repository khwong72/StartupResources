import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Startup Resources helped us hire our entire engineering team at a fraction of what traditional recruiters would have charged. Their flexible payment options were perfect for our cash flow situation.",
      author: "David Miller",
      role: "CTO, TechFlow",
      initials: "DM",
      rating: 5
    },
    {
      quote: "As a first-time founder, navigating the hiring process was daunting. Startup Resources provided end-to-end support that made building our team straightforward and affordable.",
      author: "Sarah Johnson",
      role: "CEO, GreenScale",
      initials: "SJ",
      rating: 5
    },
    {
      quote: "We were scaling fast and needed to hire 10 people in 3 months. Startup Resources delivered quality candidates quickly and at a price point that worked with our budget constraints.",
      author: "Michael Patel",
      role: "COO, FinEdge",
      initials: "MP",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const mobileView = testimonials[activeIndex];

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it—hear from the startups we've helped scale
          </p>
        </motion.div>
        
        {/* Desktop/Tablet View */}
        <motion.div 
          className="hidden md:grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.author}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-6">
                <Rating value={testimonial.rating} />
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <span className="text-primary-700 font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile View - Carousel */}
        <motion.div 
          className="md:hidden"
          variants={fadeIn('up', 'tween', 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div 
            key={mobileView.author}
            className="bg-gray-50 rounded-2xl p-8 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Rating value={mobileView.rating} />
            </div>
            <blockquote className="text-gray-700 mb-6">
              "{mobileView.quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="text-primary-700 font-bold">{mobileView.initials}</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{mobileView.author}</div>
                <div className="text-sm text-gray-600">{mobileView.role}</div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-2 rounded-full ${idx === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
