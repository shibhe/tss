import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground mb-6">
              Unlock Your Potential!
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Want to learn more about what we can offer? Download our profile
              to explore our expertise, success stories, and how we can help you
              achieve your goals.
            </p>
            <a
              href="/attached_assets/Tivane_Software_Solutions_Company_Profile.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Company Profile
                <ArrowRight className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
