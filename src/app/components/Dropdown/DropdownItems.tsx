export default function DropdownItems({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="absolute right-0 overflow-hidden z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            {children}
        </div>
    )
}