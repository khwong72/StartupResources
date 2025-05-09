import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react";
import { saveEmailSubscription } from "@/lib/emailService";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send to Google Sheets
      const success = await saveEmailSubscription(email, 'Footer Form');
      
      if (success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  }

  return (
    <footer className="bg-[#F5F5F5] text-gray-900 py-12 rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Logo variant="default" />
            </div>
            <p className="text-gray-700 text-sm mb-4">
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
            <h3 className="text-lg font-bold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  {item.icon}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>

          {/* Email Capture Form */}
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Want to hire smarter?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">Drop your email.</p>
            <form className="mt-6 sm:max-w-md" onSubmit={handleFormSubmit}>
              <div className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-400 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <Button 
                    type="submit" 
                    className="flex w-full items-center justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : 'Submit'}
                  </Button>
                </div>
              </div>
              
              {/* Submission status messages */}
              {submitStatus === 'success' && (
                <p className="mt-2 text-sm text-green-600">
                  Thanks! We'll be in touch soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-2 text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-700 text-sm">
            &copy; {currentYear} Startup Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
