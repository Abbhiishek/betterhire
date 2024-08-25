export interface IFAQ {
    question: string;
    answer: string;
}

export const faqs: IFAQ[] = [
    { question: 'How does HireBetter rank applicants?', answer: 'HireBetter uses a combination of your GitHub profile and resume to create a comprehensive ranking. We analyze your GitHub contributions, project quality, and coding frequency, along with your resume details to provide an objective assessment.' },
    { question: 'Is my GitHub profile mandatory for applying through HireBetter?', answer: 'While a GitHub profile significantly enhances your ranking and provides a more accurate assessment, it is not mandatory. You can still apply using your resume and other relevant information but candidates with GitHub gets better ranking.' },
    { question: 'Can I update my profile or reapply to improve my ranking?', answer: 'Yes, you can update your profile anytime. As your GitHub activities increase and you enhance your resume, your ranking may improve. You can also reapply to positions, and our system will use your most up-to-date information.' },
    { question: 'Can I see how I compare to other applicants for a specific job?', answer: 'Yes, you can see your percentile ranking among other applicants for each job. This gives you an idea of your competitiveness without revealing other applicants personal information.' },
    { question: 'Can employers see my full GitHub profile and resume?', answer: 'Employers only see an anonymized summary of your skills and achievements until you choose to reveal your full profile. This helps prevent unconscious bias and ensures initial evaluations are based purely on merit.' },
    { question: 'How often is my ranking updated?', answer: 'Your ranking is updated in real-time as you make new GitHub contributions or update your resume. This ensures that your most recent achievements are always reflected in your applications.' },
];