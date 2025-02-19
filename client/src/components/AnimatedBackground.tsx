import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="w-full h-[200%] animate-gradient bg-gradient-to-tr from-[#00eff8] via-[#f800b4] via-[#ebf503] via-[#02f6c1] via-[#00eff8] to-[#9400f8] bg-[length:400%_400%]"
      />
    </div>
  );
}
