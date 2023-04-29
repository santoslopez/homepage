import Script from "next/script";

import Link from "../components/core/Link";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";
import YouTubeSubscribe from "../components/YouTubeSubscribe";
import YouTubeVideo from "../components/YouTubeVideo";

function Videos() {
  return (
    <div>
      <Heading>Spanning Tree</Heading>
      <Paragraph>
        An educational animated series on topics in computer science, available on <Link href="https://www.youtube.com/spanningtree">YouTube</Link>.
        For future topic suggestions, email <Link href="mailto:brian@spanningtree.me">brian@spanningtree.me</Link>.
      </Paragraph>
      <YouTubeSubscribe />
      <YouTubeVideo title="Minimax" url="https://www.youtube.com/embed/SLgZhpDsrfc" />
      <YouTubeVideo title="Dijkstra's Algorithm" url="https://www.youtube.com/embed/EFg3u_E6eHU" />
      <YouTubeVideo title="PageRank" url="https://www.youtube.com/embed/meonLcN7LD4" />

      <Heading>Harvard</Heading>
      <Paragraph>
        My course on artificial intelligence with Python at Harvard Extension School and <Link href="http://cs50.edx.org/ai">edX</Link>,
        produced by <Link href="https://cs50.harvard.edu/ai/2020">CS50</Link>.
      </Paragraph>
      <YouTubeVideo title="Artificial Intelligence" url="https://www.youtube.com/embed/WbzNRTTrX0g?list=PLhQjrBD2T382Nz7z1AEXmioc27axa19Kv" />
      <Paragraph>
        My course on web programming with Python and JavaScript at Harvard Extension School and <Link href="http://cs50.edx.org/web">edX</Link>,
        produced by <Link href="https://cs50.harvard.edu/web/2020">CS50</Link>.
      </Paragraph>
      <YouTubeVideo title="Web Programming" url="https://www.youtube.com/embed/zFZrkCIc2Oc?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu" />
      <Paragraph>
        My video series on abstraction and design in computation, based on the <Link href="https://book.cs51.io">textbook by Stuart Shieber</Link>.
      </Paragraph>
      <YouTubeVideo title="Abstraction and Design" url="https://www.youtube.com/embed/3jvq_bF3iVM?list=PLxA7uoRZbzXlW0XjbtuWow6PmPHe4vU7p" />
    </div>
  );
}

export default Videos;
