import type { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Props {
  body: Document;
}

const BlogContent = ({ body }: Props) => {
  return (
    <article className="px-1 py-0 lg:px-8 lg:py-5" id="blog-post-content">
      {documentToReactComponents(body)}
    </article>
  );
};

export default BlogContent;