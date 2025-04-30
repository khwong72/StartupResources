import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  // Check if we're on the homepage
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "Case Studies", href: isHomePage ? "#case-studies" : "/#case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const navbarClasses = cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    scrolled 
      ? "bg-white/80 backdrop-blur-md border-b border-gray-200" 
      : "bg-transparent"
  );

  // Helper function to handle navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string): boolean => {
    // If it's a hash link on the current page, don't use Link but regular anchor
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return true;
    }
    // If not on homepage, we need to navigate back to home
    return false;
  };

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <Logo />
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') && isHomePage ? (
                    <a 
                      href={item.href}
                      className="text-gray-700 hover:text-primary font-medium transition-colors"
                      onClick={(e) => handleNavigation(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <a className="text-gray-700 hover:text-primary font-medium transition-colors">
                        {item.label}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/louisa-maglieri/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <img 
                  src="/linkedin icon.png" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24} 
                  className="object-contain brightness-0"
                />
              </a>
              {isHomePage ? (
                <Button asChild className="rounded-full px-6">
                  <a href="#contact">Contact</a>
                </Button>
              ) : (
                <Button asChild className="rounded-full px-6">
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                </Button>
              )}
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/louisa-maglieri/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <img 
                src="/linkedin icon.png" 
                alt="LinkedIn" 
                width={22} 
                height={22} 
                className="object-contain brightness-0"
              />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('#') && isHomePage ? (
                      <a 
                        href={item.href}
                        className="text-gray-700 hover:text-primary font-medium block py-2 transition-colors"
                        onClick={(e) => {
                          handleNavigation(e, item.href);
                          setIsOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a 
                          className="text-gray-700 hover:text-primary font-medium block py-2 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  {isHomePage ? (
                    <Button asChild className="w-full rounded-full mt-2">
                      <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </a>
                    </Button>
                  ) : (
                    <Button asChild className="w-full rounded-full mt-2">
                      <Link href="/#contact">
                        <a onClick={() => setIsOpen(false)}>Contact</a>
                      </Link>
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
