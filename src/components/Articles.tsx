import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/use-cms";

const Articles = () => {
  const { data: posts, isLoading, isError, error } = usePosts();
  const PLACEHOLDER_IMAGE = "/placeholder.svg";

  if (isLoading) {
    return (
      <section id="articles" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-lg font-medium text-foreground">Loading latest articles…</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="articles" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-lg font-medium text-destructive">Unable to load articles.</p>
          <p className="mt-2 text-muted-foreground">{error instanceof Error ? error.message : "Please try again later."}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">Latest Articles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, WordPress, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.slice(0, 3).map((article, index) => {
            const articleSlug = article.slug;

            return (
              <article
                key={article.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Link to={`/articles/${articleSlug}`}>
                    <img
                      src={article.image || PLACEHOLDER_IMAGE}
                      alt={article.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== PLACEHOLDER_IMAGE) {
                          target.src = PLACEHOLDER_IMAGE;
                        }
                      }}
                    />
                  </Link>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <Link to={`/articles/${articleSlug}`} className="group">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 transition-colors group-hover:text-primary leading-tight">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={`${article.id}-${tagIndex}`}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/articles/${articleSlug}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/articles" className="btn-primary group">
            <span>View All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;