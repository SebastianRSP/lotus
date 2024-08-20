export const SolutinoDetails = ({count, heading, description, key}) => {
    return (
        <div key={key} className="flex flex-col">
            <span className="text-lg font-extralight tracking-space90">{count}</span>
            <h5 className="text-2xl font-bold tracking-space12 uppercase">{heading}</h5>
            <p className="">
                {description}
            </p>
        </div>
    )
}