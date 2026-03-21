import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Utensils, Calendar, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Catering = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-wood text-secondary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-highlight" />
              <Calendar className="w-8 h-8 text-highlight" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("cateringPage.title")}
            </h1>
            <p className="text-secondary-foreground/90 max-w-2xl mx-auto text-lg">
              {t("cateringPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t("cateringPage.contactTitle") || "Get in Touch for Catering"}
              </h2>
              <p className="text-secondary-foreground/80">
                {t("cateringPage.contactDesc") || "Contact us directly to discuss your catering needs and get a customized quote for your event."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <a
                href="tel:+16152308868"
                className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl hover:shadow-warm transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("cateringPage.phone") || "Phone"}</p>
                  <p className="text-secondary-foreground/80 text-sm">(615) 230-8868</p>
                </div>
              </a>

              <button
                onClick={() => window.location.href = 'mailto:Info@emmettsoulfood.com'}
                className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl hover:shadow-warm transition-shadow text-center cursor-pointer border-none bg-inherit"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("cateringPage.email") || "Email"}</p>
                  <p className="text-secondary-foreground/80 text-sm">Info@emmettsoulfood.com</p>
                </div>
              </button>

              <a
                href="https://www.facebook.com/emmettskitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl hover:shadow-warm transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Facebook</p>
                  <p className="text-secondary-foreground/80 text-sm">@emmettskitchen</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Catering;
