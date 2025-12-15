import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  CheckCircle2, 
  Workflow, 
  Users, 
  MessageSquare,
  GraduationCap
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions tailored to meet specific business needs, including web and mobile applications.",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/10"
    },
    {
      icon: Server,
      title: "API Management",
      description: "Using Application Programming Interfaces (APIs) to facilitate communication between different software applications.",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/10"
    },
    {
      icon: CheckCircle2,
      title: "Testing and Validation",
      description: "Ensuring that the integrated systems work as intended and meet business requirements through rigorous testing.",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/10"
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Focusing on combining various IT systems and software applications to ensure they work together efficiently.",
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/10"
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Designed to help businesses manage their interactions and relationships with current and potential customers.",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/10"
    },
    {
      icon: MessageSquare,
      title: "Custom Chatbot",
      description: "We design and develop chatbots that can be integrated across various platforms providing a unified experience.",
      color: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-900/10"
    },
    {
      icon: GraduationCap,
      title: "Interview Prep",
      description: "Practice mock interviews with experienced professionals, refine your responses, and build confidence.",
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-900/10",
      fullWidth: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions designed to scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={service.fullWidth ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto" : ""}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group cursor-default">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
