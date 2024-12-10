"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"

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

  return (
    <Card className="mb-4">
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
        <p className="text-sm text-muted-foreground">Date: {event.date}</p>
        {event.isFinished && (
          <Badge variant="secondary" className="mt-2">
            Event Finished
          </Badge>
        )}
        {!event.isFinished && event.isRegistrationClosed && (
          <Badge variant="secondary" className="mt-2">
            Registration Closed
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" disabled={event.isFinished || event.isRegistrationClosed}>
          Register
        </Button>
        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
          Read Rules
        </Button>
      </CardFooter>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Rules for {event.title}</h2>
        <p className="whitespace-pre-line">{event.rules}</p>
      </Modal>
    </Card>
  )
}

export default function Upcoming() {
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

