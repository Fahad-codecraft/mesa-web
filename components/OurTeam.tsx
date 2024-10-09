import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

interface TeamMember {
  name: string
  title: string
  image: string
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Shriram Nimbalkar",
    title: "Vice President",
    image: "/PVPs/Shriram.webp",
    linkedin: "https://www.linkedin.com/in/jane-smith"
  },
  {
    name: "Prajakta Wagh",
    title: "President",
    image: "/PVPs/Prajakta.webp",
    linkedin: "https://www.linkedin.com/in/john-doe"
  },
  {
    name: "Shravani Mahajan",
    title: "Vice President of Marketing",
    image: "/PVPs/Shravani Mahajan.webp",
    linkedin: "https://www.linkedin.com/in/emily-johnson"
  }
]

export default function MeetOurTeam() {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <hr />
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-200 text-center mb-12 mt-7">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col items-center ${
                index === 1 ? 'sm:order-2' : index === 0 ? 'sm:order-1' : 'sm:order-3'
              }`}
            >
              <div className="relative w-60 h-60 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full hover:scale-105 transition-all duration-500"

                />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{member.title}</p>
              <Link 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn profile of {member.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-8 text-right'>
        <Link className='font-semibold' href={"/about"}>
          Know More about Our Team....
        </Link>
      </div>
    </section>
  )
}