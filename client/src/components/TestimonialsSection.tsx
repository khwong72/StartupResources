import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Hired two senior engineers in under 3 weeks. Saved us £75K compared to traditional recruiters while getting better candidates.",
      role: "CTO, AI Startup",
      rating: 5
    },
    {
      quote: "3x faster hiring process. Great technical understanding of our needs. 100% candidate retention after 12 months.",
      role: "CEO, Fintech Scale-up",
      rating: 5
    },
    {
      quote: "Built our product team from scratch in 6 weeks. Responsive, cost-effective, and understood our culture perfectly.",
      role: "COO, SaaS Platform",
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

  // Function to highlight key metrics in testimonials
  const highlightMetrics = (text: string): string => {
    // Manually handle specific cases first
    text = text.replace(/3x/g, '<span class="text-primary font-bold">3x</span>');
    text = text.replace(/£75K/g, '<span class="text-primary font-bold">£75K</span>');
    text = text.replace(/100%/g, '<span class="text-primary font-bold">100%</span>');
    text = text.replace(/12 months/g, '<span class="text-primary font-bold">12 months</span>');
    text = text.replace(/6 weeks/g, '<span class="text-primary font-bold">6 weeks</span>');
    text = text.replace(/3 weeks/g, '<span class="text-primary font-bold">3 weeks</span>');
    
    return text;
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
              key={testimonial.role}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              variants={fadeIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ y: -10 }}
            >
              {/* Large decorative quote mark */}
              <div className="absolute -top-2 -left-2 text-primary/10">
                <Quote size={80} />
              </div>
              
              <div className="flex items-center mb-6">
                <Rating value={testimonial.rating} />
              </div>
              
              <blockquote 
                className="text-xl font-medium text-gray-800 mb-6 relative z-10"
                dangerouslySetInnerHTML={{ __html: highlightMetrics(testimonial.quote) }}
              />
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-900">{testimonial.role}</div>
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
            key={mobileView.role}
            className="bg-gray-50 rounded-2xl p-8 shadow-md relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Large decorative quote mark */}
            <div className="absolute -top-2 -left-2 text-primary/10">
              <Quote size={80} />
            </div>
            
            <div className="flex items-center mb-6">
              <Rating value={mobileView.rating} />
            </div>
            
            <blockquote 
              className="text-xl font-medium text-gray-800 mb-6 relative z-10"
              dangerouslySetInnerHTML={{ __html: highlightMetrics(mobileView.quote) }}
            />
            
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="text-sm font-semibold text-gray-900">{mobileView.role}</div>
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
