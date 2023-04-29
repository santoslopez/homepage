import Link from "../components/core/Link";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";
import YouTubeSubscribe from "../components/YouTubeSubscribe";

function Homepage() {
  return (
    <div>
      <Heading>Hello!</Heading>
      <Paragraph>
        I'm Brian, a software developer and educator living in Boston, Massachusetts.
      </Paragraph>
      <Paragraph>
        I run <Link bold={true} href="https://youtube.com/spanningtree">Spanning Tree</Link>,
        a video series teaching topics in computer science and mathematics.
      </Paragraph>
      <Paragraph>
        At <Link href="https://harvard.edu">Harvard University</Link>, I've created and taught courses about
        {" "}<Link bold={true} href="https://edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python">artificial intelligence</Link> and
        {" "}<Link bold={true} href="https://edx.org/course/cs50s-web-programming-with-python-and-javascript">web programming</Link>.
        I've also been a course head for <Link bold={true} href="https://cs50.harvard.edu">CS50</Link>,
        Harvard's introductory course in computer science,
        and a co-instructor for <Link bold={true} href="https://cs51.io">CS51</Link>,
        Harvard's course on abstraction and design in computing.
      </Paragraph>
      <Paragraph>
        I currently work at <Link bold={true} href="https://byteboard.dev">Byteboard</Link>,
        developing a more accurate and equitable process for engineering hiring.
        I've worked previously at <Link href="https://automattic.com">Automattic</Link>,
        {" "}<Link href="https://palantir.com">Palantir</Link>,
        and the <Link href="https://speechanddebate.org">National Speech and Debate Association</Link>.
      </Paragraph>
      <Paragraph>
        I graduated from Harvard College in 2019 with a degree in computer science and linguistics
        and from Harvard Graduate School of Education in 2021 with a master's degree in technology, innovation, and education.
      </Paragraph>
      <Paragraph>
        Contact me at <Link href="mailto:brian@brianyu.me">brian@brianyu.me</Link>.
      </Paragraph>

      <Heading level={2}>Spanning Tree</Heading>
      <YouTubeSubscribe />
      <Paragraph>
        <Link bold={true} href="https://youtube.com/spanningtree">Spanning Tree</Link> is a collection of educational videos
        I've written and animated primarily about topics in computer science.
      </Paragraph>
      <Paragraph>
      To get updates when new videos are published,
      {" "}<Link href="https://spanningtree.substack.com/">join the Spanning Tree mailing list</Link> or
      {" "}<Link href="https://www.youtube.com/channel/UCDzVUXiTr3hClI-zzCWbYzg?sub_confirmation=1">subscribe on YouTube</Link>.
      </Paragraph>
      <div className="py-3">
        <iframe src="https://spanningtree.substack.com/embed" width="480" height="320" style={{border: "1px solid #EEE", background: "white", width:"100%"}} frameBorder="0" scrolling="no"></iframe>
      </div>

      <Heading level={2}>Links</Heading>
      <ul className="list-disc list-inside">
        <li><Link href="mailto:brian@brianyu.me">Email</Link></li>
        <li><Link href="https://github.com/brianyu28">GitHub</Link></li>
        <li><Link href="https://www.linkedin.com/in/brian-yu/">LinkedIn</Link></li>
        <li><Link href="https://spanningtree.substack.com">Substack</Link></li>
        <li><Link href="https://youtube.com/spanningtree">YouTube</Link></li>
      </ul>
    </div>
  );
}

export default Homepage;
