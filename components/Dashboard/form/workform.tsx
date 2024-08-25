"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { updateWorkExperience } from '@/actions';
import { toast } from 'sonner';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from '@/components/ui/scroll-area';
import Uploader from './uploader';
import { Textarea } from '@/components/ui/textarea';
import { Work } from '@prisma/client';
import { Checkbox } from "@/components/ui/checkbox";

const workSchema = z.object({
    company: z.string().min(1, 'Company is required'),
    title: z.string().min(1, 'Job title is required'),
    href: z.string().url('Must be a valid URL'),
    start: z.string().min(1, 'Start date is required'),
    end: z.string().optional(),
    isCurrent: z.boolean().default(false),
    location: z.string().min(1, 'Location is required'),
    description: z.string().min(1, 'Description is required')
});

type WorkFormValues = z.infer<typeof workSchema>;

interface AddWorkFormProps {
    initialData?: Work;
}

function AddWorkForm({ initialData }: AddWorkFormProps) {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof workSchema>>({
        resolver: zodResolver(workSchema),
        defaultValues: initialData ? {
            ...initialData,
            isCurrent: initialData.end === "Present",
        } : {
            company: '',
            title: '',
            href: '',
            start: '',
            end: '',
            isCurrent: false,
            location: '',
            description: ''
        },
    });

    const isCurrent = form.watch("isCurrent");

    async function onSubmit(values: z.infer<typeof workSchema>) {
        if (form.formState.isValid) {
            try {
                const formData = new FormData();


                let end = values.isCurrent ? "Present" : values.end;
                let isCurrentJob = values.isCurrent;
                formData.append('company', values.company);
                formData.append('title', values.title);
                formData.append('href', values.href);
                formData.append('start', values.start);
                formData.append('end', end || "");
                formData.append('isCurrent', isCurrentJob ? "true" : "false");
                formData.append('location', values.location);
                formData.append('description', values.description);

                console.log(formData)
                updateWorkExperience(formData).then((res: any) => {
                    if (res.error) {
                        toast.error(`Error: ${res.error}`);
                    } else {
                        toast.success("🌱 Successfully added/updated Work Experience!");
                        setOpen(false);
                    }
                })
            } catch (error) {
                console.error("Client-side error:", error);
                toast.error("An error occurred while adding/updating work experience.");
            }
        } else {
            toast.error("Kindly fill the form correctly.")
        }
    }

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant="default">{initialData ? "Edit Work Experience" : "Add Work Experience"}</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            {initialData ? "Edit Work Experience" : "Add Work Experience"}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This will be visible in your Portfolio.
                        </AlertDialogDescription>
                        <ScrollArea className="h-[450px]">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter company name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Job Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter job title" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex space-x-4">
                                        <FormField
                                            control={form.control}
                                            name="start"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel>Start Date</FormLabel>
                                                    <FormControl>
                                                        <Input type="text" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        {!isCurrent && (
                                            <FormField
                                                control={form.control}
                                                name="end"
                                                render={({ field }) => (
                                                    <FormItem className="flex-1">
                                                        <FormLabel>End Date</FormLabel>
                                                        <FormControl>
                                                            <Input type="text" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="isCurrent"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I am currently working in this role
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Location</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter work location" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="href"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Website</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter company website URL" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe your role and responsibilities"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </form>
                            </Form>
                        </ScrollArea>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                form.handleSubmit(onSubmit)();
                            }
                            }>
                            {initialData ? "Update" : "Add"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default AddWorkForm;