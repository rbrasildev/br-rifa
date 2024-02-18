export default function DropdownRoot({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative inline-block text-left">
            {children}
        </div>
    )
}