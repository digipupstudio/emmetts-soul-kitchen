import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const LocationInfo = () => {
  const { t } = useTranslation();

  const hoursData = [
    { day: t("service.thursday"), hours: t("service.thursdayHours") },
    { day: t("service.friday"), hours: t("service.fridayHours") },
    { day: t("service.saturday"), hours: t("service.saturdayHours") },
    { day: t("service.sunday"), hours: t("service.sundayHours") },
    { day: t("service.monday"), hours: t("service.mondayHours") }
  ];

  return (
    <section className="section-padding bg-highlight/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 bg-white p-6 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg border-2 border-primary/10"
        >
          <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              682 Nashville Pike<br />
              Gallatin, Tennessee<br />
              <span className="text-primary mt-2 inline-block text-base sm:text-lg">{t("location.formerPanda")}</span>
            </p>
          </div>
        </motion.div>

        {/* Hours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 bg-white p-6 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg border-2 border-secondary/20"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t("service.hours")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {hoursData.map((item) => (
                <div key={item.day} className="text-center">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.day}</p>
                  <p className="text-gray-700 text-xs sm:text-sm">{item.hours}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-primary/20">
              <p className="text-center text-primary font-semibold text-sm sm:text-base leading-relaxed">
                {t("service.menuNotice")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7890123456789!2d-86.43!3d36.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864b8f8f8f8f8f9%3A0x0!2s682%20Nashville%20Pike%2C%20Gallatin%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="300"
            className="sm:h-[350px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emmett's Soul Kitchen Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationInfo;
