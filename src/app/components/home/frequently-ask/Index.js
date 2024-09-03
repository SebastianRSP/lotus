import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const FrequentlyAsked = () => {
    return (
        <div className="2xl:px-30 px-10 py-18">
            <div className="flex justify-center">
                <h4 className="2xl:text-5xl text-2xl font-medium">
                    Frequently Asked Questions
                </h4>
            </div>
            <div className="pt-14">
                <div className="border-y py-2 border-[#ADADAD]">
                    <div className="flex justify-between items-center">
                        <span className="2xl:text-2xl text-xl font-300">
                            What is the Bridge<sup>TM</sup>?
                        </span>
                        <span className="w-3 h-4">
                            <FontAwesomeIcon icon={faArrowUp} className="text-green" size="sm" />
                        </span>
                    </div>
                    <div className="my-5 bg-green rounded-lg 2xl:py-7 py-5 2xl:px-8 px-6 bg-opacity-50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
            </div>
        </div>
    )
}