import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #223a5f;
  padding: 10px;
  height: 100vh;
`
export const ChooseYourChoice = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Beer Serif';
  align-self: center;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ffffff;
  @media screen and (min-width: 768px) {
    align-self: center;
    width: 50%;
  }
`
export const GameItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`

export const GameItem = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  margin: 5px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  margin-top: 14px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
`

export const Score = styled.p`
  font-family: 'Bree Serif';
  font-size: 26px;
  font-weight: 500;
  color: #223a5f;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const ScoreCount = styled.p`
  font-family: 'Roboto';
  font-size: 50px;
  color: #223a5f;
  font-weight: 800;
  text-align: center;
  margin-top: 2px;
  margin-bottom: 0px;
  padding: 0px;
`
export const GameButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 40px;
  padding-left: 0px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BothPlayersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Player = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 10px;
`

export const ChoiceImage = styled.img`
  height: 150px;
`

export const GameResult = styled.p`
font-family:"Roboto;"
font-size:30px;
font-weight:600;
color:#ffffff;
margin-top:10px;
margin-bottom:10px;`

export const PlayAgainButton = styled.button`
  font-family: 'Bree Serif';
  font-size: 16px;
  color: #223a5f;
  background-color: #ffffff;
  font-weight: 500;
  height: 40px;
  width: 180px;
  border: none;
  border-radius: 10px;
  margin-bottom: 40px;
`

export const RulesButton = styled(PlayAgainButton)`
  width: 80px;
  align-self: flex-end;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
`
export const RulesImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  @media (min-width: 768px) {
    width: 60%;
    height: 600px;
    border-radius: 14px;
    align-self: center;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 20px;
  color: #223a5f;
  padding: auto;
  background-color: transparent;
  border-width: 0px;
`

export const RulesImage = styled.img`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    border-radius: 15px;
  }
`
