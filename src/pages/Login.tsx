import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("hospital");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginType === "hospital") {
      navigate("/hospital-dashboard");
    } else {
      navigate("/patient-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">Welcome Back</h1>
          <p className="text-slate-500 text-base">Sign in to access your health records</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center pb-6 pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Login</h2>
            <p className="text-slate-500 text-sm">
              Choose your login type and enter your credentials
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            {/* Custom Tabs */}
            <div className="mb-8">
              <div className="bg-slate-100 p-1 rounded-lg grid grid-cols-2 gap-1">
                <button
                  onClick={() => setLoginType("hospital")}
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    loginType === "hospital"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  Hospital
                </button>
                <button
                  onClick={() => setLoginType("patient")}
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    loginType === "patient"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  Patient
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Username</label>
                <Input
                  type="text"
                  placeholder="Enter Username"
                  className="h-12 border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="h-12 border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              {/* Login Button */}
              <Button 
                onClick={handleLogin}
                className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
              >
                Login
              </Button>
            </div>
            
            {/* Footer Links */}
            <div className="text-center mt-8 space-y-4">
              <Link to="/forgot-password" className="block text-blue-500 hover:text-blue-600 font-medium">
                Forgot Your Password?
              </Link>
              
              <div className="text-slate-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:text-blue-600 font-medium">
                  Create Account
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;