export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Harshavardan Naidu</p>
        <p className="text-xs text-center sm:text-right text-slate-700">
          Personal Projects → Professional Work → Backend Engineering
        </p>
      </div>
    </footer>
  );
}
