import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HospitalRegister from "./pages/HospitalRegister";
import HospitalDashboard from "./pages/HospitalDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import PatientRecords from "./pages/PatientRecords";
import NewRegistration from "./pages/NewRegistration";
import MedicalEntry from "./pages/MedicalEntry";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import PatientRegistration from "./pages/PatientRegistration";
import OTPVerification from "./pages/OTPVerification";
import AccountSetup from "./pages/AccountSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hospital-register" element={<HospitalRegister />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/patient-records" element={<PatientRecords />} />
          <Route path="/new-registration" element={<NewRegistration />} />
          <Route path="/medical-entry" element={<MedicalEntry />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/account-setup" element={<AccountSetup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
