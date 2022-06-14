import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect( () => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            
            const searchExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search) 
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchExercises);
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography 
                fontWeight={700}
                sx= {{
                    fontSize:{lg:'44px', xs:'30px'}
                }}
                mb="50px"
                textAlign="center"
            >
                Awesome Exercises You <br /> 
                Should Know
            </Typography>
            <Box
                position="relative"
                mb="72px"
            >
                <TextField 
                    sx= {{
                        input: { 
                            fontWeight:'700px',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {lg: '900px', xs: '330px'}
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className='search-btn'
                    sx={{ 
                        bgcolor: '#FF2625',
                        color: '#fff', 
                        textTransform: 'none', 
                        width: { lg: '165px', xs: '78px' }, 
                        height: '55px', 
                        position: 'absolute', 
                        right: '0px', 
                        fontSize: { lg: '20px', xs: '14px' } 
                    }} 
                    onClick ={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative', width:'100%', p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} 
                bodyPart = {bodyPart} setBodyPart={setBodyPart}  
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises