import React from "react";
import { Link } from "react-router-dom";

const menu = [
    { id: 1, name: "زراعة الأسنان", url: "/" },
    { id: 2, name: "تجميل الأنسان", url: "/" },
    { id: 3, name: "تقويم الأسنان", url: "/" },
    { id: 4, name: "علاج جذور الأسنان", url: "/" },
    { id: 5, name: "التركيبات الثابتة", url: "/" },
    { id: 6, name: "طب أسنان الأطفال", url: "/" },
];

const ExpertiseMobile = ({
    showMenuExpertise,
    setShowMenuExpertise,
    setShowMobileMenu,
}) => {
    return (
        <>
            {showMenuExpertise && (
                <div className="min-h-[150px] w-full cursor-pointer bg-white rounded-sm text-black">
                    <ul className="flex flex-col items-center p-[3px] border-t-2 border-blue-500 shadow-md w-full">
                        {menu.map((item) => {
                            return (
                                <Link
                                    className="w-full"
                                    key={item.id}
                                    to={item.url}
                                >
                                    <li
                                        className="w-full h-[40px] text-end hover:bg-black/[0.03] hover:text-blue-500 pr-9 py-6 rounded-md flex items-center justify-end"
                                        onClick={() => {
                                            setShowMobileMenu(false);
                                            setShowMenuExpertise(false);
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ExpertiseMobile;
