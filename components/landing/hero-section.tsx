"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { FileText, Play, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Summarize your PDFs with AI.{" "}
              <Link href="/#pricing" className="font-semibold text-emerald-600">
                <span className="absolute inset-0" aria-hidden="true" />
                See pricing <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              instant summaries
            </span>{" "}
            of your PDF documents
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload your PDF and let our AI create a concise, accurate summary in
            seconds. Perfect for students, researchers, and professionals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <FileText className="mr-2 h-4 w-4" />
                Start Summarizing
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => setShowDemo(true)}
              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            >
              <Play className="mr-2 h-4 w-4" />
              See Demo
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showDemo} onOpenChange={setShowDemo}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Product Demo Video</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full bg-gray-900/60 text-white hover:bg-gray-900/80"
              onClick={() => setShowDemo(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tHl7qbn8CK8?autoplay=1"
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
