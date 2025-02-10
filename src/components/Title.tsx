import { useEffect } from "react";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
