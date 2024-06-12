import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { IconButton, Typography } from '@mui/material';
// import {DeleteForever} from '@mui/icons-material/';
import DeleteIcon from '@mui/icons-material/Delete';
export default function ExerciseCard({name, index, handleDelete}) {
  return (
    <div>
        <Card elevation={3}>
            <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(name)}>
                        <DeleteIcon/>
                    </IconButton>
                }
                title={"Name :"+name}
                subheader={name+" is a good exercise"}
            />
            <CardContent>
                <Typography variant='button' color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto voluptatem, id, suscipit blanditiis esse aliquam 
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
 }
