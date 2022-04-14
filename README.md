# Work-Day-Scheduler







### How to Use
Click in the text area on the desired time and type what information you need.  At the end of that time slot there will be a blue button to save your information for later use.  Just click on the button and thats it your all done, now you can create multiple notes for yourself to keep on track with your busy life. 


### Credits
* https://www.google.com/search?q=what+is+col-md-1&tbm=isch&source=iu&ictx=1&vet=1&fir=3-SwwdkomlwtUM%252CNVkTsxMgB54zVM%252C_&usg=AI4_-kRjRu9B80f64uKMeV3pMZfQ2U7u4g&sa=X&ved=2ahUKEwiNwa33wY33AhXJD0QIHajeBCQQ9QF6BAgKEAE&biw=1366&bih=649&dpr=1#imgrc=3-SwwdkomlwtUM

*https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/

*https://fontawesome.com/v5/icons/save?s=solid

*https://momentjs.com/







   // Creates cells
     for (r = 0; r < cellline; r++) {
     let time = document.createElement("div");
     container.appendChild(time).className = "timer";
    };
 };

Grid is made up of 9rows and 9 colums

// Create columns
function makeColumns(cellNum) {
    for (i = 0; i < row.length; i++) {
        for (x = 0; x < cellNum; x++) {
            let newTime = document.createElement("div");
            rows[x].appendChild(newTime).className = "timer";
        };

    };
};





                      </div>
                  <div class="col">
                        One of three columns
                      </div>
                  <div class="col">
                       
                      </div>
                    </div>
                  <div class="row align-items-center">
                  <div class="col">
                        1:00pm
                      </div>
                  <div class="col">
                        One of three columns
                      </div>
                  <div class="col">






// Creating a grid sized 9x9
function agenda() {
    makeRows(9);
    makeColumns(9);
function makeRows(rowline) {
    // Creates rows
       for (r = 0; r < rowline; r++) {      
       let row = document.createElement("div");
       container.appendChild(row).className = "gridRow";
      };
  };
}; 


