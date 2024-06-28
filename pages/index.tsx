import Head from "next/head";
import client from "../lib/mongodb";
import Blog from "./components/landing/blog";
import Header from "./components/landing/header";
import Features from "./components/landing/features";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type ConnectionStatus = {
  isConnected: boolean;
};


export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  return {
    props: { isConnected: false },
  };
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Features />
      <Blog />
      {isConnected ? (
        <p>Connected to MongoDB</p>
      ) : (
        <p>Not connected to MongoDB</p>
      )}
    </div>
  );
}
