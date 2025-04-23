import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "HR Support",
      description: "We provide HR and Recruitment support from workforce planning, employee contracts creation to onboarding support so that Founders can attract and retain talent to accelerate their startup.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recruitment",
      description: "We source a-players to your startup or scale-up at a low fixed fee, meaning you can grow without huge agency fees. Our expertise covers technical, business, and executive roles.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">SERVICES</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive recruitment solutions designed specifically for startups and scale-ups
          </p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={fadeIn('up', 'tween', index * 0.2, 0.7)}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={service.image} 
                  alt={`${service.title} Services`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
