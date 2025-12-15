import { useEffect } from "react";

const SITE_NAME = "Tivane Software Solutions";

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    const fullTitle = pageTitle ? `${SITE_NAME} | ${pageTitle}` : SITE_NAME;
    document.title = fullTitle;
  }, [pageTitle]);
}
