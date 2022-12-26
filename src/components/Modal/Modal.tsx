import React, {FC} from 'react';
import './Modal.css'
interface InterfaceProps {
    active:boolean,
    setActive:any,
    children:any
}
const Modal: FC<InterfaceProps> = ({active, setActive,children}) => {
    return (
        <div className={active ? "modal active" : 'modal'} onClick={()=>{setActive(false)
            document.location.reload()}
        }>
            <div className={'modal_content'} onClick={(e)=>document.location.reload()}>
                {children}
            </div>
        </div>
    );
};

export {Modal};