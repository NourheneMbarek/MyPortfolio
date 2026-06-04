export default function Certifications() {
  const certifications = [
    "Scrum Fundamentals Certified (SFC)",
    "Advanced React – Coursera",
    "React + Redux – Sololearn",
    "IBM Cloud Application Developer",
    "IBM Predictive Analytics Modeler",
    "CCNA 1 & CCNA 2",
    "Machine Learning with Python – Datacamp",
  ];

  return (
    <section id="certifications" className="mt-32 scroll-mt-32">
      <h2 className="font-semibold text-4xl mb-8">Certifications</h2>

      <ul className="grid md:grid-cols-2 gap-4">
        {certifications.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#1d1d20] p-4"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}