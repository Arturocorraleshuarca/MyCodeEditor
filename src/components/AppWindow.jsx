import {Rnd }from 'react-rnd'
import { FiMaximize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { HiMiniArrowDownLeft } from "react-icons/hi2";
import { LuMinimize2 } from "react-icons/lu";


function AppWindow({defaults, children, title}){

    return(
        <Rnd   
          default={{
            x: defaults.x,
            y: defaults.y,
            width: defaults.width,
            height: defaults.height,
          }} 
          bounds='window'
          className='app-window-box'
          dragHandleClassName="app-window-header"
          >
            <div className='app-window' >
                <div className='app-window-header' >
                    {title}
                    <div className="app-window-controls">
                        <span className='minimizar'><HiMiniArrowDownLeft color="white" size={14} /></span>
                        <span className='maximizar'><FiMaximize2 color="white" size={12}/></span>
                        <span className='cerrar'><IoClose color="white" size={14}/></span>
                    </div>
                </div>
                {children}
            </div>

        </Rnd>
    )
}

export default AppWindow;
