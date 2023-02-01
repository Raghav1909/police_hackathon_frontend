import React, {useEffect, useState} from "react";
import "./login.module.scss"
import {Box, Button, Checkbox, Chip, Dialog, Fab, Input, TextField} from "@mui/material";
import * as PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faCross, faMagnifyingGlass, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

function AccountCircle(props) {
    return null;
}
const sample_data = ["here","ijaois","fsd","fokmvm","pooiwer","heree","he2re","hegre","he1re","hebre",]
const Login=()=>{
    const [currentParamsState, setCurrentParamState] = useState(["here","ijaois"])
    const [modalState1, setModalState1] = useState(false);
    return <div>
        {/*search dropdown*/}
        <div style={{display:"inline"}}>
            <b>Search:</b>&nbsp;&nbsp;
               <Input
                 id="standard-adornment-amount"
                 placeholder={"Names, id, etc"}
                 startAdornment={<FontAwesomeIcon icon={faMagnifyingGlass} style={{marginRight:"10px"}}/>}
            />
        </div>
        &nbsp;
        &nbsp;
        &nbsp;
    {/*    Icons dropdown*/}
        <div style={{display:"inline"}}>
            <b>params: </b>
            <Button variant="contained" style={{fontSize:"10px"}} size={"small"}
                    fullWidth={false} onClick={()=>setModalState1(true)}>
                <FontAwesomeIcon icon={faPlus} fontSize={17}/>
            </Button>
            {
                currentParamsState.map((cpvls)=>{
                    return <Chip style={{
                        margin:"0 5px"
                    }} label={cpvls} variant="outlined" onDelete={async()=>{
                        console.log("jasiodjoias")
                        setCurrentParamState(state=>{
                            let ret_val=state.filter((chips)=>chips!==cpvls);
                            console.log(ret_val)
                            return state
                        })
                    }}></Chip>
                })
            }
            <Dialog open={modalState1} >
                <div style={{
                    padding:"15px",
                    height:"60vh",
                }}>
                    <Box width={"450px"} style={{display:"flex",flexWrap:"wrap"}}>
                        <Box display={"flex"} position={"absolute"} right={12}><FontAwesomeIcon icon={faCircleXmark} color={"red"} fontSize={20} onClick={()=>{
                            setModalState1(false)
                        }
                        }/></Box>
                        <div>
                            {
                                sample_data.map((val,index)=>{
                                    return <Fab variant="extended" size={"small"} style={{
                                        margin:"10px 6px",
                                    }}>
                                        <Checkbox size={"small"}
                                                  defaultChecked={currentParamsState.includes(val)}
                                                  onClick={(e)=>{
                                                      console.log(e.target.checked)
                                                      if (e.target.checked) {
                                                          setCurrentParamState(state=>{
                                                              state.push(val);
                                                              return state
                                                          });
                                                      } else {
                                                          setCurrentParamState(state=>{
                                                              state.splice(state.indexOf(val),1);
                                                              return state
                                                          })
                                                      }
                                                  }}
                                        />
                                        <p>{val}</p>
                                        &nbsp;
                                        &nbsp;
                                    </Fab>
                                })
                            }
                        </div>
                    </Box>
                    {/*<span style={{maxWidth:"100%",marginTop:"10px"}}>Note: Increasing number of selections leads to higher time to load the results.</span>*/}
                    <Box justifyContent={"center"} display={"flex"} alignItems={"center"} position={"absolute"} bottom={"10px"}>
                        <b>Add new search paramters </b>&nbsp;&nbsp;
                        <Button size={"small"} variant={"contained"} disabled={false} onClick={()=>{
                            setModalState1(false);
                        }
                        }>Add</Button>
                        {/*&nbsp;&nbsp;<p>({currentParamsState && currentParamsState.length })</p>*/}
                    </Box>
                </div>
            </Dialog>
        </div>
        <div>
            <b>Filters:&nbsp;</b>
        </div>
    </div>
}
export default Login
