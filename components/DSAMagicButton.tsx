import React, {ButtonHTMLAttributes, CSSProperties, useState} from "react";

interface RunwayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
}

const errorBorderKeyframes = `
@keyframes error-border {
  0%, 100% { border-color: #3b82f6; }
  25% { border-color: #ff4d4f; }
  50% { border-color: #ffb300; }
  75% { border-color: #ff4d4f; }
}
@keyframes error-shake {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  50% { transform: translateX(-2px); }
  60% { transform: translateX(2px); }
  70% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  90% { transform: translateX(0); }
}
`;

const DSAMagicButton: React.FC<RunwayButtonProps> = ({
                                                      className = "",
                                                      children,
                                                      style,
                                                      ...props
                                                  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <style>{errorBorderKeyframes}</style>
            <button
                className="px-4 py-2 border-2 border-primary bg-transparent text-primary rounded hover:bg-primary/10 transition-all flex items-center gap-2"
                style={{
                    transition: "top 0.2s, left 0.2s",
                    animation: isHovered
                        ? "error-border 1s linear infinite, error-shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite"
                        : undefined,
                    ...style,
                }}
                onMouseEnter={e => {
                    setIsHovered(true);
                    props.onMouseEnter?.(e);
                }}
                onMouseLeave={e => {
                    setIsHovered(false);
                    props.onMouseLeave?.(e);
                }}
                {...props}
            >
                {isHovered
                    ? <span>DSA Champ Not Found&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🚫</span>
                    : (
                        <>
                            Looking for DSA Wizard?
                            <svg className="ml-1" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </>
                    )
                }
            </button>
        </>
    );
};

export default DSAMagicButton;
