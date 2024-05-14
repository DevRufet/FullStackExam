import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
 
export const MainContext=createContext()
function MainProvider({children}) {
    const [basket, setbasket] = useLocalStorage("Value",[])
    function add(item){
    const index=basket.findIndex((x)=>x._id===item._id)
        
        if(index!==-1){
           basket[index].count++
           setbasket([...basket])
        }
        else{
            setbasket([...basket,{...item,count:1}])
        }
    }
    function decrease(item){
        const index=basket.findIndex((x)=>x._id===item._id)
            const element=basket[index]
            if(element.count>1){
               basket[index].count--
               setbasket([...basket])
            }
        }
    function deleted(item){
        setbasket(basket.filter((x)=>x._id!==item._id))
    }
  return (
  <>
  <MainContext.Provider value={{basket,add,deleted,decrease}}>

      {children}
  </MainContext.Provider>
  
  </>
  )
}

export default MainProvider