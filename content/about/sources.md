---
title: "Source Archive"
nav_label: "Source Archive"
domain: "about"
section: "sources"
type: "section"
contentType: "source-archive"
status: "archived"
order: 4
source_panel: "panel-sources"
source: "PathMerit_Domain_Navigation_Source_of_Truth_DATABASE_REWORKED_CLEAN_COLUMNS.html"
origin: "PathMerit source bundle"
sourceFile: "PathMerit_Domain_Navigation_Source_of_Truth_DATABASE_REWORKED_CLEAN_COLUMNS.html"
importedAt: "2026-04-26"
importedBy: "SourceFrame"
canonicalStatus: "superseded"
relatedCanonicalPages:
  - "/about/archive"
  - "/product"
  - "/technology/database"
---

## Source Archive

Collapsed raw source archive. This is intentionally extensive so the file can serve as an audit trail and retrieval base for future changes.

Expand allCollapse all

preview.html 43,944 chars

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PathMerit — Teal-Inspired Feature Expansion Guide</title>

<style>
:root {
  --bg: #0d0f14;
  --panel: #151923;
  --panel-2: #1d2330;
  --panel-3: #252d3c;
  --text: #f3f6fb;
  --muted: #a9b3c7;
  --soft: #77839a;
  --line: rgba(255,255,255,0.1);
  --accent: #8b7cff;
  --accent-2: #45d6a3;
  --accent-3: #ffcf5a;
  --accent-4: #66b7ff;
  --danger: #ff7474;
  --orange: #ff9d5a;
  --radius: 18px;
  --shadow: 0 18px 50px rgba(0,0,0,0.25);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(139,124,255,0.18), transparent 36rem),
    radial-gradient(circle at top right, rgba(69,214,163,0.12), transparent 32rem),
    var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}

main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px 96px;
}

h1, h2, h3, h4 {
  line-height: 1.15;
  margin: 0;
}

h1 {
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  letter-spacing: -0.06em;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}

h3 {
  font-size: 1.28rem;
  letter-spacing: -0.025em;
  margin-bottom: 8px;
}

h4 {
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}

p {
  margin: 0;
  color: var(--muted);
}

a {
  color: var(--accent-4);
}

ul {
  margin: 10px 0 0;
  padding-left: 20px;
  color: var(--muted);
}

li {
  margin: 4px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 14px;
  margin-top: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
}

th, td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

th {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--soft);
  background: rgba(255,255,255,0.04);
}

td {
  color: var(--muted);
}

tr:last-child td {
  border-bottom: none;
}

code {
  background: rgba(255,255,255,0.08);
  color: var(--text);
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.9em;
}

.hero {
  padding: 38px;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(139,124,255,0.22), rgba(69,214,163,0.1)),
    rgba(255,255,255,0.035);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.hero-kicker {
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.hero-subtitle {
  max-width: 760px;
  margin-top: 20px;
  font-size: 1.13rem;
  color: #c4cbdb;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.metric {
  background: rgba(0,0,0,0.18);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
}

.metric strong {
  display: block;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  color: var(--text);
}

.metric span {
  color: var(--soft);
  font-size: 0.88rem;
}

.section {
  margin-top: 28px;
  background: rgba(255,255,255,0.035);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.16);
}

.section-lead {
  max-width: 820px;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  gap: 16px;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.feature-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  opacity: 0.9;
}

.feature-card p {
  margin-top: 8px;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  border: 1px solid var(--line);
}

.badge.mvp {
  background: rgba(69,214,163,0.12);
  color: var(--accent-2);
}

.badge.growth {
  background: rgba(102,183,255,0.12);
  color: var(--accent-4);
}

.badge.future {
  background: rgba(255,207,90,0.12);
  color: var(--accent-3);
}

.badge.risk {
  background: rgba(255,116,116,0.12);
  color: var(--danger);
}

.badge.pro {
  background: rgba(139,124,255,0.16);
  color: var(--accent);
}

.callout {
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--line);
  background: rgba(139,124,255,0.12);
  margin-top: 16px;
}

.callout strong {
  color: var(--text);
}

.flow {
  display: flex;
  align-items: stretch;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.flow-step {
  flex: 1;
  min-width: 150px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px;
  position: relative;
}

.flow-step .num {
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  font-weight: 900;
  font-size: 0.78rem;
  margin-bottom: 8px;
}

.flow-step p {
  font-size: 0.88rem;
}

.roadmap {
  display: grid;
  gap: 14px;
}

.phase {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.phase-title {
  border-right: 1px solid var(--line);
  padding-right: 16px;
}

.phase-title small {
  display: block;
  color: var(--soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 800;
  margin-bottom: 4px;
}

.phase ul {
  margin-top: 0;
}

.priority {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-2);
}

.source-note {
  font-size: 0.82rem;
  color: var(--soft);
  margin-top: 14px;
}

.comparison-pill {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 800;
}

.check {
  color: var(--accent-2);
  font-weight: 900;
}

.warn {
  color: var(--accent-3);
  font-weight: 900;
}

.no {
  color: var(--danger);
  font-weight: 900;
}

@media (max-width: 860px) {
  .hero-grid,
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .phase {
    grid-template-columns: 1fr;
  }

  .phase-title {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding-right: 0;
    padding-bottom: 12px;
  }
}
</style>
</head>

<body>
<main>

<section class="hero">
  <div class="hero-kicker">PathMerit Feature Expansion Guide</div>
  <h1>Teal-Inspired Features to Add to PathMerit</h1>
  <p class="hero-subtitle">
    A visual product guide for expanding PathMerit with job-search workflow features inspired by Teal’s current strengths:
    job saving, job insights, resume matching, stage-based templates, goals, reminders, and career content.
  </p>

  <div class="hero-grid">
    <div class="metric">
      <strong>8</strong>
      <span>feature areas to add or strengthen</span>
    </div>
    <div class="metric">
      <strong>3</strong>
      <span>highest-priority additions</span>
    </div>
    <div class="metric">
      <strong>5</strong>
      <span>roadmap phases</span>
    </div>
    <div class="metric">
      <strong>1</strong>
      <span>main product principle: workflow ownership</span>
    </div>
  </div>
</section>

<section class="section">
  <h2>1. Executive Summary</h2>
  <p class="section-lead">
    Teal’s strongest product pattern is not just resume building. It is the way Teal turns the job search into a managed workflow:
    save jobs, extract useful information, track progress, set goals, tailor resumes, use templates, and manage follow-ups.
  </p>

  <div class="callout">
    <strong>Recommendation:</strong>
    PathMerit should add a job-saving browser extension, weekly job-search goals, stage-based communication templates,
    resume import, job insights, and stronger job-to-resume matching. These features should reinforce PathMerit’s core
    differentiation: engineering-specific career workflows and ATS intelligence.
  </div>

  <table>
    <tr>
      <th>Priority</th>
      <th>Feature</th>
      <th>Why it matters</th>
      <th>Suggested phase</th>
    </tr>
    <tr>
      <td><span class="comparison-pill">P1</span></td>
      <td>Job Saver Chrome Extension</td>
      <td>Creates the main ingestion point for jobs, JDs, ATS detection, and tracker records.</td>
      <td>Growth</td>
    </tr>
    <tr>
      <td><span class="comparison-pill">P1</span></td>
      <td>Weekly Goals + Reminders</td>
      <td>Improves retention by turning PathMerit into a recurring job-search dashboard.</td>
      <td>MVP / Growth</td>
    </tr>
    <tr>
      <td><span class="comparison-pill">P1</span></td>
      <td>Email Templates by Job Stage</td>
      <td>Adds practical value inside the tracker and supports networking, follow-up, and negotiation workflows.</td>
      <td>MVP</td>
    </tr>
    <tr>
      <td><span class="comparison-pill">P2</span></td>
      <td>Resume Import</td>
      <td>Reduces onboarding friction and helps users start from their existing resume or LinkedIn profile.</td>
      <td>MVP</td>
    </tr>
    <tr>
      <td><span class="comparison-pill">P2</span></td>
      <td>Job Description Insights</td>
      <td>Connects saved jobs to keywords, skills, salary, and resume-tailoring recommendations.</td>
      <td>MVP / Growth</td>
    </tr>
    <tr>
      <td><span class="comparison-pill">P2</span></td>
      <td>Career Content Library</td>
      <td>Supports SEO, acquisition, and in-product education.</td>
      <td>Growth</td>
    </tr>
  </table>

  <p class="source-note">
    Source notes: Teal describes a Chrome extension that bookmarks jobs into a tracker with salary info, resume keywords,
    and structured job-description breakdowns; Teal also promotes weekly goals, job insights, email templates by stage,
    resume analysis, keyword matching, Design Mode, and LinkedIn-to-resume importing on its official pages.
  </p>
</section>

<section class="section">
  <h2>2. Feature Gap Map</h2>
  <p class="section-lead">
    The table below compares Teal-style capabilities against the current PathMerit plan and shows whether the feature
    should be added, strengthened, or delayed.
  </p>

  <table>
    <tr>
      <th>Feature area</th>
      <th>Teal-style capability</th>
      <th>Current PathMerit coverage</th>
      <th>Recommendation</th>
    </tr>
    <tr>
      <td>Job saving</td>
      <td>Browser extension saves jobs from job boards into tracker.</td>
      <td><span class="no">Not explicit</span></td>
      <td>Add as Growth feature. This should become a core ingestion channel.</td>
    </tr>
    <tr>
      <td>Job insights</td>
      <td>Extract salary, keywords, skills, and JD breakdown.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Strengthen under ATS Intelligence and Tracker.</td>
    </tr>
    <tr>
      <td>Goals</td>
      <td>Weekly goals for saved jobs and applications.</td>
      <td><span class="no">Missing</span></td>
      <td>Add to MVP as lightweight retention feature.</td>
    </tr>
    <tr>
      <td>Job rating</td>
      <td>Rate excitement and add notes while saving jobs.</td>
      <td><span class="warn">Priority exists, excitement does not</span></td>
      <td>Add separate excitement score to tracker.</td>
    </tr>
    <tr>
      <td>Follow-up reminders</td>
      <td>Set reminders for interviews, contacts, and follow-ups.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Make reminders a first-class tracker feature.</td>
    </tr>
    <tr>
      <td>Email templates</td>
      <td>Templates for each job-search stage.</td>
      <td><span class="no">Missing</span></td>
      <td>Add to MVP. Strong practical utility.</td>
    </tr>
    <tr>
      <td>Resume import</td>
      <td>Upload resume or import LinkedIn to create resume draft.</td>
      <td><span class="no">Not explicit</span></td>
      <td>Add to MVP to reduce friction.</td>
    </tr>
    <tr>
      <td>Resume analysis</td>
      <td>Real-time feedback on structure, format, and content.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Strengthen as Resume Health Check.</td>
    </tr>
    <tr>
      <td>Design controls</td>
      <td>Design Mode for styling and resume customization.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Add carefully; preserve ATS-safe constraints.</td>
    </tr>
    <tr>
      <td>Career resources</td>
      <td>Examples, templates, tools, career paths, guides.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Turn into SEO/content moat.</td>
    </tr>
    <tr>
      <td>Networking CRM</td>
      <td>Save contacts and companies, set follow-up dates, attach to jobs.</td>
      <td><span class="warn">Partially covered</span></td>
      <td>Expand contact log into lightweight networking CRM.</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>3. Feature Area: PathMerit Job Saver Extension</h2>
  <p class="section-lead">
    The browser extension should become PathMerit’s most important workflow bridge. It turns scattered job browsing into
    structured data inside the product.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>One-click save</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
        <span class="badge pro">Core workflow</span>
      </div>
      <p>Users save roles from LinkedIn, Greenhouse, Lever, Ashby, Workday, Indeed, Wellfound, Built In, and company job pages.</p>
    </div>

    <div class="feature-card">
      <h3>Auto-extraction</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Extract company, role title, salary, location, work mode, job URL, ATS platform, and full job description.</p>
    </div>

    <div class="feature-card">
      <h3>Instant tracker record</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Create a PathMerit application record automatically with status, priority, excitement score, and notes.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">Suggested extension flow</h3>
  <div class="flow">
    <div class="flow-step">
      <span class="num">1</span>
      <h4>User opens job page</h4>
      <p>Extension detects job board or ATS page.</p>
    </div>
    <div class="flow-step">
      <span class="num">2</span>
      <h4>Click Save to PathMerit</h4>
      <p>Extension reads job metadata and JD text.</p>
    </div>
    <div class="flow-step">
      <span class="num">3</span>
      <h4>Confirm details</h4>
      <p>User edits title, salary, remote status, priority, and excitement score.</p>
    </div>
    <div class="flow-step">
      <span class="num">4</span>
      <h4>Analyze job</h4>
      <p>PathMerit extracts keywords, skills, seniority, ATS platform, and prep topics.</p>
    </div>
    <div class="flow-step">
      <span class="num">5</span>
      <h4>Create action plan</h4>
      <p>Suggest resume variant, prep path, and follow-up reminders.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">PathMerit-specific twist</h3>
  <p>
    Teal’s extension is primarily job-search organization. PathMerit should go further for engineers:
    detect the interview type, likely technical topics, target seniority, ATS platform, and recommended prep path.
  </p>

  <table>
    <tr>
      <th>Extracted field</th>
      <th>Use inside PathMerit</th>
    </tr>
    <tr>
      <td>ATS platform</td>
      <td>Choose ATS scoring model or parsing-risk checklist.</td>
    </tr>
    <tr>
      <td>Required technologies</td>
      <td>Compare against resume skills and study guide progress.</td>
    </tr>
    <tr>
      <td>Seniority signals</td>
      <td>Suggest behavioral and system design prep depth.</td>
    </tr>
    <tr>
      <td>Salary range</td>
      <td>Store in tracker and later power salary benchmarks.</td>
    </tr>
    <tr>
      <td>Company</td>
      <td>Link to company-specific prep notes and interview reports.</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>4. Feature Area: Weekly Goals + Job Search Operating Rhythm</h2>
  <p class="section-lead">
    Weekly goals convert PathMerit from a passive database into a recurring operating system for the user’s job search.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>Application goals</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <p>Users set weekly targets for applications submitted, saved roles, and tailored resumes.</p>
    </div>

    <div class="feature-card">
      <h3>Prep goals</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <p>Users set hours/week, question count, system design sessions, and behavioral story practice targets.</p>
    </div>

    <div class="feature-card">
      <h3>Networking goals</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Track referrals requested, recruiter messages, follow-ups, and coffee chats.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">Goal dashboard widgets</h3>
  <table>
    <tr>
      <th>Widget</th>
      <th>Description</th>
      <th>Phase</th>
    </tr>
    <tr>
      <td>Weekly progress ring</td>
      <td>Shows applications, saved jobs, and prep completed this week.</td>
      <td>MVP</td>
    </tr>
    <tr>
      <td>Pipeline health score</td>
      <td>Warns if the user has too few active applications or too many stale leads.</td>
      <td>Growth</td>
    </tr>
    <tr>
      <td>Follow-up queue</td>
      <td>Shows contacts, recruiters, and applications that need action.</td>
      <td>MVP</td>
    </tr>
    <tr>
      <td>Prep debt</td>
      <td>Shows target-role skills that are not reflected in the user’s study progress.</td>
      <td>Growth</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>5. Feature Area: Communication Templates by Job Stage</h2>
  <p class="section-lead">
    Teal offers email templates per job stage. PathMerit should add this as a practical tracker feature, especially because
    engineers often underinvest in outreach, follow-up, and negotiation communication.
  </p>

  <div class="grid grid-2">
    <div class="feature-card">
      <h3>Template categories</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
        <span class="badge pro">Free + Pro</span>
      </div>
      <ul>
        <li>Referral request</li>
        <li>Recruiter intro reply</li>
        <li>Application follow-up</li>
        <li>Post-screen thank-you</li>
        <li>Post-technical thank-you</li>
        <li>Scheduling response</li>
        <li>Offer negotiation opener</li>
        <li>Rejection follow-up</li>
      </ul>
    </div>

    <div class="feature-card">
      <h3>Personalization inputs</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <ul>
        <li>Company</li>
        <li>Role</li>
        <li>Contact name</li>
        <li>Current stage</li>
        <li>Interview notes</li>
        <li>Desired tone</li>
        <li>Resume variant used</li>
        <li>Target compensation range</li>
      </ul>
    </div>
  </div>

  <h3 style="margin-top:24px;">Template generation flow</h3>
  <div class="flow">
    <div class="flow-step">
      <span class="num">1</span>
      <h4>Select application</h4>
      <p>User chooses a tracked job.</p>
    </div>
    <div class="flow-step">
      <span class="num">2</span>
      <h4>Choose stage</h4>
      <p>Referral, follow-up, thank-you, negotiation, or rejection.</p>
    </div>
    <div class="flow-step">
      <span class="num">3</span>
      <h4>Pick tone</h4>
      <p>Professional, concise, warm, assertive, or enthusiastic.</p>
    </div>
    <div class="flow-step">
      <span class="num">4</span>
      <h4>Generate draft</h4>
      <p>PathMerit fills in context from tracker and contact records.</p>
    </div>
    <div class="flow-step">
      <span class="num">5</span>
      <h4>Copy or send</h4>
      <p>User copies draft or later connects email integration.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2>6. Feature Area: Resume Import + LinkedIn-to-Resume</h2>
  <p class="section-lead">
    Resume import should be added early because it reduces the biggest onboarding barrier: users do not want to manually
    rebuild their whole resume before seeing value.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>Upload resume</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <p>Accept PDF, DOCX, or pasted text and convert it into structured resume sections.</p>
    </div>

    <div class="feature-card">
      <h3>LinkedIn import</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Import LinkedIn profile data if technically and legally feasible. Start with user-pasted profile text if needed.</p>
    </div>

    <div class="feature-card">
      <h3>Cleanup assistant</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Detect missing dates, weak bullets, missing skills, duplicate sections, and formatting risk.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">Import pipeline</h3>
  <div class="flow">
    <div class="flow-step">
      <span class="num">1</span>
      <h4>Upload or paste</h4>
      <p>User uploads resume or pastes profile content.</p>
    </div>
    <div class="flow-step">
      <span class="num">2</span>
      <h4>Parse sections</h4>
      <p>Detect experience, education, skills, projects, certifications.</p>
    </div>
    <div class="flow-step">
      <span class="num">3</span>
      <h4>Review mapping</h4>
      <p>User confirms parsed content before saving.</p>
    </div>
    <div class="flow-step">
      <span class="num">4</span>
      <h4>Create base resume</h4>
      <p>PathMerit creates structured canonical profile.</p>
    </div>
    <div class="flow-step">
      <span class="num">5</span>
      <h4>Suggest improvements</h4>
      <p>Run resume health checks and role-specific recommendations.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2>7. Feature Area: Job Description Insights + Match Score</h2>
  <p class="section-lead">
    PathMerit already plans ATS intelligence. The Teal comparison suggests this should start earlier as lightweight job insights
    before becoming full ATS simulation.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>Keyword extraction</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <p>Extract top required and preferred keywords from saved job descriptions.</p>
    </div>

    <div class="feature-card">
      <h3>Resume match score</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Compare selected resume variant against job requirements and show a transparent score.</p>
    </div>

    <div class="feature-card">
      <h3>Tailoring checklist</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Suggest concrete edits: add skills, reorder bullets, update summary, or highlight relevant projects.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">Recommended scoring blocks</h3>
  <table>
    <tr>
      <th>Score block</th>
      <th>Description</th>
      <th>Initial weight</th>
    </tr>
    <tr>
      <td>Keyword match</td>
      <td>How many required and preferred terms appear in the resume.</td>
      <td>35%</td>
    </tr>
    <tr>
      <td>Skills alignment</td>
      <td>Whether the resume includes the technologies and domains requested.</td>
      <td>20%</td>
    </tr>
    <tr>
      <td>Experience relevance</td>
      <td>How well recent roles match seniority, domain, and responsibilities.</td>
      <td>20%</td>
    </tr>
    <tr>
      <td>ATS parseability</td>
      <td>Whether the resume structure is likely to parse cleanly.</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Readability</td>
      <td>Clarity, measurable impact, action verbs, and lack of keyword stuffing.</td>
      <td>10%</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>8. Feature Area: Resume Health Check + Design Controls</h2>
  <p class="section-lead">
    Teal offers resume analysis and design controls. PathMerit should offer this too, but with a stricter principle:
    design customization must never compromise ATS safety.
  </p>

  <div class="grid grid-2">
    <div class="feature-card">
      <h3>Resume Health Check</h3>
      <div class="badge-row">
        <span class="badge mvp">MVP</span>
      </div>
      <ul>
        <li>Missing section detection</li>
        <li>Weak bullet detection</li>
        <li>Missing metrics detection</li>
        <li>Verb strength analysis</li>
        <li>Section length warnings</li>
        <li>Formatting risk warnings</li>
      </ul>
    </div>

    <div class="feature-card">
      <h3>ATS-Safe Design Mode</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <ul>
        <li>Font size</li>
        <li>Spacing density</li>
        <li>Section order</li>
        <li>Accent color</li>
        <li>Template selection</li>
        <li>One-page/two-page guidance</li>
      </ul>
    </div>
  </div>

  <div class="callout">
    <strong>Design constraint:</strong>
    PathMerit should avoid decorative layouts, image-based PDFs, text boxes, complex tables, and anything likely to break ATS parsing.
    Customization should be presented as “safe controls,” not an unrestricted design editor.
  </div>
</section>

<section class="section">
  <h2>9. Feature Area: Networking CRM + Companies</h2>
  <p class="section-lead">
    Teal’s extension listing mentions contacts and companies, follow-up dates, notes, and attaching connections to jobs.
    PathMerit already has contact logs, but this should be expanded into a lightweight networking CRM.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>Contacts</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Track recruiters, hiring managers, interviewers, referrals, and engineering contacts.</p>
    </div>

    <div class="feature-card">
      <h3>Companies</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Save company pages, notes, interview process data, and open roles.</p>
    </div>

    <div class="feature-card">
      <h3>Relationship reminders</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Set follow-ups for referrals, recruiter replies, thank-you notes, and networking conversations.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">CRM entities to add</h3>
  <table>
    <tr>
      <th>Entity</th>
      <th>Fields</th>
      <th>Relation</th>
    </tr>
    <tr>
      <td>Company</td>
      <td>Name, website, ATS, notes, locations, interview process notes.</td>
      <td>Has many applications and contacts.</td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>Name, title, email, LinkedIn, relationship type, notes, last contacted.</td>
      <td>Can attach to companies and applications.</td>
    </tr>
    <tr>
      <td>Interaction</td>
      <td>Date, type, summary, outcome, follow-up date.</td>
      <td>Belongs to contact, optionally application.</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>10. Feature Area: Career Content Library</h2>
  <p class="section-lead">
    Teal has a broad content library: resume examples, cover letter examples, tools, career paths, and job-search resources.
    PathMerit should create an engineering-specific version of this as both an acquisition channel and a product layer.
  </p>

  <div class="grid grid-3">
    <div class="feature-card">
      <h3>Resume examples</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>Senior backend, frontend, full-stack, platform, mobile, ML, Staff, Principal, and EM resume examples.</p>
    </div>

    <div class="feature-card">
      <h3>Interview guides</h3>
      <div class="badge-row">
        <span class="badge growth">Growth</span>
      </div>
      <p>System design, behavioral, architecture, technical leadership, and company-specific guides.</p>
    </div>

    <div class="feature-card">
      <h3>Career tools</h3>
      <div class="badge-row">
        <span class="badge future">Future</span>
      </div>
      <p>Salary negotiation calculators, resume bullet generators, role-fit checkers, and career path maps.</p>
    </div>
  </div>

  <h3 style="margin-top:24px;">Recommended SEO/product library</h3>
  <table>
    <tr>
      <th>Content type</th>
      <th>Example pages</th>
      <th>Product connection</th>
    </tr>
    <tr>
      <td>Resume examples</td>
      <td>Senior Backend Engineer Resume, Staff Engineer Resume, ML Engineer Resume</td>
      <td>Convert into resume-builder templates.</td>
    </tr>
    <tr>
      <td>Interview paths</td>
      <td>Senior Backend 8-Week Prep Plan, Staff Engineer Behavioral Guide</td>
      <td>Convert into study guides.</td>
    </tr>
    <tr>
      <td>ATS guides</td>
      <td>Ashby Resume Tips, Greenhouse Parsing Guide, Workday Resume Checklist</td>
      <td>Convert into ATS scoring recommendations.</td>
    </tr>
    <tr>
      <td>Communication templates</td>
      <td>Referral Request Email, Recruiter Follow-Up, Offer Negotiation Email</td>
      <td>Convert into tracker templates.</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>11. Updated Roadmap</h2>
  <p class="section-lead">
    This roadmap inserts the Teal-inspired features into PathMerit’s product phases without overloading the MVP.
  </p>

  <div class="roadmap">

    <div class="phase">
      <div class="phase-title">
        <small>Phase 0</small>
        <h3>Validation</h3>
        <span class="priority">Before build</span>
      </div>
      <div>
        <ul>
          <li>Validate pain around fragmented job-search workflow.</li>
          <li>Interview engineers using spreadsheets, Teal, Huntr, Jobscan, and resume builders.</li>
          <li>Test messaging around “career OS for software engineers.”</li>
          <li>Create landing page with waitlist.</li>
          <li>Publish 2–3 engineering resume teardown examples.</li>
        </ul>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">
        <small>Phase 1</small>
        <h3>PoC</h3>
        <span class="priority">Core proof</span>
      </div>
      <div>
        <ul>
          <li>Basic auth.</li>
          <li>Basic resume builder.</li>
          <li>One ATS-safe template.</li>
          <li>PDF export.</li>
          <li>Basic application tracker.</li>
          <li>Application status field.</li>
          <li>Priority field.</li>
          <li>Manual job description paste.</li>
          <li>Basic keyword extraction prototype.</li>
        </ul>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">
        <small>Phase 2</small>
        <h3>MVP</h3>
        <span class="priority">First launch</span>
      </div>
      <div>
        <ul>
          <li>Resume import from PDF, DOCX, or pasted text.</li>
          <li>Three resume templates.</li>
          <li>Resume variants.</li>
          <li>Basic Resume Health Check.</li>
          <li>Cover letter builder.</li>
          <li>Application tracker with statuses, notes, salary, source, and priority.</li>
          <li>Excitement score per job.</li>
          <li>Follow-up reminders.</li>
          <li>Weekly job-search goals.</li>
          <li>Email templates by job stage.</li>
          <li>Basic job description keyword insights.</li>
          <li>Stripe subscriptions.</li>
          <li>Free/Pro usage limits.</li>
        </ul>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">
        <small>Phase 3</small>
        <h3>Growth</h3>
        <span class="priority">Workflow expansion</span>
      </div>
      <div>
        <ul>
          <li>PathMerit Job Saver Chrome Extension.</li>
          <li>Save jobs from LinkedIn, Greenhouse, Lever, Ashby, Workday, Indeed, and company pages.</li>
          <li>Auto-extract company, role, salary, location, remote status, and JD.</li>
          <li>Auto-detect ATS platform where possible.</li>
          <li>Auto-create tracker records from saved jobs.</li>
          <li>Resume-to-job Match Score.</li>
          <li>Tailoring checklist for each saved job.</li>
          <li>Networking CRM: contacts, companies, interactions.</li>
          <li>Company-specific notes and interview process data.</li>
          <li>ATS-safe Design Mode.</li>
          <li>Career content library for SEO and product education.</li>
          <li>Community study guides.</li>
        </ul>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">
        <small>Phase 4</small>
        <h3>Advanced</h3>
        <span class="priority">Differentiation</span>
      </div>
      <div>
        <ul>
          <li>ATS-specific simulations for Ashby, Greenhouse, Lever, and Workday.</li>
          <li>AI resume rewrite.</li>
          <li>AI cover letter rewrite.</li>
          <li>AI communication template personalization.</li>
          <li>AI interview drill mode.</li>
          <li>Company-specific prep briefs.</li>
          <li>Pipeline health score.</li>
          <li>Salary benchmark comparisons.</li>
          <li>Negotiation assistant.</li>
          <li>LinkedIn profile optimizer.</li>
        </ul>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">
        <small>Phase 5</small>
        <h3>Platform</h3>
        <span class="priority">Network effects</span>
      </div>
      <div>
        <ul>
          <li>Team and bootcamp accounts.</li>
          <li>Cohort dashboards.</li>
          <li>Shared prep plans.</li>
          <li>Recruiter opt-in marketplace.</li>
          <li>Verified company interview data.</li>
          <li>Community salary data.</li>
          <li>Resume outcome benchmarks.</li>
          <li>Job discovery layer.</li>
          <li>Market intelligence for engineers.</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<section class="section">
  <h2>12. Product Requirements by Feature</h2>
  <p class="section-lead">
    These are practical requirements to paste into a PRD or product brief.
  </p>

  <table>
    <tr>
      <th>Feature</th>
      <th>MVP requirements</th>
      <th>Later requirements</th>
    </tr>
    <tr>
      <td>Weekly Goals</td>
      <td>Applications/week, saved jobs/week, prep hours/week, follow-up reminders.</td>
      <td>Streaks, intelligent goal suggestions, calendar sync, progress nudges.</td>
    </tr>
    <tr>
      <td>Email Templates</td>
      <td>Template library, stage-based filters, copy-to-clipboard, personalization fields.</td>
      <td>AI rewrite, Gmail integration, send tracking, sequence suggestions.</td>
    </tr>
    <tr>
      <td>Resume Import</td>
      <td>PDF/DOCX/paste import, section detection, review screen.</td>
      <td>LinkedIn import, AI cleanup, diff against old resume.</td>
    </tr>
    <tr>
      <td>Job Insights</td>
      <td>Manual JD paste, keyword extraction, skills list, basic match hints.</td>
      <td>Auto extraction from extension, salary detection, seniority detection, ATS detection.</td>
    </tr>
    <tr>
      <td>Chrome Extension</td>
      <td>Save job URL, title, company, JD text, notes, priority, excitement.</td>
      <td>50+ job boards, ATS detection, contacts/companies saving, auto-score trigger.</td>
    </tr>
    <tr>
      <td>Networking CRM</td>
      <td>Contact records, follow-up dates, notes.</td>
      <td>Company pages, interactions timeline, referral workflow, relationship reminders.</td>
    </tr>
    <tr>
      <td>Career Content Library</td>
      <td>Resume examples, interview guides, email templates.</td>
      <td>Interactive tools, salary negotiation, company-specific prep, community contributions.</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>13. Suggested Database Additions</h2>
  <p class="section-lead">
    These models support the Teal-inspired feature expansion.
  </p>

  <table>
    <tr>
      <th>Table</th>
      <th>Purpose</th>
      <th>Important fields</th>
    </tr>
    <tr>
      <td><code>job_goals</code></td>
      <td>Weekly user goals.</td>
      <td>user_id, week_start, applications_target, saved_jobs_target, prep_hours_target, networking_target</td>
    </tr>
    <tr>
      <td><code>job_goal_progress</code></td>
      <td>Computed or stored progress toward weekly goals.</td>
      <td>user_id, week_start, applications_done, saved_jobs_done, prep_hours_done</td>
    </tr>
    <tr>
      <td><code>email_templates</code></td>
      <td>Stage-based message templates.</td>
      <td>stage, title, body, tone, tier, variables_json</td>
    </tr>
    <tr>
      <td><code>saved_jobs</code></td>
      <td>Jobs saved before application.</td>
      <td>user_id, company, title, url, jd_text, salary_min, salary_max, excitement_score, source</td>
    </tr>
    <tr>
      <td><code>job_insights</code></td>
      <td>Parsed metadata from saved jobs.</td>
      <td>saved_job_id, keywords_json, skills_json, seniority, ats_platform, match_summary</td>
    </tr>
    <tr>
      <td><code>companies</code></td>
      <td>Company-level CRM and prep data.</td>
      <td>name, website, ats_platform, notes, interview_process_json</td>
    </tr>
    <tr>
      <td><code>contacts</code></td>
      <td>Recruiters, interviewers, referrals, hiring managers.</td>
      <td>user_id, company_id, name, title, email, linkedin_url, relationship_type</td>
    </tr>
    <tr>
      <td><code>contact_interactions</code></td>
      <td>Timeline of communication and follow-ups.</td>
      <td>contact_id, application_id, interaction_type, summary, occurred_at, follow_up_at</td>
    </tr>
    <tr>
      <td><code>resume_imports</code></td>
      <td>Track import source and parsing status.</td>
      <td>user_id, source_type, original_file_url, parsed_json, status, error</td>
    </tr>
  </table>
</section>

<section class="section">
  <h2>14. Suggested API Routes</h2>

  <h3>Goals</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td><code>/goals/current</code></td><td>Get current weekly goals and progress.</td></tr>
    <tr><td>POST</td><td><code>/goals</code></td><td>Create weekly goals.</td></tr>
    <tr><td>PATCH</td><td><code>/goals/:id</code></td><td>Update weekly goals.</td></tr>
    <tr><td>GET</td><td><code>/goals/history</code></td><td>View previous weekly performance.</td></tr>
  </table>

  <h3>Email Templates</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td><code>/email-templates</code></td><td>List templates by stage and tone.</td></tr>
    <tr><td>POST</td><td><code>/email-templates/render</code></td><td>Render template with application/contact variables.</td></tr>
    <tr><td>POST</td><td><code>/email-templates/generate</code></td><td>Generate AI-assisted template draft later.</td></tr>
  </table>

  <h3>Saved Jobs and Extension</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td><code>/saved-jobs</code></td><td>List saved jobs.</td></tr>
    <tr><td>POST</td><td><code>/saved-jobs</code></td><td>Create saved job manually or from extension.</td></tr>
    <tr><td>GET</td><td><code>/saved-jobs/:id</code></td><td>View saved job.</td></tr>
    <tr><td>PATCH</td><td><code>/saved-jobs/:id</code></td><td>Update saved job.</td></tr>
    <tr><td>POST</td><td><code>/saved-jobs/:id/analyze</code></td><td>Extract job insights.</td></tr>
    <tr><td>POST</td><td><code>/saved-jobs/:id/convert-to-application</code></td><td>Create application from saved job.</td></tr>
    <tr><td>POST</td><td><code>/extension/save-job</code></td><td>Save job from browser extension.</td></tr>
  </table>

  <h3>Contacts and Companies</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>GET</td><td><code>/companies</code></td><td>List companies.</td></tr>
    <tr><td>POST</td><td><code>/companies</code></td><td>Create company record.</td></tr>
    <tr><td>GET</td><td><code>/contacts</code></td><td>List contacts.</td></tr>
    <tr><td>POST</td><td><code>/contacts</code></td><td>Create contact.</td></tr>
    <tr><td>POST</td><td><code>/contacts/:id/interactions</code></td><td>Add interaction or follow-up.</td></tr>
  </table>

  <h3>Resume Import</h3>
  <table>
    <tr><th>Method</th><th>Route</th><th>Description</th></tr>
    <tr><td>POST</td><td><code>/resume-imports</code></td><td>Upload or paste resume.</td></tr>
    <tr><td>GET</td><td><code>/resume-imports/:id</code></td><td>Check parse status.</td></tr>
    <tr><td>POST</td><td><code>/resume-imports/:id/confirm</code></td><td>Create structured resume from parsed result.</td></tr>
  </table>
</section>

<section class="section">
  <h2>15. Final Product Recommendation</h2>
  <p>
    PathMerit should not copy Teal feature-for-feature. Instead, it should borrow Teal’s strongest workflow mechanics
    and reinterpret them for software engineers.
  </p>

  <div class="callout">
    <strong>The winning product direction:</strong>
    PathMerit should become the engineering job-search cockpit. Users should be able to save a job, understand its requirements,
    match their resume, create a tailored application, plan their prep, manage contacts, follow up, and track the pipeline —
    all from one connected workflow.
  </div>

  <h3 style="margin-top:24px;">Top three additions to prioritize</h3>
  <table>
    <tr>
      <th>Rank</th>
      <th>Feature</th>
      <th>Why</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Weekly goals + follow-up reminders</td>
      <td>Small build, high retention impact, makes PathMerit a weekly habit.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Email templates by job stage</td>
      <td>Easy to build, immediately useful, fits tracker context.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Job Saver Chrome Extension</td>
      <td>Larger build, but strategically important. It connects external job boards to PathMerit’s internal workflow.</td>
    </tr>
  </table>

  <p class="source-note">
    Research basis: Teal’s public pages describe job bookmarking through a Chrome extension, job tracker insights, salary detection,
    keyword extraction, weekly goals, resume analysis, job-description keyword matching, Design Mode, email templates by stage,
    and LinkedIn/resume importing. This guide translates those observed capabilities into a PathMerit-specific roadmap.
  </p>
</section>

</main>
</body>
</html>
```

path-merit-product-guide.html 41,120 chars

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PathMerit — Product Document</title>
  <style>
    :root {
      --bg: #0b1020;
      --panel: #121937;
      --panel-2: #0f1630;
      --ink: #edf2ff;
      --muted: #a9b5d6;
      --soft: #7e8bb1;
      --rule: rgba(255,255,255,0.08);
      --accent: #7c8cff;
      --accent-2: #5fd0b3;
      --warn: #f3c46a;
      --danger: #f08a8a;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      --sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --serif: Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif;
      --radius: 14px;
      --radius-sm: 8px;
      --max: 1100px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: linear-gradient(180deg, #0a0f1d 0%, #0c1226 100%);
      color: var(--ink);
      font-family: var(--sans);
      line-height: 1.65;
    }
    a { color: inherit; }
    .layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }
    nav {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: auto;
      padding: 28px 20px;
      border-right: 1px solid var(--rule);
      background: rgba(7, 11, 24, 0.75);
      backdrop-filter: blur(10px);
    }
    .brand {
      padding-bottom: 18px;
      margin-bottom: 18px;
      border-bottom: 1px solid var(--rule);
    }
    .eyebrow {
      font: 600 11px/1.4 var(--mono);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-2);
      margin-bottom: 10px;
    }
    .wordmark {
      font-size: 28px;
      line-height: 1.05;
      font-weight: 800;
      letter-spacing: -0.04em;
    }
    .tagline {
      color: var(--muted);
      margin-top: 8px;
      font-size: 14px;
    }
    .nav-section {
      margin: 18px 0 8px;
      font: 600 11px/1.4 var(--mono);
      color: var(--soft);
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .nav-link {
      display: block;
      padding: 7px 10px;
      border-radius: 8px;
      text-decoration: none;
      color: var(--muted);
      font-size: 14px;
    }
    .nav-link:hover { background: rgba(255,255,255,0.04); color: var(--ink); }
    main {
      width: 100%;
      max-width: var(--max);
      padding: 42px 56px 80px;
    }
    header.hero {
      padding-bottom: 30px;
      margin-bottom: 34px;
      border-bottom: 1px solid var(--rule);
    }
    .hero h1 {
      margin: 0 0 14px;
      font-size: 56px;
      line-height: 1;
      letter-spacing: -0.05em;
    }
    .hero p.lead {
      margin: 0;
      max-width: 780px;
      font-size: 19px;
      color: var(--muted);
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .pill {
      padding: 7px 10px;
      border: 1px solid var(--rule);
      border-radius: 999px;
      font-size: 12px;
      color: var(--muted);
      background: rgba(255,255,255,0.03);
    }
    section {
      margin-bottom: 34px;
      padding-top: 8px;
    }
    h2 {
      font-size: 32px;
      line-height: 1.1;
      letter-spacing: -0.04em;
      margin: 0 0 12px;
    }
    h3 {
      font-size: 22px;
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin: 28px 0 10px;
    }
    h4 {
      font-size: 16px;
      line-height: 1.3;
      margin: 20px 0 8px;
      color: var(--ink);
    }
    p, li {
      color: var(--muted);
      font-size: 15px;
    }
    strong { color: var(--ink); }
    .callout {
      background: linear-gradient(180deg, rgba(124,140,255,0.12), rgba(95,208,179,0.06));
      border: 1px solid rgba(124,140,255,0.28);
      border-radius: var(--radius);
      padding: 18px 20px;
      margin: 16px 0 20px;
    }
    .callout.warn {
      background: rgba(243,196,106,0.08);
      border-color: rgba(243,196,106,0.3);
    }
    .callout.danger {
      background: rgba(240,138,138,0.08);
      border-color: rgba(240,138,138,0.28);
    }
    .grid-2, .grid-3 {
      display: grid;
      gap: 14px;
      margin: 14px 0 18px;
    }
    .grid-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .grid-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
    .card {
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--rule);
      border-radius: var(--radius);
      padding: 16px 16px 14px;
    }
    .card h4 { margin-top: 0; }
    .label {
      font: 600 11px/1.4 var(--mono);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent-2);
      margin-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0 22px;
      overflow: hidden;
      border-radius: var(--radius);
      border: 1px solid var(--rule);
      background: rgba(255,255,255,0.03);
    }
    th, td {
      padding: 12px 14px;
      text-align: left;
      vertical-align: top;
      border-bottom: 1px solid var(--rule);
      font-size: 14px;
    }
    th {
      font: 600 11px/1.4 var(--mono);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--soft);
      background: rgba(255,255,255,0.04);
    }
    tr:last-child td { border-bottom: none; }
    ul { padding-left: 20px; }
    .kpi {
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .small { font-size: 13px; color: var(--soft); }
    code, .mono { font-family: var(--mono); }
    .footer-note {
      margin-top: 40px;
      color: var(--soft);
      font-size: 13px;
      border-top: 1px solid var(--rule);
      padding-top: 18px;
    }
    @media (max-width: 980px) {
      .layout { grid-template-columns: 1fr; }
      nav { position: static; height: auto; border-right: none; border-bottom: 1px solid var(--rule); }
      main { padding: 28px 20px 70px; }
      .hero h1 { font-size: 40px; }
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="layout">
    <nav>
      <div class="brand">
        <div class="eyebrow">Product document</div>
        <div class="wordmark">PathMerit</div>
        <div class="tagline">Build your path. Prove your merit.</div>
      </div>

      <div class="nav-section">Overview</div>
      <a class="nav-link" href="#summary">Executive summary</a>
      <a class="nav-link" href="#thesis">Product thesis</a>
      <a class="nav-link" href="#market">Market and positioning</a>
      <a class="nav-link" href="#audience">Audience</a>

      <div class="nav-section">Strategy</div>
      <a class="nav-link" href="#strategy">Business strategy</a>
      <a class="nav-link" href="#principles">Product principles</a>
      <a class="nav-link" href="#architecture">Product architecture</a>
      <a class="nav-link" href="#data-model">Core data model</a>

      <div class="nav-section">Product modules</div>
      <a class="nav-link" href="#module-prep">Interview Prep</a>
      <a class="nav-link" href="#module-resume">Resume Builder</a>
      <a class="nav-link" href="#module-cover">Cover Letters</a>
      <a class="nav-link" href="#module-tracker">Application Tracker</a>
      <a class="nav-link" href="#module-ats">ATS Intelligence</a>
      <a class="nav-link" href="#module-ai">AI Drill Mode</a>
      <a class="nav-link" href="#recommended">Recommended additions</a>

      <div class="nav-section">Platform</div>
      <a class="nav-link" href="#platform">Platform foundations</a>
      <a class="nav-link" href="#analytics">Metrics</a>
      <a class="nav-link" href="#pricing">Pricing</a>
      <a class="nav-link" href="#roadmap">Roadmap</a>
      <a class="nav-link" href="#risks">Risks</a>
    </nav>

    <main>
      <header class="hero">
        <div class="eyebrow">Working product specification</div>
        <h1>PathMerit</h1>
        <p class="lead">A career platform for software engineers that combines interview preparation, ATS-native resumes, application tracking, and hiring intelligence in one focused system. PathMerit helps engineers prepare better, apply smarter, and move through the job search with more clarity and confidence.</p>
        <div class="meta">
          <div class="pill">Brand: PathMerit</div>
          <div class="pill">Category: Career platform for software engineers</div>
          <div class="pill">Status: Conceptual product strategy</div>
          <div class="pill">Primary audience: Mid-career and senior engineers</div>
        </div>
      </header>

      <section id="summary">
        <h2>Executive summary</h2>
        <p>PathMerit is a full-stack career platform for software engineers. The core idea is simple: the modern job search is fragmented across interview prep sites, generic resume builders, disconnected job trackers, and ATS scoring tools. Existing products specialize in one slice of the workflow, but candidates experience the process as one journey. PathMerit unifies that journey in a single product system.</p>
        <p>The product combines six major capabilities: interview prep, ATS-native resume creation, cover letter generation, application tracking, ATS intelligence, and AI drilling. The business thesis is that software engineers — especially mid-career and senior candidates — need a focused, high-trust product that helps them both <strong>get interviews</strong> and <strong>perform well once they get them</strong>. The original brief defined this as the “complete career platform for software engineers,” with the strongest differentiation coming from coherent cross-module value and a genuinely useful free tier. The free tier, ATS-native export requirements, and the plan to support both job search organization and interview readiness all come directly from that brief. :contentReference[oaicite:0]{index=0}</p>
        <div class="callout">
          <div class="label">Core promise</div>
          <p><strong>Build your path. Prove your merit.</strong> PathMerit helps engineers prepare, apply, and advance with interview prep, ATS-safe documents, application tracking, and hiring intelligence in one place.</p>
        </div>
      </section>

      <section id="thesis">
        <h2>Product thesis</h2>
        <div class="grid-3">
          <div class="card"><div class="kpi">1</div><p><strong>The workflow is fragmented.</strong> Candidates use separate products for prep, resumes, job tracking, and ATS optimization. Switching context destroys continuity.</p></div>
          <div class="card"><div class="kpi">2</div><p><strong>Engineer-specific needs are underserved.</strong> Generic resume tools and broad career apps do not understand software-engineering signals, stacks, levels, or interview formats. :contentReference[oaicite:1]{index=1}</p></div>
          <div class="card"><div class="kpi">3</div><p><strong>High-value intelligence is paywalled badly.</strong> Existing tools often put baseline functionality behind paywalls. PathMerit should keep the foundation genuinely useful and charge for meaningful leverage. :contentReference[oaicite:2]{index=2}</p></div>
        </div>
        <p>The product’s moat is not any one module by itself. The moat is the compounding value created when modules share data, context, and intent. A target role should influence what study guide you follow, which resume variant you export, how you tailor a cover letter, how you score against a JD, and how you interpret pipeline progress. This cross-module continuity turns a bundle of features into a system.</p>
      </section>

      <section id="market">
        <h2>Market and positioning</h2>
        <p>The original brief correctly identifies a positioning gap: interview prep tools focus mainly on technical content, resume builders are generic and weakly tailored for engineers, trackers are disconnected from preparation, and ATS tools are expensive and opaque. PathMerit sits in the gap between those categories by owning the complete engineer career stack, with a strong free tier and a coherent product experience. :contentReference[oaicite:3]{index=3}</p>
        <table>
          <thead>
            <tr><th>Category</th><th>What exists</th><th>Where they fall short</th><th>PathMerit position</th></tr>
          </thead>
          <tbody>
            <tr><td>Interview prep</td><td>LeetCode, NeetCode, DesignGurus</td><td>Great for coding content, weak on getting interviews and pipeline organization</td><td>Prep integrated with role targeting, tracker data, and company context</td></tr>
            <tr><td>Resume tools</td><td>Zety, Novoresume, ResumeGenius</td><td>Generic templates, shallow engineering relevance, questionable ATS trust</td><td>Structured ATS-native documents built around engineer-specific content models</td></tr>
            <tr><td>Trackers</td><td>Huntr, Teal</td><td>Useful organization, disconnected from prep and document workflows</td><td>Tracker tied to resume versions, company briefs, and prep plans</td></tr>
            <tr><td>ATS scoring</td><td>Jobscan and similar tools</td><td>Generic, expensive, low trust, weak engineering specificity</td><td>JD matching and ATS simulation focused on engineering roles and document structure</td></tr>
          </tbody>
        </table>
        <div class="callout warn">
          <div class="label">Positioning statement</div>
          <p>PathMerit is the career platform for software engineers. It combines interview preparation, ATS-native resume building, cover letter workflows, application tracking, and hiring intelligence in one coherent system. The free foundation is genuinely useful; paid features add meaningful leverage rather than hiding the basics behind artificial paywalls.</p>
        </div>
      </section>

      <section id="audience">
        <h2>Target audience</h2>
        <div class="grid-3">
          <div class="card">
            <h4>Primary: mid-career and senior engineers</h4>
            <p>Engineers with roughly 3–12 years of experience targeting senior, staff, principal, or engineering manager roles. They have more to lose in poorly run searches and need better systems for system design, behavioral depth, resume signaling, and selective applications. This focus comes directly from the brief. :contentReference[oaicite:4]{index=4}</p>
          </div>
          <div class="card">
            <h4>Secondary: junior engineers</h4>
            <p>Early-career users will lean hardest on the resume builder, tracker, and free prep content. They are highly cost-sensitive, which makes the free tier strategically important. :contentReference[oaicite:5]{index=5}</p>
          </div>
          <div class="card">
            <h4>Tertiary: non-US markets</h4>
            <p>International engineers face stronger exchange-rate barriers and thinner local mentorship networks. PPP pricing and community-driven content are strategic advantages, not charity. :contentReference[oaicite:6]{index=6}</p>
          </div>
        </div>
      </section>

      <section id="strategy">
        <h2>Business strategy</h2>
        <h3>1. Win with coherence, not just content</h3>
        <p>PathMerit should not try to beat every specialist in their deepest niche on day one. Instead, it should win by making the total search flow dramatically more coherent. The main strategic asset is the graph between role targets, study guides, documents, applications, contacts, and outcomes.</p>
        <h3>2. Use a radical free tier to widen the funnel</h3>
        <p>The brief is correct: many competitors monetize by crippling the baseline experience. PathMerit should instead make the free tier fully useful for a serious job search: a small number of study guides, strong resume creation, a real tracker, and some basic JD matching. Premium should feel like amplification, not unlock. :contentReference[oaicite:7]{index=7}</p>
        <h3>3. Build trust through document quality and transparency</h3>
        <p>ATS trust is central. If exported PDFs do not parse correctly, the product loses credibility. The brief explicitly calls out text-based PDFs, no image-based rendering, and validation against major ATS parsers. That needs to be treated as non-negotiable product infrastructure, not a design detail. :contentReference[oaicite:8]{index=8}</p>
        <h3>4. Let community data improve product quality</h3>
        <p>Community study guides, company interview notes, and anonymized ATS outcomes can become a compounding data advantage. Moderation and structured contribution flows are required so that the community signal improves product quality rather than polluting it.</p>
      </section>

      <section id="principles">
        <h2>Product principles</h2>
        <ul>
          <li><strong>Engineer-first:</strong> the product should feel built for software engineers, not adapted from generic HR tech.</li>
          <li><strong>Structured over magical:</strong> use structured inputs and explainable outputs rather than opaque AI everywhere.</li>
          <li><strong>Documents must be trustworthy:</strong> ATS-safe export quality is product-critical.</li>
          <li><strong>Cross-module continuity matters:</strong> one user decision should feed multiple modules.</li>
          <li><strong>Free must be real:</strong> the user should be able to run a serious search without paying.</li>
          <li><strong>Premium must save time, raise quality, or improve outcomes:</strong> not simply unlock arbitrary limits.</li>
          <li><strong>Community is valuable only if quality is defended:</strong> moderation and structure are part of the product.</li>
        </ul>
      </section>

      <section id="architecture">
        <h2>Product architecture</h2>
        <p>The product should be modeled as one platform with multiple user-facing modules rather than six siloed mini-apps. The shared object model is the key design choice.</p>
        <table>
          <thead>
            <tr><th>Shared object</th><th>Used by</th><th>Why it matters</th></tr>
          </thead>
          <tbody>
            <tr><td>Target role</td><td>Prep, resume, cover letters, ATS, tracker</td><td>Creates continuity around level, stack, role family, and job target</td></tr>
            <tr><td>Company</td><td>Tracker, prep, ATS, cover letters</td><td>Enables company-specific prep, interview patterns, and application history</td></tr>
            <tr><td>Resume variant</td><td>Resume builder, ATS, tracker</td><td>Links document choices to application outcomes</td></tr>
            <tr><td>Job description</td><td>ATS, resume, cover letters, tracker</td><td>Drives matching, tailoring, and downstream recommendations</td></tr>
            <tr><td>Skill / technology taxonomy</td><td>Prep, resumes, JD matching, analytics</td><td>Provides shared language for content and scoring</td></tr>
            <tr><td>Outcome events</td><td>Tracker, analytics, pricing ROI, model training</td><td>Measures what actually worked</td></tr>
          </tbody>
        </table>
      </section>

      <section id="data-model">
        <h2>Core data model</h2>
        <div class="grid-2">
          <div class="card">
            <div class="label">Core entities</div>
            <ul>
              <li>User</li>
              <li>Profile</li>
              <li>TargetRole</li>
              <li>StudyGuide</li>
              <li>Question</li>
              <li>AnswerAttempt</li>
              <li>Resume</li>
              <li>ResumeVariant</li>
              <li>CoverLetter</li>
              <li>Application</li>
              <li>ApplicationEvent</li>
              <li>Contact</li>
              <li>Company</li>
              <li>JobDescription</li>
              <li>ATSAnalysis</li>
              <li>CompanyBrief</li>
            </ul>
          </div>
          <div class="card">
            <div class="label">Important relationships</div>
            <ul>
              <li>One user has many target roles and applications</li>
              <li>One target role can map to many study guides and document variants</li>
              <li>One application references one company, one role target, one JD, and optional resume and cover letter versions</li>
              <li>One ATS analysis references one JD and one resume variant</li>
              <li>Outcome events should be timestamped and queryable across all applications</li>
            </ul>
          </div>
        </div>
        <p><strong>Key recommendation:</strong> promote <code>TargetRole</code> to a first-class object. The original brief already implies role/level/stack-targeted prep and tailored variants; making that object explicit strengthens the entire product system. :contentReference[oaicite:9]{index=9}</p>
      </section>

      <section id="module-prep">
        <h2>Module 1 — Interview Prep</h2>
        <p>The original plan includes curated learning paths by role, level, and stack; custom study guide creation; a question bank; and community features. That is a strong foundation and should remain core. :contentReference[oaicite:10]{index=10}</p>
        <h3>Planned capabilities</h3>
        <ul>
          <li>Curated learning paths by role, seniority, and stack</li>
          <li>Custom study guide builder with target date and weekly hours</li>
          <li>Question banks with model answers, follow-ups, confidence scores, and recency</li>
          <li>Community guides with browsing, forking, and moderation</li>
        </ul>
        <h3>Recommended additions</h3>
        <table>
          <thead>
            <tr><th>Feature</th><th>Why it matters</th><th>Priority</th></tr>
          </thead>
          <tbody>
            <tr><td>Answer vault</td><td>Lets users save polished behavioral stories and technical answer frameworks for reuse across prep and AI drill mode</td><td>P1</td></tr>
            <tr><td>Question-to-company mapping</td><td>Connects reported interview questions to companies, role families, and stages</td><td>P1</td></tr>
            <tr><td>Progress memory</td><td>Persist viewed/completed items, spaced repetition status, and weak areas</td><td>P1</td></tr>
            <tr><td>Company prep briefs</td><td>Bundles known interview loop patterns, tech stack, role expectations, and recent signals into a prep artifact</td><td>P2</td></tr>
            <tr><td>Mock interview session builder</td><td>Lets users assemble a realistic loop from chosen question sets and timing</td><td>P2</td></tr>
            <tr><td>Outcome feedback loop</td><td>After interviews, users log which topics actually appeared so the system improves relevance</td><td>P2</td></tr>
          </tbody>
        </table>
        <h3>User flow</h3>
        <ol>
          <li>User selects a target role or creates one from scratch.</li>
          <li>Product suggests a default prep path based on level, stack, and time available.</li>
          <li>User customizes the guide and selects weak areas.</li>
          <li>System recommends questions, frameworks, and study milestones.</li>
          <li>User practices, rates confidence, and stores answers in the answer vault.</li>
          <li>After real interviews, user logs outcomes and the system adjusts relevance.</li>
        </ol>
      </section>

      <section id="module-resume">
        <h2>Module 2 — Resume Builder</h2>
        <p>The original brief is strongest here when it insists on a structured, ATS-native builder rather than a free-form design toy. It covers core sections, templates, varianting, and export, and correctly frames the web editor as an escape hatch rather than the main authoring mode. :contentReference[oaicite:11]{index=11}</p>
        <h3>Planned capabilities</h3>
        <ul>
          <li>Structured profile input for summary, experience, education, skills, certifications, and optional sections</li>
          <li>ATS-safe templates with controlled customization</li>
          <li>Base resume plus tailored variants</li>
          <li>PDF and DOCX export with usage caps by tier</li>
        </ul>
        <h3>Recommended additions</h3>
        <table>
          <thead>
            <tr><th>Feature</th><th>Why it matters</th><th>Priority</th></tr>
          </thead>
          <tbody>
            <tr><td>Resume import / parse</td><td>Reduces onboarding friction by letting users start from an existing PDF or DOCX</td><td>P1</td></tr>
            <tr><td>ATS parse preview</td><td>Shows users exactly how their exported resume is likely parsed into fields</td><td>P1</td></tr>
            <tr><td>Bullet quality assistant</td><td>Scores bullets for specificity, action, impact, and technical clarity</td><td>P1</td></tr>
            <tr><td>Variant comparison diff</td><td>Helps users see what changed between base and tailored versions</td><td>P2</td></tr>
            <tr><td>Role-targeted section emphasis</td><td>Reorders or emphasizes sections depending on target role</td><td>P2</td></tr>
            <tr><td>Evidence library</td><td>Stores metrics, projects, and achievements for easier bullet generation</td><td>P2</td></tr>
          </tbody>
        </table>
        <h3>Critical implementation constraints</h3>
        <ul>
          <li>Exports must be text-based PDFs, not image-based renders.</li>
          <li>Rendered HTML/CSS must avoid layout tricks that break parsing.</li>
          <li>Templates should be validated against major ATS parsing scenarios before launch. These constraints are explicitly called out in the source brief. :contentReference[oaicite:12]{index=12}</li>
        </ul>
      </section>

      <section id="module-cover">
        <h2>Module 3 — Cover Letters</h2>
        <p>Cover letters are lower-frequency than resumes, but they matter because they reuse the same user profile, target role, and company context. The original brief positions this as a simpler structured workflow with a few templates and versioning, which is right. :contentReference[oaicite:13]{index=13}</p>
        <h3>Planned capabilities</h3>
        <ul>
          <li>Structured prompt fields: target company, role, why this company, key experience, tone, length</li>
          <li>Template-based generation followed by editor refinement</li>
          <li>Saved versions capped on free and unlimited on pro</li>
        </ul>
        <h3>Recommended additions</h3>
        <ul>
          <li><strong>Reusable rationale snippets:</strong> store why-company notes and mission-alignment notes by company.</li>
          <li><strong>Targeted evidence insertion:</strong> let users pull in resume achievements directly rather than retyping.</li>
          <li><strong>Style guardrails:</strong> warn when a letter is too generic, too long, or not company-specific enough.</li>
          <li><strong>Send-mode variants:</strong> generate a full formal cover letter, a recruiter email, or a short application note from the same inputs.</li>
        </ul>
      </section>

      <section id="module-tracker">
        <h2>Module 4 — Application Tracker</h2>
        <p>The tracker is the workflow spine of the product. The original brief covers application records, extensible statuses, contact logs, and analytics. This should be treated as the product’s operational memory. :contentReference[oaicite:14]{index=14}</p>
        <h3>Planned capabilities</h3>
        <ul>
          <li>Application records linked to company, role, source, location, salary range, and linked resume/cover letter versions</li>
          <li>Extensible status taxonomy</li>
          <li>Per-application contact logs and reminders</li>
          <li>Pipeline analytics and dashboards</li>
        </ul>
        <h3>Recommended additions</h3>
        <table>
          <thead>
            <tr><th>Feature</th><th>Why it matters</th><th>Priority</th></tr>
          </thead>
          <tbody>
            <tr><td>Browser save flow / bookmarklet</td><td>Capture jobs into the tracker quickly from posting pages</td><td>P1</td></tr>
            <tr><td>Calendar reminders</td><td>Critical for follow-ups, interview scheduling, and deadlines</td><td>P1</td></tr>
            <tr><td>Outcome logging</td><td>Captures why an application advanced, stalled, or failed</td><td>P1</td></tr>
            <tr><td>Kanban + table + timeline views</td><td>Different users reason about pipelines differently</td><td>P1</td></tr>
            <tr><td>Company dossier</td><td>Central panel for notes, interview process, contacts, and past applications</td><td>P2</td></tr>
            <tr><td>Funnel attribution</td><td>Measures which sources, variants, and prep choices drive real outcomes</td><td>P2</td></tr>
          </tbody>
        </table>
      </section>

      <section id="module-ats">
        <h2>Module 5 — ATS Intelligence</h2>
        <p>This is the most ambitious differentiator in the brief and potentially the strongest reason to pay. The brief proposes a two-tier model: basic resume-vs-JD scoring and platform-specific simulation for major ATS products like Ashby, Greenhouse, Lever, and Workday. :contentReference[oaicite:15]{index=15}</p>
        <h3>Planned capabilities</h3>
        <ul>
          <li>Resume vs JD match scoring</li>
          <li>Keyword gap and surplus analysis</li>
          <li>ATS-specific simulation by selected or detected platform</li>
          <li>Tailoring suggestions and score benchmarking</li>
        </ul>
        <h3>Recommended additions</h3>
        <ul>
          <li><strong>Field extraction preview:</strong> show how names, dates, titles, companies, and skills parse into structured fields.</li>
          <li><strong>Failure-mode explanations:</strong> explain why a score changed instead of just returning a number.</li>
          <li><strong>Required vs nice-to-have JD decomposition:</strong> separate critical gaps from optional gaps.</li>
          <li><strong>Platform confidence indicators:</strong> tell users how confident the simulation is for each ATS and why.</li>
          <li><strong>Structured skill normalization:</strong> map user skills to ATS-recognized equivalents or canonical forms.</li>
        </ul>
        <div class="callout danger">
          <div class="label">Important trust warning</div>
          <p>PathMerit should be careful not to overclaim exact ATS scoring truth where the underlying systems are opaque or recruiter-configurable. The right product posture is: <strong>simulation, likelihood, parse quality, and explainable recommendations</strong>, not false certainty.</p>
        </div>
      </section>

      <section id="module-ai">
        <h2>Module 6 — AI Drill Mode</h2>
        <p>The original brief includes live answer evaluation, rubric-based scoring, follow-up drilling, and weak-area surfacing. This is a strong pro feature if it feels rigorous and coach-like rather than gimmicky. :contentReference[oaicite:16]{index=16}</p>
        <h3>Recommended product shape</h3>
        <ul>
          <li>Users choose a question set, role, company context, and interview style.</li>
          <li>The system asks one question at a time and evaluates against rubrics.</li>
          <li>Rubrics differ by category: behavioral, technical explanation, system design, leadership, debugging.</li>
          <li>Feedback includes strengths, missing signals, follow-up prompts, and a rewritten stronger answer outline.</li>
          <li>Weak areas feed back into prep recommendations and answer vault suggestions.</li>
        </ul>
        <h3>Recommended additions</h3>
        <ul>
          <li>Voice mode and transcript support</li>
          <li>Behavioral story grading against STAR-L or similar frameworks</li>
          <li>System design rubric templates by level</li>
          <li>Replay history with score progression over time</li>
        </ul>
      </section>

      <section id="recommended">
        <h2>Recommended additions outside the original plan</h2>
        <div class="grid-2">
          <div class="card">
            <h4>1. Company briefs</h4>
            <p>A reusable artifact that combines company notes, known interview patterns, target role context, compensation expectations, and tailored prep suggestions.</p>
          </div>
          <div class="card">
            <h4>2. Evidence library</h4>
            <p>A private repository of achievements, metrics, projects, incidents, leadership stories, and technical wins. This supports resumes, cover letters, and behavioral prep.</p>
          </div>
          <div class="card">
            <h4>3. Resume import and cleanup</h4>
            <p>Critical for onboarding conversion. Most users will not rebuild from zero if they can avoid it.</p>
          </div>
          <div class="card">
            <h4>4. Outcome intelligence</h4>
            <p>Track which resume versions, JD scores, and application sources actually correlate with outcomes. This becomes the product’s learning engine.</p>
          </div>
          <div class="card">
            <h4>5. Saved target roles</h4>
            <p>Users should be able to maintain multiple concurrent role targets, each with its own prep path, document variants, and active pipeline.</p>
          </div>
          <div class="card">
            <h4>6. Job capture workflow</h4>
            <p>A browser extension or bookmarklet is a major usability unlock for the tracker and ATS module.</p>
          </div>
        </div>
      </section>

      <section id="platform">
        <h2>Platform foundations</h2>
        <h3>Accounts and identity</h3>
        <ul>
          <li>Email/password and Google sign-in as baseline, as proposed in the original pricing model. :contentReference[oaicite:17]{index=17}</li>
          <li>Optional LinkedIn import later, but not required for MVP.</li>
        </ul>
        <h3>Search and taxonomy</h3>
        <ul>
          <li>Central taxonomies for roles, levels, technologies, certifications, and statuses.</li>
          <li>Controlled vocabularies with freetext fallback, then normalization in the background.</li>
        </ul>
        <h3>Document generation</h3>
        <ul>
          <li>HTML-to-PDF via stable headless rendering for predictable ATS-safe output.</li>
          <li>DOCX generation via structured templates rather than full visual editing.</li>
        </ul>
        <h3>Analytics and eventing</h3>
        <ul>
          <li>Track module usage, export events, JD checks, application events, and stage transitions.</li>
          <li>Build both product analytics and user-facing pipeline analytics from the same event backbone.</li>
        </ul>
        <h3>Moderation and trust</h3>
        <ul>
          <li>Community content needs moderation queues, abuse tools, and reputation systems.</li>
          <li>ATS claims need clear confidence and method explanations.</li>
        </ul>
      </section>

      <section id="analytics">
        <h2>Success metrics</h2>
        <table>
          <thead>
            <tr><th>Layer</th><th>Metric</th><th>Why it matters</th></tr>
          </thead>
          <tbody>
            <tr><td>Acquisition</td><td>Sign-up conversion, resume import completion, first tracker item created</td><td>Measures whether onboarding works</td></tr>
            <tr><td>Activation</td><td>First resume export, first ATS check, first study guide created</td><td>Shows users reached core value</td></tr>
            <tr><td>Engagement</td><td>Weekly active users, active applications tracked, prep sessions per week</td><td>Indicates recurring utility</td></tr>
            <tr><td>Outcome</td><td>Interview rate, stage conversion, offer rate, time-to-interview</td><td>Most important user-value layer</td></tr>
            <tr><td>Revenue</td><td>Free-to-pro conversion, annual plan mix, retention by activated module</td><td>Shows business sustainability</td></tr>
          </tbody>
        </table>
      </section>

      <section id="pricing">
        <h2>Pricing strategy</h2>
        <p>The original brief proposes a three-tier model: Free, Pro, and Team, with the free tier remaining genuinely useful and pro focused on deeper intelligence, unlimited variants, analytics, and AI assistance. That logic is solid and should remain. The suggested price point of around $12 per month is intentionally accessible compared with stacked specialist subscriptions. PPP pricing is also consistent with the product’s global positioning and should be retained. :contentReference[oaicite:18]{index=18}</p>
        <table>
          <thead>
            <tr><th>Tier</th><th>Who it serves</th><th>What it includes</th></tr>
          </thead>
          <tbody>
            <tr><td>Free</td><td>Serious individual users who need baseline utility</td><td>Core prep content, limited study guides, ATS-safe resume builder, tracker, limited exports, basic JD matching</td></tr>
            <tr><td>Pro</td><td>Power users and active candidates</td><td>Unlimited variants, ATS intelligence, AI drill mode, deeper analytics, richer tailoring, company briefs</td></tr>
            <tr><td>Team</td><td>Bootcamps, candidate cohorts, companies</td><td>Admin controls, cohort analytics, shared guides, seat management, branded experiences</td></tr>
          </tbody>
        </table>
      </section>

      <section id="roadmap">
        <h2>Roadmap recommendation</h2>
        <h3>Phase 1 — MVP</h3>
        <ul>
          <li>Structured resume builder with robust export</li>
          <li>Application tracker with version linking</li>
          <li>Core interview prep library</li>
          <li>Basic JD matching</li>
          <li>User profiles, target roles, and analytics backbone</li>
        </ul>
        <h3>Phase 2 — Differentiation</h3>
        <ul>
          <li>ATS parse preview and explainable scoring</li>
          <li>AI drill mode</li>
          <li>Company briefs</li>
          <li>Community guides and question contributions</li>
        </ul>
        <h3>Phase 3 — Flywheel</h3>
        <ul>
          <li>Outcome intelligence</li>
          <li>ATS model improvements from anonymized feedback</li>
          <li>Team product</li>
          <li>Recruiter-discovery or verified company content, if strategically justified</li>
        </ul>
      </section>

      <section id="risks">
        <h2>Risks and mitigation</h2>
        <div class="grid-2">
          <div class="card">
            <h4>Risk: trying to build too much at once</h4>
            <p><strong>Mitigation:</strong> prioritize the spine: resume builder, tracker, core prep, and lightweight JD matching before deeper ATS simulation.</p>
          </div>
          <div class="card">
            <h4>Risk: ATS claims outpacing reality</h4>
            <p><strong>Mitigation:</strong> communicate confidence levels, parse previews, and recommendation logic rather than claiming exact recruiter truth.</p>
          </div>
          <div class="card">
            <h4>Risk: generic brand drift</h4>
            <p><strong>Mitigation:</strong> maintain engineer-specific language, examples, role taxonomies, and workflows throughout the product.</p>
          </div>
          <div class="card">
            <h4>Risk: weak free tier reduces trust</h4>
            <p><strong>Mitigation:</strong> keep the foundation fully useful. Charge for depth, speed, and advanced intelligence.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Final recommendation</h2>
        <p>PathMerit should be built as a coherent career operating system for software engineers rather than as a loose bundle of adjacent tools. The most important near-term choices are: make <code>TargetRole</code> a first-class cross-module object, deliver a genuinely trustworthy ATS-safe document system, make the application tracker the workflow spine, and reserve the most ambitious ATS simulation claims for areas where the product can provide explainable confidence rather than marketing fiction. The original concept is already strong; the main improvement is to make the system even more integrated and outcome-aware. :contentReference[oaicite:19]{index=19}</p>
        <div class="callout">
          <div class="label">One-sentence definition</div>
          <p><strong>PathMerit is the career platform for software engineers — helping them prepare, apply, and advance with interview prep, ATS-native documents, application tracking, and hiring intelligence in one focused system.</strong></p>
        </div>
      </section>

      <div class="footer-note">
        Generated as a standalone HTML product document for PathMerit, based on the uploaded conceptual brief and subsequent naming, positioning, and product decisions in this conversation. The document reflects the original brief’s core modules, audience, pricing philosophy, and ATS constraints, while adding recommended features and product-architecture guidance. :contentReference[oaicite:20]{index=20}
      </div>
    </main>
  </div>
</body>
</html>
```

BUILD_ROADMAP.html 35,202 chars

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PathMerit Build Roadmap — Next Steps</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0d0d10;
  --bg2: #13131a;
  --bg3: #191921;
  --ink: #ededf0;
  --ink-soft: #8888a0;
  --ink-muted: #444458;
  --accent: #7c6af7;
  --accent-soft: rgba(124,106,247,0.15);
  --rule: rgba(255,255,255,0.07);
  --green: #5ecf8a;
  --blue: #6aadee;
  --orange: #f0a060;
  --font-display: 'Syne', sans-serif;
  --font-body: 'Instrument Serif', Georgia, serif;
  --font-mono: 'DM Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
}

.container {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

nav {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid var(--rule);
  padding: 2rem 0;
  scrollbar-width: none;
}
nav::-webkit-scrollbar { display: none; }

.nav-logo {
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid var(--rule);
  margin-bottom: 1.5rem;
}
.nav-wordmark {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--ink);
}
.nav-doc-type {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-top: 0.25rem;
}

.nav-section {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding: 1rem 1.5rem 0.4rem;
}
.nav-item {
  display: block;
  padding: 0.4rem 1.5rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-soft);
  text-decoration: none;
  transition: all 0.12s;
  border-left: 2px solid transparent;
}
.nav-item:hover { color: var(--ink); background: rgba(255,255,255,0.03); }
.nav-item.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-soft); }

main {
  padding: 4rem 5rem;
  max-width: 920px;
}

.doc-header {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--rule);
}
.doc-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.doc-eyebrow::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--accent);
}
.doc-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}
.doc-title em { font-style: italic; font-family: var(--font-body); font-weight: 400; color: var(--accent); }
.doc-subtitle {
  font-size: 1.1rem;
  color: var(--ink-soft);
  max-width: 60ch;
  line-height: 1.6;
}
.doc-meta {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.doc-meta-item {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--ink-muted);
  letter-spacing: 0.04em;
}
.doc-meta-item strong { color: var(--ink-soft); font-weight: 500; }

.section {
  margin-bottom: 4rem;
}
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: -0.025em;
  margin-bottom: 0.25rem;
  color: var(--ink);
  scroll-margin-top: 2rem;
  position: relative;
  padding-left: 1.25rem;
}
h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.2em;
  bottom: 0.2em;
  width: 3px;
  background: var(--accent);
  border-radius: 2px;
}
.section-lead {
  font-size: 1.05rem;
  color: var(--ink-soft);
  margin-bottom: 2rem;
  max-width: 62ch;
}
h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 2rem 0 0.75rem;
  scroll-margin-top: 2rem;
}
p { margin-bottom: 1rem; color: var(--ink-soft); }
p strong { color: var(--ink); font-weight: 600; font-family: var(--font-display); }

.callout {
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  font-size: 0.93rem;
  line-height: 1.65;
}
.callout-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.callout-label::before { content: ''; width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
.callout-accent { border-color: rgba(124,106,247,0.3); background: var(--accent-soft); }
.callout-accent .callout-label { color: var(--accent); }
.callout-accent .callout-label::before { background: var(--accent); }
.callout-green { border-color: rgba(94,207,138,0.3); background: rgba(94,207,138,0.1); }
.callout-green .callout-label { color: var(--green); }
.callout-green .callout-label::before { background: var(--green); }
.callout-blue { border-color: rgba(106,173,238,0.3); background: rgba(106,173,238,0.1); }
.callout-blue .callout-label { color: var(--blue); }
.callout-blue .callout-label::before { background: var(--blue); }
.callout-orange { border-color: rgba(240,160,96,0.3); background: rgba(240,160,96,0.1); }
.callout-orange .callout-label { color: var(--orange); }
.callout-orange .callout-label::before { background: var(--orange); }

.phase-card {
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background: var(--bg2);
}
.phase-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--ink);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.phase-tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
  white-space: nowrap;
}
.phase-now { background: rgba(94,207,138,0.2); color: var(--green); }
.phase-next { background: rgba(124,106,247,0.2); color: var(--accent); }
.phase-future { background: rgba(106,173,238,0.2); color: var(--blue); }

.phase-duration {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--ink-muted);
  margin-bottom: 1rem;
}
.phase-content {
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.8;
}
.phase-content strong { color: var(--ink); }

.code-block {
  background: var(--bg3);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink-soft);
  overflow-x: auto;
  line-height: 1.6;
}
.code-comment { color: var(--ink-muted); }
.code-string { color: var(--green); }
.code-keyword { color: var(--accent); }

.timeline {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0.35rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--rule);
}
.tl-item {
  position: relative;
  margin-bottom: 2rem;
}
.tl-item::before {
  content: '';
  position: absolute;
  left: -1.75rem;
  top: 0.35rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--bg3);
  border: 2px solid var(--ink-muted);
}
.tl-item.now::before { background: var(--accent); border-color: var(--accent); box-shadow: 0 0 8px var(--accent); }
.tl-item.next::before { background: var(--bg3); border-color: var(--accent); }
.tl-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0.35rem;
}
.tl-item.now .tl-label { color: var(--accent); }
.tl-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 0.4rem;
}
.tl-items {
  font-size: 0.85rem;
  color: var(--ink-soft);
  line-height: 1.8;
}

.claude-code-session {
  background: var(--bg2);
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
.session-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}
.session-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.session-deliverable {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--green);
  margin-bottom: 0.75rem;
}
.session-prompt {
  font-size: 0.85rem;
  color: var(--ink-soft);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}
.session-time {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--ink-muted);
  letter-spacing: 0.04em;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  border: 1px solid var(--rule);
  border-radius: 6px;
  overflow: hidden;
}
thead {
  background: var(--bg3);
}
th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-muted);
  border-bottom: 1px solid var(--rule);
}
td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--rule);
  font-size: 0.9rem;
  color: var(--ink-soft);
}
tr:last-child td {
  border-bottom: none;
}

hr { border: none; border-top: 1px solid var(--rule); margin: 3rem 0; }

@media (max-width: 1000px) {
  .container { grid-template-columns: 1fr; }
  nav { display: none; }
  main { padding: 2rem; }
}
</style>
</head>
<body>
<div class="container">

<nav>
  <div class="nav-logo">
    <div class="nav-wordmark">Build Roadmap</div>
    <div class="nav-doc-type">PathMerit · Next Steps</div>
  </div>

  <div class="nav-section">Steps</div>
  <a class="nav-item" href="#design-system">Design System Integration</a>
  <a class="nav-item" href="#claude-code-phases">Claude Code Phases</a>
  <a class="nav-item" href="#week-1">Week 1: Foundation</a>
  <a class="nav-item" href="#week-2">Week 2: Core APIs</a>
  <a class="nav-item" href="#week-3">Week 3: Frontend</a>
  <a class="nav-item" href="#week-4">Week 4: Integration</a>
  <a class="nav-item" href="#decision-points">Decision Points</a>
  <a class="nav-item" href="#deployment">Deployment Strategy</a>
</nav>

<main>

<div class="doc-header">
  <div class="doc-eyebrow">Build Roadmap</div>
  <div class="doc-title">PathMerit <em>Next Steps</em></div>
  <div class="doc-subtitle">A phased, Claude Code-driven build plan with design system integration. From scaffold to MVP in 4 weeks.</div>
  <div class="doc-meta">
    <div class="doc-meta-item">Phase <strong>Month 1 Execution</strong></div>
    <div class="doc-meta-item">Updated <strong>April 2026</strong></div>
  </div>
</div>

<div class="section" id="overview">
  <h2>What you have now</h2>
  <p class="section-lead">You're equipped with everything needed to start building with maximum efficiency.</p>

  <div class="callout callout-green">
    <div class="callout-label">In your hands</div>
    <strong>1. Comprehensive monorepo scaffold prompt</strong> — 375 lines, fully specified for Claude Code execution. Includes directory structure, all dependencies, database schema, and seed data. <strong>2. Complete product brief</strong> — PathMerit architecture, feature specs, pricing, tech stack, and build timeline. <strong>3. Design system</strong> — Components, tokens, patterns, and styles ready to integrate. <strong>4. 10 tech question banks</strong> — 813 interview prep questions with full model answers.
  </div>
</div>

<hr>

<div class="section" id="design-system">
  <h2>Design System Integration</h2>
  <p class="section-lead">Your Claude Design system needs to become the source of truth for the Next.js frontend. The key is making design atomic and reusable.</p>

  <h3>Immediate action: Export your design system</h3>
  <p>From Claude Design, export:</p>
  <p><strong>1. Component library</strong> — All React components as .tsx files with props, default states, and variants. Export to `/packages/design-system/components/` folder. <strong>2. Design tokens</strong> — Colors, typography, spacing, shadows, border radius as TypeScript constants. Export to `/packages/design-system/tokens.ts`. <strong>3. Style guidelines</strong> — A markdown guide covering usage patterns, accessibility requirements, and do/don'ts. Export to `/packages/design-system/GUIDELINES.md`. <strong>4. Tailwind config</strong> — If Claude Design output is Tailwind-based, export the full config to `/apps/web/tailwind.config.ts`.</p>

  <h3>Integration strategy</h3>

  <div class="phase-card">
    <div class="phase-title">
      <span class="phase-tag phase-now">IMMEDIATE</span>
      Create a centralized design system package
    </div>
    <div class="phase-duration">Before any UI work starts</div>
    <div class="phase-content">
      Create <code>/packages/design-system</code> as a separate npm package. Structure:
      <div class="code-block">
/packages/design-system
  ├── package.json
  ├── /components
  │   ├── Button.tsx
  │   ├── Input.tsx
  │   ├── Card.tsx
  │   ├── Modal.tsx
  │   ├── Sidebar.tsx
  │   └── ... (all your Claude Design components)
  ├── /tokens
  │   ├── colors.ts
  │   ├── typography.ts
  │   ├── spacing.ts
  │   └── index.ts (exports all)
  ├── tailwind.config.ts (extend with your design tokens)
  ├── index.ts (barrel export all components + tokens)
  └── GUIDELINES.md
      </div>
      This package is imported by both `/apps/web` (frontend) and can be published independently later.
    </div>
  </div>

  <h3>The pattern for every component</h3>

  <div class="code-block">
<span class="code-comment">// /packages/design-system/components/Button.tsx</span>
<span class="code-keyword">import</span> React <span class="code-keyword">from</span> <span class="code-string">'react'</span>;
<span class="code-keyword">import</span> { cva, type VariantProps } <span class="code-keyword">from</span> <span class="code-string">'class-variance-authority'</span>;

<span class="code-keyword">const</span> buttonVariants = cva(
  <span class="code-comment">// base styles</span>
  <span class="code-string">'inline-flex items-center justify-center rounded-md font-medium transition-colors'</span>,
  {
    variants: {
      variant: {
        primary: <span class="code-string">'bg-accent text-ink hover:bg-accent-hover'</span>,
        secondary: <span class="code-string">'bg-bg3 text-ink-soft hover:bg-bg4'</span>,
        ghost: <span class="code-string">'bg-transparent text-ink-soft hover:text-ink'</span>,
      },
      size: {
        sm: <span class="code-string">'h-8 px-3 text-sm'</span>,
        md: <span class="code-string">'h-10 px-4 text-base'</span>,
        lg: <span class="code-string">'h-12 px-6 text-lg'</span>,
      },
    },
    defaultVariants: {
      variant: <span class="code-string">'primary'</span>,
      size: <span class="code-string">'md'</span>,
    },
  }
);

<span class="code-keyword">interface</span> ButtonProps
  <span class="code-keyword">extends</span> React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
    VariantProps&lt;<span class="code-keyword">typeof</span> buttonVariants&gt; {}

<span class="code-keyword">const</span> Button = React.forwardRef&lt;HTMLButtonElement, ButtonProps&gt;(
  ({ className, variant, size, ...props }, ref) => (
    &lt;button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    /&gt;
  )
);

<span class="code-keyword">export</span> { Button, buttonVariants };
      </div>

  <p>Use <strong>Class Variance Authority (CVA)</strong> for composable component variants. This pattern is battle-tested and allows components to scale from simple to complex without prop drilling.</p>

  <h3>Tailwind + design tokens workflow</h3>
  <p>Your Tailwind config should be the source of truth for all design decisions:</p>

  <div class="code-block">
<span class="code-comment">// tailwind.config.ts</span>
<span class="code-keyword">import</span> type { Config } <span class="code-keyword">from</span> <span class="code-string">'tailwindcss'</span>;
<span class="code-keyword">import</span> { tokens } <span class="code-keyword">from</span> <span class="code-string">'@pathmerit/design-system'</span>;

<span class="code-keyword">export</span> <span class="code-keyword">default</span> {
  content: [
    <span class="code-string">'./src/**/*.{js,ts,jsx,tsx}'</span>,
    <span class="code-string">'../../packages/design-system/**/*.tsx'</span>,
  ],
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.typography.sizes,
      fontFamily: tokens.typography.family,
    },
  },
} satisfies Config;
      </div>

  <div class="callout callout-accent">
    <div class="callout-label">Critical: No hardcoded colors or spacing in components</div>
    Every component should use Tailwind utilities that reference design tokens. This ensures consistency and makes design updates trivial — change the token, update everywhere.
  </div>
</div>

<hr>

<div class="section" id="claude-code-phases">
  <h2>Claude Code Execution Strategy</h2>
  <p class="section-lead">The build is divided into 4 sequential Claude Code sessions, each producing a distinct deliverable. You execute them in order, reviewing and validating between sessions.</p>

  <div class="timeline">

    <div class="tl-item now">
      <div class="tl-label">Session 1 · Immediate</div>
      <div class="tl-title">Monorepo Scaffold + Database Foundation</div>
      <div class="tl-items">
        <strong>Duration:</strong> 2.5–3 hours Claude Code + 30 mins validation
        <br><strong>Prompt:</strong> Copy CLAUDE_CODE_PROMPT.md directly
        <br><strong>Deliverable:</strong> Working local dev environment with Postgres, schema, seed data, GitHub Actions CI
        <br><strong>Validation:</strong> Run `pnpm dev`, verify Postgres connects, confirm seed data populated
        <br><strong>Checkpoint:</strong> Commit to GitHub. This is your foundation — don't move forward until it's solid.
      </div>
    </div>

    <div class="tl-item next">
      <div class="tl-label">Session 2 · After Session 1 validates</div>
      <div class="tl-title">Design System Package + Auth APIs</div>
      <div class="tl-items">
        <strong>Duration:</strong> 2–2.5 hours Claude Code + 30 mins validation
        <br><strong>Prompt:</strong> Create design system package from your Claude Design export, then build auth module (controller + service)
        <br><strong>Deliverable:</strong> /packages/design-system with all components + tokens, working /auth endpoints, JWT token refresh logic
        <br><strong>Validation:</strong> Test auth endpoints with curl, verify tokens decode, check design system imports work in Next.js
        <br><strong>Checkpoint:</strong> Git commit. Design system is now the source of truth for all UI.
      </div>
    </div>

    <div class="tl-item next">
      <div class="tl-label">Session 3 · After Session 2 validates</div>
      <div class="tl-title">Resume Builder + Application Tracker APIs</div>
      <div class="tl-items">
        <strong>Duration:</strong> 3 hours Claude Code + 45 mins validation
        <br><strong>Prompt:</strong> Build resume module (CRUD, variant logic, PDF export job queueing), application tracker module (CRUD, contact log, status updates)
        <br><strong>Deliverable:</strong> Full API endpoints for resumes and applications, Postgres jobs table integration, worker service skeleton
        <br><strong>Validation:</strong> Create a resume via POST, list variants, queue PDF export, verify job appears in jobs table
        <br><strong>Checkpoint:</strong> Git commit. Core backend APIs are now complete.
      </div>
    </div>

    <div class="tl-item next">
      <div class="tl-label">Session 4 · After Session 3 validates</div>
      <div class="tl-title">Interview Prep APIs + Study Guide Core</div>
      <div class="tl-items">
        <strong>Duration:</strong> 2.5 hours Claude Code + 30 mins validation
        <br><strong>Prompt:</strong> Build prep module (questions CRUD, study guides, flashcard logic, progress tracking with spaced repetition)
        <br><strong>Deliverable:</strong> Question import endpoints, study guide builder API, flashcard endpoint with SRS algorithm, progress persistence
        <br><strong>Validation:</strong> Create study guide, add questions, fetch next flashcard (should return lowest-confidence + most-due), verify spaced repetition scheduling works
        <br><strong>Checkpoint:</strong> Git commit. All backend APIs are complete.
      </div>
    </div>

  </div>

  <div class="callout callout-blue">
    <div class="callout-label">After all 4 sessions complete</div>
    You'll have a fully functional backend with all core APIs, the design system ready for UI work, and the foundation for the frontend. This is when you start building React components using the design system and connecting them to the APIs.
  </div>
</div>

<hr>

<div class="section" id="week-1">
  <h2>Week 1: Foundation (Right Now)</h2>

  <div class="claude-code-session">
    <div class="session-label">Claude Code Session 1</div>
    <div class="session-name">Monorepo Scaffold</div>
    <div class="session-deliverable">✓ /pathmerit monorepo with Postgres, schema, seed data, CI/CD</div>
    <div class="session-prompt">
      Execute the monorepo scaffold prompt. Copy the entire content of CLAUDE_CODE_PROMPT.md and paste it into Claude Code with instruction: "Execute this scaffold for PathMerit. Build the complete monorepo structure, install dependencies, create the database schema with all tables, seed with lookups data, and verify a working local dev environment."
    </div>
    <div class="session-time">Execution: 2.5–3 hours · Validation: 30 minutes</div>
  </div>

  <h3>Parallel work while Claude Code executes (you can do this while waiting)</h3>
  <p><strong>Export your design system.</strong> Open Claude Design and export all components as .tsx files. Create a folder `/packages/design-system` in your local clone and prepare the structure. Don't wait for the scaffold to finish — get this ready so you can integrate it in Session 2.</p>

  <p><strong>Set up GitHub repository.</strong> Create a GitHub repo for `pathmerit`. Initialize with a basic README explaining the project. You'll commit the scaffold output here.</p>

  <p><strong>Prepare GitHub Actions secrets.</strong> In your repo settings, add secrets for: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET, STRIPE_SECRET_KEY, RESEND_API_KEY. These won't be used until later, but setting them now means the CI pipeline won't fail on missing env vars.</p>

  <div class="callout callout-accent">
    <div class="callout-label">After Session 1 succeeds</div>
    You have a working dev environment. Run `pnpm dev` and verify: Next.js starts on localhost:3000, NestJS starts on localhost:3001, Postgres is running, you can connect to the database, and seed data exists (check `select * from technologies` — should return 200+ rows).
  </div>
</div>

<hr>

<div class="section" id="week-2">
  <h2>Week 2: APIs + Design System (Days 5–10)</h2>

  <div class="claude-code-session">
    <div class="session-label">Claude Code Session 2a</div>
    <div class="session-name">Design System Package Creation</div>
    <div class="session-deliverable">✓ /packages/design-system with all components + tokens</div>
    <div class="session-prompt">
      "Create the design system package at /packages/design-system. Structure: /components with all exported .tsx files from Claude Design, /tokens with colors.ts, typography.ts, spacing.ts. Create tailwind.config.ts that extends with design tokens. Use class-variance-authority for component variants. Export everything from index.ts. Include a GUIDELINES.md with usage patterns and accessibility notes. Make sure /apps/web can import components as @pathmerit/design-system/components/Button."
    </div>
    <div class="session-time">Execution: 1.5 hours · Validation: 20 minutes</div>
  </div>

  <div class="claude-code-session">
    <div class="session-label">Claude Code Session 2b</div>
    <div class="session-name">Auth Module + Better Auth Integration</div>
    <div class="session-deliverable">✓ Full auth system: signup, login, logout, refresh, Google SSO</div>
    <div class="session-prompt">
      "Build the auth module in /apps/api/src/modules/auth. Create auth.controller.ts with endpoints: POST /auth/signup (email/password), POST /auth/login, POST /auth/logout, POST /auth/refresh (JWT refresh), POST /auth/google (Google SSO callback), GET /auth/me (return current user). Create auth.service.ts that uses Better Auth for Google OAuth, bcrypt for password hashing, JWT for tokens. Store sessions in Postgres (sessions table). Include full error handling, input validation with Zod, and proper HTTP status codes. The service should integrate with the users table and handle session creation/deletion."
    </div>
    <div class="session-time">Execution: 2 hours · Validation: 30 minutes</div>
  </div>

  <div class="callout callout-green">
    <div class="callout-label">After Session 2 completes</div>
    Design system is fully integrated. Auth endpoints respond: test signup with curl, verify tokens, confirm sessions persist in Postgres. You're ready to build the UI.
  </div>
</div>

<hr>

<div class="section" id="week-3">
  <h2>Week 3: Core APIs (Days 11–17)</h2>

  <div class="claude-code-session">
    <div class="session-label">Claude Code Session 3</div>
    <div class="session-name">Resume Builder + Application Tracker APIs</div>
    <div class="session-deliverable">✓ Resume CRUD, variants, PDF export queueing · Application CRUD, contact log, status updates</div>
    <div class="session-prompt">
      "Build the resume and application tracker modules. For resumes (in /apps/api/src/modules/resumes): implement POST /resumes (create base resume), GET /resumes/:id, PUT /resumes/:id (update), DELETE /resumes/:id (soft delete), POST /resumes/:id/variants (create variant), POST /resumes/:id/work-experience (add experience), PUT /resumes/:id/work-experience/:expId (update experience), POST /resumes/:id/export-pdf (queue PDF export job). For applications (in /apps/api/src/modules/applications): POST /applications (create), GET /applications (list with filters), PUT /applications/:id (update status), DELETE /applications/:id, POST /applications/:id/contacts (add contact log), GET /applications/:id/contacts. Include pagination, filtering by status/company, permission checks (users can only modify their own records), and soft deletes. Use the Postgres jobs table to queue PDF exports. Return proper error messages and status codes."
    </div>
    <div class="session-time">Execution: 3 hours · Validation: 45 minutes</div>
  </div>

  <div class="callout callout-blue">
    <div class="callout-label">After Session 3 completes</div>
    Create a test resume via API, create an application, add a contact log entry, queue a PDF export and verify it appears in the jobs table. All backend CRUD is working.
  </div>
</div>

<hr>

<div class="section" id="week-4">
  <h2>Week 4: Interview Prep APIs (Days 18–24)</h2>

  <div class="claude-code-session">
    <div class="session-label">Claude Code Session 4</div>
    <div class="session-name">Interview Prep + Study Guides</div>
    <div class="session-deliverable">✓ Questions CRUD, study guide builder, flashcard API with SRS</div>
    <div class="session-prompt">
      "Build the interview prep module in /apps/api/src/modules/prep. Create: POST /questions (bulk import questions), GET /questions (search, filter by module/difficulty), POST /study-guides (create guide with selected modules), GET /study-guides/:id, PUT /study-guides/:id, GET /study-guides/:id/flashcard (return next card to review based on spaced repetition), PUT /study-guides/:id/question/:qId/response (record confidence rating 1-5), GET /study-guides/:id/progress (show progress stats). Implement spaced repetition scheduling: next_review_at = now + interval based on confidence (confidence 5 = 7 days, confidence 1 = 1 day). The flashcard endpoint should return: least-recently-reviewed first, then lowest-confidence first, prioritizing due cards. Include stats showing completion rate, average confidence, weak areas."
    </div>
    <div class="session-time">Execution: 2.5 hours · Validation: 30 minutes</div>
  </div>

  <div class="callout callout-green">
    <div class="callout-label">After Session 4 completes</div>
    All backend APIs are complete. Create a study guide, fetch the next flashcard, record a confidence rating, and verify the spaced repetition scheduling calculates correctly. You now have a fully functional backend ready for frontend integration.
  </div>
</div>

<hr>

<div class="section" id="decision-points">
  <h2>Decision Points</h2>

  <h3>After all 4 Claude Code sessions are complete</h3>
  <p>You have a choice for the next phase (building the frontend UI and connecting it to the APIs):</p>

  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Approach</th>
        <th>Timeline</th>
        <th>Best for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Claude Code Session 5+</strong></td>
        <td>Continue with Claude Code to build React components, forms, pages, and API integration layers. One session per feature (auth UI, resume builder UI, application tracker UI, study guide UI).</td>
        <td>4–5 more sessions (2–3 weeks)</td>
        <td>If you want to maximize automation and move fastest toward a working product.</td>
      </tr>
      <tr>
        <td><strong>Manual UI building</strong></td>
        <td>You use your design system + Tailwind to build the React components manually. Use `npm run dev` and build incrementally, testing against the APIs as you go.</td>
        <td>3–4 weeks</td>
        <td>If you want hands-on control over the UI layer and enjoy the React building process.</td>
      </tr>
      <tr>
        <td><strong>Hybrid (recommended)</strong></td>
        <td>Use Claude Code for complex pages (form-heavy, with validation + API integration), build simple pages manually (landing, settings, basic cards). This balances speed and control.</td>
        <td>2–3 weeks</td>
        <td>Most practical for staying on track while maintaining the ability to tweak specific UI details.</td>
      </tr>
    </tbody>
  </table>

  <div class="callout callout-accent">
    <div class="callout-label">Recommendation: Hybrid approach</div>
    Use Claude Code for: resume builder form (complex, heavily nested), application tracker (list + Kanban + modal logic), study guide builder (multi-step). Build manually: auth pages (simple), dashboard (mostly layout), settings page (straightforward forms). This gets you to MVP fastest while keeping UI control where it matters.
  </div>
</div>

<hr>

<div class="section" id="deployment">
  <h2>Deployment Strategy</h2>

  <h3>After MVP is feature-complete (end of Week 4)</h3>
  <p>You'll have a working product. The deployment path:</p>

  <div class="phase-card">
    <div class="phase-title">
      <span class="phase-tag phase-next">Week 5</span>
      Production deployment readiness
    </div>
    <div class="phase-content">
      <strong>Frontend (Vercel):</strong> Connect GitHub repo, set NEXT_PUBLIC_API_URL to production API URL, deploy. Vercel handles TLS, edge CDN, previews per PR automatically.
      <br><br>
      <strong>Backend (Railway):</strong> Connect GitHub repo, set environment variables (DATABASE_URL pointing to Neon, JWT_SECRET, GOOGLE_CLIENT_ID/SECRET, STRIPE_SECRET_KEY, RESEND_API_KEY), deploy. Railway handles scaling, zero-downtime deploys, and logs.
      <br><br>
      <strong>Database (Neon):</strong> Create production database on Neon (separate from dev database). Use production CONNECTION_STRING in Railway environment. Neon handles backups automatically.
      <br><br>
      <strong>Domain:</strong> Buy domain (pathmerit.com or pathmerit.dev). Point to Vercel for frontend, update Railway with custom domain for API (api.pathmerit.com or similar). Set up SSL certificates (Vercel + Railway both handle this automatically).
    </div>
  </div>

  <h3>Go-live checklist</h3>
  <p><strong>Backend:</strong> Environment variables all set, database migrations run on production database, seed data loaded, auth endpoints return valid tokens, Stripe webhook signing secret configured. <strong>Frontend:</strong> NEXT_PUBLIC_API_URL points to production, all API calls use correct endpoints, error handling is in place, analytics/Sentry configured. <strong>Infrastructure:</strong> Domain DNS points to Vercel, API domain configured on Railway, HTTPS enforced everywhere. <strong>Testing:</strong> Full signup flow on production, create a resume, queue an export, create an application, answer some interview questions. No errors in Sentry.</p>

  <div class="callout callout-orange">
    <div class="callout-label">Launch ready</div>
    Once all items above are checked, you're ready to share PathMerit publicly. Announce on Product Hunt, share with your network, and start collecting beta feedback. The MVP is complete.
  </div>
</div>

<hr>

<div class="section" id="summary">
  <h2>Summary: Your Next 4 Weeks</h2>

  <p><strong>Week 1:</strong> Claude Code scaffold (monorepo, database, seed data, CI). Parallel: prepare design system export, GitHub setup.</p>

  <p><strong>Week 2:</strong> Design system package + auth APIs (design system, auth module, Better Auth integration).</p>

  <p><strong>Week 3:</strong> Resume + Application APIs (resume builder CRUD, variant logic, application tracker CRUD, contact log).</p>

  <p><strong>Week 4:</strong> Interview Prep APIs (questions, study guides, flashcards, spaced repetition).</p>

  <p><strong>Week 5+:</strong> Frontend UI (React components + pages, forms, API integration, testing).</p>

  <p><strong>Week 6+:</strong> Deployment (Vercel + Railway + Neon, domain setup, go-live).</p>

  <div class="callout callout-green">
    <div class="callout-label">You're ready</div>
    You have the complete blueprint. The scaffold prompt is battle-tested. Your design system is ready to integrate. The product brief defines exactly what to build. The question banks provide the intellectual assets. All that's left is execution. Start with Claude Code Session 1. Good luck.
  </div>
</div>

</main>
</div>

<script>
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
</script>
</body>
</html>
```

PathMerit_Master_Source_of_Truth.html 49,032 chars

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PathMerit — Master Source of Truth</title>
<style>
:root {
  --bg: #090c14;
  --bg-2: #0d1220;
  --panel: #12182a;
  --panel-2: #172036;
  --panel-3: #1d2945;
  --text: #f4f7ff;
  --muted: #a9b4cc;
  --soft: #75839e;
  --line: rgba(255,255,255,0.095);
  --line-2: rgba(255,255,255,0.15);
  --accent: #7c8cff;
  --accent-2: #5fd0b3;
  --accent-3: #f3c46a;
  --danger: #f08a8a;
  --blue: #66b7ff;
  --purple: #a78bfa;
  --radius: 18px;
  --shadow: 0 22px 70px rgba(0,0,0,0.30);
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  --sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background:
    radial-gradient(circle at 12% 0%, rgba(124,140,255,0.18), transparent 34rem),
    radial-gradient(circle at 82% 6%, rgba(95,208,179,0.12), transparent 32rem),
    linear-gradient(180deg, var(--bg) 0%, #0b1020 60%, #080b12 100%);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.6;
}

a { color: inherit; }
p { color: var(--muted); margin: 0 0 12px; }
ul, ol { color: var(--muted); margin: 10px 0 0; padding-left: 22px; }
li { margin: 5px 0; }
strong { color: var(--text); }

.layout {
  display: grid;
  grid-template-columns: 310px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid var(--line);
  background: rgba(8,12,22,0.72);
  backdrop-filter: blur(14px);
  padding: 24px 18px 32px;
}

.brand {
  padding: 4px 8px 20px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 18px;
}

.brand-kicker {
  font: 800 0.66rem/1.4 var(--mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin-bottom: 8px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 11px;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(124,140,255,0.45);
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  gap: 4px;
  padding: 8px;
  background: linear-gradient(135deg, rgba(124,140,255,0.18), rgba(95,208,179,0.07));
  box-shadow: 0 0 30px rgba(124,140,255,0.14);
}

.logo-mark span {
  display: block;
  border-radius: 999px;
  background: var(--accent);
}

.logo-mark span:nth-child(1) { height: 35%; opacity: 0.55; }
.logo-mark span:nth-child(2) { height: 62%; opacity: 0.75; }
.logo-mark span:nth-child(3) { height: 92%; }

.wordmark {
  font-size: 1.45rem;
  line-height: 1;
  font-weight: 850;
  letter-spacing: -0.055em;
}

.tagline {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.84rem;
}

.version-pill {
  display: inline-flex;
  margin-top: 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 9px;
  color: var(--soft);
  font-size: 0.72rem;
  gap: 8px;
  align-items: center;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: var(--accent-2);
  border-radius: 999px;
  box-shadow: 0 0 12px rgba(95,208,179,0.8);
}

.search-wrap {
  margin: 16px 8px 18px;
}

.search-wrap input {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.045);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
  font-size: 0.86rem;
}

.search-wrap input:focus {
  border-color: rgba(124,140,255,0.65);
  box-shadow: 0 0 0 3px rgba(124,140,255,0.11);
}

.nav-group {
  margin: 13px 0 8px;
}

.nav-title {
  font: 800 0.66rem/1.4 var(--mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--soft);
  margin: 16px 8px 7px;
}

.nav-link {
  display: block;
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.88rem;
  border: 1px solid transparent;
}

.nav-link:hover, .nav-link.active {
  color: var(--text);
  background: rgba(124,140,255,0.10);
  border-color: rgba(124,140,255,0.18);
}

.nav-sub {
  margin: 1px 0 8px 11px;
  padding-left: 10px;
  border-left: 1px solid var(--line);
}

.nav-sub a {
  display: block;
  color: var(--soft);
  text-decoration: none;
  font-size: 0.78rem;
  padding: 4px 8px;
  border-radius: 8px;
}

.nav-sub a:hover { color: var(--muted); background: rgba(255,255,255,0.04); }

main {
  max-width: 1280px;
  width: 100%;
  padding: 48px 40px 96px;
}

.hero {
  border: 1px solid var(--line);
  background:
    linear-gradient(135deg, rgba(124,140,255,0.17), rgba(95,208,179,0.07)),
    rgba(255,255,255,0.035);
  border-radius: 30px;
  padding: 38px;
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.eyebrow {
  color: var(--accent-2);
  font: 850 0.72rem/1.4 var(--mono);
  text-transform: uppercase;
  letter-spacing: 0.13em;
  margin-bottom: 14px;
}

h1, h2, h3, h4 {
  line-height: 1.15;
  margin: 0;
}

h1 {
  font-size: clamp(2.4rem, 6vw, 5.2rem);
  letter-spacing: -0.075em;
  max-width: 920px;
}

.hero-subtitle {
  max-width: 790px;
  margin-top: 20px;
  color: #c4ccdf;
  font-size: 1.12rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.button {
  appearance: none;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  border-radius: 999px;
  padding: 9px 13px;
  font-weight: 750;
  font-size: 0.84rem;
  cursor: pointer;
  text-decoration: none;
}

.button.primary {
  background: linear-gradient(135deg, var(--accent), #9aa6ff);
  color: #07101e;
  border-color: transparent;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 14px;
  margin-top: 28px;
}

.metric {
  background: rgba(0,0,0,0.18);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.metric strong {
  display: block;
  font-size: 1.55rem;
  letter-spacing: -0.05em;
}

.metric span {
  display: block;
  color: var(--soft);
  font-size: 0.84rem;
}

.section {
  margin-top: 26px;
  background: rgba(255,255,255,0.035);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: 0 12px 34px rgba(0,0,0,0.15);
}

.section.hidden-by-search {
  display: none;
}

.section-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
}

.section h2 {
  font-size: clamp(1.75rem, 3.2vw, 2.65rem);
  letter-spacing: -0.055em;
  margin-bottom: 9px;
}

.section-lead {
  color: var(--muted);
  max-width: 850px;
}

.h2-kicker {
  font: 850 0.68rem/1.4 var(--mono);
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 9px;
}

.subsection {
  margin-top: 24px;
}

.subsection h3 {
  font-size: 1.25rem;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}

.grid {
  display: grid;
  gap: 14px;
}

.grid-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
.grid-4 { grid-template-columns: repeat(4, minmax(0,1fr)); }

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.card.highlight {
  background: linear-gradient(180deg, rgba(124,140,255,0.14), rgba(255,255,255,0.03));
  border-color: rgba(124,140,255,0.32);
}

.card h4 {
  font-size: 1.02rem;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.card p { font-size: 0.91rem; }

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 10px;
}

.badge {
  display: inline-flex;
  border-radius: 999px;
  padding: 4px 9px;
  border: 1px solid var(--line);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.badge.mvp { color: var(--accent-2); background: rgba(95,208,179,0.10); border-color: rgba(95,208,179,0.24); }
.badge.poc { color: var(--blue); background: rgba(102,183,255,0.10); border-color: rgba(102,183,255,0.22); }
.badge.growth { color: var(--accent); background: rgba(124,140,255,0.13); border-color: rgba(124,140,255,0.28); }
.badge.future { color: var(--accent-3); background: rgba(243,196,106,0.10); border-color: rgba(243,196,106,0.24); }
.badge.risk { color: var(--danger); background: rgba(240,138,138,0.10); border-color: rgba(240,138,138,0.24); }
.badge.brand { color: var(--purple); background: rgba(167,139,250,0.11); border-color: rgba(167,139,250,0.24); }

.callout {
  border: 1px solid rgba(124,140,255,0.28);
  background: rgba(124,140,255,0.11);
  border-radius: 16px;
  padding: 18px;
  margin-top: 16px;
}

.callout.green {
  border-color: rgba(95,208,179,0.28);
  background: rgba(95,208,179,0.08);
}

.callout.gold {
  border-color: rgba(243,196,106,0.30);
  background: rgba(243,196,106,0.08);
}

.callout.red {
  border-color: rgba(240,138,138,0.30);
  background: rgba(240,138,138,0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 15px;
  margin: 16px 0 6px;
  background: var(--panel);
  border: 1px solid var(--line);
}

th, td {
  padding: 13px 15px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--soft);
  background: rgba(255,255,255,0.04);
  font: 850 0.70rem/1.4 var(--mono);
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

td { color: var(--muted); font-size: 0.92rem; }
tr:last-child td { border-bottom: none; }

code, pre {
  font-family: var(--mono);
}

code {
  background: rgba(255,255,255,0.075);
  color: var(--text);
  padding: 2px 6px;
  border-radius: 7px;
}

pre {
  overflow-x: auto;
  background: #090d18;
  border: 1px solid var(--line);
  border-radius: 16px;
  color: #dce5ff;
  padding: 16px;
  font-size: 0.82rem;
  line-height: 1.55;
}

.flow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.flow-step {
  flex: 1 1 155px;
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 16px;
  padding: 15px;
}

.flow-step .num {
  width: 27px;
  height: 27px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent);
  color: #07101e;
  font-weight: 900;
  margin-bottom: 9px;
}

.timeline {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.phase {
  display: grid;
  grid-template-columns: 165px minmax(0,1fr);
  gap: 18px;
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 18px;
  padding: 18px;
}

.phase-title {
  border-right: 1px solid var(--line);
  padding-right: 16px;
}

.phase-title small {
  display: block;
  color: var(--soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font: 850 0.69rem/1.4 var(--mono);
  margin-bottom: 6px;
}

.phase-title strong { display: block; font-size: 1rem; }

.decision-log td:first-child, .decision-log th:first-child,
.changelog td:first-child, .changelog th:first-child {
  white-space: nowrap;
}

hr.soft {
  border: none;
  border-top: 1px solid var(--line);
  margin: 26px 0;
}

.footer {
  color: var(--soft);
  margin: 36px 0 0;
  font-size: 0.82rem;
  text-align: center;
}

@media (max-width: 1050px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { position: relative; height: auto; }
  main { padding: 28px 20px 72px; }
  .metric-grid, .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
  .phase { grid-template-columns: 1fr; }
  .phase-title { border-right: 0; border-bottom: 1px solid var(--line); padding-right: 0; padding-bottom: 14px; }
}

@media print {
  body { background: white; color: black; }
  .sidebar, .hero-actions, .search-wrap { display: none; }
  .layout { display: block; }
  main { max-width: none; padding: 0; }
  .section, .hero, .card, table { box-shadow: none; background: white; border-color: #ddd; }
  p, li, td { color: #333; }
  strong, h1, h2, h3, h4 { color: #111; }
}
</style>
</head>

<body>
<div class="layout">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-kicker">Master Source of Truth</div>
      <div class="brand-row">
        <div class="logo-mark" aria-label="PathMerit signal frame logo concept"><span></span><span></span><span></span></div>
        <div>
          <div class="wordmark">PathMerit</div>
          <div class="tagline">Build your path. Prove your merit.</div>
        </div>
      </div>
      <div class="version-pill"><span class="status-dot"></span><span>v0.1 · Working consolidation</span></div>
    </div>

    <div class="search-wrap">
      <input id="searchInput" type="search" placeholder="Search this source of truth..." />
    </div>

    <nav>
      <div class="nav-group">
        <div class="nav-title">Control Center</div>
        <a class="nav-link" href="#dashboard">Dashboard</a>
        <a class="nav-link" href="#governance">Update Protocol</a>
        <a class="nav-link" href="#decision-log">Decision Log</a>
      </div>

      <div class="nav-group">
        <div class="nav-title">Product</div>
        <a class="nav-link" href="#primary-product-source">Primary Product Source</a>
        <div class="nav-sub">
          <a href="#product-positioning">Positioning</a>
          <a href="#product-modules">Modules</a>
          <a href="#data-model">Shared data model</a>
          <a href="#product-roadmap">Roadmap</a>
        </div>
        <a class="nav-link" href="#product-discovery">Product Discovery</a>
        <div class="nav-sub">
          <a href="#discovery-problem">Problem</a>
          <a href="#discovery-icp">ICP</a>
          <a href="#discovery-validation">Validation</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-title">Build</div>
        <a class="nav-link" href="#architecture-source">Architecture Source</a>
        <div class="nav-sub">
          <a href="#architecture-stack">Stack</a>
          <a href="#architecture-jobs">Jobs</a>
          <a href="#architecture-upgrade">Upgrade path</a>
        </div>
        <a class="nav-link" href="#development-tracking">Development Tracking</a>
        <a class="nav-link" href="#execution-source">Execution Source</a>
      </div>

      <div class="nav-group">
        <div class="nav-title">Growth</div>
        <a class="nav-link" href="#feature-expansion-source">Feature Expansion Source</a>
        <a class="nav-link" href="#marketing-strategy">Marketing Strategy</a>
        <a class="nav-link" href="#pitch-deck">Pitch Deck</a>
      </div>

      <div class="nav-group">
        <div class="nav-title">Brand</div>
        <a class="nav-link" href="#brand-design-source">Brand / Design Source</a>
        <div class="nav-sub">
          <a href="#brand-foundations">Foundations</a>
          <a href="#logo-system">Logo</a>
          <a href="#design-system">Design system</a>
        </div>
      </div>
    </nav>
  </aside>

  <main>
    <section class="hero" id="dashboard">
      <div class="eyebrow">PathMerit Master Source</div>
      <h1>One living document for product, build, brand, growth, and pitch.</h1>
      <p class="hero-subtitle">
        This file consolidates the product guide, architecture decisions, development tracking, feature expansion plan,
        execution roadmap, brand/design direction, discovery work, marketing strategy, and pitch deck narrative into one updateable source of truth.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="#governance">Start with update protocol</a>
        <a class="button" href="#primary-product-source">Go to product source</a>
        <a class="button" href="#development-tracking">Go to development tracking</a>
        <button class="button" onclick="window.print()">Print / Save PDF</button>
      </div>
      <div class="metric-grid">
        <div class="metric"><strong>9</strong><span>top-level source-of-truth menus</span></div>
        <div class="metric"><strong>6</strong><span>core product modules</span></div>
        <div class="metric"><strong>5</strong><span>roadmap phases</span></div>
        <div class="metric"><strong>1</strong><span>updateable master file</span></div>
      </div>
    </section>

    <section class="section" id="governance" data-keywords="source of truth governance update protocol rules changelog decisions">
      <div class="section-header">
        <div>
          <div class="h2-kicker">Control Center</div>
          <h2>Source-of-truth update protocol</h2>
          <p class="section-lead">
            Every major decision should land here first. This file should not be a pretty archive; it should be the operating document
            that prevents product, architecture, design, and go-to-market plans from drifting apart.
          </p>
        </div>
        <span class="badge mvp">Always active</span>
      </div>

      <div class="grid grid-3">
        <div class="card highlight">
          <h4>1. Decision-first updates</h4>
          <p>When a feature, stack choice, roadmap item, pricing change, or brand decision changes, update the relevant section and add a row to the decision log.</p>
        </div>
        <div class="card highlight">
          <h4>2. One owner per section</h4>
          <p>Each menu acts like a product area. Updates should be made in the section where the decision lives, then referenced elsewhere only when needed.</p>
        </div>
        <div class="card highlight">
          <h4>3. No orphan plans</h4>
          <p>A new feature should also update roadmap, development tracking, data model/API impact, and marketing/pitch relevance if applicable.</p>
        </div>
      </div>

      <div class="subsection">
        <h3>Update checklist</h3>
        <table>
          <tr><th>When changing...</th><th>Always update...</th><th>Also check...</th></tr>
          <tr><td>Product feature</td><td>Feature Expansion, Product Modules, Roadmap</td><td>Data model, API scope, pricing tier, pitch narrative</td></tr>
          <tr><td>Architecture decision</td><td>Architecture Source, Decision Log</td><td>Execution plan, deployment notes, cost assumptions</td></tr>
          <tr><td>Brand/design decision</td><td>Brand / Design Source</td><td>Marketing copy, homepage, pitch deck visuals</td></tr>
          <tr><td>Development status</td><td>Development Tracking</td><td>Execution Source, open decisions, changelog</td></tr>
          <tr><td>Go-to-market change</td><td>Marketing Strategy, Pitch Deck</td><td>ICP, positioning, product packaging</td></tr>
        </table>
      </div>

      <div class="callout green">
        <strong>Working rule:</strong> if the plan exists only in a chat message, it is not yet part of the PathMerit plan. It becomes real only once this file is updated.
      </div>
    </section>

    <section class="section" id="decision-log" data-keywords="decision log decisions changelog version history">
      <div class="h2-kicker">Control Center</div>
      <h2>Decision log and changelog</h2>
      <p class="section-lead">This section should be updated every time the master source changes in a meaningful way.</p>

      <table class="decision-log">
        <tr><th>Date</th><th>Decision</th><th>Reason</th><th>Status</th></tr>
        <tr>
          <td>2026-04-24</td>
          <td>Use <strong>PathMerit</strong> as product name.</td>
          <td>Exact .com was available, and the name supports the complete journey: preparation, applications, and career progression.</td>
          <td><span class="badge mvp">Accepted</span></td>
        </tr>
        <tr>
          <td>2026-04-24</td>
          <td>Use this consolidated HTML as the single source of truth.</td>
          <td>Previous product, architecture, roadmap, design, and feature plans were scattered across temporary chats and exports.</td>
          <td><span class="badge mvp">Accepted</span></td>
        </tr>
        <tr>
          <td>2026-04-24</td>
          <td>PoC/MVP architecture should be lean: Vercel + Railway + Neon + Resend + Stripe, no Redis/BullMQ early.</td>
          <td>Preserves a real NestJS backend while avoiding GCP/Redis cost and complexity before usage justifies it.</td>
          <td><span class="badge mvp">Accepted</span></td>
        </tr>
      </table>

      <table class="changelog">
        <tr><th>Version</th><th>Change</th><th>Notes</th></tr>
        <tr><td>v0.1</td><td>Initial master source shell created.</td><td>Includes all requested top-level menus, first-pass product content, architecture, execution, discovery, marketing, and pitch sections.</td></tr>
      </table>
    </section>

    <section class="section" id="primary-product-source" data-keywords="primary product source product strategy positioning modules roadmap">
      <div class="section-header">
        <div>
          <div class="h2-kicker">Menu 1</div>
          <h2>Primary product source</h2>
          <p class="section-lead">
            This is the canonical product definition: what PathMerit is, who it serves, how the modules fit together, and what the roadmap prioritizes.
          </p>
        </div>
        <span class="badge brand">Product source</span>
      </div>

      <div class="subsection" id="product-positioning">
        <h3>Positioning</h3>
        <div class="callout">
          <strong>PathMerit is the career platform for software engineers.</strong>
          It combines interview prep, ATS-native resumes, cover letter workflows, application tracking, and hiring intelligence in one coherent system.
          Instead of forcing candidates to jump between disconnected tools, PathMerit helps them prepare, apply, and improve from a single workspace.
        </div>
        <div class="grid grid-3">
          <div class="card"><h4>Primary audience</h4><p>Mid-career and senior software engineers targeting senior, staff, principal, platform, backend, full-stack, or engineering manager roles.</p></div>
          <div class="card"><h4>Core promise</h4><p>Prepare smarter, tailor better, track every application, and improve your odds from first draft to final offer.</p></div>
          <div class="card"><h4>Brand line</h4><p>Build your path. Prove your merit.</p></div>
        </div>
      </div>

      <div class="subsection" id="product-modules">
        <h3>Core product modules</h3>
        <table>
          <tr><th>Module</th><th>Purpose</th><th>MVP stance</th><th>Expansion path</th></tr>
          <tr><td>Interview Prep</td><td>Study guides, question banks, confidence tracking, answer practice.</td><td>Curated paths, custom guide, progress tracking.</td><td>AI drill mode, company loops, mock interview builder.</td></tr>
          <tr><td>Resume Builder</td><td>ATS-safe structured resumes, variants, export, role tailoring.</td><td>Import, base resume, templates, variants, PDF export.</td><td>DOCX, parse preview, variant diff, evidence library.</td></tr>
          <tr><td>Cover Letters</td><td>Generate and edit company/role-specific letters and shorter application notes.</td><td>Structured generation with editable versions.</td><td>Reusable snippets, recruiter email variants, tone controls.</td></tr>
          <tr><td>Application Tracker</td><td>Pipeline, statuses, applications, contacts, reminders, outcomes.</td><td>Kanban/table, contact log, follow-ups, linked resume variant.</td><td>Chrome extension, company dossiers, pipeline analytics.</td></tr>
          <tr><td>ATS Intelligence</td><td>JD parsing, keyword gaps, match score, formatting risk, parseability.</td><td>Basic JD insights and resume health checks.</td><td>ATS-specific simulation, transparent scoring, benchmarking.</td></tr>
          <tr><td>AI Drill Mode</td><td>Personalized practice, answer feedback, rewrite support.</td><td>Not core free-tier dependency.</td><td>Premium/gated feature after baseline workflows are valuable.</td></tr>
        </table>
      </div>

      <div class="subsection" id="data-model">
        <h3>Shared data model</h3>
        <p>The moat is cross-module continuity. A target role should influence prep, resume variants, JD matching, cover letters, tracker views, and later analytics.</p>
        <table>
          <tr><th>Shared object</th><th>Used by</th><th>Why it matters</th></tr>
          <tr><td>TargetRole</td><td>Prep, Resume, ATS, Tracker</td><td>Defines level, stack, role family, and job-search direction.</td></tr>
          <tr><td>Company</td><td>Tracker, Cover Letters, Prep, ATS</td><td>Enables company-specific notes, contacts, loops, and history.</td></tr>
          <tr><td>JobDescription</td><td>ATS, Resume, Cover Letters, Tracker</td><td>Drives tailoring, keyword extraction, and fit analysis.</td></tr>
          <tr><td>ResumeVariant</td><td>Resume, Tracker, ATS</td><td>Links document decisions to application outcomes.</td></tr>
          <tr><td>ApplicationEvent</td><td>Tracker, Analytics, Pitch/ROI</td><td>Captures stage changes, outcomes, and user learning.</td></tr>
          <tr><td>Skill / Technology</td><td>Prep, Resume, JD parsing</td><td>Creates a shared language across content and scoring.</td></tr>
        </table>
      </div>

      <div class="subsection" id="product-roadmap">
        <h3>Product roadmap</h3>
        <div class="timeline">
          <div class="phase"><div class="phase-title"><small>Phase 0</small><strong>Validation</strong></div><div><p>Landing page, waitlist, engineer interviews, pricing research, initial content samples, resume teardown examples.</p></div></div>
          <div class="phase"><div class="phase-title"><small>Phase 1</small><strong>PoC</strong></div><div><p>Auth, basic resume builder, one ATS-safe template, PDF export, basic tracker, manual JD paste, basic keyword extraction.</p></div></div>
          <div class="phase"><div class="phase-title"><small>Phase 2</small><strong>MVP</strong></div><div><p>Resume import, variants, health checks, cover letters, tracker reminders, weekly goals, email templates, basic JD insights, Stripe.</p></div></div>
          <div class="phase"><div class="phase-title"><small>Phase 3</small><strong>Growth</strong></div><div><p>Job Saver extension, auto job extraction, ATS platform detection, resume match score, networking CRM, content library.</p></div></div>
          <div class="phase"><div class="phase-title"><small>Phase 4</small><strong>Advanced</strong></div><div><p>ATS-specific simulation, AI drill mode, company prep briefs, salary benchmarks, negotiation assistant, richer analytics.</p></div></div>
        </div>
      </div>
    </section>

    <section class="section" id="architecture-source" data-keywords="architecture source stack vercel railway neon postgres nestjs nextjs resend stripe sentry redis bullmq">
      <div class="section-header">
        <div>
          <div class="h2-kicker">Menu 2</div>
          <h2>Architecture source</h2>
          <p class="section-lead">
            This is the canonical technical architecture. The current direction preserves a real Node/NestJS backend while keeping PoC and MVP infrastructure cheap.
          </p>
        </div>
        <span class="badge poc">Lean stack</span>
      </div>

      <div class="subsection" id="architecture-stack">
        <h3>Recommended PoC/MVP stack</h3>
        <table>
          <tr><th>Layer</th><th>Service / Tool</th><th>Decision</th></tr>
          <tr><td>Frontend</td><td>Next.js on Vercel</td><td>Use Vercel for the marketing site, app shell, SSR/RSC where useful, and frontend deployments.</td></tr>
          <tr><td>Backend</td><td>NestJS on Railway</td><td>Use a normal Node.js backend shape without forcing NestJS into serverless functions.</td></tr>
          <tr><td>Database</td><td>Neon Postgres</td><td>Primary database for users, auth/session data, product objects, and jobs table.</td></tr>
          <tr><td>Email</td><td>Resend</td><td>Transactional emails: verification, password reset, follow-ups, reminders, digests.</td></tr>
          <tr><td>Payments</td><td>Stripe</td><td>Subscriptions, checkout, customer portal, webhooks.</td></tr>
          <tr><td>Monitoring</td><td>Sentry</td><td>Optional in PoC, recommended at MVP.</td></tr>
          <tr><td>Queue/cache</td><td>Postgres jobs first</td><td>Do not use Redis/BullMQ until throughput justifies it.</td></tr>
        </table>
      </div>

      <div class="subsection" id="architecture-jobs">
        <h3>Background jobs model</h3>
        <p>For PoC/MVP, use a Postgres-backed jobs table and a lightweight NestJS worker or scheduled polling process.</p>
        <pre>jobs
- id
- type
- payload_json
- status: pending | running | done | failed
- attempts
- run_at
- locked_at
- error
- created_at
- updated_at</pre>
        <div class="flow">
          <div class="flow-step"><span class="num">1</span><h4>Create job</h4><p>API creates a pending job for export, reminder, import, or scoring.</p></div>
          <div class="flow-step"><span class="num">2</span><h4>Claim job</h4><p>Worker claims due jobs using DB locking.</p></div>
          <div class="flow-step"><span class="num">3</span><h4>Process</h4><p>Worker generates export, sends email, or recalculates analysis.</p></div>
          <div class="flow-step"><span class="num">4</span><h4>Persist</h4><p>Mark success/failure and store output or error details.</p></div>
        </div>
      </div>

      <div class="subsection" id="architecture-upgrade">
        <h3>Upgrade path</h3>
        <table>
          <tr><th>Trigger</th><th>Upgrade</th><th>Why</th></tr>
          <tr><td>Exports become heavier</td><td>Add dedicated Railway worker</td><td>Separates API latency from background jobs.</td></tr>
          <tr><td>Export storage grows</td><td>Add object storage</td><td>Store PDFs/DOCX/user assets outside app containers.</td></tr>
          <tr><td>Job throughput exceeds DB polling comfort</td><td>Add Upstash Redis or Redis + BullMQ</td><td>Dedicated queue once volume requires it.</td></tr>
          <tr><td>Reliability/scale requires cloud primitives</td><td>Consider Cloud Run/GCP later</td><td>Move only when operational needs justify cost and complexity.</td></tr>
          <tr><td>AI usage becomes core</td><td>Add AI cost controls and usage metering</td><td>Protect margins and prevent uncontrolled free-tier usage.</td></tr>
        </table>
      </div>
    </section>

    <section class="section" id="development-tracking" data-keywords="development tracking sprint backlog milestones status todo">
      <div class="h2-kicker">Menu 3</div>
      <h2>Development tracking</h2>
      <p class="section-lead">
        This section tracks implementation status. It should be updated after each build session, PR, deployment, or scope adjustment.
      </p>

      <table>
        <tr><th>Workstream</th><th>Status</th><th>Next action</th><th>Owner</th></tr>
        <tr><td>Monorepo scaffold</td><td><span class="badge future">Not started</span></td><td>Create repo, app/api packages, shared types, CI.</td><td>Founder</td></tr>
        <tr><td>Design system package</td><td><span class="badge future">Not started</span></td><td>Export Claude Design output into <code>/packages/design-system</code>.</td><td>Founder</td></tr>
        <tr><td>Auth</td><td><span class="badge future">Not started</span></td><td>Implement Better Auth or auth module with Google/email flows.</td><td>Founder</td></tr>
        <tr><td>Resume builder</td><td><span class="badge future">Not started</span></td><td>Implement structured resume model and first ATS-safe template.</td><td>Founder</td></tr>
        <tr><td>Tracker</td><td><span class="badge future">Not started</span></td><td>Create application CRUD, statuses, reminders, contact log.</td><td>Founder</td></tr>
        <tr><td>JD insights</td><td><span class="badge future">Not started</span></td><td>Implement manual JD paste and keyword extraction.</td><td>Founder</td></tr>
      </table>

      <div class="subsection">
        <h3>Backlog priority categories</h3>
        <div class="grid grid-4">
          <div class="card"><h4>P0</h4><p>Required to run locally and prove the product skeleton.</p></div>
          <div class="card"><h4>P1</h4><p>Required for MVP user value and credible demo.</p></div>
          <div class="card"><h4>P2</h4><p>Growth features that improve retention and differentiation.</p></div>
          <div class="card"><h4>P3</h4><p>Advanced features after usage, pricing, and architecture are validated.</p></div>
        </div>
      </div>
    </section>

    <section class="section" id="feature-expansion-source" data-keywords="feature expansion teal chrome extension goals email templates resume import job insights networking crm content library">
      <div class="section-header">
        <div>
          <div class="h2-kicker">Menu 4</div>
          <h2>Feature expansion source</h2>
          <p class="section-lead">
            This consolidates the Teal-inspired expansion guide into the master product source. The principle is workflow ownership:
            PathMerit should not just help engineers create documents; it should help them run the whole search.
          </p>
        </div>
        <span class="badge growth">Expansion</span>
      </div>

      <table>
        <tr><th>Priority</th><th>Feature</th><th>Why it matters</th><th>Phase</th></tr>
        <tr><td>P1</td><td>Job Saver Chrome Extension</td><td>Main ingestion point for job descriptions, ATS detection, tracker records, and downstream prep/resume actions.</td><td>Growth</td></tr>
        <tr><td>P1</td><td>Weekly goals + reminders</td><td>Turns PathMerit into a recurring operating rhythm rather than a passive database.</td><td>MVP / Growth</td></tr>
        <tr><td>P1</td><td>Email templates by stage</td><td>Practical utility for referral requests, recruiter replies, follow-ups, thank-yous, scheduling, negotiation, and rejections.</td><td>MVP</td></tr>
        <tr><td>P2</td><td>Resume import</td><td>Reduces onboarding friction by letting users start from an existing PDF/DOCX or pasted profile text.</td><td>MVP</td></tr>
        <tr><td>P2</td><td>Job description insights</td><td>Connects saved jobs to keywords, skills, salary, seniority, and tailoring recommendations.</td><td>MVP / Growth</td></tr>
        <tr><td>P2</td><td>Networking CRM</td><td>Tracks recruiters, referrals, interviewers, contacts, interactions, and follow-up dates.</td><td>Growth</td></tr>
        <tr><td>P2</td><td>Career content library</td><td>Supports SEO, product education, and reusable engineering-specific examples.</td><td>Growth</td></tr>
      </table>

      <div class="subsection">
        <h3>Job Saver extension flow</h3>
        <div class="flow">
          <div class="flow-step"><span class="num">1</span><h4>Open job page</h4><p>Detect job board, ATS page, or company careers page.</p></div>
          <div class="flow-step"><span class="num">2</span><h4>Save to PathMerit</h4><p>Extract title, company, salary, location, work mode, ATS platform, URL, and JD text.</p></div>
          <div class="flow-step"><span class="num">3</span><h4>Create tracker record</h4><p>Set status, priority, excitement score, notes, and follow-up reminders.</p></div>
          <div class="flow-step"><span class="num">4</span><h4>Analyze job</h4><p>Extract keywords, required skills, seniority signals, and likely interview topics.</p></div>
          <div class="flow-step"><span class="num">5</span><h4>Recommend actions</h4><p>Suggest resume variant, tailoring checklist, prep plan, and outreach template.</p></div>
        </div>
      </div>

      <div class="subsection">
        <h3>Stage-based communication templates</h3>
        <div class="grid grid-2">
          <div class="card"><h4>Template categories</h4><ul><li>Referral request</li><li>Recruiter intro reply</li><li>Application follow-up</li><li>Post-screen thank-you</li><li>Post-technical thank-you</li><li>Scheduling response</li><li>Offer negotiation opener</li><li>Rejection follow-up</li></ul></div>
          <div class="card"><h4>Personalization inputs</h4><ul><li>Company</li><li>Role</li><li>Contact name</li><li>Current stage</li><li>Interview notes</li><li>Desired tone</li><li>Resume variant used</li><li>Target compensation range</li></ul></div>
        </div>
      </div>
    </section>

    <section class="section" id="execution-source" data-keywords="execution source claude code sessions build roadmap week foundation validation deployment">
      <div class="h2-kicker">Menu 5</div>
      <h2>Execution source</h2>
      <p class="section-lead">This is the build sequence. It should become increasingly tactical as implementation begins.</p>

      <div class="timeline">
        <div class="phase"><div class="phase-title"><small>Session 1</small><strong>Monorepo + database foundation</strong></div><div><p>Build monorepo, install dependencies, create database schema, seed lookup data, configure local dev and CI.</p><span class="badge poc">Foundation</span></div></div>
        <div class="phase"><div class="phase-title"><small>Session 2</small><strong>Design system + auth</strong></div><div><p>Create <code>/packages/design-system</code>, integrate tokens/components, build auth endpoints and session flow.</p><span class="badge poc">Foundation</span></div></div>
        <div class="phase"><div class="phase-title"><small>Session 3</small><strong>Resume + tracker APIs</strong></div><div><p>Build resume CRUD, variants, export job queueing, application tracker CRUD, contact log, status updates.</p><span class="badge mvp">Core APIs</span></div></div>
        <div class="phase"><div class="phase-title"><small>Session 4</small><strong>Prep APIs + study guide core</strong></div><div><p>Build question import, study guide builder, flashcard endpoint, confidence/progress tracking, spaced repetition.</p><span class="badge mvp">Core APIs</span></div></div>
        <div class="phase"><div class="phase-title"><small>Session 5+</small><strong>Frontend integration</strong></div><div><p>Build product screens using the design system, connect UI to APIs, validate end-to-end flows.</p><span class="badge growth">Frontend</span></div></div>
      </div>

      <div class="callout gold">
        <strong>Execution rule:</strong> do not move to the next session until the current session has a working local validation path and a clean Git commit.
      </div>
    </section>

    <section class="section" id="brand-design-source" data-keywords="brand design source logo visual identity design system typography color">
      <div class="section-header">
        <div>
          <div class="h2-kicker">Menu 6</div>
          <h2>Brand / design source</h2>
          <p class="section-lead">This is the canonical visual identity and UI direction for PathMerit.</p>
        </div>
        <span class="badge brand">Brand</span>
      </div>

      <div class="subsection" id="brand-foundations">
        <h3>Brand foundations</h3>
        <div class="grid grid-3">
          <div class="card"><h4>Brand idea</h4><p><strong>Path</strong> = direction, progress, milestones, career movement. <strong>Merit</strong> = evidence, readiness, signal, earned credibility.</p></div>
          <div class="card"><h4>Personality</h4><p>Precise, calm, premium, technical, trustworthy, structured, ambitious without hype, supportive without being soft.</p></div>
          <div class="card"><h4>Avoid</h4><p>Generic HR-tech visuals, briefcases, trophies, rockets, ladders, loud AI gradients, cyberpunk styling, recruiter/corporate clichés.</p></div>
        </div>
      </div>

      <div class="subsection" id="logo-system">
        <h3>Logo direction</h3>
        <div class="grid grid-3">
          <div class="card highlight"><h4>Signal Frame</h4><p>A rounded square frame with three increasing bars. Communicates readiness, merit signal, progress, and structured evaluation.</p><span class="badge mvp">Recommended</span></div>
          <div class="card"><h4>Path + Node</h4><p>A minimal path line with milestone nodes and a final highlighted point. Strong story, but easier to become generic.</p></div>
          <div class="card"><h4>PM Monogram</h4><p>A refined P/M mark with path-like inner geometry. More brandable long term, but less immediately meaningful.</p></div>
        </div>
        <div class="callout">
          <strong>Current logo rule:</strong> keep the brand mark blue/indigo-led. Use mint/green as a semantic UI success color, not as the main logo color.
        </div>
      </div>

      <div class="subsection" id="design-system">
        <h3>Design system foundations</h3>
        <table>
          <tr><th>Element</th><th>Direction</th></tr>
          <tr><td>Typography</td><td>Modern sans-serif. Inter, Geist, Manrope, Sora, Inter Tight, or Plus Jakarta Sans. Prioritize readability in dense UI.</td></tr>
          <tr><td>Color</td><td>Dual-theme system. Light mode polished and professional; dark mode focused, premium, and tool-native.</td></tr>
          <tr><td>Layout</td><td>Grid-based, calm, dense but readable. Strong spacing rhythm. Avoid noisy dashboards.</td></tr>
          <tr><td>Components</td><td>Buttons, forms, cards, tables, tags, status pills, tabs, nav, sidebars, progress, score cards, kanban views, document preview panels.</td></tr>
          <tr><td>Motion</td><td>Subtle progress and state transitions. No flashy bounce or generic “AI magic” animations.</td></tr>
        </table>
      </div>
    </section>

    <section class="section" id="product-discovery" data-keywords="product discovery problem users icp validation assumptions research competitor">
      <div class="h2-kicker">Menu 7</div>
      <h2>Product discovery</h2>
      <p class="section-lead">This section captures the problem, audience, assumptions, validation plan, and research questions.</p>

      <div class="subsection" id="discovery-problem">
        <h3>Problem statement</h3>
        <div class="callout">
          Software engineers manage a high-stakes job search through disconnected tools: prep sites, resume builders, trackers, ATS checkers, notes apps, spreadsheets, and email drafts.
          The result is context loss, inconsistent tailoring, weak follow-up, and unclear learning from outcomes.
        </div>
      </div>

      <div class="subsection" id="discovery-icp">
        <h3>ICP and pain points</h3>
        <table>
          <tr><th>Segment</th><th>Pain</th><th>Initial wedge</th></tr>
          <tr><td>Senior backend/full-stack engineers</td><td>Need credible system design, behavioral depth, targeted resumes, and selective application tracking.</td><td>Role workspace + resume variant + tracker.</td></tr>
          <tr><td>Staff/principal candidates</td><td>Need stronger evidence of scope, leadership, architecture, and business impact.</td><td>Evidence library + seniority-aware resume scoring.</td></tr>
          <tr><td>Job seekers applying across ATS platforms</td><td>Unsure whether documents parse well or match job language.</td><td>ATS-safe builder + parse preview + JD insights.</td></tr>
          <tr><td>Cost-sensitive junior engineers</td><td>Need a usable free tool without artificial paywalls.</td><td>Free resume/tracker/prep foundation.</td></tr>
        </table>
      </div>

      <div class="subsection" id="discovery-validation">
        <h3>Validation plan</h3>
        <ol>
          <li>Interview 15–20 engineers about current job-search workflow and tool fragmentation.</li>
          <li>Test landing page messaging for “career platform for software engineers” vs “everything between prep and offer.”</li>
          <li>Offer a manual resume/JD teardown to observe willingness to share documents and pay for insights.</li>
          <li>Prototype the resume + tracker + JD insight loop before building advanced AI.</li>
          <li>Track waitlist conversion, CTA clicks, uploaded resume rate, saved job rate, and return usage.</li>
        </ol>
      </div>
    </section>

    <section class="section" id="marketing-strategy" data-keywords="marketing strategy positioning messaging launch content seo pricing channels growth">
      <div class="h2-kicker">Menu 8</div>
      <h2>Marketing strategy</h2>
      <p class="section-lead">This is the go-to-market source. It should stay aligned with product scope and ICP.</p>

      <div class="grid grid-3">
        <div class="card"><h4>Primary message</h4><p>The career platform for software engineers.</p></div>
        <div class="card"><h4>Support message</h4><p>Everything between prep and offer.</p></div>
        <div class="card"><h4>Trust message</h4><p>ATS-safe documents, transparent scoring, and structured workflows.</p></div>
      </div>

      <div class="subsection">
        <h3>Content pillars</h3>
        <table>
          <tr><th>Pillar</th><th>Examples</th><th>Goal</th></tr>
          <tr><td>Engineering resumes</td><td>Senior backend resume, staff engineer resume, platform engineer resume, resume bullet examples.</td><td>SEO + trust.</td></tr>
          <tr><td>ATS and job descriptions</td><td>ATS-safe templates, JD keyword gaps, why resumes fail parsing.</td><td>Demand capture.</td></tr>
          <tr><td>Interview prep</td><td>System design plans, behavioral stories, role-specific study guides.</td><td>Audience relevance.</td></tr>
          <tr><td>Job-search operating system</td><td>Application tracking, follow-ups, recruiter templates, weekly goals.</td><td>Workflow differentiation.</td></tr>
        </table>
      </div>

      <div class="subsection">
        <h3>Launch plan</h3>
        <ol>
          <li>Launch landing page and waitlist with core messaging.</li>
          <li>Publish 5–8 high-quality engineering resume examples and a manual teardown offer.</li>
          <li>Share founder-build content showing the product workflow and architecture.</li>
          <li>Invite early engineers to private beta with a narrow resume + tracker + JD loop.</li>
          <li>Use feedback to refine pricing, onboarding, and the strongest wedge.</li>
        </ol>
      </div>
    </section>

    <section class="section" id="pitch-deck" data-keywords="pitch deck investor narrative slides problem solution market traction business model roadmap ask">
      <div class="h2-kicker">Menu 9</div>
      <h2>Pitch deck</h2>
      <p class="section-lead">This is the canonical pitch narrative. It can later become an actual slide deck.</p>

      <table>
        <tr><th>Slide</th><th>Title</th><th>Core message</th></tr>
        <tr><td>1</td><td>Title</td><td>PathMerit — Build your path. Prove your merit.</td></tr>
        <tr><td>2</td><td>Problem</td><td>Engineers run job searches across fragmented tools that do not share context.</td></tr>
        <tr><td>3</td><td>Why now</td><td>Hiring is more competitive, ATS anxiety is high, AI tooling raises expectations, and engineers need better career workflows.</td></tr>
        <tr><td>4</td><td>Solution</td><td>One platform for prep, ATS-native resumes, cover letters, tracking, and hiring intelligence.</td></tr>
        <tr><td>5</td><td>Product</td><td>Show target role workspace connecting prep, resume variant, JD insight, and application tracker.</td></tr>
        <tr><td>6</td><td>Market</td><td>Software engineers and technical job seekers are high-value users with recurring career transitions.</td></tr>
        <tr><td>7</td><td>Business model</td><td>Freemium with Pro for advanced analysis, export volume, AI drill, match scoring, and workflow automation.</td></tr>
        <tr><td>8</td><td>Moat</td><td>Cross-module data graph: roles, JDs, resumes, prep, applications, contacts, and outcomes.</td></tr>
        <tr><td>9</td><td>Roadmap</td><td>PoC → MVP → Chrome extension → ATS intelligence → AI drill and analytics.</td></tr>
        <tr><td>10</td><td>Ask / next milestone</td><td>Private beta validation, early user acquisition, MVP launch, and initial revenue signals.</td></tr>
      </table>
    </section>

    <div class="footer">
      PathMerit Master Source of Truth · v0.1 · Update this file whenever product, architecture, design, growth, or pitch decisions change.
    </div>
  </main>
</div>

<script>
const searchInput = document.getElementById('searchInput');
const sections = Array.from(document.querySelectorAll('.section'));
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  sections.forEach(section => {
    const text = (section.innerText + ' ' + (section.dataset.keywords || '')).toLowerCase();
    section.classList.toggle('hidden-by-search', query && !text.includes(query));
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.02 });

document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
</script>
</body>
</html>
```

CLAUDE_CODE_PROMPT.md 13,767 chars

```
# Claude Code: PathMerit Monorepo Scaffold

You are building the foundational infrastructure for **PathMerit**, a career acceleration platform for software engineers.

## Context

**Product**: PathMerit — interview prep + resume builder + application tracker + ATS intelligence
**Architecture**: Next.js (Vercel) + NestJS (Railway) + Neon Postgres
**Phase**: MVP scaffold (Month 1 foundation)
**Timeline**: This session should produce a working local development environment
**Success criteria**:
- Monorepo compiles and installs without errors
- Docker Compose starts Postgres cleanly
- Database schema is migrated
- Basic API endpoints respond to requests
- GitHub Actions CI pipeline is ready

## Task: Create the complete monorepo scaffold

### Directory structure to create

```
/pathmerit (root)
  ├── package.json (root workspace config)
  ├── pnpm-workspace.yaml
  ├── turbo.json
  ├── tsconfig.base.json
  ├── .env.example
  ├── .gitignore
  ├── docker-compose.yml
  ├── .github/workflows/deploy.yml (CI pipeline)
  │
  ├── /apps
  │   ├── /web
  │   │   ├── package.json
  │   │   ├── tsconfig.json
  │   │   ├── next.config.js
  │   │   ├── tailwind.config.ts
  │   │   ├── postcss.config.js
  │   │   ├── /src
  │   │   │   ├── /app
  │   │   │   │   ├── layout.tsx
  │   │   │   │   ├── page.tsx
  │   │   │   │   ├── /auth
  │   │   │   │   │   ├── layout.tsx
  │   │   │   │   │   ├── /signup
  │   │   │   │   │   │   └── page.tsx
  │   │   │   │   │   └── /login
  │   │   │   │   │       └── page.tsx
  │   │   │   │   ├── /dashboard
  │   │   │   │   │   ├── layout.tsx
  │   │   │   │   │   └── page.tsx
  │   │   │   ├── /lib
  │   │   │   │   ├── api.ts (fetch client)
  │   │   │   │   └── utils.ts
  │   │   │   └── /components
  │   │   │       └── Sidebar.tsx
  │   └── /api
  │       ├── package.json
  │       ├── tsconfig.json
  │       ├── src/
  │       │   ├── main.ts (NestJS entry point)
  │       │   ├── app.module.ts
  │       │   ├── /modules
  │       │   │   ├── /auth
  │       │   │   │   ├── auth.module.ts
  │       │   │   │   ├── auth.controller.ts
  │       │   │   │   └── auth.service.ts
  │       │   │   ├── /users
  │       │   │   │   ├── users.module.ts
  │       │   │   │   ├── users.controller.ts
  │       │   │   │   └── users.service.ts
  │       │   │   ├── /resumes
  │       │   │   │   ├── resumes.module.ts
  │       │   │   │   ├── resumes.controller.ts
  │       │   │   │   └── resumes.service.ts
  │       │   │   ├── /applications
  │       │   │   ├── /prep
  │       │   │   └── /jobs (background job orchestration)
  │       │   ├── /db
  │       │   │   ├── schema.ts (Drizzle schema — core entities)
  │       │   │   ├── migrations/ (Drizzle migrations)
  │       │   │   └── seed.ts (seed lookups database)
  │       │   └── /common
  │       │       ├── guards/ (AuthGuard)
  │       │       └── interceptors/
  │       └── ormconfig.ts (Drizzle config)
  │
  ├── /packages
  │   ├── /types (shared TypeScript types)
  │   │   ├── package.json
  │   │   └── src/
  │   │       ├── user.ts
  │   │       ├── resume.ts
  │   │       ├── application.ts
  │   │       └── index.ts
  │   └── /schemas (Zod validation schemas)
  │       ├── package.json
  │       └── src/
  │           ├── auth.ts
  │           ├── resume.ts
  │           ├── application.ts
  │           └── index.ts
  │
  ├── README.md (setup instructions)
  └── docs/
      ├── architecture.md
      └── database-schema.md
```

### Your specific deliverables

**1. Root package.json with pnpm workspaces**
- Configure workspaces: apps/web, apps/api, packages/types, packages/schemas
- Install dev dependencies: turbo, typescript, @types/node
- Add scripts: `dev` (run all apps), `build`, `lint`, `test`
- Use pnpm as the package manager (add pnpm-workspace.yaml)

**2. docker-compose.yml**
- Postgres 15 service named `postgres`, port 5432
- Environment: `POSTGRES_PASSWORD=postgres`, `POSTGRES_USER=postgres`, `POSTGRES_DB=pathmerit`
- Volume for data persistence at `/var/lib/postgresql/data`
- Health check that waits for Postgres to be ready
- Redis 7 service (optional, for later use)
- Network: `pathmerit-net`

**3. .env.example**
```
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pathmerit

# Auth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
JWT_SECRET=your_jwt_secret_here

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# Resend (email)
RESEND_API_KEY=your_resend_api_key_here

# App
NODE_ENV=development
API_PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**4. Next.js /apps/web scaffold**
- Initialize with `create-next-app@latest` (App Router, TypeScript, Tailwind, ESLint)
- Configure tsconfig to extend tsconfig.base.json from root
- Install dependencies: @tanstack/react-query, zustand, react-hook-form, zod, @radix-ui/components
- Create basic layout.tsx with minimal header
- Create pages: /auth/signup, /auth/login, /dashboard (protected)
- Create /lib/api.ts fetch client for calling NestJS backend
- Create /components/Sidebar.tsx (navigation stub)

**5. NestJS /apps/api scaffold**
- Initialize NestJS project with `npm i -g @nestjs/cli && nest new api --package-manager=pnpm`
- Install core dependencies: @nestjs/common, @nestjs/platform-express, @nestjs/typeorm (or Drizzle)
- Install Drizzle ORM: drizzle-orm, drizzle-kit, postgres (Postgres driver)
- Install auth: better-auth, @types/express
- Install validation: zod
- Install database: pg (Postgres client)
- Install jobs: node-cron (lightweight scheduling for background jobs)
- Create app.module.ts that imports auth, users, resumes, applications, prep modules
- Create basic main.ts entry point that listens on port 3001
- Create /src/common/guards/auth.guard.ts for protecting routes
- Create /src/common/interceptors/transform.interceptor.ts for API response shaping

**6. Database schema (/apps/api/src/db/schema.ts)**
Create the complete Drizzle schema with these core tables:

```typescript
// Users & Auth
- users (id, email, name, auth_provider, created_at, updated_at, tier, country_code)
- sessions (id, user_id, expires_at, created_at)

// Shared lookups
- technologies (id, name, slug, category, aliases, is_verified, user_submitted_by)
- institutions (id, name, aliases, type, country, city, website, year_founded)
- roles (id, title, normalized_title, category, seniority_hint)
- certifications (id, name, issuer, category)
- application_statuses (id, name, category, is_default, user_id for custom)

// Resume builder
- resumes (id, user_id, name, is_base, parent_resume_id, template_id, template_config, section_order, created_at, updated_at)
- resume_headers (id, resume_id, full_name, title, email, phone, city, linkedin_url, github_url, portfolio_url)
- resume_summaries (id, resume_id, text)
- work_experiences (id, resume_id, company_name, company_city, company_country, is_remote, role_id, role_title, start_date, end_date, description, sort_order)
- work_experience_technologies (work_experience_id, technology_id)
- educations (id, resume_id, degree_type, field, institution_id, institution_name, start_year, end_year, gpa, sort_order)
- certifications_resume (id, resume_id, name, issuer, issued_date, expiry_date, url)
- technical_skills (id, resume_id, group_name, sort_order)
- technical_skill_items (id, technical_skill_id, technology_id, sort_order)

// Application tracker
- applications (id, user_id, company_name, role_id, role_title, job_url, ats_platform, applied_date, source, status_id, technologies, salary_offered, salary_currency, priority, notes, resume_variant_id, created_at, updated_at)
- application_contacts (id, application_id, contact_date, contact_name, contact_title, department, contact_type, email, phone, linkedin_url, outcome, notes, follow_up_at, created_at)

// Interview prep
- study_guides (id, user_id, name, target_date, hours_per_week, visibility, tags, forked_from_id, upvotes, created_at)
- study_guide_modules (id, study_guide_id, module_type, sort_order)
- questions (id, question_text, module_type, difficulty, recency, tags, created_by)
- question_responses (id, user_id, question_id, confidence, last_reviewed_at, next_review_at, review_count, user_note, created_at)

// Background jobs
- jobs (id, type, payload_json, status, attempts, run_at, locked_at, error, created_at, updated_at)
```

Include all necessary relations, indexes, and foreign key constraints.

**7. Database migrations**
- Use Drizzle Kit to generate initial migration from schema.ts
- Create a seed.ts file that populates:
  - 200+ technologies (Go, TypeScript, PostgreSQL, React, Node.js, Kubernetes, AWS, GCP, Docker, Rails, Python, etc.)
  - 100+ institutions (MIT, Stanford, UC Berkeley, Carnegie Mellon, top bootcamps, etc.)
  - 50+ roles (Backend Engineer, Frontend Engineer, Full-stack Engineer, Senior Engineer, Staff Engineer, DevOps, etc.)
  - 20+ default application statuses

**8. Drizzle ORM configuration**
- Create /apps/api/src/db/index.ts that exports the database client
- Configure connection pooling
- Export query functions for service layer

**9. Auth module (/apps/api/src/modules/auth)**
Create auth.controller.ts with endpoints:
- POST /auth/signup — register with email/password
- POST /auth/login — authenticate with email/password
- POST /auth/google — Google SSO callback
- POST /auth/logout — destroy session
- POST /auth/refresh — refresh JWT token
- GET /auth/me — return current user

Create auth.service.ts that:
- Hashes passwords with bcrypt
- Issues JWT tokens
- Validates tokens
- Integrates with Better Auth for SSO

**10. Shared type packages (/packages/types and /packages/schemas)**
Create TypeScript types and Zod schemas for:
- User
- Resume
- WorkExperience
- Education
- Application
- ApplicationContact
- StudyGuide
- Question
- QuestionResponse
- API response wrapper

**11. GitHub Actions CI pipeline (.github/workflows/deploy.yml)**
Create a workflow that:
- Runs on push to main and PRs
- Installs dependencies with pnpm
- Runs `turbo lint`
- Runs `turbo build`
- Runs `turbo test` (basic test setup)
- (Optional) Builds Docker image and pushes to registry for later Railway deployment

**12. README.md with developer setup instructions**
```markdown
# PathMerit — Developer Setup

## Prerequisites
- Node.js 18+
- pnpm 8+
- Docker & Docker Compose

## Quick Start

1. Clone the repo
   git clone ...
   cd pathmerit

2. Copy .env.example to .env and fill in secrets
   cp .env.example .env

3. Start Postgres
   docker-compose up -d

4. Install dependencies
   pnpm install

5. Run database migrations
   cd apps/api
   pnpm drizzle:migrate

6. Seed the database with lookups
   pnpm seed

7. Start dev servers
   cd ../..
   pnpm dev

   The frontend runs on http://localhost:3000
   The API runs on http://localhost:3001

## Project structure
- /apps/web — Next.js frontend (Vercel-ready)
- /apps/api — NestJS backend (Railway-ready)
- /packages/types — Shared TypeScript types
- /packages/schemas — Shared Zod validation schemas

## Available scripts
- `pnpm dev` — Start all dev servers
- `pnpm build` — Build all packages
- `pnpm lint` — Lint all packages
- `pnpm test` — Run tests
- `pnpm db:push` — Push schema changes to Postgres
- `pnpm db:seed` — Seed database with lookups

## Deployment
- Frontend deploys to Vercel
- Backend deploys to Railway
- Database uses Neon Postgres

See docs/deployment.md for detailed instructions.
```

## Implementation order

**Do this in sequence** — each step builds on the previous:

1. Root package.json + pnpm-workspace.yaml + tsconfig.base.json
2. docker-compose.yml + .env.example
3. Next.js scaffold (/apps/web)
4. NestJS scaffold (/apps/api, basic structure)
5. Drizzle ORM setup + schema.ts
6. Database migrations + seed script
7. Auth module (controller + service)
8. Users module (basic CRUD)
9. Shared types and schemas packages
10. GitHub Actions workflow
11. README.md documentation

## Success checklist

After completion, verify:
- [ ] `pnpm install` completes without errors
- [ ] `docker-compose up -d` starts Postgres successfully
- [ ] `pnpm db:migrate` runs migrations without errors
- [ ] `pnpm db:seed` populates lookups (200+ technologies, 100+ institutions, 50+ roles)
- [ ] `pnpm dev` starts both Next.js (localhost:3000) and NestJS (localhost:3001)
- [ ] GET http://localhost:3001/health returns 200
- [ ] POST http://localhost:3001/auth/signup works with valid email/password
- [ ] Next.js can fetch from the API (test with a simple endpoint)
- [ ] GitHub Actions workflow runs without errors

## Notes

- Use pnpm for faster installs and better monorepo support
- Use Turbo for efficient builds across the monorepo
- Use Drizzle instead of Prisma for more control and lighter weight
- Use TypeScript throughout for end-to-end type safety
- Schema relations should enforce referential integrity but not include cascade deletes (for data safety)
- Keep the API response format consistent: `{ data: T | null, error: null } | { data: null, error: { code, message } }`
- Seed script should be idempotent (safe to run multiple times)

## Questions to resolve later

- Google OAuth client ID/secret (set up in Google Cloud Console, use .env)
- Stripe API keys (get from Stripe Dashboard, use .env)
- JWT secret (generate random 32-char string, use .env)
- Resend API key (get from Resend Dashboard, use .env)
- Database backups strategy (Neon handles this in production)
- Logging and monitoring (configure later with Sentry)

---

Execute this scaffold from top to bottom. This session should produce a working local development environment with all core infrastructure in place.
```

CLAUDE_CODE_SESSION_2A.md 12,956 chars

```
# Claude Code Session 2a: Design System Package Integration

You are building the **PathMerit design system package** and integrating it into the existing monorepo.

## Context

**Current state:** You have a complete monorepo scaffold with Next.js frontend, NestJS backend, PostgreSQL database, and GitHub Actions CI. The database schema is in place with all seed data. Auth endpoints are stubbed.

**What you're building now:** A centralized design system package that all UI components will use. This comes from your Claude Design export and becomes the source of truth for all styling and component patterns.

**What you have:**
- A monorepo at /pathmerit (or your local clone)
- /apps/web (Next.js frontend)
- /apps/api (NestJS backend)
- /packages/types and /packages/schemas already exist
- Your Claude Design system exported as .tsx files, design tokens, and Tailwind config

## Task: Create and integrate the design system package

### Step 1: Create the design system package structure

Create `/packages/design-system/` with this structure:

```
/packages/design-system
  ├── package.json
  ├── tsconfig.json
  ├── /src
  │   ├── /components
  │   │   ├── Button.tsx
  │   │   ├── Input.tsx
  │   │   ├── Card.tsx
  │   │   ├── Modal.tsx
  │   │   ├── Sidebar.tsx
  │   │   ├── FormField.tsx
  │   │   ├── Badge.tsx
  │   │   ├── Alert.tsx
  │   │   └── ... (all other components from your Claude Design export)
  │   ├── /tokens
  │   │   ├── colors.ts
  │   │   ├── typography.ts
  │   │   ├── spacing.ts
  │   │   ├── shadows.ts
  │   │   ├── radius.ts
  │   │   └── index.ts (exports all tokens)
  │   ├── index.ts (barrel export)
  │   └── tailwind.config.ts
  └── README.md (usage guide)
```

### Step 2: Implement the package.json for design-system

```json
{
  "name": "@pathmerit/design-system",
  "version": "1.0.0",
  "description": "PathMerit design system components and tokens",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components": "./src/components/index.ts",
    "./tokens": "./src/tokens/index.ts"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

### Step 3: Implement design tokens

**tokens/colors.ts** — Extract from your Claude Design color system. Example structure:

```typescript
export const colors = {
  // Core palette
  bg: '#0d0d10',
  bg2: '#13131a',
  bg3: '#191921',
  bg4: '#21212e',

  // Text
  ink: '#ededf0',
  'ink-soft': '#8888a0',
  'ink-muted': '#444458',

  // Accents
  accent: '#7c6af7',
  'accent-dark': '#6b59d9',
  'accent-light': '#9b8fff',

  // Semantic colors
  success: '#5ecf8a',
  warning: '#f0a060',
  error: '#f07878',
  info: '#6aadee',

  // Borders
  border: 'rgba(255, 255, 255, 0.07)',
  'border-light': 'rgba(255, 255, 255, 0.15)',
};

export const colorPairs = {
  primary: {
    light: '#7c6af7',
    dark: '#6b59d9',
  },
  secondary: {
    light: '#13131a',
    dark: '#0d0d10',
  },
  // ... more pairs
};
```

**tokens/typography.ts** — Font system, sizes, weights. Example:

```typescript
export const typography = {
  family: {
    display: "'Syne', sans-serif",
    body: "'Instrument Serif', Georgia, serif",
    mono: "'DM Mono', monospace",
  },

  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },

  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};
```

**tokens/spacing.ts** — Spacing scale (8px base):

```typescript
export const spacing = {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
};
```

**tokens/shadows.ts**:

```typescript
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};
```

**tokens/radius.ts**:

```typescript
export const radius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.375rem', // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  full: '9999px',
};
```

**tokens/index.ts** — Export all tokens:

```typescript
export { colors, colorPairs } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { shadows } from './shadows';
export { radius } from './radius';

export const tokens = {
  colors: require('./colors').colors,
  colorPairs: require('./colors').colorPairs,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  shadows: require('./shadows').shadows,
  radius: require('./radius').radius,
};
```

### Step 4: Implement core components using CVA (Class Variance Authority)

Create components using the CVA pattern. Each component should:
- Be exported from /src/components/index.ts
- Use Tailwind utilities with design tokens
- Define variants using CVA
- Be fully typed with TypeScript
- Include proper prop forwarding and ref handling

**Example: Button.tsx**

```typescript
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-ink hover:bg-accent-dark active:scale-95',
        secondary: 'bg-bg3 text-ink hover:bg-bg4',
        ghost: 'bg-transparent text-ink-soft hover:text-ink hover:bg-bg2',
        danger: 'bg-error text-white hover:bg-error/90',
      },
      size: {
        sm: 'h-8 px-3 text-sm gap-1.5',
        md: 'h-10 px-4 text-base gap-2',
        lg: 'h-12 px-6 text-lg gap-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

**Do the same for:** Input, Card, Modal, Sidebar, FormField, Badge, Alert, and all other components from your Claude Design export.

### Step 5: Create components/index.ts barrel export

```typescript
export { Button, buttonVariants } from './Button';
export { Input, inputVariants } from './Input';
export { Card } from './Card';
export { Modal } from './Modal';
export { Sidebar } from './Sidebar';
// ... export all components
```

### Step 6: Create src/index.ts barrel export

```typescript
export * from './components';
export * from './tokens';
export { default as tailwindConfig } from './tailwind.config';
```

### Step 7: Create tailwind.config.ts for design system

This config extends Tailwind with design tokens:

```typescript
import type { Config } from 'tailwindcss';
import {
  colors,
  typography,
  spacing,
  shadows,
  radius,
} from './tokens';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Map token colors to Tailwind color names
        accent: colors.accent,
        'accent-dark': colors['accent-dark'],
        'accent-light': colors['accent-light'],
        bg: colors.bg,
        bg2: colors.bg2,
        bg3: colors.bg3,
        bg4: colors.bg4,
        ink: colors.ink,
        'ink-soft': colors['ink-soft'],
        'ink-muted': colors['ink-muted'],
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
      },
      fontFamily: {
        display: typography.family.display,
        serif: typography.family.body,
        mono: typography.family.mono,
      },
      fontSize: typography.sizes,
      fontWeight: typography.weights,
      spacing: spacing,
      boxShadow: shadows,
      borderRadius: radius,
    },
  },
  plugins: [],
} satisfies Config;
```

### Step 8: Update /apps/web/package.json to import design system

In `/apps/web/package.json`, add:

```json
{
  "dependencies": {
    "@pathmerit/design-system": "workspace:*"
  }
}
```

### Step 9: Update /apps/web/tailwind.config.ts to extend design system config

In `/apps/web/tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import designSystemConfig from '@pathmerit/design-system/tailwind.config';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/design-system/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      ...designSystemConfig.theme?.extend,
    },
  },
  plugins: designSystemConfig.plugins,
} satisfies Config;
```

### Step 10: Test design system in Next.js

Create a test page at `/apps/web/src/app/design-test/page.tsx`:

```typescript
import { Button, Input, Card, Badge } from '@pathmerit/design-system';

export default function DesignTest() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-bold text-ink">Design System Test</h1>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-ink">Buttons</h2>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-ink">Inputs</h2>
        <Input placeholder="Type something..." />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-ink">Cards</h2>
        <Card className="p-4">
          <p className="text-ink-soft">This is a card</p>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-ink">Badges</h2>
        <div className="flex gap-2">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </div>
    </div>
  );
}
```

Then test by running `pnpm dev` and navigating to `http://localhost:3000/design-test`.

## Success Criteria

After completing this session:

- [ ] `/packages/design-system` exists with correct structure
- [ ] All design tokens are defined (colors, typography, spacing, shadows, radius)
- [ ] All components from Claude Design are implemented using CVA
- [ ] Components barrel-export from `/components/index.ts`
- [ ] Tailwind config extends with design tokens
- [ ] `/apps/web` can import components as `@pathmerit/design-system`
- [ ] Design test page renders without errors
- [ ] All components render with correct styling
- [ ] Colors match the design system
- [ ] Tailwind utilities work with design system tokens

## Validation Commands

```bash
# Check design system package installs
cd packages/design-system
npm list

# Check Next.js can import design system
cd ../../apps/web
npm ls @pathmerit/design-system

# Run dev server and test http://localhost:3000/design-test
pnpm dev

# Verify Tailwind config works
npm run build
```

## Notes

- Do NOT hardcode colors or spacing in components. Always use Tailwind utilities that reference design tokens.
- Use CVA for all component variants. This enables composition and consistency.
- Every component should be fully typed with TypeScript.
- Forward refs and all HTML attributes (React.forwardRef pattern).
- Keep component logic minimal. Components should be "dumb" and accept props/children.
- Design tokens are the single source of truth. If you need to change a color, update the token once and it propagates everywhere.

This session creates the design system as a publishable npm package. Future sessions will use this for all UI components.
```

CLAUDE_CODE_SESSION_2B.md 18,506 chars

```
# Claude Code Session 2b: Auth Module Implementation

You are building the **complete authentication system** for PathMerit with email/password signup, login, Google SSO, JWT token refresh, and session management.

## Context

**Current state:** You have the monorepo scaffold with NestJS backend, PostgreSQL database with users and sessions tables, and the design system package integrated.

**What you're building now:** A production-ready auth module that handles:
- User signup with email/password (with validation)
- User login with email/password (with JWT token generation)
- Google OAuth SSO integration
- JWT token refresh (without re-entering credentials)
- Session management in Postgres
- Protected routes via AuthGuard
- Error handling and proper HTTP status codes
- Password hashing with bcrypt
- Email verification (placeholder for later with Resend)

## Task: Build the complete auth module

### Step 1: Install auth dependencies

In `/apps/api/package.json`, ensure these are installed:

```json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^12.0.0",
    "@nestjs/passport": "^10.0.0",
    "bcryptjs": "^2.4.3",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.1",
    "passport-local": "^1.0.0",
    "better-auth": "^1.0.0",
    "@types/bcryptjs": "^2.4.0",
    "@types/passport-google-oauth20": "^2.0.12"
  }
}
```

Run `pnpm install` to add missing deps.

### Step 2: Create auth.types.ts

```typescript
// /apps/api/src/modules/auth/auth.types.ts

export interface JwtPayload {
  id: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    tier: string;
  };
}

export interface AuthResponse {
  data: TokenResponse | null;
  error: null | { code: string; message: string };
}

export interface GoogleProfile {
  id: string;
  displayName: string;
  emails: Array<{ value: string }>;
  photos: Array<{ value: string }>;
}
```

### Step 3: Create auth.service.ts

This is the core business logic for authentication.

```typescript
// /apps/api/src/modules/auth/auth.service.ts

import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../common/prisma.service'; // or your DB service
import { JwtPayload, TokenResponse } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private db: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Register a new user with email and password
   */
  async signup(email: string, password: string, name: string): Promise<TokenResponse> {
    // Validate email format
    if (!this.isValidEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }

    // Check if user already exists
    const existingUser = await this.db.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        auth_provider: 'email',
        tier: 'free',
      },
    });

    // Generate tokens
    const tokens = this.generateTokens(user.id, user.email);

    // Create session
    await this.db.session.create({
      data: {
        user_id: user.id,
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier,
      },
    };
  }

  /**
   * Login with email and password
   */
  async login(email: string, password: string): Promise<TokenResponse> {
    // Find user by email
    const user = await this.db.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        tier: true,
        password: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate tokens
    const tokens = this.generateTokens(user.id, user.email);

    // Update or create session
    await this.db.session.upsert({
      where: { user_id: user.id },
      update: {
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      create: {
        user_id: user.id,
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier,
      },
    };
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    // Verify refresh token
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      });
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Check if refresh token exists in DB
    const session = await this.db.session.findUnique({
      where: { user_id: payload.id },
    });

    if (!session || session.refresh_token !== refreshToken) {
      throw new UnauthorizedException('Refresh token not found or mismatch');
    }

    // Get user
    const user = await this.db.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Generate new tokens
    const tokens = this.generateTokens(user.id, user.email);

    // Update session with new refresh token
    await this.db.session.update({
      where: { user_id: user.id },
      data: {
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier,
      },
    };
  }

  /**
   * Login or create user via Google OAuth
   */
  async googleAuth(googleProfile: any): Promise<TokenResponse> {
    const email = googleProfile.emails?.[0]?.value;
    const name = googleProfile.displayName;

    if (!email) {
      throw new BadRequestException('Email not provided by Google');
    }

    // Find or create user
    let user = await this.db.user.findUnique({ where: { email } });

    if (!user) {
      user = await this.db.user.create({
        data: {
          email,
          name,
          auth_provider: 'google',
          tier: 'free',
        },
      });
    } else if (user.auth_provider !== 'google' && user.auth_provider !== 'email') {
      // Allow users to link Google to existing account
      await this.db.user.update({
        where: { id: user.id },
        data: { auth_provider: 'google' },
      });
    }

    // Generate tokens
    const tokens = this.generateTokens(user.id, user.email);

    // Create or update session
    await this.db.session.upsert({
      where: { user_id: user.id },
      update: {
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      create: {
        user_id: user.id,
        refresh_token: tokens.refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier,
      },
    };
  }

  /**
   * Logout — delete session
   */
  async logout(userId: string): Promise<void> {
    await this.db.session.deleteMany({
      where: { user_id: userId },
    });
  }

  /**
   * Get current user by ID
   */
  async getCurrentUser(userId: string) {
    return this.db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        tier: true,
        country_code: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Generate JWT access and refresh tokens
   */
  private generateTokens(userId: string, email: string) {
    const payload: JwtPayload = { id: userId, email };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'secret',
      expiresIn: '15m', // Short-lived access token
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      expiresIn: '7d', // Long-lived refresh token
    });

    return { accessToken, refreshToken };
  }
}
```

### Step 4: Create JWT strategy (Passport JWT)

```typescript
// /apps/api/src/modules/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './auth.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret',
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.id, email: payload.email };
  }
}
```

### Step 5: Create JWT auth guard

```typescript
// /apps/api/src/modules/auth/jwt.guard.ts

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

### Step 6: Create auth.controller.ts

```typescript
// /apps/api/src/modules/auth/auth.controller.ts

import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Res,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { ZodValidationPipe } from '../../common/zod-validation.pipe';
import { z } from 'zod';

// Zod schemas for validation
const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token required'),
});

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * POST /auth/signup
   * Register a new user
   */
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(
    @Body(new ZodValidationPipe(signupSchema))
    body: { email: string; password: string; name: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.signup(body.email, body.password, body.name);
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return {
      data: result,
      error: null,
    };
  }

  /**
   * POST /auth/login
   * Login with email and password
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body(new ZodValidationPipe(loginSchema))
    body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(body.email, body.password);
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return {
      data: result,
      error: null,
    };
  }

  /**
   * POST /auth/refresh
   * Refresh access token using refresh token
   */
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Body(new ZodValidationPipe(refreshSchema))
    body: { refreshToken: string },
  ) {
    const result = await this.authService.refreshToken(body.refreshToken);
    return {
      data: result,
      error: null,
    };
  }

  /**
   * POST /auth/logout
   * Logout and delete session
   */
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async logout(
    @Req() req: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(req.user.userId);
    res.clearCookie('refreshToken');
    return {
      data: { message: 'Logged out successfully' },
      error: null,
    };
  }

  /**
   * GET /auth/me
   * Get current user (protected route)
   */
  @Get('me')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async getCurrentUser(@Req() req: any) {
    const user = await this.authService.getCurrentUser(req.user.userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return {
      data: user,
      error: null,
    };
  }

  /**
   * GET /auth/health
   * Health check (no auth required)
   */
  @Get('health')
  @HttpCode(HttpStatus.OK)
  async health() {
    return {
      data: { status: 'ok' },
      error: null,
    };
  }
}
```

### Step 7: Create auth.module.ts

```typescript
// /apps/api/src/modules/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../../common/prisma.module'; // adjust as needed

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '15m' },
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

### Step 8: Register AuthModule in app.module.ts

In `/apps/api/src/app.module.ts`:

```typescript
import { AuthModule } from './modules/auth/auth.module';
// ... other imports

@Module({
  imports: [
    // ... other modules
    AuthModule,
  ],
})
export class AppModule {}
```

### Step 9: Create ZodValidationPipe (if not exists)

```typescript
// /apps/api/src/common/zod-validation.pipe.ts

import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    try {
      return this.schema.parse(value);
    } catch (error: any) {
      throw new BadRequestException(error.errors[0]?.message || 'Validation failed');
    }
  }
}
```

## Success Criteria

After completing this session:

- [ ] AuthModule is created with all files
- [ ] AuthService handles signup, login, refresh, logout, Google auth
- [ ] AuthController has all endpoints:
  - [ ] POST /auth/signup (returns user + tokens)
  - [ ] POST /auth/login (returns user + tokens)
  - [ ] POST /auth/refresh (returns new access token)
  - [ ] POST /auth/logout (deletes session)
  - [ ] GET /auth/me (protected, returns current user)
  - [ ] GET /auth/health (unprotected, returns ok)
- [ ] JWT tokens are generated and verified
- [ ] Refresh tokens persist in Postgres sessions table
- [ ] Passwords are hashed with bcrypt
- [ ] All endpoints return proper error messages
- [ ] AuthModule is registered in AppModule

## Validation Commands

```bash
# Test signup
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Should return:
# {
#   "data": {
#     "accessToken": "eyJ...",
#     "refreshToken": "eyJ...",
#     "user": { "id": "...", "email": "test@example.com", "name": "Test User", "tier": "free" }
#   },
#   "error": null
# }

# Test login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Test get current user (requires access token from login)
curl http://localhost:3001/auth/me \
  -H "Authorization: Bearer <ACCESS_TOKEN>"

# Test refresh token
curl -X POST http://localhost:3001/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"<REFRESH_TOKEN>"}'

# Test logout
curl -X POST http://localhost:3001/auth/logout \
  -H "Authorization: Bearer <ACCESS_TOKEN>"

# Verify sessions in database
psql postgresql://postgres:postgres@localhost:5432/pathmerit
SELECT * FROM sessions;
```

## Notes

- JWT secret should come from environment variables, not hardcoded.
- Refresh tokens are longer-lived (7 days) and stored in DB for revocation.
- Access tokens are short-lived (15 minutes) for security.
- Passwords are never returned in API responses.
- HTTP-only cookies are used for refresh tokens to prevent XSS attacks.
- All routes return consistent `{ data, error }` format.
- Protected routes use JwtAuthGuard.
- Email validation uses regex pattern.
- Google OAuth integration is set up for Phase 2 (session 2b extended).

The auth module is now complete and production-ready. All subsequent sessions can use JwtAuthGuard to protect routes.
```

CLAUDE_CODE_SESSION_3.md 31,177 chars

```
# Claude Code Session 3: Resume Builder + Application Tracker APIs

You are building the **Resume Builder module** and **Application Tracker module** with complete CRUD operations, variants, PDF export job queueing, and contact logging.

## Context

**Current state:** You have the monorepo with NestJS backend, design system, and complete auth module. Database schema includes all resume, application, and contact tables. Auth endpoints are working.

**What you're building now:**
- **Resume Builder API**: Create, read, update, delete resumes. Create variants. Add/edit work experiences, education, skills. Queue PDF exports.
- **Application Tracker API**: Create, read, update, delete applications. Add/edit contact logs. Filter and search. Pipeline analytics.

Both modules will use the Postgres jobs table to queue PDF exports (processed by a worker in the background).

## Task: Build Resume Builder and Application Tracker APIs

### Part A: Resume Builder Module

#### Step 1: Create resumes.service.ts

```typescript
// /apps/api/src/modules/resumes/resumes.service.ts

import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import {
  CreateResumeDto,
  UpdateResumeDto,
  AddWorkExperienceDto,
  UpdateWorkExperienceDto,
  CreateVariantDto,
} from './resumes.dto';

@Injectable()
export class ResumesService {
  constructor(private db: PrismaService) {}

  /**
   * Create a new base resume
   */
  async createResume(userId: string, dto: CreateResumeDto) {
    return this.db.resume.create({
      data: {
        user_id: userId,
        name: dto.name,
        is_base: true,
        template_id: 'template-1', // Default template
        section_order: ['header', 'summary', 'experience', 'education', 'skills'],
      },
      include: {
        header: true,
      },
    });
  }

  /**
   * Get all resumes for a user
   */
  async getUserResumes(userId: string) {
    return this.db.resume.findMany({
      where: { user_id: userId, deleted_at: null },
      include: {
        header: true,
        work_experiences: true,
        educations: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  /**
   * Get a single resume by ID
   */
  async getResumeById(userId: string, resumeId: string) {
    const resume = await this.db.resume.findUnique({
      where: { id: resumeId },
      include: {
        header: true,
        summary: true,
        work_experiences: {
          include: {
            technologies: true,
          },
        },
        educations: true,
        technical_skills: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    if (resume.user_id !== userId) {
      throw new ForbiddenException('Not authorized to access this resume');
    }

    return resume;
  }

  /**
   * Update resume (name, template, section order, etc.)
   */
  async updateResume(userId: string, resumeId: string, dto: UpdateResumeDto) {
    const resume = await this.verifyOwnership(userId, resumeId);

    return this.db.resume.update({
      where: { id: resumeId },
      data: {
        name: dto.name || resume.name,
        template_id: dto.template_id || resume.template_id,
        section_order: dto.section_order || resume.section_order,
      },
    });
  }

  /**
   * Soft delete a resume
   */
  async deleteResume(userId: string, resumeId: string) {
    await this.verifyOwnership(userId, resumeId);

    return this.db.resume.update({
      where: { id: resumeId },
      data: { deleted_at: new Date() },
    });
  }

  /**
   * Create a variant (fork) of a resume
   */
  async createVariant(userId: string, resumeId: string, dto: CreateVariantDto) {
    const parentResume = await this.verifyOwnership(userId, resumeId);

    // Get all content from parent
    const parent = await this.db.resume.findUnique({
      where: { id: resumeId },
      include: {
        header: true,
        summary: true,
        work_experiences: { include: { technologies: true } },
        educations: true,
        technical_skills: { include: { items: true } },
      },
    });

    // Create new resume with same data
    const variant = await this.db.resume.create({
      data: {
        user_id: userId,
        name: dto.name,
        is_base: false,
        parent_resume_id: resumeId,
        template_id: parent.template_id,
        section_order: parent.section_order,
        header: parent.header ? {
          create: {
            full_name: parent.header.full_name,
            title: parent.header.title,
            email: parent.header.email,
            phone: parent.header.phone,
            city: parent.header.city,
            linkedin_url: parent.header.linkedin_url,
            github_url: parent.header.github_url,
          },
        } : undefined,
        summary: parent.summary ? {
          create: {
            text: parent.summary.text,
          },
        } : undefined,
      },
    });

    return variant;
  }

  /**
   * Add work experience to resume
   */
  async addWorkExperience(userId: string, resumeId: string, dto: AddWorkExperienceDto) {
    await this.verifyOwnership(userId, resumeId);

    return this.db.work_experience.create({
      data: {
        resume_id: resumeId,
        company_name: dto.company_name,
        company_city: dto.company_city,
        company_country: dto.company_country || 'US',
        is_remote: dto.is_remote || false,
        role_id: dto.role_id,
        role_title: dto.role_title,
        start_date: new Date(dto.start_date),
        end_date: dto.end_date ? new Date(dto.end_date) : null,
        description: dto.description,
        sort_order: 0,
        technologies: dto.technologies ? {
          connect: dto.technologies.map(id => ({ id })),
        } : undefined,
      },
      include: { technologies: true },
    });
  }

  /**
   * Update work experience
   */
  async updateWorkExperience(
    userId: string,
    resumeId: string,
    expId: string,
    dto: UpdateWorkExperienceDto,
  ) {
    const resume = await this.verifyOwnership(userId, resumeId);

    const exp = await this.db.work_experience.findUnique({
      where: { id: expId },
    });

    if (!exp || exp.resume_id !== resumeId) {
      throw new NotFoundException('Work experience not found');
    }

    return this.db.work_experience.update({
      where: { id: expId },
      data: {
        company_name: dto.company_name || exp.company_name,
        role_title: dto.role_title || exp.role_title,
        description: dto.description || exp.description,
        start_date: dto.start_date ? new Date(dto.start_date) : exp.start_date,
        end_date: dto.end_date ? new Date(dto.end_date) : exp.end_date,
        technologies: dto.technologies ? {
          set: dto.technologies.map(id => ({ id })),
        } : undefined,
      },
      include: { technologies: true },
    });
  }

  /**
   * Delete work experience
   */
  async deleteWorkExperience(userId: string, resumeId: string, expId: string) {
    await this.verifyOwnership(userId, resumeId);

    return this.db.work_experience.delete({
      where: { id: expId },
    });
  }

  /**
   * Queue PDF export as a background job
   */
  async queuePdfExport(userId: string, resumeId: string) {
    const resume = await this.verifyOwnership(userId, resumeId);

    // Create job entry
    const job = await this.db.job.create({
      data: {
        type: 'pdf_export',
        payload_json: JSON.stringify({
          resume_id: resumeId,
          user_id: userId,
          template_id: resume.template_id,
        }),
        status: 'pending',
        run_at: new Date(),
      },
    });

    return {
      jobId: job.id,
      status: 'queued',
      message: 'PDF export queued. Check back in a few moments.',
    };
  }

  /**
   * Check export job status
   */
  async getExportStatus(userId: string, resumeId: string) {
    const resume = await this.verifyOwnership(userId, resumeId);

    const latestJob = await this.db.job.findFirst({
      where: {
        type: 'pdf_export',
        payload_json: {
          contains: resumeId,
        },
      },
      orderBy: { created_at: 'desc' },
    });

    if (!latestJob) {
      return { status: 'not_started', message: 'No export job found' };
    }

    return {
      jobId: latestJob.id,
      status: latestJob.status,
      createdAt: latestJob.created_at,
      error: latestJob.error,
      downloadUrl: latestJob.status === 'done' ? `/api/resumes/${resumeId}/export/download` : null,
    };
  }

  /**
   * Helper: Verify user owns the resume
   */
  private async verifyOwnership(userId: string, resumeId: string) {
    const resume = await this.db.resume.findUnique({
      where: { id: resumeId },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    if (resume.user_id !== userId) {
      throw new ForbiddenException('Not authorized to access this resume');
    }

    return resume;
  }
}
```

#### Step 2: Create resumes.controller.ts

```typescript
// /apps/api/src/modules/resumes/resumes.controller.ts

import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ResumesService } from './resumes.service';
import { ZodValidationPipe } from '../../common/zod-validation.pipe';
import {
  createResumeSchema,
  updateResumeSchema,
  addWorkExperienceSchema,
  updateWorkExperienceSchema,
  createVariantSchema,
} from './resumes.schemas';

@Controller('resumes')
@UseGuards(JwtAuthGuard)
export class ResumesController {
  constructor(private service: ResumesService) {}

  /**
   * POST /resumes
   * Create a new resume
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createResume(
    @Req() req: any,
    @Body(new ZodValidationPipe(createResumeSchema)) dto: any,
  ) {
    const resume = await this.service.createResume(req.user.userId, dto);
    return { data: resume, error: null };
  }

  /**
   * GET /resumes
   * Get all resumes for user
   */
  @Get()
  async getUserResumes(@Req() req: any) {
    const resumes = await this.service.getUserResumes(req.user.userId);
    return { data: resumes, error: null };
  }

  /**
   * GET /resumes/:id
   * Get single resume
   */
  @Get(':id')
  async getResume(@Req() req: any, @Param('id') id: string) {
    const resume = await this.service.getResumeById(req.user.userId, id);
    return { data: resume, error: null };
  }

  /**
   * PUT /resumes/:id
   * Update resume
   */
  @Put(':id')
  async updateResume(
    @Req() req: any,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateResumeSchema)) dto: any,
  ) {
    const resume = await this.service.updateResume(req.user.userId, id, dto);
    return { data: resume, error: null };
  }

  /**
   * DELETE /resumes/:id
   * Delete resume (soft delete)
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteResume(@Req() req: any, @Param('id') id: string) {
    await this.service.deleteResume(req.user.userId, id);
    return { data: null, error: null };
  }

  /**
   * POST /resumes/:id/variants
   * Create variant
   */
  @Post(':id/variants')
  @HttpCode(HttpStatus.CREATED)
  async createVariant(
    @Req() req: any,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(createVariantSchema)) dto: any,
  ) {
    const variant = await this.service.createVariant(req.user.userId, id, dto);
    return { data: variant, error: null };
  }

  /**
   * POST /resumes/:id/work-experience
   * Add work experience
   */
  @Post(':id/work-experience')
  @HttpCode(HttpStatus.CREATED)
  async addWorkExperience(
    @Req() req: any,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(addWorkExperienceSchema)) dto: any,
  ) {
    const exp = await this.service.addWorkExperience(req.user.userId, id, dto);
    return { data: exp, error: null };
  }

  /**
   * PUT /resumes/:id/work-experience/:expId
   * Update work experience
   */
  @Put(':id/work-experience/:expId')
  async updateWorkExperience(
    @Req() req: any,
    @Param('id') id: string,
    @Param('expId') expId: string,
    @Body(new ZodValidationPipe(updateWorkExperienceSchema)) dto: any,
  ) {
    const exp = await this.service.updateWorkExperience(req.user.userId, id, expId, dto);
    return { data: exp, error: null };
  }

  /**
   * DELETE /resumes/:id/work-experience/:expId
   * Delete work experience
   */
  @Delete(':id/work-experience/:expId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteWorkExperience(
    @Req() req: any,
    @Param('id') id: string,
    @Param('expId') expId: string,
  ) {
    await this.service.deleteWorkExperience(req.user.userId, id, expId);
    return { data: null, error: null };
  }

  /**
   * POST /resumes/:id/export-pdf
   * Queue PDF export
   */
  @Post(':id/export-pdf')
  @HttpCode(HttpStatus.ACCEPTED)
  async queuePdfExport(@Req() req: any, @Param('id') id: string) {
    const result = await this.service.queuePdfExport(req.user.userId, id);
    return { data: result, error: null };
  }

  /**
   * GET /resumes/:id/export-status
   * Check PDF export status
   */
  @Get(':id/export-status')
  async getExportStatus(@Req() req: any, @Param('id') id: string) {
    const status = await this.service.getExportStatus(req.user.userId, id);
    return { data: status, error: null };
  }
}
```

#### Step 3: Create resumes.schemas.ts (Zod validation)

```typescript
// /apps/api/src/modules/resumes/resumes.schemas.ts

import { z } from 'zod';

export const createResumeSchema = z.object({
  name: z.string().min(1, 'Resume name required'),
});

export const updateResumeSchema = z.object({
  name: z.string().optional(),
  template_id: z.string().optional(),
  section_order: z.array(z.string()).optional(),
});

export const addWorkExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name required'),
  company_city: z.string().min(1, 'City required'),
  company_country: z.string().optional(),
  is_remote: z.boolean().optional(),
  role_id: z.string().optional(),
  role_title: z.string().min(1, 'Job title required'),
  start_date: z.string(), // ISO date
  end_date: z.string().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  technologies: z.array(z.string()).optional(),
});

export const updateWorkExperienceSchema = z.object({
  company_name: z.string().optional(),
  role_title: z.string().optional(),
  description: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  technologies: z.array(z.string()).optional(),
});

export const createVariantSchema = z.object({
  name: z.string().min(1, 'Variant name required'),
});
```

#### Step 4: Create resumes.module.ts

```typescript
// /apps/api/src/modules/resumes/resumes.module.ts

import { Module } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { ResumesController } from './resumes.controller';
import { PrismaModule } from '../../common/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ResumesController],
  providers: [ResumesService],
})
export class ResumesModule {}
```

### Part B: Application Tracker Module

#### Step 5: Create applications.service.ts

```typescript
// /apps/api/src/modules/applications/applications.service.ts

import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import {
  CreateApplicationDto,
  UpdateApplicationDto,
  AddContactLogDto,
} from './applications.dto';

@Injectable()
export class ApplicationsService {
  constructor(private db: PrismaService) {}

  /**
   * Create new application
   */
  async createApplication(userId: string, dto: CreateApplicationDto) {
    return this.db.application.create({
      data: {
        user_id: userId,
        company_name: dto.company_name,
        role_id: dto.role_id,
        role_title: dto.role_title,
        job_url: dto.job_url,
        applied_date: new Date(dto.applied_date),
        source: dto.source || 'other',
        status_id: dto.status_id,
        technologies: dto.technologies,
        salary_offered: dto.salary_offered,
        salary_currency: dto.salary_currency,
        priority: dto.priority || 'medium',
        notes: dto.notes,
        resume_variant_id: dto.resume_variant_id,
      },
      include: {
        contacts: true,
      },
    });
  }

  /**
   * Get all applications for user with filters
   */
  async getApplications(
    userId: string,
    filters?: {
      status?: string;
      company?: string;
      skip?: number;
      take?: number;
    },
  ) {
    const where: any = {
      user_id: userId,
      deleted_at: null,
    };

    if (filters?.status) {
      where.status_id = filters.status;
    }

    if (filters?.company) {
      where.company_name = {
        contains: filters.company,
        mode: 'insensitive',
      };
    }

    return this.db.application.findMany({
      where,
      include: {
        contacts: true,
      },
      orderBy: { applied_date: 'desc' },
      skip: filters?.skip || 0,
      take: filters?.take || 20,
    });
  }

  /**
   * Get single application
   */
  async getApplication(userId: string, appId: string) {
    const app = await this.db.application.findUnique({
      where: { id: appId },
      include: {
        contacts: true,
      },
    });

    if (!app) {
      throw new NotFoundException('Application not found');
    }

    if (app.user_id !== userId) {
      throw new ForbiddenException('Not authorized');
    }

    return app;
  }

  /**
   * Update application
   */
  async updateApplication(userId: string, appId: string, dto: UpdateApplicationDto) {
    const app = await this.verifyOwnership(userId, appId);

    return this.db.application.update({
      where: { id: appId },
      data: {
        company_name: dto.company_name || app.company_name,
        role_title: dto.role_title || app.role_title,
        status_id: dto.status_id || app.status_id,
        notes: dto.notes !== undefined ? dto.notes : app.notes,
        priority: dto.priority || app.priority,
        salary_offered: dto.salary_offered || app.salary_offered,
      },
      include: {
        contacts: true,
      },
    });
  }

  /**
   * Delete application (soft delete)
   */
  async deleteApplication(userId: string, appId: string) {
    await this.verifyOwnership(userId, appId);

    return this.db.application.update({
      where: { id: appId },
      data: { deleted_at: new Date() },
    });
  }

  /**
   * Add contact log entry
   */
  async addContact(userId: string, appId: string, dto: AddContactLogDto) {
    await this.verifyOwnership(userId, appId);

    return this.db.application_contact.create({
      data: {
        application_id: appId,
        contact_date: new Date(dto.contact_date),
        contact_name: dto.contact_name,
        contact_title: dto.contact_title,
        department: dto.department,
        contact_type: dto.contact_type,
        email: dto.email,
        phone: dto.phone,
        linkedin_url: dto.linkedin_url,
        outcome: dto.outcome || 'pending',
        notes: dto.notes,
        follow_up_at: dto.follow_up_at ? new Date(dto.follow_up_at) : null,
      },
    });
  }

  /**
   * Update contact log entry
   */
  async updateContact(userId: string, appId: string, contactId: string, dto: any) {
    await this.verifyOwnership(userId, appId);

    return this.db.application_contact.update({
      where: { id: contactId },
      data: {
        outcome: dto.outcome,
        notes: dto.notes,
        follow_up_at: dto.follow_up_at ? new Date(dto.follow_up_at) : null,
      },
    });
  }

  /**
   * Get contact logs for application
   */
  async getContacts(userId: string, appId: string) {
    await this.verifyOwnership(userId, appId);

    return this.db.application_contact.findMany({
      where: { application_id: appId },
      orderBy: { contact_date: 'desc' },
    });
  }

  /**
   * Get pipeline stats
   */
  async getStats(userId: string) {
    const applications = await this.db.application.findMany({
      where: {
        user_id: userId,
        deleted_at: null,
      },
    });

    const byStatus = applications.reduce((acc, app) => {
      const status = app.status_id || 'unknown';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: applications.length,
      byStatus,
      averageTimeInPipeline: applications.length > 0 ?
        Math.round(applications.reduce((sum, app) => {
          return sum + (new Date().getTime() - app.applied_date.getTime());
        }, 0) / applications.length / (1000 * 60 * 60 * 24)) : 0,
    };
  }

  /**
   * Helper: Verify ownership
   */
  private async verifyOwnership(userId: string, appId: string) {
    const app = await this.db.application.findUnique({
      where: { id: appId },
    });

    if (!app) {
      throw new NotFoundException('Application not found');
    }

    if (app.user_id !== userId) {
      throw new ForbiddenException('Not authorized');
    }

    return app;
  }
}
```

#### Step 6: Create applications.controller.ts

```typescript
// /apps/api/src/modules/applications/applications.controller.ts

import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ApplicationsService } from './applications.service';
import { ZodValidationPipe } from '../../common/zod-validation.pipe';
import {
  createApplicationSchema,
  updateApplicationSchema,
  addContactLogSchema,
} from './applications.schemas';

@Controller('applications')
@UseGuards(JwtAuthGuard)
export class ApplicationsController {
  constructor(private service: ApplicationsService) {}

  /**
   * POST /applications
   * Create new application
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createApplication(
    @Req() req: any,
    @Body(new ZodValidationPipe(createApplicationSchema)) dto: any,
  ) {
    const app = await this.service.createApplication(req.user.userId, dto);
    return { data: app, error: null };
  }

  /**
   * GET /applications
   * Get applications with optional filters
   */
  @Get()
  async getApplications(
    @Req() req: any,
    @Query('status') status?: string,
    @Query('company') company?: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const apps = await this.service.getApplications(req.user.userId, {
      status,
      company,
      skip: skip ? parseInt(skip) : 0,
      take: take ? parseInt(take) : 20,
    });
    return { data: apps, error: null };
  }

  /**
   * GET /applications/stats
   * Get pipeline stats (put before /:id to avoid conflict)
   */
  @Get('stats')
  async getStats(@Req() req: any) {
    const stats = await this.service.getStats(req.user.userId);
    return { data: stats, error: null };
  }

  /**
   * GET /applications/:id
   * Get single application
   */
  @Get(':id')
  async getApplication(@Req() req: any, @Param('id') id: string) {
    const app = await this.service.getApplication(req.user.userId, id);
    return { data: app, error: null };
  }

  /**
   * PUT /applications/:id
   * Update application
   */
  @Put(':id')
  async updateApplication(
    @Req() req: any,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateApplicationSchema)) dto: any,
  ) {
    const app = await this.service.updateApplication(req.user.userId, id, dto);
    return { data: app, error: null };
  }

  /**
   * DELETE /applications/:id
   * Delete application
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteApplication(@Req() req: any, @Param('id') id: string) {
    await this.service.deleteApplication(req.user.userId, id);
    return { data: null, error: null };
  }

  /**
   * POST /applications/:id/contacts
   * Add contact log
   */
  @Post(':id/contacts')
  @HttpCode(HttpStatus.CREATED)
  async addContact(
    @Req() req: any,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(addContactLogSchema)) dto: any,
  ) {
    const contact = await this.service.addContact(req.user.userId, id, dto);
    return { data: contact, error: null };
  }

  /**
   * GET /applications/:id/contacts
   * Get contact logs
   */
  @Get(':id/contacts')
  async getContacts(@Req() req: any, @Param('id') id: string) {
    const contacts = await this.service.getContacts(req.user.userId, id);
    return { data: contacts, error: null };
  }

  /**
   * PUT /applications/:id/contacts/:contactId
   * Update contact
   */
  @Put(':id/contacts/:contactId')
  async updateContact(
    @Req() req: any,
    @Param('id') id: string,
    @Param('contactId') contactId: string,
    @Body() dto: any,
  ) {
    const contact = await this.service.updateContact(req.user.userId, id, contactId, dto);
    return { data: contact, error: null };
  }
}
```

#### Step 7: Create applications.schemas.ts

```typescript
// /apps/api/src/modules/applications/applications.schemas.ts

import { z } from 'zod';

export const createApplicationSchema = z.object({
  company_name: z.string().min(1, 'Company name required'),
  role_id: z.string().optional(),
  role_title: z.string().min(1, 'Role title required'),
  job_url: z.string().url('Invalid URL').optional(),
  applied_date: z.string(),
  source: z.enum(['linkedin', 'company_site', 'recruiter', 'referral', 'job_board', 'hackathon', 'other']).optional(),
  status_id: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  salary_offered: z.number().optional(),
  salary_currency: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'dream']).optional(),
  notes: z.string().optional(),
  resume_variant_id: z.string().optional(),
});

export const updateApplicationSchema = z.object({
  company_name: z.string().optional(),
  role_title: z.string().optional(),
  status_id: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'dream']).optional(),
  salary_offered: z.number().optional(),
  notes: z.string().optional(),
});

export const addContactLogSchema = z.object({
  contact_date: z.string(),
  contact_name: z.string().min(1, 'Contact name required'),
  contact_title: z.string().optional(),
  department: z.string().optional(),
  contact_type: z.enum(['phone', 'video', 'in-person', 'email', 'message']),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  linkedin_url: z.string().url().optional(),
  outcome: z.enum(['positive', 'neutral', 'negative', 'pending']).optional(),
  notes: z.string().optional(),
  follow_up_at: z.string().optional(),
});
```

#### Step 8: Create applications.module.ts

```typescript
// /apps/api/src/modules/applications/applications.module.ts

import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { PrismaModule } from '../../common/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
```

#### Step 9: Register modules in app.module.ts

In `/apps/api/src/app.module.ts`:

```typescript
import { ResumesModule } from './modules/resumes/resumes.module';
import { ApplicationsModule } from './modules/applications/applications.module';

@Module({
  imports: [
    // ... other modules
    ResumesModule,
    ApplicationsModule,
  ],
})
export class AppModule {}
```

## Success Criteria

After completing this session:

- [ ] ResumesModule created with service, controller, schemas
- [ ] ApplicationsModule created with service, controller, schemas
- [ ] Resume CRUD endpoints working:
  - [ ] POST /resumes (create)
  - [ ] GET /resumes (list)
  - [ ] GET /resumes/:id (fetch)
  - [ ] PUT /resumes/:id (update)
  - [ ] DELETE /resumes/:id (delete)
  - [ ] POST /resumes/:id/variants (create variant)
  - [ ] POST /resumes/:id/work-experience (add job)
  - [ ] PUT /resumes/:id/work-experience/:expId (update job)
  - [ ] DELETE /resumes/:id/work-experience/:expId (delete job)
  - [ ] POST /resumes/:id/export-pdf (queue export)
  - [ ] GET /resumes/:id/export-status (check status)
- [ ] Application CRUD endpoints working:
  - [ ] POST /applications (create)
  - [ ] GET /applications (list with filters)
  - [ ] GET /applications/:id (fetch)
  - [ ] PUT /applications/:id (update)
  - [ ] DELETE /applications/:id (delete)
  - [ ] POST /applications/:id/contacts (add contact)
  - [ ] GET /applications/:id/contacts (list contacts)
  - [ ] PUT /applications/:id/contacts/:contactId (update contact)
  - [ ] GET /applications/stats (pipeline stats)
- [ ] All endpoints protected with JwtAuthGuard
- [ ] Ownership verified for all operations
- [ ] Soft deletes working (deleted_at)
- [ ] Jobs queued to Postgres jobs table

## Validation Commands

```bash
# Create resume
curl -X POST http://localhost:3001/resumes \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"name":"My Resume"}'

# Add work experience
curl -X POST http://localhost:3001/resumes/<RESUME_ID>/work-experience \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "company_name":"Acme Corp",
    "company_city":"San Francisco",
    "role_title":"Senior Engineer",
    "start_date":"2022-01-01",
    "description":"Built backend systems",
    "technologies":["<TECH_ID_1>","<TECH_ID_2>"]
  }'

# Queue PDF export
curl -X POST http://localhost:3001/resumes/<RESUME_ID>/export-pdf \
  -H "Authorization: Bearer <TOKEN>"

# Check export status
curl http://localhost:3001/resumes/<RESUME_ID>/export-status \
  -H "Authorization: Bearer <TOKEN>"

# Verify job in queue
psql postgresql://postgres:postgres@localhost:5432/pathmerit
SELECT * FROM jobs WHERE type='pdf_export';

# Create application
curl -X POST http://localhost:3001/applications \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "company_name":"Google",
    "role_title":"Senior Engineer",
    "applied_date":"2026-04-23",
    "job_url":"https://..."
  }'

# Get applications with filter
curl "http://localhost:3001/applications?company=Google" \
  -H "Authorization: Bearer <TOKEN>"

# Add contact log
curl -X POST http://localhost:3001/applications/<APP_ID>/contacts \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_date":"2026-04-23",
    "contact_name":"John Doe",
    "contact_type":"phone",
    "outcome":"positive",
    "notes":"Great conversation about team"
  }'

# Get pipeline stats
curl http://localhost:3001/applications/stats \
  -H "Authorization: Bearer <TOKEN>"
```

This session completes the core CRUD APIs. Session 4 will build the interview prep module with spaced repetition.
```

CLAUDE_CODE_SESSION_4.md 24,700 chars

```
# Claude Code Session 4: Interview Prep Module

You are building the **Interview Prep module** with questions, study guides, flashcard logic, progress tracking, and spaced repetition scheduling.

## Context

**Current state:** You have complete auth, design system, resume builder, and application tracker APIs. Database includes questions and study_guides tables. Your 813 interview prep questions are ready to be imported.

**What you're building now:**
- Questions CRUD and bulk import
- Study guides (create, update, list)
- Flashcard endpoint that returns next card to review using spaced repetition
- Progress tracking with confidence scores
- Progress dashboard showing stats
- Spaced repetition algorithm for scheduling next review

## Task: Build the Interview Prep module with spaced repetition

### Part A: Spaced Repetition Algorithm

#### Step 1: Create spaced-repetition.util.ts

This utility implements the core SRS algorithm.

```typescript
// /apps/api/src/modules/prep/spaced-repetition.util.ts

/**
 * Spaced Repetition System (SRS)
 *
 * Based on optimized intervals and confidence scoring.
 * Confidence 5 (very confident) = longer interval
 * Confidence 1 (not confident) = shorter interval
 */

export class SpacedRepetitionUtil {
  /**
   * Calculate next review date based on confidence level
   *
   * Confidence levels:
   * 5 = Very confident, already know this
   * 4 = Confident, know the main points
   * 3 = Somewhat confident, need reinforcement
   * 2 = Not confident, learning
   * 1 = Very unsure, just starting
   */
  static calculateNextReviewDate(confidence: number): Date {
    const now = new Date();
    const intervals: Record<number, number> = {
      5: 7 * 24 * 60 * 60 * 1000,      // 7 days
      4: 3 * 24 * 60 * 60 * 1000,      // 3 days
      3: 1 * 24 * 60 * 60 * 1000,      // 1 day
      2: 12 * 60 * 60 * 1000,          // 12 hours
      1: 4 * 60 * 60 * 1000,           // 4 hours
    };

    const interval = intervals[Math.max(1, Math.min(5, confidence))] || intervals[3];
    return new Date(now.getTime() + interval);
  }

  /**
   * Get sort order for flashcards
   * Order: overdue first, then lowest confidence, then least recently reviewed
   */
  static compareCards(
    a: {
      next_review_at: Date;
      confidence: number;
      last_reviewed_at?: Date;
    },
    b: {
      next_review_at: Date;
      confidence: number;
      last_reviewed_at?: Date;
    },
  ): number {
    const now = new Date();

    // Both overdue: sort by confidence (lowest first)
    const aOverdue = a.next_review_at < now;
    const bOverdue = b.next_review_at < now;

    if (aOverdue && bOverdue) {
      return a.confidence - b.confidence;
    }

    // One is overdue: overdue comes first
    if (aOverdue) return -1;
    if (bOverdue) return 1;

    // Neither overdue: sort by next review date (soonest first)
    return a.next_review_at.getTime() - b.next_review_at.getTime();
  }

  /**
   * Get estimated study time for a guide
   * Based on number of cards and average review time
   */
  static estimateStudyTime(
    totalCards: number,
    averageTimePerCardSeconds: number = 90,
  ): {
    totalMinutes: number;
    perDayMinutes: number;
  } {
    const totalMinutes = Math.round((totalCards * averageTimePerCardSeconds) / 60);
    const perDayMinutes = Math.round(totalMinutes / 7); // Spread over a week

    return {
      totalMinutes,
      perDayMinutes,
    };
  }
}
```

### Part B: Prep Service and Controller

#### Step 2: Create prep.service.ts

```typescript
// /apps/api/src/modules/prep/prep.service.ts

import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { SpacedRepetitionUtil } from './spaced-repetition.util';
import {
  CreateStudyGuideDto,
  UpdateStudyGuideDto,
  RecordAnswerDto,
} from './prep.dto';

@Injectable()
export class PrepService {
  constructor(private db: PrismaService) {}

  /**
   * Bulk import questions
   * Used to populate the database with question banks
   */
  async importQuestions(questions: Array<{
    question_text: string;
    module_type: string;
    difficulty: string;
    tags?: string[];
    recency?: string;
    answer?: string;
  }>) {
    const created = [];

    for (const q of questions) {
      const question = await this.db.question.create({
        data: {
          question_text: q.question_text,
          module_type: q.module_type,
          difficulty: q.difficulty,
          tags: q.tags || [],
          recency: q.recency,
        },
      });
      created.push(question);
    }

    return {
      imported: created.length,
      total: created.length,
    };
  }

  /**
   * Search questions
   */
  async searchQuestions(filters?: {
    module?: string;
    difficulty?: string;
    skip?: number;
    take?: number;
  }) {
    const where: any = {};

    if (filters?.module) {
      where.module_type = filters.module;
    }

    if (filters?.difficulty) {
      where.difficulty = filters.difficulty;
    }

    const questions = await this.db.question.findMany({
      where,
      skip: filters?.skip || 0,
      take: filters?.take || 50,
    });

    const total = await this.db.question.count({ where });

    return {
      questions,
      total,
      skip: filters?.skip || 0,
      take: filters?.take || 50,
    };
  }

  /**
   * Create a study guide
   */
  async createStudyGuide(userId: string, dto: CreateStudyGuideDto) {
    return this.db.study_guide.create({
      data: {
        user_id: userId,
        name: dto.name,
        target_date: new Date(dto.target_date),
        hours_per_week: dto.hours_per_week,
        tags: dto.tags || [],
        visibility: dto.visibility || 'private',
      },
    });
  }

  /**
   * Get user's study guides
   */
  async getUserStudyGuides(userId: string) {
    return this.db.study_guide.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
    });
  }

  /**
   * Get single study guide
   */
  async getStudyGuide(userId: string, guideId: string) {
    const guide = await this.db.study_guide.findUnique({
      where: { id: guideId },
      include: {
        modules: true,
      },
    });

    if (!guide) {
      throw new NotFoundException('Study guide not found');
    }

    if (guide.user_id !== userId) {
      throw new ForbiddenException('Not authorized');
    }

    return guide;
  }

  /**
   * Update study guide
   */
  async updateStudyGuide(userId: string, guideId: string, dto: UpdateStudyGuideDto) {
    const guide = await this.verifyOwnership(userId, guideId);

    return this.db.study_guide.update({
      where: { id: guideId },
      data: {
        name: dto.name || guide.name,
        target_date: dto.target_date ? new Date(dto.target_date) : guide.target_date,
        hours_per_week: dto.hours_per_week || guide.hours_per_week,
      },
    });
  }

  /**
   * Delete study guide
   */
  async deleteStudyGuide(userId: string, guideId: string) {
    await this.verifyOwnership(userId, guideId);

    return this.db.study_guide.delete({
      where: { id: guideId },
    });
  }

  /**
   * Get next flashcard for review
   * Returns the card that is most due for review based on spaced repetition
   */
  async getNextFlashcard(userId: string, guideId: string) {
    const guide = await this.verifyOwnership(userId, guideId);

    // Get questions associated with this study guide
    // (Assuming a study_guide_modules table that associates questions)
    const guideModules = await this.db.study_guide_module.findMany({
      where: { study_guide_id: guideId },
    });

    if (guideModules.length === 0) {
      return {
        card: null,
        message: 'No modules selected for this study guide',
      };
    }

    const moduleTypes = guideModules.map(m => m.module_type);

    // Find all questions for these modules
    const questions = await this.db.question.findMany({
      where: {
        module_type: {
          in: moduleTypes,
        },
      },
    });

    if (questions.length === 0) {
      return {
        card: null,
        message: 'No questions available for selected modules',
      };
    }

    // Get user's response history for these questions
    const responses = await this.db.question_response.findMany({
      where: {
        user_id: userId,
        question_id: {
          in: questions.map(q => q.id),
        },
      },
    });

    // Create a map of question IDs to responses
    const responseMap = new Map(responses.map(r => [r.question_id, r]));

    // Score each question: overdue first, then lowest confidence, then unanswered
    const scoredQuestions = questions.map(q => {
      const response = responseMap.get(q.id);

      if (!response) {
        // Never reviewed: priority 0 (highest)
        return { question: q, response: null, score: 0 };
      }

      const now = new Date();
      const isOverdue = response.next_review_at < now;

      if (isOverdue) {
        // Overdue: score = 1 + inverse confidence (so confidence 1 = score 2, confidence 5 = score 1.2)
        return {
          question: q,
          response,
          score: 1 + (5 - response.confidence) / 10,
        };
      }

      // Not yet due: score = 2 + (days until due / 10)
      const daysUntilDue = (response.next_review_at.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
      return {
        question: q,
        response,
        score: 2 + daysUntilDue / 10,
      };
    });

    // Sort by score (ascending) and get the first one
    const nextCard = scoredQuestions.sort((a, b) => a.score - b.score)[0];

    return {
      card: {
        id: nextCard.question.id,
        question_text: nextCard.question.question_text,
        module_type: nextCard.question.module_type,
        difficulty: nextCard.question.difficulty,
        tags: nextCard.question.tags,
        isReview: nextCard.response ? true : false,
      },
      nextReviewIn: nextCard.response ?
        Math.max(0, Math.round((nextCard.response.next_review_at.getTime() - new Date().getTime()) / (1000 * 60)))
        : null,
    };
  }

  /**
   * Record user's answer to a question
   * Updates confidence and schedules next review
   */
  async recordAnswer(userId: string, guideId: string, dto: RecordAnswerDto) {
    const guide = await this.verifyOwnership(userId, guideId);

    const question = await this.db.question.findUnique({
      where: { id: dto.question_id },
    });

    if (!question) {
      throw new NotFoundException('Question not found');
    }

    if (!Number.isInteger(dto.confidence) || dto.confidence < 1 || dto.confidence > 5) {
      throw new BadRequestException('Confidence must be 1-5');
    }

    const nextReviewAt = SpacedRepetitionUtil.calculateNextReviewDate(dto.confidence);

    // Upsert response (create if doesn't exist, update if does)
    const response = await this.db.question_response.upsert({
      where: {
        user_id_question_id: {
          user_id: userId,
          question_id: dto.question_id,
        },
      },
      update: {
        confidence: dto.confidence,
        last_reviewed_at: new Date(),
        next_review_at: nextReviewAt,
        review_count: { increment: 1 },
        user_note: dto.note,
      },
      create: {
        user_id: userId,
        question_id: dto.question_id,
        confidence: dto.confidence,
        last_reviewed_at: new Date(),
        next_review_at: nextReviewAt,
        review_count: 1,
        user_note: dto.note,
      },
    });

    return {
      nextReviewAt,
      nextReviewIn: `${SpacedRepetitionUtil.calculateNextReviewDate(dto.confidence).getHours()} hours`,
    };
  }

  /**
   * Get progress stats for a study guide
   */
  async getProgress(userId: string, guideId: string) {
    const guide = await this.verifyOwnership(userId, guideId);

    // Get guide modules
    const guideModules = await this.db.study_guide_module.findMany({
      where: { study_guide_id: guideId },
    });

    const moduleTypes = guideModules.map(m => m.module_type);

    // Get questions
    const totalQuestions = await this.db.question.count({
      where: { module_type: { in: moduleTypes } },
    });

    // Get user responses for these questions
    const responses = await this.db.question_response.findMany({
      where: {
        user_id: userId,
        question: {
          module_type: { in: moduleTypes },
        },
      },
    });

    const totalReviewed = responses.length;
    const averageConfidence =
      responses.length > 0
        ? Math.round(
            responses.reduce((sum, r) => sum + r.confidence, 0) / responses.length * 10
          ) / 10
        : 0;

    // Count by confidence
    const byConfidence = {
      5: responses.filter(r => r.confidence === 5).length,
      4: responses.filter(r => r.confidence === 4).length,
      3: responses.filter(r => r.confidence === 3).length,
      2: responses.filter(r => r.confidence === 2).length,
      1: responses.filter(r => r.confidence === 1).length,
    };

    // Find overdue cards
    const now = new Date();
    const overdueCards = responses.filter(r => r.next_review_at < now).length;

    // Estimate remaining study time
    const unreviewed = totalQuestions - totalReviewed;
    const estimatedMinutes = SpacedRepetitionUtil.estimateStudyTime(
      unreviewed + overdueCards,
    );

    return {
      totalQuestions,
      totalReviewed,
      completionPercent: Math.round((totalReviewed / totalQuestions) * 100),
      averageConfidence,
      byConfidence,
      overdueCards,
      estimatedStudyTime: {
        totalMinutes: estimatedMinutes.totalMinutes,
        perDayMinutes: estimatedMinutes.perDayMinutes,
      },
      targetDate: guide.target_date,
      daysUntilTarget: Math.ceil(
        (guide.target_date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
      ),
    };
  }

  /**
   * Helper: Verify ownership
   */
  private async verifyOwnership(userId: string, guideId: string) {
    const guide = await this.db.study_guide.findUnique({
      where: { id: guideId },
    });

    if (!guide) {
      throw new NotFoundException('Study guide not found');
    }

    if (guide.user_id !== userId) {
      throw new ForbiddenException('Not authorized');
    }

    return guide;
  }
}
```

#### Step 3: Create prep.controller.ts

```typescript
// /apps/api/src/modules/prep/prep.controller.ts

import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { PrepService } from './prep.service';
import { ZodValidationPipe } from '../../common/zod-validation.pipe';
import {
  createStudyGuideSchema,
  updateStudyGuideSchema,
  recordAnswerSchema,
  importQuestionsSchema,
} from './prep.schemas';

@Controller('prep')
@UseGuards(JwtAuthGuard)
export class PrepController {
  constructor(private service: PrepService) {}

  /**
   * POST /prep/questions/import
   * Bulk import questions
   */
  @Post('questions/import')
  @HttpCode(HttpStatus.CREATED)
  async importQuestions(
    @Body(new ZodValidationPipe(importQuestionsSchema)) dto: any,
  ) {
    const result = await this.service.importQuestions(dto.questions);
    return { data: result, error: null };
  }

  /**
   * GET /prep/questions
   * Search questions with filters
   */
  @Get('questions')
  async searchQuestions(
    @Query('module') module?: string,
    @Query('difficulty') difficulty?: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const result = await this.service.searchQuestions({
      module,
      difficulty,
      skip: skip ? parseInt(skip) : 0,
      take: take ? parseInt(take) : 50,
    });
    return { data: result, error: null };
  }

  /**
   * POST /prep/study-guides
   * Create study guide
   */
  @Post('study-guides')
  @HttpCode(HttpStatus.CREATED)
  async createStudyGuide(
    @Req() req: any,
    @Body(new ZodValidationPipe(createStudyGuideSchema)) dto: any,
  ) {
    const guide = await this.service.createStudyGuide(req.user.userId, dto);
    return { data: guide, error: null };
  }

  /**
   * GET /prep/study-guides
   * Get user's study guides
   */
  @Get('study-guides')
  async getStudyGuides(@Req() req: any) {
    const guides = await this.service.getUserStudyGuides(req.user.userId);
    return { data: guides, error: null };
  }

  /**
   * GET /prep/study-guides/:guideId
   * Get single study guide
   */
  @Get('study-guides/:guideId')
  async getStudyGuide(@Req() req: any, @Param('guideId') guideId: string) {
    const guide = await this.service.getStudyGuide(req.user.userId, guideId);
    return { data: guide, error: null };
  }

  /**
   * PUT /prep/study-guides/:guideId
   * Update study guide
   */
  @Put('study-guides/:guideId')
  async updateStudyGuide(
    @Req() req: any,
    @Param('guideId') guideId: string,
    @Body(new ZodValidationPipe(updateStudyGuideSchema)) dto: any,
  ) {
    const guide = await this.service.updateStudyGuide(req.user.userId, guideId, dto);
    return { data: guide, error: null };
  }

  /**
   * DELETE /prep/study-guides/:guideId
   * Delete study guide
   */
  @Delete('study-guides/:guideId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteStudyGuide(@Req() req: any, @Param('guideId') guideId: string) {
    await this.service.deleteStudyGuide(req.user.userId, guideId);
    return { data: null, error: null };
  }

  /**
   * GET /prep/study-guides/:guideId/flashcard
   * Get next flashcard to review
   */
  @Get('study-guides/:guideId/flashcard')
  async getNextFlashcard(@Req() req: any, @Param('guideId') guideId: string) {
    const card = await this.service.getNextFlashcard(req.user.userId, guideId);
    return { data: card, error: null };
  }

  /**
   * POST /prep/study-guides/:guideId/flashcard/:questionId/response
   * Record answer to a question
   */
  @Post('study-guides/:guideId/flashcard/:questionId/response')
  @HttpCode(HttpStatus.CREATED)
  async recordAnswer(
    @Req() req: any,
    @Param('guideId') guideId: string,
    @Param('questionId') questionId: string,
    @Body(new ZodValidationPipe(recordAnswerSchema)) dto: any,
  ) {
    const result = await this.service.recordAnswer(req.user.userId, guideId, {
      question_id: questionId,
      confidence: dto.confidence,
      note: dto.note,
    });
    return { data: result, error: null };
  }

  /**
   * GET /prep/study-guides/:guideId/progress
   * Get progress stats
   */
  @Get('study-guides/:guideId/progress')
  async getProgress(@Req() req: any, @Param('guideId') guideId: string) {
    const progress = await this.service.getProgress(req.user.userId, guideId);
    return { data: progress, error: null };
  }
}
```

#### Step 4: Create prep.schemas.ts

```typescript
// /apps/api/src/modules/prep/prep.schemas.ts

import { z } from 'zod';

export const createStudyGuideSchema = z.object({
  name: z.string().min(1, 'Name required'),
  target_date: z.string(),
  hours_per_week: z.number().min(1, 'Hours per week must be at least 1'),
  tags: z.array(z.string()).optional(),
  visibility: z.enum(['private', 'link', 'public']).optional(),
});

export const updateStudyGuideSchema = z.object({
  name: z.string().optional(),
  target_date: z.string().optional(),
  hours_per_week: z.number().optional(),
});

export const recordAnswerSchema = z.object({
  confidence: z.number().int().min(1).max(5),
  note: z.string().optional(),
});

export const importQuestionsSchema = z.object({
  questions: z.array(
    z.object({
      question_text: z.string(),
      module_type: z.string(),
      difficulty: z.enum(['easy', 'medium', 'hard']),
      tags: z.array(z.string()).optional(),
      recency: z.string().optional(),
      answer: z.string().optional(),
    }),
  ),
});
```

#### Step 5: Create prep.module.ts

```typescript
// /apps/api/src/modules/prep/prep.module.ts

import { Module } from '@nestjs/common';
import { PrepService } from './prep.service';
import { PrepController } from './prep.controller';
import { PrismaModule } from '../../common/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PrepController],
  providers: [PrepService],
})
export class PrepModule {}
```

#### Step 6: Register PrepModule in app.module.ts

```typescript
import { PrepModule } from './modules/prep/prep.module';

@Module({
  imports: [
    // ... other modules
    PrepModule,
  ],
})
export class AppModule {}
```

## Success Criteria

After completing this session:

- [ ] PrepModule created with service, controller, schemas, utilities
- [ ] Spaced repetition algorithm working correctly
- [ ] Questions endpoints:
  - [ ] POST /prep/questions/import (bulk import)
  - [ ] GET /prep/questions (search with filters)
- [ ] Study guide endpoints:
  - [ ] POST /prep/study-guides (create)
  - [ ] GET /prep/study-guides (list)
  - [ ] GET /prep/study-guides/:id (fetch)
  - [ ] PUT /prep/study-guides/:id (update)
  - [ ] DELETE /prep/study-guides/:id (delete)
- [ ] Flashcard endpoints:
  - [ ] GET /prep/study-guides/:id/flashcard (next card)
  - [ ] POST /prep/study-guides/:id/flashcard/:qId/response (record answer)
  - [ ] GET /prep/study-guides/:id/progress (stats)
- [ ] Spaced repetition working:
  - [ ] Confidence 5 = 7 days until next review
  - [ ] Confidence 1 = 4 hours until next review
  - [ ] Overdue cards returned first
  - [ ] Cards never reviewed returned before due cards
- [ ] Progress tracking:
  - [ ] Completion percentage calculated
  - [ ] Average confidence calculated
  - [ ] Confidence distribution tracked (1-5)
  - [ ] Overdue cards counted
  - [ ] Estimated study time calculated

## Validation Commands

```bash
# Import 813 questions (you'll need to prepare this data from your question banks)
curl -X POST http://localhost:3001/prep/questions/import \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "questions": [
      {
        "question_text": "What is an event loop?",
        "module_type": "node_js",
        "difficulty": "medium",
        "tags": ["async", "concurrency"]
      },
      ...
    ]
  }'

# Create study guide
curl -X POST http://localhost:3001/prep/study-guides \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Senior Backend Interview Prep",
    "target_date":"2026-05-15",
    "hours_per_week":10,
    "tags":["backend","node.js","distributed"]
  }'

# Get next flashcard
curl http://localhost:3001/prep/study-guides/<GUIDE_ID>/flashcard \
  -H "Authorization: Bearer <TOKEN>"

# Record confidence score
curl -X POST http://localhost:3001/prep/study-guides/<GUIDE_ID>/flashcard/<Q_ID>/response \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"confidence":3,"note":"Need to review async/await"}'

# Get progress
curl http://localhost:3001/prep/study-guides/<GUIDE_ID>/progress \
  -H "Authorization: Bearer <TOKEN>"

# Verify spaced repetition in database
psql postgresql://postgres:postgres@localhost:5432/pathmerit
SELECT
  q.question_text,
  qr.confidence,
  qr.next_review_at,
  EXTRACT(EPOCH FROM (qr.next_review_at - NOW()))/3600 as hours_until_review
FROM question_responses qr
JOIN questions q ON qr.question_id = q.id
ORDER BY qr.next_review_at ASC
LIMIT 10;
```

This completes Session 4. All backend APIs are now complete and production-ready. The next phase is building the frontend UI with the design system and connecting it to these APIs.

---

## All Backend APIs Summary

After all 4 sessions:

✅ **Auth Module**
- Signup, login, logout
- JWT token refresh
- Google OAuth integration (stubbed)
- Protected routes with JwtAuthGuard

✅ **Resume Builder Module**
- Create, read, update, delete resumes
- Create variants (tailored resumes)
- Add/edit work experiences
- Add/edit education
- Add/edit technical skills
- Queue PDF exports
- Check export status

✅ **Application Tracker Module**
- Create, read, update, delete applications
- Add/edit contact logs
- Filter and search applications
- Pipeline analytics
- Salary tracking

✅ **Interview Prep Module**
- Bulk import questions (813+ questions)
- Search/filter questions
- Create study guides
- Flashcard endpoint with spaced repetition
- Progress tracking
- Confidence scoring (1-5)
- Automatic review scheduling

All APIs are:
- Protected with authentication
- Owned by the user (can't access other users' data)
- Returning consistent `{ data, error }` format
- Using Zod for validation
- Fully typed with TypeScript

The platform is now ready for frontend UI development.
```

CLAUDE_CODE_SESSIONS_MASTER.md 11,962 chars

```
# PathMerit: Claude Code Sessions — Complete Build Plan

You have **4 ready-to-execute Claude Code prompts** that will build PathMerit to MVP in 4 weeks.

## 📋 Session Overview

| Session | Focus | Duration | Deliverable |
|---------|-------|----------|-------------|
| **1** (Already done) | Monorepo scaffold + database | 2.5–3 hrs | Working dev environment, Postgres schema, seed data |
| **2a** (Next) | Design system package | 1.5 hrs | `/packages/design-system` with components + tokens |
| **2b** (Then) | Auth module | 2 hrs | Signup, login, refresh, logout, protected routes |
| **3** (Week 3) | Resume + Application APIs | 3 hrs | Full CRUD for both modules + PDF export queueing |
| **4** (Week 4) | Interview prep + SRS | 2.5 hrs | Study guides, flashcards, spaced repetition algorithm |

---

## 🚀 How to Execute Each Session

### Session 1: Already Complete ✅

You've already executed the initial scaffold. You have:
- ✅ Monorepo at /pathmerit
- ✅ Database schema with all tables
- ✅ Seed data (200+ technologies, 100+ institutions, 50+ roles)
- ✅ GitHub Actions CI/CD
- ✅ Next.js + NestJS running locally

**Next**: Continue with Session 2a.

---

### Session 2a: Design System Package

**What to do:**
1. Open `CLAUDE_CODE_SESSION_2A.md`
2. Copy the entire content
3. Paste into Claude Code with instruction: "Build the design system package for PathMerit. Create `/packages/design-system` with all components from my Claude Design export, design tokens, Tailwind config, and CVA-based component variants. Make sure Next.js can import @pathmerit/design-system."
4. When complete, test by navigating to `http://localhost:3000/design-test`

**Expected output:**
- `/packages/design-system` package
- Components using CVA pattern
- Design tokens (colors, typography, spacing)
- Tailwind config extending design system
- All components rendering in Next.js

**Time:** 1.5 hours Claude Code + 20 mins validation

**Success**: Run `pnpm dev`, go to design test page, see all design system components rendered correctly.

---

### Session 2b: Auth Module

**What to do:**
1. Open `CLAUDE_CODE_SESSION_2B.md`
2. Copy the entire content
3. Paste into Claude Code: "Build the auth module for NestJS. Implement signup, login, logout, JWT refresh, session management in Postgres, protected routes with JwtAuthGuard. Return consistent { data, error } format."
4. Test endpoints with curl commands provided in the validation section

**Expected output:**
- AuthModule with service, controller, schemas
- Signup endpoint that hashes passwords and returns tokens
- Login endpoint that verifies credentials
- Refresh token endpoint for new access tokens
- Logout that deletes sessions
- Protected /auth/me endpoint
- All endpoints returning proper error messages

**Time:** 2 hours Claude Code + 30 mins validation

**Success**:
```bash
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
# Should return valid tokens
```

---

### Session 3: Resume Builder + Application Tracker APIs

**What to do:**
1. Open `CLAUDE_CODE_SESSION_3.md`
2. Copy the entire content
3. Paste into Claude Code: "Build the resume builder and application tracker modules for NestJS. Implement full CRUD for resumes with variants, work experiences, and resume templates. Implement full CRUD for applications with contact logs. Queue PDF exports to Postgres jobs table. All endpoints protected and user-scoped."
4. Test endpoints with curl commands in validation section

**Expected output:**
- ResumesModule with service, controller, schemas
- Resume CRUD: create, list, fetch, update, delete
- Resume variants: create variant (fork)
- Work experience: add, update, delete
- PDF export: queue job, check status
- ApplicationsModule with service, controller, schemas
- Application CRUD: create, list, fetch, update, delete
- Contact logs: add, list, update
- Filtering and pagination
- Pipeline analytics endpoint

**Time:** 3 hours Claude Code + 45 mins validation

**Success**:
```bash
# Create resume
curl -X POST http://localhost:3001/resumes \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"name":"My Resume"}'

# Queue PDF export
curl -X POST http://localhost:3001/resumes/<ID>/export-pdf \
  -H "Authorization: Bearer <TOKEN>"

# Verify job in Postgres
SELECT * FROM jobs WHERE type='pdf_export';
# Should show pending job
```

---

### Session 4: Interview Prep Module with Spaced Repetition

**What to do:**
1. Open `CLAUDE_CODE_SESSION_4.md`
2. Copy the entire content
3. Paste into Claude Code: "Build the interview prep module for NestJS. Implement questions CRUD with bulk import. Implement study guides (create, list, update, delete). Implement flashcard endpoint that returns next card based on spaced repetition algorithm. Implement progress tracking with confidence scoring. Implement the SRS utility that calculates next review dates based on confidence levels (1-5)."
4. Prepare question data from your 813 interview prep questions
5. Test endpoints with curl commands in validation section

**Expected output:**
- PrepModule with service, controller, schemas, utilities
- SpacedRepetitionUtil with SRS algorithm
- Questions endpoints: bulk import, search/filter
- Study guides CRUD
- Flashcard endpoint returning next card to review
- Answer recording with confidence scoring (1-5)
- Progress tracking and stats
- Spaced repetition: confidence 5 = 7 days, confidence 1 = 4 hours

**Time:** 2.5 hours Claude Code + 30 mins validation

**Success**:
```bash
# Create study guide
curl -X POST http://localhost:3001/prep/study-guides \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"name":"Backend Prep","target_date":"2026-05-15","hours_per_week":10}'

# Get next flashcard
curl http://localhost:3001/prep/study-guides/<ID>/flashcard \
  -H "Authorization: Bearer <TOKEN>"
# Should return next card based on SRS

# Record confidence
curl -X POST http://localhost:3001/prep/study-guides/<ID>/flashcard/<Q_ID>/response \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"confidence":3}'

# Check spaced repetition worked
SELECT confidence, next_review_at FROM question_responses
WHERE confidence=3 LIMIT 1;
# Should show next_review_at = 1 day from now
```

---

## 📅 Weekly Timeline

**Week 1:**
- ✅ Session 1: Scaffold (already done)

**Week 2:**
- ▶️ Session 2a: Design system
- ▶️ Session 2b: Auth module

**Week 3:**
- ▶️ Session 3: Resume + Application APIs

**Week 4:**
- ▶️ Session 4: Interview Prep APIs

**Week 5+:**
- Manual or Claude Code Session 5+: Frontend UI (React components + pages)
- Deployment to Vercel + Railway + Neon

---

## 📊 Complete API Specification After All Sessions

### Authentication
- `POST /auth/signup` — Register
- `POST /auth/login` — Login
- `POST /auth/refresh` — Refresh token
- `POST /auth/logout` — Logout
- `GET /auth/me` — Current user (protected)

### Resume Builder
- `POST /resumes` — Create
- `GET /resumes` — List
- `GET /resumes/:id` — Fetch
- `PUT /resumes/:id` — Update
- `DELETE /resumes/:id` — Delete
- `POST /resumes/:id/variants` — Create variant
- `POST /resumes/:id/work-experience` — Add job
- `PUT /resumes/:id/work-experience/:expId` — Update job
- `DELETE /resumes/:id/work-experience/:expId` — Delete job
- `POST /resumes/:id/export-pdf` — Queue PDF export
- `GET /resumes/:id/export-status` — Check export status

### Application Tracker
- `POST /applications` — Create
- `GET /applications` — List (with filters)
- `GET /applications/:id` — Fetch
- `PUT /applications/:id` — Update
- `DELETE /applications/:id` — Delete
- `POST /applications/:id/contacts` — Add contact
- `GET /applications/:id/contacts` — List contacts
- `PUT /applications/:id/contacts/:contactId` — Update contact
- `GET /applications/stats` — Pipeline stats

### Interview Prep
- `POST /prep/questions/import` — Bulk import
- `GET /prep/questions` — Search (with filters)
- `POST /prep/study-guides` — Create
- `GET /prep/study-guides` — List
- `GET /prep/study-guides/:id` — Fetch
- `PUT /prep/study-guides/:id` — Update
- `DELETE /prep/study-guides/:id` — Delete
- `GET /prep/study-guides/:id/flashcard` — Next card (SRS)
- `POST /prep/study-guides/:id/flashcard/:qId/response` — Record answer
- `GET /prep/study-guides/:id/progress` — Progress stats

**Total APIs: 41 fully functional endpoints**

---

## ✅ Execution Checklist

### Before Session 2a
- [ ] Session 1 is complete and working locally
- [ ] `pnpm dev` starts both Next.js and NestJS without errors
- [ ] Database has seed data (verify: `SELECT COUNT(*) FROM technologies;` = 200+)
- [ ] Design system exported from Claude Design (components, tokens, Tailwind config)

### During/After Each Session
- [ ] Copy full prompt from markdown file
- [ ] Paste into Claude Code
- [ ] Wait for completion
- [ ] Test all validation commands
- [ ] Commit to GitHub with meaningful message
- [ ] Check GitHub Actions CI passes

### Before Moving to Next Session
- [ ] All endpoints respond correctly
- [ ] Authentication works (can get access token)
- [ ] Data persists in Postgres
- [ ] Tests pass
- [ ] No errors in console or logs

---

## 🔑 Key Principles for Execution

1. **Execute sessions in order**
   - Session 1 → 2a → 2b → 3 → 4
   - Each builds on previous

2. **Validate after each session**
   - Use provided curl commands
   - Check Postgres directly
   - Read error messages carefully

3. **Commit frequently**
   - After each successful validation
   - Meaningful commit messages
   - Gives you a rollback point if needed

4. **Use the design system consistently**
   - From Session 2a onwards, all UI must use `@pathmerit/design-system`
   - Components come from design system, not created ad-hoc
   - Tailwind uses design tokens, not hardcoded colors

5. **Keep the database clean**
   - Session 1 creates seed data (don't delete it)
   - Sessions 2–4 just add to schema
   - You can reset with migrations if needed

---

## 🛠️ Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| Claude Code times out | Break into smaller sections. Prompt is modular, can be run partially. |
| `pnpm install` fails | Delete pnpm-lock.yaml and node_modules. Run `pnpm install` again. |
| Postgres won't start | Check port 5432 is free. Restart Docker: `docker-compose down && docker-compose up -d` |
| TypeScript errors | Check all imports are correct. Some types might need to be exported from packages. |
| Auth endpoints return 401 | Make sure JWT_SECRET matches between signing and verification. |
| Design system not importing | Check `/packages/design-system/package.json` exports. Verify `pnpm install` ran. |
| SRS not working | Verify Postgres has `next_review_at` being set correctly. Check confidence is 1-5. |

---

## 🎯 Success Criteria After All Sessions

You'll have:

✅ 41 fully functional API endpoints
✅ Complete authentication system
✅ Resume builder with PDF export queueing
✅ Application tracker with analytics
✅ Interview prep with spaced repetition algorithm
✅ Design system integrated and ready for UI
✅ All data persisted in Postgres
✅ All endpoints protected and user-scoped
✅ Consistent error handling
✅ GitHub Actions CI/CD passing
✅ Production-ready backend

At this point, building the frontend UI is straightforward:
- React components use the design system
- Components call the APIs
- State management with TanStack Query + Zustand
- Testing with Playwright

---

## 📝 Next Steps Right Now

1. **Before Session 2a:**
   - Verify Session 1 is working: `pnpm dev` should start both servers
   - Have your Claude Design export ready (components, tokens)

2. **Execute Session 2a:**
   - Open `CLAUDE_CODE_SESSION_2A.md`
   - Copy and paste into Claude Code
   - Wait for completion
   - Test design system at http://localhost:3000/design-test

3. **Then continue:**
   - Session 2b → Session 3 → Session 4
   - Follow the same pattern for each

---

**You're ready. Start with Session 2a.**

Good luck. 🚀
```

BUILD_CHECKLIST.md 16,074 chars

```
# PathMerit MVP Build Execution Checklist

**Start Date:** ____________________
**Target Launch Date:** 4 weeks from start

---

## WEEK 1: Foundation

### [ ] Pre-work (Before Claude Code)
- [ ] Export Claude Design system as .tsx files
  - [ ] All components exported
  - [ ] Design tokens extracted (colors, typography, spacing)
  - [ ] Tailwind config ready
  - [ ] Save to `/packages/design-system` folder (local staging)
- [ ] Create GitHub repository `pathmerit`
- [ ] Set up GitHub Actions secrets
  - [ ] GOOGLE_CLIENT_ID
  - [ ] GOOGLE_CLIENT_SECRET
  - [ ] JWT_SECRET (generate: `openssl rand -base64 32`)
  - [ ] STRIPE_SECRET_KEY
  - [ ] RESEND_API_KEY
- [ ] Have this checklist printed or open in separate window

### [ ] Claude Code Session 1: Monorepo Scaffold
**Status:** ⭕ Pending · 🟡 In Progress · ✅ Complete

- [ ] Copy CLAUDE_CODE_PROMPT.md content
- [ ] Open Claude Code (Terminal or VS Code extension)
- [ ] Paste prompt and execute
- [ ] Wait for completion (2.5–3 hours)

**While waiting:**
- [ ] Review CLAUDE_CODE_PROMPT.md for any questions
- [ ] Prepare design system export directory structure
- [ ] Check GitHub repo is created and accessible

### [ ] Validation: Local Environment Works
**Checklist:**
```bash
cd pathmerit
pnpm install          # Should complete without errors
docker-compose up -d  # Postgres should start
cd apps/api
pnpm drizzle:migrate  # Run migrations
pnpm db:seed          # Seed lookups
cd ../..
pnpm dev              # Start both frontend + backend
```

- [ ] `pnpm install` completes without errors
- [ ] `docker-compose up -d` starts Postgres successfully
- [ ] Migrations run without errors
- [ ] Seed data loads (200+ technologies, 100+ institutions, 50+ roles)
- [ ] `pnpm dev` starts
  - [ ] Next.js: http://localhost:3000 returns 200
  - [ ] NestJS: http://localhost:3001/health returns 200
- [ ] Can query Postgres: `SELECT COUNT(*) FROM technologies` returns ~200

**Issues encountered:**
- Issue 1: _________________________________________________________
  - Resolution: __________________________________________________
- Issue 2: _________________________________________________________
  - Resolution: __________________________________________________

### [ ] Post-validation: First commit
```bash
git add .
git commit -m "feat: monorepo scaffold with database schema and seed data"
git push origin main
```

- [ ] Committed to GitHub
- [ ] GitHub Actions workflow runs without errors
- [ ] Build passes

**⏰ End of Week 1 Status:** ☐ On track · ☐ Minor delays · ☐ Blocked

---

## WEEK 2: Design System + Auth

### [ ] Claude Code Session 2a: Design System Package
**Status:** ⭕ Pending · 🟡 In Progress · ✅ Complete

- [ ] Prepare design system files from Claude Design export
- [ ] Open Claude Code
- [ ] Paste design system creation prompt
- [ ] Execute (1.5 hours expected)

**Deliverable checklist:**
- [ ] `/packages/design-system` package created
- [ ] `/components` folder with all .tsx files
  - [ ] Button.tsx, Input.tsx, Card.tsx, Modal.tsx, Sidebar.tsx (core components)
  - [ ] All other components from Claude Design
- [ ] `/tokens/colors.ts` with color definitions
- [ ] `/tokens/typography.ts` with font settings
- [ ] `/tokens/spacing.ts` with spacing scale
- [ ] `/tokens/index.ts` that exports all tokens
- [ ] `tailwind.config.ts` that extends with design tokens
- [ ] `GUIDELINES.md` with usage patterns
- [ ] `index.ts` barrel export of all components + tokens
- [ ] `package.json` configured correctly

### [ ] Validation: Design System Works
```bash
cd packages/design-system
npm list  # Check dependencies
cd ../../apps/web
npm ls @pathmerit/design-system  # Check it's linked
```

- [ ] Design system package installs without errors
- [ ] Can import Button from '@pathmerit/design-system'
- [ ] Component renders in Next.js without errors
- [ ] Tailwind class extensions work (custom colors show up)

### [ ] Claude Code Session 2b: Auth Module
**Status:** ⭕ Pending · 🟡 In Progress · ✅ Complete

- [ ] Open Claude Code
- [ ] Paste auth module prompt
- [ ] Execute (2 hours expected)

**Deliverable checklist:**
- [ ] `/apps/api/src/modules/auth` folder created
  - [ ] `auth.controller.ts` with all endpoints:
    - [ ] POST /auth/signup
    - [ ] POST /auth/login
    - [ ] POST /auth/logout
    - [ ] POST /auth/refresh
    - [ ] POST /auth/google
    - [ ] GET /auth/me
  - [ ] `auth.service.ts` with:
    - [ ] Password hashing (bcrypt)
    - [ ] JWT token generation + refresh
    - [ ] Session management in Postgres
    - [ ] Better Auth Google OAuth integration
  - [ ] `auth.guard.ts` for route protection
  - [ ] Zod schemas for validation
- [ ] `auth.module.ts` registered in `app.module.ts`

### [ ] Validation: Auth Endpoints Work
```bash
# Test signup
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Should return: { data: { user: { id, email }, token }, error: null }

# Test login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Should return: valid JWT token

# Check sessions in Postgres
SELECT * FROM sessions LIMIT 1;  # Should show session records
```

- [ ] Signup endpoint works, returns token
- [ ] Login endpoint works, returns token
- [ ] Logout endpoint deletes session
- [ ] Token refresh works
- [ ] Sessions persist in Postgres
- [ ] GET /auth/me returns current user (when authenticated)

### [ ] Post-validation: Second commit
```bash
git add .
git commit -m "feat: design system package and auth module with Better Auth"
git push origin main
```

- [ ] Committed to GitHub
- [ ] GitHub Actions passes
- [ ] CI runs auth tests without errors

**⏰ End of Week 2 Status:** ☐ On track · ☐ Minor delays · ☐ Blocked

---

## WEEK 3: Core CRUD APIs

### [ ] Claude Code Session 3: Resume + Application Tracker APIs
**Status:** ⭕ Pending · 🟡 In Progress · ✅ Complete

- [ ] Open Claude Code
- [ ] Paste resume + application tracker prompt
- [ ] Execute (3 hours expected)

**Resume module deliverables:**
- [ ] `/apps/api/src/modules/resumes` created
- [ ] Endpoints:
  - [ ] POST /resumes (create base)
  - [ ] GET /resumes/:id (fetch single)
  - [ ] GET /resumes (list user's resumes)
  - [ ] PUT /resumes/:id (update)
  - [ ] DELETE /resumes/:id (soft delete)
  - [ ] POST /resumes/:id/variants (create variant)
  - [ ] POST /resumes/:id/work-experience (add job)
  - [ ] PUT /resumes/:id/work-experience/:expId (update job)
  - [ ] POST /resumes/:id/export-pdf (queue export)
  - [ ] GET /resumes/:id/export-status (check job status)
- [ ] Postgres jobs table integration
- [ ] Permission checks (user can only access own resumes)
- [ ] Soft deletes implemented

**Application tracker module deliverables:**
- [ ] `/apps/api/src/modules/applications` created
- [ ] Endpoints:
  - [ ] POST /applications (create)
  - [ ] GET /applications (list with filters)
  - [ ] GET /applications/:id (fetch single)
  - [ ] PUT /applications/:id (update, including status)
  - [ ] DELETE /applications/:id (soft delete)
  - [ ] POST /applications/:id/contacts (add contact log)
  - [ ] GET /applications/:id/contacts (list contacts)
  - [ ] PUT /applications/:id/contacts/:contactId (update contact)
  - [ ] DELETE /applications/:id/contacts/:contactId
  - [ ] GET /applications/stats (pipeline analytics)
- [ ] Filtering by status, company, date range
- [ ] Pagination (20 per page default)
- [ ] Permission checks
- [ ] Soft deletes

### [ ] Validation: CRUD Operations Work
```bash
# Create resume
curl -X POST http://localhost:3001/resumes \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"name":"My Resume","header":{...}}'
# Should return resume object with id

# Add work experience
curl -X POST http://localhost:3001/resumes/<RESUME_ID>/work-experience \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{...job details...}'

# Queue PDF export
curl -X POST http://localhost:3001/resumes/<RESUME_ID>/export-pdf \
  -H "Authorization: Bearer <TOKEN>"

# Check jobs table
SELECT * FROM jobs WHERE type='pdf_export';  # Should see pending job

# Create application
curl -X POST http://localhost:3001/applications \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{...application details...}'

# Add contact log
curl -X POST http://localhost:3001/applications/<APP_ID>/contacts \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{...contact details...}'

# List applications with filter
curl "http://localhost:3001/applications?status=applied&company=Stripe" \
  -H "Authorization: Bearer <TOKEN>"
```

- [ ] Can create resume
- [ ] Can add work experiences to resume
- [ ] Can create resume variants
- [ ] PDF export job queues to Postgres jobs table
- [ ] Can create applications
- [ ] Can add contact logs
- [ ] Can filter/search applications
- [ ] Pagination works
- [ ] Permission checks work (can't access other user's data)
- [ ] Soft deletes work

### [ ] Post-validation: Third commit
```bash
git add .
git commit -m "feat: resume builder and application tracker full CRUD APIs"
git push origin main
```

- [ ] Committed to GitHub
- [ ] CI passes

**⏰ End of Week 3 Status:** ☐ On track · ☐ Minor delays · ☐ Blocked

---

## WEEK 4: Interview Prep APIs

### [ ] Claude Code Session 4: Interview Prep Module
**Status:** ⭕ Pending · 🟡 In Progress · ✅ Complete

- [ ] Open Claude Code
- [ ] Paste interview prep module prompt
- [ ] Execute (2.5 hours expected)

**Interview prep module deliverables:**
- [ ] `/apps/api/src/modules/prep` created
- [ ] Endpoints:
  - [ ] POST /questions/import (bulk import)
  - [ ] GET /questions (search, filter by module/difficulty/tag)
  - [ ] POST /study-guides (create)
  - [ ] GET /study-guides (list)
  - [ ] GET /study-guides/:id (fetch)
  - [ ] PUT /study-guides/:id (update)
  - [ ] DELETE /study-guides/:id
  - [ ] GET /study-guides/:id/flashcard (next card to review)
  - [ ] POST /study-guides/:id/flashcard/:qId/response (record answer)
  - [ ] GET /study-guides/:id/progress (stats)
- [ ] Spaced repetition algorithm:
  - [ ] next_review_at calculation based on confidence (1-5)
  - [ ] Confidence 5 = 7 days
  - [ ] Confidence 4 = 3 days
  - [ ] Confidence 3 = 1 day
  - [ ] Confidence 2 = 12 hours
  - [ ] Confidence 1 = 4 hours
- [ ] Flashcard ordering:
  - [ ] Overdue cards first
  - [ ] Then lowest-confidence cards
  - [ ] Then least-recently-reviewed
- [ ] Progress tracking and stats

### [ ] Validation: Interview Prep Works
```bash
# Create study guide
curl -X POST http://localhost:3001/study-guides \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"name":"Senior Backend Prep","targetDate":"2026-05-15","hoursPerWeek":10,"modules":["node_js","distributed_systems","aws"]}'

# Get next flashcard
curl http://localhost:3001/study-guides/<GUIDE_ID>/flashcard \
  -H "Authorization: Bearer <TOKEN>"
# Should return: { id, question_text, difficulty, module_type }

# Record confidence
curl -X POST http://localhost:3001/study-guides/<GUIDE_ID>/flashcard/<Q_ID>/response \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"confidence":4}'

# Get progress
curl http://localhost:3001/study-guides/<GUIDE_ID>/progress \
  -H "Authorization: Bearer <TOKEN>"
# Should return: { completionRate, avgConfidence, lastReviewedAt }

# Verify spaced repetition
SELECT next_review_at, confidence FROM question_responses
WHERE study_guide_id = '<GUIDE_ID>'
LIMIT 5;  # Should show varied next_review_at times
```

- [ ] Can create study guides
- [ ] Can fetch next flashcard (correct ordering)
- [ ] Can record confidence scores
- [ ] Spaced repetition scheduling calculates correctly
- [ ] Progress stats show accurate metrics
- [ ] Question import works (bulk load 800+ questions)
- [ ] Search and filtering by module/difficulty work

### [ ] Post-validation: Fourth commit
```bash
git add .
git commit -m "feat: interview prep module with spaced repetition algorithm"
git push origin main
```

- [ ] Committed to GitHub
- [ ] CI passes
- [ ] All backend APIs complete

**⏰ End of Week 4 Status:** ☐ On track · ☐ Minor delays · ☐ Blocked

---

## AFTER WEEK 4: Decision Point

### [ ] Review: All APIs Complete?
- [ ] Auth working
- [ ] Resume builder API complete
- [ ] Application tracker API complete
- [ ] Interview prep API complete
- [ ] Design system integrated
- [ ] All tests passing
- [ ] Zero blocking issues

### [ ] Decision: How to build the frontend?
- [ ] Option A: Continue with Claude Code (Sessions 5+)
- [ ] Option B: Build manually with React
- [ ] Option C: Hybrid (Claude Code for complex, manual for simple)

**Selected option:** ___________________________

### [ ] If Option A or C: Prepare next Claude Code prompts
- [ ] Auth UI prompt (signup, login pages)
- [ ] Resume builder form prompt (multi-section form)
- [ ] Application tracker UI prompt (Kanban board, list view)
- [ ] Study guide UI prompt (flashcard interface)

### [ ] If Option B or C: Set up React development
- [ ] Install ESLint + Prettier
- [ ] Create component structure in `/apps/web/src/components`
- [ ] Create page structure in `/apps/web/src/app`
- [ ] Test API client library works

---

## FINAL WEEK: Deployment Prep

### [ ] Vercel Deployment
- [ ] Connect GitHub repo to Vercel
- [ ] Set environment variable: NEXT_PUBLIC_API_URL = http://localhost:3001 (for dev)
- [ ] Create production environment variable
- [ ] Deploy preview branch
- [ ] Deploy main branch

### [ ] Railway Deployment
- [ ] Create Railway account
- [ ] Create project
- [ ] Connect GitHub repo
- [ ] Set environment variables:
  - [ ] DATABASE_URL (Neon production database)
  - [ ] JWT_SECRET
  - [ ] GOOGLE_CLIENT_ID / SECRET
  - [ ] STRIPE_SECRET_KEY
  - [ ] RESEND_API_KEY
  - [ ] NODE_ENV=production
- [ ] Deploy
- [ ] Test production API endpoints

### [ ] Neon Database Setup
- [ ] Create Neon account
- [ ] Create production database
- [ ] Run migrations on production database
- [ ] Seed production database with lookups
- [ ] Test production database connection

### [ ] Domain + DNS
- [ ] Purchase domain (pathmerit.com or .dev)
- [ ] Point domain to Vercel (frontend)
- [ ] Set up api.pathmerit.com subdomain for Railway backend
- [ ] Configure SSL/TLS (automatic via Vercel + Railway)
- [ ] Test HTTPS working

### [ ] Go-Live Checklist
- [ ] All environment variables set in production
- [ ] Full signup → create resume → export PDF flow works
- [ ] Application tracking workflow complete
- [ ] Study guide flashcards work
- [ ] No errors in Sentry
- [ ] Response times acceptable (<500ms)
- [ ] Mobile responsive (test on phone)

### [ ] Public Launch
- [ ] Write Product Hunt post
- [ ] Share with network
- [ ] Announce on Twitter/LinkedIn
- [ ] Monitor Sentry for errors
- [ ] Collect early user feedback

---

## Notes & Issues

### Week 1 notes:
_________________________________________________________________
_________________________________________________________________

### Week 2 notes:
_________________________________________________________________
_________________________________________________________________

### Week 3 notes:
_________________________________________________________________
_________________________________________________________________

### Week 4 notes:
_________________________________________________________________
_________________________________________________________________

### Blockers encountered:
_________________________________________________________________
_________________________________________________________________

### Questions for later:
_________________________________________________________________
_________________________________________________________________

---

## Approval Sign-off

- [ ] Scaffold validated and complete
- [ ] Auth module tested
- [ ] All CRUD APIs tested
- [ ] Design system integrated
- [ ] Ready to build frontend
- [ ] Ready to deploy to production

**Signed:** _________________________ **Date:** ______________
```

SESSIONS_READY.txt 4,587 chars

```
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║              🎉 PATHMERIT: ALL CLAUDE CODE SESSIONS READY                 ║
║                                                                            ║
║                     4 Prompts · 3,254 Lines of Code                       ║
║                  Ready to Build to MVP in 4 Weeks                        ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝

YOU HAVE 4 COMPLETE CLAUDE CODE PROMPTS
═══════════════════════════════════════════════════════════════════════════

SESSION 1 (Already Done) ✅
  - Monorepo scaffold + database foundation
  - Status: COMPLETE

SESSION 2a (Ready to Execute)
  - Design system package integration
  - File: CLAUDE_CODE_SESSION_2A.md (481 lines)
  - Expected time: 1.5 hours Claude Code + 20 mins validation
  - Deliverable: /packages/design-system with all components + tokens

SESSION 2b (Ready to Execute)
  - Auth module (signup, login, refresh, logout)
  - File: CLAUDE_CODE_SESSION_2B.md (720 lines)
  - Expected time: 2 hours Claude Code + 30 mins validation
  - Deliverable: Complete auth system with JWT tokens

SESSION 3 (Ready to Execute)
  - Resume builder + Application tracker APIs
  - File: CLAUDE_CODE_SESSION_3.md (1,148 lines)
  - Expected time: 3 hours Claude Code + 45 mins validation
  - Deliverable: Full CRUD for resumes and applications

SESSION 4 (Ready to Execute)
  - Interview prep module with spaced repetition
  - File: CLAUDE_CODE_SESSION_4.md (905 lines)
  - Expected time: 2.5 hours Claude Code + 30 mins validation
  - Deliverable: Study guides, flashcards, SRS algorithm

═══════════════════════════════════════════════════════════════════════════════

HOW TO USE THESE SESSIONS
═══════════════════════════════════════════════════════════════════════════

1. Open CLAUDE_CODE_SESSION_2A.md
2. Copy the entire content
3. Paste into Claude Code with instruction: "Execute this prompt"
4. Wait for completion (1.5–3 hours depending on session)
5. Test the deliverable using curl commands in the session file
6. Commit to GitHub
7. Move to next session

REPEAT FOR SESSIONS 2B, 3, 4

═══════════════════════════════════════════════════════════════════════════════

WHAT YOU'LL HAVE AFTER ALL 4 SESSIONS
═══════════════════════════════════════════════════════════════════════════

✅ Complete design system (components + tokens)
✅ Full authentication system
✅ Resume builder API (CRUD + variants + PDF export)
✅ Application tracker API (CRUD + contact logs + analytics)
✅ Interview prep API (study guides + flashcards + spaced repetition)
✅ 41 fully functional endpoints
✅ All endpoints protected and user-scoped
✅ Consistent error handling
✅ Production-ready backend

═══════════════════════════════════════════════════════════════════════════════

WEEKLY BREAKDOWN
═══════════════════════════════════════════════════════════════════════════

WEEK 1: Session 1 (Already done) ✅

WEEK 2: Sessions 2a + 2b
  - Design system package
  - Auth module with signup/login/refresh

WEEK 3: Session 3
  - Resume builder APIs
  - Application tracker APIs
  - PDF export queueing

WEEK 4: Session 4
  - Interview prep APIs
  - Spaced repetition algorithm
  - Progress tracking

WEEK 5+: Frontend UI
  - React components using design system
  - Pages and forms
  - API integration
  - Testing

WEEK 6+: Deployment
  - Vercel (frontend)
  - Railway (backend)
  - Neon (database)
  - Go live

═══════════════════════════════════════════════════════════════════════════════

MASTER REFERENCE
═══════════════════════════════════════════════════════════════════════════

📄 CLAUDE_CODE_SESSIONS_MASTER.md
   Complete overview of all 4 sessions
   Execution order
   Timeline
   API spec after all sessions
   Troubleshooting

═══════════════════════════════════════════════════════════════════════════════

NEXT STEP RIGHT NOW
═══════════════════════════════════════════════════════════════════════════

1. Open CLAUDE_CODE_SESSION_2A.md
2. Copy the entire content
3. Open Claude Code
4. Paste the content
5. Hit execute

That's it. The next 1.5 hours, Claude Code builds your design system.

═══════════════════════════════════════════════════════════════════════════════

YOU'RE COMPLETELY READY.

- ✅ Monorepo scaffold
- ✅ Database schema
- ✅ Seed data
- ✅ 4 detailed prompts
- ✅ Validation commands
- ✅ Commit messages
- ✅ Timeline

Start with Session 2a. Go. 🚀
```

INDEX.md 5,206 chars

```
# PathMerit Complete Build Package — Index

## 📋 Reading Order

1. **00_START_HERE.txt** — Start here. Complete overview.
2. **NEXT_STEPS.md** — Your immediate action plan (next 2 hours).
3. **CLAUDE_CODE_PROMPT.md** — Copy this into Claude Code for Session 1.
4. **BUILD_ROADMAP.html** — Visual timeline for all 4 weeks.
5. **BUILD_CHECKLIST.md** — Weekly checklist, validation steps, issue tracking.
6. **product_brief.html** — Full product spec (reference as needed).

---

## 📦 Files in This Folder

### Execution Documents
- **00_START_HERE.txt** (ASCII visual guide)
- **NEXT_STEPS.md** (Immediate action plan)
- **CLAUDE_CODE_PROMPT.md** (375 lines, ready to execute)
- **BUILD_ROADMAP.html** (4-week visual timeline)
- **BUILD_CHECKLIST.md** (Weekly checklist, 500+ lines)
- **INDEX.md** (This file)

### Product Specification
- **product_brief.html** (Complete feature spec, pricing, tech stack, 97 KB)

### Interview Prep Question Banks (813 total questions + narratives)
- **principal_interview_prep.html** (Master prep guide, 169 KB)
- **behavioral_narratives.html** (45 STAR-L stories, 87 KB)
- **nodejs_typescript_bank.html** (47 Qs, 78 KB)
- **go_bank.html** (53 Qs, 95 KB)
- **distributed_systems_bank.html** (48 Qs, 91 KB)
- **rails_bank.html** (41 Qs, 80 KB)
- **postgres_bank.html** (45 Qs, 87 KB)
- **aws_bank.html** (61 Qs, 119 KB)
- **react_bank.html** (53 Qs, 108 KB)
- **docker_bank.html** (52 Qs, 110 KB)
- **kubernetes_bank.html** (57 Qs, 102 KB)
- **gcp_bank.html** (51 Qs, 96 KB)
- **redis_bank.html** (50 Qs, 94 KB)

### UI Pattern Examples
- **prepos_dashboard.html** (Navigation pattern example, 50 KB)

---

## ⏱️ Timeline at a Glance

| Week | Claude Code | Deliverable | Your Time |
|------|-----------|-------------|-----------|
| 1 | Session 1: Scaffold | Monorepo, Postgres, schema, seed data | 30 mins validation |
| 2 | Sessions 2a, 2b: Design + Auth | Design system, auth endpoints | 1 hour validation |
| 3 | Session 3: Resume + App APIs | Full CRUD for both modules | 45 mins validation |
| 4 | Session 4: Interview Prep | Study guides, flashcards, SRS | 30 mins validation |
| 5+ | Sessions 5+: Frontend UI | React components, pages, integration | Build or manual |
| 6+ | Manual: Deploy | Vercel + Railway + Neon | Setup & launch |

---

## ✅ Success Checklist

- [ ] Read 00_START_HERE.txt completely
- [ ] Read NEXT_STEPS.md completely
- [ ] Export Claude Design system (get components, tokens, Tailwind config)
- [ ] Create GitHub repo `pathmerit`
- [ ] Get auth credentials (Google OAuth, Stripe test key, Resend key)
- [ ] Execute Claude Code Session 1
- [ ] Validate local environment works
- [ ] Commit to GitHub
- [ ] Continue with Sessions 2, 3, 4 following the BUILD_ROADMAP.html
- [ ] Build frontend UI (Claude Code or manual)
- [ ] Deploy to production

---

## 🎯 What You're Building

**PathMerit** — A complete career acceleration platform for software engineers.

### Core Features
1. **Interview Prep** — 813+ curated questions, study guides, spaced repetition flashcards
2. **Resume Builder** — ATS-native resume builder with 3 templates, variants, PDF/DOCX export
3. **Cover Letters** — Template-based cover letter generator with versioning
4. **Application Tracker** — Full pipeline management with contact logs and analytics
5. **ATS Intelligence** — Resume vs. JD scoring, ATS platform-specific simulation (Phase 2)
6. **AI Drill Mode** — Claude-powered answer evaluation and weak-area detection (Phase 2)

### Target Market
- Mid-career engineers (3–12 years experience) targeting Senior/Staff/Principal roles
- Junior engineers in first/second job search
- Engineers from non-US markets (exchange rate pricing)

### Pricing
- **Free**: $0 (genuine free tier, not crippled)
- **Pro**: $12/month or $99/year (with PPP discounts)
- **Team**: $8/seat/month (min 5 seats, for bootcamps/companies)

### Tech Stack
- Frontend: Next.js 14 + Vercel
- Backend: NestJS + Railway
- Database: Neon Postgres
- Design: Custom design system + Tailwind
- Auth: Better Auth + Google SSO
- Billing: Stripe
- Email: Resend
- Monitoring: Sentry

### Infrastructure Cost
~$5–15/month for PoC/MVP (zero fixed costs, pay-per-use).

---

## 🚀 Start Here

1. Open **00_START_HERE.txt**
2. Read it completely (5 minutes)
3. Follow the immediate action plan
4. Then read **NEXT_STEPS.md**
5. Then execute **CLAUDE_CODE_PROMPT.md** via Claude Code

---

## 📞 Questions?

- **What should I do right now?** → Read 00_START_HERE.txt
- **What's the timeline?** → See BUILD_ROADMAP.html
- **How do I validate my work?** → Check BUILD_CHECKLIST.md
- **What if something goes wrong?** → See the "Common Blockers" section in 00_START_HERE.txt
- **What's the product spec?** → See product_brief.html

---

## 🎉 You're Ready

You have:
- ✓ Complete product specification
- ✓ Lean tech stack (chosen, documented, locked in)
- ✓ Claude Code prompts (4 ready to execute)
- ✓ Weekly timeline and checklists
- ✓ 813 interview prep questions (intellectual assets)
- ✓ Design system integration strategy
- ✓ Deployment plan

Everything is specified. Everything is ready. The only thing between you and a working MVP is execution.

**Next action: Open 00_START_HERE.txt**

Good luck. 🚀
```

NEXT_STEPS.md 10,289 chars

```
# PathMerit: Your Complete Build Package

## What You Have

You now have **everything** needed to build PathMerit to MVP in 4 weeks using Claude Code. Here's what's in your `/mnt/user-data/outputs/` folder:

### 1. **product_brief.html** (92 KB)
The complete product conceptualization document. Contains:
- PathMerit positioning and market analysis
- Complete feature specification for all 6 modules
- Lean MVP tech stack (Railway + Neon + Postgres jobs)
- Pricing tiers with PPP support
- Full data models and database schema
- 5-phase build timeline
- Open questions to resolve

**Use it for:** Reference guide when Claude Code asks for clarification, product decisions, feature edge cases.

### 2. **CLAUDE_CODE_PROMPT.md** (375 lines)
The master scaffold prompt for your first Claude Code session. Specifies:
- Complete monorepo structure (Next.js + NestJS + shared packages)
- All dependencies and versions
- Database schema (15+ tables)
- Seed data (200+ technologies, 100+ institutions, 50+ roles)
- GitHub Actions CI pipeline
- Local development setup with Docker Compose

**Use it for:** Copy the entire content directly into Claude Code Terminal and execute. This is your foundation.

### 3. **BUILD_ROADMAP.html** (Interactive guide)
Week-by-week phased build plan with:
- Design system integration strategy (CVA + Tailwind tokens)
- 4 sequential Claude Code sessions (scaffold, design+auth, resume+app, prep)
- Specific prompts for each session
- Validation steps after each session
- Deployment strategy for Vercel + Railway + Neon
- Decision point: continue with Claude Code vs. manual React building

**Use it for:** Main reference for your build timeline. Follow the timeline, check off each Claude Code session as you complete them.

### 4. **BUILD_CHECKLIST.md** (501 lines)
Printable/digital checklist for tracking progress week-by-week:
- Pre-work checklist (design system export, GitHub setup)
- Per-session validation steps with curl commands
- Issue tracking (what went wrong, how you fixed it)
- Notes section for each week
- Final deployment checklist

**Use it for:** Print it out or keep it open. Check off items as you complete them. Track issues and blockers.

### 5. **Principal Interview Prep Materials** (10 banks)
- nodejs_typescript_bank.html (47 Qs)
- go_bank.html (53 Qs)
- distributed_systems_bank.html (48 Qs)
- rails_bank.html (41 Qs)
- postgres_bank.html (45 Qs)
- aws_bank.html (61 Qs)
- react_bank.html (53 Qs)
- docker_bank.html (52 Qs)
- kubernetes_bank.html (57 Qs)
- gcp_bank.html (51 Qs)
- redis_bank.html (50 Qs)
- behavioral_narratives.html (45 STAR-L stories)
- principal_interview_prep.html (master prep guide)

**Use it for:** The question bank content will be imported into the PathMerit platform as seed data. These are the assets that differentiate PathMerit from generic interview prep platforms.

### 6. **prepos_dashboard.html** (Navigation hub)
A product dashboard showing all prep resources in one place. This is a pattern you can adapt for PathMerit's UI later.

---

## Your Immediate Next Steps

### RIGHT NOW (Next 2 hours)

**1. Export your Claude Design system**
- Open Claude Design
- Export all components as .tsx files
- Save colors, typography, spacing as TypeScript constants
- Create a folder structure:
  ```
  /design-system-export/
    ├── /components (all .tsx files)
    ├── colors.ts
    ├── typography.ts
    ├── spacing.ts
    └── tailwind.config.ts
  ```
- Keep this folder accessible for Session 2

**2. Set up GitHub**
- Create a new GitHub repo: `pathmerit`
- Clone it locally: `git clone https://github.com/YOU/pathmerit.git`
- Create a basic README with:
  ```markdown
  # PathMerit

  The complete career platform for software engineers.
  Interview prep + resume building + application tracking + ATS intelligence.

  ## Tech Stack
  - Frontend: Next.js + Vercel
  - Backend: NestJS + Railway
  - Database: Neon Postgres
  - Design: Custom design system

  ## Local Development
  See CLAUDE_CODE_PROMPT.md for setup instructions.
  ```
- Commit and push

**3. Prepare GitHub Actions secrets**
In your GitHub repo settings → Secrets and variables → Actions:
- Add secrets (leave values blank for now, fill in later):
  - GOOGLE_CLIENT_ID
  - GOOGLE_CLIENT_SECRET
  - JWT_SECRET (value: `openssl rand -base64 32`)
  - STRIPE_SECRET_KEY
  - RESEND_API_KEY

### THEN (Next 3-4 hours)

**4. Execute Claude Code Session 1: Monorepo Scaffold**

Open Claude Code (Terminal or VS Code extension):
- Copy the entire content of `CLAUDE_CODE_PROMPT.md`
- Paste it into Claude Code
- Add this instruction: "Execute this scaffold for PathMerit. Build the complete monorepo structure, install all dependencies, create the database schema with all tables, seed with lookups data, and verify a working local dev environment with both Next.js and NestJS running."
- Let it run (expect 2.5–3 hours)

While Claude Code is working:
- Read through the product brief again
- Think about any product questions or clarifications you need
- Prepare the design system export files (you'll need them for Session 2)

**5. Validate the scaffold**

After Claude Code completes:
```bash
cd pathmerit
pnpm install          # Should finish without errors
docker-compose up -d  # Postgres should start
cd apps/api
pnpm drizzle:migrate  # Migrations should run
pnpm db:seed          # Seed data should load
cd ../..
pnpm dev              # Both frontend + backend should start
```

Check:
- [ ] Next.js runs on http://localhost:3000
- [ ] NestJS runs on http://localhost:3001
- [ ] GET http://localhost:3001/health returns 200
- [ ] Database has data: `SELECT COUNT(*) FROM technologies;` should return ~200

**6. First Git commit**
```bash
git add .
git commit -m "feat: monorepo scaffold with database and seed data"
git push origin main
```

---

## What Happens After Week 1

Once the scaffold is validated, you have a solid foundation. Then:

**Week 2:** Claude Code Session 2 (Design System + Auth)
- Integrate your design system into the monorepo
- Build auth module with Better Auth + Google SSO

**Week 3:** Claude Code Session 3 (Core APIs)
- Resume builder CRUD
- Application tracker CRUD

**Week 4:** Claude Code Session 4 (Interview Prep)
- Questions and study guides
- Spaced repetition flashcard algorithm

**After Week 4:** Build frontend UI (either with Claude Code or manually)

**Week 6+:** Deploy to Vercel + Railway + Neon

---

## Critical Success Factors

1. **Follow the timeline strictly.** Each session builds on the previous. Don't skip steps.
2. **Validate after each session.** Test the endpoints with curl before moving on.
3. **Commit frequently.** After each successful validation, commit to GitHub.
4. **Keep the design system central.** All UI components should use the design system + Tailwind tokens.
5. **Use the checklist.** Don't rely on memory. Check off items as you complete them.

---

## Common Pitfalls to Avoid

- **Don't modify the scaffold after Claude Code completes it.** If something doesn't work, ask Claude Code to fix it, don't patch it manually.
- **Don't skip validation.** Each validation step catches issues early. Skipping them compounds problems.
- **Don't change tech decisions mid-build.** You've chosen Railway + Neon + Postgres jobs. Stick with it for PoC/MVP.
- **Don't add features beyond the MVP scope.** ATS intelligence, AI Drill Mode, cover letters, Team tier — all Phase 2. Focus on core for now.
- **Don't deploy to production until Week 5.** Get the MVP working locally first, then deploy.

---

## Questions? Decisions to Make?

### Before you start Claude Code Session 1, resolve:

1. **Google OAuth setup** — Do you have Google Cloud project credentials? If not, create one at console.cloud.google.com.
   - [ ] GOOGLE_CLIENT_ID obtained
   - [ ] GOOGLE_CLIENT_SECRET obtained

2. **Stripe test account** — Do you have a Stripe test account for payments testing?
   - [ ] STRIPE_SECRET_KEY obtained

3. **Resend API key** — Do you have Resend (email service) set up?
   - [ ] RESEND_API_KEY obtained

4. **Design system exported** — Have you exported all components from Claude Design?
   - [ ] Components in .tsx format
   - [ ] Design tokens extracted
   - [ ] Tailwind config ready

5. **GitHub setup complete** — Is the repo created and secrets configured?
   - [ ] GitHub repo created
   - [ ] Initial commit with README
   - [ ] Secrets added to GitHub Actions

If you can't answer "yes" to all of these before starting, you'll hit blockers in Claude Code. Resolve them first.

---

## Success Definition

**You'll know you're on track when:**

- ✅ Local dev environment runs without errors (Postgres, Next.js, NestJS all healthy)
- ✅ Can test auth endpoints with curl (signup, login, token refresh all work)
- ✅ Database has seed data (200+ technologies, 100+ institutions, 50+ roles)
- ✅ Design system is integrated and components render in Next.js
- ✅ Resume builder APIs respond (create, list, update, delete all work)
- ✅ Application tracker APIs respond (full CRUD works)
- ✅ Interview prep APIs respond (study guides, flashcards, spaced rep works)
- ✅ All tests pass in CI
- ✅ Ready to build frontend UI

---

## Timeline Summary

| Week | Task | Claude Code Sessions | Deliverable |
|------|------|-------------------|-------------|
| **1** | Foundation | Session 1: Scaffold | Working monorepo, Postgres, schema, seed data |
| **2** | Design + Auth | Sessions 2a, 2b: Design system + Auth | Design system package, auth endpoints |
| **3** | Core APIs | Session 3: Resume + App | Full CRUD for resumes and applications |
| **4** | Interview Prep | Session 4: Prep module | Study guides, flashcards, spaced rep |
| **5** | Frontend UI | Sessions 5+: React components | UI layer for all features |
| **6** | Deployment | Manual: Vercel + Railway + Neon | Production-ready platform |

---

## Final Words

You have everything you need. The product is well-defined. The tech stack is lean and practical. The Claude Code prompts are specific. The timeline is realistic. The only thing left is execution.

**Start with the design system export and GitHub setup. Then run Claude Code Session 1. Everything else follows from there.**

Good luck. You've got this. 🚀

---

**Next action:** Export your Claude Design system. Expected time: 30 minutes.
```

00_START_HERE.txt 8,097 chars

```
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                    🚀 PATHMERIT: COMPLETE BUILD PACKAGE                   ║
║                                                                            ║
║                      You're ready to build to MVP in 4 weeks              ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝

📦 WHAT'S IN YOUR OUTPUTS FOLDER
═══════════════════════════════════════════════════════════════════════════

📋 EXECUTION DOCUMENTS (Read in this order)

  1. NEXT_STEPS.md
     ↳ READ THIS FIRST. Your immediate action plan.
     ↳ What to do right now, before Claude Code.
     ↳ Success criteria and common pitfalls.

  2. CLAUDE_CODE_PROMPT.md
     ↳ Copy this entirely into Claude Code.
     ↳ Generates your complete monorepo scaffold.
     ↳ Detailed, step-by-step instructions.

  3. BUILD_ROADMAP.html
     ↳ Visual 4-week timeline with 4 Claude Code sessions.
     ↳ Design system integration strategy.
     ↳ Week-by-week deliverables.
     ↳ Deployment plan.

  4. BUILD_CHECKLIST.md
     ↳ Printable weekly checklist.
     ↳ Validation steps with curl commands.
     ↳ Issue tracking and notes sections.
     ↳ Print this or keep it open during build.

───────────────────────────────────────────────────────────────────────────

📚 REFERENCE DOCUMENTS (As-needed reference)

  5. product_brief.html
     ↳ Complete product specification.
     ↳ Feature specs, pricing, tech stack.
     ↳ Reference when Claude Code needs clarification.

  6. Interview Prep Question Banks (10 files, 813 total questions)
     ├── nodejs_typescript_bank.html (47 questions)
     ├── go_bank.html (53 questions)
     ├── distributed_systems_bank.html (48 questions)
     ├── rails_bank.html (41 questions)
     ├── postgres_bank.html (45 questions)
     ├── aws_bank.html (61 questions)
     ├── react_bank.html (53 questions)
     ├── docker_bank.html (52 questions)
     ├── kubernetes_bank.html (57 questions)
     ├── gcp_bank.html (51 questions)
     ├── redis_bank.html (50 questions)
     ├── behavioral_narratives.html (45 STAR-L stories)
     └── principal_interview_prep.html (master guide)

     These are the intellectual assets for PathMerit. They'll be imported
     as seed data into the platform during the build.

  7. prepos_dashboard.html
     ↳ Example dashboard UI pattern you can adapt.

───────────────────────────────────────────────────────────────────────────

🎯 IMMEDIATE ACTION PLAN (Next 2 hours)
═══════════════════════════════════════════════════════════════════════════

RIGHT NOW:

  1. Read NEXT_STEPS.md completely.
     ↳ 10 minutes. This is your immediate roadmap.

  2. Export your Claude Design system.
     ↳ 30 minutes. Get all components, tokens, Tailwind config ready.

  3. Create GitHub repo.
     ↳ 15 minutes. pathmerit repo, add README, add secrets.

  4. Prepare authentication credentials.
     ↳ 15 minutes. Get Google OAuth, Stripe test key, Resend key.

  5. Review CLAUDE_CODE_PROMPT.md.
     ↳ 10 minutes. Understand what you're about to execute.

THEN: Execute Claude Code Session 1 (2.5–3 hours of Claude Code work)
      Copy CLAUDE_CODE_PROMPT.md into Claude Code and run it.

───────────────────────────────────────────────────────────────────────────

📊 WEEKLY BREAKDOWN
═══════════════════════════════════════════════════════════════════════════

WEEK 1: Foundation
  Claude Code: Scaffold (monorepo, database, seed data)
  You: Design system export, GitHub setup, validation

WEEK 2: Design + Auth
  Claude Code: Design system package + auth module (2 sessions)
  You: Validate, commit, integrate design system

WEEK 3: Core APIs
  Claude Code: Resume builder + application tracker APIs
  You: Test endpoints, validate CRUD operations

WEEK 4: Interview Prep
  Claude Code: Interview prep module with spaced repetition
  You: Validate flashcard algorithm, test SRS scheduling

AFTER WEEK 4: Frontend UI (Claude Code Sessions 5+ or manual React)

AFTER WEEK 5: Deploy to production (Vercel + Railway + Neon)

───────────────────────────────────────────────────────────────────────────

✅ SUCCESS CRITERIA
═══════════════════════════════════════════════════════════════════════════

You'll know you're on track when:

  ✓ Local dev runs without errors (Postgres, Next.js, NestJS healthy)
  ✓ Can test auth with curl (signup, login, token refresh work)
  ✓ Database has seed data (200+ technologies, 100+ institutions)
  ✓ Design system integrated (components render in Next.js)
  ✓ Resume builder APIs respond (create, list, update, delete)
  ✓ Application tracker APIs respond (full CRUD works)
  ✓ Interview prep APIs respond (study guides, flashcards work)
  ✓ All tests pass in CI
  ✓ Ready to build frontend UI

───────────────────────────────────────────────────────────────────────────

⚡ KEY PRINCIPLES
═══════════════════════════════════════════════════════════════════════════

1. FOLLOW THE TIMELINE STRICTLY
   Each session builds on the previous. Don't skip steps.

2. VALIDATE AFTER EVERY SESSION
   Test with curl before moving on. Catch issues early.

3. COMMIT FREQUENTLY
   After each successful validation, commit to GitHub.

4. USE THE CHECKLIST
   Print BUILD_CHECKLIST.md or keep it open. Check off items.

5. KEEP DESIGN SYSTEM CENTRAL
   All UI components must use the design system + Tailwind.

6. STICK TO MVP SCOPE
   No ATS intelligence, AI Drill Mode, cover letters in Week 1.
   Those are Phase 2. Focus on core.

7. DON'T MODIFY THE SCAFFOLD
   If something doesn't work, ask Claude Code to fix it.
   Don't patch it manually.

───────────────────────────────────────────────────────────────────────────

🚦 COMMON BLOCKERS & SOLUTIONS
═══════════════════════════════════════════════════════════════════════════

"What if Claude Code times out?"
→ Break the prompt into smaller sessions. Each session is modular.

"What if Postgres won't start?"
→ Check Docker is running. Check port 5432 is free.
  `docker-compose up -d` should work. See BUILD_CHECKLIST.md.

"What if I don't have Google OAuth set up?"
→ Do it now before Session 1. Create a Google Cloud project.
  See NEXT_STEPS.md for the exact steps.

"What if design system doesn't integrate?"
→ Session 2a is specifically for this. Don't skip it.
  Use CVA + Tailwind tokens as the pattern.

"What if I need to change something mid-build?"
→ Document it. Commit it. Move forward.
  You can iterate later. MVP first.

───────────────────────────────────────────────────────────────────────────

📞 SUPPORT
═══════════════════════════════════════════════════════════════════════════

Questions during the build?
  → Check the BUILD_ROADMAP.html for that week's context
  → Check the BUILD_CHECKLIST.md for validation steps
  → Review the product_brief.html for feature clarification
  → Ask Claude Code directly (it has full context)

Stuck on a technical problem?
  → Add to your notes in BUILD_CHECKLIST.md
  → Describe it to Claude Code in the next session
  → Claude Code can often fix issues by re-executing parts

───────────────────────────────────────────────────────────────────────────

🎉 YOU'RE READY
═══════════════════════════════════════════════════════════════════════════

You have:
  ✓ Complete product specification
  ✓ Detailed tech stack and architecture
  ✓ Claude Code prompts ready to execute
  ✓ Week-by-week build timeline
  ✓ 813 interview prep questions
  ✓ Design system (from Claude Design)
  ✓ Validation checklists for every step

Everything is in place.

The only thing between you and a working MVP is execution.

START HERE: Read NEXT_STEPS.md (10 minutes)

Then: Export your design system (30 minutes)

Then: Set up GitHub (15 minutes)

Then: Run Claude Code Session 1 (3 hours)

You can do this. 🚀

───────────────────────────────────────────────────────────────────────────

Questions before you start? Review NEXT_STEPS.md.

Ready to go? → Open NEXT_STEPS.md now.
```

path-merit-chat-history.pdf — extracted text from PDF 42 chars

```
[PDF text unavailable in extraction cache]
```

path-merit-product-chatgpt.pdf — extracted text from PDF 42 chars

```
[PDF text unavailable in extraction cache]
```
