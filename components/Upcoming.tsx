"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { XCircle, AlertTriangle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { TextGenerateEffect } from "@/components/ui/text-generate"

const events = [
  {
    id: 1,
    title: "Champions League",
    date: "18-01-2025",
    isFinished: true,
    isRegistrationClosed: true,
    poster: "/upcoming/Champions.webp",
    formLink: "https://docs.google.com/forms/d/19RrIlCgttPpaP2fTPC-9FmmMzzGTo6f5w6kB0pf3T18",
    rules: `1. **League Stage**: 7 Overs Matches
  2. **Semi-finals & Finals**: 10 Overs Matches
  3. **Eligibility**: Only students from the Same Year, Same Department can participate in this tournament.
  Team Registration: Register your full team of 7 players , 3 Sub (optional)`,
  },
]

function EventCard({ event, onOpenModal }: {
  event: {
    id: number
    title: string
    date: string
    isFinished: boolean
    isRegistrationClosed: boolean
    poster: string
    rules: string
  }
  onOpenModal: (eventId: number) => void
}) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isRegistrationOpen = !event.isFinished && !event.isRegistrationClosed

  const handleCardClick = () => {
    onOpenModal(event.id)
  }

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open('https://docs.google.com/forms/d/19RrIlCgttPpaP2fTPC-9FmmMzzGTo6f5w6kB0pf3T18', '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      className={`mb-4 relative overflow-hidden cursor-pointer transition-transform hover:shadow-lg hover:scale-[1.02] ${isRegistrationOpen && mounted ? 'animate-border' : 'border'
        } ${(event.isFinished || event.isRegistrationClosed) ? '' : ''}`}
      onClick={handleCardClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ${isRegistrationOpen && mounted ? 'animate-gradient' : 'hidden'
        }`} />
      <div className="relative bg-black m-[3px] rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{event.title}</CardTitle>
          <div className="bg-white text-black font-semibold py-2 px-4 rounded-full text-sm">
            {event.date}
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Image
              src={event.poster}
              alt={`Poster for ${event.title}`}
              width={300}
              height={150}
              className="w-full h-auto rounded-md"
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
            <Button
              variant="outline"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Register
            </Button>
          )}
          <Button variant="secondary" onClick={(e) => {
            e.stopPropagation()
            onOpenModal(event.id)
          }}>
            Read Rules
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default function EventsPage() {
  const [openModalId, setOpenModalId] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      const event = events.find(e => e.title.toLowerCase().replace(/\s+/g, '-') === hash)
      if (event) {
        setOpenModalId(event.id)
      }
    }

    handleHashChange() // Check hash on initial load
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleOpenModal = (eventId: number) => {
    const event = events.find(e => e.id === eventId)
    if (event) {
      const eventSlug = event.title.toLowerCase().replace(/\s+/g, '-')
      router.push(`/upcoming-events/#${eventSlug}`)
      setOpenModalId(eventId)
    }
  }

  const handleCloseModal = () => {
    router.push('/upcoming-events')
    setOpenModalId(null)
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-center text-white">
        <TextGenerateEffect words="Upcoming Events" className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-center" />
      </h1>
      <div className="flex justify-center">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onOpenModal={handleOpenModal} />
        ))}
      </div>
      {events.map((event) => (
        <Modal key={event.id} isOpen={openModalId === event.id} onClose={handleCloseModal}>
          <div className="space-y-2">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <div className="flex justify-end">
                {!event.isFinished && !event.isRegistrationClosed ? (
                  <Button
                    variant="outline"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    onClick={() => window.open(event.formLink, '_blank', 'noopener,noreferrer')}
                  >
                    Register
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    Register
                  </Button>
                )}
              </div>
            </div>
            <Image
              src={event.poster}
              alt={`Poster for ${event.title}`}
              width={400}
              height={300}
              className="w-full h-auto mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">Rules:</h3>
            <ReactMarkdown className="whitespace-pre-line">{event.rules}</ReactMarkdown>
          </div>
        </Modal>
      ))}
    </div>
  )
}

