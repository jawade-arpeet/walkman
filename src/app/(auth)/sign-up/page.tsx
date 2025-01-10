import Link from "next/link";

import Input from "@/components/input";
import Button from "@/components/button";

function SignUpPage() {
  return (
    <>
      <Link href={"/"} className={"text-2xl font-semibold"}>
        walkman
      </Link>
      <h4 className={"text-2xl font-semibold mt-2"}>Get Started Now</h4>
      <p className={"font-medium text-sm -mt-0.5 text-stone-400"}>
        Enter your credentials to access your account
      </p>
      <form className={"flex flex-col items-center gap-y-1.5 mt-4"}>
        <Input placeholder={"Email"} type={"email"} name={"email"} />
        <Input placeholder={"Password"} type={"password"} name={"password"} />
        <Button className={"w-full rounded-md"} type={"submit"}>
          Create Account
        </Button>
      </form>
      <p className={"text-sm text-stone-400 mt-4"}>
        Already have account?{" "}
        <Link className={"text-stone-50 font-medium"} href={"/sign-in"}>
          Login
        </Link>
      </p>
    </>
  );
}

export default SignUpPage;
