import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main
      className={"h-screen w-screen flex flex-col items-center justify-center"}
    >
      <section className={"w-4/5 max-w-sm"}>{children}</section>
    </main>
  );
}

export default AuthLayout;
