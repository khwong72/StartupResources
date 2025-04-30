import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ArrowRight, Users, Handshake } from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      title: "HR Support",
      description: "We provide HR and Recruitment support from workforce planning, employee contracts creation to onboarding support so that Founders can attract and retain talent to accelerate their startup.",
      icon: Users,
      features: [
        "Workforce planning",
        "Contract creation",
        "Onboarding support"
      ],
      color: "bg-emerald-50 text-emerald-700",
      link: "/hr-support"
    },
    {
      title: "Recruitment",
      description: "We source a-players to your startup or scale-up at a low fixed fee, meaning you can grow without huge agency fees. Our expertise covers technical, business, and executive roles.",
      icon: Handshake,
      features: [
        "Technical roles",
        "Business positions",
        "Executive search"
      ],
      color: "bg-blue-50 text-blue-700",
      link: "/recruitment"
    }
  ];

  const feeOptions = {
    title: "FLEXIBLE FEE OPTIONS",
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
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              variants={fadeIn('up', 'tween', index * 0.2, 0.7)}
              whileHover={{ y: -5 }}
            >
              <div className="p-10">
                <div className="flex items-start">
                  <div className={`p-4 rounded-2xl ${service.color} mb-6 mr-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href={service.link}> 
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
