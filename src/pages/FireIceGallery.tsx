import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/fire-ice-hero.jpg";
import miguelSilhouette from "@/assets/miguel-silhouette.jpg";
import { Flame, Snowflake, Zap, Shield, Clock, TrendingUp, Users, Star, Timer, Award, CheckCircle } from "lucide-react";

const FireIceGallery = () => {
  const [currentMode, setCurrentMode] = useState<'fire' | 'ice' | null>(null);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  // Dynamic content based on mode
  const getCaption = () => {
    if (currentMode === 'fire') {
      return "He once launched a funnel so hot, the pixels melted. But the conversions stayed.";
    } else if (currentMode === 'ice') {
      return "Miguel carved this relic in silence. Every scroll is a whisper of trust.";
    }
    return "Choose your path to witness Miguel's wisdom unfold.";
  };

  const getCTAText = () => {
    if (currentMode === 'fire') {
      return "Deploy With Urgency";
    } else if (currentMode === 'ice') {
      return "Deploy With Clarity";
    }
    return "Enter the Gallery";
  };

  // Countdown timer for Fire mode
  useEffect(() => {
    if (currentMode === 'fire' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentMode, timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const testimonials = [
    { name: "Sarah Chen", role: "E-commerce Owner", text: "This framework doubled my conversion rate overnight. The psychological insights are incredible." },
    { name: "Marcus Rivera", role: "Digital Marketer", text: "Miguel's dual approach is genius. Now I match the template to my audience's energy." },
    { name: "Elena Kostas", role: "SaaS Founder", text: "The ice template built trust with my B2B clients like nothing else could." }
  ];
  return (
    <div className={`min-h-screen transition-all duration-500 ${
      currentMode === 'fire' 
        ? 'bg-gradient-to-br from-fire/20 via-fire-secondary/10 to-fire/30' 
        : currentMode === 'ice' 
          ? 'bg-gradient-to-br from-ice/20 via-ice-secondary/10 to-ice/30'
          : 'bg-background'
    }`}>
      {/* Hero Section: Between Flame and Frost */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>
        
        {/* Animated Divide Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-divide animate-divide-shimmer transform -translate-x-1/2" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Price Badge */}
          <Badge variant="outline" className="mb-8 text-lg px-6 py-2 backdrop-blur-sm bg-card/50">
            Premium Collection • A$297
          </Badge>
          
          {/* Main Headline */}
            <h1 className="font-quote text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">In <span className="text-fire">fire</span>, we find urgency.</span>
            <span className="block">In <span className="text-ice">ice</span>, we discover clarity.</span>
            <span className="block text-primary">In both, we claim victory.</span>
          </h1>
          
          {/* Miguel Attribution */}
          <p className="font-quote italic text-xl md:text-2xl text-muted-foreground mb-8">
            — Miguel, between flame and frost
          </p>
          
          {/* Ceremonial Quote */}
          <div className="max-w-2xl mx-auto mb-12">
            <blockquote className={`font-quote text-lg md:text-xl italic text-center border-l-0 backdrop-blur-sm rounded-lg p-6 transition-all duration-500 ${
              currentMode === 'fire' 
                ? 'bg-fire/10 border border-fire/20 text-fire-surface-foreground' 
                : currentMode === 'ice' 
                  ? 'bg-ice/10 border border-ice/20 text-ice-surface-foreground'
                  : 'bg-card/30'
            }`}>
              {getCaption()}
            </blockquote>
          </div>
          
          {/* Miguel Silhouette */}
          <div className="mb-12 animate-float">
            <img 
              src={miguelSilhouette} 
              alt="Miguel's silhouette walking between fire and ice realms"
              className="mx-auto w-32 h-40 object-cover rounded-lg shadow-premium opacity-80"
            />
          </div>
          
          {/* Hero CTA - Mode Selection */}
          {!currentMode ? (
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground mb-8">Choose your conversion path</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="fire" 
                  size="xl" 
                  onClick={() => setCurrentMode('fire')}
                  className="min-w-[200px] font-semibold"
                >
                  🔥 Step Into the Flames
                </Button>
                <Button 
                  variant="ice" 
                  size="xl" 
                  onClick={() => setCurrentMode('ice')}
                  className="min-w-[200px] font-semibold"
                >
                  ❄️ Enter the Sanctuary
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Badge variant="outline" className={`text-lg px-6 py-2 backdrop-blur-sm ${
                currentMode === 'fire' ? 'border-fire text-fire bg-fire/10' : 'border-ice text-ice bg-ice/10'
              }`}>
                {currentMode === 'fire' ? '🔥 Fire Mode Activated' : '❄️ Ice Mode Activated'}
              </Badge>
              
              <Button 
                variant="outline" 
                onClick={() => setCurrentMode(null)}
                className="backdrop-blur-sm"
              >
                Switch Mode
              </Button>
            </div>
          )}

          <p className="text-muted-foreground mt-6">Scroll down to experience your chosen path</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Conditional Path Section */}
      {currentMode && (
        <section className="py-24 relative overflow-hidden">
          {/* Dynamic Background Glow */}
          <div className={`absolute inset-0 ${
            currentMode === 'fire' 
              ? 'bg-gradient-to-r from-fire/5 to-transparent' 
              : 'bg-gradient-to-l from-ice/5 to-transparent'
          }`} />
          <div className={`absolute ${
            currentMode === 'fire' ? 'left-0' : 'right-0'
          } top-1/2 w-96 h-96 ${
            currentMode === 'fire' ? 'bg-fire/20' : 'bg-ice/20'
          } rounded-full blur-3xl transform -translate-y-1/2 ${
            currentMode === 'fire' ? '-translate-x-1/2' : 'translate-x-1/2'
          }`} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Fire Mode Content */}
              {currentMode === 'fire' && (
                <>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Flame className="w-8 h-8 text-fire animate-glow-pulse" />
                      <Badge variant="outline" className="border-fire text-fire">🔥 Fire Mode Active</Badge>
                    </div>
                    
                    {/* Countdown Timer */}
                    <div className="bg-fire/10 border border-fire/20 rounded-lg p-6 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Timer className="w-6 h-6 text-fire" />
                        <span className="font-semibold text-fire">Limited Time Offer</span>
                      </div>
                      <div className="text-3xl font-bold text-fire font-mono">
                        {formatTime(timeLeft)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">This deal expires soon!</p>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-fire">Passion.</span>{" "}
                      <span className="text-fire">Urgency.</span>{" "}
                      <span className="text-primary">Conversion heat.</span>
                    </h2>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-fire mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">⚡ Scarcity-Driven Design</h3>
                          <p className="text-muted-foreground">Countdown timers and limited availability create immediate action</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Zap className="w-6 h-6 text-fire mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">🎯 Aggressive CTA Placement</h3>
                          <p className="text-muted-foreground">Bold, impossible-to-miss buttons that demand clicks</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <TrendingUp className="w-6 h-6 text-fire mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">🔥 Accelerated Scroll Pacing</h3>
                          <p className="text-muted-foreground">Momentum builds as urgency intensifies</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="fire" size="lg" className="pulse font-semibold">
                        🔥 Deploy With Urgency
                      </Button>
                      <Button variant="fire-outline" size="lg" className="font-semibold">
                        Claim the Heat • A$297
                      </Button>
                    </div>
                  </div>
                  
                  {/* Fire Visual Card */}
                  <Card className="border-fire/20 bg-fire-surface shadow-fire">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-fire to-fire-secondary rounded-lg mb-6 flex items-center justify-center">
                        <Flame className="w-16 h-16 text-white animate-glow-pulse" />
                      </div>
                      
                      <blockquote className="font-quote italic text-lg text-fire-surface-foreground mb-4">
                        "He once launched a funnel so hot, the pixels melted. But the conversions stayed."
                      </blockquote>
                      
                      <div className="flex items-center gap-2 text-sm text-fire">
                        <Star className="w-4 h-4" />
                        <span>Miguel's Fire Archives</span>
                      </div>
                      
                      {/* Urgency Elements */}
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-fire rounded-full animate-pulse" />
                          <span>47 people viewing this</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-fire rounded-full animate-pulse" />
                          <span>Last purchase: 3 minutes ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
              
              {/* Ice Mode Content */}
              {currentMode === 'ice' && (
                <>
                  {/* Ice Visual Card */}
                  <Card className="border-ice/20 bg-ice-surface shadow-ice lg:order-1">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-ice to-ice-secondary rounded-lg mb-6 flex items-center justify-center">
                        <Snowflake className="w-16 h-16 text-white animate-ice-pulse" />
                      </div>
                      
                      <blockquote className="font-quote italic text-lg text-ice-surface-foreground mb-4">
                        "Miguel built this chamber in silence. Every scroll is a whisper of trust."
                      </blockquote>
                      
                      <div className="flex items-center gap-2 text-sm text-ice mb-6">
                        <Shield className="w-4 h-4" />
                        <span>Miguel's Ice Sanctuary</span>
                      </div>
                      
                      {/* Trust Badges */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-4 h-4 text-ice" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Award className="w-4 h-4 text-ice" />
                          <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Shield className="w-4 h-4 text-ice" />
                          <span>Money Back</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Star className="w-4 h-4 text-ice" />
                          <span>5.0 Rating</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="lg:order-2">
                    <div className="flex items-center gap-4 mb-6">
                      <Snowflake className="w-8 h-8 text-ice animate-ice-pulse" />
                      <Badge variant="outline" className="border-ice text-ice">❄️ Ice Mode Active</Badge>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-ice">Clarity.</span>{" "}
                      <span className="text-ice">Trust.</span>{" "}
                      <span className="text-primary">Serene conversion.</span>
                    </h2>
                    
                    {/* Testimonials */}
                    <div className="bg-ice/5 border border-ice/20 rounded-lg p-6 mb-8">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-ice" />
                        What Our Clients Say
                      </h3>
                      <div className="space-y-4">
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="border-l-2 border-ice/30 pl-4">
                            <p className="text-sm italic mb-2">"{testimonial.text}"</p>
                            <cite className="text-xs text-muted-foreground">
                              — {testimonial.name}, {testimonial.role}
                            </cite>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <Shield className="w-6 h-6 text-ice mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">🛡️ Trust-First Layout</h3>
                          <p className="text-muted-foreground">Security badges and testimonials build confidence</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Users className="w-6 h-6 text-ice mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">🚀 Frictionless Experience</h3>
                          <p className="text-muted-foreground">One-click checkout with zero barriers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Snowflake className="w-6 h-6 text-ice mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">🧘 Calming Progression</h3>
                          <p className="text-muted-foreground">Gentle pacing that nurtures decision-making</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="ice" size="lg" className="font-semibold">
                        ❄️ Deploy With Clarity
                      </Button>
                      <Button variant="ice-outline" size="lg" className="font-semibold">
                        Enter the Sanctuary • A$297
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Deploy Guide Section - Psychology Explanation */}
      {currentMode && (
        <section className="py-24 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
                  {currentMode === 'fire' ? '🔥 Fire Psychology' : '❄️ Ice Psychology'}
                </Badge>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  The <span className={`${currentMode === 'fire' ? 'text-fire' : 'text-ice'}`}>
                    {currentMode === 'fire' ? 'Fire' : 'Ice'}
                  </span> Deploy Guide
                </h2>
                
                <p className="text-xl text-muted-foreground">
                  Understanding the emotional psychology behind {currentMode === 'fire' ? 'urgency-driven' : 'trust-based'} conversion
                </p>
              </div>

              {currentMode === 'fire' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-fire/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-fire">🎯 When to Use Fire</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• High-ticket, impulse purchases</li>
                        <li>• Limited-time offers or launches</li>
                        <li>• Audience that responds to urgency</li>
                        <li>• Products with clear immediate value</li>
                        <li>• Flash sales and promotional campaigns</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-fire/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-fire">⚡ Fire Psychology</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Creates fear of missing out (FOMO)</li>
                        <li>• Triggers immediate decision-making</li>
                        <li>• Bypasses rational overthinking</li>
                        <li>• Appeals to competitive instincts</li>
                        <li>• Amplifies perceived value through scarcity</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentMode === 'ice' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-ice/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-ice">🛡️ When to Use Ice</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• High-consideration purchases</li>
                        <li>• B2B or professional services</li>
                        <li>• Trust-sensitive industries</li>
                        <li>• Long-term customer relationships</li>
                        <li>• Premium or luxury offerings</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ice/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-ice">🧘 Ice Psychology</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Builds confidence through transparency</li>
                        <li>• Reduces purchase anxiety</li>
                        <li>• Appeals to logical decision-making</li>
                        <li>• Creates lasting trust relationships</li>
                        <li>• Emphasizes quality over urgency</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Card className={`mt-12 bg-gradient-to-r ${
                currentMode === 'fire' ? 'from-fire/10 to-transparent' : 'from-ice/10 to-transparent'
              } border-primary/20`}>
                <CardContent className="p-8 text-center">
                  <blockquote className="font-quote text-2xl md:text-3xl italic text-foreground mb-4">
                    {currentMode === 'fire' 
                      ? "Heat creates urgency. Urgency creates action. Action creates results."
                      : "Trust is earned in drops and lost in buckets. Every element must whisper reliability."
                    }
                  </blockquote>
                  <cite className="text-muted-foreground">— Miguel, on {currentMode === 'fire' ? 'Fire' : 'Ice'} Psychology</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Duality Master Framework */}
      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              The Complete System
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Duality Master <span className="bg-gradient-to-r from-fire to-ice bg-clip-text text-transparent">Framework</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the psychology of conversion with both emotional extremes. 
              This isn't just templates—it's a complete conversion philosophy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Framework Items */}
            <Card className="border-fire/20 hover:shadow-fire transition-all duration-300 ceremonial-card animate-ceremonial-rise">
              <CardContent className="p-6">
                <Flame className="w-12 h-12 text-fire mb-4 animate-glow-pulse" />
                <h3 className="text-xl font-semibold mb-3">Fire Template</h3>
                <p className="text-muted-foreground">Complete urgency-driven funnel with psychological triggers</p>
              </CardContent>
            </Card>
            
            <Card className="border-ice/20 hover:shadow-ice transition-all duration-300 ceremonial-card animate-ceremonial-rise">
              <CardContent className="p-6">
                <Snowflake className="w-12 h-12 text-ice mb-4 animate-ice-pulse" />
                <h3 className="text-xl font-semibold mb-3">Ice Template</h3>
                <p className="text-muted-foreground">Minimalist clarity-focused design with trust optimization</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 ceremonial-card animate-ceremonial-rise hover-sacred">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Framework</h3>
                <p className="text-muted-foreground">Psychology-based deployment guide and strategy</p>
              </CardContent>
            </Card>
            
            <Card className="border-fire/20 hover:shadow-fire transition-all duration-300 ceremonial-card animate-ceremonial-rise">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-fire mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scroll Pacing Logic</h3>
                <p className="text-muted-foreground">Timing algorithms for optimal user journey</p>
              </CardContent>
            </Card>
            
            <Card className="border-ice/20 hover:shadow-ice transition-all duration-300 ceremonial-card animate-ceremonial-rise">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-ice mb-4" />
                <h3 className="text-xl font-semibold mb-3">CTA Placement Strategy</h3>
                <p className="text-muted-foreground">Strategic positioning for maximum conversion</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 ceremonial-card animate-ceremonial-rise hover-sacred">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Miguel's Ceremonial Code</h3>
                <p className="text-muted-foreground">Exclusive captions and wrapper architecture</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Miguel Quote */}
          <Card className="bg-gradient-to-r from-fire/10 to-ice/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <blockquote className="font-quote text-2xl md:text-3xl italic text-foreground mb-4">
                "The buyer chooses the path. You build both."
              </blockquote>
              <cite className="text-muted-foreground">— Miguel, Duality Master</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section - Fire & Ice Dual Blocks */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Miguel's Final Wisdom */}
          <div className="mb-16">
            <img 
              src={miguelSilhouette} 
              alt="Miguel at the crossroads of fire and ice"
              className="mx-auto w-24 h-32 object-cover rounded-lg shadow-premium opacity-60 mb-8 animate-float"
            />
            
            <blockquote className="font-quote text-2xl md:text-3xl italic text-center max-w-4xl mx-auto mb-8">
              "In the end, all paths converge. The buyer chooses their journey, but both lead to the same sacred moment—the decision to transform their reality."
            </blockquote>
            
            <cite className="font-quote text-lg text-muted-foreground">
              — Miguel, at the convergence of all funnels
            </cite>
          </div>
          
          {/* Dual CTA Blocks */}
          <div className="flex flex-col gap-16 max-w-2xl mx-auto">
            {/* Ice Mode CTA Block */}
            <div className={`group relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
              currentMode === 'ice' 
                ? 'bg-gradient-to-br from-ice/40 via-ice-secondary/20 to-ice/50 border-ice/30 shadow-[0_0_40px_rgba(59,130,246,0.25)]'
                : 'bg-gradient-to-br from-ice/20 via-ice-secondary/10 to-ice/30 border-ice/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
            } border hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-50" />
              <div className="relative z-10">
                <div className={`font-quote text-xl md:text-2xl italic mb-6 leading-relaxed transition-all duration-300 ${
                  currentMode === 'ice' ? 'text-ice-surface-foreground' : 'text-foreground'
                }`}>
                  "Miguel carved this relic in silence. Every scroll is a whisper of trust."
                </div>
                <Button 
                  size="lg"
                  onClick={() => setCurrentMode('ice')}
                  className={`font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 ${
                    currentMode === 'ice' 
                      ? 'bg-white text-ice-secondary shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-ice-surface' 
                      : 'bg-white text-ice-secondary shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-ice-surface'
                  }`}
                >
                  Deploy With Clarity
                </Button>
              </div>
            </div>

            {/* Fire Mode CTA Block */}
            <div className={`group relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
              currentMode === 'fire'
                ? 'bg-gradient-to-br from-fire/50 via-fire-secondary/30 to-fire/60 border-fire/40 shadow-[0_0_40px_rgba(249,115,22,0.25)]'
                : 'bg-gradient-to-br from-fire/30 via-fire-secondary/20 to-fire/40 border-fire/30 shadow-[0_0_30px_rgba(249,115,22,0.15)]'
            } border hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl opacity-80" />
              <div className="relative z-10">
                <div className={`font-quote text-xl md:text-2xl italic mb-6 leading-relaxed transition-all duration-300 ${
                  currentMode === 'fire' ? 'text-fire-surface-foreground' : 'text-foreground'
                }`}>
                  "He once launched a funnel so hot, the pixels melted. But the conversions stayed."
                </div>
                <Button 
                  size="lg"
                  onClick={() => setCurrentMode('fire')}
                  className={`font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 ${
                    currentMode === 'fire'
                      ? 'bg-fire-secondary text-fire-surface shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:bg-fire'
                      : 'bg-fire-secondary text-fire-surface shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:bg-fire'
                  }`}
                >
                  Deploy With Urgency
                </Button>
              </div>
            </div>
          </div>
          
          {/* Ceremonial Final CTA */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="block mb-2">The Gallery Awaits</span>
              <span className="block text-primary">Choose Your Relic</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Two templates. One destiny. Your customers' hearts beat in both rhythms—honor them both.
            </p>
            
            {/* Ceremonial CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                variant="default" 
                size="xl" 
                className="px-12 py-6 text-xl font-semibold animate-ceremonial-rise"
              >
                Step Into the Gallery
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="px-12 py-6 text-xl font-semibold border-2 animate-sacred-glow"
              >
                Claim the Dual Relics A$297
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Lifetime Updates Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Footer */}
      <footer className="py-12 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Miguel's Gallery Chamber. Master the tension between{" "}
            <span className="text-fire">fire</span> and <span className="text-ice">ice</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FireIceGallery;