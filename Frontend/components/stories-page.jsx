"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StoriesPage() {
  const featuredStories = [
    {
      id: 1,
      title: "From Silence to Confidence: Aarav's Journey",
      excerpt:
        "8-year-old Aarav discovered his love for learning through Sarathi's visual games, building confidence in communication despite hearing difficulties.",
      author: "Sarathi Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Success Story",
      image: "🌟",
      featured: true,
    },
    {
      id: 2,
      title: "How Technology Helps Bridge Communication Gaps",
      excerpt:
        "Exploring the role of assistive technology in creating inclusive learning environments for children with disabilities.",
      author: "Dr. Priya Sharma",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Research",
      image: "🔬",
      featured: false,
    },
    {
      id: 3,
      title: "Building Confidence Through Play-Based Learning",
      excerpt: "Why games and playful interactions are crucial for developing communication skills in young learners.",
      author: "Maya Singh",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "🎮",
      featured: false,
    },
  ]

  const categories = ["All Stories", "Success Stories", "Research", "Education", "Parent Guides", "Teacher Resources"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">Sarathi Stories</h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Inspiring stories of growth, research insights, and practical guides for creating inclusive learning
            environments.
          </p>
        </div>

        {/* Categories */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`font-heading ${
                index === 0 ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Story */}
        <Card
          className="mb-12 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">{featuredStories[0].image}</div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-heading">
                    Featured Story
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-heading">
                    {featuredStories[0].category}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">{featuredStories[0].readTime}</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{featuredStories[0].title}</h2>
                <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredStories[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✍️</span>
                    </div>
                    <div>
                      <p className="font-body font-bold text-foreground">{featuredStories[0].author}</p>
                      <p className="font-body text-sm text-muted-foreground">{featuredStories[0].date}</p>
                    </div>
                  </div>
                  <Button className="font-heading bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200">
                    Read Story
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredStories.slice(1).map((story, index) => (
            <Card
              key={story.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-heading ${
                      story.category === "Research" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {story.category}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">{story.readTime}</span>
                </div>
                <div className="text-center mb-4">
                  <div className="text-5xl">{story.image}</div>
                </div>
                <CardTitle className="font-heading text-xl">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body font-bold text-foreground text-sm">{story.author}</p>
                    <p className="font-body text-xs text-muted-foreground">{story.date}</p>
                  </div>
                  <Button variant="outline" size="sm" className="font-heading bg-transparent hover:bg-primary/10">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card
          className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Get the latest stories, research insights, and updates from the Sarathi community delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-sm px-4 py-2 border border-border rounded-md font-body"
              />
              <Button className="font-heading bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
