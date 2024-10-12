import Past20_21 from '@/components/events/Past20_21'
import Past21_22 from '@/components/events/Past21_22'
import Past22_23 from '@/components/events/Past22_23'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Team Mesa | Past Events',
  description: '...',
}

const page = () => {
  return (
    <div className='w-full'>
      <Past22_23 />
      <Past21_22 />
      <Past20_21 />
    </div>
  )
}

export default page