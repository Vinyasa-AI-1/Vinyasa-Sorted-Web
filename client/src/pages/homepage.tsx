import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Recycle, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Coins, 
  Camera, 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Star,
  ArrowRight,
  Play,
  Award,
  Target,
  Zap
} from 'lucide-react';
import { Link } from 'wouter';
import logoUrl from "@assets/logo_1756410067559.png";
import wasteImageUrl from "@assets/generated_images/AI_waste_sorting_facility_a4fe898a.png";
import produceImageUrl from "@assets/generated_images/Produce_quality_assessment_system_c692a721.png";
import marketplaceImageUrl from "@assets/generated_images/Sustainable_marketplace_ecosystem_7318b173.png";

export default function Homepage() {
  const [email, setEmail] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-10 w-10" />
              <h1 className="text-2xl font-bold text-green-800">Vinyasa-AI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
              <a href="#marketplace" className="text-gray-700 hover:text-green-600">Marketplace</a>
              <a href="#earnings" className="text-gray-700 hover:text-green-600">Earnings</a>
              <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Login
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Waste into <span className="text-green-600">Wealth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Vinyasa-AI revolutionizes waste management and produce sorting with cutting-edge AI technology. 
              Earn Vinyasa Coins while creating a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  Consumer Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 text-lg px-8 py-3">
                Producer Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/dashboard">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Consumer Central Ops</h3>
                  <p className="text-gray-600 text-sm">Manage waste sorting and recycling operations</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/live-waste-sorting">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Live Waste Sorting</h3>
                  <p className="text-gray-600 text-sm">Real-time AI-powered waste detection</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/live-produce-sorting">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Live Produce Sorting</h3>
                  <p className="text-gray-600 text-sm">AI-driven produce quality assessment</p>
                </CardContent>
              </Card>
            </Link>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Producer Dashboard</h3>
                <p className="text-gray-600 text-sm">Optimize produce sales and distribution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge technology transforms how you handle waste and produce sorting
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Smart Waste Sorting</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our AI instantly identifies and categorizes waste into Dry, Wet, Plastic, Electronic, and Medical categories. 
                Reduce contamination and maximize recycling efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-green-600 mr-3" />
                  <span>Real-time waste detection and sorting</span>
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 text-green-600 mr-3" />
                  <span>99.5% accuracy in waste categorization</span>
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <span>Earn Vinyasa Coins for proper sorting</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src={wasteImageUrl} 
                alt="Smart Waste Sorting Visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden h-80 order-2 lg:order-1">
              <img 
                src={produceImageUrl} 
                alt="Produce Quality Assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Intelligent Produce Sorting</h3>
              <p className="text-lg text-gray-600 mb-6">
                Advanced computer vision analyzes produce quality, ripeness, and market value. 
                Optimize your harvest for maximum revenue and minimal waste.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-green-600 mr-3" />
                  <span>Quality grading from Premium to Overripe</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                  <span>Market price optimization recommendations</span>
                </li>
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-green-600 mr-3" />
                  <span>Dual currency support (₹ + Vinyasa Coins)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 bg-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketplace Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect producers, consumers, and recyclers in a sustainable economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Produce Buyers Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect directly with verified buyers for your produce. Get real-time pricing and secure transactions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Export market connections</li>
                  <li>• Local market partnerships</li>
                  <li>• Processing unit contracts</li>
                  <li>• Transparent pricing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Recycle className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Recyclers Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Find certified recyclers for different waste categories. Maximize value from waste materials.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Plastic recycling partners</li>
                  <li>• E-waste specialists</li>
                  <li>• Organic composting</li>
                  <li>• Medical waste disposal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Coins className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">Vinyasa Coins Store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Redeem your earned Vinyasa Coins for products, services, and exclusive rewards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Eco-friendly products</li>
                  <li>• Service discounts</li>
                  <li>• Premium features</li>
                  <li>• Sustainability rewards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section id="earnings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Earnings Potential</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your sustainable practices into real income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">₹15,000+</h3>
                <p className="text-gray-600">Monthly earnings potential</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Coins className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Vinyasa Coins per day</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
                <p className="text-gray-600">Active users earning</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Recycle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Waste diversion rate</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">How You Earn</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Badge className="bg-green-600 text-white mr-4">1</Badge>
                    <span>Sort waste correctly to earn base Vinyasa Coins</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-green-600 text-white mr-4">2</Badge>
                    <span>Grade produce quality for bonus earnings</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-green-600 text-white mr-4">3</Badge>
                    <span>Connect with buyers for commission income</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-green-600 text-white mr-4">4</Badge>
                    <span>Redeem coins or convert to rupees</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Sample Earnings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Waste Sorting (100 items)</span>
                    <span className="font-semibold">₹200 + 50 VC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Produce Grading (50kg)</span>
                    <span className="font-semibold">₹500 + 100 VC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketplace Commission</span>
                    <span className="font-semibold">₹300 + 25 VC</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Daily Total</span>
                    <span>₹1,000 + 175 VC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Vinyasa-AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of sustainable technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                Vinyasa-AI is committed to creating a circular economy where waste becomes wealth and 
                sustainability drives prosperity. Through cutting-edge AI technology, we empower individuals 
                and businesses to make environmentally conscious decisions while earning real income.
              </p>
              <p className="text-lg text-gray-600">
                Our platform bridges the gap between waste generators, recyclers, and produce markets, 
                creating value at every step of the supply chain.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Global Impact</h4>
                    <p className="text-gray-600">Operating across multiple countries with local partnerships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Secure & Trusted</h4>
                    <p className="text-gray-600">Bank-level security for all transactions and data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Award Winning</h4>
                    <p className="text-gray-600">Recognized for innovation in sustainability technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span>support@vinyasa-ai.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mt-8 mb-4">Office Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM IST</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new features, marketplace opportunities, and sustainability tips
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
              required
            />
            <Button type="submit" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
            <p className="text-gray-600 mb-4">
              We take your privacy seriously. Read our privacy policy to understand how we protect your data.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#privacy" className="text-green-600 hover:text-green-700 underline">Privacy Policy</a>
              <a href="#terms" className="text-green-600 hover:text-green-700 underline">Terms of Service</a>
              <a href="#security" className="text-green-600 hover:text-green-700 underline">Security</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-8 w-8" />
                <h3 className="text-xl font-bold">Vinyasa-AI</h3>
              </div>
              <p className="text-gray-400">
                Transforming waste into wealth through AI-powered sustainability solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Waste Sorting</a></li>
                <li><a href="#" className="hover:text-white">Produce Grading</a></li>
                <li><a href="#" className="hover:text-white">Marketplace</a></li>
                <li><a href="#" className="hover:text-white">Vinyasa Coins</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vinyasa-AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border z-50">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Vinyasa AI Assistant</h3>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:bg-green-700"
                onClick={() => setChatOpen(false)}
              >
                ×
              </Button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm">Hello! I'm your AI assistant. How can I help you with Vinyasa-AI today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Toggle */}
      <Button
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg z-40"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}