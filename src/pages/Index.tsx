import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, TrendingUp, Heart, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-background to-accent">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">HealthConnect Kerala</h1>
                <p className="text-sm text-muted-foreground">Migrant Health Records</p>
              </div>
            </div>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Supporting SDG 3: Good Health and Well-being</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-medical-dark bg-clip-text text-transparent">
              Digital Health Records for Migrant Workers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive health record management system for Kerala's migrant population, 
              preventing disease transmission and ensuring equitable healthcare access for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  Access Health Records
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive system addresses critical healthcare challenges for migrant workers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Digital Health Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive digital health records accessible to authorized healthcare providers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-success/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Disease Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early detection and prevention of infectious disease transmission
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-warning/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-warning" />
                </div>
                <CardTitle>Public Health Surveillance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhanced monitoring and reporting for better public health outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Making a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">50,000+</h3>
              <p className="text-muted-foreground">Migrant workers supported</p>
            </div>
            <div className="space-y-2">
              <div className="bg-success/10 p-3 rounded-lg w-fit mx-auto">
                <Activity className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-success">95%</h3>
              <p className="text-muted-foreground">Disease prevention rate</p>
            </div>
            <div className="space-y-2">
              <div className="bg-warning/10 p-3 rounded-lg w-fit mx-auto">
                <Heart className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-warning">100%</h3>
              <p className="text-muted-foreground">Healthcare accessibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-primary p-2 rounded-lg">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold">HealthConnect Kerala</span>
          </div>
          <p className="text-muted-foreground">
            Aligned with Sustainable Development Goals • Ensuring equitable healthcare for all
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
