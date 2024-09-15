import { Image, Row, Col } from "antd";
import CardImage from "../../assets/images/illustration-article.svg";
import CardMeta from "../card-meta/CardMeta";
import PublishedDate from "../published-date/PublishedDate";
import Tags from "../tags/Tags";

const MainCard: React.FC = () => {
  return (
    <div className="max-w-[380px] bg-white font-figTree text-left p-5 mt-[188px] !rounded-2xl border border-[hsl(0,0%,7%)] flex flex-col gap-6 shadow-[8px_7px_0_0] shadow-[hsl(0,0%,7%)]">
      <Image className="rounded-xl" src={CardImage} />
      <Row>
        <Col className="flex flex-col gap-4 py-1">
          <Tags />
          <PublishedDate />
          <CardMeta />
        </Col>
      </Row>
    </div>
  );
};
export default MainCard;
