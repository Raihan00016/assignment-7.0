import Image from "next/image";
import Navlinks from "./Navlinks";


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full border-b border-gray-200 bg-[#f9fbf9]">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">

                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#05893e]">
                        <Image
                            className="h-8 w-8"
                            height={50}
                            width={50}
                            src="/logo-icon.png"
                            alt="বাজার দর লোগো"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold leading-tight text-[#1d271f]">
                            বাজার দর
                        </h1>
                        <p className="text-sm text-[#8b918c]">{date}</p>
                    </div>
                </div>


                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="cursor-pointer px-3 py-2 text-sm font-semibold text-[#1d271f] hover:text-[#05893e]"
                    >
                        সাইন ইন
                    </button>
                    <button
                        type="button"
                        className="cursor-pointer rounded-lg bg-[#05893e] px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#047a38]"
                    >
                        সাইন আপ
                    </button>
                </div>
            </div>

        <Navlinks/>

        </header>
    );
};

export default Header;