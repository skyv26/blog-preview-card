import { Image, Row, Col, Button } from "antd";
import CardMeta from "../card-meta/CardMeta";
import PublishedDate from "../published-date/PublishedDate";
import Tags from "../tags/Tags";
import { useState } from "react";
import { useMyContext } from "../../MyContext";

const MainCard: React.FC = () => {
  const [isAakashMode, setAakashMode] = useState<boolean>(false);
  const { content, toggleContent } = useMyContext();

  // TypeScript typed event handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setAakashMode(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setAakashMode(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-[380px] bg-white font-figTree text-left p-5 !rounded-2xl border border-[hsl(0,0%,7%)] flex flex-col gap-6 shadow-[8px_7px_0_0] shadow-[hsl(0,0%,7%)]"
    >
      <Image className="rounded-xl" src={content.card_pic} alt="card component preview" />
      <Row>
        <Col className="flex flex-col gap-4 py-1">
          <Tags />
          <PublishedDate />
          <CardMeta />
        </Col>
      </Row>
      {isAakashMode && (
        <Button type="primary" onClick={toggleContent} className="text-white p-2 absolute top-2 right-2">
          {content.buttonText} Mode
        </Button>
      )}
    </div>
  );
};

export default MainCard;
