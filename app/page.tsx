import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhatWeOfferSection } from "@/components/sections/what-we-offer-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { ApplicationSection } from "@/components/sections/application-section"
import { ContactSection } from "@/components/sections/contact-section"
import { QualificationsSection } from "@/components/sections/qualifications-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ApplicationSection />
      <WhatWeOfferSection />
      <HowItWorksSection />
      <ReviewsSection />
      <ContactSection />
      <QualificationsSection />
      <Footer />
    </div>
  )
}
