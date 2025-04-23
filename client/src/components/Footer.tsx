import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "HR Support", href: "#services" },
    { name: "Recruitment", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#how-it-works" }
  ];

  const about = [
    { name: "Our Story", href: "#about" },
    { name: "Blog", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Careers", href: "#" }
  ];

  const contact = [
    { 
      icon: <Mail className="w-5 h-5 mr-2" />, 
      content: "info@startupresources.co.uk" 
    },
    { 
      icon: <Phone className="w-5 h-5 mr-2" />, 
      content: "+44 (0) 123 456 7890" 
    },
    { 
      icon: <MapPin className="w-5 h-5 mr-2" />, 
      content: "London, United Kingdom" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Low-cost, flexible hiring support focused on delivering A-players without the typical agency fees.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {about.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  {item.icon}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Startup Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
