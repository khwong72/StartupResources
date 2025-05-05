import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

export default function ContactSection() {
  const [formType, setFormType] = useState<string | null>(null);

  useEffect(() => {
    // Handle URL parameters
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?type=')) {
        const type = hash.split('?type=')[1];
        setFormType(type);
        // Scroll to contact section
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script and event listener when component unmounts
      document.removeEventListener('hashchange', handleHashChange);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Determine the form source URL based on type
  const getTallyFormSrc = () => {
    const baseUrl = "https://tally.so/embed/mJgq6J?alignLeft=1&hideTitle=1&transparentBackground=1";
    if (formType === 'founder') {
      return `${baseUrl}&preset={"userType":"Founder"}`;
    } else if (formType === 'investor') {
      return `${baseUrl}&preset={"userType":"Investor"}`;
    }
    return baseUrl;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            If you're a candidate and like to send us your CV, please send it to info@startupresources.co.uk or if you'd like to hire, please fill out the form below.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto overflow-visible shadow-xl rounded-2xl"
          variants={slideIn('up', 'tween', 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          <div 
            className="p-6 sm:p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-blue-100 rounded-2xl" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.85) 100%)',
              boxShadow: '0 10px 30px rgba(0,105,255,0.1)'
            }}
          >
            {/* Tally embed widget */}
            <div className="rounded-xl overflow-hidden">
              <iframe
                data-tally-src={getTallyFormSrc()}
                loading="lazy"
                width="100%"
                height="850"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                style={{ 
                  maxWidth: '100%',
                  display: 'block' 
                }}
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}