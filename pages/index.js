import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/hero";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Search></Search>
    </div>
  );
}
