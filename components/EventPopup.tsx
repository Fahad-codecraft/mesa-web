"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image'

export function EventPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000) // Show popup after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open('/upcoming-events/#champions-league', '_blank', 'noopener,noreferrer')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[400px] bg-black">
        <DialogHeader>
          <DialogTitle className='text-3xl text-center'>Upcoming Event!</DialogTitle>
          <DialogDescription className='text-center'>
            Join us for an exciting event Champions Cricket Tournament
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/upcoming/Champions-small.webp"
            alt={`Poster for firestorm event`}
            width={200}
            height={125}
            className="mb-4 rounded-md"
          />
          <p>Date: Jan 18, 2025</p>
          <p>Prize Pool: 12K</p>
          {/* <p>Time: 2:00 PM EST</p> */}
          <Button
            variant="outline"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </div>
        <Button
          className="absolute right-4 top-4"
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only text-white">Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}

