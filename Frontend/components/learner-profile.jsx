"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AchievementBadge from "./achievement-badge"
import ProgressChart from "./progress-chart"

export default function LearnerProfile() {
  const [activeTab, setActiveTab] = useState("overview")
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/user/current", { withCredentials: true })
        setUser(res.data)
      } catch (err) {
        setUser(null)
      }
    }
    fetchUser()
  }, [])

  const learnerData = {
    name: user?.fullName || "Learner",
    age: 8,
    joinDate: "March 2024",
    totalStars: 47,
    gamesCompleted: 23,
    streakDays: 12,
    favoriteGame: "Shapes & Colors",
    avatar: "🌟",
  }

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Completed first game",
      icon: "👶",
      isEarned: true,
    },
    {
      id: 2,
      title: "Shape Master",
      description: "Perfect score in Shapes & Colors",
      icon: "🎨",
      isEarned: true,
    },
    {
      id: 3,
      title: "Counting Champion",
      description: "Completed 10 counting games",
      icon: "🔢",
      isEarned: true,
    },
    {
      id: 4,
      title: "Memory Wizard",
      description: "Perfect memory match game",
      icon: "🧠",
      isEarned: false,
    },
    {
      id: 5,
      title: "Pattern Pro",
      description: "Master of patterns",
      icon: "🌀",
      isEarned: false,
    },
    {
      id: 6,
      title: "Week Warrior",
      description: "7-day learning streak",
      icon: "🔥",
      isEarned: true,
    },
  ]

  const progressData = [
    { label: "Shapes", value: 8 },
    { label: "Colors", value: 10 },
    { label: "Numbers", value: 5 },
    { label: "Memory", value: 3 },
    { label: "Patterns", value: 2 },
  ]

  const weeklyActivity = [
    { label: "Mon", value: 3 },
    { label: "Tue", value: 5 },
    { label: "Wed", value: 2 },
    { label: "Thu", value: 7 },
    { label: "Fri", value: 4 },
    { label: "Sat", value: 6 },
    { label: "Sun", value: 1 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-6xl">{learnerData.avatar}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">{learnerData.streakDays}</span>
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="font-heading text-4xl font-bold text-foreground mb-2">{learnerData.name}</h1>
                <p className="font-body text-lg text-muted-foreground mb-4">
                  Learning since {learnerData.joinDate} • Age {learnerData.age}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-heading font-bold text-primary">{learnerData.totalStars}</div>
                    <div className="text-sm font-body text-muted-foreground">Stars Earned</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-heading font-bold text-secondary">{learnerData.gamesCompleted}</div>
                    <div className="text-sm font-body text-muted-foreground">Games Completed</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 text-center">
                    <div className="text-2xl font-heading font-bold text-green-600">{learnerData.streakDays}</div>
                    <div className="text-sm font-body text-muted-foreground">Day Streak</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 text-center">
                    <div className="text-lg font-heading font-bold text-accent">🎨</div>
                    <div className="text-sm font-body text-muted-foreground">Favorite Game</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-white rounded-lg p-1 shadow-md">
            {["overview", "achievements", "progress"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`font-heading capitalize ${activeTab === tab ? "bg-primary text-primary-foreground" : ""}`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <ProgressChart data={progressData} title="Skills Progress" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <ProgressChart data={weeklyActivity} title="This Week's Activity" />
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center">
                  <span className="mr-2">🏆</span>
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <AchievementBadge achievement={achievement} isEarned={achievement.isEarned} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center">
                  <span className="mr-2">📈</span>
                  Learning Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">Recent Milestones</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-body font-bold text-foreground">Completed Shapes & Colors Level 5</p>
                          <p className="font-body text-sm text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-body font-bold text-foreground">Earned "Counting Champion" badge</p>
                          <p className="font-body text-sm text-muted-foreground">1 week ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-body font-bold text-foreground">Started learning journey</p>
                          <p className="font-body text-sm text-muted-foreground">{learnerData.joinDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Encouraging Message */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Keep up the amazing work, {learnerData.name}! 🌟
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                You're doing fantastic! Every game you play and every challenge you complete helps you grow stronger and
                smarter. Remember, learning is a journey, not a race!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
