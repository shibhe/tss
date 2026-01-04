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
  Check,
  Briefcase
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
      description:
        "Custom software solutions tailored to meet specific business needs, including web and mobile applications.",
      color: "text-purple-600",
      details: {
        overview:
          "We build scalable, robust, and secure software solutions that drive business growth. From MVP development to enterprise-grade applications, our team leverages cutting-edge technologies to deliver exceptional digital experiences.",
        features: [
          "Full-stack Web Development",
          "Cloud-Native Solutions",
          "Legacy System Modernization",
          "Real-time Collaboration Features",
          "Scalable Architecture Design",
          "Microservices Architecture"
        ],
        metrics: [
          { label: "Faster Time-to-Market", value: "40%" },
          { label: "Code Coverage", value: "95%+" },
          { label: "Client Satisfaction", value: "4.9/5" }
        ],
        caseStudies: [
          {
            title: "E-commerce Platform",
            result: "Increased sales by 150%",
            metric: "6-month ROI"
          },
          {
            title: "SaaS Application",
            result: "Scaled to 50K+ users",
            metric: "99.9% uptime"
          }
        ],
        tech: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"]
      }
    },
    {
      icon: MessageSquare,
      title: "Mobile Application",
      description:
        "Native and cross-platform mobile applications designed for iOS and Android with superior user experience.",
      color: "text-blue-600",
      details: {
        overview:
          "We develop high-performance mobile applications that engage users and drive business results. From concept to App Store launch, we handle everything including UI/UX design, backend integration, and ongoing support.",
        features: [
          "Native iOS & Android Development",
          "Cross-platform Solutions",
          "Offline-first Architecture",
          "Push Notifications & Analytics",
          "In-app Payment Integration",
          "App Store Optimization"
        ],
        metrics: [
          { label: "Average Rating", value: "4.7★" },
          { label: "Daily Active Users", value: "100K+" },
          { label: "App Store Ranking", value: "Top 50" }
        ],
        caseStudies: [
          {
            title: "Fitness App",
            result: "2M+ downloads in 6 months",
            metric: "4.8★ rating"
          },
          {
            title: "Banking App",
            result: "R500M transactions annually",
            metric: "256-bit encryption"
          }
        ],
        tech: [
          "Swift",
          "Kotlin",
          "React Native",
          "Flutter",
          "Firebase",
          "AWS Mobile Hub"
        ]
      }
    },
    {
      icon: Workflow,
      title: "System Integration",
      description:
        "Focusing on combining various IT systems and software applications to ensure they work together efficiently.",
      color: "text-orange-600",
      details: {
        overview:
          "Eliminate data silos and improve operational efficiency. We connect disparate systems to create a unified IT environment where information flows freely and securely.",
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
          {
            title: "Retail Chain",
            result: "Unified 50+ store systems",
            metric: "Real-time inventory"
          },
          {
            title: "Logistics Company",
            result: "Integrated 8 legacy systems",
            metric: "Zero data loss"
          }
        ],
        tech: [
          "MuleSoft",
          "Kafka",
          "RabbitMQ",
          "Azure Logic Apps",
          "Zapier",
          "iPaaS"
        ]
      }
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description:
        "Designed to help businesses manage their interactions and relationships with current and potential customers.",
      color: "text-pink-600",
      details: {
        overview:
          "Build stronger customer relationships with tailored CRM strategies. We implement and customize CRM platforms to help you track leads, manage sales pipelines, and deliver superior customer support.",
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
          {
            title: "B2B SaaS",
            result: "Increased pipeline by 200%",
            metric: "60% faster deals"
          },
          {
            title: "Service Company",
            result: "360° customer view",
            metric: "NPS +40 points"
          }
        ],
        tech: [
          "Salesforce",
          "HubSpot",
          "Zoho",
          "Dynamics 365",
          "Custom Solutions"
        ]
      }
    },
    {
      icon: Bot,
      title: "AI Process Optimization",
      description:
        "Leverage cutting-edge AI to automate repetitive tasks, optimize workflows, and unlock data-driven insights for your business.",
      color: "text-indigo-600",
      details: {
        overview:
          "Transform your operations with Artificial Intelligence. We analyze your business processes to identify automation opportunities, implement intelligent workflows, and deploy predictive models that drive efficiency and innovation.",
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
          {
            title: "Financial Services",
            result: "Automated 10,000 documents/day",
            metric: "95% accuracy"
          },
          {
            title: "Manufacturing",
            result: "Predicted failures 30 days early",
            metric: "R2M saved"
          }
        ],
        tech: [
          "TensorFlow",
          "PyTorch",
          "UiPath",
          "LangChain",
          "OpenAI",
          "Hugging Face"
        ]
      }
    },
    {
      icon: Briefcase,
      title: "Business Process Outsourcing",
      description:
        "Streamline your operations by outsourcing non-core business functions to our expert team, allowing you to focus on strategic growth.",
      color: "text-emerald-600",
      details: {
        overview:
          "Partner with us to optimize your business operations through strategic outsourcing. We handle your non-core functions with expertise and efficiency, providing cost-effective solutions that scale with your business. Our BPO services are designed to improve operational efficiency, reduce overhead costs, and give you the freedom to focus on what you do best.",
        features: [
          "Customer Support & Call Center Services",
          "Data Entry & Processing",
          "Finance & Accounting Services",
          "Human Resources Management",
          "IT Support & Helpdesk",
          "Content Moderation & Management"
        ],
        metrics: [
          { label: "Cost Reduction", value: "40%" },
          { label: "Customer Satisfaction", value: "92%" },
          { label: "Support Coverage", value: "24/7" }
        ],
        caseStudies: [
          {
            title: "E-Commerce Customer Support Outsourcing",
            result:
              "Provided comprehensive customer support services for an e-commerce company, handling inquiries across multiple channels and managing order processing operations.",
            metric: "40% cost reduction, 92% satisfaction, 24/7 coverage"
          }
        ],
        tech: [
          "Salesforce",
          "Zendesk",
          "SAP",
          "QuickBooks",
          "Microsoft Dynamics",
          "ServiceNow"
        ]
      }
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-900/5 relative overflow-hidden"
    >
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
                  <div
                    className={`p-3 rounded-lg bg-opacity-10 ${selectedService.color.replace(
                      "text-",
                      "bg-"
                    )}`}
                  >
                    <selectedService.icon
                      className={`h-6 w-6 ${selectedService.color}`}
                    />
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
                  <h4 className="font-semibold text-foreground mb-4 text-lg">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.details.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">
                    Impact & Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4 bg-muted/50 p-6 rounded-xl">
                    {selectedService.details.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-2xl font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">
                    Case Studies
                  </h4>
                  <div className="space-y-3">
                    {selectedService.details.caseStudies.map((study, idx) => (
                      <div
                        key={idx}
                        className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <p className="font-semibold text-foreground">
                          {study.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {study.result}
                        </p>
                        <p className="text-xs text-primary mt-2 font-medium">
                          {study.metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">
                    Technologies
                  </h4>
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
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
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
