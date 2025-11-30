export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it <span className="text-primary">works</span>
          </h2>
          <p className="text-xl text-gray-600">The process is simple.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Tell your story</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Because of our unique, tailored approach to financing, any additional insights into your business can help
              expedite the process and allow you to secure financing quickly. Submit your application in minutes and let
              us handle the rest!
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">Application</div>
              <div className="space-y-2">
                <div className="bg-gray-200 h-3 rounded"></div>
                <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                <div className="bg-gray-200 h-3 rounded w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Fast approval</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Once you submit your application, our team will work diligently to find the best offers for your business.
              We thoroughly analyze your unique situation and tailor offers that align with your financial needs and
              goals.
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">Email</div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  Congratulations! You've been approved for your loan with Specialty Capital!
                </div>
                <div className="bg-gray-200 h-2 rounded w-full"></div>
                <div className="text-xs text-gray-500 text-center">Underwriting</div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={`h-8 rounded ${i < 6 ? "bg-primary" : "bg-gray-200"}`}></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 text-center">Jan Feb Mar Apr May Jun Jul Aug</div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Grow Your Business</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              After accepting your financing, your funds will be dispersed so you can explore new opportunities to
              expand your business. Our financing is not designed to just sustain your business but to drive it forward
              so you can reach your goals.
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">
                Specialty Capital Contract
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="bg-gray-200 h-2 rounded"></div>
                  <div className="bg-gray-200 h-2 rounded w-4/5"></div>
                  <div className="bg-gray-200 h-2 rounded w-3/5"></div>
                </div>
                <div className="flex justify-end">
                  <div className="text-primary text-sm font-medium">✓</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Draw terms</div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Term</span>
                      <span>12 MONTHS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rate</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available Credit</span>
                      <span>$75,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your Draw</span>
                      <span>$45,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
