"use client"

import Image from "next/image";
import { BannerLogo } from "@/public";

const Banner = () => {
    return (
        <div className='w-full h-[120px] border-b'>
            <div className="w-full h-full flex justify-center items-center">
                <Image src={BannerLogo} alt="Banner" />
            </div>
        </div>
    )
}

export default Banner