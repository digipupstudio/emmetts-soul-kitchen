import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import MenuNotice from "@/components/home/MenuNotice";
import { Button } from "@/components/ui/button";
import friedCatfish from "@/assets/fried-catfish.png";
import meatloaf from "@/assets/meatloaf.png";
import bbqRibs from "@/assets/bbq-ribs.png";
import potRoast from "@/assets/pot-roast.png";
import friedChickenImg from "@/assets/fried-chicken.jpg";
import porkChopsImg from "@/assets/pork-chops.jpg";
import macCheeseImg from "@/assets/mac-cheese.jpg";

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
      featured: true,
      image: friedChickenImg
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
      featured: true,
      image: friedChickenImg
    },
    {
      name: t("menuPage.meats.gizzards"),
      description: t("menuPage.meats.gizzardsDesc"),
      featured: true,
      image: friedChickenImg
    },
    {
      name: t("menuPage.meats.porkChops"),
      description: t("menuPage.meats.chopsDesc"),
      image: porkChopsImg
    },
    {
      name: t("menuPage.meats.bakedChicken"),
      description: t("menuPage.meats.bakedChickenDesc"),
      image: friedChickenImg
    },
    {
      name: t("menuPage.meats.ribTips"),
      description: t("menuPage.meats.ribTipsDesc"),
      image: bbqRibs
    },
    {
      name: t("menuPage.meats.friedChops"),
      description: t("menuPage.meats.friedChopsDesc"),
      image: porkChopsImg
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
      <section className="bg-primary text-primary-foreground py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-around gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          >
            <div className="w-full lg:w-auto flex-shrink-0">
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black drop-shadow-lg leading-tight text-center lg:text-left">
                {t("menuPage.title")}
              </h1>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-md px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-6 md:py-8 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/30">
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-center">
                  {t("menuPage.subtitle")}
                </p>
                <div className="space-y-1 sm:space-y-2 text-center">
                  {(t("menuPage.pricing", { returnObjects: true }) as string[]).map((item, idx) => (
                    <p key={idx} className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold">
                      {item}
                    </p>
                  ))}
                </div>
                <p className="text-xs xs:text-sm sm:text-base opacity-90 mt-2 xs:mt-3 sm:mt-4 font-medium italic text-center">
                  {t("menuPage.includesTaxes")}
                </p>
                <p className="text-xs sm:text-sm opacity-75 mt-1 font-medium italic text-center">
                  {t("menuPage.dailyNotice")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Notice */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <MenuNotice />
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 border-b-4 border-primary pb-2 sm:pb-3 md:pb-4">
              <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Featured Dishes
              </h2>
            </div>
          </motion.div>

          {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (xl) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {soulFoodMeats.filter(item => item.featured).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col h-full overflow-hidden rounded-lg shadow-warm border-2 bg-highlight/10 border-highlight transition-all hover:shadow-lg hover:scale-105"
              >
                {/* Image Container */}
                {item.image && (
                  <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-3 sm:p-4 md:p-5">
                  {/* Title with Badge */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <h3 className="font-heading font-black text-sm xs:text-base sm:text-lg text-foreground">
                      {item.name}
                    </h3>
                    <span className="inline-flex items-center bg-primary text-white text-xs px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap">
                      {t("menuPage.meats.specialty")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dishes Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 border-b-4 border-primary pb-2 sm:pb-3 md:pb-4">
              <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                All Available Dishes
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
              <span className="font-semibold">Note:</span> Our menu is not fixed and changes regularly based on availability and daily preparations. Items listed below represent our typical offerings, but availability may vary. Always check our Facebook page for the current day's menu.
            </p>
          </motion.div>

          {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (xl) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {soulFoodMeats.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col h-full overflow-hidden rounded-lg shadow-warm border-2 bg-white border-gray-100 transition-all hover:shadow-lg hover:scale-105"
              >
                {/* Image Container */}
                {item.image && (
                  <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-3 sm:p-4 md:p-5">
                  {/* Title */}
                  <h3 className="font-heading font-black text-sm xs:text-base sm:text-lg text-foreground mb-2 sm:mb-3">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <Button
              variant="soul"
              size="lg"
              asChild
              className="px-4 xs:px-6 sm:px-8 md:px-12 py-3 xs:py-4 sm:py-6 md:py-8 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              <Link to="/contact">{t("common.contactToOrder")}</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Menu;
