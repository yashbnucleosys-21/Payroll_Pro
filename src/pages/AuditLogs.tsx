import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Shield, User, Calendar, Activity } from "lucide-react";

export default function AuditLogs() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
            <p className="text-muted-foreground">Track user activities and system changes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Activities</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">User actions logged</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Changes</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Critical updates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,234</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Logs</CardTitle>
            <CardDescription>Detailed system activity and user action logs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search audit logs..." className="max-w-sm" />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mar 15, 2024 10:30 AM</TableCell>
                  <TableCell className="font-medium">John Admin</TableCell>
                  <TableCell>PAYROLL_PROCESSED</TableCell>
                  <TableCell>Payroll</TableCell>
                  <TableCell>Processed March 2024 payroll</TableCell>
                  <TableCell>192.168.1.100</TableCell>
                  <TableCell><Badge variant="default">Success</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 15, 2024 09:45 AM</TableCell>
                  <TableCell className="font-medium">Jane HR</TableCell>
                  <TableCell>EMPLOYEE_UPDATED</TableCell>
                  <TableCell>Employees</TableCell>
                  <TableCell>Updated salary for EMP001</TableCell>
                  <TableCell>192.168.1.101</TableCell>
                  <TableCell><Badge variant="default">Success</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 15, 2024 09:15 AM</TableCell>
                  <TableCell className="font-medium">Mike Manager</TableCell>
                  <TableCell>LOGIN_FAILED</TableCell>
                  <TableCell>Authentication</TableCell>
                  <TableCell>Invalid password attempt</TableCell>
                  <TableCell>192.168.1.102</TableCell>
                  <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}