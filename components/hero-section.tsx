"use client"
 
import { useState, useEffect } from "react"
 
export function HeroSection() {

  const rotatingTexts = ["Exceed revenue targets", "Grow your team", "Amplify your marketing"]
 
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const [isVisible, setIsVisible] = useState(true)
 


  useEffect(() => {

    const script = document.createElement("script")

    script.src = "https://bangmetricllcdemo2.service-now.com/scripts/sn_csm_ec.js?v=5.6"

    script.async = true

    script.onload = () => {

      if (window.SN_CSM_EC) {

        window.SN_CSM_EC.init({

          moduleID: "https://bangmetricllcdemo2.service-now.com/#976bac153b253a50c280759c24e45a5c",

          loadFeature: window.SN_CSM_EC.loadEMFeature()

        })

      }

    }

    document.body.appendChild(script)
 
    return () => {}

  }, [])
 
 
  useEffect(() => {

    const fadeInterval = setInterval(() => {

      setIsVisible(false)

      setTimeout(() => {

        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)

        setIsVisible(true)

      }, 3000)

    }, 3000)
 
    return () => clearInterval(fadeInterval)

  }, [])
 
  return (
<section className="relative w-full overflow-hidden bg-white">
<div className="relative bg-gradient-to-r from-[#5D3FB8] to-[#7D5FD4] pt-20 pb-48 md:pt-32 md:pb-56">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">

<div className="text-white z-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
<span className="text-[#5FEC9B]">Empowering</span> small businesses
<br />

                that want to grow.
</h1>
 
              <div className="h-10 mb-8">
<p

                  className={`text-lg md:text-xl font-light transition-opacity duration-300 ${

                    isVisible ? "opacity-100" : "opacity-0"

                  }`}
>

                  {rotatingTexts[currentTextIndex]}
</p>
</div>
 
              <button className="bg-[#5FEC9B] text-gray-900 font-semibold px-8 py-3 rounded-lg mb-8 hover:shadow-lg transition-all duration-300 text-base">

                Get Funded Today
</button>
 
           
<div className="flex items-center gap-3">
<span className="text-yellow-300 text-lg">★</span>
<span className="text-sm font-semibold">Trustpilot</span>
<div className="flex gap-0.5">

                  {Array.from({ length: 5 }).map((_, i) => (
<span key={i} className="text-yellow-300 text-sm">★</span>

                  ))}
</div>
<span className="text-sm">

                  TrustScore 4.9 <u>373 reviews</u>
</span>
</div>
</div>
 
         
<div className="relative hidden lg:block h-96 perspective pr-20">
<div className="absolute top-0 left-0 w-32 bg-white rounded-2xl shadow-2xl overflow-hidden z-20">
<div className="bg-gradient-to-b from-[#5D3FB8] to-[#4A2FA0] p-5 pb-8 flex items-end h-20">
<div className="w-8 h-8 bg-gray-300 rounded-lg opacity-40"></div>
</div>
<div className="p-4 space-y-3 text-gray-700 text-sm">
<div className="font-semibold">Home</div>
<div>Savings</div>
<div className="flex items-center justify-between">

                    Financing
<span className="text-xs">▼</span>
</div>
<div className="text-sm">Draws Dashboard</div>
<div className="text-sm">Transaction History</div>
<div className="text-sm">Create Report</div>
<div className="pt-3 border-t border-gray-200">
<div className="text-sm">Sign Out</div>
</div>
</div>
</div>
 
             
<div className="absolute top-16 left-28 right-0 bg-white rounded-3xl shadow-2xl p-8 mr-24">
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<div className="text-xs text-gray-500 font-semibold mb-2">Term Cap</div>
<div className="space-y-1">
<div className="text-sm text-gray-600">Credit</div>
<div className="text-2xl font-bold text-gray-900">$189,099.91</div>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-[#5D3FB8]">Dashboard</div>
</div>
</div>
 
                {/* Table */}
<div className="space-y-4 mb-8 border-b border-gray-200 pb-8">
<div className="grid grid-cols-4 gap-4 text-xs font-bold text-gray-700 mb-4">
<div>Title</div>
<div>Date</div>
<div>Maturity</div>
<div>Progress</div>
</div>
 
                  <div className="grid grid-cols-4 gap-4 items-center text-sm">
<div className="font-medium text-gray-900">Peterman Account</div>
<div className="text-gray-600">12/27/2019</div>
<div className="h-1 bg-gray-300 rounded w-12"></div>
<div className="h-2 bg-[#5D3FB8] rounded w-full"></div>
</div>
 
                  <div className="grid grid-cols-4 gap-4 items-center text-sm">
<div className="font-medium text-gray-900">Vandelay Industries</div>
<div>
<span className="bg-[#5D3FB8] text-white text-xs px-2.5 py-1 rounded-full font-semibold">

                        Processing
</span>
</div>
<div className="h-1 bg-gray-300 rounded w-12"></div>
<div className="h-2 bg-[#5D3FB8] rounded w-2/3"></div>
</div>
 
                  <div className="grid grid-cols-4 gap-4 items-center text-sm">
<div className="font-medium text-gray-900">Import/Export</div>
<div className="text-gray-600">11/15/2023</div>
<div className="h-1 bg-gray-300 rounded w-12"></div>
<div className="h-2 bg-[#5D3FB8] rounded w-1/2"></div>
</div>
</div>
 
                {/* Bottom */}
<div className="space-y-4">
<div className="text-right">
<div className="text-xs text-gray-500 font-semibold">Overall Investment</div>
<div className="h-2 bg-gray-300 rounded w-40 ml-auto mt-2"></div>
</div>
<div className="pt-4">
<div className="text-xs text-gray-500 font-semibold mb-3">Draw terms</div>
<div className="space-y-2 text-xs text-gray-600">
<div className="flex justify-between">
<span>Term</span>
<span className="font-semibold">12 MONTHS</span>
</div>
<div className="flex justify-between">
<span>Rate</span>
<span className="h-1.5 w-16 bg-gray-300 rounded inline-block"></span>
</div>
<div className="flex justify-between">
<span>Available Credit</span>
<span className="font-semibold">$75,000</span>
</div>
<div className="flex justify-between">
<span>Your Draw</span>
<span className="font-semibold">$45,000</span>
</div>
</div>
</div>
</div>
 
              </div>
</div>
 
          </div>
</div>
 
     
<div className="absolute bottom-0 left-0 right-0 h-40">
<svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
<path d="M0,80 Q360,20 720,80 T1440,80 L1440,200 L0,200 Z" fill="white" />
</svg>
</div>
 
      </div>
</section>

  )

}
 
