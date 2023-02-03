import React, {useEffect, useState} from "react";
import PiChart from "../assets/Chart.png"
import style from "./chartCreator.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink, faLink} from "@fortawesome/free-solid-svg-icons";
import {Button, TextField} from "@mui/material";
import {CustomFilter} from "@/pages/dashboard";
import {ChromePicker} from "react-color";
import {HexColorPicker} from "react-colorful";
import HeatMapTS from "../assets/HeatMapTS.svg"
import Highcharts from "highcharts"
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

export const ChartCreator=()=>{
    const [selColor, setSelColor] = useState("#aabbcc");
    useEffect(()=>{
    },[])
    return <div>
        <p  className={style.header}>Currently saved visuals !</p>
        <div className={style.indiCol}>
            <img src={PiChart.src} width={"80px"} height={"80px"}/>
            <div style={{textAlign:"right"}} className={style.named}>
                <h3>Offense List 22-23</h3>
                <p style={{width:"250px"}}>This here is the visual chart representing
                    the Citizen data between 2022-23</p>
                <p style={{color:"blue"}}>Open <FontAwesomeIcon icon={faExternalLink}/></p>
            </div>
        </div>
        <p  className={style.header}>Create new visuals!</p>
        <div className={style.mainChartSec}>
        <div className={style.chartDiv}>
            <div className={style.chartCreateMain}>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <label>Name the visual instance:</label>
                    <TextField
                        label="Chart Name"
                        id="filled-size-small"
                        defaultValue=""
                        variant="filled"
                        size="small"
                    />
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"20px"}}>
                    <label>Select the type of Graph to visualize:</label>
                    <CustomFilter/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"20px"}}>
                    <label>write a detailed description of the
                        visual:</label>
                    <textarea/>
                </div>
                <div style={{display:"flex",gap:"160px",marginTop:"30px"}}>
                    <div>axis orientation: <input type={"checkbox"}/></div>
                    <div>choose color scheme: <b style={{color:selColor}}>{selColor}</b><HexColorPicker color={selColor} onChange={setSelColor}/></div>
                </div>
                <div>
                    <p style={{marginTop:"30px"}}>selected database: <i><b>chronicled_district_data_db1</b></i></p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"40px",marginTop:"20px"}}>
                    <div><label>x-axis data: </label>
                        <CustomFilter/></div>
                    <div><label>y-axis data: </label>
                        <CustomFilter/></div>
                </div>
                <Button variant={"contained"}>generate</Button>
            </div>
            <img src={HeatMapTS.src}/>
        </div>
            <div>test</div>
        </div>
    </div>
}
export default ChartCreator
