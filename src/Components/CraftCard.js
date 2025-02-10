import { useEffect, useState } from "react"
import Chance from "chance";

function CraftCard()
{
    var my_chance = new Chance();
    const reqProg = 10;
    const progressSkill = 1;
    const reqQual = 120;
    const qualSkill = 10
    const onePercent = reqQual/100;

    const [progress, setProgress] = useState(0);
    const [quality, setQuality] = useState(0);

    const handleChangeProgress = () => {
        if (progress < reqProg) setProgress(progress+progressSkill);
        console.log(my_chance.floating({min: 0, max: 100, fixed:2}) < quality/onePercent)
    }
    
    const handleChangeQuqlity = () => {
        if (quality < reqQual) setQuality(quality+qualSkill);
    }


    return (
        <div>
            <p>Прогресс {progress} из {reqProg}. Шанс изготовить предмет высокого качвества равен {quality/onePercent}%. Качество {quality} из {reqQual}</p>
            <button onClick={handleChangeProgress}>Сделать</button>
            <button onClick={handleChangeQuqlity}>Повысить</button>
        </div>
    )
}

export default CraftCard;