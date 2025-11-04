"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
 const testimonials = [
  {
    name: "Chukwuemeka Okafor",
    initials: "CO",
    role: "Student, University of Birmingham",
    location: "Birmingham, United Kingdom",
    rating: 5,
    text: "Kampress made my dream of studying in the UK a reality. Their guidance through the visa process was exceptional, and the team was always available to answer my questions. I couldn't have done it without them!",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Adaeze Nwosu",
    initials: "AN",
    role: "Graduate Student, University of Toronto",
    location: "Toronto, Canada",
    rating: 5,
    text: "From application to arrival in Canada, Kampress Global Placement Services provided outstanding support. Their attention to detail and personalized approach made the entire process smooth and stress-free.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Oluwaseun Adebayo",
    initials: "OA",
    role: "MBA Student, Harvard University",
    location: "Cambridge, Massachusetts, USA",
    rating: 5,
    text: "I highly recommend Kampress! They helped me secure admission to my dream school in the USA. The career counseling sessions were invaluable in helping me choose the right program for my goals.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Ngozi Okoro",
    initials: "NO",
    role: "Undergraduate, University of Manchester",
    location: "Manchester, United Kingdom",
    rating: 5,
    text: "The professionalism and expertise of the Kampress team are unmatched. They guided me through every step, from choosing the right university to securing my student visa. Thank you for making my dreams come true!",
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Ibrahim Yusuf",
    initials: "IY",
    role: "Masters Student, University of Melbourne",
    location: "Melbourne, Australia",
    rating: 5,
    text: "Kampress exceeded my expectations in every way. Their knowledge of international education systems and visa requirements is impressive. I'm now studying in Australia thanks to their excellent service!",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Chiamaka Eze",
    initials: "CE",
    role: "PhD Candidate, University of Oxford",
    location: "Oxford, United Kingdom",
    rating: 5,
    text: "Working with Kampress was the best decision I made. They not only helped me get into Oxford but also provided invaluable advice on scholarships and funding. Their support continued even after I arrived in the UK!",
    gradient: "from-pink-500 to-pink-600",
  },
];


  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-orange-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-300/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-100 rounded-full border border-orange-300 mb-6"
          >
            <Quote className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              What Our Students Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Real stories from students we've helped achieve their study abroad dreams
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-orange-500" fill="currentColor" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Text Avatar */}
                <div
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {testimonial.initials}
                  </span>
                </div>

                {/* User Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-xs truncate">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-b-3xl`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 text-lg sm:text-xl font-medium mb-2">
            Ready to write your own success story?
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Join hundreds of Nigerian students studying abroad with our guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
