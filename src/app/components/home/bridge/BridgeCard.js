export const BridgeCard = ({ children }) => {
    return (
        <div className="bridge-card bg-black border relative border-green w-full mix-blend-normal h-auto rounded-lg">
            <div className="filter absolute inset-0 bg-black/5 backdrop-blur-10 rounded-lg bg-no-repeat bg-origin-padding" />
            <div className="h-full rounded-lg relative z-10">
                {children}
            </div>
        </div>
    )
}