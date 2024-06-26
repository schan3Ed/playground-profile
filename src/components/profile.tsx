import Image from "next/image";
import React from "react";
import Location from "./location";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface ProfileProps {
  Name: string;
  Company: string;
  LinkedIn?: string;
  Github?: string;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <Card color="gray" className="shadow-lg w-96">
      <CardHeader
        floated={false}
        color="gray"
        className="flex flex-row-reverse h-16 py-2 px-2"
      >
        <a href="https://www.linkedin.com/in/schan3ed/" target="_blank">
          <IconButton
            className="rounded-full"
            size="md"
            variant="text"
            color="white"
          >
            <i className="fab fa-linkedin fa-2x" />
          </IconButton>
        </a>
        <a href="https://github.com/schan3Ed" target="_blank">
          <IconButton
            className="rounded-full"
            size="md"
            variant="text"
            color="white"
          >
            <i className="fab fa-github-alt fa-2x" />
          </IconButton>
        </a>
      </CardHeader>
      <CardBody className="text-center mb-10">
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
      <CardFooter className="grid grid-cols-2 mx-auto gap-20 mb-8">
        <a href="">
          <IconButton
            variant="gradient"
            color="red"
            size="lg"
            className="rounded-full scale-150"
            ripple={true}
          >
            <i className="fas fa-voicemail" />
          </IconButton>
        </a>
        <a href="">
          <IconButton
            variant="gradient"
            color="green"
            size="lg"
            className="rounded-full scale-150"
            ripple={true}
          >
            <i className="fa fa-phone fa-lg" />
          </IconButton>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Profile;
