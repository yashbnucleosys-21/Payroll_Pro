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
import { Textarea } from "@/components/ui/textarea"
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
  Calendar as CalendarIcon, 
  Search, 
  Filter, 
  Download, 
  Plus,
  Check,
  X,
  Clock,
  User,
  FileText
} from "lucide-react"

const Leave = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedLeaveType, setSelectedLeaveType] = useState("all")
  const [showApplyLeave, setShowApplyLeave] = useState(false)
  const [fromDate, setFromDate] = useState<Date>()
  const [toDate, setToDate] = useState<Date>()

  // Mock data
  const leaveApplications = [
    {
      id: "LV001",
      empId: "EMP001",
      name: "Rajesh Kumar",
      department: "Production",
      leaveType: "Casual Leave",
      fromDate: "2024-11-15",
      toDate: "2024-11-16",
      days: 2,
      appliedOn: "2024-11-10",
      reason: "Personal work",
      status: "Pending",
      approver: "Manager"
    },
    {
      id: "LV002",
      empId: "EMP002", 
      name: "Priya Sharma",
      department: "HR",
      leaveType: "Sick Leave",
      fromDate: "2024-11-12",
      toDate: "2024-11-12",
      days: 1,
      appliedOn: "2024-11-11",
      reason: "Fever",
      status: "Approved",
      approver: "HR Head"
    },
    {
      id: "LV003",
      empId: "EMP003",
      name: "Amit Patel", 
      department: "Maintenance",
      leaveType: "Privilege Leave",
      fromDate: "2024-11-20",
      toDate: "2024-11-25",
      days: 6,
      appliedOn: "2024-11-08",
      reason: "Family vacation",
      status: "Rejected",
      approver: "Plant Head"
    }
  ]

  const leaveBalances = [
    { type: "Casual Leave", allocated: 12, used: 4, balance: 8 },
    { type: "Sick Leave", allocated: 12, used: 2, balance: 10 },
    { type: "Privilege Leave", allocated: 21, used: 8, balance: 13 },
    { type: "Comp Off", allocated: 0, used: 0, balance: 2 }
  ]

  const stats = [
    { 
      label: "Pending Approvals", 
      value: "23", 
      icon: Clock, 
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    { 
      label: "Approved Today", 
      value: "12", 
      icon: Check, 
      color: "text-success",
      bgColor: "bg-success/10"
    },
    { 
      label: "On Leave", 
      value: "45", 
      icon: User, 
      color: "text-info",
      bgColor: "bg-info/10"
    },
    { 
      label: "This Month", 
      value: "156", 
      icon: FileText, 
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ]

  const filteredApplications = leaveApplications.filter(application => {
    const matchesSearch = application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.empId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || application.status === selectedStatus
    const matchesType = selectedLeaveType === "all" || application.leaveType === selectedLeaveType
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "Pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>
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
            <h1 className="text-2xl font-bold text-foreground">Leave Management</h1>
            <p className="text-muted-foreground">Manage employee leave applications and balances</p>
          </div>
          <Dialog open={showApplyLeave} onOpenChange={setShowApplyLeave}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Apply Leave
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Apply for Leave</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="employee">Employee *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emp001">EMP001 - Rajesh Kumar</SelectItem>
                      <SelectItem value="emp002">EMP002 - Priya Sharma</SelectItem>
                      <SelectItem value="emp003">EMP003 - Amit Patel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="leaveType">Leave Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Leave</SelectItem>
                      <SelectItem value="sick">Sick Leave</SelectItem>
                      <SelectItem value="privilege">Privilege Leave</SelectItem>
                      <SelectItem value="compoff">Comp Off</SelectItem>
                      <SelectItem value="maternity">Maternity Leave</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>From Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !fromDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fromDate ? format(fromDate, "PPP") : <span>Pick date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={fromDate}
                          onSelect={setFromDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>To Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !toDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {toDate ? format(toDate, "PPP") : <span>Pick date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={toDate}
                          onSelect={setToDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason *</Label>
                  <Textarea
                    id="reason"
                    placeholder="Enter reason for leave..."
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowApplyLeave(false)}>
                  Cancel
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Submit Application
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
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leave Applications */}
          <Card className="lg:col-span-2 border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Leave Applications
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
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-32">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedLeaveType} onValueChange={setSelectedLeaveType}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Casual Leave">Casual Leave</SelectItem>
                      <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                      <SelectItem value="Privilege Leave">Privilege Leave</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Leave Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{application.name}</div>
                            <div className="text-sm text-muted-foreground">{application.empId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{application.leaveType}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {application.fromDate} to {application.toDate}
                          </div>
                        </TableCell>
                        <TableCell>{application.days}</TableCell>
                        <TableCell>
                          {getStatusBadge(application.status)}
                        </TableCell>
                        <TableCell>
                          {application.status === "Pending" && (
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm" className="text-success hover:bg-success/10">
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Leave Balances */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Leave Balances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaveBalances.map((balance, index) => (
                <div key={index} className="p-4 bg-accent/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-foreground">{balance.type}</h4>
                    <Badge variant="outline">{balance.balance} remaining</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Allocated: {balance.allocated}</span>
                    <span>Used: {balance.used}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{width: `${(balance.used / balance.allocated) * 100}%`}}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Leave