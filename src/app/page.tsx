import Link from "next/link";
import { AlertTriangle, CheckCircle, Clock, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Link href="/risk-assessment" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          New Incident Report
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Days Since Accident</span>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">124</div>
          <p className="text-xs text-muted-foreground">+1 from yesterday</p>
        </div>
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Open Risks</span>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </div>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">2 high priority</p>
        </div>
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Training Due</span>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">Across 3 departments</p>
        </div>
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Safety Score</span>
            <CheckCircle className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-bold">98%</div>
          <p className="text-xs text-muted-foreground">+2% from last month</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">Latest health and safety updates.</p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Risk Assessment #10{i} Submitted</p>
                    <p className="text-sm text-muted-foreground">
                      Warehouse Zone {i} assessment completed.
                    </p>
                  </div>
                  <div className="ml-auto font-medium">Just now</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Quick Actions</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="grid gap-2">
              <Link href="/risk-assessment" className="w-full justify-start rounded-md border px-4 py-2 text-left text-sm font-medium hover:bg-muted transition-colors flex items-center">
                Report Hazard
              </Link>
              <Link href="/risk-assessment" className="w-full justify-start rounded-md border px-4 py-2 text-left text-sm font-medium hover:bg-muted transition-colors flex items-center">
                Start Inspection
              </Link>
              <Link href="/training" className="w-full justify-start rounded-md border px-4 py-2 text-left text-sm font-medium hover:bg-muted transition-colors flex items-center">
                View Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
