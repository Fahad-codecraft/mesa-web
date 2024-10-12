"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Past Events", 
    href: "/past-events",
    subItems: [
      { name: "2022-23", href: "/past-events/2022-23" },
      { name: "2021-22", href: "/past-events/2021-22" },
      { name: "2020-21", href: "/past-events/2020-21" },
    ]
  },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false) // Mobile submenu toggle

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center py-3">
              <motion.span
                className="flex items-center justify-center font-semibold text-white text-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={"/logo.webp"} height={60} width={60} alt="logo" />
                <h1 className="text-[30px] font-light">Team Mesa</h1>
              </motion.span>
            </Link>
          </div>

          {/* Links Section (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                onMouseEnter={() => item.subItems && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="py-4 px-2 text-[18px] text-white font-bold hover:opacity-60 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>

                {/* Dropdown for "Past Events" */}
                {item.subItems && isHovered && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-40 bg-black shadow-lg rounded-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-100 hover:bg-gray-900"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => item.subItems && setIsSubMenuOpen(!isSubMenuOpen)} // Toggle for submenu
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown for "Past Events" in mobile view */}
                  {item.subItems && isSubMenuOpen && (
                    <motion.div
                      className="pl-4 mt-2 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-100 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
