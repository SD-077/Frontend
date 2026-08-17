type DeleteButtonProps = {
  label: string;
  onDelete: () => void;
};

export default function DeleteButton({ label, onDelete }: DeleteButtonProps) {
  return (
    <button className="btn btn-error" onClick={onDelete}>
      {label}
    </button>
  );
}
