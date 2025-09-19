import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Archive, Search, Download, Eye, FileText, Users, Calendar, Briefcase } from "lucide-react";

export default function Records() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Records</h1>
            <p className="text-muted-foreground">Employee records, documents, and historical data</p>
          </div>
          <Button className="flex items-center gap-2">
            <Archive className="w-4 h-4" />
            Archive Records
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Records</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,456</div>
              <p className="text-xs text-muted-foreground">All employee records</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">Current workforce</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Archived</CardTitle>
              <Archive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">Past employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,892</div>
              <p className="text-xs text-muted-foreground">Stored files</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Record Categories</CardTitle>
              <CardDescription>Distribution of employee records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Personal Records</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">245 Records</Badge>
                  <span className="text-sm text-muted-foreground">100%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Employment History</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">373 Records</Badge>
                  <span className="text-sm text-muted-foreground">All changes</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Salary Revisions</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">456 Records</Badge>
                  <span className="text-sm text-muted-foreground">Historical</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Training Records</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">189 Records</Badge>
                  <span className="text-sm text-muted-foreground">Certifications</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Record management operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate Service Records
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Employee Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Archive className="w-4 h-4 mr-2" />
                Archive Inactive Records
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                View Historical Changes
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Employee Records</CardTitle>
            <CardDescription>Complete employee record management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="max-w-sm" />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Joining Date</TableHead>
                  <TableHead>Service Years</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe (EMP001)</TableCell>
                  <TableCell>Production</TableCell>
                  <TableCell>Jan 15, 2019</TableCell>
                  <TableCell>5.2 years</TableCell>
                  <TableCell>Mar 01, 2024</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Badge variant="outline">12 Files</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith (EMP002)</TableCell>
                  <TableCell>Quality</TableCell>
                  <TableCell>Mar 10, 2020</TableCell>
                  <TableCell>4.0 years</TableCell>
                  <TableCell>Feb 28, 2024</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Badge variant="outline">8 Files</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mike Johnson (EMP003)</TableCell>
                  <TableCell>Maintenance</TableCell>
                  <TableCell>Jul 22, 2018</TableCell>
                  <TableCell>5.8 years</TableCell>
                  <TableCell>Mar 05, 2024</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Badge variant="outline">15 Files</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sarah Wilson (EMP104)</TableCell>
                  <TableCell>HR</TableCell>
                  <TableCell>Dec 01, 2021</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Jan 15, 2024</TableCell>
                  <TableCell><Badge variant="secondary">Resigned</Badge></TableCell>
                  <TableCell>
                    <Badge variant="outline">6 Files</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Archive className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
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