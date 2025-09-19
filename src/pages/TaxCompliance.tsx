import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText, AlertTriangle, CheckCircle, Calendar, DollarSign } from "lucide-react";

export default function TaxCompliance() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tax & Compliance</h1>
            <p className="text-muted-foreground">Manage PF, ESIC, TDS, and other statutory compliances</p>
          </div>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Generate Reports
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PF Contribution</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹8.5L</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ESIC Contribution</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1.2L</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TDS Deducted</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹3.8L</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Returns</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Due this month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Current month compliance overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>PF ECR Filing</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Filed
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>ESIC Returns</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Filed
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>TDS Returns</span>
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Pending
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Professional Tax</span>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Due 15th
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Generate compliance reports and files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Download PF ECR
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Download ESIC Return
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate TDS Certificate
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Professional Tax Report
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Statutory Records</CardTitle>
            <CardDescription>Employee-wise statutory contribution records</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>PF Wages</TableHead>
                  <TableHead>PF Contribution</TableHead>
                  <TableHead>ESIC Wages</TableHead>
                  <TableHead>ESIC Contribution</TableHead>
                  <TableHead>TDS</TableHead>
                  <TableHead>PT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe (EMP001)</TableCell>
                  <TableCell>₹25,000</TableCell>
                  <TableCell>₹3,000</TableCell>
                  <TableCell>₹45,000</TableCell>
                  <TableCell>₹1,350</TableCell>
                  <TableCell>₹2,500</TableCell>
                  <TableCell>₹200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith (EMP002)</TableCell>
                  <TableCell>₹30,000</TableCell>
                  <TableCell>₹3,600</TableCell>
                  <TableCell>₹54,000</TableCell>
                  <TableCell>₹1,620</TableCell>
                  <TableCell>₹3,200</TableCell>
                  <TableCell>₹200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mike Johnson (EMP003)</TableCell>
                  <TableCell>₹35,000</TableCell>
                  <TableCell>₹4,200</TableCell>
                  <TableCell>₹63,000</TableCell>
                  <TableCell>₹1,890</TableCell>
                  <TableCell>₹4,500</TableCell>
                  <TableCell>₹200</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}