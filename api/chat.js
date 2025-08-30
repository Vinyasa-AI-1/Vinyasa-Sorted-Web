import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, language, context } = req.body;

  try {
    let systemPrompt = '';
    
    if (context === 'producer') {
      systemPrompt = `You are a helpful agricultural produce optimization assistant for the Vinyasa-AI platform. 
      You help farmers and agricultural businesses optimize their produce sales, quality management, and market selection.
      
      Key context:
      - Users grow various fruits and vegetables (mangoes, oranges, tomatoes, etc.)
      - Produce is sorted by quality: Premium, Ripe, Yet To Ripe, Overripe, Rotten
      - There are different market options: Export, Local Market, Distant Market, Processing Units
      - Export markets pay the highest prices for premium quality produce
      - Users want to maximize revenue while maintaining sustainable farming practices
      
      Please respond in ${language === 'hi' ? 'Hindi' : language === 'bn' ? 'Bengali' : 'English'}.
      Keep responses helpful, concise, and focused on agricultural produce optimization.`;
    } else {
      systemPrompt = `You are a helpful waste management and sustainability assistant for the Vinyasa-AI platform. 
      You help users optimize their waste sorting, recycling strategies, and maximize their Vinyasa Coins earnings.
      
      Key context:
      - Users have smart bins that sort waste into categories: Dry, Wet, Plastic, Electronic, Medical
      - Vinyasa Coins are earned through proper waste sorting and recycling
      - There's a marketplace of recyclers with different pricing
      - Users want to maximize both environmental impact and financial returns
      
      Please respond in ${language === 'hi' ? 'Hindi' : language === 'bn' ? 'Bengali' : 'English'}.
      Keep responses helpful, concise, and focused on waste management optimization.`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    res.status(200).json({ 
      message: response.choices[0].message.content 
    });

  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Fallback responses based on context
    let fallbackResponses = {};
    
    if (context === 'producer') {
      fallbackResponses = {
        en: "Thank you for your question about produce optimization. Based on current market data, I recommend focusing on premium quality sorting and selecting export markets for higher revenue. Would you like specific market recommendations for your produce?",
        hi: "आपके उत्पाद अनुकूलन के बारे में प्रश्न के लिए धन्यवाद। वर्तमान बाजार डेटा के आधार पर, मैं प्रीमियम गुणवत्ता सॉर्टिंग और उच्च आय के लिए निर्यात बाजारों का चयन करने पर ध्यान देने की सलाह देता हूं।",
        bn: "পণ্য অপ্টিমাইজেশন সম্পর্কে আপনার প্রশ্নের জন্য ধন্যবাদ। বর্তমান বাজার ডেটার ভিত্তিতে, আমি প্রিমিয়াম মানের সর্টিং এবং উচ্চ আয়ের জন্য রপ্তানি বাজার নির্বাচনের উপর মনোযোগ দেওয়ার পরামর্শ দিই।"
      };
    } else {
      fallbackResponses = {
        en: "Thank you for your question about waste management. Based on your bin data, I recommend focusing on optimizing your plastic and electronic waste streams for maximum value and Vinyasa Coins. Would you like specific recommendations for recyclers in your area?",
        hi: "आपके अपशिष्ट प्रबंधन के बारे में प्रश्न के लिए धन्यवाद। आपके बिन डेटा के आधार पर, मैं अधिकतम मूल्य और विन्यास सिक्कों के लिए आपके प्लास्टिक और इलेक्ट्रॉनिक अपशिष्ट धाराओं को अनुकूलित करने पर ध्यान देने की सलाह देता हूं।",
        bn: "বর্জ্য ব্যবস্থাপনা সম্পর্কে আপনার প্রশ্নের জন্য ধন্যবাদ। আপনার বিন ডেটার ভিত্তিতে, আমি সর্বোচ্চ মূল্য এবং বিন্যাস কয়েনের জন্য আপনার প্লাস্টিক এবং ইলেকট্রনিক বর্জ্য স্রোত অপ্টিমাইজ করার দিকে ফোকাস করার পরামর্শ দিই।"
      };
    }
    
    res.status(200).json({ 
      message: fallbackResponses[language] || fallbackResponses.en 
    });
  }
}