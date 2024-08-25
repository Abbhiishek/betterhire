import { Icons } from "@/components/icons";
import { Fingerprint, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Abhishek Kushwaha",
    initials: "AK",
    url: "https://abhishekkushwaha.me",
    location: "West Bengal, India",
    locationLink: "https://www.google.com/maps/place/india",
    description:
        "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
    summary: "I am passionate about building inclusive communities where people can come together, share knowledge, and support each other's growth. I started coding in JavaScript/TypeScript and Python, and I'm currently learning Go as well. Outside of coding, I'm an avid fan of science fiction and fantasy, particularly the Marvel Cinematic Universe, Star Wars, and the Harry Potter and Lord of the Rings series.",
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Hono",
        "Go",
        "Postgres",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "AWS",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" }
    ],
    contact: {
        email: "abhishekkushwahahere@gmail.com",
        tel: "+91 9674144556",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/abbhiishek",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/abbhiishek",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/abbhishekstwt",
                icon: Icons.x,
                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "https://www.youtube.com/channel/UCDV_cwac9byivL5hvpU9mHQ",
                icon: Icons.youtube,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Keploy",
            href: "https://keploy.io/",
            badges: ["Remote", "Full-time"],
            location: "Remote",
            title: "Developer Relations Intern",
            logoUrl: "/keploy.png",
            start: "August 2024",
            end: "Present",
            description: "As a Developer Relations Intern at Keploy, I help developers build and deploy their applications on the Keploy platform. I create tutorials, blog posts, and other resources to help developers get started with Keploy and test their services with test cases and data mocks/stubs from user-traffic by recording API calls and DB queries, significantly speeding up releases and enhancing reliability.. I also work with the engineering team to provide feedback on the platform and help improve the developer experience.",
        },
        {
            company: "GitHub",
            href: "http://github.com",
            badges: ["Community"],
            location: "Remote",
            title: "GitHub Campus Expert",
            logoUrl: "/github.png",
            start: "July 2024",
            end: "Present",
            description: "As a GitHub Campus Expert, I help students learn about GitHub and how to use it effectively in their projects. I organize workshops, hackathons, and other events to promote GitHub on campus and help students build their skills.",
        },
        {
            company: "TrainingMug",
            href: "http://trainingmug.com/",
            badges: ["Remote", "Full-time"],
            location: "Remote",
            title: "Software Developer Engineer Intern",
            logoUrl: "/trainingmug.png",
            start: "December 2023",
            end: "July 2024",
            description:
                "Since I joined Training Mug in December 2023, I improved the performance of the dashboard by 50%, implemeted new ui components and improved the overall user experience. Improved the loading time and api calls by 90%. I developed an AI chat support system using Azure AI, integrating learner data and course content for personalized assistance. A progress tracking system that monitors daily tasks and aligns skills with student profiles. Additionally, an online IDE with a strict testcase evaluation system for playground projects. These improvements have boosted user engagement and learning outcomes on the platform. ",
        },
        {
            company: "Kishalay Organics",
            badges: ["Remote", "Part-time"],
            href: "https://www.kishalayorganics.in",
            location: "Remote",
            title: "Website Developer",
            logoUrl: "/kishalayorganics.png",
            start: "November 2023",
            end: "Feb 2024",
            description:
                "Designed and developed a fully functional ecommerce website for Kishalay Organics brand, implementing a comprehensive product management system, payment system, and customer support features. Utilized my skills in web design and development to create an engaging and user-friendly online platform for the brand. Enhanced the brand's online presence and customer experience by implementing efficient product management tools and seamless payment processing. Collaborated with the team to ensure a smooth and efficient customer support system, improving overall customer satisfaction and retention.",
        },
        {
            company: "Scaler",
            href: "https://scaler.com/",
            badges: ["Remote", "Part-time"],
            location: "Remote",
            title: "Technical Content Writer - Python",
            logoUrl: "/scaler.svg",
            start: "May 2022",
            end: "January 2023",
            description:
                "As a Technical Content Writer - Python at Scaler, my role involves creating high-quality, informative, and engaging content on various topics related to Python programming. This includes creating tutorials, articles, and guides that help readers learn new concepts and improve their skills.",
        },
    ],
    education: [
        {
            school: "JIS University",
            href: "https://www.jisuniversity.ac.in/",
            degree: "Bachelor Degree in Computer Science & Engineering",
            logoUrl: "/jis.png",
            start: "2021",
            end: "2025",
        },
    ],
    projects: [
        {
            title: "DevResume.",
            href: "https://app.dresume.me",
            active: true,
            description:
                "Craft your developer Portfolio within Few Seconds.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Vercel",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chatcollect.com",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Abbhiishek/dresume",
                    icon: <Icons.github className="size-3" />,
                }
            ],
            image: "",
            video: "",
        },
        {
            title: "Magic UI",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ],
    hackathons: [
        {
            title: "Make School's Student App Competition 2017",
            dates: "May 19th - 21st, 2017",
            location: "International",
            description: "Improved PocketDoc and submitted to online competition",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
            win: "Top 10 Finalist | Honourable Mention",
            links: [
                {
                    title: "Medium Article",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
                },
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        }
    ],
} as const;


export type ResumeType = typeof DATA;