
import styled from "styled-components";
export const Form_ = styled.form`
min-width: 600px;
  margin-top: 50px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
div {
  margin-bottom: 20px;
}
label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 5px;
  color: #1f1f1f;
}
input{
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #e2e2e2;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 5px;
  color: #1f1f1f;
}
input:focus {
  outline: none;
  border: 2px solid #0085FF;
}
.error {
  color: #e92b2d;
  font-weight: 600;
  font-size: 12px;
}
button:hover {
  background: #0051ff;
}
.exito {
  text-align: center;
  font-size: 14px;
  padding-top: 20px;
  color: #02a802;
}
input[type="radio"] {
  width: auto;
}
`
