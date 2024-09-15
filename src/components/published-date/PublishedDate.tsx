import { useMyContext } from "../../MyContext";

const PublishedDate: React.FC = () => {
  const { content } = useMyContext();
  return (
    <p className="text-sm text-[hsl(0,0%,7%)] tracking-tight font-md">
      Published {content.date}
    </p>
  );
};

export default PublishedDate;
