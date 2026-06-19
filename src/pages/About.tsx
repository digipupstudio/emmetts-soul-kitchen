import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import logo from "@/assets/logo.png";

const About = () => {
  const { t } = useTranslation();

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
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t("aboutPage.title")}
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              {t("aboutPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={logo}
                alt="Ms. Emmett's Soul Food"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold mb-2">{t("aboutPage.ourStory")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("aboutPage.legacyTitle")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("aboutPage.storyParagraph1")}</p>
                <p>{t("aboutPage.storyParagraph2")}</p>
                <p>{t("aboutPage.storyParagraph3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Miss Emmett's Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>{t("aboutPage.missEmmettText")}</p>
              <p>{t("aboutPage.missEmmettText2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding gingham-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-bold text-xl mb-2 uppercase tracking-widest">{t("aboutPage.ourMission")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("aboutPage.missionTitle")}
            </h2>
            <p className="text-lg text-black font-bold">
              {t("aboutPage.missionDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-bold text-xl mb-2 uppercase tracking-widest">{t("aboutPage.difference")}</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              {t("aboutPage.differenceTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t("aboutPage.dailyHomemade"),
                description: t("aboutPage.dailyDesc"),
              },
              {
                title: t("aboutPage.qualityIngredients"),
                description: t("aboutPage.qualityDesc"),
              },
              {
                title: t("aboutPage.southernRecipes"),
                description: t("aboutPage.recipesDesc"),
              },
              {
                title: t("aboutPage.noShortcuts"),
                description: t("aboutPage.shortcutsDesc"),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md border-b-4 border-primary hover:shadow-xl transition-all group"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
