import React from "react";

import Link from "next/link";

import { AudioLines, UserCircle } from "lucide-react";

function Sidebar() {
  return (
    <>
      <Link
        href={"/"}
        className={"font-semibold inline-flex items-center gap-x-2"}
      >
        <AudioLines size={18} />
        walkman
      </Link>
    </>
  );
}

function PlayerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={"h-screen w-screen flex"}>
      <aside className={"h-full w-60 flex flex-col items-center py-10"}>
        <Sidebar />
      </aside>
      <section className={"h-full w-full bg-stone-900"}>
        <header className={"flex items-center justify-end px-6 py-4"}>
          <UserCircle size={24} />
        </header>
        <div>{children}</div>
      </section>
    </main>
  );
}

export default PlayerLayout;
