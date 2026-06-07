export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Harshavardan Naidu</p>
        <p className="text-xs text-zinc-700">Backend Engineer</p>
      </div>
    </footer>
  );
}
