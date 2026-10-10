import { useGame } from '@/game/GameContext';
import {
  GraduationCap,
  Play,
  BookOpen,
  Trophy,
  User,
  Info,
  ArrowUpRight,
  ArrowRight,
  Users,
  Building2,
  Coins,
  Star,
} from 'lucide-react';

export function HomeScreen() {
  const { setScreen, hasSavedGame, continueGame } = useGame();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Top Navigation */}
      <header className="border-b border-neutral-200 bg-white/80">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 text-white">
              <GraduationCap size={22} strokeWidth={2.2} />
            </div>

            <div>
              <div className="font-serif text-lg font-semibold leading-none text-neutral-900">
                Campus Tycoon
              </div>

              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                University Simulator
              </div>
            </div>
          </div>

          {/* Small navigation */}
          <div className="hidden items-center gap-1 sm:flex">
            <button
              onClick={() => setScreen('how-to-play')}
              className="rounded-full px-3.5 py-2 text-xs font-semibold text-neutral-600 transition hover:bg-primary-50 hover:text-primary-700"
            >
              How to Play
            </button>

            <button
              onClick={() => setScreen('leaderboard')}
              className="rounded-full px-3.5 py-2 text-xs font-semibold text-neutral-600 transition hover:bg-primary-50 hover:text-primary-700"
            >
              Leaderboard
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:pt-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">

          <div className="relative grid min-h-[430px] lg:grid-cols-[1fr_0.95fr]">
            {/* Hero copy */}
            <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
              <div className="mb-5 flex items-center gap-2">
                <span className="rounded-full bg-secondary-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-700">
                  Build • Manage • Grow
                </span>
              </div>

              <h1 className="max-w-xl font-serif text-4xl font-semibold leading-[1.05] text-neutral-900 sm:text-5xl lg:text-[54px]">
                Your university.
                <span className="block italic text-primary-600">
                  Your decisions.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-[15px]">
                Start with an empty campus and turn it into a thriving
                university. Build facilities, manage your budget, and keep
                your students happy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setScreen('new-game')}
                  className="group flex items-center justify-center gap-3 rounded-full bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lift"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <Play size={14} fill="currentColor" />
                  </span>

                  Start New University

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <button
                  onClick={() => hasSavedGame && continueGame()}
                  disabled={!hasSavedGame}
                  className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <BookOpen size={16} />
                  Continue
                </button>
              </div>

              <div className="mt-8 flex items-center gap-5 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Building2 size={13} />
                  Build your campus
                </span>

                <span className="hidden h-3 w-px bg-neutral-200 sm:block" />

                <span className="flex items-center gap-1.5">
                  <Users size={13} />
                  Manage students
                </span>
              </div>
            </div>

            {/* Campus illustration */}
            <div className="relative hidden min-h-[430px] lg:block">
              {/* Ground */}
              <div className="absolute bottom-0 right-0 h-[62%] w-[92%] rounded-tl-[100px] bg-primary-50" />

              {/* Lawn */}
              <div className="absolute bottom-0 right-0 h-[46%] w-[80%] rounded-tl-[60px] bg-accent-100" />

              {/* Main road */}
              <div className="absolute bottom-[-10px] right-[24%] h-[310px] w-[80px] rotate-[28deg] bg-neutral-100" />

              <div className="absolute bottom-0 right-[32%] h-[310px] w-[2px] rotate-[28deg] border-l border-dashed border-neutral-300" />

              {/* Main building */}
              <div className="absolute bottom-[29%] right-[27%]">
                <div className="relative h-[145px] w-[190px] rounded-t-2xl border border-neutral-200 bg-white shadow-soft">
                  {/* Windows */}
                  <div className="grid grid-cols-4 gap-3 px-5 pt-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div
                        key={item}
                        className="h-8 rounded-md bg-primary-100"
                      />
                    ))}
                  </div>

                  {/* Entrance */}
                  <div className="absolute bottom-0 left-1/2 h-16 w-12 -translate-x-1/2 rounded-t-2xl bg-secondary-200" />
                </div>

                {/* Roof */}
                <div className="absolute -left-3 -top-5 h-6 w-[206px] skew-x-[-18deg] rounded-md bg-secondary-300" />

                {/* Flag */}
                <div className="absolute -top-16 left-1/2 h-16 w-px bg-neutral-400" />
                <div className="absolute -top-16 left-1/2 h-5 w-8 rounded-r bg-primary-500" />
              </div>

              {/* Smaller building */}
              <div className="absolute bottom-[22%] right-[5%]">
                <div className="h-[82px] w-[105px] rounded-t-xl border border-neutral-200 bg-white">
                  <div className="grid grid-cols-3 gap-2 px-3 pt-5">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="h-4 rounded bg-violet-100"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -top-3 -left-1 h-4 w-[107px] rounded-md bg-violet-300" />
              </div>

              {/* Trees */}
              {[
                'bottom-[18%] right-[45%]',
                'bottom-[12%] right-[61%]',
                'bottom-[31%] right-[72%]',
                'bottom-[8%] right-[10%]',
              ].map((position, index) => (
                <div key={index} className={`absolute ${position}`}>
                  <div className="mx-auto h-5 w-1 bg-amber-600/50" />
                  <div className="h-10 w-10 rounded-full bg-accent-400" />
                </div>
              ))}

              {/* Campus status card */}
              <div className="absolute right-7 top-7 w-48 rounded-3xl border border-neutral-200 bg-white p-4 shadow-soft">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
                    New Campus
                  </span>

                  <span className="h-2 w-2 rounded-full bg-secondary-500" />
                </div>

                <div className="mb-3 font-serif text-base font-semibold text-neutral-900">
                  Ready to build
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div className="h-full w-[8%] rounded-full bg-primary-500" />
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-neutral-500">
                  <span>Campus progress</span>
                  <span>0%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            icon={<Users size={18} />}
            label="Students"
            value="0"
            color="blue"
          />

          <StatCard
            icon={<Building2 size={18} />}
            label="Buildings"
            value="0"
            color="violet"
          />

          <StatCard
            icon={<Coins size={18} />}
            label="Budget"
            value="—"
            color="amber"
          />

          <StatCard
            icon={<Star size={18} />}
            label="Campus Rating"
            value="—"
            color="emerald"
          />
        </section>

        {/* Bottom menu */}
        <section className="mt-8">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                Explore
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold text-neutral-900">
                Campus Menu
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MenuCard
              icon={<BookOpen size={19} />}
              title="How to Play"
              description="Learn the basics"
              onClick={() => setScreen('how-to-play')}
              accent="blue"
            />

            <MenuCard
              icon={<Trophy size={19} />}
              title="Leaderboard"
              description="View high scores"
              onClick={() => setScreen('leaderboard')}
              accent="amber"
            />

            <MenuCard
              icon={<User size={19} />}
              title="Student"
              description="About the creator"
              onClick={() => setScreen('student')}
              accent="violet"
            />

            <MenuCard
              icon={<Info size={19} />}
              title="About"
              description="About the game"
              onClick={() => setScreen('about')}
              accent="slate"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 pt-5 text-xs text-neutral-500 sm:flex-row">
          <span>Campus Tycoon © 2026</span>
          <span>
            Computer Science Portfolio Project · Made by{" "}
            <a
              href="https://aranyavij.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-600 transition-colors hover:text-secondary-500"
            >
              Aranya Vij
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'blue' | 'violet' | 'amber' | 'emerald';
}) {
  const colors = {
    blue: 'bg-primary-50 text-primary-600',
    violet: 'bg-violet-50 text-violet-500',
    amber: 'bg-secondary-100 text-secondary-600',
    emerald: 'bg-emerald-50 text-emerald-500',
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-2xl ${colors[color]}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            {label}
          </p>
          <p className="mt-0.5 font-serif text-xl font-semibold text-neutral-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function MenuCard({
  icon,
  title,
  description,
  onClick,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  accent: 'blue' | 'amber' | 'violet' | 'slate';
}) {
  const colors = {
    blue: 'bg-primary-50 text-primary-600',
    amber: 'bg-amber-50 text-amber-600',
    violet: 'bg-violet-50 text-violet-500',
    slate: 'bg-secondary-50 text-secondary-600',
  };

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-4 text-left shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lift"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${colors[accent]}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-neutral-900">{title}</p>
        <p className="mt-0.5 text-xs text-neutral-500">{description}</p>
      </div>

      <ArrowRight
        size={16}
        className="text-neutral-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary-600"
      />
    </button>
  );
}
