import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/app/(portfolio)/_ui/dialog";
import { Button } from "@/app/(portfolio)/_ui/button";
import { Linkedin, Mail } from "lucide-react";
import { useProfileContactState } from "@/app/(portfolio)/_entities/profile";

function Navbar() {
  const name = useProfileContactState.getState().name;
  const email = useProfileContactState.getState().email;
  const linkedinUrl = useProfileContactState.getState().linkedinUrl;
  const resumeUrl = useProfileContactState.getState().resumeUrl;

  return (
    <nav className="mb-6 flex h-16 w-full flex-grow items-center justify-end">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href={resumeUrl}
            target="_blank"
            className="transition-colors duration-200 hover:text-primary"
          >
            My Resume
          </Link>
        </li>
        <li>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Contact</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[85%] sm:max-w-[425px]">
              <DialogHeader className="mb-2">
                <DialogTitle>Contact</DialogTitle>
                <DialogDescription>
                  Feel free to reach me out if you have any question
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-2">
                <div className="flex items-center gap-3">
                  <Mail />
                  <p>{email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin />
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {name} (click)
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
