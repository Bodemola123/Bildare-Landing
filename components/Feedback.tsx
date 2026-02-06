import React from 'react'
import { IoCall } from 'react-icons/io5'
import { Input } from './ui/input'
import { Mail, NotebookPen, UserRound } from 'lucide-react'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const Feedback = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center md:justify-around items-start w-full px-4 md:px-8">
      
      {/* Left Info */}
      <div className="flex flex-col gap-6 w-full md:max-w-112.5 text-center md:text-left">
        
        <div className="bg-[#B9F5000D] gap-2.5 rounded-2xl px-2.5 py-1.5 text-[#B9F500] text-xs md:text-sm font-medium w-fit flex flex-row items-center mx-auto md:mx-0">
          <IoCall className="text-[18px]" />
          Report an Issue
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold leading-[120%] tracking-[-0.08em]">
            Get in Touch With Us
          </h1>
          <p className="text-sm md:text-base text-[#949494] font-normal leading-[145%] tracking-[-0.04em]">
            Here to Support You! Reach Out for Assistance, Feedback, or Questions
          </p>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl font-medium leading-[120%] tracking-[-0.06em]">
          Let&apos;s Talk About:
        </p>
      </div>

      {/* Right Form */}
      <div className="flex flex-col rounded-4xl gap-8 bg-[#21221E] p-6 sm:p-8 md:p-10 w-full max-w-full md:max-w-180.5">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium leading-[120%] tracking-[-0.06em]">
            Get a quote
          </h1>
          <p className="text-sm md:text-base font-normal leading-[145%] tracking-[-0.04em] max-w-full md:max-w-84.25">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full">
          {/* Name */}
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <div className="relative h-12 sm:h-14 md:h-14">
              <Input
                placeholder="John Doe"
                className="pl-10 h-full placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] rounded-3xl! border-none"
              />
              <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Email */}
          <div className="grid w-full items-center gap-4">
            <Label>Email</Label>
            <div className="relative h-12 sm:h-14 md:h-16">
              <Input
                placeholder="you@example.com"
                className="pl-10 h-full rounded-3xl! placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] border-none"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Subject */}
          <div className="grid w-full items-center gap-4">
            <Label>Subject</Label>
            <div className="relative h-12 sm:h-14 md:h-16">
              <Input
                placeholder="Subject"
                className="pl-10 h-full rounded-3xl! placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] border-none"
              />
              <NotebookPen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Message */}
          <div className="grid w-full items-center gap-4">
            <Label>Message</Label>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none w-full rounded-2xl! h-40 sm:h-44 md:h-50.5 bg-[#3B3B3B] border border-[#292A251A] px-4 py-3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full sm:w-38.25 cursor-pointer bg-[#B9F500] p-4 rounded-2xl font-bold text-black flex justify-center items-center gap-2"
          >
            Send
          </button>
        </form>
      </div>

    </div>
  )
}

export default Feedback
