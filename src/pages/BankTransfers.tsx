import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, Download, Search, CheckCircle, Clock, CreditCard, AlertCircle } from "lucide-react";

export default function BankTransfers() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bank Transfers</h1>
            <p className="text-muted-foreground">Manage salary disbursements and bank transfers</p>
          </div>
          <Button className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Generate Transfer File
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹89.5L</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Employees</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">To be paid</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transferred</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">240</div>
              <p className="text-xs text-muted-foreground">Successfully processed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Failed/Retry required</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Status</CardTitle>
              <CardDescription>Current transfer batch status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>SBI Bank</span>
                <div className="flex items-center gap-2">
                  <Badge variant="default">120 Transferred</Badge>
                  <Badge variant="secondary">2 Pending</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>HDFC Bank</span>
                <div className="flex items-center gap-2">
                  <Badge variant="default">85 Transferred</Badge>
                  <Badge variant="secondary">1 Pending</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>ICICI Bank</span>
                <div className="flex items-center gap-2">
                  <Badge variant="default">35 Transferred</Badge>
                  <Badge variant="destructive">2 Failed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Transfer file generation and management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Generate NEFT File
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Download Transfer Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Transferred
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="w-4 h-4 mr-2" />
                Retry Failed Transfers
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transfer Records</CardTitle>
            <CardDescription>Employee-wise salary transfer details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search transfers..." className="max-w-sm" />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Bank Account</TableHead>
                  <TableHead>IFSC</TableHead>
                  <TableHead>Net Salary</TableHead>
                  <TableHead>UTR Number</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Transfer Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe (EMP001)</TableCell>
                  <TableCell>****1234</TableCell>
                  <TableCell>SBIN0001234</TableCell>
                  <TableCell>₹38,250</TableCell>
                  <TableCell>UTR123456789</TableCell>
                  <TableCell><Badge variant="default">Transferred</Badge></TableCell>
                  <TableCell>Mar 05, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith (EMP002)</TableCell>
                  <TableCell>****5678</TableCell>
                  <TableCell>HDFC0001567</TableCell>
                  <TableCell>₹45,900</TableCell>
                  <TableCell>UTR987654321</TableCell>
                  <TableCell><Badge variant="default">Transferred</Badge></TableCell>
                  <TableCell>Mar 05, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mike Johnson (EMP003)</TableCell>
                  <TableCell>****9012</TableCell>
                  <TableCell>ICIC0001890</TableCell>
                  <TableCell>₹53,550</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                  <TableCell>-</TableCell>
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