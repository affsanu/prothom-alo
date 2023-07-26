"use client";

import Link from "next/link";

const MiniNav = () => {
    return (
        <div className="w-full h-[45px] border-b-2 shadow-sm">
            <div className="w-full h-full flex items-center justify-center gap-6  font-normal">
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">সর্বশেষ</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">বিশেষ সংবাদ</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">রাজনীতি</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">বাংলাদেশ</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">অপরাধ</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">বিশ্ব</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">বাণিজ্য</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">মতামত</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">খেলা</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">বিনোদন</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">চাকরি</Link>
                <Link href="/" className=" hover:font-semibold hover:text-cyan-400 duration-300">জীবনযাপন</Link>
            </div>
        </div>
    )
}

export default MiniNav;
