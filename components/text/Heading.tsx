interface HeadingProps {
  children: React.ReactNode;
  // 1 for largest heading, 2 for second largest
  level?: number;
}

function Heading(props: HeadingProps) {
  const { children, level } = props;
  const sizeClass = level === 2 ? "text-2xl" : "text-3xl";
  return (
    <div className={`${sizeClass} font-bold pt-5 pb-4`}>
      {children}
    </div>
  );
}

export default Heading;
