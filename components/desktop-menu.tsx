import NavLink from "./nav-link";

export default function DesktopMenu({ menuItems }: { menuItems: {name: string, link: string}[]}) {
  return (
    <nav className="my-auto text-xl lg:inline-block hidden">
      <ul className="flex flex-wrap sm:gap-16">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

