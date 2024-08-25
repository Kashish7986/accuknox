import * as React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './cssfile/top.css';
import SyncIcon from '@mui/icons-material/Sync';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SelectTextFields from "./Dropdown";
import MultipleSelectPlaceholder from './Dropmenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// import SquareCorners from './Paper';
import TemporaryDrawer from './TemporaryDrawer';
// import Drawer from '@mui/material/Drawer';
 import { useState,useEffect } from 'react';
//  import card from './Card';
//  import SquareCorners from './Paper';
import Cards from './Cards';




const SearchBox = styled('div')(({ theme }) => ({
    border: '1px solid blue',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    display: 'flex',
    // alignItems: 'center',
    // justifyContent:'center',
    width: '50%',
    marginLeft: '246px',

    backgroundColor: "#ebebeb",
    margin: 'auto',
    marginLeft: '245px',
    height: '11px',

    '&:hover': {
        backgroundColor: "#ebebeb",
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginLeft: '3px',
    height: '24px',
    paddingRight: '10px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '30%',
    height: "8px",
    backgroundColor: "#ebebeb",
    '&:hover': {
        backgroundColor: "#ebebeb",
        width: '40%'
    },


}));

function SearchBar() {
    const [options,setOptions] = useState([
        { id: 1, label: 'Cloud Accounts' },
        { id: 2, label: 'Cloud Accounts Risk Assessment' },
        { id: 3, label: 'widget 3' },
        { id: 4, label: 'Option 4' },
        { id: 5, label: 'Option 5' },
      ]);
//   const [isChecked, setIsChecked] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem('selectedOptions')) || options.map((option) => option.id));
  const [newOption, setNewOption] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    const storedOptions = localStorage.getItem('options');
        if (storedOptions) {
        try {
            const parsedOptions = JSON.parse(storedOptions);
            console.log('Parsed options:', parsedOptions);
            setOptions(parsedOptions);
          } catch (error) {
            console.error('Error parsing stored options:', error);
          }  
    
    }

}, []);



useEffect(() => {
    localStorage.setItem('data', JSON.stringify({ options, selectedOptions }));
  }, [options, selectedOptions]);


    const [searchTerm, setSearchTerm]=useState('');
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm.length > 0) {
          setIsListOpen(true);
        } else {
          setIsListOpen(false);
        }
      };

      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setSearchTerm(option.label);
        setIsListOpen(false);
      };

    //   const handleSearchBarClick = () => {
    //     setIsListOpen(true);
    //   };
    //   const handleListClose = () => {
    //     setIsListOpen(false);
    //   };
      const filteredOptions = options.filter((option) => {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

    // const onSearch=()=>{
    //     const input =document.querySelector("#search");
    //     const filter= input.value.toUpperCase();
    //     const List=document.querySelectorAll("#list li");
    //     list.forEach((el) =>{
    //             const text=el.textContent.toUpperCase();
    //             el.style.display=text.includes(filter)?"":"none";
    //     })
    // }

    return (<>
    <div className='container1'>        <div className="Header" >
            <p >Home</p>
            <p> > </p>
            <p className='bolder'> Dashboard</p>
            <div className='textboxes'>
                          <div className='textbox'>
                <div className='searching,search-bar'
                // onClick={handleSearchBarClick}
                >
                
                    <SearchIcon style={{ position: 'absolute', marginTop: '3px', marginLeft: '3px' }} />

                    <input type='search' className='searchtext' placeholder='Search Anywhere...'
                     value={searchTerm} onChange={handleSearch} 
                     /></div>
                     {isListOpen && (
                        <ul id="list" className='list' style={{margin:'0px'}}>
                          {filteredOptions.map((option) => (
                            <li key={option.id} onClick={() => handleOptionSelect(option)} style={{marginLeft:'19px'}}>
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      )}
            

                <input className='inputb' type='text' />
                <KeyboardArrowDownIcon />
            </div>

            <div className="icon">

                <div className='icon1'> <NotificationsNoneIcon /></div>
                <div className='icon2'>   <AccountCircleOutlinedIcon />
                </div>
            </div>
        </div>
        </div>
        <div className='action'>
            <div className='btngrp'>     <TemporaryDrawer />   
            
      
                    {/* <button style={{width:'133px',height:'auto'}}  >Add Widget + </button> */}
             <div className='buttons' >   <button style={{backgroundColor:'white',borderRadius:'8px',border:'none',height:'33px'}}><SyncIcon /></button></div>
             <div className='buttons'> <button style={{backgroundColor:'white',borderRadius:'8px',border:'none',height:'33px'}}><MoreVertIcon /></button></div>
                <MultipleSelectPlaceholder style={{ backgroundColor: "white", marginTop: '3px', height:'10px' }} /></div>


               

            


             
            <div className='heading'>
                <h3 style={{marginLeft:'-17px'}}>CNAPP Dashboard</h3>
                 <h5 style={{  margin: '-17px 642px 19px 5px' }}> CSPM Executive Dashboard</h5> </div></div>
                 {/* <MultiActionAreaCard/> */}
                 </div>          
                 
       
       <div className='card1' >
        {/* <SquareCorners /> */}
        <Cards/>
        </div>
       

    </>
    );
}

export default SearchBar;
// export {SlidingPanel};