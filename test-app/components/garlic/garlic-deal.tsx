"use client"

import { useState, useEffect } from "react"
import { Clock, Zap, ChevronRight, Gift, Percent } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const deals = [
  {
    id: 1,
    name: "국내산 마늘 500g",
    originalPrice: 12000,
    dealPrice: 100,
    image: "https://images.unsplash.com/photo-1615477550927-6ec8445b5560?w=300&h=300&fit=crop",
    stock: 100,
    sold: 87,
    endTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
    isHot: true,
  },
  {
    id: 2,
    name: "프리미엄 흑마늘 즙",
    originalPrice: 35000,
    dealPrice: 100,
    image: "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?w=300&h=300&fit=crop",
    stock: 50,
    sold: 42,
    endTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
    isHot: true,
  },
  {
    id: 3,
    name: "마늘 페스토 소스",
    originalPrice: 18000,
    dealPrice: 100,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=300&h=300&fit=crop",
    stock: 200,
    sold: 156,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    isHot: false,
  },
  {
    id: 4,
    name: "마늘 오일 스프레이",
    originalPrice: 22000,
    dealPrice: 100,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop",
    stock: 80,
    sold: 45,
    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
    isHot: false,
  },
]

export function GarlicDeal() {
  return (
    <div className="space-y-6 pb-4">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#f5f0e6] via-[#e8e0d0] to-[#d4c8b8] px-4 py-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary text-primary-foreground">
                <Zap className="w-3 h-3 mr-1" />
                마늘 100원 딜
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              마늘처럼 톡 쏘는 할인!
            </h1>
            <p className="text-muted-foreground text-sm mb-4">
              갈릭 살 때마다 갈릭이 생각나게 🧄
            </p>
            
            {/* Character Image */}
            <div className="flex justify-center mt-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xtnpsmxtnpsmxtnp.png-1tBIiBcIiFW6hTe5HLCDXEHGNUiQwT.jpeg"
                alt="마누리와 곰두리"
                className="h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="px-4">
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">갈릭데이 마감까지</p>
                  <p className="font-bold text-foreground">오늘의 딜이 곧 끝나요!</p>
                </div>
              </div>
              <CountdownTimer targetDate={deals[0].endTime} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deal List */}
      <div className="px-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-foreground">지금 진행중인 딜</h2>
          <span className="text-sm text-primary">{deals.length}개</span>
        </div>

        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      {/* Upcoming Deals */}
      <div className="px-4">
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">내일의 마늘 딜</h3>
                <p className="text-sm text-muted-foreground">알림 받고 먼저 득템하세요!</p>
              </div>
              <Button variant="outline" size="sm" className="text-primary border-primary">
                알림 받기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DealCard({ deal }: { deal: typeof deals[0] }) {
  const soldPercent = Math.round((deal.sold / deal.stock) * 100)
  const discount = Math.round((1 - deal.dealPrice / deal.originalPrice) * 100)

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img 
              src={deal.image} 
              alt={deal.name}
              className="w-full h-full object-cover"
            />
            {deal.isHot && (
              <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                🔥 HOT
              </Badge>
            )}
          </div>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{deal.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-bold text-lg">{discount}%</span>
                <span className="text-xl font-bold text-foreground">{deal.dealPrice.toLocaleString()}원</span>
              </div>
              <span className="text-sm text-muted-foreground line-through">
                {deal.originalPrice.toLocaleString()}원
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{deal.sold}개 판매</span>
                <span className="text-primary font-medium">{100 - soldPercent}% 남음</span>
              </div>
              <Progress value={soldPercent} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex items-center gap-1">
      <TimeUnit value={timeLeft.hours} />
      <span className="text-primary font-bold">:</span>
      <TimeUnit value={timeLeft.minutes} />
      <span className="text-primary font-bold">:</span>
      <TimeUnit value={timeLeft.seconds} />
    </div>
  )
}

function TimeUnit({ value }: { value: number }) {
  return (
    <span className="bg-primary text-primary-foreground font-bold text-sm px-2 py-1 rounded min-w-[32px] text-center">
      {String(value).padStart(2, '0')}
    </span>
  )
}
