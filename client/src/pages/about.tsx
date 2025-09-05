import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Target, Award, ArrowRight, UserCircle, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import ExpandableMenu from "@/components/ui/expandable-menu";
import ChatInterface from "@/components/consumer/chat-interface";
import logoUrl from "@assets/logo_1756410067559.png";

export default function About() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-16 w-16" />
              <h1 className="text-xl font-bold" data-testid="header-title">
                Vinyasa-AI - {t('aboutUs')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-sage" />
                <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                  <SelectTrigger className="bg-transparent border-sage text-white w-28 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languages).map(([code, name]) => (
                      <SelectItem key={code} value={code}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sage text-sm" data-testid="user-info">
                {t('aboutPage') || 'About Page'}
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
              {t('aboutUsTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('aboutUsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest mb-6">{t('ourMission')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('missionDescription')}
              </p>
              <p className="text-lg text-gray-600">
                {t('missionDetails')}
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-forest/5 to-sage/5">
              <CardContent className="text-center space-y-6">
                <Target className="h-16 w-16 text-forest mx-auto" />
                <h3 className="text-2xl font-bold text-forest">{t('ourVision')}</h3>
                <p className="text-gray-600">{t('visionDescription')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('ourValues')}</h2>
            <p className="text-xl text-gray-600">{t('valuesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Leaf className="h-12 w-12 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">{t('sustainability')}</h3>
                <p className="text-gray-600">{t('sustainabilityDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">{t('community')}</h3>
                <p className="text-gray-600">{t('communityDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Target className="h-12 w-12 text-fresh mx-auto" />
                <h3 className="text-xl font-semibold">{t('innovation')}</h3>
                <p className="text-gray-600">{t('innovationDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Award className="h-12 w-12 text-harvest mx-auto" />
                <h3 className="text-xl font-semibold">{t('excellence')}</h3>
                <p className="text-gray-600">{t('excellenceDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('ourTeam')}</h2>
            <p className="text-xl text-gray-600">{t('teamDescription')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-forest to-sage rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  AI
                </div>
                <h3 className="text-xl font-semibold">{t('aiTeam')}</h3>
                <p className="text-gray-600">{t('aiTeamDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-sage to-fresh rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  AG
                </div>
                <h3 className="text-xl font-semibold">{t('agricultureTeam')}</h3>
                <p className="text-gray-600">{t('agricultureTeamDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-fresh to-harvest rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  SU
                </div>
                <h3 className="text-xl font-semibold">{t('sustainabilityTeam')}</h3>
                <p className="text-gray-600">{t('sustainabilityTeamDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('joinUsTitle')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('joinUsDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-forest hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getInTouch')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest px-8 py-3 text-lg">
                {t('exploreProducts')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}