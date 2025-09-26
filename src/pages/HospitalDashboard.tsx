import { useState } from "react";
import { Users, Shield, Calendar, ChevronDown, Settings, FileText, UserPlus, Activity, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { title: "Dashboard", icon: BarChart3, active: true },
  { title: "Patient Records", icon: Users },
  { title: "New Registration", icon: UserPlus },
  { title: "Medical Entry", icon: Activity },
  { title: "Reports", icon: FileText },
  { title: "Settings", icon: Settings },
];

function HospitalSidebar() {
  return (
    <Sidebar className="w-60">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Kerala Health</h2>
              <p className="text-sm text-slate-500">Migrant Worker System</p>
            </div>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={item.active ? "bg-blue-500 text-white hover:bg-blue-600" : "text-slate-600 hover:bg-slate-100"}
                  >
                    <a href="#" className="flex items-center gap-3 px-4 py-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const HospitalDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <HospitalSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold text-slate-800">
                  Health Record Management System
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="flex items-center gap-2">
                  English <ChevronDown className="h-4 w-4" />
                </Button>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-blue-500">
                    <AvatarFallback className="bg-blue-500 text-white text-sm font-medium">
                      DSK
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-medium text-slate-800">Dr. Sarah Kumar</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    Total Patients
                  </CardTitle>
                  <Users className="h-5 w-5 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-800">1,247</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    Vaccinated
                  </CardTitle>
                  <Shield className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-800">0</div>
                  <p className="text-xs text-green-600 mt-1">0% vaccination rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    This Month
                  </CardTitle>
                  <Calendar className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-800">0</div>
                  <p className="text-xs text-green-600 mt-1">Health checkups completed</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Patient Records */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  Recent Patient Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample Record */}
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 bg-slate-100">
                        <AvatarFallback className="text-sm font-medium text-slate-600">
                          MR
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-slate-800">Patient Record #001</h3>
                        <p className="text-sm text-slate-500">Registration pending</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>

                  {/* Empty State */}
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-slate-300 rounded-full flex items-center justify-center">
                        <span className="text-slate-400 text-xl">!</span>
                      </div>
                    </div>
                    <p className="text-slate-500 mb-6">
                      No recent patient records found. Start by registering new patients.
                    </p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Register New Patient
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HospitalDashboard;