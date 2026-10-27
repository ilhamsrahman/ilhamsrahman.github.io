// "Let's connect" box at the bottom of the home page
export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="relative overflow-hidden rounded-2xl bg-themecol-200 px-8 py-10 md:px-14 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
            data-aos="fade-up"
          >
            {/* Soft decorative circles */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-24 -bottom-24 w-48 h-48 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

            {/* Text */}
            <div className="relative text-center lg:text-left">
              <h3 style={{ fontFamily: 'Newsreader' }} className="text-3xl md:text-4xl font-bold text-white mb-2">Let&apos;s connect</h3>
              <p className="text-lg text-amber-100/90 max-w-md">
                Want to chat about a project, an idea or something I wrote? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Buttons */}
            <div className="relative flex flex-col sm:flex-row justify-center gap-3 shrink-0">
              <a
                href="https://www.linkedin.com/in/israhman/"
                target="_blank"
                rel="noreferrer"
                className="btn rounded-md bg-amber-50 text-themecol-200 hover:bg-white shadow-sm"
              >
                Message me on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
