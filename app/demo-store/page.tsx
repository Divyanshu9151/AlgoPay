"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DemoStorePage() {
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("algo")
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success">("idle")

  // Mock products
  const products = [
    {
      id: "product-1",
      name: "Premium Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 149.99,
      image: "/diverse-music-lovers.png",
    },
    {
      id: "product-2",
      name: "Smart Watch",
      description: "Feature-rich smartwatch with health tracking",
      price: 199.99,
      image: "/modern-smartwatch-display.png",
    },
    {
      id: "product-3",
      name: "Wireless Earbuds",
      description: "Compact wireless earbuds with premium sound",
      price: 89.99,
      image: "/wireless-earbuds-charging-case.png",
    },
  ]

  const handleBuy = () => {
    setPaymentOpen(true)
  }

  const handlePaymentConfirm = () => {
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success")
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="font-bold">Back to AlgoPay</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">Demo Store</div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
                <p className="text-2xl font-bold mt-2">${product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleBuy}>
                  Buy with AlgoPay
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Pay with AlgoPay</DialogTitle>
            <DialogDescription>Choose your preferred payment method</DialogDescription>
          </DialogHeader>

          {paymentStatus === "idle" && (
            <>
              <Tabs defaultValue="algo" value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="algo">ALGO</TabsTrigger>
                  <TabsTrigger value="usdc">USDC</TabsTrigger>
                </TabsList>
                <TabsContent value="algo" className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <span>Amount:</span>
                    <span className="font-bold">150 ALGO</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fee:</span>
                    <span>0.001 ALGO</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span>Total:</span>
                    <span className="font-bold">150.001 ALGO</span>
                  </div>
                </TabsContent>
                <TabsContent value="usdc" className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <span>Amount:</span>
                    <span className="font-bold">149.99 USDC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fee:</span>
                    <span>0.01 USDC</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span>Total:</span>
                    <span className="font-bold">150.00 USDC</span>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex flex-col gap-4">
                <Button onClick={handlePaymentConfirm}>Connect Wallet & Pay</Button>
                <Button variant="outline" onClick={() => setPaymentOpen(false)}>
                  Cancel
                </Button>
              </div>
            </>
          )}

          {paymentStatus === "processing" && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-center">Connecting to your wallet and processing payment...</p>
            </div>
          )}

          {paymentStatus === "success" && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Payment Successful!</h3>
              <p className="text-center text-muted-foreground mb-4">
                Your transaction has been confirmed on the Algorand blockchain.
              </p>
              <Button
                onClick={() => {
                  setPaymentOpen(false)
                  setPaymentStatus("idle")
                }}
              >
                Return to Store
              </Button>
            </div>
          )}

          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs">A</span>
              </div>
              <span className="text-sm font-medium">Powered by AlgoPay</span>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
