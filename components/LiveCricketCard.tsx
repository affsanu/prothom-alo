import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'

const LiveCricketCard = () => {
    return (
        <Card className="container bg-slate-100 cursor-pointer">
            <CardHeader className='flex justify-center items-center'>
                <CardTitle className='text-rose-400'>
                    ক্রিকেট লাইভ স্কোর দেখতে এখানে ক্লিক করুন।
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default LiveCricketCard