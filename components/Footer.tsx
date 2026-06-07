export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 bg-[#050816]">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Harshavardan Naidu</p>
        <p className="text-xs text-slate-700">Backend Engineer</p>
      </div>
    </footer>
  );
}
