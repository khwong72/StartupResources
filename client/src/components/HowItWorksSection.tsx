import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We begin with a detailed assessment of your hiring needs, company culture, and growth objectives.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: 2,
      title: "Talent Sourcing",
      description: "Our team leverages industry connections and advanced search techniques to identify top candidates that match your requirements.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: 3,
      title: "Candidate Evaluation",
      description: "We handle initial screening, technical assessments, and provide you with a shortlist of qualified candidates.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: 4,
      title: "Hiring & Onboarding",
      description: "We assist with offer negotiations, contract creation, and provide comprehensive onboarding support.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our streamlined process makes hiring top talent simple and stress-free
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
          <motion.div 
            className="space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative"
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'tween', index * 0.2, 0.7)}
              >
                <div className="md:flex items-center">
                  <div className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last md:text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-900">{step.number}. {step.title}</h3>
                    <p className="mt-2 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg"
                      animate={{ 
                        boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.5)", "0 0 0 8px rgba(59, 130, 246, 0)"],
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut" 
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-first'}`}>
                    <motion.div 
                      className="bg-gray-50 rounded-xl p-6 shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                    >
                      <img 
                        src={step.image} 
                        alt={`${step.title} process`} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
