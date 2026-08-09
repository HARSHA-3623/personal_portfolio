type Props = {
  children: string;
};

const highlightedTerms = [
  "controlled worker concurrency",
  "3 payment gateways",
  "parallel processing",
  "zero data loss",
  "300K+",
  "400K+",
  "<200ms",
  "<800ms",
  "~2500ms",
  "~800ms",
  "Bull Queue",
  "3×",
  "4×",
  "10+",
];

const escapedTerms = highlightedTerms.map((term) =>
  term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);
const highlightPattern = new RegExp(`(${escapedTerms.join("|")})`, "gi");

export function HighlightedText({ children }: Props) {
  return children.split(highlightPattern).map((part, index) => {
    const isHighlight = highlightedTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );

    return isHighlight ? (
      <span key={`${part}-${index}`} className="font-semibold text-sky-300">
        {part}
      </span>
    ) : (
      part
    );
  });
}
