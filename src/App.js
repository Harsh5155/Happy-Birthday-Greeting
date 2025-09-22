// src/App.js

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Model as CakeModel } from './CakeModel';

export default function App({ name, message, imageUrl }) {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);

  const renderStep = () => {
    switch (step) {
      case 1: return <Intro onNext={nextStep} />;
      case 2: return <Countdown onNext={nextStep} />;
      case 3: return <CakeScene3D name={name} onNext={nextStep} />;
      case 4: return <MessageCard name={name} message={message} onNext={nextStep} />;
      case 5: return <FinalSurprise imageUrl={imageUrl} />;
      default: return <Intro onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-700 to-red-600 text-white p-4 overflow-hidden">
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
}

// --- BUTTON COMPONENT ---
const AnimatedButton = ({ children, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`mt-10 px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-2xl shadow-xl transition-transform duration-200 z-50 ${className}`}
  >
    {children}
  </motion.button>
);

// --- INTRO ---
const Intro = ({ onNext }) => (
  <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7 }} className="text-center">
    <Confetti numberOfPieces={120} recycle={true} />
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider animate-pulse drop-shadow-lg">
      Something special is loading...
    </h1>
    <AnimatedButton onClick={onNext}>Click to Begin 🎉</AnimatedButton>
  </motion.div>
);

// --- COUNTDOWN ---
const Countdown = ({ onNext }) => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const nextStepTimer = setTimeout(onNext, 1200);
      return () => clearTimeout(nextStepTimer);
    }
  }, [count, onNext]);
  return (
    <motion.div key="countdown" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ type: "spring", stiffness: 100 }} className="text-center">
      <h1 className="text-4xl font-extrabold drop-shadow-lg">Your Special Day is Here!</h1>
      <p className="text-9xl mt-6 font-extrabold animate-bounce">{count > 0 ? count : "🎂"}</p>
    </motion.div>
  );
};

// --- 3D CAKE SCENE ---
const CakeScene3D = ({ name, onNext }) => (
  <motion.div key="cake" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="w-full h-full flex flex-col items-center justify-center relative">
    <Confetti numberOfPieces={400} recycle={false} />
    <div className="w-full h-96 md:h-[500px]">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.2}>
            <CakeModel scale={350} position={[0, -1.5, 0]} />
          </Float>
          <Environment preset="sunset" />
          <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
    <div className="text-center z-10 -mt-8 md:-mt-16">
      <p className="text-5xl font-extrabold drop-shadow-lg">Happy Birthday, {name}!</p>
      <AnimatedButton onClick={onNext}>Open Your Gift 💌</AnimatedButton>
    </div>
  </motion.div>
);

// --- MESSAGE CARD ---
const MessageCard = ({ name, message, onNext }) => (
  <motion.div key="message" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }} transition={{ duration: 0.8 }} className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl max-w-md z-50 text-center">
    <h1 className="text-3xl font-bold mb-4 text-purple-700">💌 A Message For You</h1>
    <p className="text-lg leading-relaxed">Dear {name}, {message}</p>
    <AnimatedButton onClick={onNext} className="bg-purple-600 text-white">One Last Surprise... ✨</AnimatedButton>
  </motion.div>
);

// --- FINAL SURPRISE ---
const FinalSurprise = ({ imageUrl }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <motion.div key="surprise" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center z-50">
      <AnimatePresence>
        {!isOpened ? (
          <motion.div key="giftbox" onClick={() => setIsOpened(true)} whileHover={{ scale: 1.1, rotate: 5 }} exit={{ scale: 3, opacity: 0, transition: { duration: 0.5 } }} className="w-48 h-48 bg-red-400 rounded-3xl shadow-2xl flex items-center justify-center text-8xl cursor-pointer">🎁</motion.div>
        ) : (
          <motion.div key="finalImage" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, duration: 0.8 }} className="text-center">
            <img src={imageUrl} alt="Surprise" className="rounded-2xl shadow-lg w-80 md:w-96" />
            <p className="mt-6 text-2xl font-semibold">Hope you have the best day ever! 🎉</p>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpened && <Confetti numberOfPieces={300} recycle={false} />}
    </motion.div>
  );
};


