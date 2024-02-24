import { motion } from "framer-motion";

interface PreviewActionsProps {
  isVisible: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function PreviewAction(props: PreviewActionsProps) {
  return (
    <motion.button
      whileHover={{ translateY: -3, opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        translateY: props.isVisible ? 0 : 10,
        opacity: props.isVisible ? 1 : 0
      }}
      onClick={props.onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-slate-200 hover:cursor-pointer"
    >
      {props.children}
    </motion.button>
  );
}
