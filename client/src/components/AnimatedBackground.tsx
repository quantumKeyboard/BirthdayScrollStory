import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Background */}
      <div 
        className="w-full h-[200%] animate-gradient bg-gradient-to-tr from-[#00eff8] via-[#f800b4] via-[#ebf503] via-[#f123c1] via-[#02f6c1] via-[#00eff8] via-[#f800e1] via-[#9400f8] to-[#00eff8] bg-[length:400%_400%]"
      />

      {/* Floating Cigarettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-left whitespace-nowrap text-8xl opacity-15">
          {"🚬".repeat(50)}
        </div>
        <div className="animate-float-right mt-20 whitespace-nowrap text-8xl opacity-15">
          {"🚬".repeat(50)}
        </div>
        <div className="animate-float-left mt-40 whitespace-nowrap text-8xl opacity-15">
          {"🚬".repeat(50)}
        </div>
        <div className="animate-float-right mt-60 whitespace-nowrap text-8xl opacity-15">
          {"🚬".repeat(50)}
        </div>
      </div>
    </div>
  );
}