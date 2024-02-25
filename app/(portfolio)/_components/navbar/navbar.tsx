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

function Navbar() {
  return (
    <nav className="flex h-16 w-full flex-grow items-center justify-end mb-6">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="#"
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
                  <p>ademisyr@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin />
                  <Link
                    href="https://www.linkedin.com/in/ademi-syrgabaeva-336ab3214/"
                    target="_blank"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    Ademi Syrgabaeva (click)
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
