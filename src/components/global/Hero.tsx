import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="pt-24">
      <div className="absolute inset-y-0 left-0 bg-gray-200 w-[1px] min-h-screen"></div>
      <div className="absolute inset-y-0 right-0 bg-gray-200 w-[1px] min-h-screen"></div>

      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-2 py-1 border rounded-full bg-[#EDF2F7] backdrop-blur-lg border-neutral-200 text-neutral-800 text-sm hover:bg-[#e1e6ea] transition-colors"
        >
          QSBS just got better in July 2025
          <ArrowRight className="size-4" />
        </a>

        <h1 className="text-6xl font-medium max-w-xl">
          Magically simplify accounting and taxes
        </h1>

        <p className="text-lg text-neutral-500 max-w-lg">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by 10:18pm.
        </p>

        <div className="flex gap-2 items-center">
          <Button className="bg-blue-500 text-shadow shadow text-white hover:bg-blue-600">
            Start free trial
          </Button>
          <Button variant={"ghost"} className="hover:bg-[#e1e6ea]">
            Start free trial
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <p className="text-xs text-neutral-400">
          Currently for US-based Delaware C-Corps.
        </p>
      </div>
    </div>
  );
}

export default Hero;
