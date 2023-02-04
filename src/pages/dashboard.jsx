import React, {useState} from "react";
import style from "./dashboard.module.scss"
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Chip,
    Dialog,
    Fab,
    Input,
    InputLabel,
    MenuItem,
    FormControl,
    Pagination
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FingerPrintData from "../assets/finger_print_test.png"
import {
    faAngleDoubleLeft, faAngleDoubleRight,
    faAngleDown,
    faAngleUp, faChevronRight,
    faCircleXmark, faCodeMerge, faDownload,
    faMagnifyingGlass,
    faPlus,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import {DataGrid} from "@mui/x-data-grid";
import {Select} from "@mui/material";
import {ListItemIcon, ListItemText} from "@mui/material";
import MultiSelectDrop from "../../components/MultiSelectDrop";
function AccountCircle(props) {
    return null;
}
const sample_data = ["here","ijaois","fsd","fokmvm","pooiwer","heree","he2re","hegre","he1re","hebre",]
const Dashboard=()=>{
    const [currentParamsState, setCurrentParamState] = useState(["here","ijaois"])
    const [modalState1, setModalState1] = useState(false);
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            width: 300
        },
        indeterminateColor: {
            color: "#f50057"
        },
        selectAllText: {
            fontWeight: 500
        },
        selectedAll: {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)"
            }
        }
    }));
    const demi_data = [
        {
            name:"State",
            value:["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]
        },
        {
            name:"District_Name",
            value:["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]
        },
        {
            name:"PS_Name",
            value:["Amaravati","Anantapur","Chilakaluripet","Chittoor","Gooty","Guntakal","Guntur","Kadapa","Kakinada","Kurnool","Machilipatnam","Nandyal","Narasaraopet","Nellore","Ongole","Proddatur","Srikakulam","Tadepalligudem","Tadipatri","Tenali","Tirupati","Vijayawada","Visakhapatnam","Vizianagaram","Yemmiganur"],
        },
        {
            name:"Gender",
            value:["M","F"],
        },
        {
            name:"AgeWhileOpening",
            value:["18-25","26-35","36-45","46-55","56-65","66-75","76-85","86-95","96-105","106-115","116-125","126-135","136-145","146-155","156-165","166-175","176-185","186-195","196-205","206-215","216-225","226-235","236-245","246-255","256-265","266-275","276-285","286-295","296-305","306-315","316-325","326-335","336-345","346-355","356-365","366-375","376-385","386-395","396-405","406-415","416-425","426-435","436-445","446-455","456-465","466-475","476-485","486-495","496-505","506-515","516-525","526-535","536-545","546-555","556-565","566-575","576-585","586-595","596-605","606-615","616-625","626-635","636-645","646-655","656-665","666-675","676-685","686-695","696-705","706-715","716-725","726-735","736-745","746-755","756-765","766-775","776-785","786-795","796-805","806-815","816-825","826-835","836-845","846-855","856-865","866-875","876-885","886-895","896-905","906-915","916-925","926-935","936-945","946-955","956-965","966-975","976-985","986-995","996-1005","1006-1015","1016-1025","1026-1035","1036-1045","1046-1055","1056-1065","1066-1075","1076-1085","1086-1095","1096-1105","1106-1115","1116-1125","1126-1135","1136-1145","1146-1155","1156-1165","1166-1175"],
        },
        {
            name:"Age",
            value:["18-25","26-35","36-45","46-55","56-65","66-75","76-85","86-95","96-105","106-115","116-125","126-135","136-145","146-155","156-165","166-175","176-185","186-195","196-205","206-215","216-225","226-235","236-245","246-255","256-265","266-275","276-285","286-295","296-305","306-315","316-325","326-335","336-345","346-355","356-365","366-375","376-385","386-395","396-405","406-415","416-425","426-435","436-445","446-455","456-465","466-475","476-485","486-495","496-505","506-515","516-525","526-535","536-545","546-555","556-565","566-575","576-585","586-595","596-605","606-615","616-625","626-635","636-645","646-655","656-665","666-675","676-685","686-695","696-705","706-715","716-725","726-735","736-745","746-755","756-765","766-775","776-785","786-795","796-805","806-815","816-825","826-835","836-845","846-855","856-865","866-875","876-885","886-895","896-905","906-915","916-925","926-935","936-945","946-955","956-965","966-975","976-985","986-995","996-1005","1006-1015","1016-1025","1026-1035","1036-1045","1046-1055","1056-1065","1066-1075","1076-1085","1086-1095","1096-1105","1106-1115","1116-1125","1126-1135","1136-1145","1146-1155","1156-1165","1166-1175"]
        }
    ]
    const classes = useStyles();
    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }
        setSelected(value);
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    ];
    const rows2 = [
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    ];

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
            {/*<b style={{color:"#8E8E8E"}}>params: </b>*/}
            {/*<Button variant="contained" style={{fontSize:"10px"}} size={"small"}*/}
            {/*        fullWidth={false} onClick={()=>setModalState1(true)}>*/}
            {/*    <FontAwesomeIcon icon={faPlus} fontSize={17}/>*/}
            {/*</Button>*/}
            {/*{*/}
            {/*    currentParamsState.map((cpvls)=>{*/}
            {/*        return <Chip style={{*/}
            {/*            margin:"0 5px"*/}
            {/*        }} label={cpvls} variant="outlined" onDelete={async()=>{*/}
            {/*            console.log("jasiodjoias")*/}
            {/*            setCurrentParamState(state=>{*/}
            {/*                let ret_val=state.filter((chips)=>chips!==cpvls);*/}
            {/*                console.log(ret_val)*/}
            {/*                return state*/}
            {/*            })*/}
            {/*        }}></Chip>*/}
            {/*    })*/}
            {/*}*/}
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
            {
                demi_data.map((vls,index)=>{
                    return <MultiSelectDrop labelled_name={vls.name} options={vls.value}/>
                })
            }
        </div>
    {/*    combined view parameters: */}
    {/*    <div style={{display:"flex", alignItems:"center", marginTop:"9.4px", flexWrap:"wrap"}}>*/}
    {/*        <p style={{color:"#8E8E8E"}}>combined view parameters:&nbsp;</p>*/}
    {/*        <Button variant="outlined" size={"small"} endIcon={<FontAwesomeIcon icon={faXmark} style={{height:"10px"}}/>} style={{*/}
    {/*            marginRight:"13px"*/}
    {/*        }}>*/}
    {/*            valid_id | valid_id_details*/}
    {/*        </Button>*/}
    {/*        <Button variant="outlined" size={"small"} endIcon={<FontAwesomeIcon icon={faXmark} style={{height:"10px"}}/>} style={{*/}
    {/*            marginRight:"13px"*/}
    {/*        }}>*/}
    {/*            valid_id | valid_id_details*/}
    {/*        </Button>*/}
    {/*        <p>+ add new parameters</p>*/}
    {/*    </div>*/}
        <h2 style={{
            margin:"10px"
        }}>Finger Print Data Analysis</h2>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            width:"1300px"
        }}>
            <div>
                <img src={FingerPrintData.src} style={{
                    width:"180px"
                }}/>
            </div>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
            }}>
                <p
                    style={{
                        fontSize:"45px",
                        fontWeight:"900",
                        color:"green"
                    }}
                >90%</p>
                <p
                style={{
                    fontSize:"35px",
                    color:"green"
                }}
                >Match</p>
                <div style={{
                    display:"flex",
                    gap:"10px",
                    alignItems:"center",
                    marginTop:"10px"
                }}>
                    <p style={{color:"#8E8E8E"}}>Download:</p>
                    <div
                        style={{
                            width:"30px",
                            height:"30px",
                            background:"lightgrey",
                            borderRadius:"7px",
                            justifyContent:"center",
                            display:"flex",
                            alignItems:"center",
                            color:"#ffffff"
                        }}
                    ><FontAwesomeIcon icon={faDownload}/></div>
                </div>
            </div>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
            <div>
                <div style={{ height: "350px",width: "600px" }}>
                    <DataGrid
                        rows={rows2}
                        columns={columns}
                        pageSize={15}
                        rowsPerPageOptions={[10]}
                        page={0}
                        style={{
                            width:"400px"}
                        }
                    />
                </div>
            </div>
        </div>
        <h2 style={{
            margin:"10px"
        }}>Karnataka State Data</h2>
        <div style={{display:"flex", alignItems:"center",gap:"37px",marginTop:"17px"}}>

            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>select page:&nbsp;</p>
                <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>rows per page:&nbsp;</p>
                <RowCountComp/>
            </div>
            <div style={{
                display:"flex",
                alignItems:"center",
                gap:"4px"
            }}>
                <p style={{color:"#8E8E8E"}}>PDF:</p>
                <div
                style={{
                    width:"30px",
                    height:"30px",
                    background:"lightgrey",
                    borderRadius:"7px",
                    justifyContent:"center",
                    display:"flex",
                    alignItems:"center",
                    color:"#ffffff"
                }}
                ><FontAwesomeIcon icon={faDownload}/></div>
            </div>
            <div style={{display:"flex", alignItems:"center",  flexWrap:"wrap"}}>
                {/*<p style={{color:"#8E8E8E"}}>merge direction:&nbsp;&nbsp;</p>*/}
                {/*<ButtonGroup size={"small"} variant="outlined" color={"secondary"} aria-label="outlined button group">*/}
                {/*    <Button>Left</Button>*/}
                {/*    <Button>Full</Button>*/}
                {/*    <Button>right</Button>*/}
                {/*</ButtonGroup>*/}
            </div>
            <p style={{color:"#8E8E8E"}}>excise (database 1)&nbsp;&nbsp;<FontAwesomeIcon icon={faCodeMerge}/>&nbsp;&nbsp;home guard (database 2)</p>

        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        {/*added MUI library*/}
        <div style={{ height: "350px",width: "600px" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[10]}
                page={0}
                checkboxSelection
                style={{
            width:"1100px"}
                }
            />
        </div>
        <h2 style={{
            margin:"10px"
        }}>ICJS DataBase</h2>
        <div style={{display:"flex", alignItems:"center",gap:"37px",marginTop:"17px"}}>
            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>select page:&nbsp;</p>
                <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
            <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <p style={{color:"#8E8E8E"}}>rows per page:&nbsp;</p>
                <RowCountComp/>
            </div>
            <div style={{
                display:"flex",
                alignItems:"center",
                gap:"4px"
            }}>
                <p style={{color:"#8E8E8E"}}>PDF:</p>
                <div
                    style={{
                        width:"30px",
                        height:"30px",
                        background:"lightgrey",
                        borderRadius:"7px",
                        justifyContent:"center",
                        display:"flex",
                        alignItems:"center",
                        color:"#ffffff"
                    }}
                ><FontAwesomeIcon icon={faDownload}/></div>
            </div>
            <div style={{display:"flex", alignItems:"center",  flexWrap:"wrap"}}>
                {/*<p style={{color:"#8E8E8E"}}>merge direction:&nbsp;&nbsp;</p>*/}
                {/*<ButtonGroup size={"small"} variant="outlined" color={"secondary"} aria-label="outlined button group">*/}
                {/*    <Button>Left</Button>*/}
                {/*    <Button>Full</Button>*/}
                {/*    <Button>right</Button>*/}
                {/*</ButtonGroup>*/}
            </div>
            <p style={{color:"#8E8E8E"}}>excise (database 1)&nbsp;&nbsp;<FontAwesomeIcon icon={faCodeMerge}/>&nbsp;&nbsp;home guard (database 2)</p>

        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        {/*added MUI library*/}
        <div style={{ height: "350px", maxWidth: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[10]}
                page={0}
                checkboxSelection
                style={{
            width:"1100px"}
                }
            />
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
