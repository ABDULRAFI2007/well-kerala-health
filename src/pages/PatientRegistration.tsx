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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-8">Digital health management for migrant workers</p>
        </div>

        {/* Phone Registration Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone Registration</h2>
            <p className="text-gray-600 text-sm">Enter your mobile number to create your health record account</p>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="mobile" className="text-gray-700 font-medium text-sm mb-2 block">Mobile Number</Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                  <span className="text-gray-600 text-sm">+91</span>
                </div>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="rounded-l-none border-l-0 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button 
              onClick={handleSendOTP}
              className="w-full h-12 bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white font-medium rounded-md"
              disabled={mobileNumber.length !== 10}
            >
              Send OTP
            </Button>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-gray-700 font-medium text-sm">Secure & Confidential</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;