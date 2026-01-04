import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Bongani IT Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    color: "bg-blue-100"
  },
  {
    name: "SturdyIT",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
    color: "bg-purple-100"
  },
  {
    name: "Onohlelo",
    logo: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=200&h=100&fit=crop",
    color: "bg-green-100"
  },
  {
    name: "SALTS innovations IT Solutions",
    logo: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=200&h=100&fit=crop",
    color: "bg-green-100"
  }
];

const ITEMS_PER_SLIDE = 3;

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(clients.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentClients = clients.slice(
    currentIndex * ITEMS_PER_SLIDE,
    (currentIndex + 1) * ITEMS_PER_SLIDE
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative organizations across various
            industries
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              >
                {currentClients.map((client) => (
                  <div key={client.name} className="group">
                    <div
                      className={`${client.color} rounded-2xl p-8 aspect-square flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100`}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                          {client.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="text-sm text-gray-500 mt-2 font-medium">
                          {client.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-purple-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full px-8 py-4 border border-purple-100">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">50+ Happy Clients</div>
              <div className="text-sm text-gray-600">
                Across multiple industries
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
