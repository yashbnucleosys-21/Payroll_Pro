import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, MapPin, Users, Building, Settings } from "lucide-react";

export default function Locations() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Multi-location</h1>
            <p className="text-muted-foreground">Manage multiple plant locations and their configurations</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Location
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Plants</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Active locations</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">Across all plants</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">States</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Different states</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rules</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Active configurations</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Plant Locations</CardTitle>
            <CardDescription>Manage plant-specific configurations and compliance rules</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plant Code</TableHead>
                  <TableHead>Plant Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>PT Rate</TableHead>
                  <TableHead>LWF</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">P001</TableCell>
                  <TableCell>Plant 1 - Manufacturing</TableCell>
                  <TableCell>Mumbai, Maharashtra</TableCell>
                  <TableCell>Maharashtra</TableCell>
                  <TableCell>85</TableCell>
                  <TableCell>₹200</TableCell>
                  <TableCell>₹40</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P002</TableCell>
                  <TableCell>Plant 2 - Assembly</TableCell>
                  <TableCell>Pune, Maharashtra</TableCell>
                  <TableCell>Maharashtra</TableCell>
                  <TableCell>92</TableCell>
                  <TableCell>₹200</TableCell>
                  <TableCell>₹40</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P003</TableCell>
                  <TableCell>Plant 3 - Quality Control</TableCell>
                  <TableCell>Bangalore, Karnataka</TableCell>
                  <TableCell>Karnataka</TableCell>
                  <TableCell>68</TableCell>
                  <TableCell>₹150</TableCell>
                  <TableCell>₹20</TableCell>
                  <TableCell><Badge variant="default">Active</Badge></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
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