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

const Expertise = ({ showMenuExpertise }) => {
    return (
        <>
            {showMenuExpertise && (
                <div className="absolute top-[81px] -right-3 min-h-[150px] min-w-[200px] bg-white rounded-sm text-black">
                    <ul className="flex flex-col items-center p-[3px] border-t-4 border-blue-500 shadow-md">
                        {menu.map((item) => {
                            return (
                                <Link key={item.id} to={item.url}>
                                    <li className="w-[200px] h-[40px] text-end hover:bg-black/[0.03] hover:text-blue-500 pr-9 py-6 rounded-md flex items-center justify-end">
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

export default Expertise;
