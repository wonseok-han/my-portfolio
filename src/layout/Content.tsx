import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <div className="container mx-auto h-full px-4 py-8">{children}</div>;
}
