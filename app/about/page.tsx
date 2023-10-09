import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { error } from "console";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the About Page",
};

const About = () => {
  //   throw new Error("Not today");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to HomePage</Link>
    </>
  );
};

export default About;
