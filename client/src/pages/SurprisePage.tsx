import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function SurprisePage() {
  const [, setLocation] = useLocation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary flex flex-col items-center justify-center text-primary-foreground p-4"
    >
      <motion.h1 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-6xl md:text-8xl font-bold mb-8 text-center"
      >
        Happy Birthday Maama! 🎂
      </motion.h1>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-4xl text-center mb-12"
      >
        From your awesome friends! 🎉
      </motion.div>

      <Button
        variant="secondary"
        size="lg"
        onClick={() => setLocation('/')}
        className="text-xl"
      >
        Back to Gallery
      </Button>
    </motion.div>
  );
}
