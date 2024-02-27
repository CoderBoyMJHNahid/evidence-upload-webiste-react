import React, { useState } from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const SelectList = ({id,passData,addCount,deleteCount}) => {


    const [studentVal,setStudentVal] = useState(passData.student_val);

    const [visitable,setVisitable] = useState("block");


    // Set up date and time 
    
    const [dateTime, setDateTime] = useState(dayjs(passData.date_time));

    const cloneEvent =()=>{
      const newData ={
          student_val:studentVal,
          date_time:dateTime
        };
      addCount((pre)=>{
          return [
            ...pre,
            newData
          ]
      })
    }

  return (
    <>
        <div className="form_input_wrapper" style={{display:visitable}}>
              <div className="icon_wrapper">
              <FileCopyIcon style={{
                color:"grey",
                width:"40px",
                cursor:"pointer"
              }}
              onClick={cloneEvent}
              />
              <DeleteIcon style={{
                color:"grey",
                width:"40px",
                cursor:"pointer"
              }}
              onClick={()=>setVisitable("none")}
              />
              </div>

              <div className="select_wrapper">
                {/* student select input */}
                <FormControl sx={{ m: 1, minWidth: 450 }}>
                  <InputLabel id="select-student-label">Student</InputLabel>
                  <Select
                    labelId="select-student-label"
                    id="select-student"
                    label="Student"
                    value={studentVal}
                    onChange={(e)=> setStudentVal(e.target.value)}
                  >
                    <MenuItem value="Woody Allen - Year 10">Woody Allen - Year 10</MenuItem>
                    <MenuItem value="Gillian Anderson - Year 10">Gillian Anderson - Year 10</MenuItem>
                    <MenuItem value="Pamela Anderson - Year 6">Pamela Anderson - Year 6</MenuItem>
                    <MenuItem value="Jennifer Anniston - Year 7">Jennifer Anniston - Year 7</MenuItem>
                  </Select>
                </FormControl>

                {/* date picker input */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                      value={dateTime}
                      onChange={(val) => setDateTime(val)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

        </div>
                
    </>
  )
}

export default SelectList;
