import { Timeline } from '../ui/timeline';
import Image from 'next/image';
import CommonPast from './CommonPast';

const Past22_23 = () => {
  const data = [
    {
      title: "17th to 18th Dec 2022",
      content: (
        <CommonPast 
          title='Mindcrafts'
          description={`The event was organized for first and second year students of all branches to develop their thinking ability and speed through various rounds like quiz, rapid fire and treasure hunt. Treasure hunt was the main attraction of the event for all`}
          image='/2022-23/Mindcraft.webp'
        />
      )
    },
    {
      title: "5th to 6th Nov 2022",
      content: (
        <CommonPast 
        title='Chakravyuh'
        description={`The Sports fest Chakravyuh organized by team mesa with different sports competition like cricket, football, badminton and chess. The event was conducted with great enthusiasm and teamspirit`}
        image='/2022-23/chakravyuh.webp'
        />
      ),
    },
    {
      title: "24th Sep 2022",
      content: (
        <CommonPast 
        title='Yoga Session for teachers'
        description={`This yoga session was organised for teachers to get relief   from their hectic schedule and other problems under the guidance of prof. Sanjay salve sir. Yoga is an ancient practice that builds strength and awareness and brings together the mind and body`}
        image='/2022-23/yoga.webp'
        />
      ),
    },
    {
      title: "15th Sep 2022",
      content: (
        <CommonPast 
        title='Exhibition on the occasion of Engineers day'
        description={`On the occasion of Engineers day which is celebrated on the birth anniversary of country's greatest Engineer Mokshagundam Visvesvaraya. The event theme was MARVELS OF ENGINEERING. This event was organized for all branches engineering students of pccoe in offline mode.`}
        image='/2022-23/exhibition.webp'
        />
      ),
    },
    {
      title: "15th Sep 2022",
      content: (
        <CommonPast 
        title='TOYCAD Competition'
        description={`This event was organised for third and final year students to show their design skills and pitching skills for their product. This event was overall a fun and interesting for all.`}
        image='/2022-23/toycad.webp'
        />
      ),
    },
    {
      title: "14th Sep 2022",
      content: (
        <CommonPast 
        title='Essay writing competition'
        description={`On the occasion of Engineers Day we organized  the Essay Writing Contest for all the students of Pimpri Chinchwad College of Engineering. This event was organized to give students a opportunity for expressing their views on innovation and invention.`}
        image='/2022-23/essay contest.webp'
        />
      ),
    },
    {
      title: "13th Sep 2022",
      content: (
        <CommonPast 
        title='Quiz Competition'
        description={`On the occasion of the Engineers day a quiz competition was organized to help students prepare for competitive exams. This event was arranged with ISHRAE Pune chapter for third and final year students.`}
        image='/2022-23/quiz competition.webp'
        />
      ),
    },
    {
      title: "5th Sep 2022",
      content: (
        <CommonPast 
        title='Teachers Day Celebration'
        description={`The event was arranged to honor teachers for their guidance and help. Various fun games were also organized for them to enjoy the day.`}
        image='/2022-23/teachers day.webp'
        />
      ),
    },
    {
      title: "30th Aug 2022",
      content: (
        <CommonPast 
        title='Capgemini Conference'
        description={`Mesa pccoe organized a session in collaboration with T&P cell on “opportunities of core job profiles in Capgemini engineering" under model based systems engineering domain. The session was delivered by Mr. Girish Bora sir and Pierre Andre Vandelle.`}
        image='/2022-23/Capgemini.webp'
        />
      ),
    },
    
  ];
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
  );
}

export default Past22_23