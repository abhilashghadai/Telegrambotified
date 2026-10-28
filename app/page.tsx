export default function Home() {
  return (
    <main className="shell">
      <div className="eyebrow">TELEGRAMBOTIFIED · PHASE 1</div>
      <h1>Telegram login & media archive test</h1>
      <p className="intro">
        A separate sandbox to validate authentication, deployment, and an authorized media workflow — isolated from FinancialOS.
      </p>

      <section className="panel">
        <h2>Smoke-test checklist</h2>
        <ol>
          <li><span className="status">Ready to test</span> Deploy this starter app to Vercel.</li>
          <li><span className="status pending">Needs configuration</span> Set up a Telegram bot and configure its public login domain.</li>
          <li><span className="status pending">Not implemented</span> Add server-side verification of Telegram login assertions.</li>
          <li><span className="status pending">Separate service</span> Decide on persistent storage and a worker for durable downloads.</li>
        </ol>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>Web app</h2>
          <p>Next.js UI and request/response API routes are suitable for Vercel.</p>
          <p className="small">Health endpoint: <code>/api/health</code></p>
        </article>
        <article className="panel">
          <h2>Media worker</h2>
          <p>Continuous Telegram clients and durable downloads need a separate worker and persistent storage.</p>
          <p className="small">No Telegram session or secret is stored in this starter.</p>
        </article>
      </section>

      <footer>Only access and save content you own or are authorized to archive. This starter does not bypass protected-content restrictions.</footer>
    </main>
  );
}
