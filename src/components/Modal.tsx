
// import { Container } from './styles';
export const Modal = () => {
  return (
    <>
      <div className="bg-black h-full pt-3 pl-3 w-72  flex flex-col text-white">
        <ul className="justify-center pt-7">
          <li> 
            <a> Shop Now</a>
          </li>
          <li className="pt-3"> 
            <a className=""> New Shop in </a>
          </li>
          <li className="pt-3"> 
            <a>Catalogo</a>
          </li>
          <li className="pt-3"> 
            <a>Masculino</a>
          </li>
          <li className="pt-3">
            <a>Feminino</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Modal;