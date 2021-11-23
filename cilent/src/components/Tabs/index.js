import React,{useState} from 'react'
import Tabs from "./Tabs"
import { TabLabels } from './constant'

const TabComponent = () => {
    const[activeTabs,setActiveTabs]=useState(TabLabels.CANCEL_AT_ANY_TIME);

    const onClickTab=(tab)=>{
        setActiveTabs(tab)
    }
    return (
        <div>
            <Tabs activeTabName={activeTabs} onClickTab={onClickTab}/>
        </div>
    )
}

export default TabComponent

