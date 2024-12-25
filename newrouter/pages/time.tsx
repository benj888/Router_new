import { NoSsr } from "@mui/material";
import dayjs from "dayjs";



const Time=()=>{
    console.log(dayjs().format("YYYY-MM-DD HH.mm.ss"))
    return(
        <>
        <div>{dayjs().format("YYYY-MM-DD HH.mm.ss")}</div>
        <div>{dayjs().valueOf()}</div>
        <div>{dayjs().format("MM-DD")}</div>
        <div>{dayjs().startOf("D").format("YYYY-MM-DD HH.mm.ss")}</div>
        <div>{dayjs().endOf("D").format("YYYY-MM-DD HH.mm.ss")}</div>
        <div>{dayjs().add(5,'year').format("YYYY-MM-DD HH.mm.ss")}</div>
        <div>{dayjs().subtract(5,'year').format("YYYY-MM-DD HH.mm.ss")}</div>
        <div>{dayjs("2000/06/04", "YYYY/MM/DD").valueOf()}</div>
        </>
    )
}
export default ()=>{
return(
    <NoSsr><Time/></NoSsr>
)
}