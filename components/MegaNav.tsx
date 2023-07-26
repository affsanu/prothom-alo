"use client";
import { MenuIcon, Search, BellIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/public";
import { Input } from "./ui/input";
import { FC, useEffect, useRef, useState } from "react";

const MegaNav: FC = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearchIconClick = () => {
        setShowSearchInput(true);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
                setShowSearchInput(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const today = new Intl.DateTimeFormat('bn-BD', options).format(date);


    return (
        <nav className="w-full h-[115px] border-b">
            <div className="container p-4 px-8 mx-auto flex justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Button variant="ghost" size="sm"><MenuIcon className="w-8 h-8" /></Button>
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <SheetHeader className="py-6">
                                    <SheetTitle>প্রথম আলো</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4 font-semibold text-sm">
                                    <Link href="/" className="border-b pb-2">সর্বশেষ</Link>
                                    <Link href="/" className="border-b pb-2">বিশেষ সংবাদ</Link>
                                    <Link href="/" className="border-b pb-2">রাজনীতি</Link>
                                    <Link href="/" className="border-b pb-2">বাংলাদেশ</Link>
                                    <Link href="/" className="border-b pb-2">অপরাধ</Link>
                                    <Link href="/" className="border-b pb-2">বিশ্ব</Link>
                                    <Link href="/" className="border-b pb-2">বাণিজ্য</Link>
                                    <Link href="/" className="border-b pb-2">মতামত</Link>
                                    <Link href="/" className="border-b pb-2">খেলা</Link>
                                    <Link href="/" className="border-b pb-2">বিনোদন</Link>
                                    <Link href="/" className="border-b pb-2">চাকরি</Link>
                                    <Link href="/" className="border-b pb-2">জীবনযাপন</Link>
                                </div>
                                <SheetFooter className="grid gap-4 my-4">
                                    <span className="font-semibold text-sm">অনুসরণ করুন-</span>
                                    <div className="flex items-center gap-4">
                                        <Link href="/"><FacebookIcon /></Link>
                                        <Link href="/"><TwitterIcon /></Link>
                                        <Link href="/"><YoutubeIcon /></Link>
                                    </div>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>

                        {showSearchInput ? (
                            <div className="flex fixed ml-16 -space-x-10 items-center">
                                <Input type="text" ref={searchInputRef} placeholder="Search..." />
                                <Button size="sm"><Search className="w-4 h-4" /></Button>
                            </div>
                        ) : (
                            <Button variant="ghost" onClick={handleSearchIconClick}><Search className="w-5 h-5" /></Button>
                        )}

                    </div>
                    <div className="text-md text-slate-500">
                        {today}
                    </div>
                </div>
                <div className="cursor-pointer">
                    <Image src={Logo} alt="Logo" width={270} height={150} />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                            <BellIcon className="w-6 h-6" />
                        </Button>
                        <Button variant="outline" size="sm">
                            Login
                        </Button>
                    </div>
                    <div className="text-black font-semibold text-sm flex gap-2 justify-end">
                        <Link href="/">English</Link>
                        <span className="text-slate-500">Edition</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MegaNav;