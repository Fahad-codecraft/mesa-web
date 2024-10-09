'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

// Mock data for team members
const teamMembers = [
  { id: 1, name: 'John Doe', role: 'CEO', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
  { id: 2, name: 'Jane Smith', role: 'CTO', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
  { id: 3, name: 'Mike Johnson', role: 'Designer', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
  { id: 4, name: 'Emily Brown', role: 'Developer', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
  { id: 5, name: 'Chris Lee', role: 'Marketing', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
  { id: 6, name: 'Sarah Davis', role: 'HR', image: '/PVPs/Shriram.webp', linkedin: 'https://linkedin.com' },
]

// Reusable TeamMember component
interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedin: string;
  };
  index: number;
}

const TeamMember = ({ member, index }: TeamMemberProps) => (
  <motion.div
    key={member.id}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
  >
    <div className="relative pb-[100%]"> {/* 3:4 aspect ratio */}
      <Image
        src={member.image}
        alt={member.name}
        layout="fill"
        objectFit="cover"
        className="absolute rounded-xl inset-0 transition-transform duration-300 hover:scale-[103%]"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold">{member.name}</h2>
      <p className="text-gray-400">{member.role}</p>
      <Link
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center text-blue-500 hover:text-blue-400"
      >
        <Linkedin className="w-5 h-5 mr-2" />
        LinkedIn Profile
      </Link>
    </div>
  </motion.div>
)

export default function About() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Prevent SSR issues with Framer Motion
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  )
}
