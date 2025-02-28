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
import axios from "axios";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [featureImage, setFeatureImage] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleFeatureImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeatureImage(file);
    }
  };

  const handleEventImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setEventImages(files);
  };

  const removeEventImage = (index) => {
    setEventImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("event_date", date.toISOString().split("T")[0]);

    if (featureImage) {
      formData.append("feature_image", featureImage);
    }

    eventImages.forEach((image) => {
      formData.append("event_images", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/events",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Event created:", response.data);
      setTitle("");
      setDate(new Date());
      setFeatureImage(null);
      setEventImages([]);
    } catch (error) {
      console.error("Error creating event:", error);
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
                />
                <Label htmlFor="featureImage" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Upload feature image
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
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Event Images Upload */}
            <div className="space-y-2">
              <Label>Event Images</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <input
                  type="file"
                  id="eventImages"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleEventImagesChange}
                />
                <Label htmlFor="eventImages" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Upload event images
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
              className="w-full h-10 bg-[#0F172A] hover:bg-[#1E293B] text-white"
            >
              Create Event
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
