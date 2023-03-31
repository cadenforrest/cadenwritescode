import data from '@/data.json'

export const Feedback = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Recommendations 
          </h2>
          <div className="mt-12 space-y-8">
            {data.Reviews.map((review, index) => (
              <div key={index}>
                <blockquote className="mt-6">
                  <div className="max-w-3xl mx-auto text-center text-xl leading-9 font-medium text-gray-900">
                    <p>&ldquo;{review.reviewContent}&rdquo;</p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center justify-center">
                      <div className="text-base font-medium text-gray-900">
                        {review.reviewerName}
                      </div>
                      <div className="ml-3 text-base font-medium text-indigo-600">
                        {review.reviewerOccupation}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
