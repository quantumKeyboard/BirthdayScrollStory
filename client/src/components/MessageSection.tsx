import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Wish } from "@shared/schema";

interface MessageSectionProps {
  wish: Wish;
  index: number;
}

export default function MessageSection({ wish, index }: MessageSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div 
      ref={ref}
      className="min-h-screen snap-start flex flex-col items-center justify-center p-8"
    >
      {index % 2 === 0 ? (
        <>
          <MessageContent wish={wish} isInView={isInView} />
          <PhotoContent wish={wish} isInView={isInView} />
        </>
      ) : (
        <>
          <PhotoContent wish={wish} isInView={isInView} />
          <MessageContent wish={wish} isInView={isInView} />
        </>
      )}
    </div>
  );
}

function MessageContent({ wish, isInView }: { wish: Wish; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-4xl text-center mb-8"
    >
      {wish.message}
      <div className="text-xl md:text-2xl mt-4 font-bold">- {wish.name}</div>
    </motion.div>
  );
}

function PhotoContent({ wish, isInView }: { wish: Wish; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <img 
        src={wish.photoUrl} 
        alt={`Photo by ${wish.name}`}
        className="w-full h-auto rounded-lg shadow-xl"
      />
    </motion.div>
  );
}
