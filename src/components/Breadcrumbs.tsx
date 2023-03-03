
export interface breadcrumbItem {
    icon: Element,
    title: string
}

interface propsType {
    list: breadcrumbItem[]
}

export default function Breadcrumbs(props: propsType) {
    const { list } = props
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {list.map(element => {
                    return (
                        <li>
                            <a>
                                {element.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}