import { FormEvent, ReactNode, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "bolt"
  | "brain"
  | "check"
  | "chevron"
  | "clock"
  | "code"
  | "database"
  | "file"
  | "folder"
  | "graph"
  | "grid"
  | "menu"
  | "message"
  | "plus"
  | "search"
  | "send"
  | "settings"
  | "upload"
  | "user";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  bolt: <><path d="m13 2-8 11h7l-1 9 8-12h-7l1-8Z" /></>,
  brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5a3 3 0 0 0-1 5.83V15a4 4 0 0 0 4 4h1V5.5a1 1 0 0 0-.5-1ZM14.5 4.5A3.5 3.5 0 0 1 18 8v.5a3 3 0 0 1 1 5.83V15a4 4 0 0 1-4 4h-1V5.5a1 1 0 0 1 .5-1ZM6 9.5h2M16 9.5h2M7 15h3M14 15h3" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></>,
  file: <><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 13h6M9 17h4" /></>,
  folder: <><path d="M3 7h7l2 2h9v10H3zM3 7V5h6l2 2" /></>,
  graph: <><circle cx="6" cy="7" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="15" cy="18" r="2" /><circle cx="5" cy="17" r="2" /><path d="m8 7 8-1M17 8l-2 8M13 18l-6-1M6 15V9" /></>,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  message: <><path d="M5 5h14v11H9l-4 4z" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></>,
  send: <><path d="m4 4 17 8-17 8 3-8zM7 12h14" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 8.95 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.6 8.95a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8.95 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08a1.7 1.7 0 0 0 1.03 1.54 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.13.4.5.8 1.52 1H21v4h-.08c-1.02.2-1.39.6-1.52 1Z" /></>,
  upload: <><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function Button({ children, className = "", onClick, type = "button", label }: { children: ReactNode; className?: string; onClick?: () => void; type?: "button" | "submit"; label?: string }) {
  return <button type={type} aria-label={label} className={className} onClick={onClick}>{children}</button>;
}

const initialSources = [
  { id: "distributed-systems-notes", name: "distributed-systems-notes.pdf", meta: "42 pages · 18 chunks", score: "94%", type: "PDF" },
  { id: "internship-journal", name: "internship-journal.md", meta: "Updated 2h ago · 9 chunks", score: "89%", type: "MD" },
  { id: "architecture-patterns", name: "architecture-patterns.txt", meta: "12 KB · 6 chunks", score: "82%", type: "TXT" },
];

const architecture = [
  { step: "01", title: "Browser client", copy: "React SPA renders chat, streams responses, and uploads knowledge files.", tech: "HTML · CSS · JavaScript", icon: "message" as IconName },
  { step: "02", title: "PHP gateway", copy: "Validates requests, parses documents, persists metadata, and builds prompts.", tech: "PHP 8 · REST · PDO", icon: "code" as IconName },
  { step: "03", title: "Memory engine", copy: "Tokenizes chunks, computes TF-IDF vectors, and ranks context with cosine similarity.", tech: "Java 21 · HTTP service", icon: "brain" as IconName },
  { step: "04", title: "Data layer", copy: "Stores documents, chunks, conversations, and retrieval audit metadata.", tech: "SQLite · Portable", icon: "database" as IconName },
];

function Sidebar({ active, setActive, open, close }: { active: string; setActive: (view: string) => void; open: boolean; close: () => void }) {
  const nav = [
    ["Chat", "message"],
    ["Knowledge", "folder"],
    ["Architecture", "graph"],
  ] as [string, IconName][];
  return (
    <>
      {open && <div className="scrim" onClick={close} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="brain" size={22} /></div>
          <div><div className="brand-name">Cognitive Twin</div><div className="brand-tag">Personal memory engine</div></div>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          {nav.map(([item, icon]) => (
            <Button key={item} className={`nav-item ${active === item ? "active" : ""}`} onClick={() => { setActive(item); close(); }}>
              <Icon name={icon} /><span>{item}</span>{item === "Knowledge" && <span className="nav-count">24</span>}
            </Button>
          ))}
        </nav>
        <div className="sidebar-section">
          <div className="section-label">Recent threads</div>
          <Button className="thread active-thread" onClick={() => { setActive("Chat"); close(); }}>
            <span>How do I approach system...</span><small>Now</small>
          </Button>
          <Button className="thread"><span>My notes on vector search</span><small>2h</small></Button>
          <Button className="thread"><span>Project retrospective</span><small>Tue</small></Button>
        </div>
        <div className="sidebar-footer">
          <div className="storage-head"><span>Memory storage</span><span>61%</span></div>
          <div className="storage-track"><span /></div>
          <div className="storage-copy">1.2 GB of 2 GB used</div>
          <div className="profile">
            <div className="avatar">AK</div>
            <div className="profile-text"><strong>Arjun Kumar</strong><span>Local workspace</span></div>
            <Button className="icon-button" label="Open settings"><Icon name="settings" /></Button>
          </div>
        </div>
      </aside>
    </>
  );
}

function Topbar({ active, openMenu, newThread }: { active: string; openMenu: () => void; newThread: () => void }) {
  return (
    <header className="topbar">
      <div className="topbar-title">
        <Button className="mobile-menu" onClick={openMenu} label="Open navigation"><Icon name="menu" /></Button>
        <div><div className="eyebrow">Workspace / {active}</div><div className="page-title">{active === "Chat" ? "Ask your second brain" : active}</div></div>
      </div>
      <div className="topbar-actions">
        <div className="status-pill"><span className="status-dot" />Memory online</div>
        <Button className="button secondary new-thread" onClick={newThread}><Icon name="plus" /><span>New thread</span></Button>
      </div>
    </header>
  );
}

function SourceCard({ source }: { source: typeof initialSources[number] }) {
  return (
    <div className="source-card">
      <div className={`file-tile ${source.type.toLowerCase()}`}><Icon name="file" size={20} /><span>{source.type}</span></div>
      <div className="source-info"><strong>{source.name}</strong><span>{source.meta}</span></div>
      <div className="match-score"><span>{source.score}</span><small>match</small></div>
    </div>
  );
}

function ChatView({ clearKey }: { clearKey: number }) {
  const [value, setValue] = useState("");
  const [question, setQuestion] = useState("How should I explain the architecture of my vector search project in an internship interview?");
  const [loading, setLoading] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(true);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!value.trim()) return;
    setQuestion(value.trim());
    setValue("");
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1100);
  };

  return (
    <div className="chat-layout" key={clearKey}>
      <main className="conversation">
        <div className="conversation-inner">
          <div className="date-rule"><span>Today</span></div>
          <div className="message user-message">
            <div className="message-avatar user-avatar"><Icon name="user" size={17} /></div>
            <div className="message-body">
              <div className="message-meta"><strong>You</strong><span>10:42 AM</span></div>
              <div className="user-bubble">{question}</div>
            </div>
          </div>
          <div className="message ai-message">
            <div className="message-avatar ai-avatar"><Icon name="brain" size={18} /></div>
            <div className="message-body">
              <div className="message-meta"><strong>Cognitive Twin</strong><span>10:42 AM</span><span className="retrieved-badge"><Icon name="bolt" size={12} />3 memories retrieved</span></div>
              {loading ? (
                <div className="typing"><span /><span /><span /></div>
              ) : (
                <div className="answer">
                  <p>Frame it as a <strong>retrieval system you engineered</strong>, not an API wrapper. Start with the constraint: personal notes are noisy, private, and too large to include in every prompt.</p>
                  <p>Then walk through the decision path:</p>
                  <ol>
                    <li><strong>Ingestion:</strong> PHP validates each upload, extracts text, and stores document metadata.</li>
                    <li><strong>Memory:</strong> Java chunks and normalizes the text, builds TF-IDF vectors, then ranks chunks using cosine similarity.</li>
                    <li><strong>Generation:</strong> The PHP gateway injects only the top-ranked evidence into the LLM prompt, with citations.</li>
                  </ol>
                  <blockquote>“I separated retrieval from generation so the memory engine remains testable, model-agnostic, and able to run locally.”</blockquote>
                  <p>For scale, discuss replacing in-memory vectors with an approximate nearest-neighbor index and moving ingestion to an asynchronous queue.</p>
                </div>
              )}
              {!loading && (
                <div className="citation-row">
                  <Button className="citation" onClick={() => setSourcesOpen(!sourcesOpen)}><span>1</span>distributed-systems-notes.pdf</Button>
                  <Button className="citation" onClick={() => setSourcesOpen(!sourcesOpen)}><span>2</span>internship-journal.md</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="composer-wrap">
          <form className="composer" onSubmit={submit}>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} placeholder="Ask anything from your knowledge..." rows={2} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) submit(event); }} />
            <div className="composer-footer">
              <div className="composer-tools">
                <Button className="tool-button" label="Attach a document"><Icon name="plus" size={17} /></Button>
                <span>24 sources available</span>
              </div>
              <div className="composer-actions"><span>⌘ Enter</span><Button type="submit" className="send-button" label="Send message"><Icon name="send" size={17} /></Button></div>
            </div>
          </form>
          <div className="disclaimer">Answers are grounded in your documents. Always verify important details.</div>
        </div>
      </main>
      <aside className={`context-panel ${sourcesOpen ? "" : "panel-collapsed"}`}>
        <div className="panel-header">
          <div><div className="panel-kicker">Retrieval trace</div><div className="panel-title">Context used</div></div>
          <Button className="icon-button" label="Collapse context panel" onClick={() => setSourcesOpen(!sourcesOpen)}><Icon name="chevron" /></Button>
        </div>
        <div className="query-card">
          <div className="query-head"><Icon name="search" size={15} /><span>Semantic query</span></div>
          <p>architecture vector search internship explanation</p>
          <div className="latency"><Icon name="clock" size={14} />Retrieved in 46ms</div>
        </div>
        <div className="panel-section-head"><span>Top matching memories</span><span>3 results</span></div>
        <div className="source-list">{initialSources.map((source) => <SourceCard source={source} key={source.id} />)}</div>
        <div className="retrieval-settings">
          <div className="setting-line"><span>Search method</span><strong>Cosine similarity</strong></div>
          <div className="setting-line"><span>Minimum score</span><strong>0.72</strong></div>
          <div className="setting-line"><span>Chunks scanned</span><strong>286</strong></div>
        </div>
      </aside>
    </div>
  );
}

function KnowledgeView() {
  const [sources, setSources] = useState(initialSources);
  const fileInput = useRef<HTMLInputElement>(null);
  const addFile = (files: FileList | null) => {
    if (!files?.length) return;
    const file = files[0];
    setSources([{ id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`, name: file.name, meta: `${Math.max(1, Math.round(file.size / 1024))} KB · Processing`, score: "—", type: file.name.split(".").pop()?.toUpperCase() || "FILE" }, ...sources]);
  };
  return (
    <main className="content-page">
      <section className="hero-row">
        <div><div className="content-eyebrow">Private by architecture</div><div className="content-title">Your knowledge, made searchable.</div><p>Upload notes, journals, research, and code references. Each file is chunked and indexed into your local memory engine.</p></div>
        <Button className="button primary" onClick={() => fileInput.current?.click()}><Icon name="upload" />Add documents</Button>
        <input ref={fileInput} type="file" accept=".pdf,.txt,.md" hidden onChange={(event) => addFile(event.target.files)} />
      </section>
      <section className="stats-grid">
        <div className="stat-card"><Icon name="folder" /><div><strong>24</strong><span>Documents indexed</span></div><small>+4 this week</small></div>
        <div className="stat-card"><Icon name="grid" /><div><strong>286</strong><span>Memory chunks</span></div><small>1.2 GB total</small></div>
        <div className="stat-card"><Icon name="bolt" /><div><strong>46ms</strong><span>Avg. retrieval</span></div><small className="good">12% faster</small></div>
      </section>
      <section className="knowledge-grid">
        <div className="library-card">
          <div className="card-heading"><div><span>Knowledge library</span><small>All indexed sources</small></div><Button className="filter-button"><Icon name="search" />Search</Button></div>
          <div className="library-list">{sources.map((source, index) => <SourceCard source={source} key={source.id || `${source.name}-${index}`} />)}</div>
        </div>
        <div className="upload-card" onClick={() => fileInput.current?.click()}>
          <div className="upload-icon"><Icon name="upload" size={24} /></div>
          <strong>Drop knowledge here</strong><p>PDF, TXT, or Markdown up to 25 MB</p><span>Browse files</span>
        </div>
      </section>
    </main>
  );
}

function ArchitectureView() {
  const [tab, setTab] = useState<"flow" | "schema">("flow");
  const [codeLang, setCodeLang] = useState<"java" | "php">("java");
  return (
    <main className="content-page architecture-page">
      <section className="hero-row">
        <div><div className="content-eyebrow">System blueprint</div><div className="content-title">Built from first principles.</div><p>A clean separation between orchestration, retrieval, persistence, and generation keeps the system testable and model-agnostic.</p></div>
        <div className="tab-switch"><Button className={tab === "flow" ? "selected" : ""} onClick={() => setTab("flow")}>System flow</Button><Button className={tab === "schema" ? "selected" : ""} onClick={() => setTab("schema")}>Data schema</Button></div>
      </section>
      {tab === "flow" ? (
        <>
          <section className="flow-grid">
            {architecture.map((item, index) => (
              <div className="flow-card" key={item.step}>
                <div className="flow-top"><span>{item.step}</span><div className="flow-icon"><Icon name={item.icon} /></div></div>
                <strong>{item.title}</strong><p>{item.copy}</p><small>{item.tech}</small>
                {index < architecture.length - 1 && <div className="flow-arrow"><Icon name="arrow" /></div>}
              </div>
            ))}
          </section>
          <section className="decision-grid">
            <div className="code-card">
              <div className="code-head"><div><span className="code-dot red" /><span className="code-dot yellow" /><span className="code-dot green" /></div><span>{codeLang === "java" ? "CosineSearch.java" : "ChatController.php"}</span><div className="code-tabs"><Button className={codeLang === "java" ? "active" : ""} onClick={() => setCodeLang("java")}>JAVA</Button><Button className={codeLang === "php" ? "active" : ""} onClick={() => setCodeLang("php")}>PHP</Button></div></div>
              {codeLang === "java" ? (
                <pre><code><span className="kw">public double</span> similarity(double[] a, double[] b) {"{"}<br />{"  "}<span className="kw">double</span> dot = <span className="num">0</span>, normA = <span className="num">0</span>, normB = <span className="num">0</span>;<br />{"  "}<span className="kw">for</span> (<span className="kw">int</span> i = <span className="num">0</span>; i &lt; a.length; i++) {"{"}<br />{"    "}dot += a[i] * b[i];<br />{"    "}normA += a[i] * a[i];<br />{"    "}normB += b[i] * b[i];<br />{"  "}{"}"}<br />{"  "}<span className="kw">return</span> dot / (Math.sqrt(normA) * Math.sqrt(normB));<br />{"}"}</code></pre>
              ) : (
                <pre><code><span className="kw">$query</span> = trim($payload[<span className="str">'message'</span>]);<br /><span className="kw">$context</span> = $javaClient-&gt;search($query, topK: <span className="num">3</span>);<br /><br /><span className="kw">$prompt</span> = buildGroundedPrompt(<br />{"  "}question: $query,<br />{"  "}evidence: $context<br />);<br /><br /><span className="kw">return</span> jsonResponse(<br />{"  "}$llmClient-&gt;complete($prompt)<br />);</code></pre>
              )}
            </div>
            <div className="decisions-card">
              <div className="card-heading"><div><span>Engineering decisions</span><small>What makes this architecture defensible</small></div></div>
              <div className="decision"><span>01</span><div><strong>Model-agnostic retrieval</strong><p>Memory ranking works without an LLM, making accuracy independently testable.</p></div></div>
              <div className="decision"><span>02</span><div><strong>Privacy by default</strong><p>Raw documents stay local; only selected context reaches the generation API.</p></div></div>
              <div className="decision"><span>03</span><div><strong>Clear scaling path</strong><p>Swap TF-IDF for embeddings and SQLite for a vector index without changing clients.</p></div></div>
            </div>
          </section>
          <section className="resume-card">
            <div className="resume-intro">
              <div className="content-eyebrow">Resume impact guide</div>
              <strong>Tell the engineering story, not the feature list.</strong>
              <p>Lead with the problem, name the constraint, explain your decision, and close with a measurable result.</p>
            </div>
            <div className="resume-points">
              <div><span>01</span><strong>Architecture</strong><p>“Designed a three-tier RAG system separating PHP orchestration from a Java retrieval service.”</p></div>
              <div><span>02</span><strong>Algorithms</strong><p>“Implemented TF-IDF indexing and cosine similarity across 286 personal knowledge chunks.”</p></div>
              <div><span>03</span><strong>Scale</strong><p>“Achieved 46ms average retrieval and designed a migration path to ANN vector search.”</p></div>
            </div>
          </section>
        </>
      ) : (
        <section className="schema-grid">
          {[
            ["documents", ["id · INTEGER · PK", "name · VARCHAR(255)", "mime_type · VARCHAR(80)", "content_hash · CHAR(64)", "created_at · DATETIME"]],
            ["document_chunks", ["id · INTEGER · PK", "document_id · INTEGER · FK", "chunk_index · INTEGER", "content · TEXT", "vector_json · TEXT"]],
            ["conversations", ["id · INTEGER · PK", "title · VARCHAR(255)", "created_at · DATETIME", "updated_at · DATETIME"]],
            ["messages", ["id · INTEGER · PK", "conversation_id · INTEGER · FK", "role · ENUM", "content · TEXT", "retrieval_meta · JSON"]],
          ].map(([name, fields]) => (
            <div className="schema-table" key={name as string}>
              <div className="schema-head"><Icon name="database" /><strong>{name}</strong></div>
              {(fields as string[]).map((field) => <div className="schema-field" key={field}><span>{field.split(" · ")[0]}</span><small>{field.split(" · ").slice(1).join(" · ")}</small></div>)}
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default function App() {
  const [active, setActive] = useState("Chat");
  const [menuOpen, setMenuOpen] = useState(false);
  const [clearKey, setClearKey] = useState(0);
  const newThread = () => { setActive("Chat"); setClearKey((key) => key + 1); };
  return (
    <div className="app-shell">
      <Sidebar active={active} setActive={setActive} open={menuOpen} close={() => setMenuOpen(false)} />
      <div className="main-shell">
        <Topbar active={active} openMenu={() => setMenuOpen(true)} newThread={newThread} />
        {active === "Chat" && <ChatView clearKey={clearKey} />}
        {active === "Knowledge" && <KnowledgeView />}
        {active === "Architecture" && <ArchitectureView />}
      </div>
    </div>
  );
}
