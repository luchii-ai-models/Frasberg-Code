import { useSearchParams } from "react-router-dom";
import CreatorShell, { CREATOR_TABS } from "./CreatorShell";
import Generator from "./pages/Generator";
import Models from "./pages/Models";
import EngineStatus from "./pages/EngineStatus";
import LandingSections from "./components/LandingSections";
import ToolsTab from "./tabs/ToolsTab";
import TemplatesTab from "./tabs/TemplatesTab";
import CapabilitiesTab from "./tabs/CapabilitiesTab";

const VIEWS = {
  create: Generator,
  tools: ToolsTab,
  models: Models,
  templates: TemplatesTab,
  engines: EngineStatus,
  features: LandingSections,
  capabilities: CapabilitiesTab,
};

export default function FrasbergCreator() {
  const [params] = useSearchParams();
  const tab = CREATOR_TABS.some((t) => t.id === params.get("tab")) ? params.get("tab") : "create";
  const View = VIEWS[tab];
  return (
    <CreatorShell active={tab}>
      <div data-testid={`creator-view-${tab}`}><View /></div>
    </CreatorShell>
  );
}
