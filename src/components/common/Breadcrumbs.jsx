import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ customTitles }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbMap = {
    news: "الأخبار",
    ...customTitles,
  };

  return (
    <nav className="mb-6 pt-4 text-sm md:text-base font-medium">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            to="/"
            className="text-muted hover:text-blue transition-colors flex items-center gap-2"
          >
            الرئيسية
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const title = breadcrumbMap[value] || value;

          return (
            <li key={to} className="flex items-center gap-2">
              <span className="text-muted/50 text-xs">/</span>
              {isLast ? (
                <span className="text-blue font-bold truncate max-w-[200px] md:max-w-[400px]">
                  {title}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-muted hover:text-blue transition-colors truncate max-w-[150px]"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
