import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolaroidProps {
  photo: string;
  message: string;
  name: string;
  delay?: number;
  className?: string;
}

export default function Polaroid({ photo, message, name, delay = 0, className }: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn(
        "bg-white p-4 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-300",
        className
      )}
    >
      <div className="aspect-square mb-4 overflow-hidden">
        <img 
          src={photo} 
          alt={`Photo by ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm mb-2 font-handwriting">{message}</p>
      <p className="text-right text-sm font-bold">- {name}</p>
    </motion.div>
  );
}
