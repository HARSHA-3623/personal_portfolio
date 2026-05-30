const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-6 px-6 text-center">
      <p className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Harshavardan Naidu. Backend Engineer — Production
        Systems.
      </p>
    </footer>
  );
};

export default Footer;
