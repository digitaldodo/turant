import { Button } from '@turant/ui';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center p-8">
      <section className="space-y-4">
        <p className="text-sm font-medium text-slate-500">Turant · Phase 0</p>
        <h1 className="text-4xl font-bold tracking-tight">Admin web foundation</h1>
        <p className="max-w-xl text-slate-600">
          The operational PWA shell is ready for future auditable admin workflows.
        </p>
        <Button disabled>Business features coming in a later phase</Button>
      </section>
    </main>
  );
}
