// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Wifi, Zap } from 'lucide-react'
import { MainNav, Navbar } from '@/components/main-nav'
import { Waves } from '@/components/ui/waves-background'
import { Card } from '@/components/ui/card'
import { Footer } from '@/components/footer'
import { UserNav } from '@/components/user-nav'
import { Search } from '@/components/nav-search'

export const Route = createFileRoute('/')({
  component: Landing,
})

function Landing() {
  const icon = <img src="/images/logo.svg" className="size-16" />
  const heading = "Harnessing Data, Growing Hope: Low-Cost Tech for Resilient Farms"
  const description = "Our affordable, intuitive technologies empower rural and Global South communities to boost crop yields, reduce waste, and secure food futures."
  const button = {
    text: "Explore Our Solutions",
    icon: <ArrowRight className="ml-2 size-4" />,
    url: "https://gramina.org/features",
  }
  const trustText = ""
  const imageSrc = "https://gramina.org/images/hero-image.svg"
  const imageAlt = "Sustainable Agriculture Illustration"
  // FIXME: use a fn to make this dynamic
  const theme = "light";
  return (
    <>
        <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              
            </div>
          </div>
        </div>
        </div>
        <section className="overflow-hidden py-48 relative bg-white">
        <div className="absolute inset-0 z-0 h-full max-h-full">
          <Waves
            lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}
            backgroundColor="transparent"
            waveSpeedX={0.01}
            waveSpeedY={0.005}
            waveAmpX={20}
            waveAmpY={5}
            friction={0.2}
            tension={0.1}
            maxCursorMove={60}
            xGap={10}
            yGap={24}
          />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="relative">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
                {icon}
              </span>
              <h2 className="mb-2 mx-auto max-w-screen-lg text-balance text-center text-4xl font-medium md:text-7xl">
                Harnessing Data, Growing Hope
              </h2>
              <h3 className="mb-4 mx-auto max-w-screen-lg text-balance text-center text-2xl font-semibold md:text-3xl">
                Low-Cost Tech for Resilient Farms
              </h3>
              <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
                We believe every farmer deserves the tools to thrive. Our affordable, intuitive technologies empower rural and Global South communities to boost crop yields, reduce waste, and secure food futures.
              </p>
              <div className="flex flex-col items-center justify-center gap-5 pb-12 pt-5">
                <Button size="lg" className='bg-white' asChild>
                  <a href={button.url}>
                    {button.text} {button.icon}
                  </a>
                </Button>
                {trustText && (
                  <div className="text-xs text-muted-foreground">{trustText}</div>
                )}
              </div>
            </div>
            {/* New Features Section with Card */}
            <div className="features-section py-20 ">
              <Card className="mx-auto p-6 bg-white rounded-lg shadow-md max-w-4xl aspect-w-16 aspect-h-9">
                <h2 className="text-center text-4xl font-bold mb-10">Why Gramina?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Real-Time Farm Insights</h3>
                    <p>Sensors and AI analyze soil health, weather patterns, and crop conditions.</p>
                    <p>Receive actionable recommendations via SMS or voice messages—no smartphone required.</p>
                  </div>
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Low-Cost, High-Impact Tools</h3>
                    <p>Modular systems designed for scalability: start small, grow as needed.</p>
                    <p>Solar-powered devices and offline functionality for remote areas.</p>
                  </div>
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Built for Collaboration</h3>
                    <p>Partner with NGOs to deploy solutions at scale or use standalone modules for individual farms.</p>
                  </div>
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Data-Driven Decision-Making</h3>
                    <p>Track yields, predict pest outbreaks, and optimize water usage with precision.</p>
                  </div>
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Farmer-Centric Design</h3>
                    <p>Solutions co-created with rural communities to ensure usability and relevance.</p>
                  </div>
                  <div className="card p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
                    <h3 className="text-xl font-semibold">Sustainable Practices</h3>
                    <p>Encouraging eco-friendly farming methods to protect the environment.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* Footer Section */}
          <div className="mt-32 -mb-48">
          <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
