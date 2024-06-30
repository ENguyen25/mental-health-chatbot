import React, { useEffect, useState } from 'react';
import Head from "next/head";
import client from "../lib/mongodb";
import Header from "./components/landing/Header";
import Features from "./components/landing/Features";
import Benefits from './components/landing/Benefits';
import Testimonials from './components/landing/Testimonials';
import Blog from './components/landing/Blog';
import FAQ from './components/landing/FAQ';
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect();
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Clarity - Find Peace of Mind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQ />
    </div>
  );
}
