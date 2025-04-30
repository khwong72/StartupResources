import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Commented out services section temporarily
  /*
  const services = [
    { name: "HR Support", href: "/hr-support" },
    { name: "Recruitment", href: "/recruitment" }
  ];
  */

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" }
  ];

  const contact = [
    { 
      icon: <Mail className="w-5 h-5 mr-2" />, 
      content: "louisa@startupresources.co.uk" 
    },
    { 
      icon: <MapPin className="w-5 h-5 mr-2" />, 
      content: "5 Brayford Square, London, E1 0SG" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Low-cost, flexible hiring support focused on delivering A-players without the typical agency fees.
            </p>
          </div>
          
          {/* Services section commented out
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
          */}
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
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
