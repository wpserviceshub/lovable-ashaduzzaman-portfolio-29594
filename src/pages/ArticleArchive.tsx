import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import articles from "../data/articles";
import { slugify } from "../lib/slug";

const ArticleArchive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Archive</p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">All Articles</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore everything from web development trends to practical UI and front-end techniques.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-large">
              <Link to={`/articles/${slugify(article.title)}`} className="block">
                <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
              </Link>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-primary">
                  <span className="rounded-full bg-primary/10 px-3 py-1">{article.category}</span>
                </div>
                <Link to={`/articles/${slugify(article.title)}`} className="group">
                  <h2 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>
                </Link>
                <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{article.publishDate}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime}</span>
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      <Tag className="mr-1 inline h-3 w-3" />{tag}
                    </span>
                  ))}
                </div>
                <Link to={`/articles/${slugify(article.title)}`} className="inline-flex items-center gap-2 font-medium text-primary">
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleArchive;
