import Image from 'next/image'
import data from '@/data.json' 

export const About = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            {data.About.Description}
          </p>
          <div className="mt-8 flex">
            <a href="/resume.pdf" className="mr-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                Download Resume
              </button>
            </a>
            <a href="/resume.json" className="mr-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                Download Resume as JSON 
              </button>
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 flex justify-center ">
        <div className="relative rounded-full border-2 border-gray-400 overflow-hidden w-40 h-40">
            <Image
              src="/avatar.png"
              alt="Picture of the author"
              width={250}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">
             Caden Westmoreland 
            </h3>
            <p className="text-gray-500">
             Software Engineer 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
