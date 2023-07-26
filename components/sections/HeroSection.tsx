"use client";
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { Ads, Banner1, News1, News2, News3, News4, News5 } from '@/public';

const HeroSection = () => {
    return (
        <div className='container border-b py-6'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 flex gap-4 pr-4 pb-4 cursor-pointer hover:text-blue-500'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl  font-semibold'>
                                    প্রতিদিনই জরিমানা দিচ্ছে শরিয়াহভিত্তিক ছয় ব্যাংক
                                </h1>
                                <p className='text-justify text-slate-600'>
                                    ব্যাংকগুলোতে মানুষ যে টাকা জমা রাখেন, দৈনিক তার সাড়ে ৩ শতাংশ হারে কেন্দ্রীয় ব্যাংকে জমা রাখতে হয়। প্রতি দুই সপ্তাহ শেষে
                                </p>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                            <Image src={Banner1} alt='banner1' width={300} className='hover:scale-105 duration-500' />
                        </div>
                        <div className='flex pb-4'>
                            <Separator orientation="vertical" />
                            <div className='px-4 flex flex-col gap-4 cursor-pointer hover:text-blue-500'>
                                <h1 className='text-lg  font-semibold'>
                                    নয়াপল্টন বা সোহরাওয়ার্দী উদ্যানে নয়, বিএনপিকে গোলাপবাগে সমাবেশের পরামর্শ পুলিশের
                                </h1>
                                <p className='text-justify text-slate-600'>
                                    বিএনপি গত সোমবার ঢাকা মহানগর পুলিশকে (ডিএমপি) চিঠি দিয়ে ঢাকার নয়াপল্টন বা সোহরাওয়ার্দী উদ্যানে সমাবেশ করার আগ্রহের
                                    কথা জানায়। এখনো পুলিশ সমাবেশের...
                                </p>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className='grid grid-cols-3'>
                        <div className='flex flex-col p-4 pl-0 gap-4 cursor-pointer hover:text-blue-500'>
                            <h1 className='text-lg  font-semibold'>
                                বিএনপি সংসদ নির্বাচন ভন্ডুল করার পাঁয়তারা করছে: ওবায়দুল কাদের
                            </h1>
                            <p className='text-justify text-slate-600'>
                                ওবায়দুল কাদের বলেন, বিএনপি আগামী জাতীয় সংসদ নির্বাচন ভন্ডুল করার পাঁয়তারা করছে।
                            </p>
                            <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='flex flex-col px-4 gap-4 cursor-pointer hover:text-blue-500'>
                                <h1 className='text-lg  font-semibold'>
                                    <span className='text-red-500'>গবেষণা</span> / ‘উপসাগরীয় স্রোত’ ২০২৫ সালের মধ্যে বন্ধ হয়ে যেতে পারে
                                </h1>
                                <p className='text-justify text-slate-600'>
                                    নেচার কমিউনিকেশনস নামের সাময়িকীতে নতুন গবেষণাটি প্রকাশিত হয়।
                                </p>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='flex flex-col px-4 gap-4 cursor-pointer hover:text-blue-500'>
                                <h1 className='text-lg  font-semibold'>
                                    <span className='text-red-500'>মতামত</span> / ‘খেলা’ তাহলে হবেই?
                                </h1>
                                <p className='text-justify text-slate-600'>
                                    আগামীকাল বৃহস্পতিবারের বিএনপির মহাসমাবেশ ও আওয়ামী লীগের ‘তারুণ্যের জয়যাত্রা’ শীর্ষক জমায়েত রাজনীতিতে কী বার্তা...
                                </p>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className='grid grid-cols-3'>
                        <div className='p-4 pl-0'>
                            <div className='flex gap-1'>
                                <h1 className='text-lg  font-semibold'>
                                    জনগণকে কষ্ট দিয়ে সমাবেশ নয়, ভবিষ্যতে নিষেধাজ্ঞা আসতে পারে: ডিএমপি কমিশনার
                                </h1>
                                <Image src={News1} alt='news1' width={150} height={150} />
                            </div>
                            <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='p-4'>
                                <div className='flex gap-1'>
                                    <h1 className='text-lg  font-semibold'>
                                        এমন ‘দুর্বল’ তামিমকে দেখে হতাশ হয়েছিলেন মাশরাফি
                                    </h1>
                                    <Image src={News2} alt='news2' width={150} height={150} />
                                </div>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='p-4'>
                                <div className='flex gap-1'>
                                    <h1 className='text-lg  font-semibold'>
                                        সাড়ে ১২ একর জমির দখল নিয়ে মুখোমুখি সরকারের দুই প্রতিষ্ঠান
                                    </h1>
                                    <Image src={News3} alt='news3' width={150} height={150} />
                                </div>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className='grid grid-cols-3'>
                        <div className='p-4 pl-0'>
                            <div className='flex gap-1'>
                                <h1 className='text-lg  font-semibold'>
                                    জনগণকে কষ্ট দিয়ে সমাবেশ নয়, ভবিষ্যতে নিষেধাজ্ঞা আসতে পারে: ডিএমপি কমিশনার
                                </h1>
                                <Image src={News1} alt='news1' width={150} height={150} />
                            </div>
                            <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='p-4'>
                                <div className='flex gap-1'>
                                    <h1 className='text-lg  font-semibold'>
                                        এমন ‘দুর্বল’ তামিমকে দেখে হতাশ হয়েছিলেন মাশরাফি
                                    </h1>
                                    <Image src={News2} alt='news2' width={150} height={150} />
                                </div>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <Separator orientation="vertical" />
                            <div className='p-4'>
                                <div className='flex gap-1'>
                                    <h1 className='text-lg  font-semibold'>
                                        সাড়ে ১২ একর জমির দখল নিয়ে মুখোমুখি সরকারের দুই প্রতিষ্ঠান
                                    </h1>
                                    <Image src={News3} alt='news3' width={150} height={150} />
                                </div>
                                <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <Separator orientation="vertical"/>
                    <div className='px-4'>
                        <div className='border-b mr-2'>
                            <Image src={Ads} alt='Advertise' width={280} className='pb-4' />
                        </div>
                        <div className='border-b py-4'>
                            <Image src={News4} alt='Advertise' width={280} className='pb-4' />
                            <h1 className='text-xl font-semibold'>ঢালিউডের এই ৭ সিনেমার বিদেশি আয় চমকে ওঠার মতো</h1>
                        </div>
                        <div className='border-b py-4'>
                            <div className='flex gap-1'>
                                <h1 className='text-md  font-semibold'>
                                    ঢালিউডের এই ৭ সিনেমার বিদেশি আয় চমকে ওঠার মতো
                                </h1>
                                <Image src={News4} alt='news3' width={150} height={150} />
                            </div>
                            <span className='text-sm text-slate-700'>১ ঘণ্টা আগে</span>
                        </div>
                        <div className='py-4 '>
                            <div className='flex gap-1 p-2 bg-cyan-300'>
                                <h1 className='text-lg  font-semibold'>
                                    ছাপা কাগজের মতো পড়ুন আজকের পত্রিকা
                                </h1>
                                <Image src={News5} alt='news3' width={150} height={150} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;