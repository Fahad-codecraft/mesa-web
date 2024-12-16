"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { AlertTriangle, XCircle } from "lucide-react"

// This would typically come from an API or database
const events = [
  {
    id: 1,
    title: "Annual Tech Conference",
    date: "2024-06-15",
    isFinished: false,
    isRegistrationClosed: false,
    poster: "/placeholder.svg?height=300&width=400",
    rules: "1. All attendees must register in advance. 2. Bring your own laptop. 3. Be respectful to speakers and other attendees.",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "2024-05-20",
    isFinished: false,
    isRegistrationClosed: true,
    poster: "/placeholder.svg?height=300&width=400",
    rules: "1. Basic knowledge of HTML/CSS is required. 2. Workshops are hands-on, come prepared to code. 3. Bring your own development environment setup.",
  },
  {
    id: 3,
    title: "AI Symposium",
    date: "2024-04-10",
    isFinished: true,
    isRegistrationClosed: true,
    poster: "/placeholder.svg?height=300&width=400",
    rules: "1. Presentations should not exceed 20 minutes. 2. Q&A session follows each presentation. 3. Respect intellectual property rights in all discussions.",
  },
  {
    id: 4,
    title: "Startup Pitch Competition",
    date: "2024-07-05",
    isFinished: false,
    isRegistrationClosed: false,
    poster: "/placeholder.svg?height=300&width=400",
    rules: "1. Pitches limited to 5 minutes. 2. Startups must be less than 2 years old. 3. Judges' decision is final.",
  },
]

function EventCard({ event }: {
  event: {
    id: number
    title: string
    date: string
    isFinished: boolean
    isRegistrationClosed: boolean
    poster: string
    rules: string
  }
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isRegistrationOpen = !event.isFinished && !event.isRegistrationClosed

  return (
    <Card className={`mb-4 relative overflow-hidden ${isRegistrationOpen && mounted ? 'animate-border' : 'border'
      }`}>
      <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ${isRegistrationOpen && mounted ? 'animate-gradient' : 'hidden'
        }`} />
      <div className="relative bg-black m-[3px] rounded-lg">
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={event.poster}
            alt={`Poster for ${event.title}`}
            width={400}
            height={300}
            className="w-full h-auto mb-4 rounded-md"
          />
          {(event.isFinished || event.isRegistrationClosed) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-md">
              <div className="text-white text-center">
                {event.isFinished ? (
                  <>
                    <XCircle className="w-16 h-16 mx-auto mb-2" />
                    <span className="text-2xl font-bold">Event Finished</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-16 h-16 mx-auto mb-2" />
                    <span className="text-2xl font-bold">Registration Closed</span>
                  </>
                )}
              </div>
            </div>
          )}
          <div className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-full inline-block mb-2">
            {event.date}
          </div>
          {event.isFinished && (
            <Badge variant="secondary" className="ml-2">
              Event Finished
            </Badge>
          )}
          {!event.isFinished && event.isRegistrationClosed && (
            <Badge variant="secondary" className="ml-2">
              Registration Closed
            </Badge>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {isRegistrationOpen ? (
            <Button variant="outline" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Register
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Register
            </Button>
          )}
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            Read Rules
          </Button>
        </CardFooter>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Rules for {event.title}</h2>
        <p className="whitespace-pre-line">{event.rules}</p>
      </Modal>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

