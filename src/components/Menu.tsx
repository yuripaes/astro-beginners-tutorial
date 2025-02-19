import type { FC } from "react";
import { useState } from "react";

const Menu: FC = () => {
    const [isOpen, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!isOpen);
    }

    // icons by Lucide: https://lucide.dev/
    return (
        <div className="menu-wrapper">
            <button
                aria-label={isOpen ? "close menu" : "open menu"}
                type="button"
                onClick={handleClick}
            >
                {isOpen ? (
                    <svg
                        role="img"
                        aria-label="close"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 6L6 18M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        role="img"
                        aria-label="menu"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 12h16M4 6h16M4 18h16"
                        ></path>
                    </svg>
                )}
           </button>
           <nav className={isOpen ? "menu menu-open" : "menu"}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;