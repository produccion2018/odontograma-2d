import { createFileRoute } from "@tanstack/react-router";
import { Odontogram } from "@/components/odontogram/Odontogram";
import { FINDING_COLOR_VAR, FINDING_LABELS } from "@/lib/odontogram/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odontograma 2D · Cloud Esther" },
      {
        name: "description",
        content:
          "Odontograma 2D clínico con anatomía dental realista, notación FDI, dentición permanente y temporal, y registro de hallazgos por superficie.",
      },
      { property: "og:title", content: "Odontograma 2D · Cloud Esther" },
      {
        property: "og:description",
        content:
          "Registro de hallazgos por superficie sobre piezas anatómicas, notación FDI y resumen clínico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Odontograma 2D
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Dientes permanentes y temporales · Notación FDI
          </p>
        </header>

        <Odontogram
          tenantId="clinica-demo"
          patientId="paciente-1"
          patientName="paciente demo"
        />

        <section className="card-clinic p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-semibold">Referencias / Leyenda</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {(Object.keys(FINDING_LABELS) as (keyof typeof FINDING_LABELS)[]).map(
              (k) => (
                <div key={k} className="flex items-center gap-2 text-xs">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: FINDING_COLOR_VAR[k] }}
                  />
                  <span className="text-muted-foreground">{FINDING_LABELS[k]}</span>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
