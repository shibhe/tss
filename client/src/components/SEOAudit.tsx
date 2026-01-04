import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type AuditItem = {
  status: "pass" | "warning" | "fail";
  message: string;
  recommendation: string;
};
type AuditResult = {
  [key: string]: AuditItem;
};

export default function SEOAudit() {
  const [isOpen, setIsOpen] = useState(false);
  const [audit, setAudit] = useState<AuditResult | null>(null);

  const runAudit = () => {
    const results: AuditResult = {
      title: {
        status: document.title ? "pass" : "fail",
        message: document.title
          ? `Title found: "${document.title}" (${document.title.length} characters)`
          : "No title tag found",
        recommendation:
          "Title should be 50-60 characters for optimal display in search results"
      },
      description: {
        status: (
          document.querySelector(
            'meta[name="description"]'
          ) as HTMLMetaElement | null
        )?.content
          ? "pass"
          : "fail",
        message: (
          document.querySelector(
            'meta[name="description"]'
          ) as HTMLMetaElement | null
        )?.content
          ? `Description found (${
              (
                document.querySelector(
                  'meta[name="description"]'
                ) as HTMLMetaElement | null
              )?.content.length
            } characters)`
          : "No meta description found",
        recommendation: "Description should be 150-160 characters"
      },
      headings: {
        status:
          document.querySelectorAll("h1").length === 1 ? "pass" : "warning",
        message: `Found ${document.querySelectorAll("h1").length} H1 tags`,
        recommendation: "Page should have exactly one H1 tag"
      },
      images: (() => {
        const images = document.querySelectorAll("img");
        const withoutAlt = Array.from(images).filter((img) => !img.alt).length;
        return {
          status: withoutAlt === 0 ? "pass" : "warning",
          message: `${withoutAlt} of ${images.length} images missing alt text`,
          recommendation:
            "All images should have descriptive alt text for accessibility and SEO"
        };
      })(),
      canonical: {
        status: document.querySelector('link[rel="canonical"]')
          ? "pass"
          : "warning",
        message: document.querySelector('link[rel="canonical"]')
          ? "Canonical URL is set"
          : "No canonical URL found",
        recommendation: "Canonical URLs help prevent duplicate content issues"
      },
      ogTags: {
        status: document.querySelector('meta[property="og:title"]')
          ? "pass"
          : "warning",
        message: document.querySelector('meta[property="og:title"]')
          ? "Open Graph tags found"
          : "Missing Open Graph tags",
        recommendation:
          "OG tags improve how your page appears when shared on social media"
      },
      schema: {
        status: document.querySelector('script[type="application/ld+json"]')
          ? "pass"
          : "warning",
        message: document.querySelector('script[type="application/ld+json"]')
          ? "Structured data (Schema.org) found"
          : "No structured data found",
        recommendation:
          "Schema markup helps search engines understand your content better"
      },
      mobile: {
        status: document.querySelector('meta[name="viewport"]')
          ? "pass"
          : "fail",
        message: document.querySelector('meta[name="viewport"]')
          ? "Viewport meta tag found"
          : "Missing viewport meta tag",
        recommendation: "Viewport tag is essential for mobile responsiveness"
      }
    };

    setAudit(results);
  };

  useEffect(() => {
    if (isOpen && !audit) {
      runAudit();
    }
  }, [isOpen]);

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "fail":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Info className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "fail":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <>
      {/* Floating Audit Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-6"
      >
        <Search className="w-5 h-5 mr-2" />
        SEO Audit
      </Button>

      {/* Audit Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">SEO Audit Report</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-2 text-purple-100">
                Analysis of on-page SEO elements
              </p>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              {audit && (
                <div className="space-y-4">
                  {Object.entries(audit).map(([key, value]) => (
                    <Card
                      key={key}
                      className={`p-4 border ${getStatusColor(value.status)}`}
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getStatusIcon(value.status)}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-800 capitalize mb-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </h3>
                          <p className="text-gray-700 text-sm mb-2">
                            {value.message}
                          </p>
                          <p className="text-gray-600 text-xs italic">
                            💡 {value.recommendation}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Summary */}
              {audit && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-gray-800 mb-2">Summary</h3>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-green-600 font-semibold">
                        {
                          Object.values(audit).filter(
                            (v) => v.status === "pass"
                          ).length
                        }
                      </span>
                      <span className="text-gray-600"> Passed</span>
                    </div>
                    <div>
                      <span className="text-yellow-600 font-semibold">
                        {
                          Object.values(audit).filter(
                            (v) => v.status === "warning"
                          ).length
                        }
                      </span>
                      <span className="text-gray-600"> Warnings</span>
                    </div>
                    <div>
                      <span className="text-red-600 font-semibold">
                        {
                          Object.values(audit).filter(
                            (v) => v.status === "fail"
                          ).length
                        }
                      </span>
                      <span className="text-gray-600"> Failed</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex gap-3">
                <Button onClick={runAudit} variant="outline" className="flex-1">
                  Refresh Audit
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
