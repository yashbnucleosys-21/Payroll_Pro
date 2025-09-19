import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Shifts from "./pages/Shifts";
import SalaryStructure from "./pages/SalaryStructure";
import PayrollProcessing from "./pages/PayrollProcessing";
import TaxCompliance from "./pages/TaxCompliance";
import Payslips from "./pages/Payslips";
import BankTransfers from "./pages/BankTransfers";
import Loans from "./pages/Loans";
import ExpenseClaims from "./pages/ExpenseClaims";
import BonusOvertime from "./pages/BonusOvertime";
import Records from "./pages/Records";
import Reports from "./pages/Reports";
import AuditLogs from "./pages/AuditLogs";
import Locations from "./pages/Locations";
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
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/salary-structure" element={<SalaryStructure />} />
          <Route path="/payroll" element={<PayrollProcessing />} />
          <Route path="/compliance" element={<TaxCompliance />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/bank-transfers" element={<BankTransfers />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/expenses" element={<ExpenseClaims />} />
          <Route path="/bonus-overtime" element={<BonusOvertime />} />
          <Route path="/records" element={<Records />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/audit" element={<AuditLogs />} />
          <Route path="/locations" element={<Locations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
