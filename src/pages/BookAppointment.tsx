import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BookAppointment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 text-center max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-2">Book an Appointment</h1>
        <p className="text-gray-600 dark:text-gray-400">Our team is working on this feature. 🚀</p>
        <p className="text-gray-600 dark:text-gray-400">Stay tuned, we are launching soon!</p>

        {/* Loading Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="mt-4 flex items-center justify-center"
        >
          <Loader2 className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" />
        </motion.div>
      </motion.div>
    </div>
  );
}
