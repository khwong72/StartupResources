import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { 
  LineChart, 
  Users, 
  CopyCheck, 
  Puzzle, 
  Layers 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Talent Strategy",
      description: "Build your hiring blueprint aligned with business goals",
      icon: LineChart,
      color: "bg-emerald-50/80 text-emerald-700 border-emerald-100"
    },
    {
      title: "Full-Cycle Hiring",
      description: "From job spec to offer acceptance with no hassle",
      icon: CopyCheck,
      color: "bg-blue-50/80 text-blue-700 border-blue-100"
    },
    {
      title: "Workforce Planning",
      description: "Structure your team for scalability and growth",
      icon: Puzzle,
      color: "bg-purple-50/80 text-purple-700 border-purple-100"
    },
    {
      title: "Embedded Support",
      description: "Our specialists integrated directly with your team",
      icon: Layers,
      color: "bg-amber-50/80 text-amber-700 border-amber-100"
    }
  ];

  const feeOptions = {
    title: "Flexible Fee Options",
    description: "Startup Resources offers a simple, affordable fee structure ranging from 10-12% of the candidate's total salary.",
    details: "You can choose to pay the full amount upfront or split it into 3 payments spread over 6 months, making it easier for your cash flow as you scale your team.",
    summary: "This way, you get top talent without the financial strain!"
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg text-gray-600">
            Comprehensive recruitment solutions designed specifically for startups and scale-ups
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="backdrop-blur-sm bg-white/70 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              variants={fadeIn('up', 'tween', index * 0.1, 0.7)}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className={`p-5 rounded-2xl ${service.color} mb-6 border`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
