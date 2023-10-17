import { boldText } from "./teamAndDirectorData";

export const formatTextWithBoldWords = (text) => {

  const parts = text.split(new RegExp(`(${boldText.join("|")})`, "i"));
  return parts.map((part, index) => {
    const isBold = boldText.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    );
    return isBold ? <b key={index}>{part}</b> : part;
  });
};

// functie pt text-ul bolduit