import { useState } from 'react'
import './exam.css'


function Component(){

    return(
        <div id='wrap'>
            <div className='main-content'>
                <div id='essay-container'>
                    <Essay/>
                </div>
                <div id='user-container'>
                    <div id='questions-container'>
                        <Question/>
                        <hr/>
                        <Question/>
                        <hr/>
                        <Question/>
                        <hr/>
                        <Question/>
                        <hr/>
                        <Question/>
                        <hr/>
                        <Question/>
                    </div>
                </div>
            </div>
        </div>
    )

}



function Essay(){
    return(
        <div id='essay-area'>
            <div id='essay-description'>
                <h1 id='NumOfQuestion'> 10~30 </h1>
                <h4 id='question'> 다음을 읽고 알맞은것을 고르시오 </h4>
            </div>
            <div id='essay-content'>
                <p>
                
디지털 시대의 대두와 함께 사회와 기술의 관계는 지속적으로 발전하고 변화하고 있습니다. 이러한 변화는 인간의 삶의 모든 측면에 영향을 미치며, 우리가 정보를 소비하고, 커뮤니케이션을 진행하며, 일상을 경험하는 방식을 근본적으로 재구성하고 있습니다. 특히, 인터넷과 모바일 기술의 급속한 발전은 정보의 접근성을 대폭 향상시켜, 지식의 민주화를 촉진하고 있습니다. 이러한 기술적 진보는 개인의 학습 방식, 업무 수행 방식, 그리고 오락을 위한 선택의 폭을 넓혔습니다.

그러나 이러한 긍정적인 변화와 함께 디지털 시대는 여러 가지 도전과제도 안고 있습니다. 개인 정보 보호와 데이터 보안은 이러한 디지털 환경에서 중요한 고려 사항이 되었습니다. 개인의 온라인 활동은 대량의 데이터를 생성하며, 이 데이터는 때때로 사용자의 동의 없이 수집되거나 부적절하게 사용될 위험이 있습니다. 이에 대한 우려는 소셜 미디어 플랫폼, 온라인 쇼핑 사이트, 심지어는 정부 기관에서도 나타나고 있습니다.

또한, 디지털 격차는 사회적, 경제적 불평등을 반영하며, 특정 인구 집단이 최신 기술에 접근하거나 이를 효율적으로 사용하는 데 있어 장벽을 경험하고 있습니다. 이는 교육, 건강 관리, 고용 기회 등에서 불평등을 심화시킬 수 있으며, 디지털 기술의 혜택을 모두가 공평하게 누릴 수 있도록 하는 것이 중요한 과제로 부상하고 있습니다.

이러한 문제에도 불구하고, 기술은 계속해서 우리 삶을 풍요롭게 하고 있습니다. 인공지능, 빅데이터, 사물인터넷(IoT), 클라우드 컴퓨팅 등의 혁신적인 기술은 새로운 산업을 창출하고, 기존 산업을 변화시키며, 사회적 문제를 해결하는 데 기여하고 있습니다. 예를 들어, 웨어러블 기기와 스마트 홈 기술은 개인의 건강 관리 방식을 변화시키고 있으며, 클라우드 기반 협업 툴은 원격 근무의 확산을 가능하게 하여, 업무와 생활의 균형을 새롭게 정의하고 있습니다.

결국, 디지털 시대는 우리에게 많은 기회와 도전을 동시에 제공하고 있습니다. 이러한 기술적 변화를 긍정적으로 활용하고, 동시에 발생할 수 있는 위험을 최소화하기 위해서는, 정부, 기업, 개인이 협력하여 책임감 있는 기술 사용과 디지털 문화의 발전을 위한 정책과 규제를 모색해야 합니다. 이는 디지털 시대를 살아가는 우리 모두에게 중요한 책임이자, 기회입니다.

디지털 시대의 대두와 함께 사회와 기술의 관계는 지속적으로 발전하고 변화하고 있습니다. 이러한 변화는 인간의 삶의 모든 측면에 영향을 미치며, 우리가 정보를 소비하고, 커뮤니케이션을 진행하며, 일상을 경험하는 방식을 근본적으로 재구성하고 있습니다. 특히, 인터넷과 모바일 기술의 급속한 발전은 정보의 접근성을 대폭 향상시켜, 지식의 민주화를 촉진하고 있습니다. 이러한 기술적 진보는 개인의 학습 방식, 업무 수행 방식, 그리고 오락을 위한 선택의 폭을 넓혔습니다.

그러나 이러한 긍정적인 변화와 함께 디지털 시대는 여러 가지 도전과제도 안고 있습니다. 개인 정보 보호와 데이터 보안은 이러한 디지털 환경에서 중요한 고려 사항이 되었습니다. 개인의 온라인 활동은 대량의 데이터를 생성하며, 이 데이터는 때때로 사용자의 동의 없이 수집되거나 부적절하게 사용될 위험이 있습니다. 이에 대한 우려는 소셜 미디어 플랫폼, 온라인 쇼핑 사이트, 심지어는 정부 기관에서도 나타나고 있습니다.

또한, 디지털 격차는 사회적, 경제적 불평등을 반영하며, 특정 인구 집단이 최신 기술에 접근하거나 이를 효율적으로 사용하는 데 있어 장벽을 경험하고 있습니다. 이는 교육, 건강 관리, 고용 기회 등에서 불평등을 심화시킬 수 있으며, 디지털 기술의 혜택을 모두가 공평하게 누릴 수 있도록 하는 것이 중요한 과제로 부상하고 있습니다.

이러한 문제에도 불구하고, 기술은 계속해서 우리 삶을 풍요롭게 하고 있습니다. 인공지능, 빅데이터, 사물인터넷(IoT), 클라우드 컴퓨팅 등의 혁신적인 기술은 새로운 산업을 창출하고, 기존 산업을 변화시키며, 사회적 문제를 해결하는 데 기여하고 있습니다. 예를 들어, 웨어러블 기기와 스마트 홈 기술은 개인의 건강 관리 방식을 변화시키고 있으며, 클라우드 기반 협업 툴은 원격 근무의 확산을 가능하게 하여, 업무와 생활의 균형을 새롭게 정의하고 있습니다.

결국, 디지털 시대는 우리에게 많은 기회와 도전을 동시에 제공하고 있습니다. 이러한 기술적 변화를 긍정적으로 활용하고, 동시에 발생할 수 있는 위험을 최소화하기 위해서는, 정부, 기업, 개인이 협력하여 책임감 있는 기술 사용과 디지털 문화의 발전을 위한 정책과 규제를 모색해야 합니다. 이는 디지털 시대를 살아가는 우리 모두에게 중요한 책임이자, 기회입니다.

디지털 시대의 대두와 함께 사회와 기술의 관계는 지속적으로 발전하고 변화하고 있습니다. 이러한 변화는 인간의 삶의 모든 측면에 영향을 미치며, 우리가 정보를 소비하고, 커뮤니케이션을 진행하며, 일상을 경험하는 방식을 근본적으로 재구성하고 있습니다. 특히, 인터넷과 모바일 기술의 급속한 발전은 정보의 접근성을 대폭 향상시켜, 지식의 민주화를 촉진하고 있습니다. 이러한 기술적 진보는 개인의 학습 방식, 업무 수행 방식, 그리고 오락을 위한 선택의 폭을 넓혔습니다.

그러나 이러한 긍정적인 변화와 함께 디지털 시대는 여러 가지 도전과제도 안고 있습니다. 개인 정보 보호와 데이터 보안은 이러한 디지털 환경에서 중요한 고려 사항이 되었습니다. 개인의 온라인 활동은 대량의 데이터를 생성하며, 이 데이터는 때때로 사용자의 동의 없이 수집되거나 부적절하게 사용될 위험이 있습니다. 이에 대한 우려는 소셜 미디어 플랫폼, 온라인 쇼핑 사이트, 심지어는 정부 기관에서도 나타나고 있습니다.

또한, 디지털 격차는 사회적, 경제적 불평등을 반영하며, 특정 인구 집단이 최신 기술에 접근하거나 이를 효율적으로 사용하는 데 있어 장벽을 경험하고 있습니다. 이는 교육, 건강 관리, 고용 기회 등에서 불평등을 심화시킬 수 있으며, 디지털 기술의 혜택을 모두가 공평하게 누릴 수 있도록 하는 것이 중요한 과제로 부상하고 있습니다.

이러한 문제에도 불구하고, 기술은 계속해서 우리 삶을 풍요롭게 하고 있습니다. 인공지능, 빅데이터, 사물인터넷(IoT), 클라우드 컴퓨팅 등의 혁신적인 기술은 새로운 산업을 창출하고, 기존 산업을 변화시키며, 사회적 문제를 해결하는 데 기여하고 있습니다. 예를 들어, 웨어러블 기기와 스마트 홈 기술은 개인의 건강 관리 방식을 변화시키고 있으며, 클라우드 기반 협업 툴은 원격 근무의 확산을 가능하게 하여, 업무와 생활의 균형을 새롭게 정의하고 있습니다.

결국, 디지털 시대는 우리에게 많은 기회와 도전을 동시에 제공하고 있습니다. 이러한 기술적 변화를 긍정적으로 활용하고, 동시에 발생할 수 있는 위험을 최소화하기 위해서는, 정부, 기업, 개인이 협력하여 책임감 있는 기술 사용과 디지털 문화의 발전을 위한 정책과 규제를 모색해야 합니다. 이는 디지털 시대를 살아가는 우리 모두에게 중요한 책임이자, 기회입니다.
                </p>
            </div>
        </div>
    )
}


function Question(){
    const content = ["1. 글에대해 여러 전문가의 의견을 대고 비교하여 쓰기", "2. ", "3", "4", "5"]

    return(
        <div>
            <div className='side-content'>
                <div className='NumAndQ'>
                    <div>
                        <h1 className='Question-number'>10.</h1>
                    </div>
                    <h3 className='Question'>다음 글의 특징에 대해 옳은것을 고르시오</h3>
                </div>
                <div className='ButtonsQuestion'>
                    <OptionButtons content={content}/>
                </div>
            </div>
        </div>
    )
}

function OptionButtons(props) {
    const [SelectedOption, SelectOption] = useState(null);

    return(
        <div className='Options-set'>
            <button 
            className={`option-button ${ SelectedOption === 1 ? "option-button-on":"option-button-off" }`}
            onClick={() => SelectOption(1)} >{ props.content[0] }

            </button>
            <button 
            className={`option-button ${ SelectedOption === 2 ? "option-button-on":"option-button-off" }`}
            onClick={() => SelectOption(2)} >{ props.content[1] }

            </button>
            <button 
            className={`option-button ${ SelectedOption === 3 ? "option-button-on":"option-button-off" }`}
            onClick={() => SelectOption(3)} >{ props.content[2] }

            </button>
            <button 
            className={`option-button ${ SelectedOption === 4 ? "option-button-on":"option-button-off" }`}
            onClick={() => SelectOption(4)} >{ props.content[3] }

            </button>
            <button 
            className={`option-button ${ SelectedOption === 5 ? "option-button-on":"option-button-off" }`}
            onClick={() => SelectOption(5)} >{ props.content[4] }

            </button>
        </div>
    )
}





export default Component;