import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MessageSection from "@/components/MessageSection";
import Polaroid from "@/components/Polaroid";
import AnimatedBackground from "@/components/AnimatedBackground";
import { wishes } from "@/lib/data";

export default function BirthdayPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [, setLocation] = useLocation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0.95) {
        setShowGallery(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]);

  return (
    <div className="relative">
      <AnimatedBackground />

      <div 
        ref={containerRef} 
        className="relative min-h-screen"
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          height: "100vh"
        }}
      >
        {wishes.map((wish, index) => (
          <MessageSection 
            key={index} 
            wish={wish} 
            index={index} 
            isHarsh={wish.name === "Harsh"}
            onSecretClick={() => setLocation('/secret')}
          />
        ))}

        <motion.div 
          style={{ opacity }}
          className="min-h-screen flex flex-col items-center justify-center p-8 snap-start backdrop-blur-sm bg-white/10"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            A Gallery of Memories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-7xl mx-auto">
            {wishes.map((wish, index) => (
              <Polaroid 
                key={index}
                photo={wish.photoUrl}
                message={wish.message}
                name={wish.name}
                delay={index * 0.2}
              />
            ))}
          </div>

          <Button
            size="lg"
            className="mt-12 text-xl px-8 py-6 bg-white/90 hover:bg-white text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setLocation('/surprise')}
          >
            Click for a Surprise! 🎉
          </Button>
        </motion.div>
      </div>
    </div>
  );
}