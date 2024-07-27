import Link from "next/link";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20  md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutra;-300 max-w-lg mx-auto">
            Dive into our co,prehensive music courses and transform your musical
            journy today . Whether you're a beginner or looking to define your
            skills, join us to unlock your true potential.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900   border-neutral-200 dark:border-slate-800 text-teal-500 text-1xl hover:underline"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
