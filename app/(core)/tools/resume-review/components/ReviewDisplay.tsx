import React from 'react';
import { TypographyH2 } from '@/components/ui/typography';
import ReviewSection from './ReviewSection';
import { ReviewResponse } from '../page';


interface ReviewDisplayProps {
    review: ReviewResponse;
}

const ReviewDisplay: React.FC<ReviewDisplayProps> = ({ review }) => (
    <div className="bg-background container p-6 mt-20">
        <TypographyH2 className="font-sans mb-6 text-center dark:text-blue-50 text-blue-900">Your Resume Insights</TypographyH2>
        <div className="columns-2 gap-6 sm:columns-2">
            {[
                { title: "Overall Summary", content: review.summary, icon: "📊" },
                { title: "Key Strengths", items: review.strengths, icon: "💪" },
                { title: "Areas for Improvement", items: review.areas_for_improvement, icon: "🎯" },
                { title: "Experience Insights", content: review.experience_analysis, icon: "📈" },
                { title: "Education Overview", content: review.education_analysis, icon: "🎓" },
                { title: "Improvement Suggestions", items: review.ats_optimization, icon: "💡" },
                { title: "Recommended Certifications", items: review.recommended_certifications, icon: "🏅" },
                { title: "Project Ideas", items: review.recommended_projects, icon: "🚀" },
                { title: "Potential Job Matches", items: review.job_recommendations, icon: "🎯" },
                { title: "Advice", content: review.industry_specific_advice, icon: "🎯" }
            ].map((section, index) => (
                <ReviewSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    items={section.items}
                    icon={section.icon}
                />
            ))}
        </div>
        <h3 className="text-2xl font-semibold my-4 text-blue-600">Skills Breakdown</h3>
        <div className="columns-3 gap-6 sm:columns-2">
            {[
                { title: "Technical Skills", items: review.skills_analysis?.technical_skills || [], icon: "💻" },
                { title: "Soft Skills", items: review.skills_analysis?.soft_skills || [], icon: "🤝" },
                { title: "Skills to Consider Adding", items: review.skills_analysis?.skill_gaps || [], icon: "➕" }
            ].map((section, index) => (
                <ReviewSection
                    key={index}
                    title={section.title}
                    items={section.items}
                    icon={section.icon}
                />
            ))}
        </div>
        <div className='py-20'></div>
    </div>
);

export default ReviewDisplay;