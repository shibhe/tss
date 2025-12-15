import { Button } from "@/components/ui/button";
import { motion, easeInOut } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, Mail, Settings } from "lucide-react";

export default function Hero() {
  // Floating animation variants
  const float = (duration: number, delay: number) => ({
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: easeInOut
      }
    }
  });

  const floatingElements: Array<{
    icon?: React.ComponentType<any>;
    color?: string;
    position: string;
    size?: string;
    duration: number;
    delay: number;
    circle?: boolean;
    badge?: boolean;
    label?: string;
    bg?: string;
  }> = [
    {
      icon: MessageCircle,
      color: "text-teal-500",
      position: "left-10 top-1/3",
      size: "h-10 w-10",
      duration: 3,
      delay: 0
    },
    {
      icon: Zap,
      color: "text-purple-500",
      position: "left-20 bottom-1/4",
      bg: "bg-purple-100 dark:bg-purple-900/20",
      size: "h-12 w-12",
      duration: 3.5,
      delay: 0.5,
      circle: true
    },
    {
      label: "24/7",
      color: "text-white bg-teal-500",
      position: "right-16 top-1/4",
      badge: true,
      duration: 2.8,
      delay: 0.3
    },
    {
      icon: Mail,
      color: "text-orange-500",
      position: "right-10 bottom-1/3",
      size: "h-10 w-10",
      duration: 3.2,
      delay: 0.8
    },
    {
      icon: Settings,
      color: "text-purple-500",
      position: "left-1/3 bottom-10",
      size: "h-11 w-11",
      duration: 3.8,
      delay: 1
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-b from-background via-purple-50/30 dark:via-purple-900/10 to-background"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground"
          >
            Welcome to{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-indigo-600">
              T.S.S
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Empowering your vision with infinite possibilities.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="h-12 px-8 text-base group bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              asChild
            >
              <a href="#services">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Floating Elements */}
          <div className="relative h-96 md:h-80 mt-20">
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={float(element.duration, element.delay)}
                className={`absolute ${element.position}`}
              >
                {element.badge ? (
                  <div className={`px-3 py-1 rounded-full ${element.color} text-xs font-bold shadow-lg border border-current/40`}>
                    {element.label}
                  </div>
                ) : element.circle && element.icon ? (
                  <div className={`w-16 h-16 rounded-full ${element.bg} flex items-center justify-center shadow-lg border border-current/30`}>
                    {element.icon && <element.icon className={`${element.color} ${element.size}`} />}
                  </div>
                ) : element.icon ? (
                  <div className={`flex items-center justify-center rounded-lg border border-current/30 p-2.5`}>
                    <element.icon className={`${element.color} ${element.size}`} />
                  </div>
                ) : null}
              </motion.div>
            ))}

            {/* Center decorative element */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 flex items-center justify-center">
                <Zap className="h-10 w-10 text-primary animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
