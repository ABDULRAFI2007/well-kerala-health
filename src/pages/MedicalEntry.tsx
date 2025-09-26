import { useState } from "react";
import { Search, Plus, Calendar, FileText, Activity, Thermometer, Heart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const MedicalEntry = () => {
  const { toast } = useToast();
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [medicalData, setMedicalData] = useState({
    visitDate: "",
    chiefComplaint: "",
    symptoms: "",
    temperature: "",
    bloodPressure: "",
    heartRate: "",
    weight: "",
    height: "",
    diagnosis: "",
    prescription: "",
    notes: "",
    followUpDate: "",
  });

  // Mock patient data
  const patients = [
    { id: "P001", name: "Rajesh Kumar", age: 28, lastVisit: "2024-01-15" },
    { id: "P002", name: "Priya Nair", age: 24, lastVisit: "2024-01-10" },
    { id: "P003", name: "Mohammed Ali", age: 35, lastVisit: "2023-12-20" },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (field: string, value: string) => {
    setMedicalData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) {
      toast({
        title: "Error",
        description: "Please select a patient first.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Medical Entry Saved",
      description: "Medical record has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Medical Entry</h1>
          <p className="text-slate-600 mt-1">Record medical examinations and treatments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Search */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Select Patient
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredPatients.map((patient) => (
                      <div
                        key={patient.id}
                        onClick={() => setSelectedPatient(patient)}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedPatient?.id === patient.id
                            ? "bg-blue-50 border-blue-200"
                            : "bg-white border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-slate-800 text-sm">{patient.name}</p>
                            <p className="text-xs text-slate-500">ID: {patient.id}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Patient Info */}
            {selectedPatient && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Patient Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {selectedPatient.name}</p>
                    <p><strong>ID:</strong> {selectedPatient.id}</p>
                    <p><strong>Age:</strong> {selectedPatient.age} years</p>
                    <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Medical Entry Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Visit Information */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Visit Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visitDate">Visit Date *</Label>
                      <Input
                        id="visitDate"
                        type="date"
                        value={medicalData.visitDate}
                        onChange={(e) => handleInputChange("visitDate", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="followUpDate">Follow-up Date</Label>
                      <Input
                        id="followUpDate"
                        type="date"
                        value={medicalData.followUpDate}
                        onChange={(e) => handleInputChange("followUpDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="chiefComplaint">Chief Complaint *</Label>
                    <Textarea
                      id="chiefComplaint"
                      value={medicalData.chiefComplaint}
                      onChange={(e) => handleInputChange("chiefComplaint", e.target.value)}
                      placeholder="Main reason for visit"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="symptoms">Symptoms</Label>
                    <Textarea
                      id="symptoms"
                      value={medicalData.symptoms}
                      onChange={(e) => handleInputChange("symptoms", e.target.value)}
                      placeholder="Describe symptoms"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Vital Signs */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Vital Signs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="temperature">Temperature (°C)</Label>
                      <Input
                        id="temperature"
                        value={medicalData.temperature}
                        onChange={(e) => handleInputChange("temperature", e.target.value)}
                        placeholder="37.0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodPressure">Blood Pressure</Label>
                      <Input
                        id="bloodPressure"
                        value={medicalData.bloodPressure}
                        onChange={(e) => handleInputChange("bloodPressure", e.target.value)}
                        placeholder="120/80"
                      />
                    </div>
                    <div>
                      <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
                      <Input
                        id="heartRate"
                        value={medicalData.heartRate}
                        onChange={(e) => handleInputChange("heartRate", e.target.value)}
                        placeholder="72"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        value={medicalData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        placeholder="70"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diagnosis & Treatment */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Diagnosis & Treatment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="diagnosis">Diagnosis *</Label>
                    <Textarea
                      id="diagnosis"
                      value={medicalData.diagnosis}
                      onChange={(e) => handleInputChange("diagnosis", e.target.value)}
                      placeholder="Medical diagnosis"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="prescription">Prescription</Label>
                    <Textarea
                      id="prescription"
                      value={medicalData.prescription}
                      onChange={(e) => handleInputChange("prescription", e.target.value)}
                      placeholder="Medications and dosage"
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={medicalData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Additional observations or instructions"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex gap-4 justify-end">
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Save Medical Entry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEntry;