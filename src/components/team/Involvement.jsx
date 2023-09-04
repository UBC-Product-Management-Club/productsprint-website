import React from "react";
import PrimaryButton from "../shared/buttons/PrimaryButton"
import SecondaryButton from "../shared/buttons/SecondaryButton"

function Involvement({iconMaker, tagline, description, buttonText, buttonLink}) {
    return (
        <div className="w-[32.6rem] h-[19.5rem] flex gap-x-[2.81rem]">
            <div className="h-full">
                {iconMaker({className: "w-[4.69rem] h-[4.69rem] relative top-[3.5rem]"})}
            </div>
            <div className="flex flex-col relative leading-[199.023%]">
                <h3 className="text-[2rem] font-semibold">{tagline}</h3>
                <p className="text-[1.25rem] font-light mt-[0.88rem] mb-[3.94rem]">{description}</p>
                <a href={buttonLink}>
                    <PrimaryButton className="primary absolute bottom-6">{buttonText}</PrimaryButton>
                </a>
            </div>
        </div>
    );
}

export default Involvement;