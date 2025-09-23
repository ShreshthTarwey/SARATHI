"use client";

import Link from "next/link";
import { Sparkles, Menu, X, User, Settings, LogOut, Bell } from "lucide-react";
import axios from "axios";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { href: "/communication", label: "Communication", icon: "💬" },
    { href: "/education", label: "Education", icon: "🎮" },
    { href: "/stories", label: "Stories", icon: "📚" },
    { href: "/mission", label: "Mission", icon: "🎯" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b-2 border-sunny-yellow/30 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="animate-sparkle-dance">
              <Sparkles className="w-8 h-8 text-sunny-yellow sarathi-icon" />
            </div>
            <span className="font-heading text-3xl font-bold bg-gradient-to-r from-sky-blue via-mint-green to-coral-pink bg-clip-text text-transparent group-hover:animate-rainbow-glow">
              SARATHI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-gray-700 hover:text-sky-blue transition-all duration-300 hover:scale-105 flex items-center space-x-1 group"
              >
                <span className="group-hover:animate-bounce-gentle text-xl">
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-full bg-gradient-to-r from-coral-pink/20 to-soft-lavender/20 hover:from-coral-pink/30 hover:to-soft-lavender/30 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-sunny-yellow/50"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-sky-blue to-mint-green rounded-full flex items-center justify-center animate-bounce-gentle">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="font-body font-medium text-gray-700">
                Profile
              </span>
              <div className="w-2 h-2 bg-coral-pink rounded-full animate-pulse"></div>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-sunny-yellow/30 overflow-hidden animate-slide-in-bounce">
                <div className="p-4 bg-gradient-to-r from-sky-blue/10 via-mint-green/10 to-coral-pink/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-coral-pink to-soft-lavender rounded-full flex items-center justify-center animate-rainbow-glow">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-800">
                        Learning Explorer
                      </h3>
                      <p className="font-body text-sm text-gray-600">
                        Ready for adventure! ✨
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <Link
                    href="/profile"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sky-blue/10 transition-all duration-300 group"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <div className="w-8 h-8 bg-sky-blue/20 rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                      <User className="w-4 h-4 text-sky-blue" />
                    </div>
                    <span className="font-body font-medium text-gray-700">
                      My Profile
                    </span>
                  </Link>

                  <Link
                    href="/settings"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-mint-green/10 transition-all duration-300 group"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center group-hover:animate-wiggle">
                      <Settings className="w-4 h-4 text-mint-green" />
                    </div>
                    <span className="font-body font-medium text-gray-700">
                      Settings
                    </span>
                  </Link>

                  <Link
                    href="/notifications"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sunny-yellow/10 transition-all duration-300 group"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <div className="w-8 h-8 bg-sunny-yellow/20 rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                      <Bell className="w-4 h-4 text-sunny-yellow" />
                    </div>
                    <span className="font-body font-medium text-gray-700">
                      Notifications
                    </span>
                    <div className="w-2 h-2 bg-coral-pink rounded-full animate-pulse ml-auto"></div>
                  </Link>

                  <hr className="my-2 border-gray-200" />

                  <button
                    onClick={async () => {
                      try {
                        await axios.get("http://localhost:8000/api/auth/signout", { withCredentials: true });
                        window.location.href = "http://localhost:5173/signin";
                      } catch (err) {
                        console.error("Signout failed", err);
                      }
                    }}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-coral-pink/10 transition-all duration-300 group w-full text-left"
                  >
                    <div className="w-8 h-8 bg-coral-pink/20 rounded-full flex items-center justify-center group-hover:animate-wiggle">
                      <LogOut className="w-4 h-4 text-coral-pink" />
                    </div>
                    <span className="font-body font-medium text-gray-700">
                      Sign Out
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-full bg-mint-green/20 hover:bg-mint-green/30 transition-colors sarathi-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 sarathi-icon" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 sarathi-icon" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sunny-yellow/30 bg-gradient-to-r from-sky-blue/5 via-mint-green/5 to-coral-pink/5">
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-sunny-yellow/20 rounded-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-body font-medium">{link.label}</span>
                </Link>
              ))}

              <hr className="mx-4 border-gray-200" />

              <div className="px-4 space-y-2">
                <div className="flex items-center space-x-3 py-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-coral-pink to-soft-lavender rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-800">
                      Learning Explorer
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      Ready for adventure! ✨
                    </p>
                  </div>
                </div>

                <Link
                  href="/profile"
                  className="flex items-center space-x-3 px-2 py-2 text-gray-700 hover:bg-sky-blue/20 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5 text-sky-blue" />
                  <span className="font-body font-medium">My Profile</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
