// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// THE AGENT DOES NOT REJECT ANYBODY, and that runs through every line below. Hiring is regulated
// nearly everywhere this will be sold, and an agent that screens, ranks or rejects candidates on
// its own creates real legal exposure for the customer and real harm to real people. The intake
// in apolloclaw2 (lib/recruitingIntake.ts) treats "summarize only, I read every application" as
// the sane default rather than a setting to discover later, and asks for the fairness rules
// directly. The copy holds the same line: it drafts, organizes, chases and prepares, and a person
// makes every decision about a person.
//
// The second thing here comes from the intake's own best question, the one about what a great
// hire looks like that a resume would miss. That is the difference between an agent that
// shortlists the best-formatted CV and one that knows what you are actually hiring for, so the
// copy talks about it rather than about parsing.
//
// The third is candidate experience, which the intake asks about explicitly and which is the
// thing most hiring software makes worse. The people you do not hire outnumber the ones you do.

export const CAPABILITIES = [
  {
    title: "Job Descriptions and Adverts",
    body: "Written from what the role actually needs rather than the last version somebody copied, in language that reads like your company and not like a template.",
  },
  {
    title: "Application Summaries, Not Verdicts",
    body: "Every application read and summarized against what you said matters, so you review people instead of parsing PDFs. It never rejects anyone on its own.",
  },
  {
    title: "Candidate Outreach and Sourcing",
    body: "Messages that name the specific thing about someone's background that caught your eye, in your voice, for you to approve before they go.",
  },
  {
    title: "Scheduling and Chasing",
    body: "Interviews booked around real calendars, reminders sent, references chased. The logistics that quietly add a week to every hire.",
  },
  {
    title: "Nobody Waits in Silence",
    body: "Candidates kept updated on a cadence you set, including the ones you are not moving forward, because most of them are also your customers and neighbours.",
  },
  {
    title: "Interview Prep and Question Sets",
    body: "The same structured questions for every candidate in a role, plus a brief for whoever is interviewing, so the process is consistent rather than improvised.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Learn What a Great Hire Looks Like",
    body: "The roles, the hard requirements, and the thing a resume would miss entirely. Then the rules: how far it may go reviewing applications, the fairness requirements it must follow, and what never reaches a candidate without you.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Pipeline Stops Going Quiet",
    body: "Applications come back summarized. Interviews get scheduled without four emails. Candidates hear something within a day. The stage where you were losing people is the first thing it works on.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns Your Bar",
    body: "Which summaries were useful, which candidates you moved forward and why, and how you actually write to people. The work needs less editing every week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Field Services",
    quote:
      "We were losing good technicians between applying and the first call, because nobody replied for four days and they took another offer. Now everyone hears from us within a day. That alone changed our hiring.",
    name: "Operations Manager",
    detail: "HVAC company, 40 staff",
  },
  {
    industry: "Search Firm",
    quote:
      "Running six searches at once, the admin is the constraint, not the judgment. It keeps each pipeline separate, drafts the outreach and chases the scheduling. I do the part clients actually pay for.",
    name: "Principal",
    detail: "Boutique executive search",
  },
  {
    industry: "Hospitality",
    quote:
      "Two hundred applications for four roles used to mean reading resumes at 11pm. Now they come back summarized against what I said matters and I read people instead of PDFs. I still make every call.",
    name: "General Manager",
    detail: "Restaurant group",
  },
  {
    industry: "Manufacturing",
    quote:
      "The setup asked what a great hire looks like that a resume would miss. Nobody had ever asked us that. Writing it down changed who we shortlist more than any tool did.",
    name: "Plant HR Lead",
    detail: "Contract manufacturer",
  },
  {
    industry: "Professional Services",
    quote:
      "What sold me is that it will not reject anyone. It summarizes, it flags against our hard requirements, and a person decides. Given what hiring decisions carry, that was not negotiable.",
    name: "Head of People",
    detail: "Consultancy, 120 staff",
  },
  {
    industry: "Retail",
    quote:
      "Rejections used to go out late or not at all, which is the thing I liked least about my own process. Now they are drafted the same day and I read them before they send. Nobody gets ghosted.",
    name: "Regional Manager",
    detail: "Specialty retail",
  },
];

export const FAQS = [
  {
    q: "Does it screen out or reject candidates?",
    a: "Not on its own, and the default setup does not let it. During setup you choose how far it may go, and the recommended starting point is summarize only, with you reading every application. Even at the loosest setting it can flag against your written hard requirements. A person makes every decision about a person, because hiring decisions carry legal weight and affect somebody's livelihood.",
  },
  {
    q: "What about bias and EEO?",
    a: "You write the fairness rules at setup and they are enforced rather than assumed: it works from the requirements you defined, it does not infer age, nationality or anything else protected from a CV, and it does not rank people on its own. It is a drafting and organizing tool, not a decision engine, which is the only version of this we would put near hiring.",
  },
  {
    q: "Does it work with our ATS?",
    a: "We build to what you already run: Greenhouse, Lever, Ashby, Workable, BambooHR, Workday, JazzHR and the rest. If you are running on a job board and a spreadsheet, that works too, and plenty of the teams we set this up for are.",
  },
  {
    q: "Will it message candidates directly?",
    a: "It drafts and you send. Rejections, offers, anything with a number in it, and anyone already at interview stage are usually on the list of things that never go out unread. You define that list at setup.",
  },
  {
    q: "We recruit for clients, not ourselves. Does that work?",
    a: "Yes, and it is a different configuration. An agency agent runs several pipelines at once and is set up so it never mixes them, never sends one client's candidate to another, and never sends anything to a client without you reading it first.",
  },
  {
    q: "Can it write the job description?",
    a: "It drafts them from what the role actually needs, including the things you told us a resume would miss. You get a draft to edit rather than a blank page or a copy of the last one.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are live within two weeks. We configure it on your roles, your hard requirements, your interview process, your fairness rules and how you want candidates treated.",
  },
  {
    q: "Does it replace a recruiter?",
    a: "It replaces the part of recruiting that is scheduling, chasing, summarizing and typing. The judgment about people stays with people. Most teams find the same recruiter runs meaningfully more open roles.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your ATS, your hiring volume and your compliance requirements, book a consultation and we will give you a number.",
  },
];
