import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <hr />
      <div className="container mx-auto px-4 pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.webp" alt="Team MESA logo" width={80} height={80} className="mb-4" />
            <h2 className="text-lg font-semibold mb-2">Team MESA</h2>
            <p className="text-sm">We are Mechanical Engineering Student's Association</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <address className="text-sm not-italic">
              <p>Pimpri Chinchwad College of Engineering,</p>
              <p>Sector No. 26, Pradhikaran, Nigdi,</p>
              <p>Pimpri-Chinchwad, Maharashtra, INDIA</p>
              <p>411044</p>
            </address>
            <div className="mt-4">
              <p className="text-sm font-semibold">Email:</p>
              <Link
                href="mailto:mesapccoeofficial@gmail.com"
                className="text-sm hover:underline"
              >
                mesapccoeofficial@gmail.com
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:underline">Home</Link>
              <Link href="/about" className="text-sm hover:underline">About Us</Link>
              <Link href="/past-events" className="text-sm hover:underline">Past Events</Link>
              <Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <Link href="/" aria-label="Instagram">
                <Instagram className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="/" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="/" aria-label="YouTube">
                <Youtube className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="/" aria-label="Facebook">
                <Facebook className="w-6 h-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="mt-8 border-border" />
        
        <p className="text-center text-sm my-3">
          &copy; {new Date().getFullYear()} Team MESA - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}