import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          animate="show"
        >
          <Link href="/">
            <a className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-gray max-w-none">
            <p className="text-gray-600">
              This section provides details of the cookies used on this website.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What is a cookie?</h2>
            <p className="text-gray-600">
              Cookies are text files containing small amounts of information which are downloaded to your computer or mobile device when you visit a web site. The cookie then sends this information back to the originating web site when you visit it again.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Why do website developers use cookies?</h2>
            <p className="text-gray-600">
              Cookies make the interaction between users and websites faster and easier, and help to improve websites. Without cookies, a web site could not remember a user's preferences or registration details for a future visit.
            </p>
            <p className="text-gray-600">
              Websites use cookies mainly because they save time and make the browsing experience more efficient and enjoyable. Cookies can also enable websites to monitor their users' web surfing habits and profile them for marketing purposes.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What cookies do we use?</h2>
            <p className="text-gray-600">
              We have classified our cookies according to the categories proposed by the International Chamber of Commerce.
            </p>
            <p className="text-gray-600">
              None of the cookies used on our websites gather personal information about you.
            </p>
            
            <h3 className="text-lg font-semibold mt-5 mb-3">Strictly Necessary Cookies</h3>
            <p className="text-gray-600">
              These cookies are essential for the operation of our websites. They:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Check if a user has closed the Cookie Notification bar at the top of the site.</li>
              <li>Verify that when you submit a form that it originates from you and not a fraudulent source</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-5 mb-3">Performance Cookies</h3>
            <p className="text-gray-600">
              These cookies collect information about how our websites is used. The purpose of these cookies is to help us improve our website, and to report website usage for reasons such as rights reporting to music collecting societies. They:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Integrate Google Analytics to help us collect anonymous data on website visitors that help us improve our services</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at louisa@startupresources.co.uk
            </p>
            <p className="text-gray-600">
              5 Brayford Square, London, E1 0SG
            </p>
            
            <p className="text-sm text-gray-500 mt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 