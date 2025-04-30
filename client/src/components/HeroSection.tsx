import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32 lg:py-40">
      {/* Abstract shapes */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-primary/10" aria-hidden="true"></div>
      <div className="absolute bottom-16 left-16 w-32 h-32 rounded-xl bg-primary/5" aria-hidden="true"></div>
      <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-md bg-primary/10" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            variants={fadeIn('up', 'tween', 0.1, 0.7)}
          >
            <span className="block">Scale Faster, Smarter,</span>
            <span className="block text-primary mt-2">Without Hiring Headaches</span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-lg leading-8 text-gray-600 mx-auto max-w-2xl"
            variants={fadeIn('up', 'tween', 0.3, 0.7)}
          >
            Strategic hiring support for startup founders and VC portfolios delivering faster time-to-hire, lower burn rates, and stronger cultural fit.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4"
            variants={fadeIn('up', 'tween', 0.5, 0.7)}
          >
            <Button size="lg" asChild className="rounded-xl px-8 py-6 shadow-lg">
              <a href="#services">
                Our Services
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-xl px-8 py-6 border-primary text-primary hover:bg-primary/5">
              <a href="#contact">
                Let's Build Your Dream Team
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
