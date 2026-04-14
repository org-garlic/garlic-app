"use client"

import { useState } from "react"
import { Droplets, Sun, Gift, ChevronRight, Sparkles, Trophy, Star, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const missions = [
  { id: 1, title: "오늘의 출석체크", reward: 5, completed: true, icon: "✅" },
  { id: 2, title: "상품 3개 구경하기", reward: 10, completed: true, icon: "👀" },
  { id: 3, title: "첫 구매하기", reward: 50, completed: false, icon: "🛒" },
  { id: 4, title: "리뷰 작성하기", reward: 30, completed: false, icon: "✍️" },
  { id: 5, title: "친구 초대하기", reward: 100, completed: false, icon: "👥" },
]

const evolutionStages = [
  { level: 1, name: "씨앗 마늘", days: 0, image: "🌱" },
  { level: 2, name: "새싹 마늘", days: 7, image: "🌿" },
  { level: 3, name: "자라는 마늘", days: 30, image: "🧄" },
  { level: 4, name: "황금 마늘", days: 60, image: "✨" },
  { level: 5, name: "마늘 요정", days: 100, image: "🧚" },
]

export function GrowGarlic() {
  const [waterCount, setWaterCount] = useState(2)
  const maxWater = 3
  const currentDay = 23
  const currentLevel = 2
  const nextLevelDays = 30
  const progress = Math.round((currentDay / nextLevelDays) * 100)
  const totalPoints = 245

  return (
    <div className="space-y-6 pb-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-foreground">내 마늘 키우기</h1>
          <Badge variant="secondary" className="gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            {totalPoints}P
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          마늘을 키우면 특별한 혜택이 와요! 🧄
        </p>
      </div>

      {/* Garlic Character */}
      <div className="px-4">
        <Card className="overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-[#f5f0e6] border-none">
          <CardContent className="p-6">
            <div className="text-center">
              {/* Character Display */}
              <div className="relative mb-4">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-b from-[#f5f0e6] to-[#e8e0d0] flex items-center justify-center shadow-lg">
                  <span className="text-8xl animate-bounce" style={{ animationDuration: "2s" }}>
                    🌿
                  </span>
                </div>
                <Badge className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Lv.{currentLevel} 새싹 마늘
                </Badge>
              </div>

              {/* Progress */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">D+{currentDay}</span>
                  <span className="text-primary font-medium">다음 레벨까지 {nextLevelDays - currentDay}일</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2"
                  onClick={() => setWaterCount(Math.max(0, waterCount - 1))}
                  disabled={waterCount === 0}
                >
                  <Droplets className="w-4 h-4 text-blue-500" />
                  물주기 ({waterCount}/{maxWater})
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2"
                >
                  <Sun className="w-4 h-4 text-yellow-500" />
                  햇빛 쬐기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Evolution Stages */}
      <div className="px-4">
        <h2 className="font-bold text-foreground mb-3">진화 단계</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {evolutionStages.map((stage, idx) => (
            <div 
              key={stage.level}
              className={`flex-shrink-0 w-20 p-3 rounded-2xl text-center ${
                idx < currentLevel 
                  ? "bg-primary/10 border-2 border-primary" 
                  : idx === currentLevel 
                    ? "bg-muted border-2 border-dashed border-primary" 
                    : "bg-muted border border-border"
              }`}
            >
              <span className="text-3xl">{stage.image}</span>
              <p className="text-xs font-medium text-foreground mt-1 truncate">{stage.name}</p>
              <p className="text-xs text-muted-foreground">D+{stage.days}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Missions */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground">오늘의 미션</h2>
          <span className="text-sm text-primary">
            {missions.filter(m => m.completed).length}/{missions.length} 완료
          </span>
        </div>
        <div className="space-y-2">
          {missions.map((mission) => (
            <Card 
              key={mission.id} 
              className={`${mission.completed ? "bg-primary/5 border-primary/30" : ""}`}
            >
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{mission.icon}</span>
                  <div className="flex-1">
                    <p className={`font-medium ${mission.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {mission.title}
                    </p>
                    <p className="text-sm text-primary">+{mission.reward}P</p>
                  </div>
                  {mission.completed ? (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  ) : (
                    <Button size="sm" className="bg-primary text-primary-foreground">
                      하러가기
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="px-4">
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">마늘 요정 달성 보상</h3>
                <p className="text-sm text-muted-foreground">100일 동안 마늘을 키우면 특별 쿠폰팩!</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Friend&apos;s Garden */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground">친구들의 마늘밭</h2>
          <Button variant="ghost" size="sm" className="text-primary text-sm">
            전체보기
          </Button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { name: "민지", level: 4, emoji: "✨" },
            { name: "하늘", level: 3, emoji: "🧄" },
            { name: "서준", level: 2, emoji: "🌿" },
            { name: "유진", level: 5, emoji: "🧚" },
          ].map((friend, idx) => (
            <div key={idx} className="flex-shrink-0 w-16 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-muted flex items-center justify-center text-2xl mb-1">
                {friend.emoji}
              </div>
              <p className="text-xs font-medium text-foreground truncate">{friend.name}</p>
              <p className="text-xs text-muted-foreground">Lv.{friend.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
