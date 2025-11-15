import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.warn("Date formatting error:", error);
    return dateString;
  }
};

export const extractDescription = (content: string, maxLength: number = 120): string => {
  if (!content) return "";

  const lines = content.split("\n").filter((line) => line.trim() !== "");

  const descriptionLines = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line || line.startsWith("#")) continue;

    const cleanLine = line
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/^\s*[-*+]\s+/, "")
      .replace(/^\s*\d+\.\s+/, "")
      .trim();

    if (cleanLine) {
      descriptionLines.push(cleanLine);
    }

    if (descriptionLines.join(" ").length >= maxLength) break;
  }

  if (descriptionLines.length === 0) {
    return "No preview available.";
  }

  const fullDescription = descriptionLines.join(" ");

  if (fullDescription.length <= maxLength) {
    return fullDescription;
  }

  const sentences = fullDescription.split(/[.!?]/);
  if (sentences[0] && sentences[0].length <= maxLength) {
    return sentences[0].trim() + "...";
  }

  const words = fullDescription.split(" ");
  let truncated = "";
  for (const word of words) {
    if ((truncated + word).length > maxLength - 3) break;
    truncated += (truncated ? " " : "") + word;
  }

  return truncated + "...";
};
