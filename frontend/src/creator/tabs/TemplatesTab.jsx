import { Link } from "react-router-dom";
import { IMAGE_PRESETS, VIDEO_PRESETS, MUSIC_PRESETS, MODEL3D_PRESETS } from "../presets";
import { REMIX_PRESETS } from "../lib/promptKit";

const GROUPS = [
  { id: "image", label: "Image", list: IMAGE_PRESETS, to: (p) => `/create?tab=create&prompt=${encodeURIComponent(p.prompt)}${p.style ? `&style=${p.style}` : ""}` },
  { id: "remix", label: "Photo edits", list: REMIX_PRESETS, to: (p) => `/create?tab=create&tool=edit&prompt=${encodeURIComponent(p.prompt)}` },
  { id: "video", label: "Video", list: VIDEO_PRESETS, to: () => "/creator/video" },
  { id: "music", label: "Music", list: MUSIC_PRESETS, to: () => "/creator/audio" },
  { id: "3d", label: "3D", list: MODEL3D_PRESETS, to: () => "/creator/3d" },
];

export default function TemplatesTab() {
  return (
    <section className="mx-auto max-w-[1400px] space-y-12 px-5 py-12 md:px-8" data-testid="creator-templates-tab">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Templates</h2>
        <p className="mt-2 text-neutral-400">One-tap starting points. Pick one and it opens ready to go.</p>
      </div>
      {GROUPS.map((g) => (
        <div key={g.id} data-testid={`template-group-${g.id}`}>
          <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">{g.label}</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(g.list || []).map((p) => (
              <Link key={p.id || p.label} to={g.to(p)} data-testid={`template-${g.id}-${p.id || p.label}`}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30 hover:bg-white/[0.06]">
                <div className="font-medium">{p.label}</div>
                {p.prompt && <p className="mt-2 line-clamp-2 text-sm text-neutral-400">{p.prompt}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
