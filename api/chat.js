export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { message, language } = req.body;

    // Mock AI response based on common queries
    let response = '';
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('sorting') || lowerMessage.includes('quality')) {
      response = language === 'hi' 
        ? 'हमारी AI सिस्टम 99% सटीकता के साथ उत्पादों की गुणवत्ता का विश्लेषण करती है। यह रंग, आकार, और पकाव के आधार पर स्वचालित रूप से सॉर्ट करती है।'
        : language === 'bn'
        ? 'আমাদের এআই সিস্টেম ৯৯% নির্ভুলতার সাথে পণ্যের গুণমান বিশ্লেষণ করে। এটি রং, আকার এবং পাকাপাকির ভিত্তিতে স্বয়ংক্রিয়ভাবে সাজায়।'
        : 'Our AI system analyzes produce quality with 99% accuracy. It automatically sorts based on color, size, and ripeness levels.';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('market')) {
      response = language === 'hi'
        ? 'हमारा सिस्टम रियल-टाइम बाजार की कीमतों को ट्रैक करता है और आपके उत्पाद के लिए सबसे अच्छे बाजार की सिफारिश करता है।'
        : language === 'bn'
        ? 'আমাদের সিস্টেম রিয়েল-টাইম বাজার দাম ট্র্যাক করে এবং আপনার পণ্যের জন্য সেরা বাজারের সুপারিশ করে।'
        : 'Our system tracks real-time market prices and recommends the best markets for your produce to maximize revenue.';
    } else if (lowerMessage.includes('waste') || lowerMessage.includes('recycle')) {
      response = language === 'hi'
        ? 'আমাদের স্মার্ট বিন ৫ ধরনের বর্জ্য আলাদা করে এবং প্রতিটি সঠিক পুনর্ব্যবহারের জন্য রিসাইক্লার সাথে যুক্ত করে। ভিন্যাস কয়েন উপার্জন করুন!'
        : language === 'bn'
        ? 'আমাদের স্মার্ট বিন ৫ ধরনের বর্জ্য আলাদা করে এবং প্রতিটি সঠিক পুনর্ব্যবহারের জন্য রিসাইক্লার সাথে যুক্ত করে। ভিন্যাস কয়েন উপার্জন করুন!'
        : 'Our smart bins sort 5 types of waste and connect each to proper recyclers. Earn Vinyasa Coins for proper waste sorting!';
    } else {
      response = language === 'hi'
        ? 'मैं आपकी खेती और कचरा प्रबंधन संबंधी सभी जरूरतों में मदद कर सकता हूं। कृपया अपना प्रश्न पूछें!'
        : language === 'bn'
        ? 'আমি আপনার কৃষি এবং বর্জ্য ব্যবস্থাপনা সংক্রান্ত সকল প্রয়োজনে সাহায্য করতে পারি। দয়া করে আপনার প্রশ্ন জিজ্ঞাসা করুন!'
        : 'I can help you with all your agricultural and waste management needs. Please ask me any questions!';
    }

    res.status(200).json({ 
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}