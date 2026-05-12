import { slugifyHeading, type ContentBlock } from "@/components/blog/blogData";

interface ArticleBodyProps {
  content: ContentBlock[];
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#000048] prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#000048] prose-blockquote:border-l-4 prose-blockquote:border-[#0b60a0] prose-blockquote:not-italic prose-blockquote:text-gray-600 prose-ol:text-gray-700 prose-ul:text-gray-700 prose-a:text-[#0b60a0] prose-a:no-underline hover:prose-a:underline">
      {content.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={slugifyHeading(block.text ?? "")}
          className="scroll-mt-24 text-xl sm:text-2xl font-bold text-[#000048] mt-10 mb-4"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={slugifyHeading(block.text ?? "")}
          className="scroll-mt-24 text-lg sm:text-xl font-semibold text-[#000048] mt-8 mb-3"
        >
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul className="list-disc list-outside pl-6 mb-5 space-y-2">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="list-decimal list-outside pl-6 mb-5 space-y-2">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ol>
      );

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-[#0b60a0] pl-5 py-1 my-6 bg-blue-50/50 rounded-r-lg">
          <p className="text-lg sm:text-xl font-medium text-[#000048] italic leading-relaxed m-0">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );

    case "callout":
      return (
        <div className="my-6 flex gap-4 bg-[#0b60a0]/5 border border-[#0b60a0]/20 rounded-xl p-5">
          <div className="shrink-0 w-1 rounded-full bg-[#0b60a0]" />
          <p className="text-[#000048] font-medium text-base leading-relaxed m-0">
            {block.text}
          </p>
        </div>
      );

    case "divider":
      return <hr className="my-8 border-gray-200" />;

    default:
      return null;
  }
}
