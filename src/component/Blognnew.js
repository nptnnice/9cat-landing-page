import React from 'react'
import Coming from '../assets/images/comingsoon.png'
import { Center } from '@chakra-ui/react'

export default () =>
{
    return (
        <div className="blognnews">
            <Center>

                <img src={Coming} alt="Coming Soon" />
            </Center>
        </div>
    )
}