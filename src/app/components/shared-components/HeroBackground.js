export const HeroBackground = ({children, bgColor}) => {
    return (
        <section className="h-available relative">
            <div id="home-hero-bg" className={`${bgColor} h-available rounded-lg relative`}>
                {children}
            </div>
        </section>
    )
}