import About from "./about/page";
import Blog from "./blog/page";
import Hero from "./layout/hero";
import Testimonals from "./layout/testimonals";

export default function Home() {
  return (
    <div className="grid gap-20">
      <Hero/>
      <About/>
      <Testimonals/>
      <Blog/>
    </div>
  )
}