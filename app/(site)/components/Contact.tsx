import { BiEnvelope } from "react-icons/bi";

export default function Contact() {
  return (
    <section id="contact" className="mt-32 scroll-mt-32">
      <h2 className="font-semibold text-4xl mb-4">Contact</h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Open for Full-Time, Part-Time and Internship opportunities in Software Development.
      </p>

      <a
        href="mailto:nourhene96mbarek@gmail.com"
        className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 px-4 py-2 hover:bg-purple-500 hover:text-white transition"
      >
        <BiEnvelope />
        Contact me
      </a>
    </section>
  );
}