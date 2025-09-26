import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Eye, EyeOff } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AccountSetup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "7708735609";

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = () => {
    if (formData.fullName && formData.userId && formData.password && formData.confirmPassword) {
      if (formData.password === formData.confirmPassword) {
        // In a real app, this would create the account
        navigate("/login");
      }
    }
  };

  const isFormValid = formData.fullName && formData.userId && formData.password && 
                     formData.confirmPassword && formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-8 w-8 text-white"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Set up your secure health record profile</p>
        </div>

        {/* Account Setup Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Setup</h2>
            <p className="text-gray-600 text-sm">Phone: +91 {mobileNumber} ✓ Verified</p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="fullName" className="text-gray-700 font-medium text-sm mb-2 block">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="userId" className="text-gray-700 font-medium text-sm mb-2 block">User ID</Label>
              <Input
                id="userId"
                type="text"
                placeholder="Choose a unique user ID"
                value={formData.userId}
                onChange={(e) => handleInputChange("userId", e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-xs text-blue-600 mt-1">This will be your unique identifier for the health system</p>
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium text-sm mb-2 block">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium text-sm mb-2 block">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                </Button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>

            <Button 
              onClick={handleCreateAccount}
              className="w-full h-12 bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white font-medium rounded-md mt-6"
              disabled={!isFormValid}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;