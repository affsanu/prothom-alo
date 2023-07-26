"use client";

import { BannerTwo } from "@/public";
import Image from "next/image";
import LiveCricketCard from "./LiveCricketCard";

const Banner2 = () => {
    return (
        <div className="flex flex-col gap-6 py-4 border-b">
            <div className="flex justify-center items-center">
                <Image src={BannerTwo} alt="banner2" />
            </div>
            <LiveCricketCard />
        </div>
    )
}

export default Banner2