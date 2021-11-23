import React,{useState,useEffect} from 'react'
import "./ScrollTop.css"

const ScrollTop = () => {
    const [isVisible,setIsVisible] = useState(false)
    const toggleVisibility = ()=>
    {
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility);

        return () => {
            window.removeEventListener("scroll",toggleVisibility);
        }
    },[])
    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollTop}>
                    <i class="fas fa-arrow-circle-up fa-3x"></i>
                </div>
            )}
        </div>
    )
}

export default ScrollTop
