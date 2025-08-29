import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";

export default function Contact() {
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
              <Link href="/producer" className="text-gray-700 hover:text-forest transition-colors">
                {t('producerDashboard')}
              </Link>
              <Link href="/customer-central" className="text-gray-700 hover:text-forest transition-colors">
                {t('consumerDashboard')}
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
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
              {t('contactUsTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('contactUsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest">{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('fullName')}
                    </label>
                    <Input placeholder={t('enterName')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('email')}
                    </label>
                    <Input type="email" placeholder={t('enterEmail')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('subject')}
                    </label>
                    <Input placeholder={t('enterSubject')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('message')}
                    </label>
                    <Textarea 
                      placeholder={t('enterMessage')} 
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-forest hover:bg-green-800 text-white">
                    {t('sendMessage')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-forest mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('address')}</h3>
                      <p className="text-gray-600">
                        {t('companyAddress')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-sage mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('phoneNumber')}</h3>
                      <p className="text-gray-600">{t('supportPhone')}</p>
                      <p className="text-gray-600">{t('salesPhone')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-fresh mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('email')}</h3>
                      <p className="text-gray-600">{t('supportEmail')}</p>
                      <p className="text-gray-600">{t('salesEmail')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-harvest mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('businessHours')}</h3>
                      <p className="text-gray-600">{t('weekdayHours')}</p>
                      <p className="text-gray-600">{t('weekendHours')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('faqTitle')}</h2>
            <p className="text-xl text-gray-600">{t('faqSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-forest">{t('faq1Question')}</h3>
                <p className="text-gray-600">{t('faq1Answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-forest">{t('faq2Question')}</h3>
                <p className="text-gray-600">{t('faq2Answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-forest">{t('faq3Question')}</h3>
                <p className="text-gray-600">{t('faq3Answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-forest">{t('faq4Question')}</h3>
                <p className="text-gray-600">{t('faq4Answer')}</p>
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