<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signal Steward | Research Project</title>
    <meta
      name="description"
      content="Signal Steward is a research project that turns three CSCW papers into one live classroom system about signal, coordination, and social ties."
    />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="landing-body">
    <div class="ambient ambient-a"></div>
    <div class="ambient ambient-b"></div>
    <div class="ambient ambient-c"></div>

    <main class="page-shell">
      <header class="hero-card panel interactive-tilt" data-cursor="hero">
        <div class="hero-copy">
          <p class="eyebrow">Research project</p>
          <h1>Signal Steward</h1>
          <p class="hero-tag">From three CSCW papers to one live classroom system.</p>
          <p class="hero-text">
            This project came out of a simple question: if one paper is about what makes a public update useful,
            another is about how crowds keep shared knowledge good, and a third is about how ties carry reach,
            trust, and support, can those ideas become one activity people can actually use?
          </p>
          <p class="hero-text">
            Signal Steward is my answer. Everyone in class joins as a participant. I am the only facilitator.
            The system turns three short responses into a visible stance card, a live wall, and two balanced debate teams.
          </p>

          <div class="hero-chips">
            <span class="chip chip-signal">Signal</span>
            <span class="chip chip-edit">Edit</span>
            <span class="chip chip-support">Support</span>
            <span class="chip chip-live">Live classroom system</span>
          </div>

          <div class="hero-actions">
            <a class="primary-link-card" data-cursor="signal" href="https://signalsteward.pages.dev/" target="_blank" rel="noreferrer">
              <span class="link-kicker">Whole class</span>
              <strong>Open participant view</strong>
              <span>The page everyone joins during the activity.</span>
            </a>
            <a class="secondary-link-card" data-cursor="edit" href="https://signalsteward.pages.dev/facilitator" target="_blank" rel="noreferrer">
              <span class="link-kicker">Instructor only</span>
              <strong>Open facilitator console</strong>
              <span>The page I use to refresh, build teams, and run the debate.</span>
            </a>
          </div>

          <p class="project-credit">
            Inspired by Prof. Yubo Kou | Developed by Ishan Shivansh Bangroo | Contributor: Nicole Leon
          </p>
        </div>

        <aside class="hero-side">
          <div class="hero-orbit" aria-hidden="true">
            <span class="orbit orbit-one"></span>
            <span class="orbit orbit-two"></span>
            <span class="orbit orbit-three"></span>
            <span class="hero-node node-a"></span>
            <span class="hero-node node-b"></span>
            <span class="hero-node node-c"></span>
            <span class="hero-node node-d"></span>
          </div>
          <div class="hero-note panel-inset">
            <p class="hero-note-kicker">What this page gives you</p>
            <ul class="clean-list">
              <li>The three papers in plain English</li>
              <li>Why they matter for this system</li>
              <li>How the classroom flow works</li>
              <li>Direct links to the live participant and facilitator views</li>
            </ul>
          </div>
        </aside>
      </header>

      <section class="panel intro-card interactive-tilt" data-cursor="hero">
        <div class="section-head">
          <h2>What this project is really doing</h2>
          <span class="section-pill">Plain English</span>
        </div>
        <p>
          The point here is not just to summarize papers. The point is to make people act on them. A participant has to
          decide what a useful update looks like, how a shared page stays reliable, and which ties they would activate first.
          After that, the system turns those choices into a visible stance and a debate setup. So the reading becomes a live,
          social decision instead of a slide summary.
        </p>
      </section>

      <section class="paper-section">
        <div class="section-head">
          <h2>The three papers behind Signal Steward</h2>
          <span class="section-pill">Research grounding</span>
        </div>

        <div class="paper-grid">
          <article class="paper-card panel interactive-tilt signal-card" data-cursor="signal">
            <div class="paper-visual signal-visual" aria-hidden="true">
              <svg viewBox="0 0 240 140" role="img" aria-label="">
                <defs>
                  <linearGradient id="sigGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#63d6ff" />
                    <stop offset="100%" stop-color="#2b7fff" />
                  </linearGradient>
                </defs>
                <path d="M18 92c18-14 34-22 49-24 16-2 26 5 38 5 17 0 30-17 48-17 23 0 35 26 69 25" fill="none" stroke="url(#sigGrad)" stroke-width="4" stroke-linecap="round"/>
                <circle cx="38" cy="88" r="7" fill="#63d6ff" />
                <circle cx="92" cy="72" r="7" fill="#89e2ff" />
                <circle cx="147" cy="57" r="7" fill="#b1f0ff" />
                <circle cx="205" cy="82" r="7" fill="#63d6ff" />
                <rect x="154" y="16" width="55" height="22" rx="11" fill="rgba(99,214,255,.18)" stroke="rgba(99,214,255,.38)" />
                <text x="181.5" y="31" text-anchor="middle" fill="#dff7ff" font-size="11" font-family="Inter, Arial, sans-serif">where / what / now</text>
              </svg>
            </div>
            <div class="paper-body">
              <p class="paper-kicker">Paper 1 · Signal</p>
              <h3>Microblogging During Two Natural Hazards Events</h3>
              <p class="paper-authors">Vieweg, Hughes, Starbird, and Palen</p>
              <p>
                This paper looks at Twitter during floods and grassfires. Its core point is that the useful posts are not
                just fast. They are specific enough to help other people build situational awareness: where something is,
                what changed, what danger is present, and what people should do next.
              </p>
              <p class="paper-why">
                In Signal Steward, that becomes the first move. Participants have to write the kind of public update that
                would actually help another person.
              </p>
              <a class="paper-link" href="https://doi.org/10.1145/1753326.1753486" target="_blank" rel="noreferrer">Read the paper</a>
            </div>
          </article>

          <article class="paper-card panel interactive-tilt edit-card" data-cursor="edit">
            <div class="paper-visual edit-visual" aria-hidden="true">
              <svg viewBox="0 0 240 140" role="img" aria-label="">
                <rect x="26" y="24" width="64" height="88" rx="12" fill="rgba(255,190,92,.18)" stroke="rgba(255,190,92,.34)" />
                <rect x="98" y="16" width="64" height="96" rx="12" fill="rgba(255,136,61,.18)" stroke="rgba(255,136,61,.34)" />
                <rect x="170" y="30" width="44" height="82" rx="12" fill="rgba(255,215,136,.16)" stroke="rgba(255,215,136,.32)" />
                <path d="M41 51h34M41 67h25M113 43h34M113 59h30M113 75h20M182 55h20M182 71h16" stroke="#ffe9c4" stroke-width="4" stroke-linecap="round"/>
                <circle cx="194" cy="24" r="12" fill="#ffbe5c" />
                <path d="M194 17v14M187 24h14" stroke="#2d1b00" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="paper-body">
              <p class="paper-kicker">Paper 2 · Edit</p>
              <h3>Harnessing the Wisdom of Crowds in Wikipedia</h3>
              <p class="paper-authors">Kittur and Kraut</p>
              <p>
                This paper argues that more contributors do not automatically make a shared page better. Quality improves
                when coordination is present. A crowd helps when the work is structured, responsibilities are clearer, and
                editing does not collapse into noise.
              </p>
              <p class="paper-why">
                In Signal Steward, that becomes the second move. Participants have to explain how a shared page should be
                organized so openness still leads to quality.
              </p>
              <a class="paper-link" href="https://doi.org/10.1145/1460563.1460572" target="_blank" rel="noreferrer">Read the paper</a>
            </div>
          </article>

          <article class="paper-card panel interactive-tilt support-card" data-cursor="support">
            <div class="paper-visual support-visual" aria-hidden="true">
              <svg viewBox="0 0 240 140" role="img" aria-label="">
                <defs>
                  <linearGradient id="supGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ff8ac8" />
                    <stop offset="100%" stop-color="#b388ff" />
                  </linearGradient>
                </defs>
                <circle cx="48" cy="74" r="14" fill="url(#supGrad)" />
                <circle cx="112" cy="40" r="11" fill="#ffb0db" />
                <circle cx="112" cy="104" r="11" fill="#d3a4ff" />
                <circle cx="182" cy="72" r="15" fill="#c38cff" />
                <circle cx="208" cy="30" r="9" fill="#ff8ac8" />
                <circle cx="210" cy="114" r="9" fill="#b388ff" />
                <path d="M60 68 102 46M60 80 102 98M123 43 167 67M123 101 167 77M191 62 203 38M193 83 203 107" stroke="rgba(238,225,255,.82)" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="paper-body">
              <p class="paper-kicker">Paper 3 · Support</p>
              <h3>The Benefits of Facebook “Friends”</h3>
              <p class="paper-authors">Ellison, Steinfield, and Lampe</p>
              <p>
                This paper shows that online ties do different jobs. Bridging ties bring reach and new perspectives,
                bonding ties bring trust and support, and maintained ties help people stay connected across life changes.
                The strongest pattern in the study is around bridging social capital.
              </p>
              <p class="paper-why">
                In Signal Steward, that becomes the third move. Participants decide which ties they would activate first
                and what should stay public or remain bounded to smaller trusted groups.
              </p>
              <a class="paper-link" href="https://doi.org/10.1111/j.1083-6101.2007.00367.x" target="_blank" rel="noreferrer">Read the paper</a>
            </div>
          </article>
        </div>
      </section>

      <section class="panel process-card interactive-tilt" data-cursor="hero">
        <div class="section-head">
          <h2>How the activity is inspired by the papers</h2>
          <span class="section-pill">From reading to action</span>
        </div>

        <div class="process-grid">
          <article class="process-step signal-step">
            <span class="step-index">01</span>
            <h3>Signal</h3>
            <p>
              Participants write the first public update. The system is looking at whether the response gives concrete,
              useful signal rather than vague commentary.
            </p>
          </article>
          <article class="process-step edit-step">
            <span class="step-index">02</span>
            <h3>Edit</h3>
            <p>
              Participants explain how a shared page should work when many people want to contribute. This is where
              coordination, structure, and stewardship come in.
            </p>
          </article>
          <article class="process-step support-step">
            <span class="step-index">03</span>
            <h3>Support</h3>
            <p>
              Participants decide which ties to activate first and how visible information should be. This is where reach,
              trust, and bounded sharing start to pull against each other.
            </p>
          </article>
          <article class="process-step debate-step">
            <span class="step-index">04</span>
            <h3>Debate</h3>
            <p>
              The system turns those choices into stance cards and balanced teams, then surfaces the bigger question:
              when should a system favor openness, and when should it favor tighter coordination and selective visibility?
            </p>
          </article>
        </div>
      </section>

      <section class="live-views">
        <div class="section-head">
          <h2>Live views</h2>
          <span class="section-pill">What people actually use</span>
        </div>

        <div class="view-grid">
          <article class="view-card panel interactive-tilt" data-cursor="signal">
            <div class="image-frame shot-preview participant-shot" role="img" aria-label="Signal Steward participant view screenshot"></div>
            <div class="view-copy">
              <p class="view-kicker">Participant view</p>
              <h3>The page the whole class joins</h3>
              <p>
                A participant enters their name, answers three prompts, gets a stance number, and sees a short public card.
                This is the page everyone opens during the activity.
              </p>
              <a class="launch-button primary-launch" href="https://signalsteward.pages.dev/" target="_blank" rel="noreferrer">Launch participant view</a>
            </div>
          </article>

          <article class="view-card panel interactive-tilt" data-cursor="edit">
            <div class="image-frame shot-preview facilitator-shot" role="img" aria-label="Signal Steward facilitator console screenshot"></div>
            <div class="view-copy">
              <p class="view-kicker">Facilitator console</p>
              <h3>The page I use in the room</h3>
              <p>
                This console lets me refresh the session, read the live wall, build balanced teams, and guide the final
                debate. It is meant for one facilitator, not for the full class.
              </p>
              <a class="launch-button secondary-launch" href="https://signalsteward.pages.dev/facilitator" target="_blank" rel="noreferrer">Launch facilitator console</a>
            </div>
          </article>
        </div>
      </section>

    </main>

    <script type="module" src="landing.js"></script>
  </body>
</html>
