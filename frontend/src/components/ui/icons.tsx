import { FaArrowRight } from 'react-icons/fa';

interface Icons{
    size:"sm"|"md"|"lg"   
}

const iconStyles={
    "sm":"size-4" , 
    "md":"size-6" , 
    "lg":"size-8"
}

export function ArrowIcon(prop:Icons){
    return <FaArrowRight className={`${iconStyles[prop.size]}`} />
}