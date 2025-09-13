import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional products and services that enhance our customers' lives and exceed their expectations.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading provider of quality products, setting the standard for excellence in customer satisfaction.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, quality, innovation, and customer-centricity guide everything we do in our business.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "With 15 years of industry experience, Sarah leads our company with vision and passion.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b367?w=300",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      description: "Michael ensures our operations run smoothly and efficiently, delivering excellence every day.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      description: "Emily is passionate about ensuring every customer has an exceptional experience with our brand.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      label: "Satisfied Customers",
    },
    {
      icon: Award,
      number: "15",
      label: "Industry Awards",
    },
    {
      icon: Zap,
      number: "99.5%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ElectroMart
          </h1>
          <p className="text-xl text-muted-foreground">
            Your premier destination for electronics and technology since 2015.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015 with a passion for technology and innovation. What started as a 
                  small electronics store has evolved into a leading online marketplace for 
                  premium electronics and cutting-edge technology products.
                </p>
                <p>
                  We specialize in curating the latest smartphones, laptops, gadgets, and accessories 
                  from top brands worldwide. Every product in our catalog is carefully selected 
                  and tested to ensure it meets our high standards for quality and performance.
                </p>
                <p>
                  Today, ElectroMart serves thousands of tech enthusiasts and continues to be 
                  at the forefront of technology trends. Our success is built on trust, 
                  innovation, and genuine passion for helping customers discover amazing technology.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-primary">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300"
                alt="Team collaboration"
                className="rounded-lg shadow-medium"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300"
                alt="Modern office"
                className="rounded-lg shadow-medium mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Our core values shape everything we do and guide our decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-8 border-0 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90">
              Numbers that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-white/90 text-lg">
                    {achievement.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;