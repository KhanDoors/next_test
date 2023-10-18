import Link from "next/link";

const Header = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Experience", href: "/experience" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div className="border-b-[1px]">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
        <Link
          href={"/"}
          className="uppercase font-semibold underline decoration-[1px] underline-offset-2 hover:text-blue-600"
        >
          Header
        </Link>
        <div className="hidden md:inline-flex items-center gap-7">
          {navigation.map((item) => (
            <Link className="relative" key={item?.title} href={item?.href}>
              {item?.title}
              <span className="w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black" />
            </Link>
          ))}
        </div>
        <p>button</p>
      </div>
    </div>
  );
};

export default Header;
