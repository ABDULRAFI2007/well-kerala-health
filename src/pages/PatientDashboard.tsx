import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  Activity, 
  FileText, 
  Settings,
  LogOut,
  Bell,
  Edit
} from 'lucide-react';

const PatientDashboard = () => {
  // Mock patient data
  const patientData = {
    id: "PT001234",
    name: "John Doe",
    age: 35,
    gender: "Male",
    nativeState: "Karnataka",
    mobileNumber: "+91 9876543210",
    email: "john.doe@email.com",
    bloodGroup: "O+",
    healthIssues: ["Diabetes Type 2", "Hypertension", "Asthma"],
    emergencyContact: {
      name: "Jane Doe",
      relation: "Spouse",
      phone: "+91 9876543211"
    },
    lastVisit: "2024-01-15",
    nextAppointment: "2024-02-01"
  };

  const healthMetrics = [
    { label: "Blood Pressure", value: "140/90", status: "High", color: "destructive" },
    { label: "Blood Sugar", value: "180 mg/dL", status: "High", color: "destructive" },
    { label: "Heart Rate", value: "78 bpm", status: "Normal", color: "secondary" },
    { label: "Weight", value: "75 kg", status: "Normal", color: "secondary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {patientData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-semibold">Welcome, {patientData.name}</h1>
              <p className="text-sm text-muted-foreground">Patient ID: {patientData.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Personal Information</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                <p className="text-base">{patientData.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Age</p>
                <p className="text-base">{patientData.age} years</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Gender</p>
                <p className="text-base">{patientData.gender}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Blood Group</p>
                <p className="text-base">{patientData.bloodGroup}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Native State</p>
                <p className="text-base flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {patientData.nativeState}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Mobile Number</p>
                <p className="text-base flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  {patientData.mobileNumber}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Issues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Long-term Health Issues</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {patientData.healthIssues.map((issue, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {issue}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Recent Health Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <Badge variant={metric.color as any} className="text-xs">
                    {metric.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Emergency Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium">{patientData.emergencyContact.name}</p>
              <p className="text-sm text-muted-foreground">{patientData.emergencyContact.relation}</p>
              <p className="text-sm">{patientData.emergencyContact.phone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Last Visit</p>
                <p className="text-lg font-semibold">{patientData.lastVisit}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Next Appointment</p>
                <p className="text-lg font-semibold">{patientData.nextAppointment}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Book Appointment</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Heart className="h-6 w-6" />
                <span>Health Records</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;