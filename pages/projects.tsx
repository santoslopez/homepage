import Project from "../components/Project";
import Heading from "../components/text/Heading";
import Link from "../components/core/Link";

import spanningTree from "../public/assets/images/projects/spanning-tree.png";
import streamline from "../public/assets/images/projects/streamline.png";
import classroometrics from "../public/assets/images/projects/classroometrics.png";
import tenacity from "../public/assets/images/projects/tenacity.png";
import jeopardy from "../public/assets/images/projects/jeopardy.png";
import holyoke from "../public/assets/images/projects/holyoke.png";
import Paragraph from "../components/text/Paragraph";

function Projects() {
  return (
    <div>
      <Heading>My Projects</Heading>
      <Project
        title="Spanning Tree"
        img={spanningTree}
        description="A video series about computer science and mathematics"
        url="https://spanningtree.me"
        links={[
          {name: "YouTube", url: "https://youtube.com/spanningtree"},
          {name: "Substack", url: "https://spanningtree.substack.com"},
        ]}
      />
      <Project
        title="Streamline"
        img={streamline}
        description="A free, open-source text expander for macOS"
        url="https://streamline.brianyu.me"
        links={[
          {name: "GitHub", url: "https://github.com/brianyu28/streamline"},
          {name: "Download", url: "https://github.com/brianyu28/streamline/releases/latest/download/Streamline.app.zip"},
        ]}
      />
      <Project
        title="Classroometrics"
        img={classroometrics}
        description="A live classroom feedback tool for teachers and students"
        url="https://classroometrics.com/"
        links={[
          {name: "GitHub", url: "https://github.com/brianyu28/classroometrics"},
        ]}
      />
      <Project
        title="Tenacity"
        img={tenacity}
        description="An interactive game about computational thinking"
        url="https://tenacity.brianyu.me/"
        links={[
          {name: "GitHub", url: "https://github.com/brianyu28/tenacity"},
        ]}
      />
      <Project
        title="Jeopardy Player"
        img={jeopardy}
        description="A web app for creating and playing custom trivia games"
        url="https://jeopardy.brianyu.me/"
        links={[
          {name: "GitHub", url: "https://github.com/brianyu28/jeopardy"},
        ]}
      />
      <Project
        title="Holyoke"
        img={holyoke}
        description="A macOS app for viewing and editing chess games"
        url="https://github.com/brianyu28/holyoke"
        links={[
          {name: "GitHub", url: "https://github.com/brianyu28/holyoke"},
        ]}
      />
      <Paragraph>
        You can also find my other projects on <Link href="https://github.com/brianyu28">GitHub</Link>.
      </Paragraph>
    </div>
  );
}

export default Projects;
