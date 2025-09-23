"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Heart,
  Star,
  Zap,
  Users,
  BookOpen,
  MessageCircle,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import FlipbookViewer from "@/components/flipbook-viewer";

export default function SarathiHomepage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    setIsLoaded(true);
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "Communication Hub",
      description: "Voice & text tools for everyone",
      color: "bg-sky-blue",
      href: "/communication",
    },
    {
      icon: BookOpen,
      title: "Learning Games",
      description: "Fun educational activities",
      color: "bg-mint-green",
      href: "/education",
    },
    {
      icon: Trophy,
      title: "My Progress",
      description: "Track your amazing journey",
      color: "bg-coral-pink",
      href: "/profile",
    },
    {
      icon: Users,
      title: "Stories",
      description: "Inspiring learner stories",
      color: "bg-soft-lavender",
      href: "/stories",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/5 via-mint-green/5 to-coral-pink/5 relative overflow-hidden">
      <div className="pt-16">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-sparkle-dance"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-sunny-yellow" />
          </div>
        ))}

        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-sunny-yellow rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle">
          <div className="w-12 h-12 bg-coral-pink rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-wiggle">
          <Star className="w-8 h-8 text-soft-lavender opacity-40" />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? "animate-slide-in-bounce" : "opacity-0"
            }`}
          >
            <div className="mb-8">
              <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-sky-blue via-mint-green to-coral-pink bg-clip-text text-transparent animate-rainbow-glow">
                SARATHI
              </h1>
              <h2 className="font-body text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                VERIFIED SYLLABUS TITLE
              </h2>
              <div className="flex justify-center items-center gap-2 mb-6">
                <Heart className="w-8 h-8 text-coral-pink animate-bounce-gentle" />
                <p className="font-body text-2xl md:text-3xl text-gray-700 font-medium">
                  Your Learning Companion
                </p>
                <Zap className="w-8 h-8 text-sunny-yellow animate-wiggle" />
              </div>
            </div>

            <div className="mb-12">
              <FlipbookViewer />
            </div>

            <p className="font-body text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A magical place where everyone learns, communicates, and grows
              together! 🌟 Join thousands of learners on an amazing journey of
              discovery.
            </p>

            <Button
              size="lg"
              className="font-body text-xl px-8 py-4 bg-gradient-to-r from-sky-blue to-mint-green hover:from-mint-green hover:to-coral-pink text-white rounded-full shadow-lg hover-bounce transform transition-all duration-300 hover:scale-105"
            >
              Start Your Adventure! ✨
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.href}>
                <Card
                  className={`hover-glow cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-transparent hover:border-sunny-yellow shadow-lg ${
                    isLoaded ? "animate-slide-in-bounce" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mb-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-soft-lavender/20 to-sky-blue/20 border-2 border-sunny-yellow/30 animate-rainbow-glow">
              <CardContent className="p-8">
                <blockquote className="font-body text-2xl md:text-3xl text-gray-700 italic mb-4">
                  "Every child is a different kind of flower, and all together
                  make this world a beautiful garden."
                </blockquote>
                <p className="font-heading text-lg text-gray-600">
                  - Anonymous
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-sunny-yellow/20 via-mint-green/20 to-coral-pink/20 rounded-3xl p-8 border-2 border-sky-blue/30">
              <h2 className="font-heading text-4xl font-bold mb-4 text-gray-800">
                Ready to Learn & Play? 🎉
              </h2>
              <p className="font-body text-xl text-gray-600 mb-6">
                Join our community of amazing learners and start your journey
                today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/education">
                  <Button
                    size="lg"
                    className="font-body text-lg px-6 py-3 bg-sky-blue hover:bg-sky-blue/80 text-white rounded-full hover-bounce"
                  >
                    Explore Games 🎮
                  </Button>
                </Link>
                <Link href="/stories">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-body text-lg px-6 py-3 border-2 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white rounded-full hover-wiggle bg-transparent"
                  >
                    Learn More 📚
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
