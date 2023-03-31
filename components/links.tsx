export const Links = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Links
          </h2>
          <div className="mt-4 space-y-4">
            <a href="/path/to/resume.pdf" className="text-lg text-gray-900 underline">
              Resume
            </a>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <svg className="h-8 w-8 text-blue-700 hover:text-blue-500 transition duration-150" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-5h4v5zm-2-6.7c-1 0-1.7-.8-1.7-1.7S8 7.6 9 7.6s1.7.8 1.7 1.7-.8 1.7-1.7 1.7zM17 17h-3.3v-2.3c0-.6-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2V17H9v-5h3.3v.9c.5-.7 1.5-1.2 2.5-1.2 1.9 0 3.5 1.5 3.5 3.4V17z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
