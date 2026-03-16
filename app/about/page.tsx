import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-12">
      <section className="card">
        <h1 className="text-3xl font-semibold">Name</h1>
        <p className="mt-4 opacity-90">
          Detailed description (placeholder sentence).
        </p>

        <p className="mt-6 opacity-90">Years of experience: X</p>

        <div className="mt-6">
          <Link href="/resume.pdf">Download Resume (PDF)</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Specializations</h2>
        <ul className="mt-4 list-disc pl-5 opacity-90">
          <li>Specialization</li>
          <li>Specialization</li>
          <li>Specialization</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Skills Overview</h2>
        <p className="mt-4 opacity-90">Short skills summary placeholder.</p>
      </section>
    </div>
  );
}