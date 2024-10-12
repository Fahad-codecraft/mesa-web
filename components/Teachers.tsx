"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FacultyMemberProps {
  image: string;
  name: string;
  position: string;
  description: string;
  reverse?: boolean;
}

export default function Teachers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const FacultyMember = ({ image, name, position, description, reverse = false }: FacultyMemberProps) => (
    <motion.div
      className={`mb-16 md:flex md:items-center ${reverse ? "md:flex-row-reverse" : ""} md:space-x-8 ${
        reverse ? "md:space-x-reverse" : ""
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="md:w-1/3 mb-6 md:mb-0" variants={itemVariants}>
        <Image
          src={image}
          alt={`${name} - ${position}`}
          width={300}
          height={300}
          className="rounded-xl shadow-lg mx-auto"
        />
      </motion.div>
      <div className="md:w-2/3 text-center md:text-left max-w-3xl"> {/* Center text on mobile, align left on larger screens */}
        <motion.div className="md:hidden mb-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-200">{position}</p>
        </motion.div>
        <motion.p className="text-gray-200 mb-4" variants={itemVariants}>
          {description}
        </motion.p>
        <motion.div className="hidden md:block" variants={itemVariants}>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-200">{position}</p>
        </motion.div>
      </div>
    </motion.div>
  );

  if (!isClient) {
    return null; // Return null on server-side to avoid hydration mismatch
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        <FacultyMember
          image="/Hod.webp"
          name="Dr. Pravin. R. Kale"
          position="Professor of Computer Science"
          description="Dr. Jane Doe is a renowned expert in artificial intelligence and machine learning. 
            With over 15 years of experience in the field, she has published numerous papers 
            and led groundbreaking research projects. Her work focuses on developing AI 
            systems that can understand and generate human language."
        />
        <hr />
        <FacultyMember
          image="/Faculty_co.webp"
          name="Dr. Varsha Gaikhe"
          position="Associate Professor of Computer Science"
          description="Dr. John Smith specializes in cybersecurity and network systems. His research 
            contributes to developing robust security protocols for large-scale networks. 
            Dr. Smith is also passionate about teaching and mentoring the next generation 
            of computer scientists."
          reverse
        />
      </div>
    </section>
  );
}