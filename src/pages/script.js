import React, { useId, useState, useEffect } from "react";
import { script } from "../components/mockdata";
import {BoxContainer, FormContainer} from "../components/accountBox/common";

function Script({ handleClick }) {
  const [scriptForm, setScriptForm] = useState(null);

  const id = useId();
  useEffect(() => {
    setScriptForm({
      name: script.firstMsg.location.name,
      adress: script.firstMsg.location.adress,
      isMap: script.firstMsg.location.isMap,
      isNav: script.firstMsg.location.isNav,

      msg: script.firstMsg.msg,
      ifApproved: script.ifApproved,
      ifDeclined: script.ifDeclined,
      ifNotClear: script.ifNotClear,
      ifUpdateReq: script.ifUpdateReq,
    });
    console.log(scriptForm);
  }, []);

  const handleChange = (e) => {
    setScriptForm(prev=>{
        return{...prev,[e.target.name]:e.target.value}
    })

    console.log("changed");
  };

  

  return (
    <div>
      {scriptForm && (
        <div><BoxContainer><FormContainer>
          <h1>דף ההזמנה שלכם</h1>
          <h6>זה הזמן לצאת המקופסא</h6>
          <h4>הודעת פתיחה</h4>
          <input
           name="msg"
           type={"text"}
            value={scriptForm.msg}
            onChange={handleChange}
          ></input>
          <h2>שם המקום</h2>
          <input
          name="name"
            type="text"
            value={scriptForm.name}
            onChange={handleChange}
          ></input>
          <h2>כתובת</h2>
          <input
name="adress"
            key={`2${id}`}
            type="text"
            value={scriptForm.adress}
            onChange={handleChange}
          />
         <div>
            <h4>מפה</h4>
          <input
          name="isMap"
            key={`1${id}`}
            type="checkbox"
            value={scriptForm.isMap}
            onChange={handleChange}
          />
          </div>
          <div >
            <h4>כפתור ניווט</h4>
          <input
          name="isNav"
            type="checkbox"
            value={scriptForm.isNav}
            onChange={handleChange}
          />
          </ div>
          <h2> אם אושר</h2>
          <input
          name="ifApproved"
            type="text"
            value={scriptForm.ifApproved}
            onChange={handleChange}
          ></input>
         
          <h2>אם לא</h2>
          <input
          name="ifDeclined"
            type="text"
            value={scriptForm.ifDeclined}
            onChange={handleChange}
          ></input>
          <h2>אם לא ברור</h2>
          <input name="ifNotClear"
            type="text"
            value={scriptForm.ifNotClear}
            onChange={handleChange}
          ></input>
          <h2>עדכון מידע</h2>
          <input name="ifNotClear"
            type="text"
            value={scriptForm.ifUpdateReq}
            onChange={handleChange}
          ></input>
          <button name="menu" onClick={handleClick}>
            לתפריט
          </button>{" "}
      
          </FormContainer></BoxContainer></div>
      )}
     </div>
  );
}

export default Script;
