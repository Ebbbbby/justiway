// EmailModal.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
type EmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Check both HTTP status and API response
        toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      onClose();
    } else {
      // The API returned an error, so we display the error message
      const errorMessage =
        data.message || data.error || "An unknown error occurred.";
         toast.error(`${errorMessage}`);
    }
  } catch (error) {
       toast.error(error instanceof Error ? error.message : "An unknown error occurred.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md relative"
      >

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>

    
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full text-[#222] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full text-[#222] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full text-[#222] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailModal;
