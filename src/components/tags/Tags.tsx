import { List } from "antd";
import { useMyContext } from "../../MyContext";

interface TagObj {
  tag: string;
}

const Tags = () => {
  const { content } = useMyContext();

  const data: TagObj[] = [
    {
      tag: content.tag,
    },
  ];

  return (
    <ul className="flex gap-2">
      {data.map((item) => (
        <List.Item key={item.tag} className="list-none">
          <div>
            <strong className="bg-[#f4d04e] text-[hsl(0,0%,7%)] font-figTree tracking-tight py-[6px] px-[14px] text-sm rounded-[4px] font-semibold">
              {item.tag}
            </strong>
          </div>
        </List.Item>
      ))}
    </ul>
  );
};

export default Tags;
