'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const PVP = [
  { id: 1, name: 'Prajakta Wagh', role: 'President', image: '/PVPs/Prajakta.webp', linkedin: 'https://www.linkedin.com/in/prajakta-wagh-0388b3259/' },
  { id: 2, name: 'Shriram Nimbalkar', role: 'Vice-President', image: '/PVPs/Shriram.webp', linkedin: 'https://www.linkedin.com/in/shriram-nimbalkar-a411a0240/' },
  { id: 3, name: 'Shravani Mahajan', role: 'Vice-President', image: '/PVPs/Shravani M.webp', linkedin: 'https://www.linkedin.com/in/shravani-mahajan-1b4b26272/' },
]

const likethis = [
  { id: 11, name: 'Abhinav Ujjainkar', role: 'Treasurer', image: '/core/Abhinav.webp', linkedin: 'https://www.linkedin.com/in/abhinav-ujjainkar-5b19a5298/' },
  { id: 10, name: 'Kaushik Ashtekar', role: 'Secretary', image: '/core/Kaushik Ashtekar.webp', linkedin: 'https://www.linkedin.com/in/kaushik-ashtekar-b93478259/' },
  { id: 9, name: 'Shravani Wakchaure', role: 'HR', image: '/core/Shravani W.webp', linkedin: 'https://www.linkedin.com/in/shravani-wakchaure-62b47b259/' },
]

const teamDirectors = [
  { id: 1, name: 'Sujal Hanji', role: 'Social Media Head', image: '/teamDirectors/Sujal Hanji.webp', linkedin: 'https://www.linkedin.com/in/sujal-hanji-591b59284/' },
  { id: 2, name: 'Rajvardhan Kadam', role: 'Marketing Head', image: '/teamDirectors/Rajwardhan Kadam.webp', linkedin: 'https://www.linkedin.com/in/rajvardhan-kadam-23a838284/' },
  { id: 3, name: 'Siddhi Tiwari', role: 'Event Management Head', image: '/teamDirectors/siddhi.webp', linkedin: 'https://www.linkedin.com/in/siddhitiwari/' },
]

const socialmedia = [
  { id: 2, name: 'Parth Lekule', role: '', image: '/socialmediaimages/Parth Lekule.webp', linkedin: 'https://www.linkedin.com/in/parth-lekule-0494aa229/' },
  { id: 3, name: 'Tanmay Shah', role: '', image: '/socialmediaimages/Tanmay Shah.webp', linkedin: 'https://www.linkedin.com/in/tanmay-shah-b14884292/' },
  { id: 8, name: 'Raushan Kumar Jha', role: '', image: '/socialmediaimages/Raushan.webp', linkedin: 'https://www.linkedin.com/in/raushan-kumar-jha07/' },
  { id: 7, name: 'Harsh Gandhi', role: '', image: '/socialmediaimages/Harsh1.webp', linkedin: 'https://www.linkedin.com/in/harsh-gandhi-60021032b/' },
  { id: 9, name: 'Aniket Shinde', role: '', image: '/socialmediaimages/Aniket.webp', linkedin: '' },
  { id: 6, name: 'Atharva Lahare', role: '', image: '/socialmediaimages/Athrava.webp', linkedin: 'https://www.linkedin.com/in/atharvalahare/' },
  { id: 4, name: 'Dashmeet Singh Suri', role: '', image: '/socialmediaimages/Dashmeet.webp', linkedin: 'https://www.linkedin.com/in/dashmeet-singh-47b550292/' },
  { id: 5, name: 'Simran Dandge', role: '', image: '/socialmediaimages/simran.webp', linkedin: '' },
]

const marketing = [
  { id: 6, name: 'Mayur Dhore', role: '', image: '/marketing/Mayur Dhore.webp', linkedin: '' },
  { id: 7, name: 'Rushikesh Jagdale', role: ' ', image: '/marketing/Rushikesh.webp', linkedin: '' },
  { id: 8, name: 'Piyush Kharat', role: '', image: '/marketing/Piyush Kharat.webp', linkedin: 'https://www.linkedin.com/in/piyush-kharat-8b8784259/' },
  { id: 9, name: 'Prasad Gadekar', role: '', image: '/marketing/Prasad.webp', linkedin: 'https://www.linkedin.com/in/prasad-gadekar-3a6160253/' },
  // { id: 2, name: 'Aarya Deshpande', role: '', image: '/marketing/Arya.webp', linkedin: '' },
  // { id: 3, name: 'Aditya Patil', role: '', image: '/marketing/Aditya.webp', linkedin: '' },
]

const eventmanagement = [

  { id: 2, name: 'Sakshi Durugkar', role: '', image: '/eventmanagement/Sakshi.webp', linkedin: 'https://www.linkedin.com/in/sakshi-durugkar-4545b12aa/' },
  { id: 4, name: 'Sharayu Dange', role: '', image: '/eventmanagement/Sharayu.webp', linkedin: 'https://www.linkedin.com/in/sharayu-dange-b536472a8/' },
  { id: 5, name: 'Unnati Chaudhari', role: '', image: '/eventmanagement/Unnati.webp', linkedin: 'https://www.linkedin.com/in/unnati-chaudhari-871a0632a/' },
  { id: 6, name: 'Yuvraj Ghungarde', role: '', image: '/eventmanagement/Yuvraj.webp', linkedin: 'https://www.linkedin.com/in/yuvraj-ghungarde-b677b7259/' },
  { id: 7, name: 'Swaraj Raut', role: '', image: '/eventmanagement/Swaraj Raut.webp', linkedin: 'https://www.linkedin.com/in/swaraj-raut-49647b259/' },
  { id: 8, name: 'Anish Chincholkar', role: '', image: '/eventmanagement/anish.webp', linkedin: 'https://www.linkedin.com/in/anish-chincholkar-27534225a/' },
  // { id: 9, name: 'RanjeetSingh Suryavanshi', role: 'HR', image: '/eventmanagement/RanjeetSingh Suryavanshi.webp', linkedin: "" },
  { id: 10, name: 'Anushka Bhoite', role: '', image: '/eventmanagement/Anushka.webp', linkedin: "" },
  { id: 11, name: 'Shitija Sonawane', role: '', image: '/eventmanagement/kshitija.webp', linkedin: "" },
  // { id: 9, name: 'Abhishek Wanare', role: '', image: '/eventmanagement/abhishek.webp', linkedin: "" },
]

const cellHeads = [
  { id: 3, name: 'Samiksha Koli', role: 'Cultural and Social Activity', image: '/cellHeads/Samiksha.webp', linkedin: 'https://www.linkedin.com/in/samiksha-koli-0ba47726b/' },
  { id: 6, name: 'Aditi Mane', role: 'Society of Women Engineering Head', image: '/cellHeads/Aditi.webp', linkedin: '' },
  { id: 7, name: 'Atharva Wankar', role: 'Institute of Social Responsibility Head', image: '/cellHeads/Atharva Wankar.webp', linkedin: 'https://www.linkedin.com/in/atharva-wankar-022815259/' },
  { id: 8, name: 'Devraj Patil', role: 'Entrepreneurship and Higher study Head', image: '/cellHeads/Devraj.webp', linkedin: 'https://www.linkedin.com/in/devraj-patil-b513b022b/' },
]

const seniorAdvisors = [
  { id: 1, name: 'Aastha Hajare', role: 'Senior Advisor', image: '/seniorAdvisors/Aastha.webp', linkedin: 'https://www.linkedin.com/in/aastha-hajare-601935249/' },
  { id: 2, name: 'Anirudh Gahane', role: 'Senior Advisor', image: '/seniorAdvisors/Anirudh.webp', linkedin: 'https://www.linkedin.com/in/anirudh-gahane-ba453b24a/' },
  { id: 3, name: 'Tanaya Sutar', role: 'Senior Advisor', image: '/seniorAdvisors/Tanaya.webp', linkedin: 'https://www.linkedin.com/in/tanaya-sutar-6bb334225/' },
  { id: 3, name: 'Shrutika Kale', role: 'Senior Advisor', image: '/seniorAdvisors/Shrutika.webp', linkedin: 'https://www.linkedin.com/in/shrutika-kale-908811243/' },
  { id: 3, name: 'Abhishek Salunkhe', role: 'Senior Advisor', image: '/seniorAdvisors/Abhishek.webp', linkedin: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236/' },
  { id: 3, name: 'Pritesh Amrutkar', role: 'Senior Advisor', image: '/seniorAdvisors/Pritesh.webp', linkedin: 'https://www.linkedin.com/in/pritesh-amrutkar/' },
  { id: 3, name: 'Pratik Rohokale', role: 'Senior Advisor', image: '/seniorAdvisors/Pratik.webp', linkedin: 'https://www.linkedin.com/in/pratik-rohokale/' },
  { id: 3, name: 'Priyanka Shirdhonkar', role: 'Senior Advisor', image: '/seniorAdvisors/Priyanka.webp', linkedin: 'https://www.linkedin.com/in/priyanka-shirdhonkar-017a5b239/' },
]

const websiteteam = [
  { id: 1, name: 'Fahad Devnikar', role: '', image: '/website/Fahad.webp', linkedin: 'https://www.linkedin.com/in/fahad-devnikar-a2a931227/' },
  { id: 2, name: 'Soham Desai', role: '', image: '/website/Soham.webp', linkedin: 'https://www.linkedin.com/in/soham-desai-991a4821b/' },
]


const outside = [
  { id: 9, name: 'Abhishek Wanare', role: '', image: '/eventmanagement/abhishek.webp', linkedin: "" },
  { id: 2, name: 'Aarya Deshpande', role: '', image: '/marketing/Arya.webp', linkedin: '' },
  { id: 3, name: 'Aditya Patil', role: '', image: '/marketing/Aditya.webp', linkedin: '' },
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
      <h2 className="text-xl font-semibold">{member.name}</h2>
      <p className="text-gray-400 max-w-[250px]">{member.role}</p>
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
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-10 mt-10">
      <h1 className="text-5xl font-bold mb-12 text-center border-b">Our Team</h1>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-3xl font-bold mb-12 text-center'>President and Vice-President</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full gap-8 justify-center`}>
          {PVP.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
          {likethis.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}

        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Team Directors</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-full'>
          {teamDirectors.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Cell Heads</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-full'>
          {cellHeads.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Social Media Team</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-full'>
          {socialmedia.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Marketing Team</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-full'>
          {marketing.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
        {/* For members to do center */}
        <div className='gap-8 mt-8 max-w-full flex '>
          <TeamMember key={outside[1].id} member={outside[1]} index={1} />
          <TeamMember key={outside[2].id} member={outside[2]} index={2} />
        </div>

      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Event Management Team</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-full'>
          {eventmanagement.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
        {/* For members to do center */}
        <div className='gap-8 mt-8 max-w-full flex'>
          <TeamMember key={outside[0].id} member={outside[0]} index={0} />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Website Team</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 max-w-full'>
          {websiteteam.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl lg:text-5xl font-bold my-12 text-center'>Senior Advisors</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-full'>
          {seniorAdvisors.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

    </div>


  )
}
