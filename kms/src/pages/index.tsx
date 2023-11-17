import Head from "next/head";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import api from "@/services/api";
import { Header } from "@/components/Header";
import Home from "./home";

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>MKS - FrontEnd Challenger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
};

export default index;
