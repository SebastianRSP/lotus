import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack"

export const PopUp = ({ isPopupVisible, closePopup }) => {

    return (
        <>
            {isPopupVisible && (
                <div className="fixed inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="gb2 border-green-500 bg-black/60 border backdrop-blur-md md:p-6 p-3 rounded-lg shadow-lg md:w-[800px] w-90p text-center">
                        <h2 className="text-lg font-bold mb-4 text-white p-3">
                            FORWARD-LOOKING STATEMENTS DISCLAIMER
                        </h2>
                        <p className="mb-6 text-white md:text-center text-justify md:text-base text-xs">
                            This website may contain certain forward-looking statements regarding Lotus Data Group., its future operations or its financial performance. Forward-looking statements involve known and unknown risks, uncertainties, and other factors which may cause the actual results, performance, or achievements of the Company to be materially different from any future results, performance, or achievements expressed or implied by the forward-looking statements. These statements are only predictions and reflect the Company’s current beliefs and expectations with respect to future events; they are based on assumptions and are subject to risk and uncertainties, and given these uncertainties, investors should not place undue reliance on these forward-looking statements. The Company disclaims any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise, except as required by law.
                        </p>
                        <DefaultBtnBlack
                            extras={'whitespace-nowrap'}
                            btnText={'I understand'}
                            closePopup={closePopup}
                            btnType={'button'}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
