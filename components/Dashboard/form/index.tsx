"use client";
import { cn } from "@/lib/utils";
import { Input, Textarea, Chip } from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import Uploader from "./uploader";


export default function Form({
    title,
    description,
    helpText,
    inputAttrs,
    handleSubmit,
}: {
    title: string;
    description: string;
    helpText: string;
    inputAttrs: {
        name: string;
        type: string;
        defaultValue: string;
        placeholder?: string;
        maxLength?: number;
        pattern?: string;
    };
    handleSubmit: any;
}) {
    return (
        <form
            action={async (data: FormData) => {
                handleSubmit(data, name, inputAttrs.name).then(async (res: any) => {
                    if (res.error) {
                        console.log(res.error)
                        toast.error("An error occurred. Please try again later.");
                    } else {
                        toast.success(`Successfully updated ${inputAttrs.name}!`);
                    }
                });
            }}
            className="rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-primary-foreground/20"
        >
            <div className="relative flex flex-col space-y-4 p-5 sm:p-10">
                <h2 className="font-title text-xl dark:text-white">{title}</h2>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                    {description}
                </p>
                {inputAttrs.name === "image" || inputAttrs.name === "avatar" || inputAttrs.name === "logo" ? (
                    <Uploader
                        className="h-[100px] w-[100px]"
                        defaultValue={inputAttrs.defaultValue as string}
                        name={inputAttrs.name}
                    />
                ) : inputAttrs.type === "description" ? (
                    <Textarea
                        {...inputAttrs}
                        required
                        disableAnimation
                        disableAutosize
                        variant="bordered"
                        classNames={{
                            base: "max-w-full",
                            input: "resize-y min-h-[40px]",
                        }}
                    />
                ) : inputAttrs.type === "about" ? (
                    <Textarea
                        {...inputAttrs}
                        required
                        disableAnimation
                        disableAutosize
                        variant="bordered"
                        className="bg-primary-foreground/20"
                        classNames={{
                            base: "max-w-full ",
                            input: "resize-y  lg:text-xl",
                        }}
                    />
                ) : (
                    <Input
                        {...inputAttrs}
                        required
                        className="w-full max-w-md rounded-md bg-primary-foreground/20 px-4 py-2"
                    />
                )}
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-b-lg border-t border-stone-200 bg-gray-200 p-3 dark:border-stone-700 dark:bg-primary/40 sm:flex-row sm:justify-between sm:space-y-0 sm:px-10">
                <p className="text-sm text-stone-500 dark:text-stone-400">{helpText}</p>
                <FormButton />
            </div>
        </form>
    );
}



function FormButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className={cn(
                "flex h-8 w-32 items-center justify-center space-x-2 rounded-md border text-sm transition-all focus:outline-none sm:h-10",
                pending
                    ? "cursor-not-allowed border-stone-200 bg-stone-100 text-stone-400 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
                    : "border-black bg-black text-white hover:bg-white hover:text-black dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800",
            )}
            disabled={pending}
        >
            {pending ? <Loader2 className="animate-spin w-4 h-4" /> : <p>Save Changes</p>}
        </button>
    );
}