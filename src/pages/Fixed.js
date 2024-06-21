import React from 'react'
import { Card } from 'react-bootstrap'
export default function Fixed({sr}) {
  return (
    <div>
        <Card className='fixed' variant='body'>
            <img src={sr}/>

        </Card>
    </div>
  )
}
