import { useEffect } from "react";

export default function SEO({
  title = "Tivane Software Solutions | Custom Software Development & IT Services",
  description = "Transform your business with Tivane Software Solutions. We offer custom software development, API management, system integration, CRM solutions, and AI automation services in South Africa.",
  keywords = "software development, API management, system integration, CRM, chatbot development, AI automation, business process outsourcing, South Africa, Centurion",
  ogImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
  canonical = window.location.href
}) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "Tivane Software Solutions");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "Tivane Software Solutions", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}
