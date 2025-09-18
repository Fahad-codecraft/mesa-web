'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const PVP = [
  { id: 1, name: 'Ashay Jambhorkar ', role: 'President', image: '/coreteam/Ashay.webp', linkedin: '' },
  { id: 2, name: 'Aditya Patil', role: 'Vice-President', image: '/coreteam/Aditya.webp', linkedin: '' },
  { id: 3, name: 'Simran Dandge', role: 'Female Representative', image: '/coreteam/simran.webp', linkedin: '' },
]

const likethis = [
  { id: 4, name: 'Fahad Devnikar', role: 'HRM', image: '/coreteam/Fahad.webp', linkedin: '' },
  { id: 5, name: 'Abhishek Wanare', role: 'Treasurer', image: '/coreteam/abhishek.webp', linkedin: '' },
]

const domainHeads = [
  { id: 4, name: 'Dashmeet Singh Suri', role: 'Social Media Head', image: '/coreteam/Dashmeet.webp', linkedin: '' },
  { id: 5, name: 'Rugved Chemate', role: 'Event Management Head', image: '/coreteam/Rugved.webp', linkedin: '' },
  { id: 6, name: 'Ranjeetsingh Suryavanshi', role: 'Marketing Head', image: '/coreteam/Ranjeet.webp', linkedin: '' },
  { id: 7, name: 'Karan Kale', role: 'Senior Editor', image: '/coreteam/Karan.webp', linkedin: '' },

]

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
    <div className="relative"> {/* 3:4 aspect ratio */}
      <Image
        src={member.image}
        alt={member.name}
        height={348}
        width={290}
        className="rounded-xl inset-0 transition-transform duration-400 hover:scale-[103%]"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold break-words max-w-[250px]">{member.name}</h2>
      <p className="text-gray-400 max-w-[250px]">{member.role}</p>
      {/* <Link
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center text-blue-500 hover:text-blue-400"
      >
        <Linkedin className="w-5 h-5 mr-2" />
        LinkedIn Profile
      </Link> */}
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
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-10 mt-10">
      <h1 className="text-5xl font-bold mb-12 text-center border-b">Our Core Team</h1>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-3xl font-bold mb-12 text-center'></h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full gap-8 justify-center`}>
          {PVP.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
          {likethis.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
          {domainHeads.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>


  )
}
