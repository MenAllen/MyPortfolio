import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { SideBar } from "../components/SideBar/sidebar";
import Link from 'next/link';

export default function Myprofile() {
  return (
    <Layout>
    <HeadComponent title="My Profile" />
    <section className="my-8 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex ">
    <SideBar></SideBar>
    <h1>Under Construction</h1>
    </section>
  </Layout>


  )
}