"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
// "use client";

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// type RevealProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// export default function Reveal({ children, className }: RevealProps) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2, // trigger when 20% of element is visible
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible"); // animate in
//     } else {
//       controls.start("hidden"); // animate out
//     }
//   }, [controls, inView]);

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       initial="hidden"
//       animate={controls}
//       variants={variants}
//     >
//       {children}
//     </motion.div>
//   );
// }
