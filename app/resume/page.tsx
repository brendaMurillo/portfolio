import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center gap-12">
      <section className="card">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <p className="mt-4 opacity-90">Professional summary (placeholder).</p>
        <div className="mt-6">
          <Link href="/resume.pdf">Download PDF</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <p className="mt-4 opacity-90">Skills list placeholder.</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-4 opacity-90">School / Degree / Year placeholder.</p>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="mt-4 list-disc pl-5 opacity-90">
          <li>Work/project/leadership item</li>
          <li>Work/project/leadership item</li>
        </ul>
      </section>
    </div>
  );
}