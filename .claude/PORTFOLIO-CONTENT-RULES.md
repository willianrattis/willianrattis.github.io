# Portfolio content rules

Every content change to this site must follow these rules. They are hard constraints,
not preferences.

## Confidentiality — absolute

This is a public website about work done for a private employer. Violating these
causes real professional harm.

- Never describe how anything was implemented. No HTTP status codes, no middleware or
  filter mechanics, no request or response flows, no header names, no signing or
  encryption schemes, no caching strategies, no data model details, no internal
  service, repository, endpoint or database names, no sequence of calls between
  systems.
- Never disclose internal business or operational data. No traffic or throughput
  figures, no request-per-minute targets, no latency numbers, no revenue or loss
  figures, no headcount or hiring counts, no budget constraints.
- Never name third-party partners or vendors, and never describe the nature of any
  defect found in a partner integration.
  Exception: clients and brands from employment before 2021 may be named. That rule
  exists to protect current partner integrations, not to erase a public work history.
  Naming past agency or consultancy clients is standard portfolio practice and these are
  already public on the LinkedIn profile. The rule remains absolute for anything at
  Casas Bahia.
- Never describe internal organizational matters. No friction between teams, no
  consultancy arrivals or departures, no reorganizations, no individual colleagues, no
  legal or compliance situations, no security findings or pentest results.
- No business or operational metric may appear: no traffic or throughput figures, no
  request-per-minute targets, no latency numbers, no revenue or loss figures, no
  headcount or hiring counts, no budget constraints. The single exception is the 86%
  security technical debt reduction. Dates, technology version numbers and years of
  experience are not metrics and are expected to appear.

If a statement seems like it would be stronger with more specifics, stop and ask.
Never decide independently that a detail is safe to publish.

## Tone

- Professional and measured. Cordial, not casual.
- No slang, no conversational filler, no exclamation marks, no "let's chat" or "hit me
  up" style calls to action. An invitation to connect should read like a professional
  inviting a professional.
- Describe the problem and the outcome, never the mechanism.
- No superlatives about the subject. Never "expert", "guru", "passionate", "ninja",
  "rockstar", "results-driven", "proven track record".
- Plain, direct sentences. Avoid em-dash asides and "not X, but Y" constructions.
- Let the work carry the weight. Do not add adjectives to make it sound impressive.

## Facts — source of truth

Where the site contradicts anything here, the site is wrong.

### Identity
- Name: Willian Santa Rosa Rattis
- Positioning: Tech Lead · Senior Software Engineer · Solutions Architecture
- Location: Presidente Venceslau, São Paulo, Brazil. Works remotely.
- Email: willian.rattis@gmail.com (personal only)
- LinkedIn: linkedin.com/in/willianrattis
- GitHub: github.com/willianrattis
- 13 years as a software engineer, starting in 2012

### Casas Bahia Tecnologia — since August 2021
Joined August 2021 through Stefanini Brasil, hired directly December 2022. Present the
whole period as continuous work for the same company, never as a job change.

- Aug 2021 to Dec 2024 — Senior Software Engineer, storefront squad. Homepage and
  product detail page, integrating catalog, pricing, recommendation and advertising for
  the iOS and Android apps.
- Dec 2024 to Aug 2026 — Software Engineer Specialist and Tech Lead, onboarding squad.
  Login, sign-up and account management journeys for the Casas Bahia, Extra and
  Pontofrio brands. Six-person cross-functional team: .NET backend, iOS, Android, React
  and QA.
- Since Aug 2026 — Software Engineer Specialist, SalesAgent, a generative AI agent for
  assisted sales over WhatsApp. Senior backend development and solutions architecture.

### Earlier roles
- Mouts TI, Senior Software Engineer, Jan 2020 to Jun 2021
- CESTech, Senior Software Engineer, Nov 2018 to Jun 2019
- Agência Rock, Mid-level Developer, Jul 2017 to Nov 2018
- GS Retail, Mid-level Developer, Nov 2015 to Jul 2017
- Kemek Soluções em TI, Junior Developer, Jan 2014 to Oct 2015
- Grupo SHC, Junior Developer, Mar 2013 to Nov 2013
- Grupo Print Laser, Developer Analyst, 2012 to 2013

### Education
- Associate Degree in Systems Analysis and Development, FATEC-SP, 2015 to 2018
- List no postgraduate degree. A FIAP specialization was started but not completed and
  must not appear anywhere on the site.

### Skills — describe him with these, and only these
- Languages and frameworks: C#, .NET 8/9/10, ASP.NET Core, Python, SQL, JavaScript
- Architecture: microservices, event-driven architecture, Clean Architecture, DDD,
  CQRS, SOLID, API Gateway (Kong), BFF, mTLS, design patterns
- Generative AI: Pydantic AI, Azure OpenAI, agent orchestration, prompt chaining, RAG,
  pgvector
- Cloud and infrastructure: Azure, AKS, Kubernetes, Docker, Helm, GitHub Actions,
  Spinnaker, XLRelease, CDN
- Data and messaging: Apache Kafka, SQL Server, PostgreSQL, MongoDB, Redis, Dapper,
  Entity Framework Core
- Security: authentication and authorization, MFA, JWT, secret management, fraud
  prevention integration
- Quality and observability: regression and contract testing, TDD, xUnit, Moq,
  WireMock, Postman/Newman, SonarQube, load testing, Dynatrace, Grafana,
  Elasticsearch, Kibana
- Leadership: technical hiring, people development, quarterly roadmap, cross-squad and
  stakeholder alignment, agile methodologies

### Never present as his skills
- Angular, or any other frontend framework. He does not do frontend development.
- Node.js.
- Windows Forms or PHP, except strictly inside a dated historical job entry.
- Go, unless explicitly framed as something he is currently studying. Never as a skill
  he already has.
- Any corporate email address, in particular anything at viavarejo.com.br or
  casasbahia.com.br.
- Any stale "currently learning" claim, such as cloud computing or serverless.

### Highlighted work — use these descriptions as written
Do not expand, elaborate or add technical detail to any of them.

1. Centralized two-step verification (onboarding squad). Architected moving two-step
   verification to a single control point, replacing an approach that was replicated per
   journey and per channel. The initiative reduced fraud, account takeover and
   chargebacks.
2. Incident response without manual intervention (onboarding squad). Conceived the
   solution that replaced a manual contingency process, with access control and change
   history. Incident response time went from over an hour to seconds.
3. Regression and contract testing as a company standard (storefront squad). Introduced
   regression and contract testing into the CI/CD pipeline, running on every change to
   prevent new releases from breaking existing functionality or API contracts. It grew
   out of an investigation into inconsistencies in a third-party integration, was proven
   on the mobile BFFs and, implemented together with the pipeline team, became a
   company-wide standard: it joined the engineering maturity metric and became a gate
   for daytime deployments.
4. Single pricing source across the customer journey (storefront squad). Proposed and
   led the reorganization of catalog and pricing APIs, establishing a single pricing
   source. This eliminated price discrepancies between ad, storefront and product page
   that drove customer complaints and brand damage.
5. WhatsApp channel authentication (SalesAgent). Designed and implemented the
   authentication model for the channel, unblocking every journey that depends on login,
   including checkout and marketplace product sales. Took on the effort because of his
   knowledge of the company's authentication product, solving it end to end in Python
   and C#.
6. Fraud-prevention integration (onboarding squad). Structured the integration between
   sign-up and authentication journeys and the fraud-prevention platform, feeding the
   risk engine with real-time signals for its decisions.
7. Stack modernization and engineering quality (onboarding squad). Kept the stack
   current through .NET 10, standardized dependency management across projects and
   sustained an A rating on static analysis. Reduced the squad's security technical debt
   by 86% in one semester. In the last semester, the squad recorded the highest
   production deployment volume with the fewest incidents.

## Working rules

- Make the minimum change necessary. Small, surgical, additive edits. Never reformat or
  restructure a file you are otherwise not changing.
- Never change the visual design, layout, color scheme, framework or build setup unless
  explicitly asked. These are content tasks.
- Never invent a fact, date, metric, job title, technology or project. If something is
  required and unavailable, ask.
- Show a diff before committing. Never push to the remote without approval.
- If the site has a build step, run it and confirm it still succeeds.
