import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SubscribeForm } from "./ui/subscribe-form";

export function Header() {
  return (
    <div className="md:fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
      <Link href="/" className="font-medium font-mono text-sm">
        Maine Contractors Directory
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <SubscribeForm group="newsletter" placeholder="Get latest updates" />
        </div>

        <Link
          href="/live"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <div className="font-semibold text-sm font-mono">
            <span className="relative ml-auto flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
          </div>
          <span>Live</span>
        </Link>

        <Link href="/learn" className="text-sm font-medium">
          Learn
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="hover:bg-transparent p-0 text-sm font-medium"
            >
              About
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
            </DialogHeader>

            <DialogDescription>
              It is my experience that it is often difficult to find a list of reputable local contractors for various services when needed.
              <br />
              <br />
              I decided to build this directory in the hopes that other folks may find it useful.
              <br />
              <br />
              If you have any questions or concerns feel free to reach out to me at rossi@pixelpunk.design
              <br />
              <br />
              This directory was forked from this open source template generously provided by Midday {" "}
              <a href="https://github.com/pontusab/cursor.directory" className="underline">
                available here
              </a>{" "}
              on GitHub.
              <br />
              <br />
              <br />
              <a href="https://github.com/pontusab/cursor.directory">
                <Button
                  className="w-full bg-white text-black rounded-full"
                  variant="outline"
                >
                  Submit
                </Button>
              </a>
              <div className="flex items-center space-x-1 mt-8 justify-center">
                <a href="https://pixelpunk.design" target="_blank">
                Made by PixelPunk Design
                </a>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
