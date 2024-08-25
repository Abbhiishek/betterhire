/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from "@/components/ui/marquee";
import { cn } from '@/lib/utils';
import { testimonials } from '@/data/testimonial';
import { TypographyH1, TypographyH2, TypographyH3 } from '../ui/typography';

// testimonials = 40
function TestimonialSection() {
    const firstRow = testimonials.slice(0, testimonials.length / 2);
    const thirdRow = testimonials.slice(testimonials.length / 2);

    return (
        <div className='overflow-hidden'>
            <TypographyH2 className="text-center py-4 font-mono">Testimonials</TypographyH2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-4">
                <Marquee pauseOnHover className="[--duration:50s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:50s]">
                    {thirdRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
        </div>
    );
}



const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer dark:bg-slate-900 bg-slate-300 overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-100/[.1] hover:bg-gray-150/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full"
                    width="32" height="32"
                    alt=""
                    src={`https://avatar.iran.liara.run/public/${Math.random() * 10}`}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-green-700">{body}</blockquote>
        </figure>
    );
};

export default TestimonialSection;
