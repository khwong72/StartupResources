import { motion } from "framer-motion";
import { Rocket, BarChart3 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function TargetedCTAs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Who We Help</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored recruitment solutions for both founders and investors
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Founder Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            variants={fadeIn('right', 'tween', 0.2, 0.7)}
            whileHover={{ y: -5 }}
          >
            {/* Background decoration */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute right-12 bottom-12 w-16 h-16 bg-primary/5 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100 text-primary mr-4">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Founders</h3>
            </div>
            
            <p className="text-gray-600 mb-6 relative z-10">
              Building your dream team doesn't have to be a headache. Get access to top talent without the exorbitant agency fees typically charged to startups.
            </p>
            
            <ul className="mb-8 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span> Fast-track hiring for critical roles
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span> Fractional recruitment support
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span> Expertise across engineering, product & marketing
              </li>
            </ul>
            
            <Button size="lg" asChild className="w-full rounded-xl px-8 py-6 bg-primary hover:bg-primary/90 shadow-md">
              <a href="#contact?type=founder">
                Founder? Let's Talk Hiring
              </a>
            </Button>
          </motion.div>
          
          {/* Investor Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            variants={fadeIn('left', 'tween', 0.2, 0.7)}
            whileHover={{ y: -5 }}
          >
            {/* Background decoration */}
            <div className="absolute -left-16 -top-16 w-32 h-32 bg-indigo-50 rounded-full opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute left-12 bottom-12 w-16 h-16 bg-indigo-50 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Investors</h3>
            </div>
            
            <p className="text-gray-600 mb-6 relative z-10">
              Help your portfolio companies scale efficiently with strategic hiring support. Extend their runway while building high-performing teams.
            </p>
            
            <ul className="mb-8 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Portfolio-wide hiring strategy
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Reduce cash burn on recruitment
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span> Improve founder hiring capability
              </li>
            </ul>
            
            <Button size="lg" asChild className="w-full rounded-xl px-8 py-6 bg-indigo-600 hover:bg-indigo-700 shadow-md">
              <a href="#contact?type=investor">
                Investor? Let's Protect Your Portfolio
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 