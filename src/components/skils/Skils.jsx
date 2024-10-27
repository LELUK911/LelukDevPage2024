import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Icona circolare
import { backEnd, blockchainSkils, frontEndSkils } from "./blockchainSkils";


export const Skils = () => {

    const RenderSkyls = ({ title, bar }) => {
        return (
            <div className=" space-y-4">
                <h4 className=" text-xl font-semibold text-left text-blue-900 mt-4">
                    <FontAwesomeIcon icon={faCircle} className="text-blue-900 text-xs mr-2" />
                    {title}
                </h4>
                <ProgressBar
                    completed={bar}
                    bgColor="#1e3a8a"
                    baseBgColor="#D3D3D3"
                    className="mt-2" />
            </div>
        )
    }










    return (
        <div className="grid grid-col-1 md:grid-cols-3 col-span-full space-x-5">

            <div className="bg-blue-200 shadow-md rounded-lg p-6 mt-20 hover:shadow-xl transition-all">
                <h3 className=" font-bold text-blue-900 text-5xl text-center mb-8">Blockchain</h3>
                {blockchainSkils.map(skil => {
                    return (
                        <RenderSkyls key={skil.id} title={skil.title} bar={skil.bar} />
                    )
                })}
            </div>

            <div className="bg-blue-200 shadow-md rounded-lg p-6 mt-20 hover:shadow-xl transition-all">
                <h3 className=" font-bold text-blue-900 text-5xl text-center mb-8">Front-end</h3>
                {frontEndSkils.map(skil => {
                    return (
                        <RenderSkyls key={skil.id} title={skil.title} bar={skil.bar} />
                    )
                })}
            </div>

            <div className="bg-blue-200 shadow-md rounded-lg p-6 mt-20 hover:shadow-xl transition-all">
                <h3 className=" font-bold text-blue-900 text-5xl text-center mb-8">Back-end</h3>
                {backEnd.map(skil => {
                    return (
                        <RenderSkyls key={skil.id} title={skil.title} bar={skil.bar} />
                    )
                })}
            </div>

        </div>
    )
}
