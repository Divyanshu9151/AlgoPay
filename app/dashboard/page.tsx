import Link from "next/link"
import { ArrowUpRight, CreditCard, DollarSign, Users, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  // Mock data
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345.67",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      title: "Total Transactions",
      value: "1,234",
      change: "+8.2%",
      icon: CreditCard,
    },
    {
      title: "Wallet Balance",
      value: "5,432 ALGO",
      change: "+3.1%",
      icon: Wallet,
    },
    {
      title: "Active Customers",
      value: "432",
      change: "+15.3%",
      icon: Users,
    },
  ]

  const recentTransactions = [
    {
      id: "TX123456",
      customer: "John Smith",
      amount: "$129.99",
      status: "completed",
      date: "2023-04-21",
    },
    {
      id: "TX123455",
      customer: "Sarah Johnson",
      amount: "$79.99",
      status: "completed",
      date: "2023-04-20",
    },
    {
      id: "TX123454",
      customer: "Michael Brown",
      amount: "$249.99",
      status: "completed",
      date: "2023-04-19",
    },
    {
      id: "TX123453",
      customer: "Emily Davis",
      amount: "$59.99",
      status: "pending",
      date: "2023-04-19",
    },
    {
      id: "TX123452",
      customer: "Robert Wilson",
      amount: "$149.99",
      status: "completed",
      date: "2023-04-18",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/wallet">
            <Button>
              <Wallet className="mr-2 h-4 w-4" />
              Manage Wallet
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest payment transactions</CardDescription>
            </div>
            <Link href="/dashboard/payments">
              <Button variant="outline" size="sm" className="gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === "completed" ? "default" : "outline"}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
