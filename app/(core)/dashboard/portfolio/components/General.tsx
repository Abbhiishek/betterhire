import React from 'react'
import Form from '@/components/Dashboard/form'
import { updateUserDetails } from '@/actions'
import { User } from '@prisma/client'

function General({ userDetails }: { userDetails: User }) {

    return (
        <div className="flex flex-col space-y-6 max-w-screen-xl">
            <Form
                title="Avatar"
                description="This is visible on your Portfolio"
                helpText="Max file size 2MB. Recommended size 400x400."
                inputAttrs={{
                    name: "avatar",
                    type: "avatar",
                    defaultValue: userDetails.image || "",
                    placeholder: "Upload your avatar",
                }}
                handleSubmit={updateUserDetails}
            />
            <Form
                title="Name"
                description="Your full name"
                helpText="This is how your name will appear on your portfolio."
                inputAttrs={{
                    name: "name",
                    type: "text",
                    defaultValue: userDetails?.name || "",
                    placeholder: "John Doe",
                    maxLength: 100,
                }}
                handleSubmit={updateUserDetails}
            />
            <Form
                title="Username"
                description="Your unique username"
                helpText="This will be used for your portfolio URL."
                inputAttrs={{
                    name: "username",
                    type: "text",
                    defaultValue: userDetails?.username || "",
                    placeholder: "johndoe",
                    maxLength: 50,
                }}
                handleSubmit={updateUserDetails}
            />
            <Form
                title="Tagline"
                description="A short description of yourself"
                helpText="Keep it concise and impactful."
                inputAttrs={{
                    name: "shortbio",
                    type: "description",
                    defaultValue: userDetails.shortbio || "I'm a developer",
                    placeholder: "Full-stack developer passionate about creating user-friendly web applications",
                    maxLength: 160,
                }}
                handleSubmit={updateUserDetails}
            />
            <Form
                title="Short Summary"
                description="A more detailed description about yourself and your work"
                helpText="Highlight your key skills, experiences, and achievements."
                inputAttrs={{
                    name: "summary",
                    type: "about",
                    defaultValue: userDetails?.summary || "I'm a developer",
                    placeholder: "I'm a full-stack developer with 5 years of experience...",
                }}
                handleSubmit={updateUserDetails}
            />
            <Form
                title="Location"
                description="Where are you based?"
                helpText="Enter your city, country, or 'Remote'"
                inputAttrs={{
                    name: "location",
                    type: "text",
                    defaultValue: userDetails?.location || "Remote",
                    placeholder: "New York, USA",
                    maxLength: 100,
                }}
                handleSubmit={updateUserDetails}
            />

            <Form
                title="Telephone"
                description="Your contact number"
                helpText="This will be visible on your portfolio. Leave blank if you prefer not to share."
                inputAttrs={{
                    name: "telephone",
                    type: "tel",
                    defaultValue: userDetails?.telephone || "",
                    placeholder: "+1 (123) 456-7890",
                    pattern: "[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}",
                }}
                handleSubmit={updateUserDetails}
            />
        </div>
    )
}

export default General