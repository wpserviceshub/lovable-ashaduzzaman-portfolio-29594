import { slugify } from "../lib/slug";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  content: string;
  highlights: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Rise of AI: How Artificial Intelligence is Changing the World",
    excerpt: "Artificial intelligence (AI) is transforming the world at an unprecedented pace. From smart assistants and self-driving cars to medical breakthroughs and advanced robotics, AI is reshaping every aspect of our lives.",
    image: "/article/the-rise-of-al-how-artificial-intelligence-is-changing-the-world-thumbnail.jpg?w=400&h=250&fit=crop",
    category: "Technology",
    publishDate: "February 18, 2026",
    readTime: "8 min read",
    tags: ["AI", "Technology"],
    content: "Artificial intelligence is no longer a futuristic concept; it is a present-day force driving innovation across every industry. From automating repetitive tasks to unlocking new product experiences, AI is helping teams move faster and make smarter decisions. In this article, we look at how AI is shaping the modern world and what it means for the future of work, creativity, and everyday life.",
    highlights: ["AI adoption continues to grow across industries", "Automation is improving business efficiency", "New tools are changing how we create and solve problems"]
  },
  {
    id: 2,
    title: "Building a Colorful Pencil Drawing Tool with HTML5 Canvas",
    excerpt: "Create a colorful, interactive pencil drawing tool using HTML5 Canvas and JavaScript. Smooth strokes and dynamic rainbow effects bring creativity to life right in the browser.",
    image: "/article/2d-pencil-drawing-thumbnail.jpg?w=400&h=250&fit=crop",
    category: "Javascript",
    publishDate: "July 19, 2025",
    readTime: "12 min read",
    tags: ["HTML", "Javascript", "Pencil Drawing"],
    content: "HTML5 Canvas provides a great foundation for building interactive browser apps. By combining drawing logic with a few visual enhancements, you can create an experience that feels fun and expressive. This article walks through the creation of a simple yet engaging drawing tool you can use directly in the browser.",
    highlights: ["Canvas APIs make drawing simple", "Interactive tools can be built without external libraries", "Color and motion add personality to the experience"]
  },
  {
    id: 3,
    title: "Creating a Stylish Profile Card with a Wave Transition in HTML & CSS",
    excerpt: "A well-designed profile card can make a powerful first impression on your personal portfolio. In this post, I’ll walk you through how I designed and coded a modern, clean profile card with a wave transition using just HTML and CSS.",
    image: "/article/wave-card-using-html-css-style-thumbnail-1440-1080.jpg?w=400&h=250&fit=crop",
    category: "CSS",
    publishDate: "June 20, 2025",
    readTime: "10 min read",
    tags: ["CSS", "HTML"],
    content: "A polished profile card can elevate a portfolio or personal website instantly. By using layered gradients, smooth transitions, and creative motion, you can make a simple component feel memorable and modern. This article explores a simple design pattern that looks great and remains easy to implement.",
    highlights: ["CSS transitions can create a premium feel", "Small design choices make a big difference", "The layout remains lightweight and easy to adapt"]
  }
];

export const getArticleBySlug = (slug?: string) => {
  if (!slug) {
    return undefined;
  }

  return articles.find((article) => slugify(article.title) === slug);
};

export const getAllArticles = () => articles;

export default articles;
