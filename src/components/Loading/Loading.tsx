import styled from "styled-components";


const Loading = () => {
    const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  left: 48%;

  &:before{
    content: "Fighing...";
  }
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    background: #9925ea;
    width: 0;
    height:0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

    return <div>

        <Loading style={{ display: 'flex',
            flexWrap:'wrap',
            marginTop:'-50px',
            position:"absolute"
        }}/>
    </div>
}

export default Loading