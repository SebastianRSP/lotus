import { DefaultBtn } from "../buttons/DefaultBtn";

export const AITool = () => {
    return (
        <div className="xl:px-40 md:px-9 px-7 xl:mt-40 md:mt-20 sm:mt-14 mt-9 text-right bg-gray-light">
            <div className="flex flex-col gap-16 md:justify-end justify-start">
                <h4 className="xl:text-7xl md:5xl sm:text-4xl text-3xl md:mt-10 md:self-end self-start md:text-right text-left font-medium xl:leading-84 lg:leading-43 leading-40 text-black z-20">
                    TAILOR THE BRIDGE <br />
                    TO YOUR NEEDS <br />
                    WITH BESPOKE <br />
                    DATA TOOLS <br />
                </h4>
                <div className="flex md:justify-end justify-start">
                    <DefaultBtn
                        btnText={'Get Started'}
                        btnType={'button'}
                        extras={'w-fit'}
                    />
                </div>
            </div>
        </div>
    )
}