import { motion } from "framer-motion";

function App() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-blue-600 uppercase">
            Dorspo
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
            Welcome to{" "}
            <span className="text-blue-600">DorsBill</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Invoicing, made simple.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
          <button className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-blue-600 hover:shadow-blue-500/20">
            Get Started
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default App;