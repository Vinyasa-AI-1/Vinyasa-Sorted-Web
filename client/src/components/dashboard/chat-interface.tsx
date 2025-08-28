import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Minus, Send } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { translations } from "@/lib/translations";
import type { Language } from "@/hooks/use-language";

interface ChatInterfaceProps {
  t: (key: keyof typeof translations.en) => string;
  currentLanguage?: Language;
}

const getInitialMessages = (t: (key: keyof typeof translations.en) => string, currentLanguage: Language = 'en') => {
  const greetings = {
    en: "Hello! I can help you optimize your produce sales. What would you like to know?",
    hi: "नमस्ते! मैं आपकी उत्पादन बिक्री को अनुकूलित करने में मदद कर सकता हूं। आप क्या जानना चाहेंगे?",
    bn: "হ্যালো! আমি আপনার কৃষি পণ্য বিক্রয় অপ্টিমাইজ করতে সাহায্য করতে পারি। আপনি কি জানতে চান?",
    te: "హలో! మీ వ్యవసాయ పণ్యాల అమ్మకాలను అనুకూలీకరించడంలో నేను సహాయపడగలను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    mr: "हॅलो! मी तुमच्या उत्पादनाची विक्री अनुकूलित करण्यात मदत करू शकतो. तुम्हाला काय जाणून घ्यायचे आहे?"
  };

  const sampleQuestions = {
    en: "Show me the best markets for my premium mangoes",
    hi: "मेरे प्रीमियम आमों के लिए सबसे अच्छे बाजार दिखाएं",
    bn: "আমার প্রিমিয়াম আমের জন্য সেরা বাজারগুলো দেখান",
    te: "నా ప్రీమియం మామిడిపండ్లకు ఉత্తম మార్కెట్లను చూపించండి",
    mr: "माझ्या प्रीमियम आंब्यांसाठी सर्वोत्तम बाजार दाखवा"
  };

  const responses = {
    en: "Based on current prices, JNPT Export Terminal offers ₹220/kg for premium Alphonso mangoes. Dubai market pays ₹200/kg. Both are excellent options!",
    hi: "वर्तमान कीमतों के आधार पर, जेएनपीटी एक्सपोर्ट टर्मिनल प्रीमियम अल्फांसो आम के लिए ₹220/किग्रा देता है। दुबई बाजार ₹200/किग्रा देता है। दोनों बेहतरीन विकल्प हैं!",
    bn: "বর্তমান দামের ভিত্তিতে, JNPT এক্সপোর্ট টার্মিনাল প্রিমিয়াম আলফানসো আমের জন্য ₹220/কেজি দেয়। দুবাই বাজার ₹200/কেজি দেয়। দুটোই চমৎকার বিকল্প!",
    te: "ప్రస్తుత ధరల ఆధారంగా, JNPT ఎక్స్‌పోర్ట్ టెర్మినల్ ప్రీమియం అల్ఫాన్సో మామిడిపండ్లకు ₹220/కిలో ఇస్తుంది. దుబాయి మార్కెట్ ₹200/కిలో చెల్లిస్తుంది. రెండూ అద్భుతమైన ఎంపికలు!",
    mr: "सध्याच्या किंमतींच्या आधारावर, JNPT एक्सपोर्ट टर्मिनल प्रीमियम अल्फान्सो आंब्यासाठी ₹220/किलो देतो. दुबई बाजार ₹200/किलो देतो. दोन्ही उत्कृष्ट पर्याय आहेत!"
  };

  return [
    {
      id: 1,
      text: greetings[currentLanguage] || greetings.en,
      isBot: true,
    },
    {
      id: 2,
      text: sampleQuestions[currentLanguage] || sampleQuestions.en,
      isBot: false,
    },
    {
      id: 3,
      text: responses[currentLanguage] || responses.en,
      isBot: true,
    },
  ];
};

export default function ChatInterface({ t, currentLanguage = 'en' }: ChatInterfaceProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(getInitialMessages(t, currentLanguage));
  const [inputValue, setInputValue] = useState("");

  const { data: summary } = useQuery({
    queryKey: ["/api/summary"],
  });

  const { data: varieties } = useQuery({
    queryKey: ["/api/produce-varieties"],
  });

  const { data: markets } = useQuery({
    queryKey: ["/api/markets"],
  });

  const { data: overallSummary } = useQuery({
    queryKey: ["/api/overall-summary"],
  });

  useEffect(() => {
    setMessages(getInitialMessages(t, currentLanguage));
  }, [currentLanguage, t]);

  const generateBotResponse = (userQuestion: string, currentLang: Language) => {
    const question = userQuestion.toLowerCase();
    
    // Analyze question and provide contextual response based on dashboard data
    if (question.includes('revenue') || question.includes('income') || question.includes('earning') || 
        question.includes('आय') || question.includes('मुनाफा') || question.includes('আয়') || 
        question.includes('ఆదాయం') || question.includes('महसूल')) {
      
      const responses = {
        en: `Based on your current data: Total revenue is ₹${summary?.revenue?.toLocaleString() || '0'}. Your optimal revenue potential is ₹${overallSummary?.totalOptimalRevenue?.toLocaleString() || '0'}. Focus on premium quality produce for maximum returns.`,
        hi: `आपके वर्तमान डेटा के आधार पर: कुल आय ₹${summary?.revenue?.toLocaleString() || '0'} है। आपकी इष्टतम आय क्षमता ₹${overallSummary?.totalOptimalRevenue?.toLocaleString() || '0'} है। अधिकतम रिटर्न के लिए प्रीमियम गुणवत्ता वाले उत्पाद पर ध्यान दें।`,
        bn: `আপনার বর্তমান ডেটার ভিত্তিতে: মোট আয় ₹${summary?.revenue?.toLocaleString() || '0'}। আপনার সর্বোত্তম আয়ের সম্ভাবনা ₹${overallSummary?.totalOptimalRevenue?.toLocaleString() || '0'}। সর্বোচ্চ রিটার্নের জন্য প্রিমিয়াম মানের পণ্যের উপর মনোযোগ দিন।`,
        te: `మీ ప్రస్తుత డేటా ఆధారంగా: మొత్తం ఆదాయం ₹${summary?.revenue?.toLocaleString() || '0'}। మీ సరైన ఆదాయ సంభావ్యత ₹${overallSummary?.totalOptimalRevenue?.toLocaleString() || '0'}। గరిష్ట రాబడి కోసం ప్రీమియం నాణ్యత ఉత్పత్తులపై దృష్టి పెట్టండి।`,
        mr: `तुमच्या सध्याच्या डेटाच्या आधारावर: एकूण महसूल ₹${summary?.revenue?.toLocaleString() || '0'} आहे। तुमची इष्टतम महसूल क्षमता ₹${overallSummary?.totalOptimalRevenue?.toLocaleString() || '0'} आहे। जास्तीत जास्त परताव्यासाठी प्रीमियम गुणवत्तेच्या उत्पादनांवर लक्ष द्या।`
      };
      return responses[currentLang] || responses.en;
    }
    
    if (question.includes('market') || question.includes('sell') || question.includes('buyer') ||
        question.includes('बाजार') || question.includes('बेचना') || question.includes('বাজার') ||
        question.includes('মার্কেট') || question.includes('বিক্রি') || question.includes('मार्केट') ||
        question.includes('మార్కెట్') || question.includes('అమ్మకం')) {
      
      const exportMarkets = markets?.filter(m => m.category === 'export') || [];
      const localMarkets = markets?.filter(m => m.category === 'local') || [];
      
      const responses = {
        en: `For your produce, I recommend: Export markets like ${exportMarkets[0]?.name || 'JNPT Terminal'} for premium quality (₹200-220/kg). Local markets like ${localMarkets[0]?.name || 'Vashi APMC'} for regular quality (₹80-120/kg). Choose based on your quality grades.`,
        hi: `आपके उत्पाद के लिए मैं सुझाता हूं: प्रीमियम गुणवत्ता के लिए ${exportMarkets[0]?.name || 'जेएनपीटी टर्मिनल'} जैसे निर्यात बाजार (₹200-220/किग्रा)। नियमित गुणवत्ता के लिए ${localMarkets[0]?.name || 'वाशी एपीएमसी'} जैसे स्थानीय बाजार (₹80-120/किग्रा)। अपने गुणवत्ता ग्रेड के आधार पर चुनें।`,
        bn: `আপনার পণ্যের জন্য আমি সুপারিশ করি: প্রিমিয়াম মানের জন্য ${exportMarkets[0]?.name || 'JNPT টার্মিনাল'} এর মতো রপ্তানি বাজার (₹200-220/কেজি)। নিয়মিত মানের জন্য ${localMarkets[0]?.name || 'ভাশি APMC'} এর মতো স্থানীয় বাজার (₹80-120/কেজি)। আপনার মানের গ্রেড অনুযায়ী বেছে নিন।`,
        te: `మీ ఉత్పత్తులకు నేను సిఫారసు చేస్తున్నాను: ప్రీమియం నాణ్యత కోసం ${exportMarkets[0]?.name || 'JNPT టెర్మినల్'} వంటి ఎగుమతి మార్కెట్లు (₹200-220/కిలో)। సాధారణ నాణ్యత కోసం ${localMarkets[0]?.name || 'వాశి APMC'} వంటి స్థానిక మార్కెట్లు (₹80-120/కిలో)। మీ నాణ్యత గ్రేడ్ల ఆధారంగా ఎంచుకోండి।`,
        mr: `तुमच्या उत्पादनासाठी मी शिफारस करतो: प्रीमियम गुणवत्तेसाठी ${exportMarkets[0]?.name || 'JNPT टर्मिनल'} सारख्या निर्यात बाजारपेठा (₹200-220/किलो). नियमित गुणवत्तेसाठी ${localMarkets[0]?.name || 'वाशी APMC'} सारख्या स्थानिक बाजारपेठा (₹80-120/किलो). तुमच्या गुणवत्तेच्या ग्रेडनुसार निवडा.`
      };
      return responses[currentLang] || responses.en;
    }
    
    if (question.includes('quality') || question.includes('grade') || question.includes('premium') ||
        question.includes('गुणवत्ता') || question.includes('प्रीमियम') || question.includes('গুণমান') ||
        question.includes('প্রিমিয়াম') || question.includes('నाण्यत') || question.includes('ప्রীमियम') || question.includes('गुणवत्ता')) {
      
      const avgQuality = summary?.avgQuality || 0;
      const totalSorted = summary?.totalSorted || 0;
      
      const responses = {
        en: `Your current average quality is ${avgQuality}% across ${totalSorted} sorted items. Focus on harvesting at optimal ripeness and proper storage to maintain premium grades. Premium quality can earn 2-3x more than regular grades.`,
        hi: `आपकी वर्तमान औसत गुणवत्ता ${totalSorted} सॉर्ट किए गए आइटम में ${avgQuality}% है। प्रीमियम ग्रेड बनाए रखने के लिए इष्टतम पकने पर कटाई और उचित भंडारण पर ध्यान दें। प्रीमियम गुणवत्ता नियमित ग्रेड से 2-3 गुना अधिक कमा सकती है।`,
        bn: `আপনার বর্তমান গড় গুণমান ${totalSorted}টি সর্ট করা আইটেমের মধ্যে ${avgQuality}%। প্রিমিয়াম গ্রেড বজায় রাখতে সর্বোত্তম পাকার সময় ফসল কাটা এবং সঠিক সংরক্ষণের উপর মনোযোগ দিন। প্রিমিয়াম মান নিয়মিত গ্রেডের চেয়ে 2-3 গুণ বেশি আয় করতে পারে।`,
        te: `మీ ప్రస్తుత సగటు నాణ్యత ${totalSorted} సార్ట్ చేసిన వస్తువులలో ${avgQuality}%। ప్రీమియం గ్రేడ్‌లను కొనసాగించడానికి సరైన పండిన సময়లో పంట మరియు సరైన నిల్వపై దృష్టి పెట్టండి। ప్రీమియం నాణ్యత సాధారణ గ్రేడ్‌ల కంటే 2-3 రెట్లు ఎక్కువ సంపాదించగలదు।`,
        mr: `तुमची सध्याची सरासरी गुणवत्ता ${totalSorted} सॉर्ट केलेल्या वस्तूंमध्ये ${avgQuality}% आहे. प्रीमियम ग्रेड राखण्यासाठी योग्य पिकवणीवर कापणी आणि योग्य साठवणुकीवर लक्ष द्या. प्रीमियम गुणवत्ता नियमित ग्रेडपेक्षा 2-3 पट जास्त कमवू शकते.`
      };
      return responses[currentLang] || responses.en;
    }
    
    // Default response for other questions
    const defaultResponses = {
      en: `I'm analyzing your dashboard data to help optimize your produce sales. You have ${summary?.totalSorted || 0} items sorted with ${summary?.totalWeight || 0}kg total weight. I can help with revenue optimization, market selection, and quality management.`,
      hi: `मैं आपके उत्पादन बिक्री को अनुकूलित करने के लिए आपके डैशबोर्ड डेटा का विश्लेषण कर रहा हूं। आपके पास ${summary?.totalWeight || 0}किग्रा कुल वजन के साथ ${summary?.totalSorted || 0} आइटम सॉर्ट किए गए हैं। मैं आय अनुकूलन, बाजार चयन और गुणवत्ता प्रबंधन में मदद कर सकता हूं।`,
      bn: `আমি আপনার পণ্য বিক্রয় অপ্টিমাইজ করার জন্য আপনার ড্যাশবোর্ড ডেটা বিশ্লেষণ করছি। আপনার ${summary?.totalWeight || 0}কেজি মোট ওজনের সাথে ${summary?.totalSorted || 0}টি আইটেম সর্ট করা আছে। আমি আয় অপ্টিমাইজেশন, বাজার নির্বাচন এবং গুণমান ব্যবস্থাপনায় সাহায্য করতে পারি।`,
      te: `మీ ఉత్పత్తుల అమ్మకాలను అనుకూలీకరించడానికి నేను మీ డాష్‌బోర్డ్ డేటాను విశ్లేషిస్తున్నాను। మీకు ${summary?.totalWeight || 0}కిలోల మొత్తం బరువుతో ${summary?.totalSorted || 0} వస్తువులు సార్ట్ చేయబడ్డాయి। నేను ఆదాయ అనుకూలీకరణ, మార్కెట్ ఎంపిక మరియు నాణ్యత నిర్వహణలో సహాయం చేయగలను।`,
      mr: `मी तुमच्या उत्पादनाची विक्री अनुकूलित करण्यासाठी तुमच्या डॅशबोर्ड डेटाचे विश्लेषण करत आहे. तुमच्याकडे ${summary?.totalWeight || 0}किलो एकूण वजनासह ${summary?.totalSorted || 0} वस्तू सॉर्ट केलेल्या आहेत. मी महसूल अनुकूलन, बाजार निवड आणि गुणवत्ता व्यवस्थापनात मदत करू शकतो.`
    };
    
    return defaultResponses[currentLang] || defaultResponses.en;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    const botResponse = {
      id: messages.length + 2,
      text: generateBotResponse(inputValue, currentLanguage),
      isBot: true,
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue("");
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
          <span className="font-semibold" data-testid="text-chat-title">{t('assistant')}</span>
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
              placeholder={t('askAboutProduce')}
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
