import "./ManageAbsent.css";

export default function ManageAbsentWrapper({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="manageAbsent">
      {children}
    </div>
  )
}
