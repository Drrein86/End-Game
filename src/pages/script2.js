import React, { useId, useState, useEffect } from "react";
import { script } from "../components/mockdata";
import { pageBackground, textPage, Button,StyledError, GlobalStyle,sharedStyles, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton,StyledFieldset
} from "./pagesStyle";



function Script2({ handleClick }) {
  const [scriptForm, setScriptForm] = useState(null);
  const [error, setError] = useState('');
  
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
  <>
    <GlobalStyle />
    <StyledFormWrapper> {scriptForm &&
      <StyledForm onSubmit={handleClick}>
        <h1>ההזמנה שלכם </h1><h3>דף 2 מתוך 3</h3>
        <br/>
        <label htmlFor="name">הוספת טקסט להודעת </label>
        <StyledInput
         name="name"
         type="text"
         value={scriptForm.name}
         onChange={handleChange}
        />
         <label htmlFor="date">בחר\י תאריך</label>
        <StyledInput
          type="text"
          name="date"
          value={scriptForm.date}
          onChange={handleChange}
        />
        <label htmlFor="clock">בחר שעה</label>
        <StyledInput
          type="clock"
          name="clock"
          value={scriptForm.clock}
          onChange={handleChange}
        />
         <label htmlFor="nameLoction">בחר\י אולם</label>
        <StyledInput
          type="text"
          name="nameLoction"
          value={scriptForm.nameLoction}
          onChange={handleChange}
        />
        <label htmlFor="adress">מה הכתובת של האולם?</label>
        <StyledInput
          type="text"
          name="adress"
          value={scriptForm.adress}
          onChange={handleChange}
        /> 
        
        <StyledFieldset>
          <legend>?האם להוסיף לינק לניווט</legend>
          <StyledInput
           
              type="checkbox"
              name="isNav"
            value={scriptForm.isNav}
            onChange={handleChange}
            />
        
        </StyledFieldset>
        <label htmlFor="message">האם תרצו להוסיף הודעה כללית (לא חובה)</label>
        <StyledTextArea
          name="message"
          value={scriptForm.message}
          onChange={handleChange}
        />
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <StyledButton type="submit">אישור</StyledButton>
      </StyledForm>
}</StyledFormWrapper>
  </>
);
}

export default Script2;

{/* <div>
{scriptForm && (
  <div><BoxContainer><FormContainer>
    <h1>דף ההזמנה שלכם</h1>
    <h4>זה הזמן לצאת</h4>
    <h3>הודעת פתיחה</h3>
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
); */}
