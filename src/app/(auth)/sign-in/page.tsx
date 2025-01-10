import Link from "next/link";

import Input from "@/components/input";
import Button from "@/components/button";

function SignInPage() {
  return (
    <>
      <Link href={"/"} className={"text-2xl font-semibold"}>
        walkman
      </Link>
      <h4 className={"text-2xl font-semibold tracking-tight mt-2"}>Login</h4>
      <p className={"text-sm text-stone-400"}>
        Enter your credentials to access your account
      </p>
      <form className={"flex flex-col items-center gap-y-1.5 mt-4"}>
        <Input placeholder={"Email"} type={"email"} name={"email"} />
        <Input placeholder={"Password"} type={"password"} name={"password"} />
        <Button className={"w-full rounded-md"} type={"submit"}>
          Login
        </Button>
      </form>
      <Link
        href="/forgot-password"
        className={"inline-block font-medium text-sm mt-4"}
      >
        Forgot Password?
      </Link>
      <p className={"text-sm text-stone-400"}>
        Don&#39;t have an account?{" "}
        <Link href={"/sign-up"} className={"font-medium text-stone-50"}>
          Create an account
        </Link>
      </p>
    </>
  );
}

export default SignInPage;
