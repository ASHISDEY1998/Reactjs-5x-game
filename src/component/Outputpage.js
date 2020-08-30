import React from "react";
import '../App.css';

export default function Outputpage(props) {
  let currentcount=0;
  let gameEnd=false;
    let currentId=0;

  let highlight = (e) => {
    let td = e.target;
    if (td.style.backgroundColor !== "red") {
        currentcount++;
      td.style.backgroundColor = "red";
      if ((currentcount > (Number(props.matrix) * 5)) && !gameEnd){ 
            gameEnd=true
          alert("GAME ENDS!")
          window.location.reload();
          while(currentId>0){
              clearTimeout(currentId)
              currentId--;
          }
        }
        else{
            currentId=setTimeout(() => {
                td.style.backgroundColor = "white";
                currentcount--;
            },3000);
        }
    }
  };
  return (
    <table className="Maintable">
      <tbody>
        {Array(Number(props.matrix))
          .fill(null)
          .map((_, id) => (
            <tr key={id}>
              {Array(Number(props.matrix))
                .fill(null)
                .map((_, id) => (
                  <td
                    key={id}
                    onMouseOver={(event) => {
                      highlight(event);
                    }}
                  ></td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
