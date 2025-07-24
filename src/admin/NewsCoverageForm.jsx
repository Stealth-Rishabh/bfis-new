"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, parse } from "date-fns";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";

export default function NewsCoverageForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [featureImage, setFeatureImage] = useState(null);
  const [newsCoverageImages, setNewsCoverageImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateInput, setDateInput] = useState(format(new Date(), "yyyy-MM-dd"));

  const handleFeatureImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Feature image must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }
      setFeatureImage(file);
    }
  };

  const handleNewsCoverageImagesChange = (e) => {
    const files = Array.from(e.target.files);

    if (newsCoverageImages.length + files.length > 50) {
      toast.error("You can only upload up to 50 images in total");
      return;
    }

    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} is too large (max 5MB)`);
        return false;
      }
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} is not an image file`);
        return false;
      }
      return true;
    });

    if (newsCoverageImages.length + validFiles.length >= 40) {
      toast.warning(
        `You have ${
          50 - (newsCoverageImages.length + validFiles.length)
        } slots remaining`
      );
    }

    setNewsCoverageImages((prev) => [...prev, ...validFiles]);
  };

  const removeNewsCoverageImage = (index) => {
    setNewsCoverageImages((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setTitle("");
    setDate(new Date());
    setFeatureImage(null);
    setNewsCoverageImages([]);
    setDateInput(format(new Date(), "yyyy-MM-dd"));
  };

  const handleDateInput = (e) => {
    const input = e.target.value;
    setDateInput(input);

    try {
      const parsedDate = parse(input, "yyyy-MM-dd", new Date());
      if (parsedDate instanceof Date && !isNaN(parsedDate)) {
        setDate(parsedDate);
      }
    } catch (error) {
      console.error("Invalid date format");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title.trim()) {
      toast.error("Please enter a news coverage title");
      setIsSubmitting(false);
      return;
    }

    if (!featureImage) {
      toast.error("Please upload a feature image");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("date", dateInput);
      formData.append("feature_image", featureImage);
      newsCoverageImages.forEach((file) => {
        formData.append("news_coverage_images", file);
      });

      const response = await fetch("/api/news-coverage", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload news coverage");
      }

      const data = await response.json();
      toast.success("News coverage created successfully!");
      resetForm();
    } catch (error) {
      console.error("Error details:", error);
      toast.error(error.message || "Failed to create news coverage");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Create New News Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* News Coverage Title */}
            <div className="space-y-2">
              <Label htmlFor="title">News Coverage Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter news coverage title"
                required
                disabled={isSubmitting}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            {/* News Coverage Date */}
            <div className="space-y-2">
              <Label htmlFor="newsCoverageDate">News Coverage Date</Label>
              <Input
                id="newsCoverageDate"
                type="date"
                value={dateInput}
                onChange={handleDateInput}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm [&::-webkit-calendar-picker-indicator]:ml-auto"
                disabled={isSubmitting}
              />
            </div>

            {/* Feature Image Upload */}
            <div className="space-y-2">
              <Label>Feature Image</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <input
                  type="file"
                  id="featureImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFeatureImageChange}
                  disabled={isSubmitting}
                />
                <Label
                  htmlFor="featureImage"
                  className={`cursor-pointer ${
                    isSubmitting ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Upload feature image (max 5MB)
                    </span>
                  </div>
                </Label>
                {featureImage && (
                  <div className="mt-4 relative">
                    <img
                      src={URL.createObjectURL(featureImage)}
                      alt="Feature preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setFeatureImage(null)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      disabled={isSubmitting}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* News Coverage Images Upload */}
            <div className="space-y-2">
              <Label>News Coverage Images (Max 50)</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <input
                  type="file"
                  id="newsCoverageImages"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleNewsCoverageImagesChange}
                  disabled={isSubmitting || newsCoverageImages.length >= 50}
                />
                <Label
                  htmlFor="newsCoverageImages"
                  className={`cursor-pointer ${
                    isSubmitting || newsCoverageImages.length >= 50
                      ? "opacity-50"
                      : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Upload news coverage images (max 5MB each)
                      {newsCoverageImages.length > 0 && (
                        <span className="block mt-1">
                          {newsCoverageImages.length}/50 images uploaded
                        </span>
                      )}
                    </span>
                  </div>
                </Label>
              </div>
              {newsCoverageImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {newsCoverageImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`News Coverage ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewsCoverageImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        disabled={isSubmitting}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-10 bg-[#0F172A] hover:bg-[#1E293B] text-white disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Creating News Coverage..."
                : "Create News Coverage"}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
