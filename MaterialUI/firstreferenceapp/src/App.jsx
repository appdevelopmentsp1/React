import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const MySpecialityBox = props => {
  return (
    <Box>
      label: {props.label}
      {props.children}    
    </Box>
  )
}

const MyStyledButton = styled(Button)({
  color: "red",
  backgroundColor: "blue",
  borderRadius: 10,
  padding:8
})

const MyNewStyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding:8
}))

const BlueClass = {color: "red",
  backgroundColor: "blue",
  borderRadius: 10,
  padding:8}

  const MyReusableComponent = props => {
    return (
      <Button sx={{color: props.color, bgcolor: props.color == "#FFF" ? "#000": "blue"}}>
        {props.children}
      </Button>
    )
  }


function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
      <h1>Hello World</h1>
    {/*<Button onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}
    {/*<Button component="a" variant="contained">My Button</Button>*/}
    {/* console.log prints to browser console and not to vscode debug console */} 
    {/* <Button sx={{bgcolor: "green"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}

{/*Here BG color is the shorhand of css property background-color.  For other sx shorthands for css properties refer to https://mui.com/system/properties/ */}
    {/*<MySpecialityBox label="Speciality Box"><Button sx={{bgcolor: "green",color: "black"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button></MySpecialityBox>*/}

{/* Here secondary color from theme.palatte.secondary.main is applied.  This will work even when ThemeProvider tag is applied around <App /> in main.jsx 
m is the shortcut of margin css property and 50 will translate to 50 pixels*/}
    {/*<Button sx={{color: "secondary", bgcolor: "purple", m: 50}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}

{/* instead of seatting font weight, font size, font etc, we can specify a certain theme property.  And all the properties under a the specifi theme will be applied
like below, where we have specified that all the setting under theme.typography.h2 to be applied. */}
    {/* <Button sx={{bgcolor: "purple", typography: "h2"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button> */}

{/* properties from themes can also be applied diretly like below.  eg how theme.typography.h1.fontSize is applied .similar color can be given as warning.main to apply 
from theme.palette.warning.main ]]*/}
    {/* <Button sx={{bgcolor: "purple", fontSize: "h1.fontSize"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button> */}

{/* theme can also be accessed as a syntax as below using anonymos funtion. */}
    {/* <Button sx={{
      bgcolor: (theme) => theme.palette.secondary.main, 
      fontSize: "1rem"
      }} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* value that we have given for borderRadius will be multipliled by the value in theme.shape.borderRadius which is 4 by default. so if we give 2 the final value will be 2x4=8 pixels 
if we want exact values we have to specify the property in pixels or rem or em*/}
{/* <Button sx={{
      bgcolor: (theme) => theme.palette.secondary.main, 
      fontSize: "1rem",
      borderRadius:2
      }} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* theme property can be bought to outside and then access using the below syntax also.  the spread operator ... spreads the properties from the speified theme. */}
{/* <Button sx={(theme) => ({
  ...theme.typography.h1,
  ...theme.typography.mycustomproperties,
      bgcolor: theme.palette.secondary.main
      
    })} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* properties can be conditionally applied as below */}
{/* <Button sx={(theme) => ({
  ...theme.typography.h1,
  ...theme.typography.mycustomproperties,
      bgcolor: theme.palette.secondary.main,
      color : open ? "red" : "green",
      maxWidth : open ? "xl" : "md"
      
    })} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      </Button> */}

{/* below is another syntax for the above  */}
{/* <Button sx={[{
      bgcolor: "blue",
      width:1,
      color : "green",
      maxWidth : "md"
      
    },
    open && {
        color: "red",
        maxWidth: "xl"
    }
  
  ]} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      </Button> */}

{/* & stands for the current element. in this case button. > denotes imidiate child having the specified selecter after > 
see how the bgcolor is applied based on screensize speficied in themes.  here is the scren size is less than or equal to xs specified in theme.breakpoint.value.xs
then color will be blue else purple.  reduce window size using mouse to observe this.*/}
{/* <Button sx={[{
      bgcolor: {xs: "blue", sm: "purple"},
      width:1,
      color : "green",
      maxWidth : "md",
"&:hover":{
  bgcolor: "orange"
},
"& > P, H1": {
  color: "black"
}

      
    },
    open && {
        color: "red",
        maxWidth: "xl"
    }
  
  ]} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      <p>My Paragraph</p>
      <h1>H1 Text</h1>
      </Button>  */}

{/* To get the class on the current object we have to use &. as & denotes current object. */}
{/* <Button  disabled variant="contained" sx={{"&.Mui-disabled": {
  bgcolor:"red"
}}}>My Button</Button>  */}

{/* To target the menu items which is contained in Paper under Menu, we have to target & followed space, so that it targets elelment having .Muimenu-paper under current item denoted by & which is <Menu></Menu>
since space is used after & the child element need not be direct decent. If > was used after space the child element should be direct decent. */}
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx = {{
          "& .MuiMenu-paper" : {
            bgcolor: "red"
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

{/* <MyStyledButton>New Styled Button</MyStyledButton>
<MyNewStyledButton>New New Styled Button</MyNewStyledButton>
<MyReusableComponent color="#FFA">My Props Button</MyReusableComponent>
<Button sx={{...BlueClass, bgcolor: "orange"}}>BlueClass Button</Button>
*/}

{/* blueTextClass defined in main.jsx under typography. !!! bgcolor is not taking effect from there.  need to check */}
{/* <Button sx={{typography:"blueTextClass"}}>BlueClass Theme Button</Button> */}
{/* if we apply BGColor like this it is taking effect */}
{/* <Button sx={{typography:"blueTextClass", bgcolor: "pink"}}>BlueClass Theme Button</Button> */}

<Button>Default Button</Button>

    </>
  )
}

export default App
 