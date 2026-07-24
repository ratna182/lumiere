import Link from "next/link";


export default function Home() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">


      {/* Glow Background */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-amber-400/10
          blur-[180px]
        "
      />


      {/* HERO */}
      <section
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >

        <div className="max-w-4xl text-center">


          <p
            className="
              inline-block
              rounded-full
              border
              border-amber-400/40
              px-8
              py-3
              text-sm
              uppercase
              tracking-[0.5em]
              text-amber-400
            "
          >
            Lumiere Studio
          </p>


          <h1
            className="
              mt-10
              font-serif
              text-6xl
              text-white
              md:text-8xl
            "
          >
            Premium Digital
            <br />
            Wedding Invitation
          </h1>


          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-neutral-400
            "
          >
            Buat undangan digital elegan dengan animasi,
            musik, galeri, RSVP WhatsApp, dan pengalaman
            premium untuk hari spesial Anda.
          </p>



          <div
            className="
              mt-12
              flex
              justify-center
              gap-5
            "
          >

            <Link
              href="/demo/ratna-andi"
              className="
                rounded-full
                bg-amber-400
                px-12
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
                hover:bg-amber-300
              "
            >
              Open Demo
            </Link>


            <a
              href="#feature"
              className="
                rounded-full
                border
                border-white/20
                px-12
                py-4
                text-white
                transition
                hover:bg-white/10
              "
            >
              Explore
            </a>


          </div>


        </div>


      </section>




      {/* FEATURES */}

      <section
        id="feature"
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          gap-6
          px-6
          pb-24
          md:grid-cols-3
        "
      >


        {[
          {
            title: "Premium Design",
            text: "Luxury black gold style untuk undangan modern."
          },
          {
            title: "Interactive",
            text: "Musik, animasi, gallery dan RSVP WhatsApp."
          },
          {
            title: "Mobile Ready",
            text: "Optimal untuk HP tamu undangan."
          }
        ].map((item) => (

          <div
            key={item.title}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >

            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              {item.title}
            </h3>


            <p
              className="
                mt-4
                text-neutral-400
              "
            >
              {item.text}
            </p>


          </div>

        ))}


      </section>




      {/* DEMO CTA */}

      <section
        className="
          relative
          z-10
          pb-32
          text-center
        "
      >

        <p
          className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-amber-400
          "
        >
          Demo Preview
        </p>


        <h2
          className="
            mt-6
            font-serif
            text-5xl
            text-white
          "
        >
          Ratna & Andi
        </h2>


        <Link
          href="/demo/ratna-andi"
          className="
            mt-8
            inline-flex
            rounded-full
            bg-amber-400
            px-12
            py-4
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Open Wedding Demo
        </Link>


      </section>



    </main>
  );
}