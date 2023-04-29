import Image, { StaticImageData } from "next/image";
import Link from "./core/Link";
import Paragraph from "./text/Paragraph";

interface ProjectProps {
  title: string;
  url: string;
  img: StaticImageData;
  description: string;
  links?: ProjectLink[];
}

interface ProjectLink {
  name: string;
  url: string;
}

function Project(props: ProjectProps) {
  const { title, url, img, description, links } = props;
  return (
    <div className="flex flex-row">
      <div className="shrink-0">
        <Link href={url}>
          <Image width={128} height={128} className="rounded-2xl p-2" alt={title} src={img} />
        </Link>
      </div>
      <div className="p-2">
        <Link bold={true} href={url}>
          <h2 className="text-2xl">{title}</h2>
        </Link>
        <div>
          {description}
        </div>
        <div>
          {links?.map(link =>
            <button className="px-5 mr-3 rounded-full bg-sky-100">
              <Link underline={false} href={link.url}>{link.name}</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
