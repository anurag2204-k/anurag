import { useState, useEffect } from "react";
import DesktopScreen from "./DesktopScreen";
import IPhoneScreen from "./Iphone";

export default function HereWeGo() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {isDesktop ? <DesktopScreen /> : <IPhoneScreen />}
        </div>
    );
}
