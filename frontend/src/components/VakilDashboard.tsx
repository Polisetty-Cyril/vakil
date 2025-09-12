import React from "react";
import { Plus, FileText, BarChart3, Settings, Home, Users, Calendar, AlertCircle, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: FileText, label: "Cases", count: 12 },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Clients" },
  { icon: Calendar, label: "Schedule" },
  { icon: Settings, label: "Settings" },
];

const mockCases = [
  {
    id: 1,
    title: "Contract Analysis - TechCorp Ltd",
    description: "Employment contract review with risk assessment",
    status: "completed",
    riskLevel: "low",
    date: "2024-01-15",
    docType: "Employment Contract",
  },
  {
    id: 2,
    title: "Merger Agreement Review",
    description: "Due diligence for corporate merger transaction",
    status: "in-progress",
    riskLevel: "medium",
    date: "2024-01-12",
    docType: "Merger Agreement",
  },
  {
    id: 3,
    title: "Intellectual Property Audit",
    description: "Patent portfolio analysis and risk evaluation",
    status: "completed",
    riskLevel: "high",
    date: "2024-01-10",
    docType: "IP Documentation",
  },
  {
    id: 4,
    title: "Compliance Review - FinanceInc",
    description: "Regulatory compliance assessment for financial services",
    status: "draft",
    riskLevel: "low",
    date: "2024-01-08",
    docType: "Compliance Documents",
  },
];

const getRiskBadgeVariant = (riskLevel: string) => {
  switch (riskLevel) {
    case "low": return "default";
    case "medium": return "secondary";
    case "high": return "destructive";
    default: return "outline";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "text-success";
    case "in-progress": return "text-warning";
    case "draft": return "text-muted-foreground";
    default: return "text-muted-foreground";
  }
};

export function VakilDashboard() {
  const [sidebarExpanded, setSidebarExpanded] = React.useState(false);

  return (
    <div className="w-full flex max-h-screen h-screen bg-background">
      {/* Sidebar */}
      <div 
        className={`bg-card border-r border-border transition-all duration-300 ease-in-out flex flex-col ${
          sidebarExpanded ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            {sidebarExpanded && (
              <span className="font-semibold text-lg text-foreground">Vakil</span>
            )}
          </div>
        </div>

        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  item.active 
                    ? "bg-primary text-white" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}>
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarExpanded && (
                    <>
                      <span className="font-medium">{item.label}</span>
                      {item.count && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.count}
                        </Badge>
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-vakil-primary">Vakil</h1>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search cases..." 
                className="pl-10 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Avatar>
              <AvatarImage src="/api/placeholder/32/32" alt="User" />
              <AvatarFallback>VA</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
                  <FileText className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Low Risk</CardTitle>
                  <TrendingUp className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">75% of total cases</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Medium Risk</CardTitle>
                  <AlertCircle className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">17% of total cases</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">High Risk</CardTitle>
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">8% of total cases</p>
                </CardContent>
              </Card>
            </div>

            {/* Cases Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-foreground">Cases</h2>
                <Button className="bg-primary hover:bg-primary-hover">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Case
                </Button>
              </div>

              {/* Add New Case Card */}
              <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors duration-200 cursor-pointer group">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    <Plus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Upload New Document</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Drag and drop your PDF documents here or click to browse. Our AI will analyze and provide risk assessment.
                  </p>
                </CardContent>
              </Card>

              {/* Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCases.map((case_) => (
                  <Card key={case_.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                            {case_.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {case_.description}
                          </CardDescription>
                        </div>
                        <Badge variant={getRiskBadgeVariant(case_.riskLevel)} className="ml-2">
                          {case_.riskLevel} risk
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Document Type</span>
                          <span className="font-medium">{case_.docType}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Status</span>
                          <span className={`font-medium capitalize ${getStatusColor(case_.status)}`}>
                            {case_.status.replace("-", " ")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Date</span>
                          <span className="font-medium">{new Date(case_.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}