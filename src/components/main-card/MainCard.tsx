import { Image } from "antd";
import CardImage from "../../assets/images/illustration-article.svg";
import Tags from "../tags/Tags";

const MainCard: React.FC = () => {
  return (
    <div className="w-[380px] bg-white p-3 py-5 !rounded-2xl border border-slate-950 flex flex-col gap-7">
      <Image className="rounded-xl" src={CardImage} />
      <Tags />
    </div>
  );
};
export default MainCard;
