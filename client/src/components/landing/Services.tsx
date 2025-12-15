import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  CheckCircle2, 
  Workflow, 
  Users, 
  MessageSquare,
  Bot,
  ArrowRight,
  X,
  Check
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

type ServiceDetail = {
  overview: string;
  features: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
};

type Service = {
  icon: any;
  title: string;
  description: string;
  color: string;
  bg: string;
  fullWidth?: boolean;
  details: ServiceDetail;
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions tailored to meet specific business needs, including web and mobile applications.",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/10",
      details: {
        overview: "We build scalable, robust, and secure software solutions that drive business growth. From MVP development to enterprise-grade applications, our team leverages cutting-edge technologies to deliver exceptional digital experiences.",
        features: [
          "Full-stack Web Development",
          "Mobile App Development (iOS & Android)",
          "Cloud-Native Solutions",
          "Legacy System Modernization"
        ],
        metrics: [
          { label: "Faster Time-to-Market", value: "40%" },
          { label: "Code Coverage", value: "95%+" },
          { label: "Client Satisfaction", value: "4.9/5" }
        ],
        tech: ["React", "Node.js", "Python", "AWS", "Flutter"]
      }
    },
    {
      icon: Server,
      title: "API Management",
      description: "Using Application Programming Interfaces (APIs) to facilitate communication between different software applications.",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/10",
      details: {
        overview: "Streamline your digital ecosystem with our comprehensive API management solutions. We design, build, and maintain secure APIs that enable seamless data exchange and functionality across your applications.",
        features: [
          "API Strategy & Design",
          "Secure Gateway Implementation",
          "Lifecycle Management",
          "Performance Monitoring"
        ],
        metrics: [
          { label: "Integration Speed", value: "3x" },
          { label: "Uptime Guarantee", value: "99.99%" },
          { label: "Security Incidents", value: "0" }
        ],
        tech: ["GraphQL", "REST", "Kong", "Apigee", "OAuth 2.0"]
      }
    },
    {
      icon: CheckCircle2,
      title: "Testing and Validation",
      description: "Ensuring that the integrated systems work as intended and meet business requirements through rigorous testing.",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/10",
      details: {
        overview: "Quality is non-negotiable. Our comprehensive testing services ensure your software is bug-free, performant, and reliable before it reaches your users.",
        features: [
          "Automated Testing Suites",
          "Performance & Load Testing",
          "Security Vulnerability Assessment",
          "User Acceptance Testing (UAT)"
        ],
        metrics: [
          { label: "Defect Reduction", value: "85%" },
          { label: "Test Coverage", value: "100%" },
          { label: "Release Confidence", value: "High" }
        ],
        tech: ["Selenium", "Jest", "Cypress", "JMeter", "SonarQube"]
      }
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Focusing on combining various IT systems and software applications to ensure they work together efficiently.",
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/10",
      details: {
        overview: "Eliminate data silos and improve operational efficiency. We connect disparate systems to create a unified IT environment where information flows freely and securely.",
        features: [
          "Enterprise Service Bus (ESB)",
          "Data Synchronization",
          "Third-party API Integration",
          "Microservices Orchestration"
        ],
        metrics: [
          { label: "Data Accuracy", value: "99.9%" },
          { label: "Process Efficiency", value: "+50%" },
          { label: "Operational Costs", value: "-30%" }
        ],
        tech: ["MuleSoft", "Kafka", "RabbitMQ", "Azure Logic Apps", "Zapier"]
      }
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Designed to help businesses manage their interactions and relationships with current and potential customers.",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/10",
      details: {
        overview: "Build stronger customer relationships with tailored CRM strategies. We implement and customize CRM platforms to help you track leads, manage sales pipelines, and deliver superior customer support.",
        features: [
          "CRM Implementation & Migration",
          "Custom Module Development",
          "Sales Pipeline Automation",
          "Customer Data Analytics"
        ],
        metrics: [
          { label: "Sales Conversion", value: "+25%" },
          { label: "Customer Retention", value: "+15%" },
          { label: "Team Productivity", value: "+35%" }
        ],
        tech: ["Salesforce", "HubSpot", "Zoho", "Dynamics 365", "Custom Solutions"]
      }
    },
    {
      icon: MessageSquare,
      title: "Custom Chatbot",
      description: "We design and develop chatbots that can be integrated across various platforms providing a unified experience.",
      color: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-900/10",
      details: {
        overview: "Enhance customer engagement 24/7 with intelligent chatbots. Our AI-driven conversational interfaces provide instant support, lead qualification, and personalized recommendations.",
        features: [
          "NLP-powered Conversations",
          "Multi-channel Deployment",
          "Sentiment Analysis",
          "Seamless Human Handoff"
        ],
        metrics: [
          { label: "Response Time", value: "<1s" },
          { label: "Support Cost", value: "-40%" },
          { label: "Resolution Rate", value: "70%" }
        ],
        tech: ["Dialogflow", "OpenAI API", "Botpress", "Microsoft Bot Framework", "Rasa"]
      }
    },
    {
      icon: Bot,
      title: "AI Process Optimization",
      description: "Leverage cutting-edge AI to automate repetitive tasks, optimize workflows, and unlock data-driven insights for your business.",
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-900/10",
      fullWidth: true,
      details: {
        overview: "Transform your operations with Artificial Intelligence. We analyze your business processes to identify automation opportunities, implement intelligent workflows, and deploy predictive models that drive efficiency and innovation.",
        features: [
          "Intelligent Document Processing (IDP)",
          "Predictive Analytics & Forecasting",
          "Robotic Process Automation (RPA)",
          "AI-Driven Decision Support Systems"
        ],
        metrics: [
          { label: "Process Speed", value: "10x" },
          { label: "Error Reduction", value: "90%" },
          { label: "ROI (Year 1)", value: "250%" }
        ],
        tech: ["TensorFlow", "PyTorch", "UiPath", "LangChain", "OpenAI"]
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle purple gradient blob background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

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
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-default flex flex-col">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:text-primary"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:max-h-[85vh]">
          {selectedService && (
            <>
              <DialogHeader>
                <div className={`w-12 h-12 rounded-lg ${selectedService.bg} flex items-center justify-center mb-4`}>
                  <selectedService.icon className={`h-6 w-6 ${selectedService.color}`} />
                </div>
                <DialogTitle className="text-2xl font-bold font-heading">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-lg pt-2">
                  {selectedService.details.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.details.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 bg-muted/50 p-4 rounded-lg">
                  {selectedService.details.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl font-bold text-primary">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <Button variant="outline" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button asChild>
                  <a href="#contact" onClick={() => setSelectedService(null)}>
                    Start Project
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
