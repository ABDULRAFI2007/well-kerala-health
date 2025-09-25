import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HospitalRegister = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    nabhNumber: "",
    mobileNumber: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-700 mb-4">Hospital Registration</h1>
          <p className="text-slate-500 text-lg">Register your healthcare institution</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* NABH Section Header */}
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-blue-500" />
            <div>
              <h2 className="text-xl font-bold text-slate-700">NABH Accredited Institution</h2>
              <p className="text-slate-500 text-sm">Enter your hospital details and NABH accreditation number</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">Hospital/Institution Name</label>
              <Input
                type="text"
                placeholder="Enter hospital name"
                value={formData.hospitalName}
                onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                className="h-12 border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">NABH Accreditation Number</label>
              <Input
                type="text"
                placeholder="Enter NABH accreditation number"
                value={formData.nabhNumber}
                onChange={(e) => handleInputChange('nabhNumber', e.target.value)}
                className="h-12 border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">Contact Mobile Number</label>
              <div className="flex">
                <div className="bg-slate-100 border border-slate-200 border-r-0 rounded-l-md px-3 flex items-center">
                  <span className="text-slate-600 font-medium">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className="h-12 border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 rounded-l-none border-l-0"
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Link to="/register" className="flex-1">
              <Button 
                variant="outline" 
                className="w-full h-12 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <Button 
              className="flex-1 h-12 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium"
            >
              Send OTP
            </Button>
          </div>
        </div>

        {/* Demo NABH Numbers */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-6">
          <div className="mb-2">
            <span className="font-semibold text-teal-800">Valid NABH Numbers for Demo:</span>
          </div>
          <div className="text-sm text-teal-700">
            NABH2023001, NABH2023002, NABH2023003, NABH2024001, NABH2024002
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            By registering, you confirm that your institution holds valid NABH accreditation
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegister;