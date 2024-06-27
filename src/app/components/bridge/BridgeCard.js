export const BridgeCard = ({children, borders, paddings}) => {
    return (
        <div className={`${borders} ${paddings}`}>
            {children}
        </div>
    )
}