import Link from "next/link";

interface NavigationItemProps {
  name: string;
  link: string;
}

function NavigationItem(props: NavigationItemProps) {
  const { name, link } = props;
  return (
    <span className="text-gray-500 hover:text-blue-500 hover:underline">
      <Link href={link}>{name}</Link>
    </span>
  );
}

export default NavigationItem;
