export const jobs = [
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        title: "Associate Product Manager",
        company: "Dola AI",
        location: "Remote",
        type: "Full-time",
        salary: "$100,000 - $150,000",
        description: `
Are you passionate about shaping world-leading experiences at the forefront of the AI movement? Do you thrive in collaborative environments alongside talented colleagues who have a track record of founding, building, and successfully selling a 10 billion USD unicorn? If so, Dola AI is looking for an associate product manager to join our exceptional team!

### About the Role:
As an Associate Product Manager at Dola AI, you will:

- Collaborate with cross-functional teams to define and execute product strategies
- Conduct market research and analyze user feedback to inform product decisions
- Create and maintain product roadmaps and backlogs
- Work closely with engineering teams to ensure successful product delivery
- Develop and track key performance indicators (KPIs) for product success

### What We Offer:
- Competitive salary and benefits package
- Remote work flexibility
- Opportunity to work on cutting-edge AI technologies
- Professional development and growth opportunities
- Collaborative and innovative work environment

Join us in revolutionizing the AI industry and make a significant impact on the future of technology!
        `,
        requirements: [
            "Bachelor's degree in Computer Science, Business, or related field",
            "2+ years of experience in product management",
            "Strong analytical and problem-solving skills",
            "Excellent communication and leadership abilities"
        ],
        postedDate: "2023-10-22",
        applicationDeadline: "2023-11-22",
        category: "Technology",
        experienceLevel: "Mid-level",
        skills: ["Product Management", "AI", "Data Analysis", "Agile Methodologies"],
        compensation: {
            base: "$100,000 - $150,000",
            bonus: "Up to 20% of base salary",
            equity: "0.1% - 0.5% of company shares",
            benefits: ["Health insurance", "401(k) matching", "Unlimited PTO"]
        },
        requiredTechStack: ["JIRA", "Confluence", "SQL", "Python (basic)", "Tableau"],
        companyEmail: "careers@dolaai.com",
        companyLogo: "https://example.com/dolaai-logo.png",
        hiringManager: {
            name: "Sarah Johnson",
            title: "Senior Product Manager",
            profilePicture: "https://example.com/sarah-johnson.jpg"
        }
    },
    {
        id: "110e8400-e29b-11d4-a716-446655440000",
        title: "Senior Software Engineer",
        company: "TechCorp",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $180,000",
        description: `
TechCorp is seeking a talented Senior Software Engineer to join our innovative team. You'll be at the forefront of designing, developing, and maintaining high-performance software applications that drive our business forward.

### Key Responsibilities:
- Architect and implement scalable, efficient, and maintainable software solutions
- Collaborate with cross-functional teams to define and ship new features
- Mentor junior developers and contribute to the team's technical growth
- Participate in code reviews and ensure code quality standards are met
- Troubleshoot, debug, and optimize application performance

### What You'll Bring:
- Proven experience in software development with a focus on scalable applications
- Strong proficiency in Java, Python, or C++
- Familiarity with cloud platforms (AWS, Azure, or GCP)
- Experience with microservices architecture and RESTful APIs
- Passion for staying updated with the latest industry trends and technologies

### Why TechCorp:
- Competitive compensation package including stock options
- Health, dental, and vision insurance
- Flexible work arrangements
- Continuous learning opportunities and conference attendance
- Exciting projects that push the boundaries of technology

Join us in building the next generation of software solutions that will shape the future of technology!
        `,
        requirements: [
            "5+ years of experience in software development",
            "Proficiency in Java, Python, or C++",
            "Experience with cloud platforms (AWS, Azure, or GCP)",
            "Strong understanding of software design patterns and architecture"
        ],
        postedDate: "2023-10-20",
        applicationDeadline: "2023-11-20",
        category: "Engineering",
        experienceLevel: "Senior",
        skills: ["Java", "Python", "Cloud Computing", "Microservices"],
        compensation: {
            base: "$130,000 - $180,000",
            bonus: "Up to 25% of base salary",
            equity: "0.5% - 1% of company shares",
            benefits: ["Health insurance", "401(k) matching", "Unlimited PTO", "Annual learning stipend"]
        },
        requiredTechStack: ["Java", "Python", "AWS", "Docker", "Kubernetes", "MongoDB"],
        companyEmail: "jobs@techcorp.com",
        companyLogo: "https://example.com/techcorp-logo.png",
        hiringManager: {
            name: "Michael Chen",
            title: "Engineering Manager",
            profilePicture: "https://example.com/michael-chen.jpg"
        }
    },
    {
        id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
        title: "Marketing Coordinator",
        company: "MarketPro",
        location: "New York, NY",
        type: "Full-time",
        salary: "$60,000 - $80,000",
        description: `
MarketPro is seeking a dynamic Marketing Coordinator to join our team. You'll be responsible for executing marketing campaigns, managing social media, and coordinating events.

### Key Responsibilities:
- Develop and execute marketing strategies to drive growth and engagement
- Manage social media platforms and create engaging content
- Coordinate and execute events to promote brand awareness
- Collaborate with the marketing team to analyze campaign performance
- Stay updated on industry trends and best practices

### What You'll Bring:
- Bachelor's degree in Marketing, Communications, or related field
- 1-2 years of experience in marketing or related field
- Proficiency in social media platforms and marketing tools
- Strong organizational and project management skills
- Excellent communication and collaboration skills

### Why MarketPro:
- Competitive compensation package
- Comprehensive benefits package
- Opportunities for professional growth and development
- Collaborative and supportive work environment
- Exposure to cutting-edge marketing strategies and technologies

Join us in shaping the future of marketing and making a real impact on our clients' businesses!
        `,
        requirements: [
            "Bachelor's degree in Marketing, Communications, or related field",
            "1-2 years of experience in marketing or related field",
            "Proficiency in social media platforms and marketing tools",
            "Strong organizational and project management skills"
        ],
        postedDate: "2023-10-18",
        applicationDeadline: "2023-11-18",
        category: "Marketing",
        experienceLevel: "Entry-level",
        skills: ["Social Media", "Marketing Automation", "Email Marketing", "Event Coordination"],
        compensation: {
            base: "$60,000 - $80,000",
            bonus: "Up to 10% of base salary",
            equity: "N/A",
            benefits: ["Health insurance", "401(k)", "Paid time off", "Professional development budget"]
        },
        requiredTechStack: ["Hootsuite", "Mailchimp", "Google Analytics", "Canva", "Asana"],
        companyEmail: "careers@marketpro.com",
        companyLogo: "https://example.com/marketpro-logo.png",
        hiringManager: {
            name: "Emily Rodriguez",
            title: "Marketing Manager",
            profilePicture: "https://example.com/emily-rodriguez.jpg"
        }
    },
]

export type Job = (typeof jobs)[number]

export interface IJob {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    postedDate: string;
    applicationDeadline: string;
    category: string;
    experienceLevel: string;
    skills: string[];
    compensation: {
        base: string;
        bonus: string;
        equity: string;
        benefits: string[];
    };
    requiredTechStack: string[];
    companyEmail: string;
    companyLogo: string;
    hiringManager: {
        name: string;
        title: string;
        profilePicture: string;
    };
}
