
'use client'

import { SplineScene } from "../ui/splite";
import { Card } from "../ui/card"
import { Spotlight } from "../ui/spotlight"
 
export default function Landing() {
  console.log("Landing component rendering");
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <Card className="w-full h-full bg-black">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 opacity-100" /* Force opacity */
          fill="white"
        />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center md:max-w-[45%]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
            Chakaralaya Analytics          
            </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
            Your Path to Data Driven Excellence with Our Business Intelligence Solutions.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </Card>
    </div>
  )
}
