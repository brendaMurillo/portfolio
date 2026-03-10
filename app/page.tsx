import Image from "next/image";
import FadeIn from "../components/FadeIn";
import ButtonLink from "../components/ButtonLink";

export default function HomePage() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
      <div className="space-y-6">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight">Brenda Viviana Murillo</h1>
          <p className="text-lg text-[var(--c2)]">Professional Title / Occupation</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-zinc-700">
            Short description (2–4 sentences). What you do. What you specialize in.
            What kind of roles/projects you like.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Me
            </ButtonLink>
            <ButtonLink href="/resume" variant="outline">
              Resume
            </ButtonLink>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <Image
            src="/profile.png"
            alt="Profile"
            width={600}
            height={600}
            className="h-auto w-full rounded-xl"
          />
          <p className="mt-3 text-sm text-zinc-600">
            Placeholder profile image (replace later).
          </p>
        </div>
      </FadeIn>
    </div>
  );
}