import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/data/resume";
import { sitePages } from "@/pages/ResumePages";

// Shared frame for the resume pages: top bar with the page menu, a "Next" link, and a contact footer.
const SiteLayout = () => {
  const { pathname } = useLocation();
  const index = sitePages.findIndex((p) => p.path === pathname);
  const page = sitePages[index];
  const next = index >= 0 ? sitePages[index + 1] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page) document.title = page.title;
  }, [pathname, page]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="pt-3 sm:py-3 text-[15px] font-semibold tracking-tight text-brand">
            {contact.name}
          </Link>
          <nav aria-label="Pages" className="no-scrollbar -mx-3 flex overflow-x-auto">
            {sitePages.map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                end
                className={({ isActive }) =>
                  cn(
                    "relative shrink-0 whitespace-nowrap px-3 py-3 text-sm transition-colors",
                    "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors",
                    isActive
                      ? "text-brand after:bg-brand"
                      : "text-muted-foreground after:bg-transparent hover:text-foreground",
                  )
                }
              >
                {p.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <Outlet />
        {next && (
          <div className="border-t border-border pt-6">
            <Link
              to={next.path}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline underline-offset-4"
            >
              Next: {next.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="w-4 h-4" />
              <span className="break-all">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="w-4 h-4" />
              {contact.phone}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <span>© {new Date().getFullYear()} {contact.name}</span>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
