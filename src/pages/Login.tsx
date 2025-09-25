import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("hospital");

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <div className="bg-primary p-3 rounded-lg">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your health records</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <p className="text-sm text-muted-foreground text-center">
              Choose your login type and enter your credentials
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={loginType} onValueChange={setLoginType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="hospital" className="text-sm">Hospital</TabsTrigger>
                <TabsTrigger value="patient" className="text-sm">Patient</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hospital" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hospital-username">Username</Label>
                  <Input
                    id="hospital-username"
                    type="text"
                    placeholder="Enter Username"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hospital-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="hospital-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="h-12 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Login
                </Button>
              </TabsContent>
              
              <TabsContent value="patient" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-username">Username</Label>
                  <Input
                    id="patient-username"
                    type="text"
                    placeholder="Enter Username"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="patient-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="patient-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="h-12 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Login
                </Button>
              </TabsContent>
            </Tabs>
            
            <div className="text-center space-y-4 mt-6">
              <Link to="/forgot-password" className="text-primary hover:underline text-sm">
                Forgot Your Password?
              </Link>
              
              <div className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">
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