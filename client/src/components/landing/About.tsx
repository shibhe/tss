import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, MapPin, Calendar } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Calendar, label: "Founded", value: "2023" },
    { icon: MapPin, label: "Location", value: "Centurion, SA" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2023, at Tivane Software Solutions, we are dedicated to transforming businesses through innovative software solutions. With a team of experienced developers, consultants, and industry experts, we specialise in creating custom software that meets the unique needs of our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border/50 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-semibold text-foreground">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        Our mission is to empower businesses by providing cutting-edge technology solutions that enhance efficiency, drive growth, and foster innovation. We believe that technology should be an enabler, not a barrier.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        We envision a world where businesses can leverage technology to its fullest potential, enabling them to thrive in an ever-evolving digital landscape. Our goal is to be a trusted partner for organisations seeking to navigate this transformation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
