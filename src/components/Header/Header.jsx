const Header = () => {
    return (
        <div className="container flex justify-between mx-auto px-5 lg:px-10 py-5 lg:py-10">
            <h1 className="text-3xl lg:text-5xl font-black text-sky-300">Loge Aci Dot Com </h1>
            <button className="relative inline-block h-14 w-32 text-xl text-white duration-300 before:absolute before:inset-0 before:-z-10 before:block before:bg-sky-400 before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:bg-sky-700 after:duration-500 hover:before:skew-y-12 hover:after:-skew-y-12">Sign Up</button>
        </div>
    );
};

export default Header;