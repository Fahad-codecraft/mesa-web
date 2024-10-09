import React from 'react'
import { Timeline } from '../ui/timeline'
import CommonPast from './CommonPast'

const Past20_21 = () => {

  const data = [
    {
      title: "8th to 12th Feb 2021",
      content: (
        <CommonPast 
          title='CREO Workshop'
          description={`To make students learn about latest designing software CREO which is currently in demand by the Mechanical Engineering Industries, MESA successfully organized a worshop of CREO software with Mr. Vishal Kale from Impetus Group. Total of 120 students were a part of this workshop`}
          image='/2020-21/CREO workshop.webp'
        />
      )
    },
    {
      title: "9th Feb 2021",
      content: (
        <CommonPast 
          title='Road Safety Webinar'
          description={`To make students aware about road safety and avoid accident and to become a responsible citizen, MESA successfully organized a webinar on Road safety Awareness conducted by Ms. Tejashree Kulkarni via RTO PCMC. Total of 177 students were part of this webinar`}
          image='/2020-21/Road safety webniar.webp'
        />
      )
    },
    {
      title: "9th Jan 2021",
      content: (
        <CommonPast 
          title='Pravaig Dynamics webinar'
          description={`To provide the students a brief knowledge about being part of a upgrowing startup company and to get an idea of the journey from college to being part of pravaig, MESA successfully organized a webinar regarding this. Total of 55 students registered from all academic years`}
          image='/2020-21/Pravaig Dynamics webinar.webp'
        />
      )
    },
    {
      title: "22nd to 24th Jan 2021",
      content: (
        <CommonPast 
          title='Chess 2.0'
          description={`In order to develop patience and thoughtfulness and to learn and increase cognitive skills, MESA successfully conducted an online chess tournament. It was open for students of all branches. Almost 50 students participated in this event and two winners were announced`}
          image='/2020-21/chess 2.0.webp'
        />
      )
    },
    {
      title: "26th Nov 2020",
      content: (
        <CommonPast 
          title='Chess Club'
          description={`Chess Club was formed for the interested students to showcase their talent. 50 students participated in the event`}
          image='/2020-21/chess club.webp'
        />
      )
    },
    {
      title: "29th to 30th Oct 2020",
      content: (
        <CommonPast 
          title='Crenovate'
          description={`A Technical Event - Virtual Design Competition was conducted in an online mode. Cutia and Fusion360 software were used where 33 students participated out of which 3 student were declared as Winners`}
          image='/2020-21/Crenovate.webp'
        />
      )
    },
    {
      title: "25th Sept 2020",
      content: (
        <CommonPast 
          title='Eco Friendly Ganesh Visarjan Competition'
          description={`In the view to create awareness about Environment and promote Eco-friendly Ganesh Visarjan a competition qas conducted in an Online mode where 20 students participated and Winners were declared`}
          image='/2021-22/MBSE online.webp'
        />
      )
    },
    {
      title: "26th Nov 2020",
      content: (
        <CommonPast 
          title='Chess Club'
          description={`Chess Club was formed for the interested students to showcase their talent. 50 students participated in the event`}
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

export default Past20_21