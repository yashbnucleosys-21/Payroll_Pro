import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Calendar,
  FileText
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "1,247",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Present Today",
      value: "1,156",
      change: "92.7% attendance",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Monthly Payroll",
      value: "₹2.4Cr",
      change: "+8.2% from last month",
      icon: DollarSign,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Pending Approvals",
      value: "23",
      change: "Leave requests",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  const plantData = [
    { name: "Plant 1 - Mumbai", employees: 456, attendance: 94, payroll: "₹1.2Cr", status: "active" },
    { name: "Plant 2 - Chennai", employees: 423, attendance: 91, payroll: "₹0.8Cr", status: "active" },
    { name: "Plant 3 - Pune", employees: 368, attendance: 93, payroll: "₹0.4Cr", status: "active" }
  ]

  const recentActivities = [
    { type: "payroll", message: "Payroll processed for October 2024", time: "2 hours ago", status: "success" },
    { type: "compliance", message: "PF ECR file generated", time: "4 hours ago", status: "info" },
    { type: "alert", message: "5 employees exceeded overtime limit", time: "6 hours ago", status: "warning" },
    { type: "approval", message: "12 leave applications approved", time: "1 day ago", status: "success" }
  ]

  const complianceStatus = [
    { name: "PF Compliance", status: "up-to-date", dueDate: "Nov 15, 2024" },
    { name: "ESIC Returns", status: "pending", dueDate: "Nov 10, 2024" },
    { name: "TDS Returns", status: "up-to-date", dueDate: "Dec 7, 2024" },
    { name: "Professional Tax", status: "overdue", dueDate: "Nov 5, 2024" }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your payroll.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Current Period: Oct 2024</Badge>
          <Badge className="bg-success text-success-foreground">All Systems Active</Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
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
        {/* Plant Overview */}
        <Card className="lg:col-span-2 border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Plant Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {plantData.map((plant, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{plant.name}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {plant.employees} employees
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {plant.payroll}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">{plant.attendance}%</div>
                  <div className="text-xs text-muted-foreground">Attendance</div>
                  <Progress value={plant.attendance} className="w-20 mt-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-success' :
                  activity.status === 'warning' ? 'bg-warning' :
                  activity.status === 'info' ? 'bg-info' : 'bg-muted'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Status */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Compliance Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Due: {item.dueDate}</p>
                </div>
                <Badge 
                  variant={
                    item.status === 'up-to-date' ? 'default' :
                    item.status === 'pending' ? 'secondary' : 'destructive'
                  }
                  className={
                    item.status === 'up-to-date' ? 'bg-success text-success-foreground' :
                    item.status === 'pending' ? 'bg-warning text-warning-foreground' : ''
                  }
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
              <div className="font-medium text-primary">Process Monthly Payroll</div>
              <div className="text-xs text-muted-foreground">Generate payroll for current period</div>
            </button>
            <button className="w-full p-3 text-left bg-accent/50 hover:bg-accent rounded-lg transition-colors">
              <div className="font-medium text-foreground">Generate Reports</div>
              <div className="text-xs text-muted-foreground">Download monthly compliance reports</div>
            </button>
            <button className="w-full p-3 text-left bg-accent/50 hover:bg-accent rounded-lg transition-colors">
              <div className="font-medium text-foreground">Import Attendance</div>
              <div className="text-xs text-muted-foreground">Upload biometric data</div>
            </button>
            <button className="w-full p-3 text-left bg-accent/50 hover:bg-accent rounded-lg transition-colors">
              <div className="font-medium text-foreground">Approve Leaves</div>
              <div className="text-xs text-muted-foreground">Review pending leave requests</div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard