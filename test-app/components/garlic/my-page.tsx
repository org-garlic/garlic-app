"use client"

import { ChevronRight, Package, Heart, MessageSquare, Settings, Gift, CreditCard, Ticket, HelpCircle, LogOut, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const menuItems = [
  { icon: Package, label: "주문/배송 조회", badge: "2" },
  { icon: Heart, label: "찜한 상품", badge: "15" },
  { icon: MessageSquare, label: "리뷰 관리", badge: null },
  { icon: Ticket, label: "쿠폰함", badge: "5" },
  { icon: CreditCard, label: "결제수단 관리", badge: null },
  { icon: Gift, label: "선물함", badge: null },
  { icon: HelpCircle, label: "고객센터", badge: null },
  { icon: Settings, label: "설정", badge: null },
]

const recentOrders = [
  {
    id: 1,
    name: "토레타 다이브인 세럼",
    status: "배송중",
    date: "04.12",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "비타민C 1000",
    status: "배송완료",
    date: "04.10",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=80&h=80&fit=crop",
  },
]

export function MyPage() {
  const userName = "지은"
  const membershipDays = 23
  const garlicDnaScore = 87
  const evolutionStage = "새싹 마늘"

  return (
    <div className="space-y-6 pb-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#f5f0e6] via-[#e8e0d0] to-primary/10 px-4 py-6">
        <div className="flex items-center gap-4">
          {/* Character Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center shadow-lg border-4 border-card">
              <span className="text-4xl">🌿</span>
            </div>
            <Badge className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs px-2">
              Lv.2
            </Badge>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-foreground">{userName}님</h1>
              <Badge variant="secondary" className="gap-1 bg-yellow-100 text-yellow-700">
                <Crown className="w-3 h-3" />
                꼭멤버십
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {evolutionStage} · D+{membershipDays}
            </p>
          </div>
          
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Garlic DNA Score */}
      <div className="px-4 -mt-4">
        <Card className="border-primary/30 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧬</span>
                <div>
                  <h2 className="font-bold text-foreground">나의 Garlic DNA</h2>
                  <p className="text-xs text-muted-foreground">갈릭이 {userName}님을 알아가는 중!</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">{garlicDnaScore}</span>
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            </div>
            <Progress value={garlicDnaScore} className="h-3 mb-2" />
            <p className="text-sm text-center text-foreground">
              <span className="text-primary font-medium">{100 - garlicDnaScore}%</span> 더 알아가면 마늘 요정으로 진화해요! ✨
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="px-4">
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "쿠폰", value: "5장", color: "text-primary" },
            { label: "포인트", value: "2,450P", color: "text-foreground" },
            { label: "찜", value: "15", color: "text-foreground" },
            { label: "리뷰", value: "8", color: "text-foreground" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-3 bg-muted rounded-2xl">
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground">최근 주문</h2>
          <Button variant="ghost" size="sm" className="text-primary text-sm">
            전체보기 <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={order.image} 
                    alt={order.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground line-clamp-1">{order.name}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge 
                    variant={order.status === "배송중" ? "default" : "secondary"}
                    className={order.status === "배송중" ? "bg-primary" : ""}
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Membership Banner */}
      <div className="px-4">
        <Card className="overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-400 border-none">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-white">
                <h3 className="font-bold">꼭멤버십 100일 무료!</h3>
                <p className="text-sm opacity-90">77일 남음 · 월 4,900원 혜택 무료 이용중</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Menu List */}
      <div className="px-4">
        <div className="space-y-1">
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              className="w-full flex items-center gap-4 p-3 hover:bg-muted rounded-xl transition-colors"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {item.badge}
                </Badge>
              )}
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="px-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground gap-2">
          <LogOut className="w-5 h-5" />
          로그아웃
        </Button>
      </div>

      {/* Character Message */}
      <div className="px-4 pb-4">
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌿</span>
              <div className="flex-1">
                <div className="bg-card rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <p className="text-sm text-foreground">
                    &quot;{userName}님, 이제 87% 알아가고 있어요!<br/>
                    옛날 쇼핑 습관은 퇴마 완료~ 💪&quot;
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
