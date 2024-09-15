import Title from "antd/es/typography/Title";
import AuthorCard from "../author-card/AuthorCard";

const CardMeta: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <Title level={3} className="tracking-tight text-[hsl(0,0%,7%)]">HTML & CSS foundations</Title>
      <p className="text-base text-[hsl(0,0%,42%)]">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <AuthorCard />
    </div>
  );
};

export default CardMeta;
