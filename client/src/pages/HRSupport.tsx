import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Users, DollarSign, Handshake, Code, BadgeDollarSign, GraduationCap, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function HRSupport() {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = [
    {
      title: "Technology",
      icon: Code,
      description: "Our expertise and networks within technology will help scale your business with ease. We are experienced in providing top talent within AI, data analytics, software architects and developers to project managers and business analysts."
    },
    {
      title: "Sales",
      icon: BadgeDollarSign,
      description: "Our team understands the importance of having skilled sales people in place to take your business to the next level. We've helped hire every facet within sales from Heads of Business Development, Customer Success Managers to Sales Operations Associates."
    },
    {
      title: "Marketing",
      icon: GraduationCap,
      description: "Having an effective marketing team is crucial to making sales and increasing brand awareness. Our team of experts are skilled in the creative sector to help you hire marketing specialists fast. Hires we've made recently include: Head of Marketing, Communication Managers, Marketing Managers, Community/Social Media Managers and customer engagement."
    },
    {
      title: "Product Management",
      icon: BarChart,
      description: "With our industry knowledge, we're experienced in hiring across product management to scale up your business from Heads of Product Management, Product Managers to Product Owners."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div 
        className="mb-16 text-center"
        variants={fadeIn('up', 'tween', 0.1, 0.7)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          HR & HIRING EXPERTISE AT LOW COST
        </h1>
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start mb-4">
          <h2 className="text-2xl font-bold text-primary">Expertise</h2>
        </div>
        <p className="text-gray-700 mb-6">
          With over 16 years experience, we have worked directly with renowned clients such as Societe Generale, IBM, WPP, S&P Global, Credit Suisse to provide ambitious individuals within tech, finance, media and more.
        </p>
        <p className="text-gray-700">
          At Startup Resources, we use our extensive network, executive search and targeted campaigns to find talent quickly and efficiently, from C-Suite to team building. We also manage the full hiring lifecycle from candidate qualification, interview scheduling to job offer negotiation, to save you time.
        </p>
      </motion.div>

      {/* Relationships Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start mb-4">
          <h2 className="text-2xl font-bold text-primary">Relationships</h2>
        </div>
        <p className="text-gray-700">
          As our recruiters have worked in large HR divisions for investment banks, big corporates and more, we appreciate and respect the importance of creating and nurturing relationships. Honesty and integrity is at the corner stone of our work and we're passionate in guiding clients throughout the hiring journey.
        </p>
      </motion.div>

      {/* Cost Efficiency Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start mb-4">
          <h2 className="text-2xl font-bold text-primary">Cost Efficiency</h2>
        </div>
        <p className="text-gray-700">
          Whether you're at seed stage or have achieved your funding goals, we know that cost efficiency is key to scaling and long-term growth. Therefore, at Startup Resources, we're determined to provide you an excellent service without breaking the bank with extortionate fees.
        </p>
      </motion.div>

      {/* HR Team Image */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <img 
          src="https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1690893547624-O9DV3V9WJZ896JOMY1LM/image-asset.jpeg?format=2500w" 
          alt="Startup recruitment agency" 
          className="w-full rounded-lg object-cover h-[400px]"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop";
          }}
        />
      </motion.div>

      {/* Sectors Covered */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.6, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Sectors Covered</h2>
        </div>

        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1 + 0.7, 0.5)}
              className="border-b border-gray-200 pb-6 last:border-0"
            >
              <div className="flex items-center mb-2">
                <sector.icon className="w-5 h-5 text-primary mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{sector.title}</h3>
              </div>
              <p className="text-gray-700 pl-8">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.7, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get in Touch
        </Button>
      </motion.div>
    </div>
  );
} 