import Link from "next/link";

import Button from "@/components/button";

function LandingPage() {
  return (
    <main className="h-screen relative">
      <header className="px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link className="text-xl md:text-2xl font-semibold" href={"/"}>
            walkman
          </Link>
          <div className="flex items-center gap-x-4 md:gap-x-6">
            <Link href={"/sign-in"} passHref={true}>
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Link href={"/sign-up"} passHref={true}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="absolute bottom-6 md:bottom-10 px-6 md:px-8">
        <h1 className="text-7xl md:text-8xl sm:max-w-md md:max-w-xl font-extrabold leading-[0.95] md:leading-[0.9]">
          For the love of music.
        </h1>
        <p className="mt-2 md:mt-4 max-w-2xl font-semibold">
          Play over 100 million songs, always ad‑free. Hear next-level sound
          quality with Spatial Audio1 and lossless audio.2 Take centre stage
          with walkman. Access exclusive interviews and live concerts. And
          listen across all your devices, online or off. The music app for music
          lovers is here.
        </p>
      </section>
    </main>
  );
}

export default LandingPage;
