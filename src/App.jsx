import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import SelectList from './SelectList';

const App = () => {
  const todayDate = new Date();
  const data = [
    {
    student_val:"",
    date_time:todayDate
    }
  ];
  const [count,setCount] = useState(data);

  // const deleteCount= (id) => {
  //   const number = id === 0 ? 0: (id-1);
  //    setCount((preVal)=>{
  //     return preVal.filter((elem,index)=>{
  //       return index !== number;
  //     })
  //   })
  // }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form_wrapper">
           
            {
              count.map((elem,index)=>{
                return (
                  <SelectList
                   key={index}
                   id={index}
                   passData={elem}
                   addCount={setCount}
                   />
                )
              })
              }

              <div id="button_wrapper">
                <Button
                  type="submit"
                  size="large"
                  variant="contained">
                  Upload Evidence
                </Button>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
