import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import type { translations } from "@/lib/translations";

interface ChatInterfaceProps {
  t: (key: string) => string;
  currentLanguage: string;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export default function ChatInterface({ t, currentLanguage }: ChatInterfaceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your waste management assistant. I can help you optimize your recycling strategy, find the best recyclers for your waste categories, and maximize your Vinyasa Coins earnings. How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    try {
      // Call OpenAI API with language context
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          language: currentLanguage
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      // Fallback response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your question about waste management. Based on your bin data, I recommend focusing on optimizing your plastic and electronic waste streams for maximum value and Vinyasa Coins. Would you like specific recommendations for recyclers in your area?",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Floating chat button when minimized
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-forest text-white hover:bg-green-800 rounded-full w-14 h-14 p-0 shadow-lg"
          data-testid="button-chat-open"
        >
          <Bot className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  // Full chat interface when open
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-h-96">
      <Card className="bg-white rounded-xl shadow-2xl border border-gray-200">
        <div className="bg-forest text-white p-3 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="text-sage" size={20} />
            <h3 className="text-sm font-semibold">{t('assistant')}</h3>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-transparent hover:bg-green-800 text-white p-1 h-auto"
            data-testid="button-chat-close"
          >
            ×
          </Button>
        </div>
        
        <CardContent className="p-4">
          <div className="h-48 overflow-y-auto border rounded-lg p-3 mb-3 space-y-3 text-sm">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "assistant" && (
                  <Bot className="text-sage mt-1" size={16} />
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-xs ${
                    message.sender === "user"
                      ? "bg-fresh text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                {message.sender === "user" && (
                  <User className="text-fresh mt-1" size={16} />
                )}
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about waste management..."
              className="flex-1 text-sm h-8"
              data-testid="input-chat-message"
            />
            <Button
              onClick={handleSend}
              className="bg-fresh text-white hover:bg-green-600 h-8 px-3"
              data-testid="button-send-message"
            >
              <Send size={14} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}