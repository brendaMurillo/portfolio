//reuseable  layout wrapper that centers content, limits page width, and applies consistent spacing across all pages
//Properties are passed from parent → child, read-only (cannot be changed inside the component), and used to display or configure something. 
export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}