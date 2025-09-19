import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Calculator, TrendingUp, Clock, Gift, DollarSign, CheckCircle } from "lucide-react";

export default function BonusOvertime() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bonus & Overtime</h1>
            <p className="text-muted-foreground">Manage bonus payments and overtime calculations</p>
          </div>
          <Button className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Calculate Bonus
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Bonus</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45.2L</div>
              <p className="text-xs text-muted-foreground">FY 2023-24</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,450</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">OT Amount</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹8.9L</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eligible Employees</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">238</div>
              <p className="text-xs text-muted-foreground">For bonus</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bonus Calculation</CardTitle>
              <CardDescription>Annual bonus as per Payment of Bonus Act</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Eligible Salary Range</span>
                <span className="text-sm font-medium">₹7,000 - ₹21,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bonus Percentage</span>
                <span className="text-sm font-medium">8.33%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Minimum Working Days</span>
                <span className="text-sm font-medium">240 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Due Date</span>
                <span className="text-sm font-medium">Oct 07, 2024</span>
              </div>
              <Button className="w-full">
                <Calculator className="w-4 h-4 mr-2" />
                Process Annual Bonus
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overtime Settings</CardTitle>
              <CardDescription>OT calculation rules and rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Daily OT Threshold</span>
                <span className="text-sm font-medium">8 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Weekly OT Threshold</span>
                <span className="text-sm font-medium">48 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span>OT Rate (Normal)</span>
                <span className="text-sm font-medium">1.5x Basic Rate</span>
              </div>
              <div className="flex items-center justify-between">
                <span>OT Rate (Holiday)</span>
                <span className="text-sm font-medium">2x Basic Rate</span>
              </div>
              <Button variant="outline" className="w-full">
                <Clock className="w-4 h-4 mr-2" />
                Update OT Rules
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bonus Records</CardTitle>
              <CardDescription>Employee bonus payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Eligible Salary</TableHead>
                    <TableHead>Working Days</TableHead>
                    <TableHead>Bonus Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>₹21,000</TableCell>
                    <TableCell>250</TableCell>
                    <TableCell>₹1,750</TableCell>
                    <TableCell><Badge variant="default">Paid</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>₹21,000</TableCell>
                    <TableCell>248</TableCell>
                    <TableCell>₹1,750</TableCell>
                    <TableCell><Badge variant="default">Paid</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mike Johnson</TableCell>
                    <TableCell>₹21,000</TableCell>
                    <TableCell>245</TableCell>
                    <TableCell>₹1,750</TableCell>
                    <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overtime Summary</CardTitle>
              <CardDescription>Monthly overtime hours and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Regular OT</TableHead>
                    <TableHead>Holiday OT</TableHead>
                    <TableHead>Total Hours</TableHead>
                    <TableHead>OT Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>15 hrs</TableCell>
                    <TableCell>8 hrs</TableCell>
                    <TableCell>23 hrs</TableCell>
                    <TableCell>₹4,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>12 hrs</TableCell>
                    <TableCell>4 hrs</TableCell>
                    <TableCell>16 hrs</TableCell>
                    <TableCell>₹3,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mike Johnson</TableCell>
                    <TableCell>20 hrs</TableCell>
                    <TableCell>6 hrs</TableCell>
                    <TableCell>26 hrs</TableCell>
                    <TableCell>₹5,100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}