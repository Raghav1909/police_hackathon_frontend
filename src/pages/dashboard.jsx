import React, {useState} from "react";
import style from "./dashboard.module.scss"
import {Box, Button, ButtonGroup, Checkbox, Chip, Dialog, Fab, Input, Pagination} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faCircleXmark, faCodeMerge,
    faMagnifyingGlass,
    faPlus,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

function AccountCircle(props) {
    return null;
}
const sample_data = ["here","ijaois","fsd","fokmvm","pooiwer","heree","he2re","hegre","he1re","hebre",]
const Dashboard=()=>{
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
            <b style={{color:"#8E8E8E"}}>params: </b>
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
        {/*This here is the filter section*/}
        <div style={{display:"flex", alignItems:"center", marginTop:"13.4px", flexWrap:"wrap"}}>
            <p style={{color:"#8E8E8E"}}>Filters:&nbsp;</p>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
            <CustomFilter/>
        </div>
    {/*    combined view parameters: */}
        <div style={{display:"flex", alignItems:"center", marginTop:"9.4px", flexWrap:"wrap"}}>
            <p style={{color:"#8E8E8E"}}>combined view parameters:&nbsp;</p>
            <Button variant="outlined" size={"small"} endIcon={<FontAwesomeIcon icon={faXmark} style={{height:"10px"}}/>} style={{
                marginRight:"13px"
            }}>
                valid_id | valid_id_details
            </Button>
            <Button variant="outlined" size={"small"} endIcon={<FontAwesomeIcon icon={faXmark} style={{height:"10px"}}/>} style={{
                marginRight:"13px"
            }}>
                valid_id | valid_id_details
            </Button>
            <p>+ add new parameters</p>
        </div>
        <div style={{display:"flex", alignItems:"center",gap:"37px",marginTop:"17px"}}>

            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>select page:&nbsp;</p>
                <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>rows per page:&nbsp;</p>
                <RowCountComp/>
            </div>
            <div style={{display:"flex", alignItems:"center",  flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>merge direction:&nbsp;&nbsp;</p>
                <ButtonGroup size={"small"} variant="outlined" color={"secondary"} aria-label="outlined button group">
                    <Button>Left</Button>
                    <Button>Full</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </div>
            <p style={{color:"#8E8E8E"}}>excise (database 1)&nbsp;&nbsp;<FontAwesomeIcon icon={faCodeMerge}/>&nbsp;&nbsp;home guard (database 2)</p>

        </div>



    </div>
}
export const CustomFilter=()=>{
    const test_vals = ['test','test','test','test','test','test','test','test','test','test']
    const [toggleOpen,setToggleOpen]=useState(false);
    return <div
            style={{display:"flex",
                alignItems:'center',
                border: '1.03535px solid #C4C4C4',
                borderRadius: '3.10604px',
                position:"relative",
                marginBottom:"7px",
                marginRight:"19px"
            }}>
        <p style={{margin:"0 7.2px"}}><b >place_of_origin: </b>Bengaluru</p>
        <div className={style.drop_down} style={{background:"#FAFAFA",padding:"5px",borderRadius: '3.10604px'}} onClick={()=> {
            setToggleOpen(state=>!state)
        }
        }>
            <FontAwesomeIcon icon={!toggleOpen?faAngleDown:faAngleUp}/>
        </div>
    {/*    this here is for the drop-down*/}
        {toggleOpen && <div style={{
            width: "100%",
            maxHeight: "200px",
            position: "absolute",
            background: '#ffffff',
            top: "32px",
            border: '1.03535px solid #C4C4C4',
            borderRadius: '3.10604px',
            boxShadow: "0px 3.54973px 5.3246px rgba(0, 0, 0, 0.25)",
            overflow:"scroll",
            zIndex:1
        }}>
            {
                test_vals.map((vls, index) => {
                    return <div
                        className={style.drop_opt}
                        style={{
                            background: index == 3 ? "#6C85AB" : "",
                            borderRadius: "2.6623px",
                            height: "max-content",
                            margin: "3px 3.5px",
                            padding: "3px 0",
                        }}
                    ><p style={{marginLeft: "5px", color: index == 3 ? "#ffffff" : "#000000"}}>{vls}</p></div>
                })
            }
        </div>}
    </div>
}

export const RowCountComp=()=>{
    const test_vals = [1,2,3,4,5,6,7]
    const [toggleOpen,setToggleOpen]=useState(false);
    return <div
        style={{display:"flex",
            alignItems:'center',
            border: '1.03535px solid #C4C4C4',
            borderRadius: '3.10604px',
            position:"relative",
            margin:"3.5px 13px 3.5px 0"
        }}>
        <p style={{margin:"0 7.2px"}}>10</p>
        <div className={style.drop_down} style={{background:"#FAFAFA",padding:"5px",borderRadius: '3.10604px'}} onClick={()=> {
            setToggleOpen(state=>!state)
        }
        }>
            <FontAwesomeIcon icon={!toggleOpen?faAngleDown:faAngleUp}/>
        </div>
        {/*    this here is for the drop down*/}
        {toggleOpen && <div style={{
            width: "100%",
            maxHeight: "200px",
            position: "absolute",
            background: '#ffffff',
            top: "32px",
            border: '1.03535px solid #C4C4C4',
            borderRadius: '3.10604px',
            boxShadow: "0px 3.54973px 5.3246px rgba(0, 0, 0, 0.25)",
            overflow:"scroll",
            zIndex:1
        }}>
            {
                test_vals.map((vls, index) => {
                    return <div
                        className={style.drop_opt}
                        style={{
                            background: index == 3 ? "#6C85AB" : "",
                            borderRadius: "2.6623px",
                            height: "max-content",
                            margin: "3px 3.5px",
                            padding: "3px 0",
                        }}
                    ><p style={{marginLeft: "5px", color: index == 3 ? "#ffffff" : "#000000"}}>{vls}</p></div>
                })
            }
        </div>}
    </div>
}

export default Dashboard
