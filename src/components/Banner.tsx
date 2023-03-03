export const Banner = () => {
    return (
        <div className="hero h-[520px] border-secondary border-2 rounded" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
            <div className="hero-content flex-col mt-[340px]">
                <img  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" className="border-secondary border-2 border max-w-sm h-[250px] rounded-full shadow-2xl" />
            </div>
        </div>
    )
}
