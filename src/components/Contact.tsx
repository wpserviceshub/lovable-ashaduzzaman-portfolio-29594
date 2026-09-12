import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { getHomePageSettings, submitContactForm } from "@/services/cms";

const fallbackContactContent = {
  sectionTitle: "Get In Touch",
  sectionDescription: "Ready to start your next project? Let's discuss how I can help bring your vision to life",
  infoTitle: "Let's Start a Conversation",
  infoDescription: "<p>I'm always interested in hearing about new projects and opportunities. Whether you have a specific project in mind or just want to explore possibilities, feel free to reach out. I'd love to hear from you!</p><p>With 10+ years of experience in WordPress development and a track record of successful international collaborations, I'm confident we can create something amazing together.</p>",
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });

  const { data: homeSettings } = useQuery({
    queryKey: ["cms", "home-settings"],
    queryFn: getHomePageSettings,
    staleTime: 1000 * 60 * 5,
  });

  const contactContent = {
    sectionTitle: homeSettings?.contact_section_title || fallbackContactContent.sectionTitle,
    sectionDescription: homeSettings?.contact_section_description || fallbackContactContent.sectionDescription,
    infoTitle: homeSettings?.contact_info_title || fallbackContactContent.infoTitle,
    infoDescription: homeSettings?.contact_info_description || fallbackContactContent.infoDescription,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm({
        ...formData,
        honeypot: ""
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Message could not be sent",
        description: error instanceof Error ? error.message : "Please try again shortly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mukul.ashad@gmail.com",
      href: "mailto:mukul.ashad@gmail.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+880 1724 639919",
      href: "tel:+8801724639919"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bogura, Bangladesh",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/mukul.ashad",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/mukul531410",
      color: "hover:text-sky-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mukul531410/",
      color: "hover:text-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-ashaduzzaman-978727410/",
      color: "hover:text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mukul531410",
      color: "hover:text-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">{contactContent.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contactContent.sectionDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              {contactContent.infoTitle}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div
                className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: contactContent.infoDescription }}
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-background border border-border rounded-lg hover:shadow-medium transition-all duration-200 hover:-translate-y-1 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-large p-8 border border-border">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group justify-center"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Response Time:</strong> I typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;