import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { Wish } from "@shared/schema";

interface MessageSectionProps {
  wish: Wish;
  index: number;
  isHarsh?: boolean;
  onSecretClick?: () => void;
}

export default function MessageSection({ wish, index, isHarsh, onSecretClick }: MessageSectionProps) {
  const messageRef = useRef(null);
  const photoRef = useRef(null);
  const messageInView = useInView(messageRef, { 
    once: false,
    amount: 0.8
  });
  const photoInView = useInView(photoRef, {
    once: false,
    amount: 0.8
  });

  return (
    <>
      {/* Message Section */}
      <div 
        ref={messageRef}
        className="min-h-screen snap-start relative flex flex-col items-center justify-center p-8 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.05)' : 'rgba(var(--primary-rgb), 0.1)'}, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.1)' : 'rgba(var(--primary-rgb), 0.05)'})`
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: messageInView ? 1 : 0,
            y: messageInView ? 0 : 50
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-center mb-12 max-w-3xl mx-auto font-medium"
        >
          {wish.message}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: messageInView ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mt-6 font-bold text-primary/80"
          >
            - {wish.name}
          </motion.div>
        </motion.div>

        {isHarsh && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: messageInView ? 1 : 0 }}
            className="absolute bottom-8 right-8"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onSecretClick}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20"
            >
              23
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: messageInView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-primary/60" />
        </motion.div>
      </div>

      {/* Photo Section */}
      <div 
        ref={photoRef}
        className="h-screen w-screen snap-start relative flex flex-row items-center justify-between p-8 overflow-hidden"
        style={{
          background: `linear-gradient(90deg, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.1)' : 'rgba(var(--primary-rgb), 0.05)'}, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.05)' : 'rgba(var(--primary-rgb), 0.1)'})`
        }}
      >
        {/* Left side - Message */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: photoInView ? 1 : 0,
            x: photoInView ? 0 : -50
          }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-3xl md:text-4xl text-left max-w-xl mx-auto font-medium"
        >
          <div className="mb-6">{wish.message}</div>
          <div className="text-xl md:text-2xl font-bold text-primary/80">
            - {wish.name}
          </div>
        </motion.div>

        {/* Center - Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: photoInView ? 1 : 0,
            scale: photoInView ? 1 : 0.8
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <button 
            onClick={() => onSecretClick?.()}
            className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-sky-700"
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">See more</p>
          </button>
        </motion.div>

        {/* Right side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: photoInView ? 1 : 0,
            x: photoInView ? 0 : 50
          }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          {wish.photo && (
            <img
              src={wish.photo}
              alt={`Photo from ${wish.name}`}
              className="max-w-xl w-full h-auto rounded-lg shadow-xl"
            />
          )}
        </motion.div>
      </div>
    </>
  );
}