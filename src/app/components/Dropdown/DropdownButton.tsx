import { ButtonHTMLAttributes, ElementType } from "react"

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ElementType,
    iconClass?: string
}

export default function DropdownButton({icon: Icon,iconClass, ...rest}: DropdownButtonProps) {
    return (
        <button {...rest} type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <Icon className={iconClass}/>
        </button>
    )
}

