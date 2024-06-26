import Image from "next/image";
import React from "react";
import Location from "./location";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProfileProps {
  Name: string;
  Company: string;
  LinkedIn?: string;
  Github?: string;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <Card color="gray" className="shadow-lg text-center w-96">
      <CardBody>
        <img
          src="/images/myhead.png"
          alt="my face"
          className="w-36 rounded-full outline-dashed outline-4 outline-orange-300 mx-auto my-10 outline-offset-8 "
        />
        <div className="grid grid-row-3">
          <Typography variant="h4" color="white">
            {props.Name}
          </Typography>
          <Typography variant="small" color="gray">
            Senior Software Engineer
          </Typography>
          <div className="mt-4">
            <Location state="NC" city="Raleigh" />
          </div>
        </div>
      </CardBody>
      <CardFooter className="grid grid-cols-2 mx-auto gap-10 mb-8">
        <a href="https://www.linkedin.com/in/schan3ed/">
          <img
            src="/icons/linkedin.svg"
            className="w-8 rounded-lg invert mx-auto"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/schan3Ed">
          <img
            src="/icons/github.svg"
            className="w-8 rounded-lg invert mx-auto"
            alt="Github"
          />
        </a>
      </CardFooter>
    </Card>
  );
};

export default Profile;
