import { components } from 'react-select'

const { Option } = components

const CustomOption = (props: any) => (
    <Option {...props}>
        <div className="flex items-center">
            <div className="relative">
                <img
                    src={props.data.image}
                    alt={props.data.label}
                    className="w-10 h-10 mr-2 rounded-full border border-gray-300 object-contain"
                />
                <img
                    src={`https://api.genshin.dev/elements/${props.data.vision.toLowerCase()}/icon`}
                    alt={props.data.vision}
                    className="w-4 h-4 bg-white rounded-full border border-gray-300 object-contain absolute bottom-0 right-1"
                />
            </div>
            <div className="text-black">{props.data.label}</div>
        </div>
    </Option>
)

export default CustomOption
