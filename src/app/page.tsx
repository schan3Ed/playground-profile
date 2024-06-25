import Image from "next/image";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="h-screen bg-gray-700 flex items-center justify-center">
      <Profile Name="Edward Chan" Company="Home" />
    </div>
  );
}
