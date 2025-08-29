import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getLanguagePrompt = (language: string) => {
  switch (language) {
    case 'hi':
      return 'Please respond in Hindi (हिंदी). You are a waste management expert helping with recycling optimization and Vinyasa Coins rewards.';
    case 'bn':
      return 'Please respond in Bengali (বাংলা). You are a waste management expert helping with recycling optimization and Vinyasa Coins rewards.';
    case 'te':
      return 'Please respond in Telugu (తెలుగు). You are a waste management expert helping with recycling optimization and Vinyasa Coins rewards.';
    case 'ta':
      return 'Please respond in Tamil (தமிழ்). You are a waste management expert helping with recycling optimization and Vinyasa Coins rewards.';
    default:
      return 'Please respond in English. You are a waste management expert helping with recycling optimization and Vinyasa Coins rewards.';
  }
};

router.post('/', async (req, res) => {
  try {
    const { message, language = 'en' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const languagePrompt = getLanguagePrompt(language);
    const systemPrompt = `${languagePrompt}

You are an AI assistant for a Consumer Central Ops dashboard for waste management using Vinyasa-AI smart waste bins. You help users with:

1. Waste sorting optimization across different bin types (Residential, Office, Industrial, Medical)
2. Maximizing value from waste categories (dry, wet, plastic, electronic, medical) 
3. Connecting with local recyclers in the marketplace
4. Earning and redeeming Vinyasa Coins (rewards system)
5. Understanding recycling methods and best practices

Keep responses helpful, concise, and focused on waste management optimization. Always mention "value unlocked" instead of "revenue" when discussing monetary benefits.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiMessage = completion.choices[0]?.message?.content;
    
    if (!aiMessage) {
      throw new Error('No response from AI');
    }

    res.json({ message: aiMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Failed to get AI response',
      message: 'I apologize, but I am having trouble processing your request right now. Please try again later.'
    });
  }
});

export default router;