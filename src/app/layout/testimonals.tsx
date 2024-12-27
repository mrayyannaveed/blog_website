import Image from 'next/image'
import React from 'react'
import TestimonalsComp from '../components/testimonalsComp'

const Testimonals = () => {
    let testimonials = [
        {
            testDesc: "People throw stones at you, and you convert them into milestones.",
            testImage: "/panacloud.png",
            testName: "Sachin Tendulkar",
            testPassion: "Cricketer"
        },
        {
            testDesc: "Self-belief and hard work will always earn you success.",
            testImage: "/panacloud.png",
            testName: "Virat Kohli",
            testPassion: "Cricketer"
        },
        {
            testDesc: "You miss 100% of the shots you don’t take.",
            testImage: "/panacloud.png",
            testName: "Wayne Gretzky",
            testPassion: "Hockey Player"
        },
        {
            testDesc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
            testImage: "/panacloud.png",
            testName: "Pelé",
            testPassion: "Footballer"
        },
    ]
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900 text-center pb-3">Testimonials</h1>
    <div className="h-1 w-44 bg-indigo-500 rounded mx-auto"></div>
    <div className="flex flex-wrap -m-4 mt-12">
      {testimonials.map((testimony: any) => {
        return(
            <TestimonalsComp desc={testimony.testDesc} image={testimony.testImage} name={testimony.testName} passion={testimony.testPassion}/>
        )
      })}
    </div>
  </div>
</section>
  )
}

export default Testimonals