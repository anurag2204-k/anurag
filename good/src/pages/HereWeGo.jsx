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
        <div className="min-h-screen">
            {isDesktop ? (
                <DesktopScreen />
            ) : (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="w-full max-w-sm aspect-[9/18] max-h-[90vh]">
                        <IPhoneScreen />
                    </div>
                </div>
            )}
        </div>
    );
}
