
import { useState } from "react";
import './exam.css'

export default function Component() {

  return (
    <div key="1" className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="md:w-1/2 space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl text-center">The Long Essay</h2>
        <div className="h-auto w-full max-w-lg rounded-md border text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400 text-left overflow-y-scroll p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at
            dui semper, sit amet blandit nisi suscipit. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Phasellus at nunc eget ligula tristique commodo in sit amet lacus. Sed
            venenatis, nisl sit amet tristique condimentum, diam magna aliquet orci, sed vulputate magna nisi at neque.
            Sed auctor molestie metus, at condimentum elit auctor in. Quisque in convallis metus, vitae luctus sapien.
            Nunc in condimentum magna. Donec placerat lorem id nisl convallis, id venenatis orci lacinia. Aliquam erat
            volutpat. Quisque ante quam, lobortis at dui quis, lacinia vestibulum nisi. Vestibulum eu augue id mauris
            venenatis tincidunt. Phasellus sit amet rutrum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit amet blandit nisi suscipit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at
            nunc eget ligula tristique commodo in sit amet lacus. Sed venenatis, nisl sit amet tristique condimentum, diam
            magna aliquet orci, sed vulputate magna nisi at neque. Sed auctor molestie metus, at condimentum elit auctor
            in. Quisque in convallis metus, vitae luctus sapien. Nunc in condimentum magna. Donec placerat lorem id nisl
            convallis, id venenatis orci lacinia. Aliquam erat volutpat. Quisque ante quam, lobortis at dui quis, lacinia
            vestibulum nisi. Vestibulum eu augue id mauris venenatis tincidunt. Phasellus sit amet rutrum tellus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui
            semper, sit amet blandit nisi suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus at nunc eget ligula tristique commodo in sit amet lacus. Sed venenatis,
            nisl sit amet tristique condimentum, diam magna aliquet orci, sed vulputate magna nisi at neque. Sed auctor
            molestie metus, at condimentum elit auctor in. Quisque in convallis metus, vitae luctus sapien. Nunc in
            condimentum magna. Donec placerat lorem id nisl convallis, id venenatis orci lacinia. Aliquam erat volutpat.
            Quisque ante quam, lobortis at dui quis, lacinia vestibulum nisi. Vestibulum eu augue id mauris venenatis
            tincidunt. Phasellus sit amet rutrum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed euismod eu lorem et ultricies. In porta lorem at
            dui semper, sit amet blandit nisi suscipit. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Phasellus at nunc eget ligula tristique commodo in sit amet lacus. Sed
            venenatis, nisl sit amet tristique condimentum, diam magna aliquet orci, sed vulputate magna nisi at neque.
            Sed auctor molestie metus, at condimentum elit auctor in. Quisque in convallis metus, vitae luctus sapien.
            Nunc in condimentum magna. Donec placerat lorem id nisl convallis, id venenatis orci lacinia. Aliquam erat
            volutpat. Quisque ante quam, lobortis at dui quis, lacinia vestibulum nisi. Vestibulum eu augue id mauris
            venenatis tincidunt. Phasellus sit amet rutrum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit amet blandit nisi suscipit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at
            nunc eget ligula tristique commodo in sit amet lacus. Sed venenatis, nisl sit amet tristique condimentum, diam
            magna aliquet orci, sed vulputate magna nisi at neque. Sed auctor molestie metus, at condimentum elit auctor
            in. Quisque in convallis metus, vitae luctus sapien. Nunc in condimentum magna. Donec placerat lorem id nisl
            convallis, id venenatis orci lacinia. Aliquam erat volutpat. Quisque ante quam, lobortis at dui quis, lacinia
            vestibulum nisi. Vestibulum eu augue id mauris venenatis tincidunt. Phasellus sit amet rutrum tellus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui
            semper, sit amet blandit nisi suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus at nunc eget ligula tristique commodo in sit amet lacus. Sed venenatis,
            nisl sit amet tristique condimentum, diam magna aliquet orci, sed vulputate magna nisi at neque. Sed auctor
            molestie metus, at condimentum elit auctor in. Quisque in convallis metus, vitae luctus sapien. Nunc in
            condimentum magna. Donec placerat lorem id nisl convallis, id venenatis orci lacinia. Aliquam erat volutpat.
            Quisque ante quam, lobortis at dui quis, lacinia vestibulum nisi. Vestibulum eu augue id mauris venenatis
            tincidunt. Phasellus sit amet rutrum tellus.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-1/3 justify-between">
        <div className=" py-20 space-y-10  flex flex-col items-left justify-center justify-between ">
            <Question_area/>
            <Question_area/>
            <Question_area/>
            <Question_area/>
            <Question_area/>
            <Question_area/>
            <Question_area/>
            <Question_area/>
        </div>
        <div id="control_container" className="flex justify-between pb-10">
            <button
                className={`border rounded-md py-2 px-4 text-left `}
            >
                previous
            </button>
            <button
                className={`border rounded-md py-2 px-4 text-left `}
            >
                next
            </button>
        </div>
      </div>
      
    </div>
  );
}




function Question_area(){
    const [selectedOption, setSelectedOption] = useState(null);
    const [Question, setQuestion] = useState("첫번째 문제입니다 다음중 옳은것을 고르시오");

    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">The Question</h2>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                {Question}
            </p>
            <div className="flex space-y-2 flex-col">
                <button
                    className={`border rounded-md py-2 px-4 text-left ${
                    selectedOption === 1 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                    }`}
                    onClick={() => setSelectedOption(1)}
                >
                    1 - 영수: 철수는 다른사람들을 위해 사람 한명은 희생해야 한다면서도 자기자신은 아니라고 하는걸 보니 아주 이기적인 사람임을 알수 있구나!
                </button>
                <button
                    className={`border rounded-md py-2 px-4 text-left ${
                    selectedOption === 2 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                    }`}
                    onClick={() => setSelectedOption(2)}
                >
                    2 - Option 2
                </button>
                <button
                    className={`border rounded-md py-2 px-4 text-left ${
                    selectedOption === 3 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                    }`}
                    onClick={() => setSelectedOption(3)}
                >
                    3 - Option 3
                </button>
                <button
                    className={`border rounded-md py-2 px-4 text-left ${
                    selectedOption === 4 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                    }`}
                    onClick={() => setSelectedOption(4)}
                >
                    4 - Option 4
                </button>
                <button
                    className={`border rounded-md py-2 px-4 text-left ${
                    selectedOption === 5 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                    }`}
                    onClick={() => setSelectedOption(5)}
                >
                    5 - Option 5
                </button>
            </div>
        </div>
    )
}