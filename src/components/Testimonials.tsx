import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useTestimonials } from "../hooks/use-cms";
import { getHomePageSettings } from "@/services/cms";

const cleanText = (value: string) => value.replace(/<[^>]*>/g, "").trim();

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials = [], isLoading, isError } = useTestimonials();
  const { data: homeSettings } = useQuery({
    queryKey: ["cms", "home-settings"],
    queryFn: getHomePageSettings,
    staleTime: 1000 * 60 * 5,
  });

  const sectionTitle = homeSettings?.testimonials_section_title || "Client Testimonials";
  const sectionDescription = cleanText(homeSettings?.testimonials_content || "What clients say about working with me and the results we achieved together");
  const PLACEHOLDER_IMAGE = "/placeholder.svg";

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading || isError || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-testimonial-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-heading">{sectionTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {sectionDescription}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-testimonial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">{sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="bg-background rounded-2xl shadow-large p-8 md:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== PLACEHOLDER_IMAGE) {
                      target.src = PLACEHOLDER_IMAGE;
                    }
                  }}
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background border border-border rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background border border-border rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid (Mobile Hidden) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-16">
          {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 2)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== PLACEHOLDER_IMAGE) {
                        target.src = PLACEHOLDER_IMAGE;
                      }
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      &quot;{testimonial.content.slice(0, 120)}&quot;
                    </p>
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-primary text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;