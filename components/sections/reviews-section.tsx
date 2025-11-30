export function ReviewsSection() {
  const reviews = [
    {
      initials: "Z",
      name: "Zach Martinez",
      text: "Specialty Capital provided exceptional service throughout the entire process. Their team was professional, knowledgeable, and made securing funding for my business incredibly smooth.",
    },
    {
      initials: "B",
      name: "Bethany Hunt",
      text: "Kevin at Specialty Capital is outstanding! He was professional, knowledgeable, and made the entire process smooth and stress-free. His clear communication and dedication truly set them apart.",
    },
    {
      initials: "J",
      name: "Jo Marks",
      text: "Outstanding Service and Financial Expertise! Their team is professional, knowledgeable, and truly dedicated to helping businesses access the capital they need. The process was smooth and efficient.",
    },
    {
      initials: "M",
      name: "Maria Rodriguez",
      text: "The funding process was incredibly fast and transparent. Specialty Capital helped us expand our restaurant chain with flexible financing options that worked perfectly for our business model.",
    },
    {
      initials: "D",
      name: "David Chen",
      text: "Quick approval and competitive rates. The team understood our tech startup's unique needs and provided flexible terms that helped us scale rapidly.",
    },
    {
      initials: "S",
      name: "Sarah Johnson",
      text: "Excellent customer service and transparent communication throughout the entire process. They made business financing simple and stress-free.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We have 500+ <span className="text-primary">5-star reviews</span>
          </h2>
          <p className="text-xl text-gray-600">Check out what our customers have to say.</p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">5.0</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">502 reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{review.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
