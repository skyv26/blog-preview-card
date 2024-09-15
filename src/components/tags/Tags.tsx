import { List } from "antd";

interface TagObj {
  tag: string;
}

const data: TagObj[] = [
  {
    tag: "Learning",
  }
];

const Tags = () => {
  return (
    <div className="flex gap-2">
      {data.map((item) => (
        <List.Item className="list-none">
          <div>
            <strong className="bg-[#f4d04e] py-2 px-4 rounded-md font-bold">
              {item.tag}
            </strong>
          </div>
        </List.Item>
      ))}
    </div>
  );
};

export default Tags;
