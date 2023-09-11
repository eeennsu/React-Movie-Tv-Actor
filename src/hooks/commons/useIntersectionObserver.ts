import { RefObject, useEffect, useState } from 'react';

const useIntersectionObserver = (
    targetRef: RefObject<Element>,
    options: IntersectionObserverInit = {
        threshold: 0,
        root: null,
        rootMargin: '0%',
    }
): IntersectionObserverEntry | undefined => {
    const { root, rootMargin, threshold } = options;
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const isIntersecting = entry?.isIntersecting;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const target = targetRef?.current; // DOM Ref

        // 현재 사용자 눈에 보인경우, 타겟이 없을 경우 리턴
        if (isIntersecting || !target) {
            return;
        }

        const observer = new IntersectionObserver(updateEntry, options);

        observer.observe(target);

        return () => observer.disconnect();
    }, [targetRef, options, threshold, root, rootMargin, isIntersecting]);

    return entry;
};

export default useIntersectionObserver;
