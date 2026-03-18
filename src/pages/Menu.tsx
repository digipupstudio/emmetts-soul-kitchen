import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import friedCatfish from "@/assets/fried-catfish.png";
import meatloaf from "@/assets/meatloaf.png";
import bbqRibs from "@/assets/bbq-ribs.png";
import potRoast from "@/assets/pot-roast.png";

const Menu = () => {
  const { t } = useTranslation();

  const allMeatsArray = t("menuPage.allMeats", { returnObjects: true }) as string[];

  const soulFoodMeats = [
    {
      name: t("menuPage.meats.catfish"),
      description: t("menuPage.meats.catfishDesc"),
      featured: true,
      image: friedCatfish
    },
    {
      name: t("menuPage.meats.friedChicken"),
      description: t("menuPage.meats.chickenDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.meatloaf"),
      description: t("menuPage.meats.meatloafDesc"),
      featured: true,
      image: meatloaf
    },
    {
      name: t("menuPage.meats.chickenLivers"),
      description: t("menuPage.meats.liversDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.gizzards"),
      description: t("menuPage.meats.gizzardsDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.porkChops"),
      description: t("menuPage.meats.chopsDesc")
    },
    {
      name: t("menuPage.meats.bakedChicken"),
      description: t("menuPage.meats.bakedChickenDesc")
    },
    {
      name: t("menuPage.meats.ribTips"),
      description: t("menuPage.meats.ribTipsDesc"),
      image: bbqRibs
    },
    {
      name: t("menuPage.meats.oxtails"),
      description: t("menuPage.meats.oxtailsDesc"),
      image: "https://cdn.builder.io/api/v1/image/assets%2F8e76ff0f37864e249bbdbdd981b026fa%2Ff0beb89f147a416b9c12b0de136062b6?format=webp&width=800&height=1200"
    },
    {
      name: t("menuPage.meats.friedChops"),
      description: t("menuPage.meats.friedChopsDesc")
    },
  ];

  // Create individual card data for all meats
  const allMeatsCards = allMeatsArray.map((meat: string) => ({
    name: meat,
    description: ""
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              {t("menuPage.title")}
            </h1>
            <div className="bg-white/20 backdrop-blur-md inline-block px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-lg sm:rounded-2xl border border-white/30">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                {t("menuPage.subtitle")}
              </p>
              <div className="space-y-1 sm:space-y-2 text-center max-w-xs mx-auto">
                {(t("menuPage.pricing", { returnObjects: true }) as string[]).map((item, idx) => (
                  <p key={idx} className="text-base sm:text-lg md:text-xl font-semibold">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mt-3 font-medium italic">
                {t("menuPage.includesTaxes")}
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-75 mt-1 font-medium italic">
                {t("menuPage.dailyNotice")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soul Food Meats & More Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b-4 border-primary pb-3 sm:pb-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Meats & More
              </h2>
            </div>
          </motion.div>

          {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (xl) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {soulFoodMeats.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col h-full overflow-hidden rounded-lg shadow-warm border-2 transition-all hover:shadow-lg hover:scale-105 ${
                  item.featured
                    ? "bg-highlight/10 border-highlight"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* Image Container */}
                {item.image && (
                  <div className="w-full aspect-square sm:aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-4">
                  {/* Title with Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-heading font-black text-base sm:text-lg text-foreground">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="inline-flex items-center bg-primary text-white text-xs px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap">
                        {t("menuPage.meats.specialty")}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <Button
              variant="soul"
              size="lg"
              asChild
              className="px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              <Link to="/contact">{t("common.contactToOrder")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soul Food Sides Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b-4 border-primary pb-3 sm:pb-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Sides
              </h2>
            </div>
          </motion.div>

          {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (xl) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(t("menuPage.allSides", { returnObjects: true }) as string[]).map((side, index) => (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col h-full overflow-hidden rounded-lg shadow-warm border-2 border-secondary/30 bg-gradient-to-br from-secondary/20 to-primary/10 transition-all hover:border-secondary/70 hover:shadow-lg hover:scale-105"
              >
                <div className="flex flex-col flex-grow items-center justify-center p-4 min-h-32">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground text-center leading-tight">
                    {side}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
