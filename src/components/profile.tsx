import Image from "next/image";
import React from "react";
import Location from "@/components/location";

interface ProfileProps {
  Name: string;
  Company: string;
  LinkedIn?: string;
  Github?: string;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <div className="dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg py-5 px-32 text-center w-128">
      <Image
        src="/images/myhead.png"
        width={500}
        height={500}
        alt="my face"
        className="h-32 w-32 rounded-full border-dashed border-2 border-orange-500 mx-auto my-10"
      ></Image>
      <div className="mb-10">
        <h3 className="text-2xL dark:text-white mb-2">
          {props.Name} @ {props.Company}
        </h3>
        <Location state="NC" city="Raleigh" />
      </div>
    </div>
  );
};

export default Profile;
