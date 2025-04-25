import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Users, LightbulbIcon, Target, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Recruitment() {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accelerateGrowth = [
    {
      title: "Plan",
      icon: Target,
      description: "Planning is the foundation of any talent strategy. We'll work with you to create a plan that will include: how many hires you need in which departments, what skills and behaviours you are seeking and developing a timeline of when you need the hires in place."
    },
    {
      title: "Identify",
      icon: LightbulbIcon,
      description: "We will advise you on how to identify success and failure so that you can avoid costly hiring mistakes."
    },
    {
      title: "Hire",
      icon: Briefcase,
      description: "Its crucial to hire talent that will grow your business and fits in well with the company's skills and values. We teach you how to tailor your hiring process in order to create a positive candidate experience, introduce referral programmes and how to utilise assessment tools to your advantage."
    },
    {
      title: "Train",
      icon: GraduationCap,
      description: "Learning & development is at the core of retaining talent and it starts from their first day in the role. We provide strategies on what learning & development programmes you need to retain your employees."
    },
    {
      title: "Retain",
      icon: Heart,
      description: "Set yourself apart from other companies your employees may have worked with by creating a unique, positive working experience. This benefits not only in keeping talent, but also reduces cost by repetitive hiring."
    }
  ];

  const benefits = [
    {
      title: "Hire Right",
      description: "Use bespoke hiring processes to quickly identify candidates that match skills needed and company values."
    },
    {
      title: "Unlock Skills",
      description: "We'll analyse your current company's skills to determine where you're falling short and how to enhance current employee's skills for continued growth."
    },
    {
      title: "Employee Retention",
      description: "By having a solid talent strategy in place will not only increase employee performance, but also achieve your long term business objectives."
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
          Talent Strategy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Unlock growth by developing and retaining talent
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-gray-700 mb-6">
          Managing talent is essential for growth and success. Without a solid talent strategy may lead to costly hiring mistakes and inability to retain talent.
        </p>
        <p className="text-gray-700">
          Startup Resources provides talent strategies customised to your needs so that you can scale and reduce cost.
        </p>
      </motion.div>

      {/* Main Image */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <img 
          src="https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1690910759579-W613JKLQIG6EYMHWLSIY/GettyImages-1185622398.jpg?format=2500w" 
          alt="Talent Strategy" 
          className="w-full rounded-lg object-cover h-[400px]"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";
          }}
        />
      </motion.div>

      {/* Accelerate Growth */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Accelerate Growth</h2>
        </div>

        <div className="space-y-8">
          {accelerateGrowth.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1 + 0.5, 0.5)}
              className="border-b border-gray-200 pb-6 last:border-0"
            >
              <div className="flex items-center mb-2">
                <item.icon className="w-5 h-5 text-primary mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 pl-8">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Second Image */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <img 
          src="https://images.squarespace-cdn.com/content/v1/64c7a9fe8afb0d5cac2ebe77/1690914956282-A42POK6YFFWOMA0184YE/image-asset.jpeg?format=2500w" 
          alt="Team Collaboration" 
          className="w-full rounded-lg object-cover h-[400px]"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";
          }}
        />
      </motion.div>

      {/* Featured Benefits */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.6, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Featured Benefits</h2>
        </div>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1 + 0.7, 0.5)}
              className="border-b border-gray-200 pb-6 last:border-0"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
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
        <h3 className="text-xl font-medium text-gray-900 mb-6">
          Would you like to hire and retain valuable talent to enjoy long-term growth? Get in touch to book a call to discuss your talent strategy.
        </h3>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get in Touch
        </Button>
      </motion.div>
    </div>
  );
} 