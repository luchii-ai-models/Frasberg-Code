import { Link } from "react-router-dom";
import { capabilities, aiModels } from "../mock";

const ROUTES = { image: "/create?tab=create", video: "/creator/video", audio: "/creator/audio", "3d": "/creator/3d" };

export default function CapabilitiesTab() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8" data-testid="creator-capabilities-tab">
      <h2 className="text-3xl font-semibold tracking-tight">Capabilities</h2>
      <p className="mt-2 text-neutral-400">What Frasberg Creator can make for you.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {capabilities.map((c) => (
          <Link key={c.id} to={ROUTES[c.id] || "/create"} data-testid={`capability-${c.id}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/30">
            <div className="aspect-[16/7] overflow-hidden">
              <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-2" data-testid="capability-model-list">
        {aiModels.map((m) => <span key={m} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{m}</span>)}
      </div>
      <div className="mt-8 flex gap-3">
        <Link to="/creator/developers" data-testid="capability-api-docs-link" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90">API docs</Link>
        <Link to="/creator/about-luchii" data-testid="capability-about-luchii-link" className="rounded-full border border-white/20 px-5 py-2 text-sm transition-colors hover:bg-white/10">About Luchii</Link>
      </div>
    </section>
  );
}
