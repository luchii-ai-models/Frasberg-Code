import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { tools } from "../mock";

const STUDIOS = [
  { title: "Gallery", desc: "Everything you've created, with remix history", route: "/creator/gallery" },
  { title: "Luchii Agent", desc: "Chat with Luchii and run multi-step creative tasks", route: "/creator/agent" },
  { title: "Classic Studio", desc: "Platform studio: sound effects, dubbing, audiobooks, STT and more", route: "/create/classic" },
];

function ToolCard({ t, i }) {
  return (
    <Link to={t.route} data-testid={`creator-tool-${i}`}
      className={`group flex flex-col justify-between rounded-2xl border p-5 transition-colors hover:border-white/30 hover:bg-white/[0.06] ${t.featured ? "border-cyan-400/40 bg-cyan-400/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium">{t.title}</h3>
        <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
      <p className="mt-3 text-sm text-neutral-400">{t.desc}</p>
    </Link>
  );
}

export default function ToolsTab() {
  const all = [...tools.filter((t) => t.route !== "/create?tab=models"), ...STUDIOS];
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8" data-testid="creator-tools-tab">
      <h2 className="text-3xl font-semibold tracking-tight">Tools</h2>
      <p className="mt-2 text-neutral-400">Every Frasberg Creator tool in one place.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {all.map((t, i) => <ToolCard key={t.title} t={t} i={i} />)}
      </div>
    </section>
  );
}
