// ...existing code...
import React, { useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

/**
 * Breadcrumb built from the current URL path segments.
 * - Shows Home > Industries > Tourism > Trekking Report > Trekking Arrival vs Tourist Arrival
 * - Uses stored per-path state to preserve dataset/apiKey/filter info for ancestor links
 * - Includes apiKey in Link state when apiKey prop is provided
 */
function Breadcrumb({ apiKey }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname || "/";

  // Map known slugs to friendly labels
  const labelMap = {
    industries: "Industries",
    tourism: "Tourism",
    "trekking-reports": "Trekking Report",
    data: "Trekking Arrival VS Tourist Arrival",
    "custom-logistics": "Custom Logistics",
    customlogistics: "Custom Logistics",
    "view-all": "View All",
    home: "Home",
    dashboard: "Dashboard",
  };

  const STORAGE_KEY = "breadcrumb_path_state_map_v1";

  const loadStateMap = () => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  };

  const saveStateMap = (map) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch {
      // ignore
    }
  };

  // Persist current location.state for this full path so ancestor crumbs can reuse it later
  useEffect(() => {
    try {
      const full = pathname + (location.search || "");
      const map = loadStateMap();
      // Only store non-undefined. Store null if explicitly present so we can know it was visited.
      map[full] = location.state === undefined ? null : location.state;
      saveStateMap(map);
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, location.search, JSON.stringify(location.state)]);

  // Build breadcrumb items from path segments and use saved state per path when available
  const items = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const crumbs = [{ label: "Home", path: "/", state: loadStateMap()["/"] ?? null }];

    let acc = "";
    const savedMap = loadStateMap();

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      acc += `/${seg}`;

      // Prefer saved state for this exact path; if not found and this is the current path use location.state
      const savedStateForAcc = savedMap[acc];
      const stateForThisPath =
        savedStateForAcc !== undefined ? savedStateForAcc : (acc === pathname ? (location.state ?? null) : null);

      // allow override via location.state.breadcrumbLabel for the current path
      const overrideLabel =
        stateForThisPath && stateForThisPath.breadcrumbLabel && acc === pathname
          ? stateForThisPath.breadcrumbLabel
          : null;

      // special-case: when segment is "data" and previous segment is "trekking-reports"
      let label;
      if (overrideLabel) {
        label = overrideLabel;
      } else if (seg === "data" && segments[i - 1] === "trekking-reports") {
        label = labelMap.data;
      } else {
        label =
          labelMap[seg] ||
          seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      }

      crumbs.push({
        label,
        path: acc,
        state: stateForThisPath,
      });
    }

    return crumbs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, location.search, JSON.stringify(location.state)]); // rebuild when path or state changes

  // Helper to navigate preserving apiKey if provided
  const linkStateFor = (entryState) => {
    if (!apiKey && !entryState) return undefined;
    return { ...(entryState || {}), ...(apiKey ? { apiKey } : {}) };
  };

  const handleNavigate = (path, state) => {
    navigate(path, { state: linkStateFor(state) });
  };

  return (
    <div>
      <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={it.path + idx}>
              {idx !== 0 && (
                <li>
                  <IoIosArrowForward className="text-stone-400" />
                </li>
              )}
              <li>
                {isLast ? (
                  <span className="text-stone-900">{it.label}</span>
                ) : (
                  <span>
                    <Link
                      to={it.path}
                      state={linkStateFor(it.state)}
                      className="text-stone-400 hover:text-stone-600 text-sm"
                      onClick={(e) => {
                        // Programmatic navigation ensures state merge behavior if needed
                        // e.preventDefault();
                        // handleNavigate(it.path, it.state);
                      }}
                    >
                      {it.label}
                    </Link>
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;
// ...existing code...