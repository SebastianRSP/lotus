import { DefaultBtn } from "../buttons/DefaultBtn";

export const AITool = () => {
    return (
        <div className="px-40 mt-28 text-right bg-gray-light">
            <div className="flex flex-col gap-16 justify-end">
                <h4 className="text-7xl font-medium leading-84 text-black z-20">
                    TAILOR THE BRIDGE <br />
                    TO YOUR NEEDS<br />
                    WITH BESPOKE<br />
                    DATA TOOLS
                </h4>
                <div className="flex justify-end">
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