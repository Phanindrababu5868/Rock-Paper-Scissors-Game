import {ItemButton, ButtonImage} from './StyledComponents'

const GameButtonItem = props => {
  const {gameButtonItem, clickingItemButton} = props
  const {id, imageUrl, testId} = gameButtonItem

  const onClickingItemButton = () => {
    clickingItemButton(id)
  }
  return (
    <li>
      <ItemButton data-testid={testId} onClick={onClickingItemButton}>
        <ButtonImage src={imageUrl} alt={id} />
      </ItemButton>
    </li>
  )
}

export default GameButtonItem
