/**
 * Company Name: Platform 45
 * Description: Front end assessment
 * Version: 0.1
 * Author: Kundai Mazina
 *
 * This is the javascript file for supporting the Banana Republic site.
 */
 
document.addEventListener(`DOMContentLoaded`, e => { 
    
    // Panel display
    document.getElementById(`main-link`).addEventListener(`click`, e =>{ 
        e.preventDefault();       
        displayPanel(); 
    });
    document.getElementById(`para-link`).addEventListener(`click`, e =>{ 
        e.preventDefault(); 
    });

    // Reset radio buttons
    document.getElementById(`btn-reset`).addEventListener(`click`, e =>{ 
        switchRadionSelected(`imgenmale`, `mars-symbol.svg`, false);
        switchRadionSelected(`imgenfemale`, `venus-symbol.svg`, false);       
        switchRadionSelected(`imgmemclassic`, `card.svg`, false);
        switchRadionSelected(`imgmemsilver`, `card.svg`, false); 
        switchRadionSelected(`imgmemgold`, `card.svg`, false); 
    });

    // Radio buttons events
    document.getElementById(`genmale`).addEventListener(`click`, e =>{ 
        e.preventDefault();
       if ( document.getElementById('genmale').checked) {
            switchRadionSelected(`imgenmale`, `mars-symbol--white.svg`, true);
            switchRadionSelected(`imgenfemale`, `venus-symbol.svg`, false);            
       }          
    });

    document.getElementById(`genfemale`).addEventListener(`click`, e =>{ 
        e.preventDefault();
       if ( document.getElementById('genfemale').checked) {
            switchRadionSelected(`imgenfemale`, `venus-symbol--white.svg`, true);
            switchRadionSelected(`imgenmale`, `mars-symbol.svg`, false);            
       }          
    });

    document.getElementById(`memclassic`).addEventListener(`click`, e =>{ 
        e.preventDefault();
       if ( document.getElementById('memclassic').checked) {
            switchRadionSelected(`imgmemclassic`, `card--white.svg`, true);
            switchRadionSelected(`imgmemsilver`, `card.svg`, false); 
            switchRadionSelected(`imgmemgold`, `card.svg`, false);            
       }          
    });

    document.getElementById(`memsilver`).addEventListener(`click`, e =>{ 
        e.preventDefault();
       if ( document.getElementById('memsilver').checked) {
            switchRadionSelected(`imgmemclassic`, `card.svg`, false);
            switchRadionSelected(`imgmemsilver`, `card--white.svg`, true); 
            switchRadionSelected(`imgmemgold`, `card.svg`, false);            
       }          
    });

    document.getElementById(`memgold`).addEventListener(`click`, e =>{ 
        e.preventDefault();
       if ( document.getElementById('memgold').checked) {
            switchRadionSelected(`imgmemclassic`, `card.svg`, false);
            switchRadionSelected(`imgmemsilver`, `card.svg`, false); 
            switchRadionSelected(`imgmemgold`, `card--white.svg`, true);            
       }          
    });
  }, false);

// Switches between the two right panels
displayPanel = () => {   
    let hiddenPanel = document.getElementById(`column-right`);
    let hiddenPanel2 = document.getElementById(`column-right-p2`); 
    let btnArrow = document.getElementById(`img-main-link`);
    if (hiddenPanel2.classList.contains(`hidden`)) {
   
        hiddenPanel.classList.add(`hidden`);
        hiddenPanel2.classList.remove(`hidden`);

    } else if (hiddenPanel.classList.contains(`hidden`)) {
   
        hiddenPanel.classList.remove(`hidden`);
        hiddenPanel2.classList.add(`hidden`);
    }
    // Button rotation
    if (btnArrow.classList.contains(`next-link`)) {   
        
        btnArrow.classList.remove(`next-link`)
        btnArrow.classList.add(`prev-link`);

    } else if (btnArrow.classList.contains(`prev-link`))  {

        btnArrow.classList.remove(`prev-link`)
        btnArrow.classList.add(`next-link`);
    } else {
        btnArrow.classList.add(`prev-link`);
    }
}

// Click event for radio buttons
switchRadionSelected = (selectedId, image, selected) => {
    let radioSelected = document.getElementById(selectedId);
    if (radioSelected.classList.contains(`radio-custom`) && selected) {

        radioSelected.classList.remove(`radio-custom`);
        radioSelected.classList.add(`radio-custom-selected`);
        radioSelected.src = `assets/images/`+image;
    } else {
        
        radioSelected.classList.remove(`radio-custom-selected`);
        radioSelected.classList.add(`radio-custom`);
        radioSelected.src = `assets/images/`+image;
    }
}