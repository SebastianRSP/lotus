export const Card = ({children, extras, key}) => {
    return (
        <div key={key} className={`fade-in-out w-full flex justify-center items-center ${extras}`}>
            {children}
        </div>
    )
}