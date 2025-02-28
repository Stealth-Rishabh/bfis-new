import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EventForm from "./EventForm";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block w-64 bg-blue-600 p-4 transition-transform duration-300 ease-in-out">
        <h1 className="text-white text-2xl mb-4">Admin Panel</h1>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 h-10 w-full px-3 py-2 text-base rounded"
        />
        <Button
          onClick={() => setActiveTab("events")}
          className={`w-full h-10 mb-2 px-3 py-2 text-base text-white ${
            activeTab === "events"
              ? "bg-[#242B3C]"
              : "bg-[#121F3D] hover:bg-[#303a50]"
          } transition-colors`}
        >
          Events
        </Button>
        <Button
          onClick={() => setActiveTab("gallery")}
          className={`w-full h-10 mb-2 px-3 py-2 text-base text-white ${
            activeTab === "gallery"
              ? "bg-[#242B3C]"
              : "bg-[#121F3D] hover:bg-[#242B3C]"
          } transition-colors`}
        >
          Gallery
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "/login";
          }}
          className="w-full h-10 px-3 py-2 text-base bg-red-600 hover:bg-red-900 text-white transition-colors"
        >
          Logout
        </Button>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeTab === "events" ? (
              <EventForm />
            ) : (
              <p>Manage your gallery here.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
