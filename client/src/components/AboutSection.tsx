import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn } from "@/lib/animations";
import LouisaImage from "@/assets/louisa.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="mb-8 lg:mb-0 max-w-lg mx-auto lg:mx-0"
            variants={fadeIn('right', 'tween', 0.2, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">MEET THE FOUNDER</h2>
            <p className="text-gray-700 mb-6">
              Startup Resources was founded in 2023 by Louisa Maglieri, a recruiter with over 16 years of experience, who has worked in-house for Societe Generale, Credit Suisse, WPP, S&P Global and more.
            </p>
            <p className="text-gray-700 mb-6">
              She is the ultimate "anti-recruitment agent" as she firmly believes that Startups and Scaleups should be able to hire a-players, without the recruitment agency fees.
            </p>
            <p className="text-gray-700 mb-6">
              Louisa's naturally talented in sourcing candidates from Data Scientists to Paid Media Executives, whilst having extensive experience of the hiring process from recruitment initiation, interviewing to onboarding.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-xl px-8 shadow-md">
                <a href="#contact">CONTACT LOUISA</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative mx-auto"
            variants={slideIn('left', 'tween', 0.2, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={LouisaImage} 
                alt="Louisa Maglieri - Founder of Startup Resources" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Louisa Maglieri</h3>
                <p className="text-primary text-sm font-medium">Founder, Startup Resources</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
