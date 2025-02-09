import React from 'react'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
          <span className="font-bold">Acme Inc</span>
        </div>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
            <a href="/features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="/pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
            <Button>Get Started</Button>
          </nav>
        ) : (
          // Mobile Navigation
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
                <a href="/features" className="text-sm font-medium hover:text-primary">Features</a>
                <a href="/pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
                <Button>Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}