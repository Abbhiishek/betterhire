export const ResumeReviewPrompt = `Analyze the following resume in detail and provide a comprehensive review. Your response should be in JSON format with the following structure:

{
  "karma_points": "Score out of 100 based on overall resume quality, relevance, and presentation",
  "summary": "Concise, unique overview of the resume's key strengths and standout features (max 50 words)",
  "strengths": ["List of 3-5 most impactful strengths, focusing on unique selling points"],
  "areas_for_improvement": ["List of 3-5 specific areas for improvement, with actionable advice"],
  "skills_analysis": {
    "technical_skills": ["Comprehensive list of technical skills, ranked by proficiency if possible"],
    "soft_skills": ["List of 3-5 most relevant soft skills, with examples from the resume"],
    "skill_gaps": ["List of 3-5 important skills missing for the candidate's target role or industry dont use long text only specify the skill or tech stack name"]
  },
  "experience_analysis": "Detailed analysis of work history, including years of experience, career progression, key achievements, and relevance to target roles",
  "education_analysis": "Analysis of educational background, including degrees, institutions, relevant coursework, and academic achievements",
  "impact_statements": ["List of 3-5 quantifiable achievements or results from the resume, highlighting the candidate's value"],
  "ats_optimization": ["List of 3-5 suggestions to improve the resume's performance with Applicant Tracking Systems"],
  "formatting_suggestions": ["List of 3-5 recommendations to enhance the resume's visual appeal and readability"],
  "industry_specific_advice": "Tailored recommendations based on the candidate's target industry or role",
  "recommended_certifications": ["List of 3-5 relevant certifications to enhance the candidate's qualifications"],
  "recommended_projects": ["List of 3-5 project ideas with brief descriptions to showcase skills and fill experience gaps"],
  "job_recommendations": ["List of 3-5 potential job roles or titles aligned with the candidate's experience and skills"]
}

export type ResumeReviewResponse = {
  karma_points: number;
  summary: string;
  strengths: string[];
  areas_for_improvement: string[];
  skills_analysis: {
    technical_skills: string[];
    soft_skills: string[];
    skill_gaps: string[];
  };
  experience_analysis: string;
  education_analysis: string;
  impact_statements: string[];
  ats_optimization: string[];
  formatting_suggestions: string[];
  industry_specific_advice: string;
  recommended_certifications: string[];
  recommended_projects: string[];
  job_recommendations: string[];
};

Provide thorough, actionable insights for each section. If information is lacking for any section, offer general advice based on industry best practices and current job market trends. Ensure all recommendations are specific, relevant, and tailored to the candidate's experience level and career goals.`


export const ResumeExtractPrompt = `
Analyze the following resume and extract key personal and professional details. Your response should be in JSON format with the following structure:

{
  "name": "Full name of the candidate",
  "location": "City, State/Province, Country (or 'Remote' if not specified)",
  "description": "Brief professional description (max 50 words)",
  "summary": "More detailed professional summary (max 100 words)",
  "skills": ["List of technical and soft skills mentioned in the resume"],
  "contact": {
    "email": "Email address (if available)",
    "tel": "Phone number (if available)",
    "social": {
      "GitHub": {
        "name": "GitHub",
        "url": "GitHub profile URL (if mentioned)"
      },
      "LinkedIn": {
        "name": "LinkedIn",
        "url": "LinkedIn profile URL (if mentioned)"
      },
      "X": {
        "name": "X",
        "url": "X (Twitter) profile URL (if mentioned)"
      },
      "Youtube": {
        "name": "Youtube",
        "url": "YouTube channel URL (if mentioned)"
      }
    }
  },
  "work": [
    {
      "company": "Company name",
      "title": "Job title",
      "location": "Job location (or 'Remote')",
      "start": "Start date",
      "end": "End date (or 'Present')",
      "description": "Brief description of responsibilities and achievements"
    }
  ],
  "education": [
    {
      "school": "Institution name",
      "degree": "Degree earned",
      "start": "Start year",
      "end": "End year"
    }
  ],
  "projects": [
    {
      "title": "Project name",
      "description": "Brief project description",
      "technologies": ["List of technologies used"],
      "links": [
        {
          "type": "Type of link (e.g., 'Website', 'Source')",
          "href": "URL of the link"
        }
      ]
    }
  ]
}

export type ResumeExtractResponse = {
  name: string;
  location: string;
  description: string;
  summary: string;
  skills: string[];
  contact: {
    email?: string;
    tel?: string;
    social: {
      GitHub?: { name: string; url: string };
      LinkedIn?: { name: string; url: string };
      X?: { name: string; url: string };
      Youtube?: { name: string; url: string };
    }
  };
  work: Array<{
    company: string;
    title: string;
    location: string;
    start: string;
    end: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    links: Array<{
      type: string;
      href: string;
    }>;
  }>;
};

Extract as much information as possible from the resume. If certain fields are not explicitly stated, leave them blank or omit them. For the location, if it's not clearly specified, use 'Remote'. For social media profiles, only include those that are explicitly mentioned in the resume. Ensure all extracted information is accurate and directly derived from the resume content.`;