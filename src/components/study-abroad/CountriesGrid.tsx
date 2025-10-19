"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CountriesGrid = () => {
  const countries = [
    { name: "Canada", image: "/images/study-abroad/canada.png", slug: "canada" },
    { name: "United States", image: "/images/study-abroad/us.png", slug: "usa" },
    { name: "United Kingdom", image: "/images/study-abroad/uk.png", slug: "uk" },
    { name: "Australia", image: "/images/study-abroad/australia.png", slug: "australia" },
    { name: "Netherlands", image: "/images/study-abroad/netherlands.png", slug: "netherlands" },
    { name: "France", image: "/images/study-abroad/france.png", slug: "france" },
    { name: "Ireland", image: "/images/study-abroad/ireland.png", slug: "ireland" },
    { name: "Mauritius", image: "/images/study-abroad/mauritus.png", slug: "mauritius" },
    { name: "Barbados", image: "/images/study-abroad/barbados.png", slug: "barbados" },
    { name: "Ghana", image: "/images/study-abroad/ghana.png", slug: "ghana" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-orange-300 via-orange-200 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-900">
            Explore by Country; Lets go
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group"
            >
              <Link href={`/study-abroad/${country.slug}`}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2 drop-shadow-lg">
                        Study & Work in {country.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-orange-300 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesGrid;
