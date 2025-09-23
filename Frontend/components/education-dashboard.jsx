"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GameCard from "./game-card"
import ProgressIndicator from "./progress-indicator"

export default function EducationDashboard() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [hasSpoken, setHasSpoken] = useState(false)

  const games = [
    {
      id: "shapes-colors",
      title: "Shapes & Colors",
      description: "Learn basic shapes and vibrant colors through fun activities",
      icon: "🎨",
      difficulty: 1,
      color: "blue",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      hoverColor: "hover:bg-blue-100",
      iconBg: "bg-blue-200",
      completed: 8,
      total: 10,
    },
    {
      id: "counting",
      title: "Counting Game",
      description: "Count objects and learn numbers from 1 to 20",
      icon: "🔢",
      difficulty: 2,
      color: "green",
      bgColor: "bg-green-50 hover:bg-green-100",
      hoverColor: "hover:bg-green-100",
      iconBg: "bg-green-200",
      completed: 5,
      total: 15,
    },
    {
      id: "memory",
      title: "Memory Match",
      description: "Match pairs of cards to improve memory and concentration",
      icon: "🧠",
      difficulty: 2,
      color: "purple",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      hoverColor: "hover:bg-purple-100",
      iconBg: "bg-purple-200",
      completed: 3,
      total: 12,
    },
    {
      id: "patterns",
      title: "Pattern Game",
      description: "Complete sequences and discover beautiful patterns",
      icon: "🌀",
      difficulty: 3,
      color: "orange",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      hoverColor: "hover:bg-orange-100",
      iconBg: "bg-orange-200",
      completed: 2,
      total: 8,
    },
  ]

  // Auto-play welcome message
  useEffect(() => {
    if (!hasSpoken && "speechSynthesis" in window) {
      const timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to the Education Hub! Choose a game and let's learn together!",
        )
        utterance.rate = 0.8
        utterance.pitch = 1.1
        speechSynthesis.speak(utterance)
        setHasSpoken(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [hasSpoken])

  const handleGameSelect = (game) => {
    setSelectedGame(game)
    // Navigate to game (would be implemented with router)
    console.log(`Starting game: ${game.title}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-4 animate-fade-in-up">Education Hub</h1>
          <p className="font-body text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Choose a game and let's learn together!
          </p>

          {/* Audio indicator */}
          <div className="mt-4 flex justify-center">
            <div className="bg-primary/10 rounded-full px-6 py-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <span className="font-body text-sm text-primary flex items-center">
                <span className="mr-2">🔊</span>
                Audio guidance enabled
              </span>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <Card
          className="mb-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center">
              <span className="mr-2">📊</span>
              Your Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {games.map((game, index) => (
                <div key={game.id} className="animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <ProgressIndicator completed={game.completed} total={game.total} subject={game.title} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div key={game.id} className="animate-fade-in-up" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
              <GameCard game={game} onSelect={handleGameSelect} />
            </div>
          ))}
        </div>

        {/* Encouraging Message */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "2s" }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Keep Learning, Keep Growing! 🌟</h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Every game you play helps you learn something new. Take your time, have fun, and remember - there's no
                rush to be perfect!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Floating Learning Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[
            { icon: "📚", delay: "0s" },
            { icon: "✏️", delay: "1s" },
            { icon: "🎯", delay: "2s" },
            { icon: "🏆", delay: "3s" },
            { icon: "🌈", delay: "4s" },
          ].map((item, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: item.delay,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              <div className="bg-primary/10 rounded-full p-4">
                <span className="text-3xl">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
