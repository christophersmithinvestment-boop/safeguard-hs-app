import Link from "next/link";
import { LayoutDashboard, AlertTriangle, GraduationCap, Bell, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Risk Assessment", href: "/risk-assessment", icon: AlertTriangle },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "H&S Updates", href: "/updates", icon: Bell },
];

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={cn("flex h-screen w-64 flex-col border-r bg-card text-card-foreground", className)}>
            <div className="flex h-16 items-center border-b px-6">
                <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
                <span className="text-xl font-bold tracking-tight">SafeGuard</span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                        >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="border-t p-4">
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm">
                        <p className="font-medium">User Name</p>
                        <p className="text-xs text-muted-foreground">Safety Officer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
