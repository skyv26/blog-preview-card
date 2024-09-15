import Title from "antd/es/typography/Title";
import AuthorCard from "../author-card/AuthorCard";
import { useMyContext } from "../../MyContext";

const CardMeta: React.FC = () => {
  const { content } = useMyContext();

  return (
    <div className="flex flex-col gap-1">
      <Title level={3} className="tracking-tight font-figTree font-semibold text-[hsl(0,0%,7%)]">{content.title}</Title>
      <p className="text-base font-figTree font-medium text-[hsl(0,0%,42%)]">
        {content.description}
      </p>
      <AuthorCard />
    </div>
  );
};

export default CardMeta;
