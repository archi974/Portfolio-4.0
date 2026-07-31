import type { CaseStudy } from "@/types/project";

export const eventoriasCase: CaseStudy = {
  overview: [
    { label: "Role", value: "UX Research, UI Design, Prototyping" },
    { label: "Timeline", value: "10 weeks, 2024" },
    { label: "Team", value: "Me, one developer, one founder" },
    { label: "Platform", value: "iOS & Android" },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      body: [
        "Eventorias is a small event discovery app for people who moved to a new city and want to find things to do that are actually near them. The founder had a working no-code prototype and around two hundred beta users, but retention after the first week was low.",
        "I joined for a discovery and redesign cycle before the team committed to a native build.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      body: [
        "The app showed everything happening in a 40 km radius, sorted by date. Users opened it, scrolled a long undifferentiated list, and closed it. The founder read this as a content problem; the analytics suggested a filtering and trust problem instead.",
      ],
    },
    {
      id: "role",
      title: "My role",
      body: [
        "I owned research, information architecture, UI design and the interactive prototype. The developer and I paired on the component structure so the design system could be implemented directly.",
      ],
    },
    {
      id: "research",
      title: "Research",
      body: [
        "Nine interviews with beta users, a two-week diary study with four of them, and a competitive review of five event apps. I also read three months of support messages.",
      ],
      list: [
        "9 semi-structured interviews (45 min)",
        "Diary study, 4 participants, 14 days",
        "Benchmark of 5 comparable products",
        "Analysis of 130 support messages",
      ],
    },
    {
      id: "insights",
      title: "Insights",
      body: [
        "Three findings changed the direction of the project:",
      ],
      list: [
        "People decide by mood and moment (\"tonight, nearby, cheap\"), not by category.",
        "Distance mattered more than any other filter — anything above 20 minutes travel was mentally discarded.",
        "Without a photo and a named organiser, an event was assumed to be low quality and skipped.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "I reframed the home screen around three intent-based entries — Tonight, This weekend, Near me — and moved the chronological list one level down. Two rounds of wireframes, then a mid-fidelity prototype tested with six people.",
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes & iterations",
      body: [
        "The first version used a map as the default view. Testing showed people found it heavy and hard to scan on the move, so the map became a toggle instead of the entry point.",
        "The second iteration introduced a compact event card carrying photo, organiser, distance and price — the four attributes people used to decide.",
      ],
    },
    {
      id: "design-system",
      title: "Design system",
      body: [
        "A small system: 4 type sizes, an 8 pt spacing scale, two card densities and a documented set of states. Every color pair was checked for WCAG AA before it entered the library.",
      ],
    },
    {
      id: "solution",
      title: "Final solution",
      body: [
        "The redesigned app opens on intent, shows travel time instead of raw distance, and puts the organiser's name and photo on every card. Saving an event is a single tap and feeds a lightweight weekly digest.",
      ],
    },
  ],
  results: [
    { metric: "+34%", label: "Week-1 retention", note: "Measured on the beta cohort, 6 weeks after release" },
    { metric: "6/6", label: "Task success", note: "Find an event for tonight under 20 min away" },
    { metric: "-41%", label: "Time to first save", note: "Prototype test, compared with the previous build" },
  ],
  learnings: [
    "I started the project assuming a content problem because that was the brief. The diary study is what corrected it — I should have run it in week one, not week three.",
    "Testing the map-first version early saved the team from building the most expensive screen in the product.",
    "Documenting states next to the components removed almost all handover questions.",
  ],
  gallery: [
    { caption: "Intent-based home screen", alt: "Mobile home screen with three intent entries" },
    { caption: "Event card anatomy", alt: "Breakdown of the event card components" },
    { caption: "Filter sheet", alt: "Bottom sheet with distance and price filters" },
  ],
  resources: [
    { label: "Research plan (PDF)", href: "#" },
    { label: "Interactive prototype", href: "#" },
  ],
};

export const cafeCase: CaseStudy = {
  overview: [
    { label: "Role", value: "User research, Service design" },
    { label: "Timeline", value: "6 weeks, 2023" },
    { label: "Team", value: "Me and the café owners" },
    { label: "Output", value: "Journey map, personas, service blueprint" },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      body: [
        "Café des Beaux-Arts is a neighbourhood café that also hosts exhibitions from local artists. The owners wanted a booking website. Before designing one, we agreed to spend two weeks understanding whether booking was the actual friction.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      body: [
        "Regulars were happy. Newcomers who came for an exhibition rarely returned, and the owners had no idea why. Nothing in the existing digital touchpoints explained what the place was.",
      ],
    },
    {
      id: "role",
      title: "My role",
      body: [
        "I ran the research end to end: recruitment, interviews, on-site observation, synthesis and the final restitution workshop.",
      ],
    },
    {
      id: "research",
      title: "Research",
      body: ["Mixed methods, small sample, deliberately qualitative."],
      list: [
        "12 customer interviews, split between regulars and first-time visitors",
        "3 observation sessions of 2 hours during exhibition openings",
        "Staff shadowing with the two baristas",
        "Review of 60 online reviews",
      ],
    },
    {
      id: "insights",
      title: "Insights",
      body: ["The journey broke long before any booking screen."],
      list: [
        "First-time visitors could not tell if the exhibition space was free to enter.",
        "The busiest moment for staff — openings — was also the moment newcomers needed the most guidance.",
        "Two thirds of newcomers arrived through an artist's own social post, never through the café's channels.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "I mapped the end-to-end journey across five phases, then built a service blueprint that showed which frontstage failures came from backstage constraints. Two personas emerged: the regular remote worker and the exhibition-first visitor.",
      ],
    },
    {
      id: "wireframes",
      title: "Iterations",
      body: [
        "Instead of a booking site, the first deliverable was a set of small service changes: a one-line entry sign, a printed exhibition card on each table, and a shared post template given to exhibiting artists.",
      ],
    },
    {
      id: "solution",
      title: "Final solution",
      body: [
        "A lightweight website focused on the exhibition programme and practical information, plus the service changes above. Booking was reduced to a single form for private events, which was the only booking need the research actually surfaced.",
      ],
    },
  ],
  results: [
    { metric: "3 of 5", label: "Journey phases reworked", note: "Prioritised with the owners in a 2-hour workshop" },
    { metric: "12", label: "Interviews", note: "Regulars and first-time visitors" },
    { metric: "1 page", label: "Website scope", note: "Down from the initial 6-page brief" },
  ],
  learnings: [
    "The most useful outcome of this project was removing scope, not adding features.",
    "Observation caught things interviews never would — people hesitating at the door for several seconds.",
    "Involving the owners in the synthesis made the recommendations stick without a formal report.",
  ],
  gallery: [
    { caption: "Journey map, five phases", alt: "Customer journey map on paper" },
    { caption: "Service blueprint", alt: "Service blueprint with frontstage and backstage lanes" },
    { caption: "Personas", alt: "Two persona cards" },
  ],
  resources: [{ label: "Journey map (PDF)", href: "#" }],
};

export const roadmapCase: CaseStudy = {
  overview: [
    { label: "Role", value: "Product strategy, Benchmark, Roadmap" },
    { label: "Timeline", value: "4 weeks, 2024" },
    { label: "Team", value: "Me, a founder, a lead developer" },
    { label: "Output", value: "Benchmark, KPI framework, 2-quarter roadmap" },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      body: [
        "A three-person team building a scheduling tool for independent therapists had a long backlog and no shared way to decide what came next. Everything was described as urgent.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      body: [
        "The backlog held 78 items with no criteria attached. Decisions were made in conversation and reversed the following week, which cost the developer roughly a third of his time in rework.",
      ],
    },
    {
      id: "role",
      title: "My role",
      body: [
        "I facilitated the exercise rather than owning the decisions. My job was to give the team a frame they could keep using after I left.",
      ],
    },
    {
      id: "research",
      title: "Research & benchmark",
      body: [
        "I reviewed six competing products against the jobs the team's users described, and interviewed five customers about the moment they almost churned.",
      ],
      list: [
        "6-product feature and pricing benchmark",
        "5 churn-risk interviews",
        "Support ticket tagging over 4 months",
      ],
    },
    {
      id: "insights",
      title: "Insights",
      body: [
        "Most backlog items served acquisition. Nearly every churn signal came from the first two weeks of use, where nothing was planned.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "We scored the backlog with a simple impact-versus-effort grid, defined four KPIs the team could actually measure with their current tooling, and grouped the survivors into three themes across two quarters.",
      ],
      list: [
        "Activation rate at day 14",
        "Weekly active practitioners",
        "Support tickets per 100 bookings",
        "Time to first completed booking",
      ],
    },
    {
      id: "solution",
      title: "Final roadmap",
      body: [
        "Quarter one focused entirely on activation. Quarter two on reducing support load. Everything else moved to a parked list with a stated reason, which turned out to be the part the founder valued most.",
      ],
    },
  ],
  results: [
    { metric: "78 → 21", label: "Backlog items", note: "After scoring and parking" },
    { metric: "4", label: "KPIs adopted", note: "Reviewed monthly by the team" },
    { metric: "2 quarters", label: "Roadmap horizon", note: "Themes, not dated features" },
  ],
  learnings: [
    "Writing down why something was parked prevented the same discussion from returning every week.",
    "Four measurable KPIs beat twelve aspirational ones for a team this size.",
    "Facilitation, not authorship, was what made the roadmap survive.",
  ],
  gallery: [
    { caption: "Impact / effort grid", alt: "Prioritisation grid" },
    { caption: "KPI framework", alt: "KPI framework sheet" },
    { caption: "Two-quarter roadmap", alt: "Roadmap timeline by theme" },
  ],
  resources: [{ label: "Benchmark summary", href: "#" }],
};
