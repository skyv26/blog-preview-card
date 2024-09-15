import { createContext, ReactNode, useContext, useState } from "react";
import AakashImage from "./assets/images/aakash.jpeg";
import DefaultAvatar from "./assets/images/image-avatar.webp";
import DefaultCardPic from './assets/images/illustration-article.svg';
import AakashCardPic from './assets/images/aakash_pic.svg';

// Define the shape of the context
interface ContentContextProps {
  content: Content;
  toggleContent: () => void;
}

const formattedDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(new Date());

// Define the structure of your content
interface Content {
  tag: string;
  date: string;
  title: string;
  card_pic: string;
  description: string;
  avatar: string;
  name: string;
  buttonText: string;
}

// Create the Context
const ContentContext = createContext<ContentContextProps | undefined>(
  undefined
);

// Context Provider component
const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<Content>({
    tag: "Learning",
    date: "21 Dec 2023",
    title: "HTML & CSS foundations",
    card_pic: DefaultCardPic,
    description:
      "These languages are the backbone of every website, defining structure, content, and presentation.",
    avatar: DefaultAvatar,
    name: "Greg Hooper",
    buttonText: "Aakash",
  });

  const toggleContent = () => {
    setContent((prev) => ({
      tag: prev.tag === "Learning" ? "About Me" : "Learning",
      date: content.date === "21 Dec 2023" ? formattedDate : "21 Dec 2023",
      title:
        prev.title === "HTML & CSS foundations"
          ? "Aakash Verma"
          : "HTML & CSS foundations",
      description:
        prev.description ===
        "These languages are the backbone of every website, defining structure, content, and presentation."
          ? "Aakash Verma, a passionate software engineer working at Byteloom.io, a fintech product-based company."
          : "These languages are the backbone of every website, defining structure, content, and presentation.",
      avatar: prev.avatar.toLowerCase().includes("aakash")
        ? DefaultAvatar
        : AakashImage,
      name: prev.name === "Greg Hooper" ? "Aakash Verma" : "Greg Hooper",
      buttonText: prev.buttonText.includes("Aakash") ? 'Normal' : 'Aakash',
      card_pic: prev.card_pic.includes('illustration') ? AakashCardPic : DefaultCardPic
    }));
  };

  return (
    <ContentContext.Provider value={{ content, toggleContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the ContentContext
const useMyContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { MyContextProvider, useMyContext };
