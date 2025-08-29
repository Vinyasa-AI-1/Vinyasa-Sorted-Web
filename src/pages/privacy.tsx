import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Eye, Lock, FileText } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";

export default function Privacy() {
  const { language, setLanguage } = useLanguage();
  const t = (key: keyof typeof translations.en) => {
    return translations[language as keyof typeof translations]?.[key] || translations.en[key] || key;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Leaf className="h-8 w-8 text-forest mr-2" />
                <span className="text-2xl font-bold text-forest">Vinyasa-AI</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-forest transition-colors">
                {t('home')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-forest transition-colors">
                {t('aboutUs')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-forest transition-colors">
                {t('contactUs')}
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-forest transition-colors">
                {t('buyProducts')}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-forest mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
              {t('privacyPolicyTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('privacyPolicySubtitle')}
            </p>
            <p className="text-sm text-gray-500">
              {t('lastUpdated')}: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Eye className="h-8 w-8 text-forest mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-forest mb-4">{t('informationWeCollect')}</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>{t('informationWeCollectDesc')}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t('personalInfo')}</li>
                        <li>{t('deviceInfo')}</li>
                        <li>{t('usageInfo')}</li>
                        <li>{t('sensorData')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <FileText className="h-8 w-8 text-sage mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-forest mb-4">{t('howWeUseInfo')}</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>{t('howWeUseInfoDesc')}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t('serviceProvision')}</li>
                        <li>{t('aiOptimization')}</li>
                        <li>{t('customerSupport')}</li>
                        <li>{t('productImprovement')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Lock className="h-8 w-8 text-fresh mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-forest mb-4">{t('dataSecurity')}</h2>
                    <div className="space-y-4 text-gray-600">
                      <p>{t('dataSecurityDesc')}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t('encryption')}</li>
                        <li>{t('accessControls')}</li>
                        <li>{t('regularAudits')}</li>
                        <li>{t('secureStorage')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-forest mb-4">{t('dataSharing')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>{t('dataSharingDesc')}</p>
                  <p>{t('dataSharingDetails')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-forest mb-4">{t('yourRights')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>{t('yourRightsDesc')}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('accessRight')}</li>
                    <li>{t('correctionRight')}</li>
                    <li>{t('deletionRight')}</li>
                    <li>{t('portabilityRight')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Policy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-forest mb-4">{t('cookiePolicy')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>{t('cookiePolicyDesc')}</p>
                  <p>{t('cookieTypes')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-forest text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t('privacyContact')}</h2>
                <div className="space-y-2">
                  <p>{t('privacyContactDesc')}</p>
                  <p><strong>{t('email')}:</strong> privacy@vinyasa-ai.com</p>
                  <p><strong>{t('address')}:</strong> {t('companyAddress')}</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={language} />
    </div>
  );
}