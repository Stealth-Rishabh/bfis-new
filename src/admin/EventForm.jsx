"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Upload, X } from "lucide-react";
import { toast } from "sonner";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [featureImage, setFeatureImage] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleEventImagesChange = (e) => {
    const files = Array.from(e.target.files);

    // Check if adding new files would exceed the 50 image limit
    if (eventImages.length + files.length > 50) {
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

    // Show warning when approaching the limit
    if (eventImages.length + validFiles.length >= 40) {
      toast.warning(
        `You have ${
          50 - (eventImages.length + validFiles.length)
        } slots remaining`
      );
    }

    setEventImages((prev) => [...prev, ...validFiles]);
  };

  const removeEventImage = (index) => {
    setEventImages((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setTitle("");
    setDate(new Date());
    setFeatureImage(null);
    setEventImages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title.trim()) {
      toast.error("Please enter an event title");
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
      formData.append("event_date", date.toISOString().split("T")[0]);
      formData.append("feature_image", featureImage);
      eventImages.forEach((file) => {
        formData.append("event_images", file);
      });

      const response = await fetch("/api/upload-event", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload event");
      }

      toast.success("Event created successfully!");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create event");
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
              Create New Event
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Event Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter event title"
                required
                disabled={isSubmitting}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            {/* Event Date */}
            <div className="space-y-2">
              <Label>Event Date</Label>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-10 justify-start text-left font-normal bg-white text-black"
                    disabled={isSubmitting}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                      setDate(date);
                      setIsCalendarOpen(false);
                    }}
                    initialFocus
                    className="rounded-md border text-black [&_.rdp-day]:text-black [&_.rdp-day_button:hover]:bg-gray-100 [&_.rdp-day_button:focus]:bg-gray-100"
                  />
                </PopoverContent>
              </Popover>
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
                      Upload feature image (max 10MB)
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

            {/* Event Images Upload */}
            <div className="space-y-2">
              <Label>Event Images (Max 50)</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <input
                  type="file"
                  id="eventImages"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleEventImagesChange}
                  disabled={isSubmitting || eventImages.length >= 50}
                />
                <Label
                  htmlFor="eventImages"
                  className={`cursor-pointer ${
                    isSubmitting || eventImages.length >= 50 ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Upload event images (max 5MB each)
                      {eventImages.length > 0 && (
                        <span className="block mt-1">
                          {eventImages.length}/50 images uploaded
                        </span>
                      )}
                    </span>
                  </div>
                </Label>
              </div>
              {eventImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {eventImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Event ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeEventImage(index)}
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
              {isSubmitting ? "Creating Event..." : "Create Event"}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
