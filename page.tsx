import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import image from "@/app/image/logi.png"
import Image from "next/image";

export const metadata: Metadata = {
  title: "TRF | Success",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function DashboardPage() {
  return (
    <>
    <div>
  <div className="flex justify-center items-center  mt-20  md:flex-1 sm:flex">
    <div className="p-6 flex flex-col justify-center items-center shadow-xl bg-zinc-50 rounded ">
    <Image className="p-2" src={image} width={80} height={80} alt=" "/>
      <p className="font-black italic sm:text-xl text-2xl">Test Request Form Submitted Successfully..!</p>
    </div>
  </div>
  </div>
    </> 
    
  );
}