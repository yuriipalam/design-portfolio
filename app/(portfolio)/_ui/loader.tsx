import { Loader2 } from "lucide-react";
import classNames from "classnames";

interface LoaderProps {
  textColor: "dark" | "light";
}

function Loader(props: LoaderProps) {
  const textColor = classNames({
    "text-slate-800": props.textColor === "dark",
    "text-slate-200": props.textColor === "light"
  });

  return (
    <div className="flex gap-1">
      <Loader2 width={32} className="animate-spin text-primary" />
      <p className={textColor}>Loading...</p>
    </div>
  );
}

export { Loader };
