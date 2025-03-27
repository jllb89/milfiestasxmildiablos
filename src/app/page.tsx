// app/page.tsx
import Form from "@/components/Form";
import Image from "next/image";

export const metadata = {
  title: "Mil Diablos Patrocinios | Haz un trato con el diablo",
  description:
    "¿Tienes una fiesta legendaria en mente? Mil Diablos puede patrocinarla. Aplica ahora y sé parte del fuego.",
  openGraph: {
    title: "Mil Diablos Patrocinios",
    description: "¿Tienes una fiesta legendaria en mente? Mil Diablos puede patrocinarla.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative w-full">
        {/* 🔥 Background Image */}
        <Image
          src="/header.webp"
          alt="Mil Diablos Header"
          width={1920}
          height={600}
          className="w-full object-cover h-[40vh]"
          priority
        />

        {/* 🔥 Top Bold Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontFamily: "Frontage",
              fontWeight: "regular",
              color: "#E80000",
            }}
          >
            MIL FIESTAS X MIL HISTORIAS X MIL DIABLOS
          </h2>
        </div>

        {/* 🔥 Logo near the bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Mil Diablos Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      <section className="flex items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-2xl p-6 shadow-lg">
          {/* 💀 SUPER POWERED H1 for SEO */}
          <h1
            className="text-2xl md:text-4xl font-semibold text-center text-white mb-2 leading-tight"
            style={{ fontFamily: "Frontage" }}
          >
            ¿Tienes una fiesta que arde en tus planes?
            <span className="block text-red-600">Haz un trato con Mil Diablos.</span>
          </h1>
        </div>
      </section>
      <section className="flex items-center justify-center p-2">
        <div className="w-full max-w-3xl shadow-lg">
          <h3
            className="text-xl md:text-xl font-regular text-center text-white mb-6 leading-relaxed"
            style={{ fontFamily: "Frontage" }}
          >
            ¿Tienes la fiesta, pero te falta el fuego?
            <br /><br />
            Mil Diablos está buscando a los anfitriones más atrevidos, los eventos más salvajes y las ideas más originales para prenderle fuego a la escena.
            <br /><br />
            Conviértete en uno de los seleccionados para recibir un <strong>patrocinio completo</strong>: botellas de Mil Diablos, artículos brandeados, activaciones visuales, props para tus invitados y todo el respaldo de una marca que no le teme al exceso (responsable, claro está).
            <br /><br />
            Queremos ser parte de tu historia.<br />
            Tú traes la energía, la gente, el concepto.<br />
            Nosotros ponemos la chispa que hace que todo explote.
          </h3>

        </div>
      </section>

      <section className="flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <Form />
        </div>
      </section>
    </main>
  );
}
