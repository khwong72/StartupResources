import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn } from "@/lib/animations";

export default function PricingSection() {
  const features = [
    "No hidden costs",
    "Full recruitment service",
    "HR support included"
  ];

  const paymentOptions = [
    {
      number: 1,
      title: "Upfront Payment",
      description: "Pay the full amount upfront and receive a 5% discount on our standard fee."
    },
    {
      number: 2,
      title: "Split Payments",
      description: "Split the fee into 3 payments spread over 6 months, making it easier for your cash flow as you scale your team."
    },
    {
      number: 3,
      title: "Success-Based",
      description: "Only pay when we successfully place a candidate who passes their probation period."
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Flexible Fee Options</h2>
          <p className="mt-4 text-lg text-gray-600">
            Transparent and affordable pricing designed with startups in mind
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={slideIn('up', 'tween', 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
        >
          <div className="md:flex">
            <div className="p-8 md:p-12 bg-primary text-white md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Simple, Affordable Fees</h3>
              <div className="text-5xl font-bold mb-6">10-12<span className="text-2xl">%</span></div>
              <p className="text-primary-100">
                of the candidate's total annual salary
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <Check className="w-6 h-6 text-primary-200 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Payment Options</h3>
              <div className="space-y-6">
                {paymentOptions.map((option, index) => (
                  <motion.div 
                    key={option.number} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-primary-100 text-primary w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 mt-1">
                      {option.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{option.title}</h4>
                      <p className="text-gray-600 mt-1">{option.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
