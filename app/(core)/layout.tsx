import Navbar from "@/components/shared/Navbar";

export default function CoreRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <Navbar />
        </div>
    );
}