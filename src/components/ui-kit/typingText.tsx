import { useEffect, useState } from "react";

interface TypingTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
}

export function TypingText({
    words,
    typingSpeed = 90,
    deletingSpeed = 50,
    pauseTime = 1800,
    className = "",
}: TypingTextProps) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting) {
            if (displayed.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayed(currentWord.slice(0, displayed.length + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(currentWord.slice(0, displayed.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [
        displayed,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);

    return (
        <span className={className}>
            {displayed}
            <span className="ml-0.5 animate-pulse">|</span>
        </span>
    );
}