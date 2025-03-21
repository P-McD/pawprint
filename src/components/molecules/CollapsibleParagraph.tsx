import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { H3Title, H4Title } from "../bosons/TitleStyles";

type CollapsibleProps = {
        //isOpen: boolean;
        title: string;
        children: string;
    }
export const CollapsibleParagraph = ({children, title} : CollapsibleProps) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [elementHeight, setElementHeight] = useState( isOpen ? undefined : 0)

    //TODO: Make this not expand every grid item
    const handleParagraphOpen = () => {
        setIsOpen((curr) => !curr);
      };
    return (
        <div>
             <div className="border-bottom flex justify-between">
            <H4Title title={title}></H4Title>
            <button type="button" className="btn" onClick={handleParagraphOpen}>
              {!isOpen ? (
                <AddIcon/> 
              ) : (
                <RemoveIcon />
              )}
            </button>
        </div>
        <div className="border-bottom">
          <div>{isOpen && <div>{children}</div>}</div>
        </div>
        </div>
        
        
    )

}