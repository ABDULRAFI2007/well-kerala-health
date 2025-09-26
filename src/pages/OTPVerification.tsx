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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-700 mb-2">Verify Your Phone</h1>
          <p className="text-slate-500">We've sent a 6-digit code to +91 {mobileNumber}</p>
        </div>

        {/* OTP Verification Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <Shield className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-slate-700 mb-2">Enter OTP</h2>
            <p className="text-slate-500 text-sm">Enter the verification code sent to your mobile</p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Label htmlFor="otp" className="text-slate-700 font-medium">Verification Code</Label>
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button 
              onClick={handleVerifyOTP}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium"
              disabled={otp.length !== 6}
            >
              Verify OTP
            </Button>

            <div className="text-center space-y-3">
              {countdown > 0 ? (
                <div className="flex items-center justify-center space-x-2 text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>Resend OTP in {formatTime(countdown)}</span>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleResendOTP}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Resend OTP
                </Button>
              )}
              
              <Button
                variant="ghost"
                onClick={() => navigate("/patient-registration")}
                className="text-slate-500 hover:text-slate-600"
              >
                Change Phone Number
              </Button>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-8">
          <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-green-800 font-medium text-sm">🔒 Your phone number will be securely stored and used only for health record access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;