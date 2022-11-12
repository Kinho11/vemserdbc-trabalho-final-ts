import image from '../../assets/error-404.png'
import { NotFoundContainer } from './NotFound.styled'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <div>
          <h1>Página não encontrada</h1>
          <img src={image} alt="404 Github" width={350} />
          <Link to={'/'}><button><i><BiArrowBack /></i></button></Link>
        </div>
      </NotFoundContainer>
    </>
  )
}

export default NotFound