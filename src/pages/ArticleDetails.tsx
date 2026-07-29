import { useParams } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getArticleBySlug } from "../data/articles";

const ArticleDetails = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
            <h1 className="mb-3 text-3xl font-semibold text-foreground">Article not found</h1>
            <p className="text-muted-foreground">The article you are looking for could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-2 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <img src={article.image} alt={article.title} className="relative h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[440px]" />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-background/70 px-5 py-4 backdrop-blur-md sm:inset-x-10 sm:bottom-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Featured Article</p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">{article.title}</h2>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-primary">
            <span className="rounded-full bg-primary/10 px-3 py-1">{article.category}</span>
            <span className="flex items-center gap-1 text-muted-foreground"><Calendar className="h-4 w-4" />{article.publishDate}</span>
            <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" />{article.readTime}</span>
          </div>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{article.title}</h1>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                <Tag className="mr-1 inline h-3 w-3" />{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <p className="text-lg leading-8 text-muted-foreground">{article.content}</p>

          <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-6">
            <h2 className="mb-3 text-xl font-semibold text-foreground">Highlights</h2>
            <ul className="space-y-3 text-muted-foreground">
              {article.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetails;
