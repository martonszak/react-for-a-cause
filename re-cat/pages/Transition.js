import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
	scaleDown: {
    scale: 0.6,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.4
    }
  }
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-3">
      <AnimatePresence
        initial={false}
        exitBeforeEnter
      >
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;