import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Check, Download, Link2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { GallerySlug, contact, galleries } from "@/data/resume";
import { sitePages } from "@/pages/ResumePages";

const ContactLinks = ({ className }: { className?: string }) => (
  <ul className={cn("space-y-2", className)}>
    <li>
      <a href={`mailto:${contact.email}`} className="flex items-start gap-2.5 hover:underline underline-offset-4">
        <Mail className="mt-0.5 w-4 h-4 shrink-0" />
        {/* Allow the line to break after the @ rather than mid-word. */}
        <span className="[overflow-wrap:anywhere]">
          {contact.email.split("@")[0]}@<wbr />
          {contact.email.split("@")[1]}
        </span>
      </a>
    </li>
    <li>
      <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:underline underline-offset-4">
        <Phone className="w-4 h-4 shrink-0" />
        {contact.phone}
      </a>
    </li>
    <li className="flex items-center gap-2.5">
      <MapPin className="w-4 h-4 shrink-0" />
      {contact.location}
    </li>
    <li>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:underline underline-offset-4">
        <Linkedin className="w-4 h-4 shrink-0" />
        LinkedIn
      </a>
    </li>
  </ul>
);

// Download the CV PDF, or copy its link to paste into an email or message.
const CvActions = () => {
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}${contact.cv}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copy the CV link:", url);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 flex gap-2">
      <a
        href={contact.cv}
        download="Kamal_Karki_CV.pdf"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-medium text-brand shadow-sm transition-colors hover:bg-white/90"
      >
        <Download className="w-4 h-4" />
        Download CV
      </a>
      <button
        type="button"
        onClick={copy}
        title={url}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/30 px-2.5 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
};

// App-style frame: a navy sidebar with the tabs and contact details, and one tab shown at a time beside it.
// On phones the sidebar becomes a top bar with the tabs in a sideways-scrolling row.
const SiteLayout = () => {
  const { pathname } = useLocation();
  const page = sitePages.find((p) => p.path === pathname);
  // A photo page keeps the tab it belongs to highlighted (e.g. /maps → Leadership).
  const activePath = page?.path ?? galleries[pathname.slice(1) as GallerySlug]?.section.path;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page) document.title = page.title;
  }, [pathname, page]);

  return (
    <div className="min-h-screen bg-secondary/40 lg:flex lg:h-screen lg:overflow-hidden">
      <aside className="bg-brand text-white lg:flex lg:w-72 lg:shrink-0 lg:flex-col">
        <div className="px-5 pt-6 pb-3 sm:px-8 lg:px-7 lg:pt-10 lg:pb-8">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            {contact.name}
          </Link>
          <p className="mt-1 text-sm text-white/70">Aerospace Engineer · Airbus</p>
          <CvActions />
        </div>

        <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-3 sm:px-6 lg:flex-col lg:overflow-visible lg:px-4 lg:pb-0">
          {sitePages.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              aria-current={path === activePath ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                path === activePath ? "bg-white/15 font-medium text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block mt-auto px-7 pb-8 text-[13px] text-white/75">
          <ContactLinks />
          <p className="mt-6 text-white/50">© {new Date().getFullYear()} {contact.name}</p>
        </div>
      </aside>

      <main className="flex-1 lg:overflow-y-auto">
        <div className="max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          {page && <h1 className="mb-8 text-3xl font-semibold tracking-tight text-brand">{page.heading}</h1>}
          <Outlet />
        </div>

        <footer className="lg:hidden border-t border-border px-5 py-6 sm:px-8 text-sm text-muted-foreground">
          <ContactLinks />
          <p className="mt-4">© {new Date().getFullYear()} {contact.name}</p>
        </footer>
      </main>
    </div>
  );
};

export default SiteLayout;
