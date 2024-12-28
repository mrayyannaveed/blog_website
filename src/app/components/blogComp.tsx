import React from 'react'

const BlogComp = (props:any) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap bg-white shadow-sm px-5 mb-5 w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%]">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">{props.cat}</span>
          <span className="mt-1 text-gray-500 text-sm">{props.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{props.head}</h2>
          <p className="leading-relaxed">{props.desc}</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
  )
}

export default BlogComp