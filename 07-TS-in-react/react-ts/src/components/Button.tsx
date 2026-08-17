type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "danger";
};

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-error",
};

export default function Button({ label, variant }: ButtonProps) {
  return <button className={`btn ${variantClasses[variant]}`}>{label}</button>;
}
