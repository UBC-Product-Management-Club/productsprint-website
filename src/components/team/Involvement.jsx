import React from "react";
import PrimaryButton from "../shared/buttons/PrimaryButton"
import SecondaryButton from "../shared/buttons/SecondaryButton"

function Involvement({iconMaker, tagline, description, buttonText, buttonLink, enabled}) {
    return (
        <div className="w-[32.6rem] h-full flex flex-col">
            <div className="flex leading-[199.023%]">
                <div className="h-full">
                    {iconMaker({className: "md:w-[4.69rem] md:h-[4.69rem] w-[calc(4.69rem*0.8)] h-[calc(4.69rem*0.8)]\
                        relative top-[3rem]"})}
                </div>
                <div className="w-full h-full flex flex-col">
                    <h3 className="md:text-[2rem] text-[calc(2rem*0.8)] font-semibold">{tagline}</h3>
                    <div className="w-full flex mt-[0.88rem] mb-[3.94rem] gap-x-[2rem]">
                        <p className="w-fit h-full md:text-[1.25rem] text-[calc(1.25rem*0.8)] font-light">{description}</p>
                    </div>
                    <a href={buttonLink} className={`bg-transparent`}>
                        <PrimaryButton className={`relative bottom-[2.4rem] ${enabled ? 'primary' : 'pointer-events-none secondary'}`}>{buttonText}</PrimaryButton>
                    </a>
                </div>
            </div>
        </div>
    );
}

Involvement.defaultProps = {
    enabled: true,
  };

export default Involvement;