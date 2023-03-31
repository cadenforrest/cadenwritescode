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
  jobDescription:  String[];
  jobTitle: String;
}) => {
  return (
    <div className="relative">
      <dt>
        <div className="ml-9">
          <div className="text-lg leading-6 font-medium text-gray-900">
            {companyName}
          </div>
          <div className="text-md leading-6 font-medium text-gray-900">
            {jobTitle}
          </div>
          {jobDescription.map((bullet, index) =>{
            return(<li key={index} className="mt-2 text-base text-gray-500">{bullet}</li>)
          })}
        </div>
      </dt>
    </div>
  );
};
