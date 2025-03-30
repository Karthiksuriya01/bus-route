
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import RegisterForm from "../../../components/authForms/RegisterForm";
import { Bold } from "lucide-react";



export default function Register() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
          <div>
          <Card>
            <CardHeader className={'flex justify-center flex-col items-center'}>
              <CardTitle className={'font-bold text-4xl text-sidebar-primary-foreground'}>Register</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm />
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href={'/login'} className={"underline underline-offset-4"}>Log In</Link>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
