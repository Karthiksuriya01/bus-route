
import LoginForm from "@/components/authForms/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
          <div>
          <Card>
            <CardHeader className={'flex justify-center flex-col items-center'}>
              <CardTitle>Log In</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm/>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href={"/register"} className={"underline underline-offset-4"}>Register</Link>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
