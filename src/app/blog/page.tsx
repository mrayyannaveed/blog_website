import BlogComp from "../components/blogComp"

const Blog = () => {
  let blogData = [
    {
      blogCat: "Cricket",
      blogDate: "28 Dec 2024",
      blogHead: "The Art of Timing: Mastering Cricket's Finest Skill",
      blogDesc: "Cricket is not just a game of power; it's a symphony of precision and timing. Whether it's a perfectly executed cover drive or a last-over yorker, every moment requires skillful mastery and unwavering focus."
    },
    {
      blogCat: "Hockey",
      blogDate: "28 Dec 2024",
      blogHead: "Blades of Glory: The Pulse of Ice and Field",
      blogDesc: "Hockey is a sport where speed meets strategy, and every pass or hit carries the weight of the game. It's a test of teamwork, precision, and resilience that captivates fans worldwide."
    },
    {
      blogCat: "Football",
      blogDate: "28 Dec 2024",
      blogHead: "The Beautiful Game: Passion Beyond Borders",
      blogDesc: "Football is more than just a sport; it’s a universal language that unites millions. Each goal, tackle, and pass tells a story of ambition, skill, and raw emotion."
    },
  ]
  return (
<section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6]">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      {blogData.map((data) => {
        return(
          <BlogComp cat={data.blogCat} date={data.blogDate} head={data.blogHead} desc={data.blogDesc}/>
        )
      })
      }
    </div>
  </div>
</section>
  )
}

export default Blog