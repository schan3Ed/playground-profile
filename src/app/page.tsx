"use client";

import Image from "next/image";
import Profile from "@/components/profile";

import { Button } from "@material-tailwind/react";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-gray-700 flex items-center justify-center">
      <Profile Name="Edward Chan" Company="Home" />
    </div>
  );
}
