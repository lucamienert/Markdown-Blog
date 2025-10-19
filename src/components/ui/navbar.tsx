"use client"

import Link from "next/link"
import ThemeToggle from "../theme-toggle"

export function Navbar() {
  return (
    <nav className="border-b bg-background sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex justify-between p-4">
        <Link href="/" className="font-bold text-lg">My Blog</Link>
        <div className="space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
