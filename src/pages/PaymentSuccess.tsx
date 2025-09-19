import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Mail, BookOpen } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const [isFireMode, setIsFireMode] = useState(mode === 'fire');

  useEffect(() => {
    // Apply theme based on mode
    if (mode === 'fire') {
      document.body.style.background = 'linear-gradient(135deg, #1a0000, #330000)';
    } else {
      document.body.style.background = 'linear-gradient(135deg, #001122, #003366)';
    }

    return () => {
      document.body.style.background = '';
    };
  }, [mode]);

  const modeConfig = isFireMode 
    ? {
        title: "🔥 Fire Mode Activated",
        description: "Urgency-driven conversion mastery unlocked",
        badge: "FIRE",
        badgeClass: "bg-red-600 text-white",
        accent: "text-red-400",
        buttonClass: "bg-red-600 hover:bg-red-700 text-white"
      }
    : {
        title: "❄️ Ice Mode Activated", 
        description: "Trust-driven conversion clarity achieved",
        badge: "ICE",
        badgeClass: "bg-blue-600 text-white",
        accent: "text-blue-400",
        buttonClass: "bg-blue-600 hover:bg-blue-700 text-white"
      };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 p-6 flex items-center justify-center">
      <Card className="max-w-2xl w-full animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div>
            <Badge className={modeConfig.badgeClass} variant="secondary">
              {modeConfig.badge}
            </Badge>
            <CardTitle className="text-3xl font-bold mt-2">
              {modeConfig.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {modeConfig.description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              What's Included in Your Duality Master Framework:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Conversion templates for {isFireMode ? 'urgency-driven' : 'trust-based'} funnels
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Psychology guides and implementation strategies
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Exclusive code snippets and styling systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Advanced funnel optimization techniques
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Lifetime updates and framework evolution
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Your {modeConfig.badge.toLowerCase()} mode framework will be delivered to your email within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className={modeConfig.buttonClass}>
                <Download className="h-4 w-4 mr-2" />
                Download Resources
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                ← Return to Gallery
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;