
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { buscaCategorias } from '../../features/slices/categoriasSlice'
import { FormControl } from '@mui/base/FormControl'

function Recurso() {
  const categorias = useSelector(state => state.categorias)
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(buscaCategorias())
   
    
   
  }, [])


    return (
        <>
          <div id="novo-recurso" > 
          <ul>
            { categorias &&
              categorias.list.data.map((item) => {
                return (
                  <li>{item.nome}</li>
                )
              })
            }
          </ul>
       
             
              
             
          </div>
        </>
    )
}

export default Recurso