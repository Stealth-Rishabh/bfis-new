import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";
import {
  CalendarIcon,
  ClockIcon,
  MessageCircleIcon,
  ShareIcon,
  ThumbsUpIcon,
  BookmarkIcon,
} from "lucide-react";

const BlogDetails = () => {
  const { blogId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="AI and Human Collaboration"
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Trending</Badge>
            <h1 className="text-4xl font-bold text-red-900 mb-4">
              The Synergy of AI and Human Creativity in 2025
            </h1>

            <div className="flex items-center space-x-4 text-gray-500 mb-6">
              <span className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                June 15, 2025
              </span>
              <span className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4" />
                10 min read
              </span>
            </div>

            <div className="prose max-w-none">
              <p>
                In 2025, the collaboration between artificial intelligence and
                human creativity has reached new heights. This synergy is
                revolutionizing various creative fields, from digital art to
                music composition, and even extending into scientific research
                and problem-solving.
              </p>

              <h2>The Rise of AI-Assisted Creativity</h2>
              <p>
                AI tools have become indispensable for artists, musicians, and
                creators across all disciplines. These tools don't replace human
                creativity but rather augment and enhance it, opening up new
                possibilities that were previously unimaginable.
              </p>

              <h2>Real-World Applications</h2>
              <ul>
                <li>
                  Digital Art: AI algorithms can now generate complex, stunning
                  visuals based on text descriptions, which artists then refine
                  and incorporate into their work.
                </li>
                <li>
                  Music Composition: AI assists composers by suggesting chord
                  progressions, melodies, and even entire sections of music,
                  which humans then curate and develop.
                </li>
                <li>
                  Writing and Storytelling: Advanced language models help
                  writers overcome writer's block, generate plot ideas, and even
                  co-author stories.
                </li>
              </ul>

              <h2>The Human Touch in the Age of AI</h2>
              <p>
                Despite the advancements in AI, the human element remains
                crucial. It's the human touch that adds depth, emotion, and
                meaning to the work. The most successful creations of 2025 are
                those that seamlessly blend AI-generated elements with human
                insight and creativity.
              </p>

              <h2>Looking Ahead</h2>
              <p>
                As we move forward, the potential for AI and human collaboration
                seems limitless. We're not just creating art or solving
                problems; we're redefining the very nature of creativity itself.
              </p>
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="/placeholder.svg?height=50&width=50"
                    alt="Dr. Aisha Quantum"
                  />
                  <AvatarFallback>AQ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">Dr. Aisha Quantum</p>
                  <p className="text-sm text-gray-500">
                    AI-Human Collaboration Expert
                  </p>
                </div>
              </div>
              <div className="hidden md:flex space-x-2">
                <Button variant="outline" size="sm">
                  <ThumbsUpIcon className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <ShareIcon className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkIcon className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Quantum Computing: A New Era of Problem-Solving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Explore how quantum computers are revolutionizing complex
                    problem-solving in various fields.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="text-red-600 hover:text-red-800"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    The Ethics of AI in Creative Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Delve into the ethical considerations surrounding AI's role
                    in art, music, and literature.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="text-red-600 hover:text-red-800"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Separator className="my-8" />

            <h3 className="text-2xl font-bold text-red-900 mb-4">Comments</h3>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Jane Doe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>Posted 2 hours ago</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  This article really opened my eyes to the possibilities of AI
                  and human collaboration. I'm excited to see how this will
                  shape the future of creativity!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Leave a Comment</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Share your thoughts..." />
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 hover:bg-red-700">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  Post Comment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;
