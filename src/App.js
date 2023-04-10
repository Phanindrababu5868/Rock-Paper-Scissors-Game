import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameButtonItem from './components/GameButtonItem/index'

import './App.css'

import {
  AppContainer,
  CardContainer,
  GameItemsContainer,
  GameItem,
  ScoreContainer,
  Score,
  ScoreCount,
  GameButtonsList,
  ResultsContainer,
  BothPlayersContainer,
  PlayerContainer,
  Player,
  ChoiceImage,
  GameResult,
  PlayAgainButton,
  RulesImageContainer,
  RulesImage,
  RulesButton,
  CloseButton,
  ChooseYourChoice,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class App extends Component {
  state = {
    scoreCount: 0,
    playerChoice: '',
    opponentChoice: '',
    gameResult: '',
    gamePlayed: false,
  }

  clickingItemButton = id => {
    const randomChoice = Math.random() * choicesList.length
    const opponentChoice = choicesList[Math.floor(randomChoice)].id
    this.setState(
      {playerChoice: id, opponentChoice, gamePlayed: true},
      this.gameWinner,
    )
  }

  gameWinner = () => {
    const {playerChoice, opponentChoice, ameResult} = this.state

    if (playerChoice === opponentChoice) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (playerChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount + 1,
          gameResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount - 1,
          gameResult: 'YOU LOSE',
        }))
      }
    } else if (playerChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount + 1,
          gameResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount - 1,
          gameResult: 'YOU LOSE',
        }))
      }
    } else if (playerChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount + 1,
          gameResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount - 1,
          gameResult: 'YOU LOSE',
        }))
      }
    }
  }

  renderResults = () => {
    const {playerChoice, opponentChoice, gameResult} = this.state
    const playerChoiceItem = choicesList.filter(
      each => each.id === playerChoice,
    )
    const opponentChoiceITem = choicesList.filter(
      each => each.id === opponentChoice,
    )

    return (
      <ResultsContainer>
        <BothPlayersContainer>
          <PlayerContainer>
            <Player>YOU</Player>
            <ChoiceImage src={playerChoiceItem[0].imageUrl} alt="your choice" />
          </PlayerContainer>
          <PlayerContainer>
            <Player>OPPONENT</Player>
            <ChoiceImage
              src={opponentChoiceITem[0].imageUrl}
              alt="opponent choice"
            />
          </PlayerContainer>
        </BothPlayersContainer>
        <GameResult>{gameResult}</GameResult>
        <PlayAgainButton type="button" onClick={this.onClickingPlayAgain}>
          Play Again
        </PlayAgainButton>
      </ResultsContainer>
    )
  }

  onClickingPlayAgain = () => {
    this.setState({gamePlayed: false})
  }

  reactPopup = () => (
    <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
      {close => (
        <RulesImageContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>

          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesImageContainer>
      )}
    </Popup>
  )

  render() {
    const {
      scoreCount,
      gamePlayed,
      gameResult,
      playerChoice,
      opponentChoice,
    } = this.state
    console.log(playerChoice)
    console.log(opponentChoice)
    console.log(gameResult)
    return (
      <AppContainer>
        <CardContainer>
          <GameItemsContainer>
            <GameItem>
              ROCK <br />
              PAPER
              <br /> SCISSORS
            </GameItem>
          </GameItemsContainer>
          <ScoreContainer>
            <Score>Score</Score>
            <ScoreCount>{scoreCount}</ScoreCount>
          </ScoreContainer>
        </CardContainer>
        {gamePlayed ? (
          this.renderResults()
        ) : (
          <>
            <ChooseYourChoice>Choose your Choice</ChooseYourChoice>
            <GameButtonsList>
              {choicesList.map(each => (
                <GameButtonItem
                  key={each.id}
                  gameButtonItem={each}
                  clickingItemButton={this.clickingItemButton}
                />
              ))}
            </GameButtonsList>
          </>
        )}
        {this.reactPopup()}
      </AppContainer>
    )
  }
}

export default App
