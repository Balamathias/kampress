"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { countries } from "./career-counseling/CounselingFormSection";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyWorkOpen, setIsStudyWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Career Counseling/Visa Guide", href: "/career-counseling" },
    {
      name: "Study Abroad",
      href: "/study-abroad",
      hasDropdown: true,
      items: countries,
    },
    { name: "Kampress Academy", href: "/academy" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/images/logo.png"
                alt="Kampress Logo"
                width={120}
                height={50}
                className="w-28 h-auto lg:w-32"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsStudyWorkOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsStudyWorkOpen(false)}
              >
                {link.hasDropdown ? (
                  <>
                    <Link
                      href={link.href}
                      className={`relative flex items-center px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 ${
                        isActive(link.href)
                          ? isScrolled
                            ? "text-orange-600 font-semibold"
                            : "text-orange-300 font-semibold"
                          : isScrolled
                          ? "text-gray-700 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                      {isActive(link.href) && (
                        <motion.div
                          layoutId="activeLink"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {isStudyWorkOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                        >
                          {link.items.map((country, index) => (
                            <Link
                              key={country.name}
                              href={country.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {country.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? isScrolled
                          ? "text-orange-600 font-semibold"
                          : "text-orange-300 font-semibold"
                        : isScrolled
                        ? "text-gray-700 hover:text-orange-600"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className="ml-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <Link
                        href={link.href}
                        onClick={() => setIsStudyWorkOpen(!isStudyWorkOpen)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive(link.href)
                            ? "bg-gradient-to-r from-orange-500 to-orange-500 text-white font-semibold"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isStudyWorkOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      <AnimatePresence>
                        {isStudyWorkOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            
                            {
                              link.items.map((country) => (
                                <Link
                                  key={country.name}
                                  href={country.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {country.name}
                                </Link>
                              ))
                            }
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive(link.href)
                          ? "bg-gradient-to-r from-orange-500 to-orange-500 text-white font-semibold"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
