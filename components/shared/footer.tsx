"use client";

import { APP_NAME } from "@/lib/constants";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
        <div className="p-4">
          <div className="flex justify-center gap-3 text-sm">
            <Link href="page/conditions-of-use">Conditions of use</Link>
            <Link href="page/Privacy notice">Privacy notice</Link>
            <Link href="page/Help">Help</Link>
          </div>
          <div className="flex justify-center text-sm">
            <p> c 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
          </div>
          <div className="mt-8 flex justify-center text-sm text-gray-400">
            123 , Main Str, Anytown , CA , Zip 12345 | +1 123 456-1000
          </div>
        </div>
      </div>
    </footer>
  );
}
