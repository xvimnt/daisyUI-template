interface propsType {
    label: string,
    type: string,
    value: string,
    handleChange: any,
    placeholder: string,
}
export const InputWithLabel = (props: propsType) => {
    const { label, value, handleChange, placeholder, type } = props
    return (
        <div className="form-control w-full max-w-xs my-2">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                value={value}
                onChange={handleChange}
                type={type} placeholder={placeholder} className="input input-bordered input-primary w-full max-w-xs rounded-3xl" />
        </div>
    )
}
