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
        className="min-h-screen snap-start relative flex flex-col items-center justify-center p-8 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.1)' : 'rgba(var(--primary-rgb), 0.05)'}, 
            ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.05)' : 'rgba(var(--primary-rgb), 0.1)'})`
        }}
      >
        <motion.div
          className="text-3xl md:text-5xl text-center mb-12 max-w-3xl mx-auto font-medium opacity-50"
        >
          {wish.message}
          <div className="text-xl md:text-2xl mt-6 font-bold text-primary/80">
            - {wish.name}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: photoInView ? 1 : 0,
            scale: photoInView ? 1 : 0.8
          }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl mt-8"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={wish.photoUrl} 
              alt={`Photo by ${wish.name}`}
              className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </>
  );
}