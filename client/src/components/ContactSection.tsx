import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            If you're a candidate and like to send us your CV, please send it to info@startupresources.co.uk or if you'd like to hire, please fill out the form below.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={slideIn('up', 'tween', 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <iframe
            src="https://tally.so/embed/mJgq6J?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="shadow-xl rounded-2xl"
            style={{ maxWidth: '100%' }}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
