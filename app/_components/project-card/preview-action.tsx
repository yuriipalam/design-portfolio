interface PreviewActionsProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function PreviewAction(props: PreviewActionsProps) {
  return (
    <div
      onClick={props.onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-slate-200 backdrop-blur-sm hover:cursor-pointer"
    >
      {props.children}
    </div>
  );
}
