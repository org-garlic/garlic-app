"use client"

import { useState } from "react"
import { Home, Tag, Sprout, User, Search, Bell, ShoppingCart } from "lucide-react"
import { HomeFeed } from "./garlic/home-feed"
import { GarlicDeal } from "./garlic/garlic-deal"
import { GrowGarlic } from "./garlic/grow-garlic"
import { MyPage } from "./garlic/my-page"

type Tab = "home" | "deal" | "grow" | "my"

export function GarlicApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_m53sdfm53sdfm53s%201-UzcMjyRa29SSLvPwjXR3Ahm0oGCPb5.png" 
              alt="Garlic Logo" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingCart className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {activeTab === "home" && <HomeFeed />}
        {activeTab === "deal" && <GarlicDeal />}
        {activeTab === "grow" && <GrowGarlic />}
        {activeTab === "my" && <MyPage />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border z-50">
        <div className="flex items-center justify-around py-2">
          <NavItem 
            icon={<Home className="w-5 h-5" />} 
            label="홈" 
            active={activeTab === "home"} 
            onClick={() => setActiveTab("home")} 
          />
          <NavItem 
            icon={<Tag className="w-5 h-5" />} 
            label="100원딜" 
            active={activeTab === "deal"} 
            onClick={() => setActiveTab("deal")} 
          />
          <NavItem 
            icon={<Sprout className="w-5 h-5" />} 
            label="마늘키우기" 
            active={activeTab === "grow"} 
            onClick={() => setActiveTab("grow")} 
          />
          <NavItem 
            icon={<User className="w-5 h-5" />} 
            label="마이" 
            active={activeTab === "my"} 
            onClick={() => setActiveTab("my")} 
          />
        </div>
      </nav>
    </div>
  )
}

function NavItem({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-1 transition-colors ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}
