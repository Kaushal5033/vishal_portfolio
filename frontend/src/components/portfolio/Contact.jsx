import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { PROFILE } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I'll get back within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Could not send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24 md:py-32" data-testid="contact-section">
      <Toaster theme="dark" position="bottom-right" richColors />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          09 — Get in Touch
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-8xl"
            >
              Let's build something <span className="text-[#F59E0B]">remarkable</span>.
            </motion.h2>

            <div className="mt-12 space-y-6">
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid="contact-email-link"
                className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors hover:border-[#F59E0B]"
              >
                <Mail size={18} className="text-[#F59E0B]" />
                <span className="font-body text-base text-white/80 group-hover:text-white md:text-lg">
                  {PROFILE.email}
                </span>
                <ArrowUpRight size={16} className="ml-auto text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F59E0B]" />
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                data-testid="contact-phone-link"
                className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors hover:border-[#F59E0B]"
              >
                <Phone size={18} className="text-[#F59E0B]" />
                <span className="font-body text-base text-white/80 group-hover:text-white md:text-lg">
                  {PROFILE.phone}
                </span>
                <ArrowUpRight size={16} className="ml-auto text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F59E0B]" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin-link"
                className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors hover:border-[#F59E0B]"
              >
                <Linkedin size={18} className="text-[#F59E0B]" />
                <span className="font-body text-base text-white/80 group-hover:text-white md:text-lg">
                  LinkedIn
                </span>
                <ArrowUpRight size={16} className="ml-auto text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F59E0B]" />
              </a>
              <div className="flex items-center gap-4 py-4">
                <MapPin size={18} className="text-[#F59E0B]" />
                <span className="font-body text-base text-white/80 md:text-lg">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <form
              onSubmit={onSubmit}
              className="border border-white/10 bg-[#141414] p-8 md:p-10"
              data-testid="contact-form"
            >
              <div className="font-body text-xs uppercase tracking-[0.3em] text-white/40">Drop a line</div>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">Start a conversation</h3>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    data-testid="contact-input-name"
                    placeholder="Your full name"
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 font-body text-base text-white placeholder-white/30 focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    data-testid="contact-input-email"
                    placeholder="you@company.com"
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 font-body text-base text-white placeholder-white/30 focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    data-testid="contact-input-subject"
                    placeholder="What's this about?"
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 font-body text-base text-white placeholder-white/30 focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    data-testid="contact-input-message"
                    rows={4}
                    placeholder="Tell me about your project, role, or opportunity..."
                    className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent py-3 font-body text-base text-white placeholder-white/30 focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit-btn"
                className="group mt-10 flex w-full items-center justify-between border border-[#F59E0B] bg-[#F59E0B] px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-black transition-all hover:bg-transparent hover:text-[#F59E0B] disabled:opacity-50"
              >
                <span>{submitting ? "Sending..." : "Send message"}</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
