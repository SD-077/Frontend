import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <div className="card-body">{children}</div>
    </div>
  );
}
