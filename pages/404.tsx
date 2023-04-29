import Link from "../components/core/Link";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";

function Error404() {
  return (
    <div>
      <Heading>Page Not Found</Heading>
      <Paragraph>
        Go back to the <Link href="/">homepage</Link>.
      </Paragraph>
    </div>
  );
}

export default Error404;
