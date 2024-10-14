function SectionCenter({
  children,
  classList,
}: {
  children: React.ReactNode;
  classList?: string;
}) {
  return <div className={`max-w-[1280px] ${classList}`}>{children}</div>;
}
export default SectionCenter;
