import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SearchIcon,
  CalendarIcon,
  TrendingUpIcon,
  ZapIcon,
  HashIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog posts */}
            <div className="lg:w-2/3">
              <Link to="/blog/ai-and-human-creativity">
                <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=800"
                      alt="AI and Human Collaboration"
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">
                      Trending
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-900">
                      The Synergy of AI and Human Creativity in 2025
                    </CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Posted on June 15, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      In 2025, the collaboration between artificial intelligence
                      and human creativity has reached new heights. This post
                      explores how AI-assisted tools are revolutionizing various
                      creative fields, from digital art to music composition.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/blog/quantum-computing">
                <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=300&width=800"
                      alt="Quantum Computing Breakthrough"
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                      Tech
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-900">
                      Quantum Computing: A New Era of Problem-Solving
                    </CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Posted on June 10, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The recent breakthroughs in quantum computing have opened
                      up unprecedented possibilities. This article delves into
                      how quantum computers are tackling complex problems in
                      climate modeling, drug discovery, and financial
                      optimization.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Card className="mb-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-900">Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="border-red-300 focus:border-red-500 focus:ring-red-500"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <SearchIcon className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center">
                    <TrendingUpIcon className="mr-2 h-5 w-5" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        #QuantumRevolution
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        #AI_HumanCollaboration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        #SpaceTourism2025
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        #BionicEnhancements
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center">
                    <ZapIcon className="mr-2 h-5 w-5" />
                    Featured Authors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="/placeholder.svg?height=40&width=40"
                          alt="Dr. Aisha Quantum"
                        />
                        <AvatarFallback>AQ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Dr. Aisha Quantum</p>
                        <p className="text-sm text-gray-500">
                          Quantum Physics Expert
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="/placeholder.svg?height=40&width=40"
                          alt="Leo AI-rtist"
                        />
                        <AvatarFallback>LA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Leo AI-rtist</p>
                        <p className="text-sm text-gray-500">
                          AI-Human Art Collaborator
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center">
                    <HashIcon className="mr-2 h-5 w-5" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      Quantum
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      AI
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      Creativity
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      Space
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      Biotech
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                    >
                      Climate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
