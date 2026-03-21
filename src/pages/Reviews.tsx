import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    name: string;
    location: string;
    text: string;
    rating: number;
  }>;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-highlight text-highlight" />
              ))}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t("reviewsPage.title")}
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              {t("reviewsPage.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold mb-2">{t("testimonials.tagline")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              {t("testimonials.heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-secondary-foreground/5 rounded-xl p-6 relative"
              >
                <Quote className="w-10 h-10 text-accent/30 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>

                <p className="text-secondary-foreground/90 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-bold text-secondary-foreground">{testimonial.name}</p>
                  <p className="text-secondary-foreground/60 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="soul" size="lg" asChild>
              <a href="/contact">{t("reviewsPage.cta.contactBtn")}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.facebook.com/emmettskitchen" target="_blank" rel="noopener noreferrer">
                {t("reviewsPage.cta.reviewBtn")}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
