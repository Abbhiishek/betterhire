"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { updateEducationDetails } from '@/actions';
import { toast } from 'sonner';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
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
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import Uploader from './uploader';


const educationSchema = z.object({
    school: z.string().min(1, 'School is required'),
    degree: z.string().min(1, 'Degree is required'),
    href: z.string().url('Must be a valid URL'),
    start: z.date({
        description: "Start Date is required",
    }),
    end: z.date({
        description: "End Date is required",
    }),
    logoUrl: z.any(),
});

type EducationFormValues = z.infer<typeof educationSchema>;

interface AddEducationFormProps {
    initialData?: EducationFormValues;
}

function AddEducationForm({ initialData }: AddEducationFormProps) {

    const [open, setOpen] = useState(false);

    const form = useForm<EducationFormValues>({
        resolver: zodResolver(educationSchema),
        defaultValues: initialData || {
            school: '',
            degree: '',
            href: '',
            start: new Date(),
            end: new Date(),
            logoUrl: '',
        },
    });


    async function onSubmit(data: EducationFormValues) {
        if (form.formState.isValid) {
            try {
                const formData = new FormData();
                formData.append('school', data.school);
                formData.append('degree', data.degree);
                formData.append('href', data.href);
                formData.append('start', `${data.start.getFullYear()}-${String(data.start.getMonth() + 1).padStart(2, '0')}`);
                formData.append('end', `${data.end.getFullYear()}-${String(data.end.getMonth() + 1).padStart(2, '0')}`);
                formData.append('logoUrl', data.logoUrl as File);

                updateEducationDetails(formData).then(async (res: any) => {
                    if (res.error) {
                        // toast.error(res.error);
                        console.log(res.error)
                        toast("An error occurred.");
                    } else {
                        toast("🌱 Successfully added Education!");
                        setOpen(false);
                    }
                });
            } catch (error) {
                console.error("Error adding education:", error);
                toast("An error occurred while adding education.");
            }

        } else {
            toast.error("Kindly fill the form correctly.")
        }
    }

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant={"default"}>Add Education</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle>=
                            Add Education
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This will be visible in your Portfolio.
                        </AlertDialogDescription>
                        <ScrollArea className="h-[450px] ">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                                    <FormField
                                        control={form.control}
                                        name="logoUrl"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Logo
                                                </FormLabel>
                                                <FormControl className="w-full flex justify-center items-center">
                                                    <Uploader
                                                        {...field}
                                                        defaultValue={field.value}
                                                        name="education_logo"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-600" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="school"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Institute name</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="Enter your Institute name" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-600" />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-row w-full justify-between items-center gap-4">
                                        <FormField
                                            control={form.control}
                                            name="start"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>From</FormLabel>
                                                    <br />
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="date"
                                                            className="w-full pl-3 pr-10 text-left font-normal"
                                                            placeholder="Pick a date"
                                                            value={field.value ? field.value.toISOString().split('T')[0] : ''}
                                                            onChange={(e) => field.onChange(new Date(e.target.value))}
                                                        />
                                                        {/* <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" /> */}

                                                    </FormControl>
                                                    <FormMessage className="text-red-600" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="end"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>To</FormLabel>
                                                    <br />
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="date"
                                                            className="w-full pl-3 pr-10 text-left font-normal"
                                                            placeholder="Pick a date"
                                                            value={field.value ? field.value.toISOString().split('T')[0] : ''}
                                                            onChange={(e) => field.onChange(new Date(e.target.value))}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-600" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="degree"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Degree</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your Degree"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-600" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="href"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Website
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter school website URL"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-600" />
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
                            Add
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    );
}

export default AddEducationForm;