import React from 'react'
import AboutComp from '../components/aboutComp'

const About = () => {
    let blog = [
        {
            blogName: "Sports",
            blogHead: "Cricket",
            blogDesc: "Cricket is more than a sport; it's a passion that binds fans across the globe. From epic matches to iconic players, explore thrilling matches, dive into the world of cricket with our engaging blog!",
            blogImage: "/panacloud.png"
        },
        {
            blogName: "Sports",
            blogHead: "Football",
            blogDesc: "Football, the beautiful game, unites fans with its electrifying energy and unforgettable moments. Explore thrilling matches, legendary players, and everything football on our blog!",
            blogImage: "/panacloud.png"
        },
        {
            blogName: "Sports",
            blogHead: "Cricket",
            blogDesc: "Hockey, a fast-paced and exhilarating sport, is a showcase of skill, strategy, and teamwork. Stay updated with exciting matches, iconic players, and the latest news in the world of hockey through our blog!",
            blogImage: "/panacloud.png"
        }
    ]
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900 pb-3">Game On: Your Ultimate Sports Hub</h1>
  <div className="h-1 md:w-80 w-52 bg-indigo-500 rounded mx-auto"></div>
    <div className="flex flex-wrap -m-4 mt-12">
        {blog.map((blogDetails) => {
            return(
                    <AboutComp desc={blogDetails.blogDesc} head={blogDetails.blogHead} name={blogDetails.blogName} image={blogDetails.blogImage}/>
            )
        })
        }

    </div>
  </div>
</section>
  )
}

export default About