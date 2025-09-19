import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Play, Download, Calculator, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function PayrollProcessing() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payroll Processing</h1>
            <p className="text-muted-foreground">Process monthly payroll and generate salary statements</p>
          </div>
          <Button className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            Run Payroll
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Month</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">March 2024</div>
              <p className="text-xs text-muted-foreground">Processing period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">To be processed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gross Amount</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1.2Cr</div>
              <p className="text-xs text-muted-foreground">Total gross salary</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ready</div>
              <p className="text-xs text-muted-foreground">For processing</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Processing Checklist</CardTitle>
              <CardDescription>Ensure all data is ready before processing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Attendance Data</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Complete
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Leave Applications</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Approved
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Salary Structures</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Updated
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Loan EMIs</span>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Review
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Processing Options</CardTitle>
              <CardDescription>Configure payroll processing parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Processing Month</label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option>March 2024</option>
                  <option>February 2024</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Plant Selection</label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option>All Plants</option>
                  <option>Plant 1</option>
                  <option>Plant 2</option>
                  <option>Plant 3</option>
                </select>
              </div>
              <Button className="w-full flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Start Processing
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payroll History</CardTitle>
            <CardDescription>Previous payroll processing records</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Gross Amount</TableHead>
                  <TableHead>Net Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Processed On</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Feb 2024</TableCell>
                  <TableCell>245</TableCell>
                  <TableCell>₹1.18Cr</TableCell>
                  <TableCell>₹89.5L</TableCell>
                  <TableCell><Badge variant="default">Completed</Badge></TableCell>
                  <TableCell>Mar 01, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jan 2024</TableCell>
                  <TableCell>243</TableCell>
                  <TableCell>₹1.15Cr</TableCell>
                  <TableCell>₹87.2L</TableCell>
                  <TableCell><Badge variant="default">Completed</Badge></TableCell>
                  <TableCell>Feb 01, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}