import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Minus, Send } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    text: "Hello! I can help you optimize your produce sales. What would you like to know?",
    isBot: true,
  },
  {
    id: 2,
    text: "Show me the best markets for my premium mangoes",
    isBot: false,
  },
  {
    id: 3,
    text: "Based on current prices, JNPT Export Terminal offers ₹220/kg for premium Alphonso mangoes. Dubai market pays ₹200/kg. Both are excellent options!",
    isBot: true,
  },
];

export default function ChatInterface() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question. I'm here to help you optimize your agricultural produce sales and find the best markets for your products.",
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-forest text-sage rounded-full w-12 h-12 p-0"
          data-testid="button-chat-expand"
        >
          <Bot className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-2xl border border-gray-200">
      <div className="bg-forest text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="text-sage" />
          <span className="font-semibold" data-testid="text-chat-title">Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-sage hover:text-white p-0"
          onClick={() => setIsMinimized(true)}
          data-testid="button-chat-minimize"
        >
          <Minus className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-0">
        <div className="h-64 p-4 overflow-y-auto bg-gray-50" data-testid="chat-messages">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-xs ${
                  message.isBot ? "" : "ml-auto"
                }`}
              >
                <div
                  className={`p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-sage text-white"
                      : "bg-white border ml-auto"
                  }`}
                  data-testid={`message-${message.id}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Ask about your produce..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-sage"
              data-testid="input-chat-message"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-sage text-white hover:bg-green-600 transition-colors p-2"
              data-testid="button-chat-send"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
