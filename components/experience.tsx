import data from "@/data.json";
export const Experience = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Experience</h2>
          <p className="mt-4 text-lg text-gray-500">
            {data.Experience.Description}
          </p>
          <div className="mt-10">
            <div className="mt-4 space-y-4">
              {data.Experience.Jobs.map(
                ({ CompanyName, JobDescription, JobTitle }) => {
                  return (
                    <>
                      <Job
                        key={CompanyName}
                        companyName={CompanyName}
                        jobDescription={JobDescription}
                        jobTitle={JobTitle}
                      />
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Job = ({
  companyName,
  jobDescription,
  jobTitle,
}: {
  companyName: String;
  jobDescription: String;
  jobTitle: String;
}) => {
  return (
    <div className="relative">
      <dt>
        <span className="absolute h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 8a4 4 0 118 0 4 4 0 01-8 0zm12 0a4 4 0 118 0 4 4 0 01-8 0zM2 14c0-2.67 5.33-4 8-4s8 1.33 8 4v2H2v-2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div className="ml-9">
          <div className="text-lg leading-6 font-medium text-gray-900">
            {companyName}
          </div>
          <div className="text-md leading-6 font-medium text-gray-900">
            {jobTitle}
          </div>
          <div className="mt-2 text-base text-gray-500">{jobDescription}</div>
        </div>
      </dt>
    </div>
  );
};
