export function WhatWeOfferSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-primary">We Offer</span>
          </h2>
          <p className="text-xl text-gray-600">A variety of small business funding options to suit any need.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Revenue Based Decisions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="mb-8">
              <img
                src="/revenue-based-financing-illustration-with-laptop-a.jpg"
                alt="Revenue Based Financing"
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Revenue Based</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Decisions</h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Say goodbye to lousy, statistically driven funding decisions and say hello to a tailored, holistic
              approach to your financing. Specialty Capital looks beyond the numbers and can often approve you for
              financing with just four months of stable or increasing revenue, regardless of your credit score or
              history.
            </p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Prepayment Discounts */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="mb-8">
              <img
                src="/prepayment-discounts-illustration-with-documents-a.jpg"
                alt="Prepayment Discounts"
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Prepayment</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Discounts</h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe in offering the most affordable solutions possible to our clients. That's why we offer
              industry-leading prepayment discounts to drastically reduce the cost of your financing and gain valuable
              pay history — perfect for bridging accounts receivable gaps and more.
            </p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Multi-Draw Advances */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="mb-8">
              <img
                src="/multi-draw-advances-illustration-with-credit-cards.jpg"
                alt="Multi-Draw Advances"
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Multi-Draw</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Advances</h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Need flexibility with your financing? We offer multi-draw advances that allow you to easily access capital
              as you need it, rather than a large lump sum. This cost-effective solution limits friction and enhances
              flexibility so you can exceed your business goals without the extra burden of unnecessary debt.
            </p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
