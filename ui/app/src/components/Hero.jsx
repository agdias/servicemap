import { Input, 
         InputGroup,
         InputRightElement} from '@chakra-ui/react'
import { 
  SearchIcon,
} from '@chakra-ui/icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Hero() {
  
  
    return(
        <>
         <header>
           <div>Logo</div>
           <div className="search">
              <InputGroup>
                <InputRightElement 
                  pointerEvents='none'
                >
                  <SearchIcon color='gray.300' />
                </InputRightElement>
              </InputGroup>
            
              <Input  />
            </div>
            <div className="toolbox">
                <div>
                  <ShoppingCartIcon />
                </div>
            </div>
           
         </header>
        </>
    )
}

export default Hero;