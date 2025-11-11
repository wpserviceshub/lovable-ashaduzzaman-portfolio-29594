import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable WordPress Solutions for Enterprise",
      excerpt: "Learn how to architect WordPress applications that can handle high traffic and complex business requirements with proper caching, database optimization, and scalable hosting solutions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      category: "WordPress Development",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      tags: ["WordPress", "Enterprise", "Performance"]
    },
    {
      id: 2,
      title: "WooCommerce Performance Optimization Techniques",
      excerpt: "Discover advanced techniques to optimize WooCommerce stores for better performance, including database queries, image optimization, and caching strategies that boost conversion rates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-Commerce",
      publishDate: "March 10, 2024", 
      readTime: "12 min read",
      tags: ["WooCommerce", "Performance", "E-Commerce"]
    },
    {
      id: 3,
      title: "Modern JavaScript Patterns in WordPress Development",
      excerpt: "Explore how modern JavaScript frameworks and patterns can be integrated into WordPress development to create more interactive and engaging user experiences.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
      category: "JavaScript",
      publishDate: "March 5, 2024",
      readTime: "10 min read", 
      tags: ["JavaScript", "WordPress", "Frontend"]
    },
    {
      id: 4,
      title: "Creating Animated Interfaces with GSAP and WordPress",
      excerpt: "Master the art of creating stunning animations and interactive interfaces using GSAP in WordPress themes and plugins for enhanced user engagement.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      category: "Animation",
      publishDate: "February 28, 2024",
      readTime: "15 min read",
      tags: ["GSAP", "Animation", "UX Design"]
    },
    {
      id: 5,
      title: "Security Best Practices for WordPress Development",
      excerpt: "Comprehensive guide to implementing security best practices in WordPress development, from code security to server configuration and vulnerability prevention.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      category: "Security",
      publishDate: "February 20, 2024",
      readTime: "11 min read",
      tags: ["Security", "WordPress", "Best Practices"]
    },
    {
      id: 6,
      title: "The Future of Headless WordPress Development",
      excerpt: "Exploring the benefits and implementation strategies of headless WordPress architecture for modern web applications and API-driven development approaches.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Architecture",
      publishDate: "February 15, 2024",
      readTime: "13 min read",
      tags: ["Headless", "API", "Modern Web"]
    }
  ];

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
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
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

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <button className="btn-primary group">
            <span>View All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;