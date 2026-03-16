export default function ContactPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-16 py-20">
      <section className="card max-w-3xl w-full text-center">
        <h1 className="text-3xl font-semibold">Connect With Me</h1>

        <div className="mt-6 flex justify-center gap-8">
          <a
            href="https://github.com/brendaMurillo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/brenda-murillo-760465225"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="card max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/xwvrrrlb"
          method="POST"
          className="mt-8 flex flex-col gap-6"
        >
          <div>
            <label className="block mb-2 opacity-90">Name</label>
            <input
              type="text"
              name="name"
              defaultValue="Brenda Viviana Murillo"
              className="w-full rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 opacity-90">Email</label>
            <input
              type="email"
              name="email"
              defaultValue="bmurillo3@csub.edu"
              className="w-full rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 opacity-90">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-lg p-3 text-black"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}