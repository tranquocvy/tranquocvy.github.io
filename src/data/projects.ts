export type Evidence = { label: string; href: string };
export type Contribution = { title: string; body: string; evidence: Evidence[] };

export type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  summary: string;
  role: string;
  team: string;
  period: string;
  stack: string[];
  repo: string;
  stats: { label: string; value: string }[];
  contributions: Contribution[];
  notMine?: string;
};

const tb = 'https://github.com/CQ23-SoftwareDesign-2026/Ticket_Box/pull/';
const rb = 'https://github.com/web-dev-23-31/Retrobit_Board_Game/pull/';
const nc = 'https://github.com/hoquangsang/NovaCinema/pull/';
const th = 'https://github.com/techhaven-app/window-shop-app/pull/';
const pr = (base: string, ...n: number[]) => n.map((x) => ({ label: `#${x}`, href: base + x }));

export const projects: Project[] = [
  {
    slug: 'ticket-box',
    name: 'Ticket_Box',
    featured: true,
    summary:
      'A concert-ticketing platform: event discovery, seat reservation, checkout with PayOS, and staff check-in. I led the payment and background-processing side of the backend.',
    role: 'Backend lead — payments & background jobs',
    team: 'Team of 4 · Software Design coursework',
    period: 'May – Jul 2026',
    stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'RabbitMQ', 'PayOS', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/CQ23-SoftwareDesign-2026/Ticket_Box/tree/develop',
    stats: [
      { label: 'Merged PRs', value: '17' },
      { label: 'Share of commits', value: '41%' },
      { label: 'Payment module written by me', value: '~95%' },
    ],
    contributions: [
      {
        title: 'Payments that survive retries and outages',
        body: 'PayOS behind a Strategy interface; two-layer idempotency (Redis SET NX reservation + unique key in PostgreSQL); an opossum circuit breaker per gateway; checkout-session reuse and reconciliation of timed-out transactions.',
        evidence: pr(tb, 36, 38, 96),
      },
      {
        title: 'Order ↔ payment lifecycle',
        body: 'Cancellation and failed-webhook paths release held inventory; a scheduled job cleans up expired pending orders.',
        evidence: pr(tb, 52),
      },
      {
        title: 'Background jobs on RabbitMQ',
        body: 'Streamed CSV guest-list import with batched PostgreSQL upserts and job progress; AI artist bios from PDF press kits (Gemini); email and in-app notifications.',
        evidence: pr(tb, 63, 64),
      },
      {
        title: 'Caching, rate limiting, storage hygiene',
        body: 'Redis cache-aside for concert reads, a Redis token-bucket rate limiter, and a daily cron that deletes orphaned files from Supabase Storage.',
        evidence: pr(tb, 33, 62),
      },
      {
        title: 'CI/CD',
        body: 'GitHub Actions quality gate (lint, typecheck, Prisma validate, migration check, build) and a multi-stage Docker image deployed to Railway.',
        evidence: pr(tb, 18),
      },
    ],
    notMine:
      'The RabbitMQ order-creation consumer, Redis/Lua seat reservation, check-in scanning, auth, and the k6 load tests were built by teammates.',
  },
  {
    slug: 'retrobit',
    name: 'Retrobit Board Game',
    summary:
      'A retro browser-game platform with saved sessions, rankings, and achievements. I built most of the backend and the rating system.',
    role: 'Backend owner & game developer',
    team: 'Team of 4 · Web Development coursework',
    period: 'Jan 2026',
    stack: ['Express', 'PostgreSQL', 'Knex', 'JWT', 'React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/web-dev-23-31/Retrobit_Board_Game',
    stats: [
      { label: 'Merged PRs', value: '19' },
      { label: 'Most PRs on the team', value: 'Yes' },
      { label: 'ELO module written by me', value: '100%' },
    ],
    contributions: [
      {
        title: 'API foundation',
        body: 'Users, email OTP over SMTP, games, and save/resume game sessions on Express + PostgreSQL/Knex.',
        evidence: pr(rb, 2, 3, 6),
      },
      {
        title: 'ELO rating system',
        body: 'Standard expected-score formula with a dynamic K-factor (faster for new players, stable for high ranks) and fixed bot ratings per difficulty for player-vs-AI modes. Plus the achievements service.',
        evidence: [
          { label: 'elo/', href: 'https://github.com/web-dev-23-31/Retrobit_Board_Game/tree/main/backend/src/services/elo' },
          ...pr(rb, 12),
        ],
      },
      {
        title: 'Games and deployment',
        body: 'Match-3 and Memory games, game-management screens, and the frontend/backend deployments.',
        evidence: pr(rb, 36, 50, 11, 23),
      },
    ],
    notMine: 'Friends and messaging were built by teammates.',
  },
  {
    slug: 'novacinema',
    name: 'NovaCinema',
    summary:
      'A cinema booking platform with movies, rooms, showtimes, and an admin area. I worked across auth, payments, admin screens, and an AI chatbot.',
    role: 'Fullstack contributor',
    team: 'Team of 4 · Coursework',
    period: 'Nov 2025 – Jan 2026',
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'React', 'TypeScript', 'Vite', 'Gemini API'],
    repo: 'https://github.com/hoquangsang/NovaCinema',
    stats: [
      { label: 'Merged PRs', value: '9' },
      { label: 'Share of commits', value: '31%' },
    ],
    contributions: [
      {
        title: 'Auth and architecture',
        body: 'NestJS authentication module and a follow-up architecture refactor, with written architecture notes.',
        evidence: pr(nc, 3, 4),
      },
      {
        title: 'Admin screens',
        body: 'Movies, rooms with a seat-map editor, showtimes with bulk scheduling, and user-role management.',
        evidence: pr(nc, 41),
      },
      {
        title: 'QR payment and AI chatbot',
        body: 'QR payment page with cancel and retry-after-expiry; a Gemini chatbot with a backend module and markdown chat UI.',
        evidence: pr(nc, 42, 51, 47),
      },
    ],
    notMine: 'Customer-facing seat selection and booking flow were built by teammates.',
  },
  {
    slug: 'techhaven',
    name: 'TechHaven — Window Shop',
    summary:
      'A Windows desktop app for small shops to manage products, orders, customers, and sales reports.',
    role: 'Desktop client & testing',
    team: 'Team of 5 · Coursework',
    period: 'Oct 2025 – Jan 2026',
    stack: ['C#', '.NET', 'WinUI 3', 'MVVM', 'xUnit', 'Moq', 'FluentAssertions'],
    repo: 'https://github.com/techhaven-app/window-shop-app',
    stats: [
      { label: 'Merged PRs', value: '38' },
      { label: 'Share of commits', value: '35%' },
    ],
    contributions: [
      {
        title: 'WinUI 3 presentation layer',
        body: 'Shell, dashboard, orders, settings, theming, and responsive layouts in MVVM.',
        evidence: pr(th, 45, 69, 74),
      },
      {
        title: 'Services and auth flows',
        body: 'HTTP service layer, login with mock MFA, remember-me, sign-up, and trial mode.',
        evidence: pr(th, 16, 33, 95),
      },
      {
        title: 'Tests and releases',
        body: 'Unit tests across auth, products, orders, customers, and reports; packaged release builds.',
        evidence: pr(th, 121, 138),
      },
    ],
  },
];
