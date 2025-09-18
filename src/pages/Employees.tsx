import { useState } from "react"
import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Edit, 
  Eye, 
  CalendarIcon,
  Users,
  MapPin
} from "lucide-react"

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlant, setSelectedPlant] = useState("all")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [dateOfJoining, setDateOfJoining] = useState<Date>()
  const [dateOfBirth, setDateOfBirth] = useState<Date>()

  // Mock data
  const employees = [
    {
      id: "EMP001",
      name: "Rajesh Kumar",
      department: "Production",
      designation: "Machine Operator",
      plant: "Plant 1 - Mumbai",
      dateOfJoining: "2023-01-15",
      status: "Active",
      mobile: "+91 9876543210",
      email: "rajesh.kumar@company.com",
      empType: "Permanent"
    },
    {
      id: "EMP002", 
      name: "Priya Sharma",
      department: "HR",
      designation: "HR Executive",
      plant: "Plant 1 - Mumbai",
      dateOfJoining: "2022-08-20",
      status: "Active",
      mobile: "+91 9876543211",
      email: "priya.sharma@company.com",
      empType: "Permanent"
    },
    {
      id: "EMP003",
      name: "Amit Patel",
      department: "Maintenance",
      designation: "Technician",
      plant: "Plant 2 - Chennai",
      dateOfJoining: "2023-03-10",
      status: "Active",
      mobile: "+91 9876543212",
      email: "amit.patel@company.com",
      empType: "Contract"
    }
  ]

  const stats = [
    { label: "Total Employees", value: "1,247", icon: Users, color: "text-primary" },
    { label: "Active", value: "1,156", icon: Users, color: "text-success" },
    { label: "Inactive", value: "91", icon: Users, color: "text-muted-foreground" },
    { label: "Plants", value: "3", icon: MapPin, color: "text-info" }
  ]

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlant = selectedPlant === "all" || emp.plant.includes(selectedPlant)
    const matchesDept = selectedDepartment === "all" || emp.department === selectedDepartment
    return matchesSearch && matchesPlant && matchesDept
  })

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Employee Master</h1>
            <p className="text-muted-foreground">Manage employee information across all plants</p>
          </div>
          <Dialog open={showAddEmployee} onOpenChange={setShowAddEmployee}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateOfBirth && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateOfBirth}
                        onSelect={setDateOfBirth}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input id="mobile" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Aadhaar Number *</Label>
                  <Input id="aadhaar" placeholder="XXXX XXXX XXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number *</Label>
                  <Input id="pan" placeholder="ABCDE1234F" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plant">Work Location *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select plant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plant1">Plant 1 - Mumbai</SelectItem>
                      <SelectItem value="plant2">Plant 2 - Chennai</SelectItem>
                      <SelectItem value="plant3">Plant 3 - Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="quality">Quality Control</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="admin">Administration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation *</Label>
                  <Input id="designation" placeholder="Enter designation" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Joining *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateOfJoining && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateOfJoining ? format(dateOfJoining, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateOfJoining}
                        onSelect={setDateOfJoining}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="address">Present Address</Label>
                  <Input id="address" placeholder="Enter present address" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowAddEmployee(false)}>
                  Cancel
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Save Employee
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle>Employee Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or employee ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={selectedPlant} onValueChange={setSelectedPlant}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plants</SelectItem>
                    <SelectItem value="Plant 1">Plant 1 - Mumbai</SelectItem>
                    <SelectItem value="Plant 2">Plant 2 - Chennai</SelectItem>
                    <SelectItem value="Plant 3">Plant 3 - Pune</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Production">Production</SelectItem>
                    <SelectItem value="HR">Human Resources</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                    <SelectItem value="Quality">Quality Control</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Employee Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">{employee.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.designation}</TableCell>
                      <TableCell>{employee.plant}</TableCell>
                      <TableCell>
                        <Badge variant={employee.empType === 'Permanent' ? 'default' : 'secondary'}>
                          {employee.empType}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={employee.status === 'Active' ? 'default' : 'secondary'}
                          className={employee.status === 'Active' ? 'bg-success text-success-foreground' : ''}
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default Employees