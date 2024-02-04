import styled from 'styled-components'

export const ChattingRommContainer = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
top: 0px;
left: 0px;
z-index: 99;
width: 100%;
height: 100vh;
background: rgb(178, 199, 217);
`
export const HeaderWrapper = styled.header`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
width: 100%;
background-color: rgb(169, 189, 206);
height: 50px;
`

export const BeforeButton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
line-height: 1.5;
border: none;
font-size: 20px;
padding: 10px 10px 10px 30px;
background-color: rgb(169, 189, 206);
outline: none;
cursor: pointer;


`

export const NicknameSpan = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
line-height: 1.5;
box-sizing: border-box;
display: inline-block;
font-weight: bold;
font-size: 20px;
margin-left: 10px;
margin-top: 10px;
`;

export const BeforeIcon = styled.i`
color: rgb(34, 34, 34);
font-size: 20px;
cursor: pointer;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;


`;

export const Body = styled.body`
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
position: fixed;
top: 0px;
`;

export const ContentWrapper = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: absolute;
inset: 50px 0px 65px;
overflow: auto;
width: 100%;
`;

export const MenuWrapper = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
width: 100%;
`;

export const MenuContainer = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
width: 100%;
display: flex;
`;

export const BaseStyleSideBar = styled.aside`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: fixed;
top: 0px;
left: 0px;
width: 100px;
height: 100%;
min-height: 100vh;
background: rgb(223, 223, 223);
padding-top: 20px;
z-index: 2;
`;

export const BaseStyleMain = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding-left: 100px;
width: 100%;
min-height: 100vh;
`;

export const BaseDiv = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`;

export const ChatRightBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
text-align: right;
margin-top: 10px;
margin-left: 10px;
margin-right: 10px;
`

export const ChatDiv = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
text-align: right;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`;

export const ChatBlockChatWrapper = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
display: inline-block;
padding: 7px 8px;
border-radius: 4px;
margin-bottom: 7px;
box-shadow: rgb(143, 171, 199) 0px 1px 2px 0px;
max-width: 70%;
overflow-wrap: break-word;
white-space: pre-wrap;
background-color: rgb(255, 236, 66);
text-align: left;
`;

export const TimeSpan = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
overflow-wrap: break-word;
white-space: pre-wrap;
box-sizing: border-box;
position: absolute;
display: inline-block;
min-width: 65px;
text-align: right;
bottom: 0px;
left: -70px;
`;

export const ReadCount = styled.span`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
overflow-wrap: break-word;
white-space: pre-wrap;
box-sizing: border-box;
position: absolute;
display: inline-block;
color: rgb(255, 236, 66);
min-width: 30px;
text-align: right;
bottom: 16px;
left: -35px;
`;

export const FooterWrapper = styled.footer`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
width: 100%;
min-height: 50px;
max-height: 200px;
overflow: auto;
padding: 6px;
z-index: 100;
background-color: rgb(238, 238, 238);
`;

export const FooterForm = styled.form`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: relative;
display: flex;
width: 100%;
height: 100%;
`;

export const ChatText = styled.textarea`
box-sizing: border-box;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 100%;
resize: none;
height: 100%;
margin: 0px;
padding: 5px 20px;
`;

export const CannotSubmitButton = styled.button`
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 50px;
height: 40px;
background: rgb(255, 235, 51);
pointer-events: none;
color: rgb(180, 180, 180);
`;

export const CanSubmitButton = styled.button`
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 50px;
height: 40px;
background: rgb(255, 235, 51);
cursor: pointer;
pointer-events: all;
color: rgb(0, 0, 0);
`;

export const LeftChatBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: relative;
margin-top: 10px;
margin-left: 10px;
margin-right: 10px;
padding-left: 50px;
`

export const LeftProfileImg = styled.img`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
border: 0px none;
position: absolute;
top: 3px;
left: 0px;
height: 45px;
width: 45px;
border-radius: 20px;
float: left;
cursor: pointer;
`;

export const LeftNameBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
margin-bottom: 5px;
`;

export const LeftMessageBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`;

export const LeftMessageWrapper = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
display: inline-block;
padding: 7px 8px;
border-radius: 4px;
margin-bottom: 7px;
box-shadow: rgb(143, 171, 199) 0px 1px 2px 0px;
max-width: 70%;
overflow-wrap: break-word;
white-space: pre-wrap;
background-color: rgb(255, 255, 255);
`;

export const LeftTimeSpan = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
overflow-wrap: break-word;
white-space: pre-wrap;
box-sizing: border-box;
position: absolute;
min-width: 65px;
text-align: left;
bottom: 0px;
right: -70px;
`;

export const EnterBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
text-align: center;
width: 100%;
padding: 13px 0px;
`;

export const EnterSpan = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
text-align: center;
box-sizing: border-box;
position: relative;
display: inline-block;
background-color: rgb(178, 199, 217);
padding: 0px 10px;
`