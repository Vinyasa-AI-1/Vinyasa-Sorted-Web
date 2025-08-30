import type { Language } from '@/hooks/use-language';

export const translations = {
  en: {
    // Header
    title: "Sorted! Producer Dashboard",
    consumerTitle: "Sorted! Consumer Central Ops Dashboard",
    farmName: "Svavlamban Farms",
    consumerUserName: "BKC-1 EcoCycler",
    
    // Menu Items
    liveSorting: "Live Produce Sorting",
    liveWasteSorting: "Live Waste Sorting",
    harvestInsights: "Harvest Insights",
    binInsights: "Bin Insights",
    cropRecommendations: "Crop Recommendations",
    recyclingTips: "Recycling Tips",
    yieldOptimization: "Yield Optimization",
    ecoRewards: "Eco Rewards",
    
    // Summary Cards
    totalSorted: "Total Sorted",
    totalWeight: "Total Weight", 
    avgQuality: "Avg Quality",
    revenue: "Value Unlocked",
    
    // Quality Distribution
    qualityDistribution: "Quality Distribution by Variety",
    itemsTotal: "items total",
    
    // Quality Categories
    premium: "Premium",
    ripe: "Ripe",
    yetToRipe: "Yet To Ripe",
    overripe: "Overripe", 
    rotten: "Rotten",
    
    // Quick Actions
    quickActions: "Quick Actions",
    viewAllProduce: "View All Produce",
    viewAllBins: "View All Bins",
    priceAnalysis: "Price Analysis",
    recyclerPrices: "Recycler Prices",
    marketTrends: "Market Trends",
    redeemVinyasaCoins: "Redeem Vinyasa Coins",
    valueUnlocked: "Value Unlocked",
    rewardsEarned: "Rewards Earned",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "Optimal Recycling Plan by Bin Type",
    optimalRecyclingPlan: "Optimal Recycling Plan by Bin Type",
    recyclersMarketplace: "Recyclers Marketplace",
    totalOptimalRevenue: "Total Value Unlocked",
    qualityCategory: "Quality Category",
    items: "Items",
    weight: "Weight (kg)",
    recommendedSaleFor: "Recommended Recycling Method",
    recommendedSaleTo: "Recommended Recycler",
    pricePerKg: "Price/kg",
    total: "Total",
    changeBuyer: "Change Buyer",
    action: "Action",
    sellNow: "Sell Now",
    
    // Market Information
    marketInformation: "Market Information",
    localMarkets: "Local Markets",
    distantMarkets: "Distant Markets", 
    exportMarkets: "Export Markets",
    processingUnits: "Processing Units",
    decompostMarkets: "Decompost Markets",
    distance: "Distance",
    capacity: "Capacity",
    sell: "Sell",
    
    // Charts
    revenueComparison: "Value Comparison by Bin Type",
    volumeTrends: "Volume Trends by Variety",
    today: "Today",
    seasonAvg: "Season Avg",
    lastYear: "Last Year",
    
    // Overall Summary
    overallSummary: "Overall Value Unlocked Summary",
    totalItems: "Total Items",
    avgRevenuePerItem: "Avg Value per Item",
    vinyasaCoins: "Vinyasa Coins",
    totalVinyasaCoins: "Total Vinyasa Coins",
    coins: "Coins",
    
    // Chat
    assistant: "Assistant",
    askAboutProduce: "Ask about your produce...",
    
    // Sale Categories
    export: "Export",
    localMarket: "Local Market", 
    distantMarket: "Distant Market",
    processingUnit: "Processing Unit",
    biogas: "Biogas",
    decompost: "Decompost",
    
    // Fruits and vegetables
    "alphonso-mango": "Alphonso Mango",
    "kesar-mango": "Kesar Mango", 
    "robust-mango": "Robust Mango",
    "robusta-banana": "Robusta Banana",
    "bhindi-okra": "Bhindi (Okra)",
    "valencia-orange": "Valencia Orange",
    "nagpur-orange": "Nagpur Orange",
    "pomegranate": "Pomegranate",
    "grapes": "Grapes",
    "apple": "Apple",
    "banana": "Banana",
    "onion": "Onion",
    "potato": "Potato",
    "tomato": "Tomato",
    "okra": "Okra",
    "bhindi": "Bhindi",
    
    // Variety names
    "Svavlamban Hapus": "Svavlamban Hapus",
    "Junagadh Kesar": "Junagadh Kesar",
    "Robusta": "Robusta",
    "Pusa A-4": "Pusa A-4",
    "Pusa Ruby": "Pusa Ruby",
    "robust-tomato": "Robust Tomato",
    "cherry-tomato": "Cherry Tomato",
    "bell-pepper": "Bell Pepper",
    
    // Quality categories data
    "Premium": "Premium",
    "Ripe": "Ripe", 
    "YetToRipe": "Yet To Ripe",
    "Overripe": "Overripe",
    "Rotten": "Rotten",
    
    // Sale categories data
    "Export": "Export",
    "Local Market": "Local Market",
    "Distant Market": "Distant Market", 
    "Processing Unit": "Processing Unit",
    "Biogas": "Biogas",
    "Decompost": "Decompost",
    
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
    "Processing (₹90/kg)": "Processing (₹90/kg)",

    // Consumer Waste Categories
    "dry": "Dry",
    "wet": "Wet", 
    "plastic": "Plastic",
    "electronic": "Electronic",
    "medical": "Medical",

    // Bin Types
    "residential-bin": "Residential Smart Bin",
    "office-bin": "Office Smart Bin",
    "public-bin": "Public Smart Bin",
    "industrial-bin": "Industrial Smart Bin",
    "hospital-bin": "Hospital Smart Bin",

    // Recycler Names
    "Green Earth Compost": "Green Earth Compost",
    "Plastic Recyclers Ltd": "Plastic Recyclers Ltd",
    "TechCycle Solutions": "TechCycle Solutions",
    "BioMedical Waste Solutions": "BioMedical Waste Solutions",
    "EcoWaste Management": "EcoWaste Management",
    "Mumbai Recycling Hub": "Mumbai Recycling Hub",
    "Clean City Initiative": "Clean City Initiative",
    "Waste Warriors": "Waste Warriors",

    // Recycler Types
    "Compost": "Compost",
    "Plastic Processing": "Plastic Processing",
    "E-Waste": "E-Waste",
    "Medical Waste": "Medical Waste",
    "Mixed Waste": "Mixed Waste",
    "Organic Waste": "Organic Waste",

    // Locations
    "Andheri West": "Andheri West",
    "Malad": "Malad",
    "BKC": "BKC",
    "Turbhe": "Turbhe",
    "Bandra": "Bandra",
    "Powai": "Powai",
    "Ghatkopar": "Ghatkopar",
    "Thane": "Thane",

    // Units and Measurements
    "kg/day": "kg/day",
    "units/day": "units/day",
    "km": "km",
    "kg": "kg",

    // Chart labels  
    "Week 1": "Week 1",
    "Week 2": "Week 2",
    "Week 3": "Week 3",
    "Week 4": "Week 4",
    "Revenue": "Revenue",
    "Target": "Target",
    "Volume": "Volume",
    "Waste": "Waste",
    "Plastic": "Plastic",
    "Electronic": "Electronic",

    // Market categories
    "Local": "Local",
    "Distant": "Distant",
    "Processing": "Processing",

    // Rating
    "rating": "Rating",

    // Additional terms
    "priceRange": "Price Range",

    // Home Page
    "heroTitle": "Increase Value, Reduce Waste",
    "heroSubtitle": "Sorting Harvests and Habits for a greener future",
    "getStartedProducer": "Start Producer Dashboard",
    "getStartedConsumer": "Start Consumer Dashboard",
    "producerFeatures": "Producer Features",
    "producerFeaturesDesc": "AI-powered produce sorting and quality assessment",
    "consumerFeatures": "Consumer Features", 
    "consumerFeaturesDesc": "Smart waste management and recycling optimization",
    "featuresTitle": "Powerful Features",
    "featuresSubtitle": "Everything you need to optimize your sorting and maximize value",
    "smartSorting": "Smart Sorting",
    "smartSortingDesc": "AI-powered sorting for optimal quality and value",
    "wasteOptimization": "Waste Optimization",
    "wasteOptimizationDesc": "Reduce waste and maximize recycling potential",
    "valueMaximization": "Value Maximization",
    "valueMaximizationDesc": "Get the best prices for your produce and waste",
    "vinyasaRewards": "Vinyasa Rewards",
    "vinyasaRewardsDesc": "Earn and redeem Vinyasa Coins for eco-friendly actions",
    "howItWorks": "How It Works",
    "howItWorksDesc": "Watch our explainer videos to see Vinyasa-AI in action",
    "producerVideoTitle": "Producer Solution",
    "producerVideoDesc": "Learn how farmers maximize their harvest value",
    "consumerVideoTitle": "Consumer Solution",
    "consumerVideoDesc": "Discover smart waste management and recycling",
    "ctaTitle": "Ready to Get Started?",
    "ctaDescription": "Join thousands of users already maximizing their value with Vinyasa-AI",
    "startSortingProduce": "Start Sorting Produce",
    "startSortingWaste": "Start Sorting Waste",

    // Navigation & Footer
    "producerDashboard": "Producer Dashboard",
    "consumerDashboard": "Consumer Dashboard",
    "liveProduceSorting": "Live Produce Sorting",
    "aboutUs": "About Us",
    "contactUs": "Contact Us",
    "privacy": "Privacy Policy",
    "buyProducts": "Buy Products",
    "products": "Products",
    "company": "Company",
    "newsletter": "Newsletter",
    "newsletterDescription": "Get the latest updates on Vinyasa-AI features and sustainability tips",
    "emailPlaceholder": "Enter your email",
    "subscribe": "Subscribe",
    "footerDescription": "Revolutionary AI-powered sorting technology for a sustainable future",
    "allRightsReserved": "All rights reserved",

    // General Navigation
    "home": "Home",

    // About Us Page
    "aboutUsTitle": "About Vinyasa-AI",
    "aboutUsSubtitle": "Pioneering the future of sustainable agriculture and waste management through AI-powered sorting technology",
    "ourMission": "Our Mission",
    "missionDescription": "We are dedicated to revolutionizing agricultural produce sorting and waste management through cutting-edge AI technology. Our mission is to maximize value, minimize waste, and create a more sustainable future for farmers and consumers alike.",
    "missionDetails": "By combining artificial intelligence with deep agricultural expertise, we help farmers optimize their harvest quality and enable consumers to make environmentally conscious waste management decisions.",
    "ourVision": "Our Vision",
    "visionDescription": "A world where every piece of produce reaches its optimal destination and every piece of waste finds its most valuable use through intelligent sorting.",
    "ourValues": "Our Core Values",
    "valuesSubtitle": "The principles that guide everything we do",
    "sustainability": "Sustainability",
    "sustainabilityDesc": "Environmental responsibility drives every innovation and decision we make",
    "community": "Community",
    "communityDesc": "Empowering farmers and consumers to build a more sustainable world together",
    "innovation": "Innovation",
    "innovationDesc": "Pushing the boundaries of AI technology to solve real-world agricultural challenges",
    "excellence": "Excellence",
    "excellenceDesc": "Delivering exceptional quality in every product and service we provide",
    "ourTeam": "Our Team",
    "teamDescription": "Passionate experts working together to transform agriculture and waste management",
    "aiTeam": "AI Engineers",
    "aiTeamDesc": "Machine learning experts developing cutting-edge sorting algorithms",
    "agricultureTeam": "Agriculture Experts",
    "agricultureTeamDesc": "Field specialists bringing deep knowledge of produce quality and farming",
    "sustainabilityTeam": "Sustainability Advocates",
    "sustainabilityTeamDesc": "Environmental scientists ensuring our solutions benefit the planet",
    "joinUsTitle": "Join Our Mission",
    "joinUsDescription": "Ready to be part of the agricultural revolution? Let's build a sustainable future together.",
    "getInTouch": "Get in Touch",
    "exploreProducts": "Explore Products",

    // Contact Us Page
    "contactUsTitle": "Contact Us",
    "contactUsSubtitle": "Get in touch with our team to learn more about Vinyasa-AI solutions",
    "sendMessage": "Send Message",
    "fullName": "Full Name",
    "enterName": "Enter your full name",
    "enterEmail": "Enter your email address",
    "subject": "Subject",
    "enterSubject": "Enter message subject",
    "message": "Message",
    "enterMessage": "Enter your message",
    "address": "Address",
    "companyAddress": "123 Innovation Drive, Tech Park, Mumbai, Maharashtra 400001, India",
    "phoneNumber": "Phone Number",
    "supportPhone": "+91 22 1234 5678",
    "salesPhone": "+91 22 8765 4321",
    "supportEmail": "support@vinyasa-ai.com",
    "salesEmail": "sales@vinyasa-ai.com",
    "businessHours": "Business Hours",
    "weekdayHours": "Monday - Friday: 9:00 AM - 6:00 PM IST",
    "weekendHours": "Saturday: 10:00 AM - 4:00 PM IST",
    "faqTitle": "Frequently Asked Questions",
    "faqSubtitle": "Find answers to common questions about our products and services",
    "faq1Question": "How does AI produce sorting work?",
    "faq1Answer": "Our AI system uses computer vision and machine learning to analyze produce quality, size, and ripeness in real-time, automatically sorting items into optimal categories for maximum value.",
    "faq2Question": "What types of waste can be sorted?",
    "faq2Answer": "Our smart bins can sort dry waste, wet waste, plastic, electronic waste, and medical waste with high accuracy using AI-powered recognition technology.",
    "faq3Question": "How do Vinyasa Coins work?",
    "faq3Answer": "Earn Vinyasa Coins for proper waste sorting and eco-friendly actions. Redeem coins for discounts, products, or donate to environmental causes.",
    "faq4Question": "What support do you provide?",
    "faq4Answer": "We offer 24/7 technical support, regular software updates, maintenance services, and comprehensive training for all our products.",

    // Privacy Policy Page
    "privacyPolicyTitle": "Privacy Policy",
    "privacyPolicySubtitle": "Your privacy is important to us. Learn how we collect, use, and protect your information.",
    "lastUpdated": "Last Updated",
    "informationWeCollect": "Information We Collect",
    "informationWeCollectDesc": "We collect information that you provide directly to us and information about your use of our services:",
    "personalInfo": "Personal information such as name, email, and contact details",
    "deviceInfo": "Device information including IP address, browser type, and device identifiers",
    "usageInfo": "Usage data about how you interact with our sorting systems",
    "sensorData": "Sensor data from our AI sorting equipment for optimization purposes",
    "howWeUseInfo": "How We Use Your Information",
    "howWeUseInfoDesc": "We use the information we collect for the following purposes:",
    "serviceProvision": "Provide and maintain our sorting services and customer support",
    "aiOptimization": "Improve and optimize our AI sorting algorithms and accuracy",
    "customerSupport": "Respond to your inquiries and provide technical assistance",
    "productImprovement": "Develop new features and improve our existing products",
    "dataSecurity": "Data Security",
    "dataSecurityDesc": "We implement robust security measures to protect your information:",
    "encryption": "End-to-end encryption for data transmission and storage",
    "accessControls": "Strict access controls and authentication requirements",
    "regularAudits": "Regular security audits and vulnerability assessments",
    "secureStorage": "Secure cloud storage with backup and disaster recovery",
    "dataSharing": "Data Sharing",
    "dataSharingDesc": "We do not sell, trade, or rent your personal information to third parties.",
    "dataSharingDetails": "We may share aggregated, non-personal information for research and improvement purposes only.",
    "yourRights": "Your Rights",
    "yourRightsDesc": "You have the following rights regarding your personal information:",
    "accessRight": "Access and review your personal information",
    "correctionRight": "Request correction of inaccurate information",
    "deletionRight": "Request deletion of your personal information",
    "portabilityRight": "Request transfer of your information to another service",
    "cookiePolicy": "Cookie Policy",
    "cookiePolicyDesc": "We use cookies to improve your experience and analyze usage patterns.",
    "cookieTypes": "Cookies help us remember preferences, analyze traffic, and personalize content.",
    "privacyContact": "Contact Us About Privacy",
    "privacyContactDesc": "If you have questions about this privacy policy, please contact us:",

    // Products Page
    "buyProductsTitle": "Vinyasa-AI Products",
    "buyProductsSubtitle": "Transform your agricultural operations and waste management with our AI-powered solutions",
    "bestseller": "Bestseller",
    "popular": "Popular",
    "new": "New",
    "produceSystemName": "Smart Produce Sorter Pro",
    "produceSystemDesc": "Complete AI-powered sorting system for agricultural produce with quality assessment and market optimization",
    "feature1": "AI-powered quality detection with 99% accuracy",
    "feature2": "Real-time market price optimization",
    "feature3": "Advanced ripeness and freshness analysis",
    "addToCart": "Add to Cart",
    "wasteSystemName": "Smart Waste Management Hub",
    "wasteSystemDesc": "Intelligent waste sorting system with multi-category bins and recycling optimization",
    "wasteFeature1": "5-category automatic waste sorting",
    "wasteFeature2": "Vinyasa Coins reward system integration",
    "wasteFeature3": "Real-time recycling market connections",
    "analyticsSystemName": "AI Analytics Dashboard",
    "analyticsSystemDesc": "Comprehensive analytics and insights platform for sorting operations and value optimization",
    "analyticsFeature1": "Advanced data analytics and reporting",
    "analyticsFeature2": "Predictive market trend analysis",
    "analyticsFeature3": "Custom dashboard and alerts",
    "whyChooseUs": "Why Choose Vinyasa-AI?",
    "whyChooseUsDesc": "Industry-leading technology with comprehensive support and proven results",
    "fastShipping": "Fast Shipping",
    "fastShippingDesc": "Free installation and setup within 3-5 business days",
    "warranty": "2-Year Warranty",
    "warrantyDesc": "Comprehensive warranty with free maintenance and software updates",
    "support": "24/7 Support",
    "supportDesc": "Round-the-clock technical support and customer assistance",
    "readyToOrder": "Ready to Transform Your Operations?",
    "readyToOrderDesc": "Contact us today for a custom quote and demonstration of our AI sorting solutions",
    "getQuote": "Get Custom Quote",
    "scheduleDemo": "Schedule Demo",

    // Live Produce Sorting Page
    "liveProduceSortingDesc": "Watch our AI system sort agricultural produce in real-time with quality assessment and market recommendations",
    "sortingControls": "Sorting Controls",
    "running": "Running",
    "stopped": "Stopped",
    "startSorting": "Start Sorting",
    "pauseSorting": "Pause Sorting",
    "resetSorting": "Reset System",
    "totalSortedLive": "Total Sorted",
    "cameraFeed": "Camera Feed",
    "analyzing": "Analyzing",
    "cameraIdle": "Camera feed is idle. Start sorting to begin analysis.",
    "currentAnalysis": "Current Analysis",
    "quality": "Quality",
    "confidence": "Confidence",
    "recommendedAction": "Recommended Action",
    "sortingComplete": "Sorting Complete",
    "waitingForProduce": "Waiting for produce items to analyze...",
    "recentActivity": "Recent Sorting Activity",
    "noActivityYet": "No sorting activity yet. Start the system to begin."
  },
  
  hi: {
    // Header
    title: "सॉर्टेड! उत्पादक डैशबोर्ड",
    consumerTitle: "सॉर्टेड! उपभोक्ता केंद्रीय संचालन डैशबोर्ड",
    farmName: "स्वावलंबन फार्म्स",
    consumerUserName: "बीकेसी-1 इकोसाइक्लर",
    
    // Menu Items
    liveSorting: "लाइव उत्पाद सॉर्टिंग",
    liveWasteSorting: "लाइव वेस्ट सॉर्टिंग",
    harvestInsights: "फसल अंतर्दृष्टि",
    binInsights: "बिन अंतर्दृष्टि",
    cropRecommendations: "फसल सुझाव",
    recyclingTips: "रीसाइक्लिंग टिप्स",
    yieldOptimization: "उत्पादन अनुकूलन",
    ecoRewards: "इको रिवार्ड्स",
    
    // Summary Cards
    totalSorted: "कुल सॉर्ट किया गया",
    totalWeight: "कुल वजन",
    avgQuality: "औसत गुणवत्ता", 
    revenue: "आय",
    
    // Quality Distribution
    qualityDistribution: "किस्म के अनुसार गुणवत्ता वितरण",
    itemsTotal: "कुल आइटम",
    
    // Quality Categories
    premium: "प्रीमियम",
    ripe: "पका हुआ",
    yetToRipe: "अभी पकना है",
    overripe: "अधिक पका हुआ",
    rotten: "सड़ा हुआ",
    
    // Quick Actions
    quickActions: "त्वरित कार्य",
    viewAllProduce: "सभी उत्पाद देखें",
    viewAllBins: "सभी बिन देखें",
    priceAnalysis: "मूल्य विश्लेषण",
    recyclerPrices: "रीसाइक्लर कीमतें",
    marketTrends: "बाजार रुझान",
    redeemVinyasaCoins: "विन्यास कॉइन्स रिडीम करें",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "किस्म के अनुसार इष्टतम आय योजना",
    optimalRecyclingPlan: "बिन प्रकार के अनुसार इष्टतम रीसाइक्लिंग योजना",
    recyclersMarketplace: "रीसाइक्लर्स मार्केटप्लेस",
    totalOptimalRevenue: "कुल इष्टतम आय",
    qualityCategory: "गुणवत्ता श्रेणी",
    items: "आइटम",
    weight: "वजन (किग्रा)",
    recommendedSaleFor: "बिक्री की सिफारिश",
    recommendedSaleTo: "बिक्री स्थान",
    pricePerKg: "मूल्य/किग्रा",
    total: "कुल",
    changeBuyer: "खरीदार बदलें",
    action: "कार्य",
    sellNow: "अभी बेचें",
    
    // Market Information
    marketInformation: "बाजार जानकारी",
    localMarkets: "स्थानीय बाजार",
    distantMarkets: "दूर के बाजार",
    exportMarkets: "निर्यात बाजार",
    processingUnits: "प्रसंस्करण इकाइयां",
    decompostMarkets: "कंपोस्ट बाजार",
    distance: "दूरी",
    capacity: "क्षमता",
    sell: "बेचें",
    
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
    vinyasaCoins: "विन्यास कॉइन्स",
    totalVinyasaCoins: "कुल विन्यास कॉइन्स",
    coins: "कॉइन्स",

    // Waste Categories
    dry: "सूखा कचरा",
    wet: "गीला कचरा", 
    plastic: "प्लास्टिक",
    electronic: "इलेक्ट्रॉनिक",
    medical: "मेडिकल",

    // Bin Types
    "Residential": "आवासीय",
    "Office": "कार्यालय",
    "Industrial": "औद्योगिक", 
    "Medical": "चिकित्सा",

    // New consumer terms
    "valueUnlocked": "मूल्य अनलॉक",
    "rewardsEarned": "पुरस्कार अर्जित",
    
    // Chat
    "assistant": "सहायक",
    "askAboutProduce": "अपनी फसल के बारे में पूछें...",
    
    // Sale Categories
    export: "निर्यात",
    localMarket: "स्थानीय बाजार",
    distantMarket: "दूर का बाजार", 
    processingUnit: "प्रसंस्करण इकाई",
    biogas: "बायोगैस",
    decompost: "कंपोस्ट",
    
    // Fruits and vegetables
    "alphonso-mango": "अल्फांसो आम",
    "kesar-mango": "केसर आम", 
    "robust-mango": "रोबस्ट आम",
    "robusta-banana": "रोबस्टा केला",
    "bhindi-okra": "भिंडी (ओकरा)",
    "valencia-orange": "वेलेंसिया संतरा",
    "nagpur-orange": "नागपुर संतरा",
    "pomegranate": "अनार",
    "grapes": "अंगूर",
    "apple": "सेब",
    "banana": "केला",
    "onion": "प्याज",
    "potato": "आलू",
    "tomato": "टमाटर",
    "okra": "ओकरा",
    "bhindi": "भिंडी",
    
    // Variety names
    "Svavlamban Hapus": "स्वावलंबन हापुस",
    "Junagadh Kesar": "जूनागढ़ केसर",
    "Robusta": "रोबस्टा",
    "Pusa A-4": "पूसा ए-4",
    "Pusa Ruby": "पूसा रूबी",
    "robust-tomato": "रोबस्ट टमाटर",
    "cherry-tomato": "चेरी टमाटर",
    "bell-pepper": "शिमला मिर्च",
    
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
    "Processing (₹90/kg)": "प्रसंस्करण (₹90/किग्रा)",

    // Bin Types
    "residential-bin": "आवासीय स्मार्ट बिन",
    "office-bin": "कार्यालय स्मार्ट बिन",
    "public-bin": "सार्वजनिक स्मार्ट बिन",
    "industrial-bin": "औद्योगिक स्मार्ट बिन",
    "hospital-bin": "अस्पताल स्मार्ट बिन",

    // Recycler Names
    "Green Earth Compost": "ग्रीन अर्थ कंपोस्ट",
    "Plastic Recyclers Ltd": "प्लास्टिक रीसाइक्लर्स लिमिटेड",
    "TechCycle Solutions": "टेकसाइकल सॉल्यूशंस",
    "BioMedical Waste Solutions": "बायोमेडिकल वेस्ट सॉल्यूशंस",
    "EcoWaste Management": "इकोवेस्ट मैनेजमेंट",
    "Mumbai Recycling Hub": "मुंबई रीसाइक्लिंग हब",
    "Clean City Initiative": "क्लीन सिटी इनिशिएटिव",
    "Waste Warriors": "वेस्ट वारियर्स",

    // Recycler Types
    "Compost": "कंपोस्ट",
    "Plastic Processing": "प्लास्टिक प्रोसेसिंग",
    "E-Waste": "ई-वेस्ट",
    "Medical Waste": "चिकित्सा अपशिष्ट",
    "Mixed Waste": "मिश्रित अपशिष्ट",
    "Organic Waste": "जैविक अपशिष्ट",

    // Locations
    "Andheri West": "अंधेरी वेस्ट",
    "Malad": "मलाड",
    "BKC": "बीकेसी",
    "Turbhe": "तुर्भे",
    "Bandra": "बांद्रा",
    "Powai": "पवई",
    "Ghatkopar": "घाटकोपर",
    "Thane": "ठाणे",

    // Units and Measurements
    "kg/day": "किग्रा/दिन",
    "units/day": "यूनिट्स/दिन",
    "km": "किमी",
    "kg": "किग्रा",

    // Chart labels
    "Week 1": "सप्ताह 1",
    "Week 2": "सप्ताह 2", 
    "Week 3": "सप्ताह 3",
    "Week 4": "सप्ताह 4",
    "Revenue": "आय",
    "Target": "लक्ष्य",
    "Volume": "मात्रा",
    "Waste": "अपशिष्ट",
    "Plastic": "प्लास्टिक",
    "Electronic": "इलेक्ट्रॉनिक",

    // Market categories
    "Local": "स्थानीय",
    "Distant": "दूर",
    "Processing": "प्रसंस्करण",

    // Rating
    "rating": "रेटिंग",

    // Additional terms  
    "priceRange": "मूल्य सीमा",

    // Home Page
    "heroTitle": "मूल्य बढ़ाएं, कचरा कम करें",
    "heroSubtitle": "एक हरित भविष्य के लिए फसल और आदतों को सॉर्ट करना",
    "getStartedProducer": "प्रोड्यूसर डैशबोर्ड शुरू करें",
    "getStartedConsumer": "कंज्यूमर डैशबोर्ड शुरू करें",
    "producerFeatures": "प्रोड्यूसर सुविधाएं",
    "producerFeaturesDesc": "एआई-संचालित उत्पाद सॉर्टिंग और गुणवत्ता मूल्यांकन",
    "consumerFeatures": "कंज्यूमर सुविधाएं", 
    "consumerFeaturesDesc": "स्मार्ट कचरा प्रबंधन और रीसाइक्लिंग अनुकूलन",
    "featuresTitle": "शक्तिशाली सुविधाएं",
    "featuresSubtitle": "अपनी सॉर्टिंग को अनुकूलित करने और मूल्य अधिकतम करने के लिए आवश्यक सब कुछ",
    "smartSorting": "स्मार्ट सॉर्टिंग",
    "smartSortingDesc": "इष्टतम गुणवत्ता और मूल्य के लिए एआई-संचालित सॉर्टिंग",
    "wasteOptimization": "कचरा अनुकूलन",
    "wasteOptimizationDesc": "कचरा कम करें और रीसाइक्लिंग क्षमता अधिकतम करें",
    "valueMaximization": "मूल्य अधिकतमीकरण",
    "valueMaximizationDesc": "अपने उत्पाद और कचरे के लिए सर्वोत्तम मूल्य प्राप्त करें",
    "vinyasaRewards": "विन्यास पुरस्कार",
    "vinyasaRewardsDesc": "पर्यावरण-अनुकूल कार्यों के लिए विन्यास कॉइन्स अर्जित करें और रिडीम करें",
    "howItWorks": "यह कैसे काम करता है",
    "howItWorksDesc": "विन्यास-एआई को कार्य में देखने के लिए हमारे व्याख्याकारी वीडियो देखें",
    "producerVideoTitle": "प्रोड्यूसर समाधान",
    "producerVideoDesc": "जानें कि किसान अपनी फसल का मूल्य कैसे अधिकतम करते हैं",
    "consumerVideoTitle": "कंज्यूमर समाधान",
    "consumerVideoDesc": "स्मार्ट कचरा प्रबंधन और रीसाइक्लिंग की खोज करें",
    "ctaTitle": "शुरू करने के लिए तैयार हैं?",
    "ctaDescription": "हजारों उपयोगकर्ताओं से जुड़ें जो पहले से ही विन्यास-एआई के साथ अपना मूल्य अधिकतम कर रहे हैं",
    "startSortingProduce": "उत्पाद सॉर्टिंग शुरू करें",
    "startSortingWaste": "कचरा सॉर्टिंग शुरू करें",

    // Navigation & Footer
    "producerDashboard": "प्रोड्यूसर डैशबोर्ड",
    "consumerDashboard": "कंज्यूमर डैशबोर्ड",
    "liveProduceSorting": "लाइव प्रोड्यूस सॉर्टिंग",
    "aboutUs": "हमारे बारे में",
    "contactUs": "संपर्क करें",
    "privacy": "गोपनीयता नीति",
    "buyProducts": "उत्पाद खरीदें",
    "products": "उत्पाद",
    "company": "कंपनी",
    "newsletter": "न्यूजलेटर",
    "newsletterDescription": "विन्यास-एआई सुविधाओं और स्थिरता युक्तियों पर नवीनतम अपडेट प्राप्त करें",
    "emailPlaceholder": "अपना ईमेल दर्ज करें",
    "subscribe": "सदस्यता लें",
    "footerDescription": "एक स्थायी भविष्य के लिए क्रांतिकारी एआई-संचालित सॉर्टिंग तकनीक",
    "allRightsReserved": "सभी अधिकार सुरक्षित",

    // General Navigation
    "home": "होम",

    // About Us Page
    "aboutUsTitle": "विन्यास-एआई के बारे में",
    "aboutUsSubtitle": "एआई-संचालित सॉर्टिंग तकनीक के माध्यम से स्थायी कृषि और कचरा प्रबंधन के भविष्य का नेतृत्व करना",
    "ourMission": "हमारा मिशन",
    "missionDescription": "हम अत्याधुनिक एआई तकनीक के माध्यम से कृषि उत्पाद सॉर्टिंग और कचरा प्रबंधन में क्रांति लाने के लिए समर्पित हैं। हमारा मिशन मूल्य को अधिकतम करना, कचरे को कम करना, और किसानों और उपभोक्ताओं के लिए एक अधिक स्थायी भविष्य बनाना है।",
    "missionDetails": "कृत्रिम बुद्धिमत्ता को गहरी कृषि विशेषज्ञता के साथ जोड़कर, हम किसानों को अपनी फसल की गुणवत्ता अनुकूलित करने में मदद करते हैं और उपभोक्ताओं को पर्यावरण-सचेत कचरा प्रबंधन निर्णय लेने में सक्षम बनाते हैं।",
    "ourVision": "हमारी दृष्टि",
    "visionDescription": "एक ऐसी दुनिया जहां हर उत्पाद अपने इष्टतम गंतव्य तक पहुंचे और हर कचरा बुद्धिमान सॉर्टिंग के माध्यम से अपना सबसे मूल्यवान उपयोग पाए।",
    "ourValues": "हमारे मूल मूल्य",
    "valuesSubtitle": "सिद्धांत जो हमारे सभी कार्यों का मार्गदर्शन करते हैं",
    "sustainability": "स्थिरता",
    "sustainabilityDesc": "पर्यावरणीय जिम्मेदारी हमारे हर नवाचार और निर्णय को प्रेरित करती है",
    "community": "समुदाय",
    "communityDesc": "किसानों और उपभोक्ताओं को मिलकर एक अधिक स्थायी दुनिया बनाने के लिए सशक्त बनाना",
    "innovation": "नवाचार",
    "innovationDesc": "वास्तविक दुनिया की कृषि चुनौतियों को हल करने के लिए एआई तकनीक की सीमाओं को आगे बढ़ाना",
    "excellence": "उत्कृष्टता",
    "excellenceDesc": "हमारे द्वारा प्रदान किए जाने वाले हर उत्पाद और सेवा में असाधारण गुणवत्ता प्रदान करना",
    "ourTeam": "हमारी टीम",
    "teamDescription": "कृषि और कचरा प्रबंधन को बदलने के लिए मिलकर काम कर रहे भावुक विशेषज्ञ",
    "aiTeam": "एआई इंजीनियर्स",
    "aiTeamDesc": "अत्याधुनिक सॉर्टिंग एल्गोरिदम विकसित करने वाले मशीन लर्निंग विशेषज्ञ",
    "agricultureTeam": "कृषि विशेषज्ञ",
    "agricultureTeamDesc": "उत्पाद गुणवत्ता और खेती का गहरा ज्ञान लाने वाले क्षेत्र विशेषज्ञ",
    "sustainabilityTeam": "स्थिरता अधिवक्ता",
    "sustainabilityTeamDesc": "पर्यावरण वैज्ञानिक यह सुनिश्चित करते हुए कि हमारे समाधान ग्रह को लाभ पहुंचाएं",
    "joinUsTitle": "हमारे मिशन में शामिल हों",
    "joinUsDescription": "कृषि क्रांति का हिस्सा बनने के लिए तैयार हैं? आइए मिलकर एक स्थायी भविष्य बनाते हैं।",
    "getInTouch": "संपर्क करें",
    "exploreProducts": "उत्पाद देखें",

    // Contact Us Page (Adding key translations)
    "contactUsTitle": "हमसे संपर्क करें",
    "contactUsSubtitle": "विन्यास-एआई समाधानों के बारे में अधिक जानने के लिए हमारी टीम से संपर्क करें",
    "sendMessage": "संदेश भेजें",
    "fullName": "पूरा नाम",
    "enterName": "अपना पूरा नाम दर्ज करें",
    "enterEmail": "अपना ईमेल पता दर्ज करें",
    "subject": "विषय",
    "enterSubject": "संदेश का विषय दर्ज करें",
    "message": "संदेश",
    "enterMessage": "अपना संदेश दर्ज करें",
    "address": "पता",
    "companyAddress": "123 नवाचार ड्राइव, टेक पार्क, मुंबई, महाराष्ट्र 400001, भारत",
    "phoneNumber": "फोन नंबर",
    "supportPhone": "+91 22 1234 5678",
    "salesPhone": "+91 22 8765 4321",
    "supportEmail": "support@vinyasa-ai.com",
    "salesEmail": "sales@vinyasa-ai.com",
    "businessHours": "व्यावसायिक समय",
    "weekdayHours": "सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00 IST",
    "weekendHours": "शनिवार: सुबह 10:00 - दोपहर 4:00 IST",
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqSubtitle": "हमारे उत्पादों और सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें",
    "faq1Question": "एआई उत्पाद सॉर्टिंग कैसे काम करती है?",
    "faq1Answer": "हमारी एआई प्रणाली कंप्यूटर विजन और मशीन लर्निंग का उपयोग करके वास्तविक समय में उत्पाद की गुणवत्ता, आकार और पकावट का विश्लेषण करती है।",
    "faq2Question": "किस प्रकार का कचरा सॉर्ट किया जा सकता है?",
    "faq2Answer": "हमारे स्मार्ट बिन एआई-संचालित पहचान तकनीक का उपयोग करके सूखा कचरा, गीला कचरा, प्लास्टिक, इलेक्ट्रॉनिक कचरा, और चिकित्सा कचरा को उच्च सटीकता के साथ सॉर्ट कर सकते हैं।",
    "faq3Question": "विन्यास कॉइन्स कैसे काम करते हैं?",
    "faq3Answer": "उचित कचरा सॉर्टिंग और पर्यावरण-अनुकूल कार्यों के लिए विन्यास कॉइन्स अर्जित करें। छूट, उत्पादों के लिए कॉइन्स रिडीम करें या पर्यावरणीय कारणों के लिए दान करें।",
    "faq4Question": "आप क्या सहायता प्रदान करते हैं?",
    "faq4Answer": "हम 24/7 तकनीकी सहायता, नियमित सॉफ्टवेयर अपडेट, रखरखाव सेवाएं, और हमारे सभी उत्पादों के लिए व्यापक प्रशिक्षण प्रदान करते हैं।",

    // Products Page (Key items)
    "buyProductsTitle": "विन्यास-एआई उत्पाद",
    "buyProductsSubtitle": "हमारे एआई-संचालित समाधानों के साथ अपने कृषि संचालन और कचरा प्रबंधन को बदलें",
    "bestseller": "सबसे ज्यादा बिकने वाला",
    "popular": "लोकप्रिय",
    "new": "नया",
    "addToCart": "कार्ट में जोड़ें",
    "fastShipping": "तेज़ शिपिंग",
    "warranty": "2-साल वारंटी",
    "support": "24/7 सहायता",
    "getQuote": "कस्टम कोट पाएं",
    "scheduleDemo": "डेमो शेड्यूल करें",

    // Live Produce Sorting
    "liveProduceSortingDesc": "हमारी एआई प्रणाली को गुणवत्ता मूल्यांकन और बाजार सिफारिशों के साथ वास्तविक समय में कृषि उत्पादों को सॉर्ट करते देखें",
    "sortingControls": "सॉर्टिंग नियंत्रण",
    "running": "चल रहा",
    "stopped": "रुका हुआ",
    "startSorting": "सॉर्टिंग शुरू करें",
    "pauseSorting": "सॉर्टिंग रोकें",
    "resetSorting": "सिस्टम रीसेट करें",
    "totalSortedLive": "कुल सॉर्ट किया गया",
    "cameraFeed": "कैमरा फीड",
    "analyzing": "विश्लेषण कर रहा है",
    "cameraIdle": "कैमरा फीड निष्क्रिय है। विश्लेषण शुरू करने के लिए सॉर्टिंग शुरू करें।",
    "currentAnalysis": "वर्तमान विश्लेषण",
    "quality": "गुणवत्ता",
    "confidence": "विश्वास",
    "recommendedAction": "सुझावित कार्य",
    "sortingComplete": "सॉर्टिंग पूर्ण",
    "waitingForProduce": "विश्लेषण के लिए उत्पाद वस्तुओं की प्रतीक्षा कर रहा है...",
    "recentActivity": "हाल की सॉर्टिंग गतिविधि",
    "noActivityYet": "अभी तक कोई सॉर्टिंग गतिविधि नहीं। शुरू करने के लिए सिस्टम चालू करें।"
  },
  
  bn: {
    // Header
    title: "সর্টেড! উৎপাদক ড্যাশবোর্ড",
    consumerTitle: "সর্টেড! কনজিউমার সেন্ট্রাল অপস ড্যাশবোর্ড",
    farmName: "স্বাবলম্বন ফার্মস",
    consumerUserName: "বিকেসি-১ ইকোসাইক্লার",
    
    // Menu Items
    liveSorting: "লাইভ উৎপাদ সর্টিং",
    liveWasteSorting: "লাইভ ওয়েস্ট সর্টিং",
    harvestInsights: "ফসল অন্তর্দৃষ্টি",
    binInsights: "বিন অন্তর্দৃষ্টি",
    cropRecommendations: "ফসল সুপারিশ",
    recyclingTips: "রিসাইক্লিং টিপস",
    yieldOptimization: "ফলন অপ্টিমাইজেশন",
    ecoRewards: "ইকো রিওয়ার্ডস",
    
    // Summary Cards
    totalSorted: "মোট সর্ট করা",
    totalWeight: "মোট ওজন",
    avgQuality: "গড় গুণমান",
    revenue: "আয়",
    
    // Quality Distribution
    qualityDistribution: "জাত অনুযায়ী গুণমান বিতরণ",
    itemsTotal: "মোট আইটেম",
    
    // Quality Categories
    premium: "প্রিমিয়াম",
    ripe: "পাকা",
    yetToRipe: "এখনো পাকেনি",
    overripe: "বেশি পাকা",
    rotten: "পচা",
    
    // Quick Actions
    quickActions: "দ্রুত কর্ম",
    viewAllProduce: "সব পণ্য দেখুন",
    viewAllBins: "সব বিন দেখুন",
    priceAnalysis: "মূল্য বিশ্লেষণ",
    recyclerPrices: "রিসাইক্লার দাম",
    marketTrends: "বাজার প্রবণতা",
    redeemVinyasaCoins: "ভিন্যাস কয়েন রিডিম করুন",
    
    // Optimal Revenue Plan
    optimalRevenuePlan: "জাত অনুযায়ী সর্বোত্তম আয় পরিকল্পনা",
    optimalRecyclingPlan: "বিনের ধরন অনুযায়ী সর্বোত্তম রিসাইক্লিং পরিকল্পনা",
    recyclersMarketplace: "রিসাইক্লার মার্কেটপ্লেস",
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

    // Waste Categories
    dry: "শুকনো বর্জ্য",
    wet: "ভেজা বর্জ্য",
    plastic: "প্লাস্টিক",
    electronic: "ইলেকট্রনিক",
    medical: "মেডিকেল",

    // Bin Types
    "Residential": "আবাসিক",
    "Office": "অফিস",
    "Industrial": "শিল্প",
    "Medical": "চিকিৎসা",

    // New consumer terms
    "valueUnlocked": "মূল্য আনলক",
    "rewardsEarned": "পুরস্কার অর্জিত",
    
    // Chat
    "assistant": "সহায়ক",
    "askAboutProduce": "আপনার ফসল সম্পর্কে জিজ্ঞাসা করুন...",
    
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
    "robusta-banana": "রবাস্টা কলা",
    "bhindi-okra": "ভিন্ডি (ঢেঁড়স)",
    "valencia-orange": "ভ্যালেন্সিয়া কমলা",
    "nagpur-orange": "নাগপুর কমলা",
    "pomegranate": "ডালিম",
    "grapes": "আঙুর",
    "apple": "আপেল",
    "banana": "কলা",
    "onion": "পেঁয়াজ",
    "potato": "আলু",
    "tomato": "টমেটো",
    "okra": "ঢেঁড়স",
    "bhindi": "ভিন্ডি",
    
    // Variety names
    "Svavlamban Hapus": "স্বাবলম্বন হাপুস",
    "Junagadh Kesar": "জুনাগড় কেসর",
    "Robusta": "রবাস্টা",
    "Pusa A-4": "পুসা এ-৪",
    "Pusa Ruby": "পুসা রুবি",
    "robust-tomato": "রোবাস্ট টমেটো",
    "cherry-tomato": "চেরি টমেটো",
    "bell-pepper": "বেল পেপার",
    
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
    "Processing (₹90/kg)": "প্রক্রিয়াকরণ (৯০৳/কেজি)",

    // Bin Types
    "residential-bin": "আবাসিক স্মার্ট বিন",
    "office-bin": "অফিস স্মার্ট বিন",
    "public-bin": "পাবলিক স্মার্ট বিন",
    "industrial-bin": "শিল্প স্মার্ট বিন",
    "hospital-bin": "হাসপাতাল স্মার্ট বিন",

    // Recycler Names
    "Green Earth Compost": "গ্রিন আর্থ কম্পোস্ট",
    "Plastic Recyclers Ltd": "প্লাস্টিক রিসাইক্লার্স লিমিটেড",
    "TechCycle Solutions": "টেকসাইকেল সলিউশনস",
    "BioMedical Waste Solutions": "বায়োমেডিক্যাল ওয়েস্ট সলিউশনস",
    "EcoWaste Management": "ইকোওয়েস্ট ম্যানেজমেন্ট",
    "Mumbai Recycling Hub": "মুম্বাই রিসাইক্লিং হাব",
    "Clean City Initiative": "ক্লিন সিটি ইনিশিয়েটিভ",
    "Waste Warriors": "ওয়েস্ট ওয়ারিয়র্স",

    // Recycler Types
    "Compost": "কম্পোস্ট",
    "Plastic Processing": "প্লাস্টিক প্রসেসিং",
    "E-Waste": "ই-ওয়েস্ট",
    "Medical Waste": "চিকিৎসা বর্জ্য",
    "Mixed Waste": "মিশ্র বর্জ্য",
    "Organic Waste": "জৈব বর্জ্য",

    // Locations
    "Andheri West": "আন্ধেরি পশ্চিম",
    "Malad": "মালাদ",
    "BKC": "বিকেসি",
    "Turbhe": "তুর্ভে",
    "Bandra": "বান্দ্রা",
    "Powai": "পাওয়াই",
    "Ghatkopar": "ঘাটকোপর",
    "Thane": "ঠাণে",

    // Units and Measurements
    "kg/day": "কেজি/দিন",
    "units/day": "ইউনিট/দিন",
    "km": "কিমি",
    "kg": "কেজি",

    // Chart labels
    "Week 1": "সপ্তাহ ১",
    "Week 2": "সপ্তাহ ২",
    "Week 3": "সপ্তাহ ৩",
    "Week 4": "সপ্তাহ ৪",
    "Revenue": "আয়",
    "Target": "লক্ষ্য",
    "Volume": "ভলিউম",
    "Waste": "বর্জ্য",
    "Plastic": "প্লাস্টিক",
    "Electronic": "ইলেকট্রনিক",

    // Market categories
    "Local": "স্থানীয়",
    "Distant": "দূরের",
    "Processing": "প্রক্রিয়াকরণ",

    // Rating
    "rating": "রেটিং",

    // Additional terms
    "priceRange": "দামের পরিসর",

    // Home Page
    "heroTitle": "মূল্য বৃদ্ধি করুন, বর্জ্য কমান",
    "heroSubtitle": "একটি সবুজ ভবিষ্যতের জন্য ফসল ও অভ্যাস সাজানো",
    "getStartedProducer": "প্রোডিউসার ড্যাশবোর্ড শুরু করুন",
    "getStartedConsumer": "কনজিউমার ড্যাশবোর্ড শুরু করুন",
    "producerFeatures": "প্রোডিউসার বৈশিষ্ট্য",
    "producerFeaturesDesc": "এআই-চালিত পণ্য সাজানো এবং গুণমান মূল্যায়ন",
    "consumerFeatures": "কনজিউমার বৈশিষ্ট্য", 
    "consumerFeaturesDesc": "স্মার্ট বর্জ্য ব্যবস্থাপনা এবং পুনর্ব্যবহার অপ্টিমাইজেশন",
    "featuresTitle": "শক্তিশালী বৈশিষ্ট্য",
    "featuresSubtitle": "আপনার সাজানো অপ্টিমাইজ করতে এবং মূল্য সর্বোচ্চ করতে যা প্রয়োজন",
    "smartSorting": "স্মার্ট সাজানো",
    "smartSortingDesc": "সর্বোত্তম গুণমান এবং মূল্যের জন্য এআই-চালিত সাজানো",
    "wasteOptimization": "বর্জ্য অপ্টিমাইজেশন",
    "wasteOptimizationDesc": "বর্জ্য কমান এবং পুনর্ব্যবহারের সম্ভাবনা সর্বোচ্চ করুন",
    "valueMaximization": "মূল্য সর্বোচ্চীকরণ",
    "valueMaximizationDesc": "আপনার পণ্য এবং বর্জ্যের জন্য সেরা দাম পান",
    "vinyasaRewards": "ভিন্যাস পুরস্কার",
    "vinyasaRewardsDesc": "পরিবেশ-বান্ধব কর্মের জন্য ভিন্যাস কয়েন অর্জন ও রিডিম করুন",
    "howItWorks": "এটি কীভাবে কাজ করে",
    "howItWorksDesc": "ভিন্যাস-এআইকে কর্মে দেখতে আমাদের ব্যাখ্যামূলক ভিডিও দেখুন",
    "producerVideoTitle": "প্রোডিউসার সমাধান",
    "producerVideoDesc": "জানুন কৃষকরা কীভাবে তাদের ফসলের মূল্য সর্বোচ্চ করেন",
    "consumerVideoTitle": "কনজিউমার সমাধান",
    "consumerVideoDesc": "স্মার্ট বর্জ্য ব্যবস্থাপনা এবং পুনর্ব্যবহার আবিষ্কার করুন",
    "ctaTitle": "শুরু করার জন্য প্রস্তুত?",
    "ctaDescription": "হাজারো ব্যবহারকারীদের সাথে যোগ দিন যারা ইতিমধ্যে ভিন্যাস-এআই দিয়ে তাদের মূল্য সর্বোচ্চ করছেন",
    "startSortingProduce": "পণ্য সাজানো শুরু করুন",
    "startSortingWaste": "বর্জ্য সাজানো শুরু করুন",

    // Navigation & Footer
    "producerDashboard": "প্রোডিউসার ড্যাশবোর্ড",
    "consumerDashboard": "কনজিউমার ড্যাশবোর্ড",
    "liveProduceSorting": "লাইভ প্রোডিউস সাজানো",
    "aboutUs": "আমাদের সম্পর্কে",
    "contactUs": "যোগাযোগ করুন",
    "privacy": "গোপনীয়তা নীতি",
    "buyProducts": "পণ্য কিনুন",
    "products": "পণ্য",
    "company": "কোম্পানি",
    "newsletter": "নিউজলেটার",
    "newsletterDescription": "ভিন্যাস-এআই বৈশিষ্ট্য এবং স্থায়িত্বের টিপসের সর্বশেষ আপডেট পান",
    "emailPlaceholder": "আপনার ইমেইল লিখুন",
    "subscribe": "সাবস্ক্রাইব করুন",
    "footerDescription": "একটি টেকসই ভবিষ্যতের জন্য বিপ্লবী এআই-চালিত সাজানোর প্রযুক্তি",
    "allRightsReserved": "সমস্ত অধিকার সংরক্ষিত",

    // General Navigation
    "home": "হোম",

    // About Us Page
    "aboutUsTitle": "ভিন্যাস-এআই সম্পর্কে",
    "aboutUsSubtitle": "এআই-চালিত সাজানো প্রযুক্তির মাধ্যমে টেকসই কৃষি ও বর্জ্য ব্যবস্থাপনার ভবিষ্যতের পথপ্রদর্শক",
    "ourMission": "আমাদের মিশন",
    "missionDescription": "আমরা অত্যাধুনিক এআই প্রযুক্তির মাধ্যমে কৃষি পণ্য সাজানো এবং বর্জ্য ব্যবস্থাপনায় বিপ্লব আনতে প্রতিশ্রুতিবদ্ধ। আমাদের মিশন হল মূল্য সর্বোচ্চ করা, বর্জ্য কমানো এবং কৃষক ও ভোক্তাদের জন্য একটি আরও টেকসই ভবিষ্যত তৈরি করা।",
    "missionDetails": "কৃত্রিম বুদ্ধিমত্তাকে গভীর কৃষি দক্ষতার সাথে যুক্ত করে, আমরা কৃষকদের তাদের ফসলের গুণমান অনুকূলিত করতে সাহায্য করি এবং ভোক্তাদের পরিবেশ-সচেতন বর্জ্য ব্যবস্থাপনা সিদ্ধান্ত নিতে সক্ষম করি।",
    "ourVision": "আমাদের দৃষ্টিভঙ্গি",
    "visionDescription": "এমন একটি পৃথিবী যেখানে প্রতিটি পণ্য তার সর্বোত্তম গন্তব্যে পৌঁছায় এবং প্রতিটি বর্জ্য বুদ্ধিমান সাজানোর মাধ্যমে তার সবচেয়ে মূল্যবান ব্যবহার খুঁজে পায়।",
    "ourValues": "আমাদের মূল মূল্যবোধ",
    "valuesSubtitle": "যে নীতিগুলি আমাদের সব কাজকে পরিচালিত করে",
    "sustainability": "টেকসই উন্নয়ন",
    "sustainabilityDesc": "পরিবেশগত দায়বদ্ধতা আমাদের প্রতিটি উদ্ভাবন ও সিদ্ধান্তকে চালিত করে",
    "community": "সম্প্রদায়",
    "communityDesc": "কৃষক ও ভোক্তাদের একসাথে আরও টেকসই পৃথিবী গড়তে ক্ষমতায়ন করা",
    "innovation": "উদ্ভাবন",
    "innovationDesc": "বাস্তব-জগতের কৃষি চ্যালেঞ্জ সমাধানের জন্য এআই প্রযুক্তির সীমানা এগিয়ে নেওয়া",
    "excellence": "উৎকর্ষতা",
    "excellenceDesc": "আমাদের প্রদত্ত প্রতিটি পণ্য ও সেবায় ব্যতিক্রমী মান প্রদান",
    "ourTeam": "আমাদের দল",
    "teamDescription": "কৃষি ও বর্জ্য ব্যবস্থাপনা রূপান্তরের জন্য একসাথে কাজ করা উৎসাহী বিশেষজ্ঞরা",
    "aiTeam": "এআই প্রকৌশলী",
    "aiTeamDesc": "অত্যাধুনিক সাজানো অ্যালগরিদম উন্নয়নকারী মেশিন লার্নিং বিশেষজ্ঞ",
    "agricultureTeam": "কৃষি বিশেষজ্ঞ",
    "agricultureTeamDesc": "পণ্যের গুণমান ও চাষাবাদের গভীর জ্ঞান আনয়নকারী ক্ষেত্র বিশেষজ্ঞ",
    "sustainabilityTeam": "টেকসই উন্নয়ন সমর্থক",
    "sustainabilityTeamDesc": "পরিবেশ বিজ্ঞানী যারা নিশ্চিত করেন আমাদের সমাধান গ্রহের উপকার করে",
    "joinUsTitle": "আমাদের মিশনে যোগ দিন",
    "joinUsDescription": "কৃষি বিপ্লবের অংশ হতে প্রস্তুত? আসুন একসাথে টেকসই ভবিষ্যত গড়ি।",
    "getInTouch": "যোগাযোগ করুন",
    "exploreProducts": "পণ্য অন্বেষণ করুন",

    // Contact Us Page
    "contactUsTitle": "আমাদের সাথে যোগাযোগ করুন",
    "contactUsSubtitle": "ভিন্যাস-এআই সমাধান সম্পর্কে আরও জানতে আমাদের দলের সাথে যোগাযোগ করুন",
    "sendMessage": "বার্তা পাঠান",
    "fullName": "পূর্ণ নাম",
    "enterName": "আপনার পূর্ণ নাম লিখুন",
    "enterEmail": "আপনার ইমেইল ঠিকানা লিখুন",
    "subject": "বিষয়",
    "enterSubject": "বার্তার বিষয় লিখুন",
    "message": "বার্তা",
    "enterMessage": "আপনার বার্তা লিখুন",
    "address": "ঠিকানা",
    "companyAddress": "১২ৃ ইনোভেশন ড্রাইভ, টেক পার্ক, মুম্বাই, মহারাষ্ট্র ৪০০০০১, ভারত",
    "phoneNumber": "ফোন নম্বর",
    "supportPhone": "+৯১ ২২ ১২৩৪ ৫৬৭৮",
    "salesPhone": "+৯১ ২২ ৮৭৬৫ ৪৩২১",
    "supportEmail": "support@vinyasa-ai.com",
    "salesEmail": "sales@vinyasa-ai.com",
    "businessHours": "ব্যবসায়িক সময়",
    "weekdayHours": "সোমবার - শুক্রবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০ IST",
    "weekendHours": "শনিবার: সকাল ১০:০০ - বিকাল ৪:০০ IST",
    "faqTitle": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "faqSubtitle": "আমাদের পণ্য ও সেবা সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজুন",
    "faq1Question": "এআই পণ্য সাজানো কীভাবে কাজ করে?",
    "faq1Answer": "আমাদের এআই সিস্টেম কম্পিউটার ভিশন ও মেশিন লার্নিং ব্যবহার করে রিয়েল-টাইমে পণ্যের গুণমান, আকার ও পাকাপাকি বিশ্লেষণ করে।",
    "faq2Question": "কি ধরনের বর্জ্য সাজানো যায়?",
    "faq2Answer": "আমাদের স্মার্ট বিন এআই-চালিত স্বীকৃতি প্রযুক্তি ব্যবহার করে শুকনো বর্জ্য, ভেজা বর্জ্য, প্লাস্টিক, ইলেকট্রনিক বর্জ্য ও চিকিৎসা বর্জ্য উচ্চ নির্ভুলতায় সাজাতে পারে।",
    "faq3Question": "ভিন্যাস কয়েন কীভাবে কাজ করে?",
    "faq3Answer": "সঠিক বর্জ্য সাজানো ও পরিবেশ-বান্ধব কাজের জন্য ভিন্যাস কয়েন অর্জন করুন। ছাড়, পণ্যের জন্য কয়েন রিডিম করুন বা পরিবেশগত কারণে দান করুন।",
    "faq4Question": "আপনারা কী সহায়তা প্রদান করেন?",
    "faq4Answer": "আমরা ২৪/৭ প্রযুক্তিগত সহায়তা, নিয়মিত সফটওয়্যার আপডেট, রক্ষণাবেক্ষণ সেবা এবং আমাদের সব পণ্যের জন্য ব্যাপক প্রশিক্ষণ প্রদান করি।",

    // Products Page (Key items)
    "buyProductsTitle": "ভিন্যাস-এআই পণ্য",
    "buyProductsSubtitle": "আমাদের এআই-চালিত সমাধানের মাধ্যমে আপনার কৃষি কার্যক্রম ও বর্জ্য ব্যবস্থাপনা রূপান্তর করুন",
    "bestseller": "সর্বাধিক বিক্রিত",
    "popular": "জনপ্রিয়",
    "new": "নতুন",
    "addToCart": "কার্টে যোগ করুন",
    "fastShipping": "দ্রুত শিপিং",
    "warranty": "২-বছর ওয়ারেন্টি",
    "support": "২৪/৭ সহায়তা",
    "getQuote": "কাস্টম কোট পান",
    "scheduleDemo": "ডেমো সূচি করুন",

    // Live Produce Sorting
    "liveProduceSortingDesc": "আমাদের এআই সিস্টেমকে গুণমান মূল্যায়ন ও বাজার সুপারিশসহ রিয়েল-টাইমে কৃষি পণ্য সাজাতে দেখুন",
    "sortingControls": "সাজানো নিয়ন্ত্রণ",
    "running": "চলমান",
    "stopped": "থামানো",
    "startSorting": "সাজানো শুরু করুন",
    "pauseSorting": "সাজানো বিরতি দিন",
    "resetSorting": "সিস্টেম রিসেট করুন",
    "totalSortedLive": "মোট সাজানো",
    "cameraFeed": "ক্যামেরা ফিড",
    "analyzing": "বিশ্লেষণ করা হচ্ছে",
    "cameraIdle": "ক্যামেরা ফিড নিষ্ক্রিয়। বিশ্লেষণ শুরু করতে সাজানো শুরু করুন।",
    "currentAnalysis": "বর্তমান বিশ্লেষণ",
    "quality": "গুণমান",
    "confidence": "আত্মবিশ্বাস",
    "recommendedAction": "সুপারিশকৃত কর্ম",
    "sortingComplete": "সাজানো সম্পূর্ণ",
    "waitingForProduce": "বিশ্লেষণের জন্য পণ্যের অপেক্ষায়...",
    "recentActivity": "সাম্প্রতিক সাজানো কার্যকলাপ",
    "noActivityYet": "এখনও কোনো সাজানো কার্যকলাপ নেই। শুরু করতে সিস্টেম চালু করুন।"
  },
  
  te: {
    // Header
    title: "సార్టెడ్! ఉత్పాదకుల డాష్‌బోర్డ్",
    farmName: "స్వావలంబన్ ఫార్మ్స్",
    
    // Menu Items
    liveSorting: "లైవ్ ఉత్పాద సార్టింగ్",
    harvestInsights: "పంట అంతర్దృష్టులు",
    cropRecommendations: "పంట సిఫారసులు",
    yieldOptimization: "దిగుబడి అనుకూలీకరణ",
    
    // Summary Cards
    totalSorted: "మొత్తం సార్ట్ చేయబడింది",
    totalWeight: "మొత్తం బరువు",
    avgQuality: "సగటు నాణ్యత",
    revenue: "ఆదాయం",
    
    // Quality Distribution
    qualityDistribution: "రకం వారీ నాణ్యత పంపిణీ",
    itemsTotal: "మొత్తం వస్తువులు",
    
    // Quality Categories
    premium: "ప్రీమియం",
    ripe: "పండిన",
    yetToRipe: "ఇంకా పండలేదు",
    overripe: "అధికంగా పండిన",
    rotten: "కుళ్ళిన",
    
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
    assistant: "సహాయకుడు",
    askAboutProduce: "మీ పంట గురించి అడగండి...",
    
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
    "robusta-banana": "రోబస్టా అరటిపండు",
    "bhindi-okra": "భిండి (బెండకాయ)",
    "valencia-orange": "వ్యాలెన్సియా నారింజ",
    "nagpur-orange": "నాగ్‌పూర్ నారింజ",
    "pomegranate": "దానిమ్మ",
    "grapes": "ద్రాక్షపండు",
    "apple": "సేబు",
    "banana": "అరటిపండు",
    "onion": "ఉల్లిపాయ",
    "potato": "బంగాళదుంప",
    "tomato": "టమాటో",
    "okra": "బెండకాయ",
    "bhindi": "భిండి",
    
    // Variety names
    "Svavlamban Hapus": "స్వావలంబన్ హాపుస్",
    "Junagadh Kesar": "జునాగడ్ కేసర్",
    "Robusta": "రోబస్టా",
    "Pusa A-4": "పుసా ఎ-4",
    "Pusa Ruby": "పుసా రూబీ",
    
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
    liveSorting: "लाइव्ह उत्पाद सॉर्टिंग",
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
    "robusta-banana": "रोबस्टा केळे",
    "bhindi-okra": "भेंडी (ओकरा)",
    "valencia-orange": "व्हॅलेन्सिया संत्रे",
    "nagpur-orange": "नागपूर संत्रे",
    "pomegranate": "डाळिंब",
    "grapes": "द्राक्षे",
    "apple": "सफरचंद",
    "banana": "केळे",
    "onion": "कांदा",
    "potato": "बटाटा",
    "tomato": "टोमॅटो",
    "okra": "ओकरा",
    "bhindi": "भेंडी",
    
    // Variety names
    "Svavlamban Hapus": "स्वावलंबन हापुस",
    "Junagadh Kesar": "जुनागड केसर",
    "Robusta": "रोबस्टा",
    "Pusa A-4": "पुसा ए-४",
    "Pusa Ruby": "पुसा रूबी",
    
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
  // Handle undefined or null values
  if (num === undefined || num === null || isNaN(num)) {
    return '0';
  }
  
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
    t: (key: string): string => {
      const translationKey = key as keyof typeof translations.en;
      return translations[language][translationKey] || translations.en[translationKey] || key;
    },
    formatNumber: (num: number) => formatNumber(num, language)
  };
};