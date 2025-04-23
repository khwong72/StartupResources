import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";

export default function ValueProposition() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Cost-Effective",
      description: "Low, transparent fees from 10-12% of salary with flexible payment options to support your cash flow."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Experienced Team",
      description: "Founded by industry veterans with backgrounds in investment banks, energy firms, and SaaS companies."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full HR Support",
      description: "End-to-end support from workforce planning and contracts to onboarding to help accelerate your startup."
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
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={slideIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
