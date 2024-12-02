export const HeroBackground = ({ children, bgColor }) => {
    return (
        <section className="h-full relative">
            <div id="home-hero-bg" className={`${bgColor} h-full rounded-lg relative`}>
                {children}
            </div>
        </section>
    )
}