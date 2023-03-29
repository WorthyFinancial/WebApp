import { useState } from "react";
import TransitionCard from "./TransactionCard";


const SidePanel = () => {


    const [active, setActive] = useState(`modal`);

    const handleToggle = (e) => {
        setActive(active => !active)
    }

    let toggleClass = active ? 'active'  : 'modal';


    return(
       <div className={`side-panel ${toggleClass}`} id="cardCtn"> 
            <div style={{width: 300}}>
                <div className={`closeBtn`} onClick={handleToggle}>
                &#x2715;
                </div>
                <TransitionCard />
            </div>
        </div>
    )
}

function CloseModal(){
    document.getElementById(cardCtn).classList.remove('active');
    document.getElementById(cardCtn).classList.add('modal');

}
export default SidePanel;