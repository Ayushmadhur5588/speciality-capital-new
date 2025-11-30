export function ApplicationSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Get the funding your business needs to <span className="text-primary">grow</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Complete our secure application form and get access to tailored financing solutions designed to drive your
            business forward.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">{/* Import LoanApplicationForm component here */}</div>
      </div>
    </section>
  )
}
