import React from 'react';
import {Image} from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import Icon from '@mdi/react';
// import { Icon } from 'semantic-ui-react';
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = 
// "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

// const click = async (e) => {
//     // Prevents page reload on wrongs creds
//     console.log("clicked")
// };

const CustomButton = (props) => {
    const imageUrl = "../../assets/images/" + props.image + ".png";
    return (
        <IconButton className="mb-1"
            // style = {{minWidth:"16px", height:props.label ? '38px' : '28px', color:'#009688'}}
            style = {{minWidth:"25px", height:props.label ? '36px' : '22px', color:'#212529'}}
            onClick={props.click}
            size = "large"
        >
            <div>
                {props.image && 
                    <div className="">
                        <Image style={{margin: '0 auto', width:'11px', height:'11px'}} src={imageUrl} alt='no image' />
                    </div>
                }
                {props.icon && 
                    // <i className="ma-0"> mdi-{ props.icon }</i>
                    // <Icon name={props.icon} />
                    <Icon path={props.icon}
                        size={0.8}
                        horizontal
                        vertical
                        rotate={180}
                        color="#212529"
                        />
                }
                <div className="label-text">{props.label}</div>
            </div>
        </IconButton>
  );
}

export default CustomButton; // connect wrapper function in use 