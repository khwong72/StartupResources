import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Gradient Blob 1 */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      {/* Gradient Blob 2 */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-500 to-primary-300 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            variants={fadeIn('up', 'tween', 0.1, 0.7)}
          >
            <span className="block">FLEXIBLE, LOW-COST</span>
            <span className="block text-primary">TALENT SOLUTIONS FOR</span>
            <span className="block">STARTUPS AND SCALE-UPS</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            variants={fadeIn('up', 'tween', 0.3, 0.7)}
          >
            At Startup Resources, we get it—scaling your team on a tight budget is tough. That's why we offer low-cost, flexible hiring support focused on delivering A-players without the typical agency fees.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4"
            variants={fadeIn('up', 'tween', 0.5, 0.7)}
          >
            <Button size="lg" asChild className="rounded-full px-8 py-6">
              <a href="#services">
                Our Services
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary/10">
              <a href="#contact">
                Get Started
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
