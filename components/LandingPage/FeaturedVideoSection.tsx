// components/FeaturedVideoSection.js

import React from 'react'
import { TypographyP } from "@/components/ui/typography";

function FeaturedVideoSection() {
    return (
        <section className="bg-[#dffd6e] py-12 px-4 min-h-screen">
            <div className="container mx-auto text-center bg-[#dffd6e]">
                <TypographyP className="text-sm md:text-2xl font-mono mb-6 text-gray-800">
                    Watch our product in action 🏃‍♂️
                </TypographyP>

                <div className="relative pb-9/16">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Featured Product Video"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default FeaturedVideoSection
