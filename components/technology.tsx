import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faNodeJs, faReact, faGolang } from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image' 

export const Technology = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Technologies</h2>
          <p className="mt-4 text-lg text-gray-500">
            Here are some of the technologies that I have been working with recently:
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faReact} className="w-12 h-12 text-blue-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">React</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/rails.svg"
                alt="rails logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="mt-2 text-sm font-medium text-gray-900">Ruby on Rails</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/vercel.png"
                alt="vercel logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="mt-2 text-sm font-medium text-gray-900">Vercel</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/typescript.png"
                alt="typescript logo"
                width={48}
                height={48}
                className="square-full"
              />
              <span className="mt-2 text-sm font-medium text-gray-900">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/next-js.svg"
                alt="NextJS logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="mt-2 text-sm font-medium text-gray-900">Next</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/tailwind.png"
                alt="TailwindCSS logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="mt-2 text-sm font-medium text-gray-900">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faNodeJs} className="w-12 h-12 text-green-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGolang} className="w-12 h-12 text-blue-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">Go</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faAws} className="w-12 h-12 text-yellow-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faServer} className="w-12 h-12 text-purple-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
