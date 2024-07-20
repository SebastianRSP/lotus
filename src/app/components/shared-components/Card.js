export const Card = ({children, extras, key}) => {
    return (
        <div key={key} className={`bg-yellowLight w-full flex justify-center items-center ${extras}`}>
            {children}
        </div>
    )
}