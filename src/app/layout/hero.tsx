import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
    return(
        <div>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 my-16 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image className="object-cover object-center rounded" alt="hero" src={"/panacloud.png"} width={600} height={700}></Image>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl pb-3 font-medium text-gray-900">Welcome to our Sports Blog Folio
                </h1>
                <div className="h-1 lg:w-80 md:w-64 w-52 bg-indigo-500 rounded mx-auto"></div>
                <p className="mb-8 leading-relaxed mt-5">Cricket, a sport cherished globally, unites millions with its thrilling blend of skill and strategy. From the electrifying pace of T20 matches to the enduring charm of Test cricket, every format offers unique excitement. Iconic players and historic rivalries add layers of passion, making each match a spectacle. Whether it's a last-ball finish or a record-breaking inning, cricket continues to captivate fans across generations.</p>
                <div className="flex justify-center">
                    <Link href={"/about"}>
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">About</button>
                    </Link>
                    <Link href={"/blog"}>
                    <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">Blog</button>
                    </Link>
                </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Hero