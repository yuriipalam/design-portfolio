export type { ProfileType } from "./types";
import { create } from "zustand";

interface ProfileContactState {
  name: string;
  email: string;
  linkedinUrl: string;
  resumeUrl: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setLinkedinUrl: (linkedin: string) => void;
  setResumeUrl: (resume: string) => void;
}

const useProfileContactState = create<ProfileContactState>()((set) => ({
  name: "",
  email: "",
  linkedinUrl: "",
  resumeUrl: "",
  setName: (name) => set({ name: name }),
  setEmail: (email) => set({ email: email }),
  setLinkedinUrl: (linkedin) => set({ linkedinUrl: linkedin }),
  setResumeUrl: (resume) => set({ resumeUrl: resume })
}));

export { useProfileContactState };
