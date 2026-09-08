import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const ratios = new Map<string, number>(sectionIds.map(id => [id, 0]));

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        // Pick the section with the highest visible ratio
        let bestId = sectionIds[0];
        let bestRatio = -1;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        setActive(bestId);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sectionIds.join(',')]);

  return active;
}
