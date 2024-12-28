import React from 'react'
import AboutComp from '../components/aboutComp'
import { client } from '@/sanity/lib/client';

const About = async () => {
  
    const blog = await client.fetch(`*[_type == "about"]`);
    console.log(blog);
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900 pb-3">Game On: Your Ultimate Sports Hub</h1>
  <div className="h-1 md:w-80 w-52 bg-indigo-500 rounded mx-auto"></div>
    <div className="flex flex-wrap -m-4 mt-12">
        {blog.map((blogDetails: any) => {
            return(
                    <AboutComp desc={blogDetails.desc} head={blogDetails.title} views={blogDetails.views} image={blogDetails.image} comments={blogDetails.comments}/>
            )
        })
        }

    </div>
  </div>
</section>
  )
}

export default About