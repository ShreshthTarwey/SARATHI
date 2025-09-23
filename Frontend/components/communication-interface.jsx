"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import VoiceRecorder from "./voice-recorder"
import TextToSpeech from "./text-to-speech"

export default function CommunicationInterface() {
  const [textInput, setTextInput] = useState("")
  const [voiceInput, setVoiceInput] = useState("")
  const [conversation, setConversation] = useState([])

  const handleSendText = () => {
    if (textInput.trim()) {
      setConversation((prev) => [...prev, { type: "text", content: textInput, timestamp: new Date() }])
      setTextInput("")
    }
  }

  const handleVoiceTranscript = (transcript) => {
    setVoiceInput(transcript)
    setConversation((prev) => [...prev, { type: "voice", content: transcript, timestamp: new Date() }])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Communication Hub</h1>
          <p className="font-body text-lg text-muted-foreground">
            Express yourself through text or voice - we're here to help you communicate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Text Communication */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-center">
                <span className="mr-2">✍️</span>
                Text Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Type your message here..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="min-h-32 font-body text-lg resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendText()
                  }
                }}
              />
              <div className="flex justify-between items-center">
                <TextToSpeech text={textInput} />
                <Button
                  onClick={handleSendText}
                  className="font-heading bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                  disabled={!textInput.trim()}
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Voice Communication */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-center">
                <span className="mr-2">🎤</span>
                Voice Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <VoiceRecorder onTranscript={handleVoiceTranscript} />
              </div>

              {voiceInput && (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-body text-sm text-muted-foreground mb-2">Last spoken:</p>
                  <p className="font-body text-lg text-foreground">{voiceInput}</p>
                  <div className="mt-3">
                    <TextToSpeech text={voiceInput} />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Conversation History */}
        {conversation.length > 0 && (
          <Card className="mt-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-center">
                <span className="mr-2">💬</span>
                Conversation History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversation.map((message, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg animate-fade-in-up ${
                      message.type === "text"
                        ? "bg-primary/10 border-l-4 border-primary"
                        : "bg-secondary/10 border-l-4 border-secondary"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-heading text-sm font-bold text-foreground">
                        {message.type === "text" ? "Text Message" : "Voice Message"}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="font-body text-foreground">{message.content}</p>
                    <div className="mt-2">
                      <TextToSpeech text={message.content} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Floating Speech Bubbles Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div className="bg-primary/20 rounded-full p-3">
                <span className="text-2xl">💭</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
