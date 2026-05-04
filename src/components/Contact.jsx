import { useState } from "react";
import { personalInfo } from "../mock";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("please fill all fields — i need to know who's saying hi");
      return;
    }
    setSending(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS environment variables are missing.");
      setSending(false);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        name: form.name,
        email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
        title: "New Portfolio Message"
      },
      publicKey
    )
    .then(() => {
      toast.success("message sent — i'll reply within 24h");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    })
    .catch((error) => {
      console.error(error);
      toast.error("something went wrong. please try again later.");
      setSending(false);
    });
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-32 bg-[#efe9dc] border-t border-[#d9d2c0]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6558]">
            — contact
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-[#1a1a1a] font-light">
            let&apos;s build something{" "}
            <span className="italic text-[#e85d4e]">together</span>.
          </h2>
          <p className="mt-6 text-[#2c2c2c] text-lg leading-relaxed max-w-md">
            Got a project, an idea, or just want to say hi? Drop me a line
            — I read everything and reply to most of it.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="link-underline block font-serif italic text-2xl text-[#1a1a1a]"
            >
              {personalInfo.email}
            </a>
            <div className="flex gap-5 mt-6">
              {Object.entries(personalInfo.socials).map(([k, v]) => (
                <a
                  key={k}
                  href={v}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-sm text-[#1a1a1a] hover:text-[#e85d4e]"
                >
                  {k}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-7 space-y-6 bg-[#f5f1e8] p-8 md:p-10 border border-[#1a1a1a]"
        >
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-[#6b6558] mb-2">
              name
            </label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="jane doe"
              className="bg-transparent border-0 border-b-2 border-[#1a1a1a]/30 rounded-none focus-visible:border-[#e85d4e] focus-visible:ring-0 px-0 text-lg font-serif"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-[#6b6558] mb-2">
              email
            </label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@cool.com"
              className="bg-transparent border-0 border-b-2 border-[#1a1a1a]/30 rounded-none focus-visible:border-[#e85d4e] focus-visible:ring-0 px-0 text-lg font-serif"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-[#6b6558] mb-2">
              message
            </label>
            <Textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="tell me about your idea..."
              className="bg-transparent border-0 border-b-2 border-[#1a1a1a]/30 rounded-none focus-visible:border-[#e85d4e] focus-visible:ring-0 px-0 text-base resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-[#f5f1e8] font-mono text-sm hover:bg-[#e85d4e] transition-colors duration-300 disabled:opacity-50"
          >
            {sending ? "sending..." : "send message"}
            <Send
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
