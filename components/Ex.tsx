import FancyTestimonialsSlider from './Testimonial'

export default function Ex() {  

  const testimonials = [
    {
      img: "/PVPs/Prajakta.webp",
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Jessie J',
      role: 'Acme LTD'
    },
    {
      img: "/PVPs/Prajakta.webp",
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      img: "/PVPs/Prajakta.webp",
      quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: 'Amelia W',
      role: 'Panda AI'
    }
  ]

  return (
    <FancyTestimonialsSlider testimonials={testimonials} />
  )
}