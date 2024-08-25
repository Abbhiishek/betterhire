import SideDashboardNavBar from "@/components/Dashboard/SideDashboardNavBar";


export const metadata = {
    title: `Dashboard`,
    description: `A dashboard layout for the app.`,
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return (
        <div className="flex flex-col gap-5 p-2 mt-2 lg:container lg:mt-10 lg:flex-row ">
            <SideDashboardNavBar />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}