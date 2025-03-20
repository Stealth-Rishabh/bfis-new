"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ExternalLink,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const newsItems = [
  {
    id: 1,
    title: "Brookfield Students Win National Science Competition",
    date: "June 15, 2023",
    image:
      "https://placehold.co/600x400/e63946/ffffff?text=Science+Competition",
    source: "Education Weekly",
    excerpt:
      "Our talented students received top honors at the prestigious National Science Fair with their innovative renewable energy project.",
    category: "Achievement",
    link: "#",
  },
  {
    id: 2,
    title: "New Sports Complex Inauguration Covered by Local Media",
    date: "April 28, 2023",
    image: "https://placehold.co/600x400/1d3557/ffffff?text=Sports+Complex",
    source: "City Herald",
    excerpt:
      "The state-of-the-art facility was inaugurated by sports legend and alumnus James Anderson in a ceremony attended by prominent city officials.",
    category: "Campus",
    link: "#",
  },
  {
    id: 3,
    title: "Brookfield's Cultural Festival Celebrates Diversity",
    date: "March 12, 2023",
    image: "https://placehold.co/600x400/2a9d8f/ffffff?text=Cultural+Festival",
    source: "Community News Network",
    excerpt:
      "Students showcased traditions from over 30 countries in an inspiring celebration of global cultures and heritage.",
    category: "Events",
    link: "#",
  },
  {
    id: 4,
    title: "Brookfield Students Lead Climate Action Initiative",
    date: "February 8, 2023",
    image: "https://placehold.co/600x400/e9c46a/000000?text=Climate+Action",
    source: "Environmental Daily",
    excerpt:
      "Our students' community-wide sustainability program has been recognized as a model for educational institutions nationwide.",
    category: "Community",
    link: "#",
  },
  {
    id: 5,
    title: "Alumni Spotlight: Dr. Sarah Chen's Breakthrough Research",
    date: "January 22, 2023",
    image: "https://placehold.co/600x400/f4a261/000000?text=Alumni+Spotlight",
    source: "Science Today",
    excerpt:
      "Brookfield graduate Dr. Chen's groundbreaking work in immunology has been featured in leading scientific journals this month.",
    category: "Alumni",
    link: "#",
  },
  {
    id: 6,
    title: "Brookfield Robotics Team Advances to International Finals",
    date: "December 10, 2022",
    image: "https://placehold.co/600x400/457b9d/ffffff?text=Robotics+Team",
    source: "Tech Education Journal",
    excerpt:
      "Our robotics team has secured a spot in the prestigious International Robotics Championship after their innovative design won the regional competition.",
    category: "Achievement",
    link: "#",
  },
];

// Categories for filtering
const categories = [
  "All",
  ...Array.from(new Set(newsItems.map((item) => item.category))),
];

export default function NewsCoverage() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [filteredNews, setFilteredNews] = useState(newsItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const itemsPerPage = 3;

  // Filter news based on search term and category
  useEffect(() => {
    let results = newsItems;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter((item) => item.category === activeCategory);
    }

    setFilteredNews(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Auto-rotate featured news every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % Math.min(3, newsItems.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Featured news items (top 3)
  const featuredNews = newsItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Featured News */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${featuredNews[featuredIndex].image})`,
            opacity: 0.4,
          }}
        ></div>

        <div className="container mx-auto px-4 py-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Latest News & Coverage
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto">
              Discover how Brookfield International School is making headlines
              and impacting our community through excellence in education.
            </p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setFeaturedIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  featuredIndex === idx ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`View featured news ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm ${
                  activeCategory === category
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "hover:bg-slate-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {paginatedNews.length > 0 ? (
              paginatedNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-slate-200">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge className="absolute top-3 right-3 bg-indigo-600">
                        {item.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                        <span>{item.source}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button
                        variant="ghost"
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 p-0 h-auto font-medium"
                        onClick={() => setSelectedNews(item)}
                      >
                        Read full article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <div className="mx-auto w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  No results found
                </h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  We couldn't find any news articles matching your search
                  criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {filteredNews.length > itemsPerPage && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="h-9 w-9"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    className={
                      currentPage === page
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : ""
                    }
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="h-9 w-9"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* News Detail Dialog */}
      <Dialog
        open={!!selectedNews}
        onOpenChange={(open) => !open && setSelectedNews(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img
              src={selectedNews?.image || "/placeholder.svg"}
              alt={selectedNews?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <DialogClose className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors">
              <X className="h-5 w-5" />
            </DialogClose>
            <Badge className="absolute bottom-4 left-4 bg-indigo-600">
              {selectedNews?.category}
            </Badge>
          </div>

          <div className="p-6 md:p-8">
            <DialogHeader>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>{selectedNews?.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{selectedNews?.source}</span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                {selectedNews?.title}
              </DialogTitle>
              <DialogDescription className="text-slate-600">
                {selectedNews?.excerpt}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={() => window.open(selectedNews?.link, "_blank")}
              >
                Visit original article
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
