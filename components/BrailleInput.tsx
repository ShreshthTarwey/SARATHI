"use client";

import { useState, useEffect } from 'react';

// A map for the dot positions and their corresponding numbers/keys
const dotMap = [
    { id: 1, key: 'Numpad7' },
    { id: 4, key: 'Numpad9' },
    { id: 2, key: 'Numpad4' },
    { id: 5, key: 'Numpad6' },
    { id: 3, key: 'Numpad1' },
    { id: 6, key: 'Numpad3' },
];

// 1. ADDED: The Braille to English character map
const brailleMap: { [key: string]: string } = {
    '1': 'a', '12': 'b', '14': 'c', '145': 'd', '15': 'e',
    '124': 'f', '1245': 'g', '125': 'h', '24': 'i', '245': 'j',
    '13': 'k', '123': 'l', '134': 'm', '1345': 'n', '135': 'o',
    '1234': 'p', '12345': 'q', '1235': 'r', '234': 's', '2345': 't',
    '136': 'u', '1236': 'v', '2456': 'w', '1346': 'x', '13456': 'y', '1356': 'z',
};

// Helper function to speak text aloud
const speak = (text: string) => {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel(); // Stop any previous speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
    }
};

export default function BrailleInput() {
    const [activeDots, setActiveDots] = useState<Set<number>>(new Set());
    const [outputText, setOutputText] = useState("");

    const toggleDot = (dotId: number) => {
        setActiveDots(prevDots => {
            const newDots = new Set(prevDots);
            if (newDots.has(dotId)) {
                newDots.delete(dotId);
            } else {
                newDots.add(dotId);
            }
            return newDots;
        });
    };

    // 2. UPDATED: Effect now handles Spacebar and Enter keys
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const dot = dotMap.find(d => d.key === event.code);
            if (dot) {
                event.preventDefault();
                toggleDot(dot.id);
            }

            // --- CHARACTER COMPLETION LOGIC ---
            if (event.code === 'Space') {
                event.preventDefault();
                if (activeDots.size === 0) {
                    // If space is pressed with no dots active, add a space
                    setOutputText(prev => prev + ' ');
                    speak('space');
                    return;
                }

                // Create the key for the brailleMap
                const brailleKey = Array.from(activeDots).sort().join('');
                const character = brailleMap[brailleKey];

                if (character) {
                    setOutputText(prev => prev + character);
                    speak(character); // Speak the single character
                } else {
                    speak('unknown character'); // Feedback for invalid combo
                }
                
                // Reset dots for the next character
                setActiveDots(new Set());
            }

            // --- SENTENCE COMPLETION LOGIC ---
            if (event.code === 'Enter') {
                event.preventDefault();
                if (outputText.trim().length > 0) {
                    speak(outputText); // Speak the entire sentence
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeDots, outputText]); // Rerun effect if state changes

    return (
        <div className="bg-slate-50 p-4 sm:p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Virtual Braille Keyboard</h1>
                <p className="text-slate-500 mt-1">Use Numpad keys to select dots. Press **Spacebar** to type a letter and **Enter** to hear the full text.</p>
            </div>
            
            <div className="flex justify-center items-center gap-8">
                <div 
                    className="grid grid-cols-2 gap-x-6 gap-y-4 p-6 bg-slate-200 rounded-xl"
                    aria-label="Braille input grid"
                >
                    {dotMap.map(dot => {
                        const isActive = activeDots.has(dot.id);
                        return (
                            <div 
                                key={dot.id}
                                title={`Dot ${dot.id}`}
                                onClick={() => toggleDot(dot.id)}
                                className={`h-20 w-20 rounded-full transition-all duration-150 flex items-center justify-center text-2xl font-bold cursor-pointer
                                    ${isActive 
                                        ? 'bg-blue-500 text-white shadow-lg scale-105' 
                                        : 'bg-slate-400 text-white opacity-50 hover:opacity-100'
                                    }`
                                }
                            >
                                {dot.id}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8">
                <label htmlFor="braille-output" className="block text-lg font-semibold text-slate-700 mb-2">
                    Translated Text
                </label>
                <textarea
                    id="braille-output"
                    readOnly
                    value={outputText}
                    className="w-full h-40 p-4 border-2 border-slate-300 rounded-lg text-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your text will appear here..."
                />
            </div>
        </div>
    );
}