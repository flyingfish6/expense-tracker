import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { currentUser } from "@clerk/nextjs/server";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
