
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-6 lg:space-x-8", className)}
      {...props}
    ><Button variant="ghost" className="relative h-8 w-8 rounded-full font-bold">
    Gramina
  </Button>
      <Button variant="ghost" className="relative mr-20 h-8 w-8 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/images/logo.svg" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
          
          <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Pricing
      </Link>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Documentation
      </Link>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Contact
      </Link>
      
    </nav>
  )
}