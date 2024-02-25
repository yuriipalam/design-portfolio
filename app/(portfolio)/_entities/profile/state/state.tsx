"use client";

import { useEffect, useRef } from "react";
import { useProfileContactState } from "@/app/(portfolio)/_entities/profile";

function ClientSideProfileContactStateInitializer({
  name,
  email,
  resumeUrl,
  linkedinUrl
}: {
  name: string;
  email: string;
  resumeUrl: string;
  linkedinUrl: string;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      useProfileContactState.setState({
        name,
        email,
        resumeUrl,
        linkedinUrl
      });
      initialized.current = true;
    }
  }, [name, email, resumeUrl, linkedinUrl]); // Dependencies ensure this effect only runs if one of these props changes.

  return null;
}

export { ClientSideProfileContactStateInitializer };
