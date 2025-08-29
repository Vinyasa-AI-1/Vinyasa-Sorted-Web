import type { Language } from '@/hooks/use-language';

export const translations = {
  en: {
    // Header
    title: "Sorted! Consumer Central Ops Dashboard",
    farmName: "BKC-1 EcoCycler",
    
    // Menu Items
    liveSorting: "Live Waste Sorting",
    wasteAnalytics: "Waste Analytics", 
    recyclingRecommendations: "Recycling Recommendations",
    disposalOptimization: "Disposal Optimization",
    harvestInsights: "Harvest Insights",
    cropRecommendations: "Crop Recommendations", 
    yieldOptimization: "Yield Optimization",
    
    // Bin Categories
    smartBinResidential: "Residential Smart Bin",
    smartBinCommercial: "Commercial Smart Bin", 
    smartBinIndustrial: "Industrial Smart Bin",
    smartBinOffice: "Office Smart Bin",
    smartBinHospital: "Hospital Smart Bin",
    
    // Summary Cards
    totalSorted: "Total Sorted",
    totalWeight: "Total Weight", 
    avgQuality: "Avg Quality",
    revenue: "Revenue",
    vinyasaCoins: "Vinyasa Coins",
    totalVinyasaCoins: "Total Vinyasa Coins",
    
    // Waste Distribution
    wasteDistribution: "Waste Distribution by Bin Type",
    itemsTotal: "items total",
    
    // Waste Categories
    dry: "Dry",
    wet: "Wet",
    plastic: "Plastic",
    electronic: "Electronic", 
    medical: "Medical",
    
    // Quick Actions
    quickActions: "Quick Actions",
    viewAllBins: "View All Bins",
    viewAllProduce: "View All Produce",
    priceAnalysis: "Price Analysis",
    recyclingTrends: "Recycling Trends",
    marketTrends: "Market Trends",
    
    // Optimal Disposal Plan
    optimalDisposalPlan: "Optimal Disposal Plan by Bin Type",
    optimalRevenuePlan: "Optimal Revenue Plan by Variety",
    totalOptimalRevenue: "Total Optimal Revenue",
    wasteCategory: "Waste Category",
    items: "Items",
    weight: "Weight (kg)",
    recommendedDisposalTo: "Recommended Disposal To",
    pricePerKg: "Price/kg",
    total: "Total",
    changeBuyer: "Change Recycler",
    action: "Action",
    disposeNow: "Dispose Now",
    
    // Recycling Facilities Information
    recyclingFacilities: "Recycler Network",
    compostFacilities: "Compost Facilities",
    plasticRecyclers: "Plastic Recyclers", 
    ewasteRecyclers: "eWaste Recyclers",
    medicalWasteRecyclers: "Medical Waste Recyclers",
    genericRecyclers: "Generic Recyclers",
    localRecyclers: "Local Recyclers",
    redeemCoins: "Redeem Vinyasa Coins",
    distance: "Distance",
    capacity: "Capacity",
    dispose: "Dispose",
    
    // Charts
    revenueComparison: "Revenue Comparison by Bin Type",
    volumeTrends: "Volume Trends by Bin Type",
    today: "Today",
    monthlyAvg: "Monthly Avg",
    lastMonth: "Last Month",
    
    // Overall Summary
    overallSummary: "Overall Optimal Revenue Summary",
    totalItems: "Total Items",
    avgRevenuePerItem: "Avg Revenue per Item",
    
    // Chat
    assistant: "Waste Management Assistant",
    askAboutWaste: "Ask about your waste disposal...",
    
    // Disposal Categories
    compost: "Compost",
    plasticRecycling: "Plastic Recycling", 
    ewasteRecycling: "eWaste Recycling",
    medicalWasteRecycling: "Medical Waste Recycling",
    generalWaste: "General Waste",
    
    // Smart Bins
    "smart-bin-residential": "Residential Smart Bin",
    "smart-bin-commercial": "Commercial Smart Bin", 
    "smart-bin-industrial": "Industrial Smart Bin",
    "smart-bin-office": "Office Smart Bin",
    "smart-bin-hospital": "Hospital Smart Bin",
    
    // Waste Types
    wasteTypes: {
      dry: "Dry",
      wet: "Wet", 
      plastic: "Plastic",
      electronic: "Electronic",
      medical: "Medical",
    },
    
    // Waste categories data
    "Dry": "Dry",
    "Wet": "Wet", 
    "Plastic": "Plastic",
    "Electronic": "Electronic",
    "Medical": "Medical",
    
    // Disposal categories data
    "Compost": "Compost",
    "Plastic Recycling": "Plastic Recycling",
    "eWaste Recycling": "eWaste Recycling", 
    "Medical Waste Recycling": "Medical Waste Recycling",
    
    // Buyer names
    "JNPT Export Terminal": "JNPT Export Terminal",
    "Dubai International": "Dubai International",
    "Singapore Port": "Singapore Port",
    "Vashi APMC Market": "Vashi APMC Market",
    "Crawford Market": "Crawford Market",
    "Dadar Market": "Dadar Market",
    "Pune APMC": "Pune APMC",
    "Nashik Market": "Nashik Market",
    "Aurangabad APMC": "Aurangabad APMC",
    "Reliance Fresh": "Reliance Fresh",
    "Mother Dairy": "Mother Dairy",
    "Godrej Agrovet": "Godrej Agrovet",
    
    // Additional buyer names
    "Dubai Fruit Market": "Dubai Fruit Market",
    "Azadpur Mandi": "Azadpur Mandi",
    "ITC Foods Ltd": "ITC Foods Ltd",
    "Biogas Plant": "Biogas Plant",
    "Local (₹180/kg)": "Local (₹180/kg)",
    "Distant (₹190/kg)": "Distant (₹190/kg)",
    "Local (₹160/kg)": "Local (₹160/kg)",
    "Distant (₹170/kg)": "Distant (₹170/kg)",
    "Processing (₹140/kg)": "Processing (₹140/kg)",
    "Local (₹120/kg)": "Local (₹120/kg)",
    "Processing (₹110/kg)": "Processing (₹110/kg)",
    "Britannia (₹55/kg)": "Britannia (₹55/kg)",
    "Haldiram's (₹50/kg)": "Haldiram's (₹50/kg)",
    "Local Compost (₹2/kg)": "Local Compost (₹2/kg)",
    "Local (₹70/kg)": "Local (₹70/kg)",
    "Local (₹140/kg)": "Local (₹140/kg)",
    "Distant (₹150/kg)": "Distant (₹150/kg)",
    "Processing (₹120/kg)": "Processing (₹120/kg)",
    "Local (₹100/kg)": "Local (₹100/kg)",
    "Processing (₹90/kg)": "Processing (₹90/kg)"
  },
  
  hi: {
    // Header
    title: "सॉर्टेड! उपभोक्ता केंद्रीय संचालन डैशबोर्ड",
    farmName: "BKC-1 इकोसाइक्लर",
    
    // Menu Items
    liveSorting: "लाइव वेस्ट सॉर्टिंग",
    wasteAnalytics: "कचरा विश्लेषण",
    recyclingRecommendations: "रीसाइक्लिंग सुझाव",
    disposalOptimization: "निपटान अनुकूलन",
    
    // Bin Categories
    smartBinResidential: "आवासीय स्मार्ट बिन",
    smartBinCommercial: "व्यावसायिक स्मार्ट बिन",
    smartBinIndustrial: "औद्योगिक स्मार्ट बिन",
    smartBinOffice: "कार्यालय स्मार्ट बिन",
    smartBinHospital: "अस्पताल स्मार्ट बिन",
    
    // Summary Cards
    totalSorted: "कुल सॉर्ट किया गया",
    totalWeight: "कुल वजन",
    avgQuality: "औसत गुणवत्ता", 
    revenue: "आय",
    vinyasaCoins: "विन्यास सिक्के",
    totalVinyasaCoins: "कुल विन्यास सिक्के",
    
    // Waste Distribution
    wasteDistribution: "बिन प्रकार के अनुसार कचरा वितरण",
    itemsTotal: "कुल आइटम",
    
    // Waste Categories
    dry: "सूखा",
    wet: "गीला",
    plastic: "प्लास्टिक",
    electronic: "इलेक्ट्रॉनिक",
    medical: "चिकित्सा",
    
    // Quick Actions
    quickActions: "त्वरित कार्य",
    viewAllProduce: "सभी उत्पाद देखें",
    priceAnalysis: "मूल्य विश्लेषण",
    marketTrends: "बाजार रुझान",
    
    // Optimal Disposal Plan
    optimalDisposalPlan: "बिन प्रकार के अनुसार इष्टतम निपटान योजना",
    totalOptimalRevenue: "कुल इष्टतम आय",
    wasteCategory: "कचरा श्रेणी",
    items: "आइटम",
    weight: "वजन (किग्रा)",
    recommendedDisposalTo: "निपटान की सिफारिश",
    pricePerKg: "मूल्य/किग्रा",
    total: "कुल",
    changeBuyer: "रीसाइक्लर बदलें",
    action: "कार्य",
    disposeNow: "अभी निपटान करें",
    
    // Recycling Facilities Information
    recyclingFacilities: "रीसाइक्लर नेटवर्क",
    compostFacilities: "कंपोस्ट सुविधाएं",
    plasticRecyclers: "प्लास्टिक रीसाइक्लर",
    ewasteRecyclers: "ई-वेस्ट रीसाइक्लर",
    medicalWasteRecyclers: "चिकित्सा अपशिष्ट रीसाइक्लर",
    genericRecyclers: "सामान्य रीसाइक्लर",
    localRecyclers: "स्थानीय रीसाइक्लर",
    redeemCoins: "विन्यास सिक्के रिडीम करें",
    distance: "दूरी",
    capacity: "क्षमता",
    dispose: "निपटान करें",
    
    // Charts
    revenueComparison: "किस्म के अनुसार आय तुलना",
    volumeTrends: "किस्म के अनुसार मात्रा रुझान",
    today: "आज",
    seasonAvg: "सीजन औसत",
    lastYear: "पिछला साल",
    
    // Overall Summary
    overallSummary: "समग्र इष्टतम आय सारांश",
    totalItems: "कुल आइटम",
    avgRevenuePerItem: "प्रति आइटम औसत आय",
    
    // Chat
    assistant: "कचरा प्रबंधन सहायक",
    askAboutWaste: "अपने कचरे के निपटान के बारे में पूछें...",
    
    // Disposal Categories
    compost: "कंपोस्ट",
    plasticRecycling: "प्लास्टिक रीसाइक्लिंग",
    ewasteRecycling: "ई-वेस्ट रीसाइक्लिंग",
    medicalWasteRecycling: "चिकित्सा अपशिष्ट रीसाइक्लिंग",
    generalWaste: "सामान्य अपशिष्ट",
    
    // Fruits and vegetables
    "alphonso-mango": "अल्फांसो आम",
    "kesar-mango": "केसर आम", 
    "robust-mango": "रोबस्ट आम",
    "valencia-orange": "वेलेंसिया संतरा",
    "nagpur-orange": "नागपुर संतरा",
    "pomegranate": "अनार",
    "grapes": "अंगूर",
    "apple": "सेब",
    "banana": "केला",
    "onion": "प्याज",
    "potato": "आलू",
    "tomato": "टमाटर",
    
    // Quality categories data
    "Premium": "प्रीमियम",
    "Ripe": "पका हुआ", 
    "YetToRipe": "अभी पकना है",
    "Overripe": "अधिक पका हुआ",
    "Rotten": "सड़ा हुआ",
    
    // Sale categories data
    "Export": "निर्यात",
    "Local Market": "स्थानीय बाजार",
    "Distant Market": "दूर का बाजार", 
    "Processing Unit": "प्रसंस्करण इकाई",
    "Biogas": "बायोगैस",
    "Decompost": "कंपोस्ट",
    
    // Buyer names
    "JNPT Export Terminal": "जेएनपीटी एक्सपोर्ट टर्मिनल",
    "Dubai International": "दुबई इंटरनेशनल",
    "Singapore Port": "सिंगापुर पोर्ट",
    "Vashi APMC Market": "वाशी एपीएमसी बाजार",
    "Crawford Market": "क्रॉफर्ड बाजार",
    "Dadar Market": "दादर बाजार",
    "Pune APMC": "पुणे एपीएमसी",
    "Nashik Market": "नाशिक बाजार",
    "Aurangabad APMC": "औरंगाबाद एपीएमसी",
    "Reliance Fresh": "रिलायंस फ्रेश",
    "Mother Dairy": "मदर डेयरी",
    "Godrej Agrovet": "गोदरेज एग्रोवेट",
    
    // Additional buyer names
    "Dubai Fruit Market": "दुबई फल बाजार",
    "Azadpur Mandi": "आजादपुर मंडी",
    "ITC Foods Ltd": "आईटीसी फूड्स लिमिटेड",
    "Biogas Plant": "बायोगैस प्लांट",
    "Local (₹180/kg)": "स्थानीय (₹180/किग्रा)",
    "Distant (₹190/kg)": "दूर (₹190/किग्रा)",
    "Local (₹160/kg)": "स्थानीय (₹160/किग्रा)",
    "Distant (₹170/kg)": "दूर (₹170/किग्रा)",
    "Processing (₹140/kg)": "प्रसंस्करण (₹140/किग्रा)",
    "Local (₹120/kg)": "स्थानीय (₹120/किग्रा)",
    "Processing (₹110/kg)": "प्रसंस्करण (₹110/किग्रा)",
    "Britannia (₹55/kg)": "ब्रिटानिया (₹55/किग्रा)",
    "Haldiram's (₹50/kg)": "हलदीराम (₹50/किग्रा)",
    "Local Compost (₹2/kg)": "स्थानीय खाद (₹2/किग्रा)",
    "Local (₹70/kg)": "स्थानीय (₹70/किग्रा)",
    "Local (₹140/kg)": "स्थानीय (₹140/किग्रा)",
    "Distant (₹150/kg)": "दूर (₹150/किग्रा)",
    "Processing (₹120/kg)": "प्रसंस्करण (₹120/किग्रा)",
    "Local (₹100/kg)": "स्थानीय (₹100/किग्रा)",
    "Processing (₹90/kg)": "प्रसंस्करण (₹90/किग्रा)"
  },
  
  bn: {
    // Header
    title: "সর্টেড! ভোক্তা কেন্দ্রীয় অপস ড্যাশবোর্ড",
    farmName: "BKC-1 ইকোসাইক্লার",
    
    // Menu Items
    liveSorting: "লাইভ বর্জ্য সর্টিং",
    wasteAnalytics: "বর্জ্য বিশ্লেষণ",
    recyclingRecommendations: "পুনর্ব্যবহার সুপারিশ",
    disposalOptimization: "নিষ্পত্তি অপ্টিমাইজেশন",
    
    // Bin Categories
    smartBinResidential: "আবাসিক স্মার্ট বিন",
    smartBinCommercial: "বাণিজ্যিক স্মার্ট বিন",
    smartBinIndustrial: "শিল্প স্মার্ট বিন",
    smartBinOffice: "অফিস স্মার্ট বিন",
    smartBinHospital: "হাসপাতাল স্মার্ট বিন",
    
    // Summary Cards
    totalSorted: "মোট সর্ট করা",
    totalWeight: "মোট ওজন",
    avgQuality: "গড় গুণমান",
    revenue: "আয়",
    vinyasaCoins: "ভিনিয়াসা কয়েন",
    totalVinyasaCoins: "মোট ভিনিয়াসা কয়েন",
    
    // Waste Distribution
    wasteDistribution: "বিন প্রকার অনুযায়ী বর্জ্য বিতরণ",
    itemsTotal: "মোট আইটেম",
    
    // Waste Categories
    dry: "শুকনো",
    wet: "ভেজা",
    plastic: "প্লাস্টিক",
    electronic: "ইলেকট্রনিক",
    medical: "চিকিৎসা",
    
    // Quick Actions
    quickActions: "দ্রুত কর্ম",
    viewAllProduce: "সব পণ্য দেখুন",
    priceAnalysis: "মূল্য বিশ্লেষণ",
    marketTrends: "বাজার প্রবণতা",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "জাত অনুযায়ী সর্বোত্তম আয় পরিকল্পনা",
    totalOptimalRevenue: "মোট সর্বোত্তম আয়",
    qualityCategory: "গুণমান বিভাগ",
    items: "আইটেম",
    weight: "ওজন (কেজি)",
    recommendedSaleFor: "বিক্রয়ের সুপারিশ",
    recommendedSaleTo: "বিক্রয়স্থল",
    pricePerKg: "মূল্য/কেজি",
    total: "মোট",
    changeBuyer: "ক্রেতা পরিবর্তন",
    action: "কর্ম",
    sellNow: "এখনই বিক্রি করুন",
    
    // Market Information
    marketInformation: "বাজার তথ্য",
    localMarkets: "স্থানীয় বাজার",
    distantMarkets: "দূরের বাজার",
    exportMarkets: "রপ্তানি বাজার",
    processingUnits: "প্রক্রিয়াকরণ ইউনিট",
    decompostMarkets: "কম্পোস্ট বাজার",
    distance: "দূরত্ব",
    capacity: "ক্ষমতা",
    sell: "বিক্রি করুন",
    
    // Charts
    revenueComparison: "জাত অনুযায়ী আয় তুলনা",
    volumeTrends: "জাত অনুযায়ী পরিমাণ প্রবণতা",
    today: "আজ",
    seasonAvg: "মৌসুম গড়",
    lastYear: "গত বছর",
    
    // Overall Summary
    overallSummary: "সামগ্রিক সর্বোত্তম আয় সারসংক্ষেপ",
    totalItems: "মোট আইটেম",
    avgRevenuePerItem: "প্রতি আইটেম গড় আয়",
    
    // Chat
    assistant: "বর্জ্য ব্যবস্থাপনা সহায়ক",
    askAboutWaste: "আপনার বর্জ্য নিষ্পত্তি সম্পর্কে জিজ্ঞাসা করুন...",
    
    // Sale Categories
    export: "রপ্তানি",
    localMarket: "স্থানীয় বাজার",
    distantMarket: "দূরের বাজার",
    processingUnit: "প্রক্রিয়াকরণ ইউনিট",
    biogas: "বায়োগ্যাস",
    decompost: "কম্পোস্ট",
    
    // Fruits and vegetables
    "alphonso-mango": "আলফান্সো আম",
    "kesar-mango": "কেসর আম", 
    "robust-mango": "রবাস্ট আম",
    "valencia-orange": "ভ্যালেন্সিয়া কমলা",
    "nagpur-orange": "নাগপুর কমলা",
    "pomegranate": "ডালিম",
    "grapes": "আঙুর",
    "apple": "আপেল",
    "banana": "কলা",
    "onion": "পেঁয়াজ",
    "potato": "আলু",
    "tomato": "টমেটো",
    
    // Quality categories data
    "Premium": "প্রিমিয়াম",
    "Ripe": "পাকা", 
    "YetToRipe": "এখনো পাকেনি",
    "Overripe": "বেশি পাকা",
    "Rotten": "পচা",
    
    // Sale categories data
    "Export": "রপ্তানি",
    "Local Market": "স্থানীয় বাজার",
    "Distant Market": "দূরের বাজার", 
    "Processing Unit": "প্রক্রিয়াকরণ ইউনিট",
    "Biogas": "বায়োগ্যাস",
    "Decompost": "কম্পোস্ট",
    
    // Buyer names
    "JNPT Export Terminal": "JNPT এক্সপোর্ট টার্মিনাল",
    "Dubai International": "দুবাই ইন্টারন্যাশনাল",
    "Singapore Port": "সিঙ্গাপুর পোর্ট",
    "Vashi APMC Market": "ভাশি APMC বাজার",
    "Crawford Market": "ক্রফোর্ড বাজার",
    "Dadar Market": "দাদার বাজার",
    "Pune APMC": "পুনে APMC",
    "Nashik Market": "নাশিক বাজার",
    "Aurangabad APMC": "আউরঙ্গাবাদ APMC",
    "Reliance Fresh": "রিলায়েন্স ফ্রেশ",
    "Mother Dairy": "মাদার ডেয়ারি",
    "Godrej Agrovet": "গোদরেজ অ্যাগ্রোভেট",
    
    // Additional buyer names
    "Dubai Fruit Market": "দুবাই ফল বাজার",
    "Azadpur Mandi": "আজাদপুর মন্ডি",
    "ITC Foods Ltd": "আইটিসি ফুডস লিমিটেড",
    "Biogas Plant": "বায়োগ্যাস প্ল্যান্ট",
    "Local (₹180/kg)": "স্থানীয় (₹১৮০/কেজি)",
    "Distant (₹190/kg)": "দূরের (₹১৯০/কেজি)",
    "Local (₹160/kg)": "স্থানীয় (₹১৬০/কেজি)",
    "Distant (₹170/kg)": "দূরের (₹১৭০/কেজি)",
    "Processing (₹140/kg)": "প্রক্রিয়াকরণ (₹১৪০/কেজি)",
    "Local (₹120/kg)": "স্থানীয় (₹১২০/কেজি)",
    "Processing (₹110/kg)": "প্রক্রিয়াকরণ (₹১১০/কেজি)",
    "Britannia (₹55/kg)": "ব্রিটানিয়া (₹৫৫/কেজি)",
    "Haldiram's (₹50/kg)": "হলদিরাম (₹৫০/কেজি)",
    "Local Compost (₹2/kg)": "স্থানীয় সার (₹২/কেজি)",
    "Local (₹70/kg)": "স্থানীয় (₹৭০/কেজি)",
    "Local (₹140/kg)": "স্থানীয় (₹১৪০/কেজি)",
    "Distant (₹150/kg)": "দূরের (₹১৫০/কেজি)",
    "Processing (₹120/kg)": "প্রক্রিয়াকরণ (₹১২০/কেজি)",
    "Local (₹100/kg)": "স্থানীয় (₹১০০/কেজি)",
    "Processing (₹90/kg)": "প্রক্রিয়াকরণ (₹৯০/কেজি)"
  },
  
  te: {
    // Header
    title: "సార్టెడ్! వినియోగదారు కేంద్రీయ ఆప్స్ డాష్‌బోర్డ్",
    farmName: "BKC-1 ఎకోసైక్లర్",
    
    // Menu Items
    liveSorting: "లైవ్ వేస్ట్ సార్టింగ్",
    wasteAnalytics: "వ్యర్థ విశ్లేషణ",
    recyclingRecommendations: "రీసైక్లింగ్ సిఫారసులు",
    disposalOptimization: "నిర్మూలన అనుకూలీకరణ",
    
    // Bin Categories
    smartBinResidential: "నివాస స్మార్ట్ బిన్",
    smartBinCommercial: "వాణిజ్య స్మార్ట్ బిన్",
    smartBinIndustrial: "పారిశ్రామిక స్మార్ట్ బిన్",
    smartBinOffice: "కార్యాలయ స్మార్ట్ బిన్",
    smartBinHospital: "ఆసుపత్రి స్మార్ట్ బిన్",
    
    // Summary Cards
    totalSorted: "మొత్తం సార్ట్ చేయబడింది",
    totalWeight: "మొత్తం బరువు",
    avgQuality: "సగటు నాణ్యత",
    revenue: "ఆదాయం",
    vinyasaCoins: "విన్యాస కాయిన్స్",
    totalVinyasaCoins: "మొత్తం విన్యాస కాయిన్స్",
    
    // Waste Distribution
    wasteDistribution: "బిన్ రకం వారీ వ్యర్థ పంపిణీ",
    itemsTotal: "మొత్తం వస్తువులు",
    
    // Waste Categories
    dry: "పొడిగా",
    wet: "తేమగా",
    plastic: "ప్లాస్టిక్",
    electronic: "ఎలక్ట్రానిక్",
    medical: "వైద్య",
    
    // Quick Actions
    quickActions: "త్వరిత చర్యలు",
    viewAllProduce: "అన్ని ఉత్పత్తులను చూడండి",
    priceAnalysis: "ధర విశ్లేషణ",
    marketTrends: "మార్కెట్ ట్రెండ్స్",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "రకం వారీ సరైన ఆదాయ ప్రణాళిక",
    totalOptimalRevenue: "మొత్తం సరైన ఆదాయం",
    qualityCategory: "నాణ్యత వర్గం",
    items: "వస్తువులు",
    weight: "బరువు (కిలోలు)",
    recommendedSaleFor: "అమ్మకం సిఫారసు",
    recommendedSaleTo: "అమ్మకం ప్రదేశం",
    pricePerKg: "ధర/కిలో",
    total: "మొత్తం",
    changeBuyer: "కొనుగోలుదారుని మార్చండి",
    action: "చర్య",
    sellNow: "ఇప్పుడే అమ్మండి",
    
    // Market Information
    marketInformation: "మార్కెట్ సమాచారం",
    localMarkets: "స్థానిక మార్కెట్లు",
    distantMarkets: "దూర మార్కెట్లు",
    exportMarkets: "ఎగుమతి మార్కెట్లు",
    processingUnits: "ప్రాసెసింగ్ యూనిట్లు",
    decompostMarkets: "కంపోస్ట్ మార్కెట్లు",
    distance: "దూరం",
    capacity: "సామర్థ్యం",
    sell: "అమ్మండి",
    
    // Charts
    revenueComparison: "రకం వారీ ఆదాయ పోలిక",
    volumeTrends: "రకం వారీ పరిమాణ ట్రెండ్స్",
    today: "ఈరోజు",
    seasonAvg: "సీజన్ సగటు",
    lastYear: "గత సంవత్సరం",
    
    // Overall Summary
    overallSummary: "మొత్తం సరైన ఆదాయ సారాంశం",
    totalItems: "మొత్తం వస్తువులు",
    avgRevenuePerItem: "వస్తువుకు సగటు ఆదాయం",
    
    // Chat
    assistant: "వ్యర్థ నిర్వహణ సహాయకుడు",
    askAboutWaste: "మీ వ్యర్థ నిర్మూలన గురించి అడగండి...",
    
    // Sale Categories
    export: "ఎగుమతి",
    localMarket: "స్థానిక మార్కెట్",
    distantMarket: "దూర మార్కెట్",
    processingUnit: "ప్రాసెసింగ్ యూనిట్",
    biogas: "బయోగ్యాస్",
    decompost: "కంపోస్ట్",
    
    // Fruits and vegetables
    "alphonso-mango": "అల్ఫాన్సో మామిడి",
    "kesar-mango": "కేసర్ మామిడి", 
    "robust-mango": "రోబస్ట్ మామిడి",
    "valencia-orange": "వ్యాలెన్సియా నారింజ",
    "nagpur-orange": "నాగ్‌పూర్ నారింజ",
    "pomegranate": "దానిమ్మ",
    "grapes": "ద్రాక్ష",
    "apple": "యాపిల్",
    "banana": "అరటి",
    "onion": "ఉల్లిపాయ",
    "potato": "బంగాళదుంప",
    "tomato": "టమాటో",
    
    // Quality categories data
    "Premium": "ప్రీమియం",
    "Ripe": "పండిన", 
    "YetToRipe": "ఇంకా పండలేదు",
    "Overripe": "అధికంగా పండిన",
    "Rotten": "కుళ్ళిన",
    
    // Sale categories data
    "Export": "ఎగుమతి",
    "Local Market": "స్థానిక మార్కెట్",
    "Distant Market": "దూర మార్కెట్", 
    "Processing Unit": "ప్రాసెసింగ్ యూనిట్",
    "Biogas": "బయోగ్యాస్",
    "Decompost": "కంపోస్ట్",
    
    // Buyer names
    "JNPT Export Terminal": "JNPT ఎగుమతి టెర్మినల్",
    "Dubai International": "దుబాయ్ ఇంటర్నేషనల్",
    "Singapore Port": "సింగపూర్ పోర్ట్",
    "Vashi APMC Market": "వాశి APMC మార్కెట్",
    "Crawford Market": "క్రాఫర్డ్ మార్కెట్",
    "Dadar Market": "దాదర్ మార్కెట్",
    "Pune APMC": "పుణే APMC",
    "Nashik Market": "నాసిక్ మార్కెట్",
    "Aurangabad APMC": "ఔరంగాబాద్ APMC",
    "Reliance Fresh": "రిలయన్స్ ఫ్రెష్",
    "Mother Dairy": "మదర్ డైరీ",
    "Godrej Agrovet": "గొద్రేజ్ అగ్రోవేట్",
    
    // Additional buyer names
    "Dubai Fruit Market": "దుబాయ్ పండ్ల మార్కెట్",
    "Azadpur Mandi": "ఆజాద్‌పుర్ మండి",
    "ITC Foods Ltd": "ఐటీసీ ఫుడ్స్ లిమిటెడ్",
    "Biogas Plant": "బయోగ్యాస్ ప్లాంట్",
    "Local (₹180/kg)": "స్థానిక (₹180/కిలో)",
    "Distant (₹190/kg)": "దూర (₹190/కిలో)",
    "Local (₹160/kg)": "స్థానిక (₹160/కిలో)",
    "Distant (₹170/kg)": "దూర (₹170/కిలో)",
    "Processing (₹140/kg)": "ప్రాసెసింగ్ (₹140/కిలో)",
    "Local (₹120/kg)": "స్థానిక (₹120/కిలో)",
    "Processing (₹110/kg)": "ప్రాసెసింగ్ (₹110/కిలో)",
    "Britannia (₹55/kg)": "బ్రిటానియా (₹55/కిలో)",
    "Haldiram's (₹50/kg)": "హల్దిరాం (₹50/కిలో)",
    "Local Compost (₹2/kg)": "స్థానిక కంపోస్ట్ (₹2/కిలో)",
    "Local (₹70/kg)": "స్థానిక (₹70/కిలో)",
    "Local (₹140/kg)": "స్థానిక (₹140/కిలో)",
    "Distant (₹150/kg)": "దూర (₹150/కిలో)",
    "Processing (₹120/kg)": "ప్రాసెసింగ్ (₹120/కిలో)",
    "Local (₹100/kg)": "స్థానిక (₹100/కిలో)",
    "Processing (₹90/kg)": "ప్రాసెసింగ్ (₹90/కిలో)"
  },
  
  mr: {
    // Header
    title: "सॉर्टेड! उत्पादक डॅशबोर्ड",
    farmName: "स्वावलंबन फार्म्स",
    
    // Menu Items
    liveSorting: "लाइव्ह सॉर्टिंग",
    harvestInsights: "कापणी अंतर्दृष्टी",
    cropRecommendations: "पीक शिफारसी",
    yieldOptimization: "उत्पादन अनुकूलन",
    
    // Summary Cards
    totalSorted: "एकूण सॉर्ट केले",
    totalWeight: "एकूण वजन",
    avgQuality: "सरासरी गुणवत्ता",
    revenue: "महसूल",
    
    // Quality Distribution
    qualityDistribution: "जातीनुसार गुणवत्ता वितरण",
    itemsTotal: "एकूण वस्तू",
    
    // Quality Categories
    premium: "प्रीमियम",
    ripe: "पिकलेले",
    yetToRipe: "अजून पिकायचे",
    overripe: "जास्त पिकलेले",
    rotten: "कुजलेले",
    
    // Quick Actions
    quickActions: "त्वरित कृती",
    viewAllProduce: "सर्व उत्पादने पहा",
    priceAnalysis: "किंमत विश्लेषण",
    marketTrends: "बाजार ट्रेंड",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "जातीनुसार इष्टतम महसूल योजना",
    totalOptimalRevenue: "एकूण इष्टतम महसूल",
    qualityCategory: "गुणवत्ता श्रेणी",
    items: "वस्तू",
    weight: "वजन (किलो)",
    recommendedSaleFor: "विक्रीची शिफारस",
    recommendedSaleTo: "विक्री ठिकाण",
    pricePerKg: "किंमत/किलो",
    total: "एकूण",
    changeBuyer: "खरेदीदार बदला",
    action: "कृती",
    sellNow: "आत्ता विका",
    
    // Market Information
    marketInformation: "बाजार माहिती",
    localMarkets: "स्थानिक बाजार",
    distantMarkets: "दूरचे बाजार",
    exportMarkets: "निर्यात बाजार",
    processingUnits: "प्रक्रिया युनिट्स",
    decompostMarkets: "कंपोस्ट बाजार",
    distance: "अंतर",
    capacity: "क्षमता",
    sell: "विका",
    
    // Charts
    revenueComparison: "जातीनुसार महसूल तुलना",
    volumeTrends: "जातीनुसार प्रमाण ट्रेंड",
    today: "आज",
    seasonAvg: "हंगाम सरासरी",
    lastYear: "गेल्या वर्षी",
    
    // Overall Summary
    overallSummary: "एकूण इष्टतम महसूल सारांश",
    totalItems: "एकूण वस्तू",
    avgRevenuePerItem: "प्रति वस्तू सरासरी महसूल",
    
    // Chat
    assistant: "सहाय्यक",
    askAboutProduce: "तुमच्या पिकाबद्दल विचारा...",
    
    // Sale Categories
    export: "निर्यात",
    localMarket: "स्थानिक बाजार",
    distantMarket: "दूरचे बाजार",
    processingUnit: "प्रक्रिया युनिट",
    biogas: "बायोगॅस",
    decompost: "कंपोस्ट",
    
    // Fruits and vegetables
    "alphonso-mango": "अल्फान्सो आंबा",
    "kesar-mango": "केसर आंबा", 
    "robust-mango": "रोबस्ट आंबा",
    "valencia-orange": "व्हॅलेन्सिया संत्रे",
    "nagpur-orange": "नागपूर संत्रे",
    "pomegranate": "डाळिंब",
    "grapes": "द्राक्षे",
    "apple": "सफरचंद",
    "banana": "केळे",
    "onion": "कांदा",
    "potato": "बटाटा",
    "tomato": "टोमॅटो",
    
    // Quality categories data
    "Premium": "प्रीमियम",
    "Ripe": "पिकलेले", 
    "YetToRipe": "अजून पिकायचे",
    "Overripe": "जास्त पिकलेले",
    "Rotten": "कुजलेले",
    
    // Sale categories data
    "Export": "निर्यात",
    "Local Market": "स्थानिक बाजार",
    "Distant Market": "दूरचे बाजार", 
    "Processing Unit": "प्रक्रिया युनिट",
    "Biogas": "बायोगॅस",
    "Decompost": "कंपोस्ट",
    
    // Buyer names
    "JNPT Export Terminal": "JNPT निर्यात टर्मिनल",
    "Dubai International": "दुबई इंटरनॅशनल",
    "Singapore Port": "सिंगापूर पोर्ट",
    "Vashi APMC Market": "वाशी APMC मार्केट",
    "Crawford Market": "क्रॉफर्ड मार्केट",
    "Dadar Market": "दादर मार्केट",
    "Pune APMC": "पुणे APMC",
    "Nashik Market": "नाशिक मार्केट",
    "Aurangabad APMC": "औरंगाबाद APMC",
    "Reliance Fresh": "रिलायन्स फ्रेश",
    "Mother Dairy": "मदर डेअरी",
    "Godrej Agrovet": "गोदरेज अॅग्रोव्हेट",
    
    // Additional buyer names
    "Dubai Fruit Market": "दुबई फळ मार्केट",
    "Azadpur Mandi": "आजादपूर मंडी",
    "ITC Foods Ltd": "आयटीसी फूड्स लिमिटेड",
    "Biogas Plant": "बायोगॅस प्लांट",
    "Local (₹180/kg)": "स्थानिक (₹180/किलो)",
    "Distant (₹190/kg)": "दूर (₹190/किलो)",
    "Local (₹160/kg)": "स्थानिक (₹160/किलो)",
    "Distant (₹170/kg)": "दूर (₹170/किलो)",
    "Processing (₹140/kg)": "प्रक्रिया (₹140/किलो)",
    "Local (₹120/kg)": "स्थानिक (₹120/किलो)",
    "Processing (₹110/kg)": "प्रक्रिया (₹110/किलो)",
    "Britannia (₹55/kg)": "ब्रिटानिया (₹55/किलो)",
    "Haldiram's (₹50/kg)": "हलदीराम (₹50/किलो)",
    "Local Compost (₹2/kg)": "स्थानिक कंपोस्ट (₹2/किलो)",
    "Local (₹70/kg)": "स्थानिक (₹70/किलो)",
    "Local (₹140/kg)": "स्थानिक (₹140/किलो)",
    "Distant (₹150/kg)": "दूर (₹150/किलो)",
    "Processing (₹120/kg)": "प्रक्रिया (₹120/किलो)",
    "Local (₹100/kg)": "स्थानिक (₹100/किलो)",
    "Processing (₹90/kg)": "प्रक्रिया (₹90/किलो)"
  }
};

// Number formatting for different languages
const formatNumber = (num: number, language: Language): string => {
  switch (language) {
    case 'hi':
      // Hindi numbers (Devanagari numerals)
      return num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[parseInt(d)]);
    case 'bn':
      // Bengali numbers
      return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
    case 'te':
      // Telugu numbers
      return num.toString().replace(/\d/g, (d) => "౦౧౨౩౪౫౬౭౮౯"[parseInt(d)]);
    case 'mr':
      // Marathi numbers (Devanagari numerals)
      return num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[parseInt(d)]);
    default:
      // English/Arabic numerals
      return num.toLocaleString();
  }
};

export const useTranslation = (language: Language) => {
  return {
    t: (key: keyof typeof translations.en): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    formatNumber: (num: number) => formatNumber(num, language)
  };
};