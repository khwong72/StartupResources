import { motion } from "framer-motion";
import { Clock, PiggyBank, Users, Globe } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";

export default function ValueProposition() {
  const impacts = [
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "3x",
      title: "Faster Hiring",
      description: "Accelerated recruitment for Series A+B companies"
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      metric: "£450k+",
      title: "Savings",
      description: "Compared to traditional agency fees"
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "95%+",
      title: "Retention",
      description: "Candidate retention after 6 months"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      metric: "20+",
      title: "Countries",
      description: "International hiring expertise"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Startup Resources?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're not about big commissions or bloated costs—just finding the best talent to grow your business.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {impacts.map((impact, index) => (
            <motion.div 
              key={impact.title}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              variants={slideIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary mb-4 mx-auto">
                {impact.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-1">{impact.metric}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{impact.title}</h3>
              <p className="text-gray-600 text-sm">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
