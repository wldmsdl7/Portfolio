import { useEffect, useRef, useState, type JSX } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TEXT =
  "Welcome to the 징니's Portfolio!  \n안녕하세요 NOVA PM님, 저는 9기 Web 챌린저 징니입니다! \n웹 챌린저로 지원하는 만큼 포트폴리오도 열심히 만들어봤어요 :)\n\n즐거운 감상 되시길 바랍니다 !!\n\nclear 입력하시면 다시 재생됩니다.";

export const TerminalController = () => {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const lastInputRef = useRef<string>("");
  const typingIntervalRef = useRef<number | null>(null);

  const startTyping = () => {
    let index = 0;
    setDisplayText("");
    setDone(false);

    typingIntervalRef.current = setInterval(() => {
      setDisplayText(TEXT.slice(0, index + 1));
      index++;

      if (index === TEXT.length) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }

        setLines([<TerminalOutput key="welcome">{TEXT}</TerminalOutput>]);
        setDone(true);
      }
    }, 80);
  };

  useEffect(() => {
    startTyping();

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const handleInput = (input: string) => {
    const trimmed = input.trim();

    if (!trimmed) return;

    if (
      trimmed === lastInputRef.current ||
      trimmed.length < lastInputRef.current.length
    ) {
      return;
    }

    lastInputRef.current = trimmed;

    if (trimmed === "clear") {
      setLines([]);
      lastInputRef.current = "";
      startTyping();
      return;
    }

    setLines((prev) => [
      ...prev,
      <TerminalOutput key={`res-${prev.length}`}>
        {"command not found: " + trimmed}
      </TerminalOutput>,
    ]);
  };

  return (
    <Terminal
      colorMode={ColorMode.Dark}
      onInput={done ? handleInput : undefined}
    >
      {!done && <TerminalOutput>{displayText}</TerminalOutput>}
      {done && lines}
    </Terminal>
  );
};
