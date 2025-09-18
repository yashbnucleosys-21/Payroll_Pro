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
  Clock, 
  Search, 
  Filter, 
  Download, 
  Upload,
  CalendarIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  Timer
} from "lucide-react"

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedPlant, setSelectedPlant] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Mock data
  const attendanceData = [
    {
      empId: "EMP001",
      name: "Rajesh Kumar",
      department: "Production",
      plant: "Plant 1 - Mumbai",
      shift: "General (9:00 AM - 6:00 PM)",
      inTime: "08:45 AM",
      outTime: "06:15 PM",
      totalHours: "9:30",
      overtime: "1:30",
      status: "Present",
      lateMinutes: 0
    },
    {
      empId: "EMP002",
      name: "Priya Sharma", 
      department: "HR",
      plant: "Plant 1 - Mumbai",
      shift: "General (9:00 AM - 6:00 PM)",
      inTime: "09:15 AM",
      outTime: "06:00 PM",
      totalHours: "8:45",
      overtime: "0:00",
      status: "Present",
      lateMinutes: 15
    },
    {
      empId: "EMP003",
      name: "Amit Patel",
      department: "Maintenance", 
      plant: "Plant 2 - Chennai",
      shift: "Night (10:00 PM - 6:00 AM)",
      inTime: "-",
      outTime: "-",
      totalHours: "-",
      overtime: "-",
      status: "Absent",
      lateMinutes: 0
    },
    {
      empId: "EMP004",
      name: "Sunita Rao",
      department: "Quality",
      plant: "Plant 3 - Pune", 
      shift: "General (9:00 AM - 6:00 PM)",
      inTime: "09:00 AM",
      outTime: "01:00 PM",
      totalHours: "4:00",
      overtime: "0:00",
      status: "Half Day",
      lateMinutes: 0
    }
  ]

  const stats = [
    { 
      label: "Present", 
      value: "1,156", 
      percentage: "92.7%", 
      icon: CheckCircle, 
      color: "text-success",
      bgColor: "bg-success/10"
    },
    { 
      label: "Absent", 
      value: "67", 
      percentage: "5.4%", 
      icon: XCircle, 
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    { 
      label: "Late Arrivals", 
      value: "24", 
      percentage: "1.9%", 
      icon: AlertCircle, 
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    { 
      label: "Overtime", 
      value: "89", 
      percentage: "7.1%", 
      icon: Timer, 
      color: "text-info",
      bgColor: "bg-info/10"
    }
  ]

  const filteredAttendance = attendanceData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.empId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlant = selectedPlant === "all" || record.plant.includes(selectedPlant)
    const matchesStatus = selectedStatus === "all" || record.status === selectedStatus
    return matchesSearch && matchesPlant && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Present":
        return <Badge className="bg-success text-success-foreground">Present</Badge>
      case "Absent":
        return <Badge variant="destructive">Absent</Badge>
      case "Half Day":
        return <Badge className="bg-warning text-warning-foreground">Half Day</Badge>
      case "Leave":
        return <Badge variant="secondary">On Leave</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Attendance Management</h1>
            <p className="text-muted-foreground">Track and manage employee attendance across all plants</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import Biometric
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
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
                    <p className="text-xs text-muted-foreground">{stat.percentage}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Attendance Table */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Daily Attendance Report
            </CardTitle>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-40 justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>

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
                
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Present">Present</SelectItem>
                    <SelectItem value="Absent">Absent</SelectItem>
                    <SelectItem value="Half Day">Half Day</SelectItem>
                    <SelectItem value="Leave">On Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead>In Time</TableHead>
                    <TableHead>Out Time</TableHead>
                    <TableHead>Total Hours</TableHead>
                    <TableHead>Overtime</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendance.map((record) => (
                    <TableRow key={record.empId}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{record.name}</div>
                          <div className="text-sm text-muted-foreground">{record.empId}</div>
                        </div>
                      </TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.plant}</TableCell>
                      <TableCell>
                        <div className="text-sm">{record.shift}</div>
                      </TableCell>
                      <TableCell>
                        <div className={`font-medium ${record.lateMinutes > 0 ? 'text-warning' : 'text-foreground'}`}>
                          {record.inTime}
                          {record.lateMinutes > 0 && (
                            <div className="text-xs text-warning">
                              ({record.lateMinutes}min late)
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{record.outTime}</TableCell>
                      <TableCell>{record.totalHours}</TableCell>
                      <TableCell>
                        <span className={record.overtime !== "0:00" && record.overtime !== "-" ? "text-info font-medium" : ""}>
                          {record.overtime}
                        </span>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(record.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Manual Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Add manual attendance entries for employees
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Add Manual Entry
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Bulk Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Apply attendance actions to multiple employees
              </p>
              <Button variant="outline" className="w-full">
                Bulk Operations
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Attendance Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Configure attendance policies and rules
              </p>
              <Button variant="outline" className="w-full">
                Manage Rules
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Attendance