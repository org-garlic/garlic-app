"use client"

import { useState } from "react"
import { ChevronRight, Sparkles, TrendingUp, Clock, Heart, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "전체", emoji: "✨" },
  { id: "beauty", label: "뷰티·스킨케어", emoji: "💄" },
  { id: "health", label: "건강식품", emoji: "🥗" },
  { id: "kitchen", label: "주방용품", emoji: "🍳" },
  { id: "fashion", label: "패션", emoji: "👗" },
  { id: "tech", label: "가전·디지털", emoji: "📱" },
]

const personalizedPicks = [
  {
    id: 1,
    name: "토레타 다이브인 세럼",
    price: 21900,
    discount: 15,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
    tag: "재구매 추천",
    isNew: false,
  },
  {
    id: 2,
    name: "닥터지 선크림 SPF50",
    price: 18500,
    discount: 22,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
    tag: null,
    isNew: true,
  },
  {
    id: 3,
    name: "비타민C 1000 60정",
    price: 15900,
    discount: 30,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    tag: "베스트",
    isNew: false,
  },
  {
    id: 4,
    name: "무선 블루투스 이어폰",
    price: 45000,
    discount: 18,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop",
    tag: null,
    isNew: true,
  },
]

const trendingItems = [
  { id: 1, name: "쿠션팩트", change: "+18%", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop" },
  { id: 2, name: "샐러드볼", change: "+9%", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=80&h=80&fit=crop" },
  { id: 3, name: "라탄화분", change: "+7%", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=80&h=80&fit=crop" },
]

export function HomeFeed() {
  const [activeCategory, setActiveCategory] = useState("all")
  const userName = "지은"

  return (
    <div className="space-y-6 pb-4">
      {/* Personalized Greeting */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🧄</span>
          <h1 className="text-lg font-bold text-foreground">
            안녕하세요, <span className="text-primary">{userName}</span>님
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          딱 맞는 상품을 찾아드릴게요
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="찾고 싶은 상품을 검색해보세요"
            className="w-full py-3 px-4 bg-muted rounded-2xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Garlic DNA Section */}
      <div className="px-4">
        <Card className="overflow-hidden bg-gradient-to-br from-[#f5f0e6] to-[#e8e0d0] border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground">{userName}님의 픽</h2>
                  <p className="text-xs text-muted-foreground">최근 관심 기반 추천</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                더보기 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-3 mb-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">🌱</span>
                <span className="text-foreground">지난주 뷰티 카테고리를 3회 이상 탐색하셨어요</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {personalizedPicks.slice(0, 2).map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-foreground">이 시간 급상승</h2>
          </div>
          <span className="text-xs text-muted-foreground">30대 여성 · 서울 기준</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {trendingItems.map((item, idx) => (
            <div key={item.id} className="flex-shrink-0 w-24">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full aspect-square rounded-2xl object-cover"
                />
                <span className="absolute -top-1 -left-1 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-foreground truncate">{item.name}</p>
              <p className="text-xs text-primary font-semibold">{item.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Time Deal Banner */}
      <div className="px-4">
        <Card className="overflow-hidden border-none bg-gradient-to-r from-primary to-primary/80">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary-foreground" />
                  <span className="text-xs font-medium text-primary-foreground/80">오늘만 이 가격</span>
                </div>
                <h3 className="text-lg font-bold text-primary-foreground">종료까지</h3>
                <div className="flex items-center gap-1 mt-1">
                  <TimeBox value="03" />
                  <span className="text-primary-foreground font-bold">:</span>
                  <TimeBox value="42" />
                  <span className="text-primary-foreground font-bold">:</span>
                  <TimeBox value="17" />
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                보러가기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* More Products */}
      <div className="px-4">
        <h2 className="font-bold text-foreground mb-3">추천 상품</h2>
        <div className="grid grid-cols-2 gap-3">
          {personalizedPicks.slice(2).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ item }: { item: typeof personalizedPicks[0] }) {
  const [liked, setLiked] = useState(false)
  const originalPrice = Math.round(item.price / (1 - item.discount / 100))

  return (
    <div className="group">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-2">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
        </button>
        {item.tag && (
          <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs">
            {item.tag}
          </Badge>
        )}
        {item.isNew && (
          <Badge className="absolute bottom-2 left-2 bg-chart-5 text-foreground text-xs">
            NEW
          </Badge>
        )}
      </div>
      <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1">{item.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">{item.discount}%</span>
        <span className="font-bold text-foreground">{item.price.toLocaleString()}원</span>
      </div>
      <span className="text-xs text-muted-foreground line-through">{originalPrice.toLocaleString()}원</span>
    </div>
  )
}

function TimeBox({ value }: { value: string }) {
  return (
    <span className="bg-primary-foreground/20 text-primary-foreground font-bold text-sm px-2 py-1 rounded">
      {value}
    </span>
  )
}
