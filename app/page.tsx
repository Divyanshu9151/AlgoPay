import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  DollarSign,
  ExternalLink,
  Globe,
  type LucideIcon,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-none bg-background/50 hover:bg-background/80 transition-colors">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  name,
  role,
  company,
  quote,
  image,
}: { name: string; role: string; company: string; quote: string; image: string }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>
              {role}, {company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic text-muted-foreground">"{quote}"</p>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          {number}
        </div>
        {number < 4 && <div className="w-0.5 h-full bg-border mt-2"></div>}
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
}: { title: string; price: string; description: string; features: string[]; buttonText: string }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground">A</span>
            </div>
            AlgoPay
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,120,255,0.1),transparent_60%)]"></div>
          <div className="container relative flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 bg-background/80 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span className="text-muted-foreground">Revolutionizing Web3 Payments on Algorand</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
              Web3 Payments Made <span className="text-primary">Simple</span> for Online Businesses
            </h1>

            <p className="text-xl text-muted-foreground max-w-[800px] mb-10">
              AlgoPay addresses the challenge of Web3 payment adoption for online businesses by offering a solution that
              ensures 100% efficiency for merchants on the Algorand blockchain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo-store">
                <Button size="lg" variant="outline">
                  View Demo Store
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features for Merchants</h2>
              <p className="text-muted-foreground text-lg">
                AlgoPay provides a comprehensive suite of tools to help merchants accept Web3 payments and manage their
                business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Wallet}
                title="Smart Wallet"
                description="Create and manage your Algorand smart wallet directly from your dashboard with full control over your funds."
              />
              <FeatureCard
                icon={Globe}
                title="Seamless Integration"
                description="Easily integrate Web3 payments into any online store with our simple API and pre-built components."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Secure Transactions"
                description="All transactions are secured by the Algorand blockchain, ensuring transparency and immutability."
              />
              <FeatureCard
                icon={CreditCard}
                title="Multiple Payment Options"
                description="Accept payments in ALGO, USDC, and other Algorand Standard Assets (ASAs)."
              />
              <FeatureCard
                icon={DollarSign}
                title="DeFi Features"
                description="Access staking and P2P borrowing features to maximize your earnings on idle funds."
              />
              <FeatureCard
                icon={Zap}
                title="Instant Settlements"
                description="Benefit from Algorand's near-instant finality with transaction confirmations in seconds."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">How AlgoPay Works</h2>
              <p className="text-muted-foreground text-lg">
                Our streamlined process makes it easy for merchants to start accepting Web3 payments.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <StepCard
                number={1}
                title="Create Your Account"
                description="Sign up for AlgoPay and create your merchant account in minutes. No complex verification processes required."
              />
              <StepCard
                number={2}
                title="Set Up Your Smart Wallet"
                description="Create an Algorand smart wallet to receive payments directly through our intuitive dashboard."
              />
              <StepCard
                number={3}
                title="Integrate with Your Store"
                description="Use our API or pre-built components to add AlgoPay to your online store's checkout process."
              />
              <StepCard
                number={4}
                title="Start Accepting Payments"
                description="Your customers can now pay with ALGO, USDC, or other supported cryptocurrencies on the Algorand blockchain."
              />
            </div>
          </div>
        </section>

        {/* Merchant & Buyer Experience Tabs */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Seamless Experience for Everyone</h2>
              <p className="text-muted-foreground text-lg">
                AlgoPay provides intuitive interfaces for both merchants and buyers.
              </p>
            </div>

            <Tabs defaultValue="merchant" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="merchant">Merchant Dashboard</TabsTrigger>
                <TabsTrigger value="buyer">Buyer Experience</TabsTrigger>
              </TabsList>

              <TabsContent value="merchant" className="border rounded-lg p-8 bg-card">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Powerful Merchant Dashboard</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Comprehensive Analytics</h4>
                          <p className="text-muted-foreground">
                            Track your sales, revenue, and customer behavior with detailed reports and visualizations.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Multi-Store Management</h4>
                          <p className="text-muted-foreground">
                            Create and manage multiple stores from a single dashboard with separate settings and
                            analytics.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">API Integration</h4>
                          <p className="text-muted-foreground">
                            Generate and manage API keys for seamless integration with your existing systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">DeFi Features</h4>
                          <p className="text-muted-foreground">
                            Access staking, lending, and other DeFi features to maximize earnings on your idle funds.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Transaction History</h4>
                          <p className="text-muted-foreground">
                            View detailed transaction history with filtering and export capabilities.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Security Controls</h4>
                          <p className="text-muted-foreground">
                            Robust security features including 2FA, activity logs, and customizable permissions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button size="lg">Explore Dashboard</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="buyer" className="border rounded-lg p-8 bg-card">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Frictionless Buyer Experience</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">One-Click Checkout</h4>
                          <p className="text-muted-foreground">
                            Simple "Buy with AlgoPay" button integration for a streamlined checkout experience.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Multiple Payment Options</h4>
                          <p className="text-muted-foreground">
                            Pay with ALGO, USDC, or other supported Algorand Standard Assets (ASAs).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Wallet Compatibility</h4>
                          <p className="text-muted-foreground">
                            Connect with popular wallets like Pera Wallet, MyAlgo, or any WalletConnect-compatible
                            wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Fast Confirmations</h4>
                          <p className="text-muted-foreground">
                            Experience near-instant transaction confirmations with Algorand's 4-second block finality.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Secure Transactions</h4>
                          <p className="text-muted-foreground">
                            All transactions are secured by the Algorand blockchain with transparent verification.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Transaction History</h4>
                          <p className="text-muted-foreground">
                            Access your complete payment history with detailed transaction information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/demo-store">
                      <Button size="lg">Try Demo Store</Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
              <p className="text-muted-foreground text-lg">
                AlgoPay is designed to work for a wide range of businesses and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Stores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Online retailers can easily integrate AlgoPay to accept cryptocurrency payments for physical and
                    digital goods.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Content Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Content creators can monetize their work through direct cryptocurrency payments from their audience.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implement recurring payments for subscription-based business models with automated blockchain
                    transactions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>NFT Marketplaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Facilitate the buying and selling of NFTs with secure, transparent blockchain transactions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SaaS Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Software-as-a-Service businesses can accept cryptocurrency payments for their services globally.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Charity & Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Non-profit organizations can accept transparent cryptocurrency donations with reduced fees.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg">Choose the plan that works best for your business needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Starter"
                price="$29"
                description="Perfect for small businesses just getting started with Web3 payments."
                features={[
                  "Up to 100 transactions/month",
                  "1% transaction fee",
                  "Basic analytics",
                  "Email support",
                  "Single store",
                ]}
                buttonText="Get Started"
              />

              <PricingCard
                title="Business"
                price="$99"
                description="Ideal for growing businesses with increasing transaction volume."
                features={[
                  "Up to 1,000 transactions/month",
                  "0.5% transaction fee",
                  "Advanced analytics",
                  "Priority support",
                  "Up to 5 stores",
                  "DeFi features",
                ]}
                buttonText="Get Started"
              />

              <PricingCard
                title="Enterprise"
                price="Custom"
                description="Tailored solutions for large businesses with high transaction volumes."
                features={[
                  "Unlimited transactions",
                  "Custom transaction fees",
                  "Custom analytics & reporting",
                  "Dedicated account manager",
                  "Unlimited stores",
                  "Advanced DeFi features",
                  "Custom integration support",
                ]}
                buttonText="Contact Sales"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Find answers to common questions about AlgoPay.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is AlgoPay?</AccordionTrigger>
                  <AccordionContent>
                    AlgoPay is a Web3 payment gateway that allows online businesses to accept cryptocurrency payments on
                    the Algorand blockchain. It provides a seamless integration for merchants and a simple checkout
                    experience for buyers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How does AlgoPay work?</AccordionTrigger>
                  <AccordionContent>
                    AlgoPay connects your online store to the Algorand blockchain, allowing customers to pay with ALGO,
                    USDC, or other supported cryptocurrencies. Payments are processed through smart contracts and
                    settled directly to your wallet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Is technical knowledge required?</AccordionTrigger>
                  <AccordionContent>
                    No, AlgoPay is designed to be user-friendly for merchants with all levels of technical expertise.
                    Our simple API and pre-built components make integration straightforward, and our dashboard provides
                    an intuitive interface for managing your payments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What cryptocurrencies are supported?</AccordionTrigger>
                  <AccordionContent>
                    AlgoPay currently supports ALGO (Algorand's native token) and USDC on the Algorand blockchain. We
                    plan to add support for more Algorand Standard Assets (ASAs) in the future.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How secure is AlgoPay?</AccordionTrigger>
                  <AccordionContent>
                    AlgoPay leverages the security of the Algorand blockchain, which is known for its robust security
                    features. All transactions are processed through secure smart contracts, and funds are settled
                    directly to your wallet, giving you full control over your assets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>What are the fees?</AccordionTrigger>
                  <AccordionContent>
                    AlgoPay charges a small percentage fee on each transaction, depending on your plan. Our Starter plan
                    has a 1% fee, Business plan has a 0.5% fee, and Enterprise plans have custom fee structures. There
                    are no hidden fees or monthly minimums.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with Web3 Payments?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of merchants who are already benefiting from AlgoPay's seamless Web3 payment solution on
                the Algorand blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2">
                    Get Started Today <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground">A</span>
                </div>
                AlgoPay
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolutionizing Web3 payments for online businesses on the Algorand blockchain. Accept crypto payments
                seamlessly and securely.
              </p>
              <div className="flex gap-4 mb-6">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-discord"
                  >
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <path d="M7.5 7.2a4.73 4.73 0 0 1 9 0" />
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <path d="M8 14v-2a6 6 0 0 1 8 0v2" />
                  </svg>
                  <span className="sr-only">Discord</span>
                </Button>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="max-w-xs" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo-store" className="text-muted-foreground hover:text-foreground transition-colors">
                    Demo Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2025 AlgoPay. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Acceptable Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
