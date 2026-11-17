import * as si from 'simple-icons';

type Icon = { path: string; hex: string };
export type Tech = { name: string; icon?: Icon; mono?: string };

const pick = (key: string): Icon | undefined => {
  const icon = (si as Record<string, Icon | undefined>)[key];
  return icon ? { path: icon.path, hex: icon.hex } : undefined;
};

// Display name → simple-icons export. Names not listed here render as a monogram tile.
const map: Record<string, string> = {
  'Node.js': 'siNodedotjs',
  NestJS: 'siNestjs',
  Express: 'siExpress',
  RabbitMQ: 'siRabbitmq',
  'C# / .NET': 'siDotnet',
  '.NET': 'siDotnet',
  'Java / Spring Boot': 'siSpringboot',
  PostgreSQL: 'siPostgresql',
  Prisma: 'siPrisma',
  Redis: 'siRedis',
  'MongoDB / Mongoose': 'siMongodb',
  MongoDB: 'siMongodb',
  Mongoose: 'siMongoose',
  Knex: 'siKnexdotjs',
  Docker: 'siDocker',
  'GitHub Actions': 'siGithubactions',
  Linux: 'siLinux',
  Git: 'siGit',
  Jenkins: 'siJenkins',
  'Kubernetes basics': 'siKubernetes',
  TypeScript: 'siTypescript',
  React: 'siReact',
  Vite: 'siVite',
  'Tailwind CSS': 'siTailwindcss',
  'Next.js': 'siNextdotjs',
  JWT: 'siJsonwebtokens',
  'Gemini API': 'siGooglegemini',
  Supabase: 'siSupabase',
  PayOS: '',
};

const monogram = (name: string) =>
  name
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

// Short labels for tiles without a logo.
const monoOverride: Record<string, string> = { 'C#': 'C#', 'SQL Server': 'SQL', 'WinUI 3 (MVVM)': 'UI', MVVM: 'VM', PayOS: 'PO' };

export function tech(name: string): Tech {
  const key = map[name];
  const icon = key ? pick(key) : undefined;
  return icon ? { name, icon } : { name, mono: monoOverride[name] ?? monogram(name) };
}

/** Very dark brand colours (Express, Next.js, Prisma…) are drawn in the text colour so they stay visible in dark mode. */
export function isDark(hex: string) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70;
}
