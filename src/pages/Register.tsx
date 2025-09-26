import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileText, User, Shield, Clock, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-700 mb-4">Kerala Health Records</h1>
          <p className="text-slate-500 text-lg">Digital health management for migrant workers</p>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Choose Registration Type</h2>
          <p className="text-slate-500 text-lg">Select the appropriate registration option for your role</p>
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Hospital Registration Card */}
          <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="bg-blue-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">Hospital Registration</h3>
              <p className="text-slate-500">For healthcare institutions and medical facilities</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">NABH Accreditation Verified</span>
                </div>
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">Medical Professional Access</span>
                </div>
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <User className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">Patient Management System</span>
                </div>
              </div>
              <Link to="/hospital-register">
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Register as Hospital
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Patient Registration Card */}
          <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="bg-green-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">Patient Registration</h3>
              <p className="text-slate-500">For individuals seeking healthcare services</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <Heart className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">Personal Health Records</span>
                </div>
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">Secure & Confidential</span>
                </div>
                <div className="flex items-center space-x-3 bg-teal-50 p-4 rounded-lg">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700 font-medium">24/7 Access to Records</span>
                </div>
              </div>
              <Link to="/patient-registration">
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium">
                  Register as Patient
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            By proceeding, you agree to maintain accurate health information and comply with Kerala Health Records policies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;