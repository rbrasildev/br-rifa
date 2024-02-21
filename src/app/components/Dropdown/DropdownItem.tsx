import { ElementType } from 'react';

interface DropdownItemProps {
  text: string;
  link: string;
  icon?: ElementType;
  iconClass?: string;
}

export default function DropdownItem({
  icon: Icon,
  iconClass,
  text,
  link
}: DropdownItemProps) {
  return (
    <div
      className="py-1 flex items-center gap-1 p-3 text-xl text-black hover:bg-slate-100 pr-10 cursor-pointer whitespace-nowrap"
      role="none"
    >
      {Icon && <Icon className={iconClass} />}
      <a
        href={link}
        className="text-gray-700 block py-2 text-sm"
        role="menuitem"
        tabIndex={-1}
        id="menu-item-0"
      >
        {text}
      </a>
    </div>
  );
}
