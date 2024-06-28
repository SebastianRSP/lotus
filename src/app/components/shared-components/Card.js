export const Card = ({children, extras, index}) => {
    return (
        <div key={index} className={`bg-yellowLight w-full flex justify-center items-center ${extras}`}>
            {children}
        </div>
    )
}