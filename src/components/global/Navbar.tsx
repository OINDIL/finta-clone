function Navbar() {
  const navItems = [
    {
      href: "/",
      title: "Founders",
    },
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/login",
      title: "Log In",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex justify-between items-center px-8 py-3">
        <img
          src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg"
          alt="logo"
        />

        <div className="flex items-center gap-2">
          {navItems.map((nav, index) => (
            <a
              href={nav.href}
              key={index}
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              {nav.title}
            </a>
          ))}

          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-md text-shadow-lg shadow-md">
            Start free trial
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
