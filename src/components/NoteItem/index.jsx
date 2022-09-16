import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi'

export function NoteItem({ isNew = false, value, onClick, ...rest }) {

  return (
    <Container
      isNew={isNew}
    >

      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
       />

      <button 
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>

    </Container>
  )
}