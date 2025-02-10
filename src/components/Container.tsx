export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container p-5 sm:p-5 md:p-10 mx-auto">{children}</div>;
}

