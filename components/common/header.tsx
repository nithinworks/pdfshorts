import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="PDF Shorts Logo" width={32} height={32} />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            PDF Shorts
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Pricing
            </Link>
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
          </nav>

          <div className="flex items-center gap-2">
            <SignedIn>
              <Link href="/upload">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  Short My PDF
                </Button>
              </Link>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <Link href="/sign-in">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  Sign In
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
