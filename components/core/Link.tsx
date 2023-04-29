import NextLink from "next/link";

interface LinkProps {
  bold?: boolean;
  underline?: boolean;
  children: React.ReactNode
  href: string;
}

function Link(props: LinkProps) {
  const { bold, children, href, underline } = props;
  return (
    <NextLink className={`text-blue-500 ${underline !== false && "hover:underline"} ${bold === true && 'font-bold'}`} href={href}>
      {children}
    </NextLink>
  );
}

export default Link;
