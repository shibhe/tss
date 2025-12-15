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
import { Button } from "@/components/ui/button";

type ServiceDetail = {
  overview: string;
  features: string[];
  metrics: { label: string; value: string }[];
  caseStudies: { title: string; result: string; metric: string }[];
  tech: string[];
};

type Service = {
  icon: any;
  title: string;
  description: string;
  color: string;
  details: ServiceDetail;
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions tailored to meet specific business needs, including web and mobile applications.",
      color: "text-purple-600",
      details: {
        overview: "We build scalable, robust, and secure software solutions that drive business growth. From MVP development to enterprise-grade applications, our team leverages cutting-edge technologies to deliver exceptional digital experiences.",
        features: [
          "Full-stack Web Development",
          "Mobile App Development (iOS & Android)",
          "Cloud-Native Solutions",
          "Legacy System Modernization",
          "Real-time Collaboration Features",
          "Scalable Architecture Design"
        ],
        metrics: [
          { label: "Faster Time-to-Market", value: "40%" },
          { label: "Code Coverage", value: "95%+" },
          { label: "Client Satisfaction", value: "4.9/5" }
        ],
        caseStudies: [
          { title: "E-commerce Platform", result: "Increased sales by 150%", metric: "6-month ROI" },
          { title: "Healthcare Mobile App", result: "10,000+ active users", metric: "3.8★ rating" }
        ],
        tech: ["React", "Node.js", "Python", "AWS", "Flutter", "PostgreSQL"]
      }
    },
    {
      icon: Server,
      title: "API Management",
      description: "Using Application Programming Interfaces (APIs) to facilitate communication between different software applications.",
      color: "text-blue-600",
      details: {
        overview: "Streamline your digital ecosystem with our comprehensive API management solutions. We design, build, and maintain secure APIs that enable seamless data exchange and functionality across your applications.",
        features: [
          "API Strategy & Design",
          "Secure Gateway Implementation",
          "Lifecycle Management",
          "Performance Monitoring",
          "Rate Limiting & Throttling",
          "Advanced Analytics Dashboard"
        ],
        metrics: [
          { label: "Integration Speed", value: "3x" },
          { label: "Uptime Guarantee", value: "99.99%" },
          { label: "Security Incidents", value: "0" }
        ],
        caseStudies: [
          { title: "Banking Integration", result: "Connected 15+ financial services", metric: "Zero downtime" },
          { title: "Fintech Startup", result: "Processed $50M in transactions", metric: "Sub-100ms latency" }
        ],
        tech: ["GraphQL", "REST", "Kong", "Apigee", "OAuth 2.0", "API Gateway"]
      }
    },
    {
      icon: CheckCircle2,
      title: "Testing and Validation",
      description: "Ensuring that the integrated systems work as intended and meet business requirements through rigorous testing.",
      color: "text-teal-600",
      details: {
        overview: "Quality is non-negotiable. Our comprehensive testing services ensure your software is bug-free, performant, and reliable before it reaches your users.",
        features: [
          "Automated Testing Suites",
          "Performance & Load Testing",
          "Security Vulnerability Assessment",
          "User Acceptance Testing (UAT)",
          "Mobile App Testing",
          "Cross-browser Compatibility"
        ],
        metrics: [
          { label: "Defect Reduction", value: "85%" },
          { label: "Test Coverage", value: "100%" },
          { label: "Release Confidence", value: "High" }
        ],
        caseStudies: [
          { title: "SaaS Platform", result: "Reduced bugs by 87%", metric: "Pre-launch verified" },
          { title: "Mobile App", result: "100% test coverage achieved", metric: "50 concurrent users" }
        ],
        tech: ["Selenium", "Jest", "Cypress", "JMeter", "SonarQube", "Playwright"]
      }
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Focusing on combining various IT systems and software applications to ensure they work together efficiently.",
      color: "text-orange-600",
      details: {
        overview: "Eliminate data silos and improve operational efficiency. We connect disparate systems to create a unified IT environment where information flows freely and securely.",
        features: [
          "Enterprise Service Bus (ESB)",
          "Data Synchronization",
          "Third-party API Integration",
          "Microservices Orchestration",
          "Middleware Solutions",
          "Real-time Data Pipeline"
        ],
        metrics: [
          { label: "Data Accuracy", value: "99.9%" },
          { label: "Process Efficiency", value: "+50%" },
          { label: "Operational Costs", value: "-30%" }
        ],
        caseStudies: [
          { title: "Retail Chain", result: "Unified 50+ store systems", metric: "Real-time inventory" },
          { title: "Logistics Company", result: "Integrated 8 legacy systems", metric: "Zero data loss" }
        ],
        tech: ["MuleSoft", "Kafka", "RabbitMQ", "Azure Logic Apps", "Zapier", "iPaaS"]
      }
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Designed to help businesses manage their interactions and relationships with current and potential customers.",
      color: "text-pink-600",
      details: {
        overview: "Build stronger customer relationships with tailored CRM strategies. We implement and customize CRM platforms to help you track leads, manage sales pipelines, and deliver superior customer support.",
        features: [
          "CRM Implementation & Migration",
          "Custom Module Development",
          "Sales Pipeline Automation",
          "Customer Data Analytics",
          "Multi-channel Communication",
          "AI-powered Lead Scoring"
        ],
        metrics: [
          { label: "Sales Conversion", value: "+25%" },
          { label: "Customer Retention", value: "+15%" },
          { label: "Team Productivity", value: "+35%" }
        ],
        caseStudies: [
          { title: "B2B SaaS", result: "Increased pipeline by 200%", metric: "60% faster deals" },
          { title: "Service Company", result: "360° customer view", metric: "NPS +40 points" }
        ],
        tech: ["Salesforce", "HubSpot", "Zoho", "Dynamics 365", "Custom Solutions"]
      }
    },
    {
      icon: MessageSquare,
      title: "Custom Chatbot",
      description: "We design and develop chatbots that can be integrated across various platforms providing a unified experience.",
      color: "text-cyan-600",
      details: {
        overview: "Enhance customer engagement 24/7 with intelligent chatbots. Our AI-driven conversational interfaces provide instant support, lead qualification, and personalized recommendations.",
        features: [
          "NLP-powered Conversations",
          "Multi-channel Deployment",
          "Sentiment Analysis",
          "Seamless Human Handoff",
          "Conversation Analytics",
          "Multi-language Support"
        ],
        metrics: [
          { label: "Response Time", value: "<1s" },
          { label: "Support Cost", value: "-40%" },
          { label: "Resolution Rate", value: "70%" }
        ],
        caseStudies: [
          { title: "E-commerce Store", result: "Handled 10K conversations/day", metric: "85% automation" },
          { title: "Service Provider", result: "24/7 customer support", metric: "92% satisfaction" }
        ],
        tech: ["Dialogflow", "OpenAI API", "Botpress", "Microsoft Bot Framework", "Rasa"]
      }
    },
    {
      icon: Bot,
      title: "AI Process Optimization",
      description: "Leverage cutting-edge AI to automate repetitive tasks, optimize workflows, and unlock data-driven insights for your business.",
      color: "text-indigo-600",
      details: {
        overview: "Transform your operations with Artificial Intelligence. We analyze your business processes to identify automation opportunities, implement intelligent workflows, and deploy predictive models that drive efficiency and innovation.",
        features: [
          "Intelligent Document Processing (IDP)",
          "Predictive Analytics & Forecasting",
          "Robotic Process Automation (RPA)",
          "AI-Driven Decision Support Systems",
          "Machine Learning Model Development",
          "Process Mining & Optimization"
        ],
        metrics: [
          { label: "Process Speed", value: "10x" },
          { label: "Error Reduction", value: "90%" },
          { label: "ROI (Year 1)", value: "250%" }
        ],
        caseStudies: [
          { title: "Financial Services", result: "Automated 10,000 documents/day", metric: "95% accuracy" },
          { title: "Manufacturing", result: "Predicted failures 30 days early", metric: "$2M saved" }
        ],
        tech: ["TensorFlow", "PyTorch", "UiPath", "LangChain", "OpenAI", "Hugging Face"]
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-900/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-foreground"
          >
            What we do offer
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 w-full py-3 px-4 rounded-full border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-4 right-4 top-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-auto max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-opacity-10 ${selectedService.color.replace('text-', 'bg-')}`}>
                    <selectedService.icon className={`h-6 w-6 ${selectedService.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-foreground">
                      {selectedService.title}
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {selectedService.details.overview}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-muted-foreground hover:text-foreground shrink-0 transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.details.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Impact & Results</h4>
                  <div className="grid grid-cols-3 gap-4 bg-muted/50 p-6 rounded-xl">
                    {selectedService.details.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Case Studies</h4>
                  <div className="space-y-3">
                    {selectedService.details.caseStudies.map((study, idx) => (
                      <div key={idx} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <p className="font-semibold text-foreground">{study.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{study.result}</p>
                        <p className="text-xs text-primary mt-2 font-medium">{study.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-card border-t border-border p-6 flex justify-end gap-3">
                <Button variant="outline" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="#contact" onClick={() => setSelectedService(null)}>
                    Start Project
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
