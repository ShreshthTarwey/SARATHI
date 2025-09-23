"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Accessibility Expert",
      avatar: "👩‍⚕️",
      description: "Specializes in inclusive design for children with disabilities",
    },
    {
      name: "Raj Patel",
      role: "Educational Technologist",
      avatar: "👨‍💻",
      description: "Creates engaging learning experiences through technology",
    },
    {
      name: "Maya Singh",
      role: "Child Psychologist",
      avatar: "👩‍🎓",
      description: "Ensures our approach supports healthy development",
    },
  ]

  const values = [
    {
      title: "Accessibility First",
      description: "Every feature is designed with accessibility in mind from the ground up",
      icon: "♿",
      color: "bg-blue-100",
    },
    {
      title: "Joyful Learning",
      description: "Learning should be fun, engaging, and celebrate every small victory",
      icon: "🎉",
      color: "bg-yellow-100",
    },
    {
      title: "Inclusive Community",
      description: "Building bridges between all learners, regardless of their abilities",
      icon: "🤝",
      color: "bg-green-100",
    },
    {
      title: "Technology as Companion",
      description: "Our technology feels warm, supportive, and genuinely helpful",
      icon: "🤖",
      color: "bg-purple-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">Our Mission</h1>
          <p className="font-body text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To bridge the communication and learning gap for people with disabilities through accessible, voice-enabled,
            and playful technology.
          </p>
        </div>

        {/* Mission Statement */}
        <Card
          className="mb-16 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Technology as a Companion</h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We believe technology should feel like a warm, empathetic helper - not cold software. Sarathi (सारथी)
              means "guide" or "companion" in Sanskrit, reflecting our commitment to being a trusted partner in every
              learner's journey. We're not just building tools; we're creating digital companions that understand,
              encourage, and celebrate with every user.
            </p>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="mb-16">
          <h2
            className="font-heading text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${value.color}`}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <Card
          className="mb-16 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <CardHeader>
            <CardTitle className="font-heading text-3xl text-center">Our Impact</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                <p className="font-body text-muted-foreground">Children Learning</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">50+</div>
                <p className="font-body text-muted-foreground">Schools Partner</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">95%</div>
                <p className="font-body text-muted-foreground">Improvement Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <h2
            className="font-heading text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="font-body text-sm font-bold text-primary mb-3">{member.role}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're a parent, educator, or someone who believes in inclusive technology, there are many ways
                to support our mission of making learning accessible for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="font-heading bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200">
                  Get Involved
                </Button>
                <Button
                  variant="outline"
                  className="font-heading border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
