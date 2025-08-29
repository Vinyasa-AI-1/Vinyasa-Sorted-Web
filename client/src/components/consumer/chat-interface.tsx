import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import type { translations } from "@/lib/translations";

interface ChatInterfaceProps {
  t: (key: keyof typeof translations.en) => string;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export default function ChatInterface({ t }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your waste management assistant. I can help you optimize your recycling strategy, find the best recyclers for your waste categories, and maximize your Vinyasa Coins earnings. How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your question about waste management. Based on your bin data, I recommend focusing on optimizing your plastic and electronic waste streams for maximum value and Vinyasa Coins. Would you like specific recommendations for recyclers in your area?",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-forest mb-4 flex items-center">
          <Bot className="mr-2" size={24} />
          {t('assistant')}
        </h3>
        
        <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "assistant" && (
                <Bot className="text-sage mt-1" size={20} />
              )}
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-fresh text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
              {message.sender === "user" && (
                <User className="text-fresh mt-1" size={20} />
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('askAboutProduce') || "Ask about your waste management..."}
            className="flex-1"
            data-testid="input-chat-message"
          />
          <Button
            onClick={handleSend}
            className="bg-fresh text-white hover:bg-green-600"
            data-testid="button-send-message"
          >
            <Send size={20} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}