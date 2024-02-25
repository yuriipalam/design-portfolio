import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex gap-1">
      <Loader2 width={32} className="animate-spin text-primary" />
      <p className="text-slate-800">Loading...</p>
    </div>
  );
}

export { Loader };
