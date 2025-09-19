import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 p-6 flex items-center justify-center">
      <Card className="max-w-md w-full animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <XCircle className="h-16 w-16 text-muted-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">
              Payment Canceled
            </CardTitle>
            <CardDescription className="text-lg">
              Your payment was not completed
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            No worries! Your payment was safely canceled and no charges were made to your account.
          </p>

          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Fire & Ice Gallery
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </Link>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Need help? Contact our support team</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCanceled;