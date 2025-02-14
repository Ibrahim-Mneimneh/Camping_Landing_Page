import Image from "next/image"

type ButtonProps={
    type: "button" | "submit",
    title: string,
    icon: string,
    variant: "btn_dark_green" | "btn_white" | "btn_white_text" | "btn_green" | "btn_dark_green_outline",

}

function Button({type,title,icon,variant}:ButtonProps) {
  return (
    <button type={type} className={`flexCenter cursor-pointer gap-3 rounded-full border ${variant}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button