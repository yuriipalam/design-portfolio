import { Typography } from "@/app/(portfolio)/_ui/typography";
import { Loader } from "@/app/(portfolio)/_ui/loader";

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader />
    </div>
  );
}
