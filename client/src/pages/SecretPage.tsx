import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Polaroid from "@/components/Polaroid";

export default function SecretPage() {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md w-full"
      >
        <Polaroid
          photo="https://source.unsplash.com/random/800x800?couple"
          message="To my favorite person in the world - you make every day special. Happy Birthday! ❤️"
          name="Your Secret Admirer"
          className="transform rotate-3 hover:rotate-0"
        />
      </motion.div>

      <Button
        variant="ghost"
        className="mt-8"
        onClick={() => setLocation('/')}
      >
        Back to Gallery
      </Button>
    </motion.div>
  );
}
