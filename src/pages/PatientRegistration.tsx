import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PatientRegistration = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      // In a real app, this would send an OTP
      navigate("/otp-verification", { state: { mobileNumber } });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-10 w-10 text-white"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-700 mb-2">Kerala Health Records</h1>
          <p className="text-slate-500">Digital health management for migrant workers</p>
        </div>

        {/* Phone Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <Phone className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-slate-700 mb-2">Phone Registration</h2>
            <p className="text-slate-500 text-sm">Enter your mobile number to create your health record account</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="mobile" className="text-slate-700 font-medium">Mobile Number</Label>
              <div className="flex mt-2">
                <div className="flex items-center px-3 bg-slate-100 border border-r-0 border-slate-300 rounded-l-md">
                  <span className="text-slate-600">+91</span>
                </div>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="rounded-l-none border-l-0"
                />
              </div>
            </div>

            <Button 
              onClick={handleSendOTP}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium"
              disabled={mobileNumber.length !== 10}
            >
              Send OTP
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 space-y-4">
          <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-slate-700 font-medium">Secure & Confidential</span>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-slate-700 font-medium">Accessible Healthcare</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-xs">
            By registering, you agree to maintain accurate health information for community wellness
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;