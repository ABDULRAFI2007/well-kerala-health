import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Shield, Clock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "7708735609";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // In a real app, this would verify the OTP
      navigate("/account-setup", { state: { mobileNumber } });
    }
  };

  const handleResendOTP = () => {
    setCountdown(60);
    setOtp("");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Verify Your Phone</h1>
          <p className="text-gray-600">We've sent a 6-digit code to +91 {mobileNumber}</p>
        </div>

        {/* OTP Verification Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter OTP</h2>
            <p className="text-gray-600 text-sm">Enter the verification code sent to your mobile</p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Label htmlFor="otp" className="text-gray-700 font-medium text-sm">Verification Code</Label>
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot index={0} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                  <InputOTPSlot index={1} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                  <InputOTPSlot index={2} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                  <InputOTPSlot index={3} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                  <InputOTPSlot index={4} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                  <InputOTPSlot index={5} className="w-12 h-12 text-lg border-2 border-gray-200 rounded-md focus:border-blue-500" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button 
              onClick={handleVerifyOTP}
              className="w-full h-12 bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white font-medium rounded-md"
              disabled={otp.length !== 6}
            >
              Verify OTP
            </Button>

            <div className="text-center space-y-3">
              {countdown > 0 ? (
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Resend OTP in {formatTime(countdown)}</span>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleResendOTP}
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  Resend OTP
                </Button>
              )}
              
              <div>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/patient-registration")}
                  className="text-gray-500 hover:text-gray-600 text-sm"
                >
                  Change Phone Number
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded" />
              </div>
              <p className="text-blue-600 text-sm font-medium">Your phone number will be securely stored and used only for health record access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;