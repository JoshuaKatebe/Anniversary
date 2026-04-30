"use client";

import { motion } from "framer-motion";

export default function AnniversaryPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[radial-gradient(ellipse_at_20%_30%,rgba(139,34,82,0.35)_0%,transparent_60%),radial-gradient(ellipse_at_80%_70%,rgba(201,168,76,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_50%_50%,rgba(26,10,46,0.9)_0%,#0a0612_100%)]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -14 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="relative mb-4"
        >
          <span className="text-[clamp(3rem,8vw,6rem)] drop-shadow-[0_0_30px_#c9a84c] drop-shadow-[0_0_60px_rgba(201,168,76,0.5)]">👑</span>
          <span className="absolute -top-4.5 -right-7 bg-linear-to-br from-gold via-gold-light to-gold text-deep font-cinzel text-[0.7rem] font-bold px-2.5 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(201,168,76,0.8)] badge-pulse">
            38 Years
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="font-cinzel text-[clamp(0.55rem,1.8vw,0.85rem)] tracking-[0.35em] text-gold uppercase mb-5"
        >
          A Celebration of Forever
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="font-playfair text-[clamp(2.2rem,8vw,6rem)] font-black leading-tight text-shimmer mb-1"
        >
          Happy Anniversary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          viewport={{ once: true }}
          className="font-playfair italic text-[clamp(1.5rem,5vw,3.5rem)] text-cream leading-normal mb-4"
        >
          <span className="text-gold-light font-normal font-bold">De King</span> & <span className="text-gold-light font-normal font-bold">De Queen</span><br />
          <small className="text-[0.6em] italic text-cream/50 font-light">(Mr & Mrs, always & forever)</small>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 my-5"
        >
          <div className="flex-1 w-30 h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
          <span className="text-[1.4rem] heartbeat drop-shadow-[0_0_8px_#ff6b9d]">💕</span>
          <div className="flex-1 w-30 h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          viewport={{ once: true }}
          className="font-cormorant italic text-[clamp(1rem,2.5vw,1.4rem)] text-cream/75 max-w-[600px] mb-8 leading-relaxed"
        >
          Thirty-eight glorious years of love, laughter,<br />
          and building a kingdom together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.7rem] tracking-[0.2em] text-gold uppercase"
        >
          <span>Scroll</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"></div>
        </motion.div>
      </section>

      {/* Ticker Section */}
      <div className="relative z-10 overflow-hidden bg-gold/8 border-y border-gold/20 py-3 my-8">
        <div className="flex gap-16 whitespace-nowrap animate-ticker w-max">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              <span className="font-cinzel text-[0.7rem] text-gold tracking-[0.2em] uppercase">❤️ Happy 38th Anniversary</span>
              <span className="font-cinzel text-[0.7rem] text-gold tracking-[0.2em] uppercase">👑 De King & De Queen</span>
              <span className="font-cinzel text-[0.7rem] text-gold tracking-[0.2em] uppercase">✨ 38 Years of Pure Love</span>
              <span className="font-cinzel text-[0.7rem] text-gold tracking-[0.2em] uppercase">💍 Together Forever</span>
              <span className="font-cinzel text-[0.7rem] text-gold tracking-[0.2em] uppercase">🥂 Here&apos;s To Many More</span>
            </div>
          ))}
        </div>
      </div>

      {/* Big Number Section */}
      <div className="relative z-10 bg-linear-to-br from-rose via-plum to-gold-dark py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg_width=%2260%22_height=%2260%22_viewBox=%220_0_60_60%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22none%22_fill-rule=%22evenodd%22%3E%3Cg_fill=%22%23c9a84c%22%3E%3Cpath_d=%22M36_34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6_34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6_4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <span className="relative font-cinzel text-[clamp(6rem,20vw,14rem)] font-bold leading-none bg-linear-to-b from-gold-light via-gold to-gold-dark bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(201,168,76,0.4)] block">
          38
          <span className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent bg-clip-text text-transparent">38</span>
        </span>
        <p className="font-playfair italic text-[clamp(1.2rem,3vw,2rem)] text-cream mt-[-0.5rem] tracking-[0.1em]">Years of Love</p>
        <p className="font-cormorant text-[0.9rem] text-cream/60 mt-2 tracking-[0.25em] uppercase">Est. 1987 · Still Reigning</p>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 max-w-[900px] mx-auto px-8 py-12"
      >
        {[
          { num: "13,870", label: "Days Together" },
          { num: "456", label: "Months of Love" },
          { num: "∞", label: "Memories Made" },
          { num: "1", label: "Soulmate Each" },
        ].map((stat, i) => (
          <div key={i} className="bg-linear-to-br from-gold/10 to-rose/10 border border-gold/20 rounded-sm p-8 text-center transition-all hover:-translate-y-1.5 hover:border-gold">
            <span className="font-cinzel text-3xl text-gold-light block">{stat.num}</span>
            <span className="font-cormorant text-[0.85rem] text-cream/60 tracking-[0.15em] uppercase mt-1 block">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Rings Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center py-12"
      >
        <div className="relative w-[140px] h-[80px]">
          <div className="absolute left-0 w-20 h-20 rounded-full border-6 border-gold shadow-[0_0_20px_rgba(201,168,76,0.5),inset_0_0_15px_rgba(201,168,76,0.15)] bg-linear-to-br from-gold/20 to-transparent animate-ring-glow"></div>
          <div className="absolute left-[60px] w-20 h-20 rounded-full border-6 border-gold shadow-[0_0_20px_rgba(201,168,76,0.5),inset_0_0_15px_rgba(201,168,76,0.15)] bg-linear-to-br from-rose/20 to-transparent animate-ring-glow delay-1000"></div>
        </div>
      </motion.div>

      {/* Message Section */}
      <section className="relative z-10 max-w-[900px] mx-auto px-8 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-cinzel text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-4 block"
        >
          A Message from the Prince
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-playfair text-[clamp(1.8rem,5vw,3rem)] font-bold text-cream mb-8 leading-tight"
        >
          To <em className="text-gold-light italic">De King</em> & <em className="text-gold-light italic">De Queen</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-plum/95 to-deep/95 border border-gold/30 rounded-sm p-12 max-w-[700px] mx-auto"
        >
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold opacity-50"></div>
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold opacity-50"></div>

          <p className="font-cormorant italic text-[clamp(1.1rem,2.5vw,1.45rem)] leading-relaxed text-cream/90 text-left">
            You two have always been my greatest example of what <strong className="text-gold-light font-normal not-italic">real love</strong> looks like —
            not the kind you see in movies, but the kind that shows up every single day.
            Steady. Warm. Unshakeable.<br /><br />

            Thirty-eight years ago, you both said <em className="not-italic text-gold-light">yes</em> to a lifetime together,
            and every day since, you&apos;ve proven why that was the best decision ever made.
            You built a home full of <strong className="text-gold-light font-normal not-italic">love, laughter,</strong> and every good thing
            that I carry with me.<br /><br />

            <strong className="text-gold-light font-normal not-italic">De King,</strong> your strength and wisdom have always made us feel safe.
            <strong className="text-gold-light font-normal not-italic">De Queen,</strong> your grace and love have made every room feel like home.
            Together, you two reign over our family like the royalty you truly are —
            and I wouldn&apos;t have it any other way.<br /><br />

            Here&apos;s to 38 years, and to all the beautiful years still ahead of you both.
            I love you more than words can ever say.
          </p>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="w-20 h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
            <span className="font-playfair italic text-xl text-gold-light">Joshua</span>
            <span className="font-cinzel text-[0.6rem] tracking-[0.3em] text-gold uppercase">Your Proud & Only Son 👑</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center p-12 pb-16 border-t border-gold/15"
      >
        <span className="text-[2rem] block mb-4 animate-bounce">💍</span>
        <p className="font-cormorant text-[0.9rem] text-cream/40 tracking-[0.2em] uppercase">De King & De Queen · 38 Years · Still Reigning · Always & Forever</p>
        <p className="mt-3 font-cormorant italic text-gold/40 text-[0.85rem]">With all my love — Joshua</p>
      </motion.footer>

      <style jsx>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        @keyframes ring-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.5), inset 0 0 15px rgba(201,168,76,0.15); }
          50% { box-shadow: 0 0 40px rgba(201,168,76,0.9), inset 0 0 25px rgba(201,168,76,0.3); }
        }
        .animate-ring-glow {
          animation: ring-glow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
