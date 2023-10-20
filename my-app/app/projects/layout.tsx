export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>{children}</div>
    </div>
  );
}
