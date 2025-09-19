import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, CreditCard, DollarSign, TrendingDown, AlertCircle } from "lucide-react";

export default function Loans() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Loans & Advances</h1>
            <p className="text-muted-foreground">Manage employee loans and salary advances</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Loan
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹18.5L</div>
              <p className="text-xs text-muted-foreground">Outstanding balance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Recovery</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.8L</div>
              <p className="text-xs text-muted-foreground">EMI deductions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Types</CardTitle>
              <CardDescription>Distribution of loan categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Festival Advance</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">15 Loans</Badge>
                  <span className="text-sm text-muted-foreground">₹4.5L</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Education Loan</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">8 Loans</Badge>
                  <span className="text-sm text-muted-foreground">₹6.2L</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Medical Emergency</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">12 Loans</Badge>
                  <span className="text-sm text-muted-foreground">₹3.8L</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Personal Loan</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">10 Loans</Badge>
                  <span className="text-sm text-muted-foreground">₹4.0L</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Loan management operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Add New Loan
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                Process EMI Deductions
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingDown className="w-4 h-4 mr-2" />
                Generate Recovery Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="w-4 h-4 mr-2" />
                Review Overdue Loans
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Loan Records</CardTitle>
            <CardDescription>Employee loan details and repayment status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search loans..." className="max-w-sm" />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Loan Type</TableHead>
                  <TableHead>Sanctioned Amount</TableHead>
                  <TableHead>EMI Amount</TableHead>
                  <TableHead>Paid Installments</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe (EMP001)</TableCell>
                  <TableCell>Festival Advance</TableCell>
                  <TableCell>₹50,000</TableCell>
                  <TableCell>₹5,000</TableCell>
                  <TableCell>6/10</TableCell>
                  <TableCell>₹20,000</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith (EMP002)</TableCell>
                  <TableCell>Education Loan</TableCell>
                  <TableCell>₹1,00,000</TableCell>
                  <TableCell>₹8,333</TableCell>
                  <TableCell>8/12</TableCell>
                  <TableCell>₹33,333</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mike Johnson (EMP003)</TableCell>
                  <TableCell>Medical Emergency</TableCell>
                  <TableCell>₹75,000</TableCell>
                  <TableCell>₹7,500</TableCell>
                  <TableCell>10/10</TableCell>
                  <TableCell>₹0</TableCell>
                  <TableCell><Badge variant="secondary">Completed</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sarah Wilson (EMP004)</TableCell>
                  <TableCell>Personal Loan</TableCell>
                  <TableCell>₹60,000</TableCell>
                  <TableCell>₹6,000</TableCell>
                  <TableCell>2/10</TableCell>
                  <TableCell>₹48,000</TableCell>
                  <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <AlertCircle className="w-4 h-4" />
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