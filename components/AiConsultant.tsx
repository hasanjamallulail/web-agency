import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { ChatMessage } from '../types';

const AiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the Wargrowth AI Consultant. How can I help you scale your business today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    trackEvent(newState ? 'OpenChat' : 'CloseChat');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly as per guidelines
      // Note: In this frontend-only demo without a backend proxy, the key must be in index.html polyfill 
      // or injected by the environment. If empty, we show a fallback.
      if (!process.env.API_KEY) {
         throw new Error("API Key missing");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `You are a professional growth consultant for Wargrowth Agency.
      Services: SEO, Ads, Marketplace Optimization, Web App, Social Media Management.
      Tone: Professional, empathetic, data-driven, and persuasive.
      Goal: Guide the user to schedule a consultation via WhatsApp.
      Keep answers concise (under 100 words).`;

      // Simplified call structure based on SDK guidelines for Text Tasks
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-latest', // Using valid alias from instructions
        contents: `${systemInstruction}\n\nUser query: ${userMessage.text}`,
      });

      const text = response.text || "I apologize, I'm having trouble connecting right now. Please contact us via WhatsApp.";
      
      setMessages(prev => [...prev, { role: 'model', text: text, timestamp: new Date() }]);
      trackEvent('AIChatMessageSent');
    } catch (error) {
      console.error("AI Error:", error);
      // Friendly fallback if API key is missing or call fails
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'm currently offline (API Key not configured). Please click the WhatsApp button to chat with a human expert immediately!", 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all hover:scale-105"
        aria-label="Open AI Consultant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col max-h-[500px] animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center gap-3">
            <div className="p-2 bg-blue-600/20 text-blue-400 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Wargrowth AI</h3>
              <p className="text-xs text-slate-400">Consultant (Gemini Powered)</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiConsultant;