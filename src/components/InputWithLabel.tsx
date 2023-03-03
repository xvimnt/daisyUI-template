interface propsType {
    label: string,
    value: string,
    handleChange: any,
    placeholder: string,
}
export const InputWithLabel = (props: propsType) => {
    const { label, value, handleChange, placeholder } = props
    return (
        <div className="form-control w-full max-w-xs my-2">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                value={value}
                onChange={handleChange}
                type="text" placeholder={placeholder} className="input input-bordered input-primary w-full max-w-xs rounded-3xl" />
        </div>
    )
}
