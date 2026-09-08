// The four audience pages. Same shape, different argument.
//
// The first split is the intake's own first question, because it changes the configuration more
// than anything else does: an in-house agent works one pipeline deeply, an agency agent juggles
// many and must never mix them up. The other two are about shape rather than employer. Hiring
// twenty of the same role is a volume problem; hiring four people a year with no recruiter is a
// nobody-owns-this problem, and they need different things from the same agent.
//
// Every page holds the same line: it summarizes, drafts, schedules and chases, and a person
// decides about a person. That is not a caveat added at the end, it is what makes this safe to
// put anywhere near hiring, and the intake makes the customer choose the screening authority
// explicitly with the most conservative option offered first.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-in-house-teams",
    label: "For In-House Teams",
    eyebrow: "For In-House Teams",
    title: "Two Recruiters, Thirty Open Roles, One Very Long Week.",
    intro:
      "The bottleneck is almost never judgment. It is the scheduling, the summarizing and the chasing in between. The Recruiting Agent takes that so the pipeline moves at the speed of decisions.",
    metaTitle: "AI for In-House Recruiting Teams | Screening Support and Scheduling",
    metaDescription:
      "A private AI agent for in-house talent teams. Summarizes applications against your real requirements, schedules interviews, keeps candidates warm and drafts everything for review. It never rejects anyone on its own.",
    keywords: [
      "AI recruiting assistant",
      "in-house talent acquisition AI",
      "applicant screening support",
      "interview scheduling automation",
      "recruiting workflow AI",
    ],
    problem: {
      heading: "The Queue Grows Faster Than Anyone Can Work It",
      body: [
        "Every open role brings applications, hiring managers who need chasing, calendars that do not line up, and candidates who go quiet because nobody had an hour to write to them. None of it is hard and all of it is time.",
        "So the work gets triaged, which means the roles with the loudest hiring manager move and the rest sit. Six weeks later somebody asks why time-to-fill is up, and the honest answer is that nothing was ever prioritized on purpose.",
      ],
    },
    benefits: [
      {
        title: "Applications Come Back Read",
        body: "Summarized against what you actually said matters, including the things a resume alone would miss. You review people rather than parse documents.",
      },
      {
        title: "You Still Decide Everything",
        body: "It summarizes and flags against your written requirements. It does not rank, screen out or reject. Every decision about a person is made by a person.",
      },
      {
        title: "Scheduling Stops Taking a Week",
        body: "Interviews booked around real calendars, reminders sent, reschedules handled, without the four-email thread each time.",
      },
      {
        title: "Nobody Goes Quiet",
        body: "Candidates hear something within the window you set, including the ones you are not moving forward.",
      },
      {
        title: "Consistent Interviews",
        body: "The same structured questions for every candidate in a role, with a brief for whoever is running it, so you can actually compare answers.",
      },
      {
        title: "The ATS Stays Current",
        body: "Notes, stages and next steps recorded as part of the work rather than as an evening job.",
      },
    ],
    closing: {
      heading: "Fill the Roles, Not the Calendar",
      body: "The reason hiring is slow is rarely that anyone is undecided. It is the days that pass between decisions, and that is exactly what this removes.",
    },
  },
  {
    slug: "for-agencies-and-search-firms",
    label: "For Agencies & Search Firms",
    eyebrow: "For Agencies & Search Firms",
    title: "Six Searches, Six Clients, and No Room to Confuse Them.",
    intro:
      "Your constraint is how many searches one person can run properly, and it is set by admin rather than judgment. The Recruiting Agent takes the admin, and keeps every pipeline separate.",
    metaTitle: "AI for Recruiting Agencies and Search Firms | Run More Searches",
    metaDescription:
      "A private AI agent for recruiting agencies, search firms and staffing businesses. Runs multiple client pipelines without mixing them, drafts candidate outreach and client updates, and keeps every search moving.",
    keywords: [
      "AI for recruiting agencies",
      "executive search AI",
      "staffing agency automation",
      "candidate sourcing AI",
      "recruitment agency software",
    ],
    problem: {
      heading: "The Billable Part Is Small and Everything Else Is Constant",
      body: [
        "Clients pay for judgment: knowing who is actually good, who will move, and who will still be there in a year. Almost none of your week goes to that. It goes to sourcing messages, scheduling, formatting submissions and writing the update nobody had time to write.",
        "So you cap out at four or five searches, not because you could not assess more people, but because the fifth one would not get serviced properly and the client would notice.",
      ],
    },
    benefits: [
      {
        title: "Pipelines That Never Mix",
        body: "Each client's search is kept separate by design. A candidate submitted to one client is never accidentally surfaced for another.",
      },
      {
        title: "Outreach at Search Volume",
        body: "Sourcing messages that name the specific thing in someone's background worth naming, drafted for every prospect rather than the first twenty.",
      },
      {
        title: "Client Updates Written",
        body: "The weekly summary of what moved, who is in play, and what is stuck, drafted from the actual pipeline for you to send.",
      },
      {
        title: "Submissions Formatted",
        body: "Candidate write-ups in your format, from your notes, so presenting somebody is a review rather than an hour of typing.",
      },
      {
        title: "Scheduling Across Everyone",
        body: "Candidate, client and interviewer calendars reconciled without the thread, which on a retained search is most of the week.",
      },
      {
        title: "Nothing Reaches a Client Unread",
        body: "Client-facing anything is on the approval line by default. Your relationship, your name, your call.",
      },
    ],
    closing: {
      heading: "Run More Searches, Not a Bigger Back Office",
      body: "The number of searches you can carry is an admin number, not a judgment number. Move the admin and the number moves.",
    },
  },
  {
    slug: "for-high-volume-hiring",
    label: "For High-Volume Hiring",
    eyebrow: "For High-Volume Hiring",
    title: "Four Hundred Applications for Six Openings, Every Month.",
    intro:
      "At this volume the risk is not missing a good candidate, it is treating four hundred people like a spreadsheet. The Recruiting Agent reads every one and still leaves the decisions to you.",
    metaTitle: "AI for High-Volume Hiring | Application Review at Scale",
    metaDescription:
      "A private AI agent for high-volume and shift-based hiring. Reads and summarizes every application against your real requirements, schedules at scale and keeps every applicant informed, without screening anyone out on its own.",
    keywords: [
      "high volume recruiting AI",
      "hourly hiring automation",
      "application screening support",
      "shift hiring software",
      "bulk recruitment AI",
    ],
    problem: {
      heading: "Volume Makes Everybody Cut the Same Corners",
      body: [
        "Nobody reads four hundred applications properly. So it becomes a keyword scan, or the first fifty, or whoever applied on a day somebody had time. Good people get missed for reasons nobody would defend out loud.",
        "The other corner is the silence. Three hundred and ninety people never hear anything, and a good number of them are also your customers, or they tell their friends not to bother applying.",
      ],
    },
    benefits: [
      {
        title: "Every Application Actually Read",
        body: "All four hundred, summarized against your written requirements, so nobody is skipped because they applied on a Thursday.",
      },
      {
        title: "Your Bar, Not a Keyword Match",
        body: "Configured on what a great hire looks like that a resume would miss, so the summaries surface the right people rather than the best-formatted ones.",
      },
      {
        title: "It Still Does Not Reject",
        body: "Even at volume, it flags against hard requirements and summarizes. Screening people out is a decision, and decisions stay with you.",
      },
      {
        title: "Everybody Hears Back",
        body: "Including the ones you are not taking forward, drafted for you to approve, within the window you set.",
      },
      {
        title: "Scheduling at Scale",
        body: "Batches of interviews booked, confirmed and reminded, which at this volume is a job in itself.",
      },
      {
        title: "A Record That Holds Up",
        body: "What was asked, what was recorded and who decided, kept consistently, which matters most exactly when volume is highest.",
      },
    ],
    closing: {
      heading: "Read Everyone. Decide Yourself.",
      body: "Volume is what makes a process unfair, because volume is what makes people improvise. This removes the reason to improvise without removing the judgment.",
    },
  },
  {
    slug: "for-small-teams",
    label: "For Small Teams",
    eyebrow: "For Small Teams",
    title: "You Hire Four People a Year and Nobody Owns It.",
    intro:
      "There is no recruiter, so hiring lands on whoever is least busy, which is nobody. The Recruiting Agent gives a small team the process a big one has, without hiring somebody to run it.",
    metaTitle: "AI Recruiting for Small Businesses | Hiring Without a Recruiter",
    metaDescription:
      "A private AI agent for small businesses that hire occasionally. Writes the job advert, summarizes applications, schedules interviews and keeps candidates informed, so hiring does not fall on whoever is least busy.",
    keywords: [
      "small business hiring AI",
      "recruiting without a recruiter",
      "hiring automation small business",
      "job description writing AI",
      "SMB recruiting tools",
    ],
    problem: {
      heading: "Hiring Is Rare, Which Is Exactly Why It Goes Badly",
      body: [
        "Because you do it four times a year, nobody gets good at it. The advert is a copy of the last one, the interview is whatever gets asked on the day, and the applications sit in an inbox for a week because everyone assumed somebody else was looking.",
        "Then a hire goes wrong, which at your size is expensive in a way it simply is not at four hundred people, and the whole thing has to start again.",
      ],
    },
    benefits: [
      {
        title: "The Advert Is Written",
        body: "From what the role actually needs, not from the last version somebody pasted. A draft to edit instead of a blank page.",
      },
      {
        title: "Applications Do Not Sit",
        body: "Read and summarized as they arrive, so the good ones surface while they are still available.",
      },
      {
        title: "A Real Interview Process",
        body: "The same questions for every candidate and a brief for whoever is interviewing, so you compare answers rather than impressions.",
      },
      {
        title: "You Look Professional",
        body: "Candidates hear back quickly, know where they stand and get a real message. At your size, reputation in the local market is the whole hiring pipeline.",
      },
      {
        title: "The Fit a Resume Hides",
        body: "You write down what actually matters in your business, and it looks for that instead of years of experience.",
      },
      {
        title: "Nothing Automatic About People",
        body: "It never rejects anyone and never decides. You make the calls, it just makes sure they are informed and on time.",
      },
    ],
    closing: {
      heading: "The Process a Big Company Has, Without the Department",
      body: "The gap is not talent or judgment, it is that nobody has the hours to run hiring properly four times a year. That gap is fillable.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
