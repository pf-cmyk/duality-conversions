import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/fire-ice-hero.jpg";
import miguelSilhouette from "@/assets/miguel-silhouette.jpg";
import { Flame, Snowflake, Zap, Shield, Clock, TrendingUp, Users, Star } from "lucide-react";

const FireIceGallery = () => {
  return (
    <div className="min-h-screen bg-background">
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
          
          {/* Miguel Silhouette */}
          <div className="mb-12 animate-float">
            <img 
              src={miguelSilhouette} 
              alt="Miguel's silhouette walking between fire and ice realms"
              className="mx-auto w-32 h-40 object-cover rounded-lg shadow-premium opacity-80"
            />
          </div>
          
          {/* Hero CTA */}
          <Button variant="duality" size="xl" className="mb-4">
            🔥 Embrace the Tension ❄️
          </Button>
          
          <p className="text-muted-foreground">Choose your path below</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section 1: Path of Fire */}
      <section className="py-24 relative overflow-hidden">
        {/* Fire Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-fire/5 to-transparent" />
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-fire/20 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Flame className="w-8 h-8 text-fire animate-glow-pulse" />
                <Badge variant="outline" className="border-fire text-fire">Path of Fire</Badge>
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
                    <h3 className="font-semibold mb-2">Urgency-driven Layout</h3>
                    <p className="text-muted-foreground">Countdown timers, scarcity triggers that accelerate decision-making</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-fire mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Bold CTA Placement</h3>
                    <p className="text-muted-foreground">Strategic positioning that demands immediate action</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-fire mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Accelerated Scroll Pacing</h3>
                    <p className="text-muted-foreground">Subtly increasing momentum that builds urgency</p>
                  </div>
                </div>
              </div>
              
              <Button variant="fire" size="lg" className="mr-4">
                Preview Fire Template
              </Button>
              <Button variant="fire-outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Visual Card */}
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Path of Ice */}
      <section className="py-24 relative overflow-hidden">
        {/* Ice Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-l from-ice/5 to-transparent" />
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-ice/20 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Card */}
            <Card className="border-ice/20 bg-ice-surface shadow-ice lg:order-1">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-ice to-ice-secondary rounded-lg mb-6 flex items-center justify-center">
                  <Snowflake className="w-16 h-16 text-white animate-ice-pulse" />
                </div>
                
                <blockquote className="font-quote italic text-lg text-ice-surface-foreground mb-4">
                  "Miguel built this chamber in silence. Every scroll is a whisper of trust."
                </blockquote>
                
                <div className="flex items-center gap-2 text-sm text-ice">
                  <Shield className="w-4 h-4" />
                  <span>Miguel's Ice Sanctuary</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Content */}
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Snowflake className="w-8 h-8 text-ice animate-ice-pulse" />
                <Badge variant="outline" className="border-ice text-ice">Path of Ice</Badge>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-ice">Clarity.</span>{" "}
                <span className="text-ice">Trust.</span>{" "}
                <span className="text-primary">Serene conversion.</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-ice mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Clean Minimalist Layout</h3>
                    <p className="text-muted-foreground">Trust indicators and testimonials that build confidence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-ice mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Frictionless Checkout</h3>
                    <p className="text-muted-foreground">Seamless flow that removes all barriers to purchase</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Snowflake className="w-6 h-6 text-ice mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Calming Scroll Pacing</h3>
                    <p className="text-muted-foreground">Rhythmic progression that reassures and guides</p>
                  </div>
                </div>
              </div>
              
              <Button variant="ice" size="lg" className="mr-4">
                Preview Ice Template
              </Button>
              <Button variant="ice-outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

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
            <Card className="border-fire/20 hover:shadow-fire transition-all duration-300">
              <CardContent className="p-6">
                <Flame className="w-12 h-12 text-fire mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fire Template</h3>
                <p className="text-muted-foreground">Complete urgency-driven funnel with psychological triggers</p>
              </CardContent>
            </Card>
            
            <Card className="border-ice/20 hover:shadow-ice transition-all duration-300">
              <CardContent className="p-6">
                <Snowflake className="w-12 h-12 text-ice mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ice Template</h3>
                <p className="text-muted-foreground">Minimalist clarity-focused design with trust optimization</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Framework</h3>
                <p className="text-muted-foreground">Psychology-based deployment guide and strategy</p>
              </CardContent>
            </Card>
            
            <Card className="border-fire/20 hover:shadow-fire transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-fire mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scroll Pacing Logic</h3>
                <p className="text-muted-foreground">Timing algorithms for optimal user journey</p>
              </CardContent>
            </Card>
            
            <Card className="border-ice/20 hover:shadow-ice transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-ice mb-4" />
                <h3 className="text-xl font-semibold mb-3">CTA Placement Strategy</h3>
                <p className="text-muted-foreground">Strategic positioning for maximum conversion</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300">
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

      {/* Final CTA Section: Claim the Gallery */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-fire/5 via-transparent to-ice/5" />
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-fire/10 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-ice/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 text-lg px-6 py-3 bg-card/50 backdrop-blur-sm">
              Final Decision Point
            </Badge>
            
            <h2 className="font-quote text-4xl md:text-6xl font-bold mb-8">
              This is not a choice.{" "}
              <span className="bg-gradient-to-r from-fire to-ice bg-clip-text text-transparent">
                It's a tension worth mastering.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the elite ranks of conversion masters who understand that true power 
              lies not in choosing a side, but in mastering both forces.
            </p>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Stripe-ready checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Mobile-optimized</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="premium" size="xl" className="min-w-[200px]">
                Preview the Gallery
              </Button>
              
              <Button variant="duality" size="xl" className="min-w-[240px]">
                Claim the Dual Templates
                <span className="ml-2 font-bold">A$297</span>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              No dead links. No friction. Pure conversion mastery.
            </p>
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