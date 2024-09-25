import ezyLogo from './assets/ezy.png';
export default function Header() {
    return (
        <nav className="flex py-6 fixed top-0 w-full !bg-[#191D26] z-50">
            <div className=" ml-20 flex items-center justify-between gap-x-6">
                <a href="/">
                    <img
                        className="h-[45px]"
                        src={ezyLogo}
                        alt="EzyToDo Logo"
                    />
                </a>
            </div>
        </nav>
    )
}

