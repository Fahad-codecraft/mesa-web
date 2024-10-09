import React from 'react'
import { Timeline } from '../ui/timeline'
import CommonPast from './CommonPast'

const Past21_22 = () => {

  const data = [
    {
      title: "25th April 2022",
      content: (
        <CommonPast 
          title='MBSE Lab by Capgemini'
          description={`This event was for the condition of inauguration of MBSE Lab under TEAM MESA. This inaugural ceremony was organised and managed by TEAM MESA in 25th April 2022`}
          image='/2021-22/MBSE lab.webp'
        />
      )
    },
    {
      title: "27th March 2022",
      content: (
        <CommonPast 
          title='Mesa Cricket League'
          description={`Cricket is one of the most popular outdoor game played in many parts of the world. To encourage students for playing outdoor games, for playing as a team, for having fun we organized this event.`}
          image='/2021-22/cricket.webp'
        />
      )
    },
    {
      title: "3rd March 2022",
      content: (
        <CommonPast 
          title='Guest lecture on "Electric vehicles and Hybrid vehicles"'
          description={`This event was organised to learn something new about EV and HV From very talented persons Dr.Sanjay patil and Mr.prasad Diwanji`}
          image='/2021-22/ARIA.webp'
        />
      )
    },
    {
      title: "19th Feb 2022",
      content: (
        <CommonPast 
          title='Art Competition'
          description={`To give a small tribute to The Great Chatrapati Shivaji Maharaj , we have organised this event of essay and poem writing along with digital poster making and drawing`}
          image='/2021-22/19th feb.webp'
        />
      )
    },
    {
      title: "10th Feb 2022",
      content: (
        <CommonPast 
          title='Model Based System Engineering (MBSE)'
          description={`MBSE and MBPLE are the concepts developed by system engineers to solve difficulty faced in production. And to provide much more information about that we organized this event`}
          image='/2021-22/MBSE online.webp'
        />
      )
    },
  ]

  return (
    <div className="w-full">
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-8xl text-center mb-4 text-white">
          Mesa Past Events
        </h2>
        <p className="text-neutral-200 text-center text-sm md:text-3xl max-w-sm">
          2022-23
        </p>
      </div> */}

      <Timeline data={data} />
    </div>
  )
}

export default Past21_22